import { useMemo, useEffect, useState } from "react";
import { Node, Edge, useReactFlow } from "@xyflow/react";
import Dagre from "@dagrejs/dagre";

export type UseMindmapCollapseOptions = {
  direction?: "TB" | "LR" | "BT" | "RL";
  spacing?: [number, number];
};

function filterCollapsedChildren(dagre: Dagre.graphlib.Graph, node: Node) {
  const children = dagre.successors(node.id) as unknown as string[] | undefined;

  // Обновляем expandable флаг
  node.data.expandable = !!children?.length;

  // Если узел свернут, удаляем всех его детей из графа
  if (!node.data.expanded) {
    while (children?.length) {
      const child = children.pop()!;
      children.push(...(dagre.successors(child) as unknown as string[]));
      dagre.removeNode(child);
    }
  }
}

function useMindmapCollapse(
  nodes: Node[],
  edges: Edge[],
  { direction = "LR", spacing = [250, 80] }: UseMindmapCollapseOptions = {}
): { nodes: Node[]; edges: Edge[] } {
  const { getNode, fitView } = useReactFlow();
  const [animatedNodes, setAnimatedNodes] = useState<Node[]>([]);

  // Вычисляем целевые позиции
  const targetNodes = useMemo(() => {
    const dagre = new Dagre.graphlib.Graph()
      .setDefaultEdgeLabel(() => ({}))
      .setGraph({
        rankdir: direction,
        nodesep: spacing[1],
        ranksep: spacing[0],
        marginx: 20,
        marginy: 20,
      });

    // Добавляем узлы в граф
    for (const node of nodes) {
      dagre.setNode(node.id, {
        width: 200,
        height: 50,
        data: node.data,
      });
    }

    // Добавляем edges
    for (const edge of edges) {
      dagre.setEdge(edge.source, edge.target);
    }

    // Фильтруем свернутые узлы
    for (const node of nodes) {
      filterCollapsedChildren(dagre, node);
    }

    // Запускаем layout
    Dagre.layout(dagre);

    // Находим корневой узел для стабилизации позиции
    const rootNode = nodes.find((n) => n.id === "root");
    let rootOffset = { x: 0, y: 0 };

    if (rootNode && dagre.hasNode("root")) {
      const rootDagrePos = dagre.node("root");
      rootOffset = {
        x: -rootDagrePos.x,
        y: -rootDagrePos.y,
      };
    }

    return nodes.flatMap((node) => {
      if (!dagre.hasNode(node.id)) return [];

      const { x, y } = dagre.node(node.id);

      // Применяем смещение относительно корня + центрирование узла
      const position = {
        x: x + rootOffset.x - 100, // центрируем узел (200/2)
        y: y + rootOffset.y - 25, // центрируем узел (50/2)
      };

      const data = { ...node.data };
      return [{ ...node, position, data }];
    });
  }, [nodes, edges, direction, spacing]);

  // Анимация к целевым позициям
  useEffect(() => {
    if (targetNodes.length === 0) {
      setAnimatedNodes([]);
      return;
    }

    // Создаем карту родителей для определения откуда анимировать новые узлы
    const parentMap = new Map<string, string>();
    edges.forEach((edge) => {
      parentMap.set(edge.target, edge.source);
    });

    const transitions = targetNodes.map((node) => {
      const existingNode = getNode(node.id);

      let fromPosition;
      if (existingNode) {
        // Существующий узел - анимируем от текущей позиции
        fromPosition = existingNode.position;
      } else {
        // Новый узел - анимируем от позиции родителя
        const parentId = parentMap.get(node.id);
        const parentNode = parentId ? getNode(parentId) : null;
        fromPosition = parentNode ? parentNode.position : node.position;
      }

      return {
        id: node.id,
        from: fromPosition,
        to: node.position,
        node: {
          ...node,
          style: {
            ...node.style,
            opacity: existingNode ? 1 : 0, // Новые узлы начинают с прозрачности 0
          },
        },
        isNew: !existingNode,
      };
    });

    const duration = 400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out функция
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currNodes = transitions.map(({ node, from, to, isNew }) => ({
        ...node,
        position: {
          x: from.x + (to.x - from.x) * easeOut,
          y: from.y + (to.y - from.y) * easeOut,
        },
        style: {
          ...node.style,
          opacity: isNew ? easeOut : 1, // Анимируем прозрачность для новых узлов
        },
      }));

      setAnimatedNodes(currNodes);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Финальное состояние - убираем style чтобы не перебивать CSS
        const finalNodes = targetNodes.map((node) => ({
          ...node,
          style: { ...node.style, opacity: 1 },
        }));
        setAnimatedNodes(finalNodes);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNodes, getNode, edges]);

  return {
    nodes: animatedNodes.length > 0 ? animatedNodes : targetNodes,
    edges: edges.filter(
      (edge) => targetNodes.some((n) => n.id === edge.source) && targetNodes.some((n) => n.id === edge.target)
    ),
  };
}

export default useMindmapCollapse;
