import { useMemo, useEffect, useState } from "react";
import { Node, Edge, useReactFlow } from "@xyflow/react";
import { timer } from "d3-timer";
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
  { direction = "LR", spacing = [280, 100] }: UseMindmapCollapseOptions = {}
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

    return nodes.flatMap((node) => {
      if (!dagre.hasNode(node.id)) return [];

      const { x, y } = dagre.node(node.id);
      const position = {
        x: x - 100,
        y: y - 25,
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

    const transitions = targetNodes.map((node) => ({
      id: node.id,
      from: getNode(node.id)?.position ?? node.position,
      to: node.position,
      node,
    }));

    const t = timer((elapsed) => {
      const s = Math.min(elapsed / 400, 1);
      const easeOut = 1 - Math.pow(1 - s, 3);

      const currNodes = transitions.map(({ node, from, to }) => ({
        ...node,
        position: {
          x: from.x + (to.x - from.x) * easeOut,
          y: from.y + (to.y - from.y) * easeOut,
        },
      }));

      setAnimatedNodes(currNodes);

      if (elapsed >= 400) {
        setAnimatedNodes(targetNodes);
        t.stop();
        setTimeout(() => fitView({ duration: 300, padding: 0.1 }), 50);
      }
    });

    return () => t.stop();
  }, [targetNodes, getNode, fitView]);

  return {
    nodes: animatedNodes.length > 0 ? animatedNodes : targetNodes,
    edges: edges.filter(
      (edge) => targetNodes.some((n) => n.id === edge.source) && targetNodes.some((n) => n.id === edge.target)
    ),
  };
}

export default useMindmapCollapse;
