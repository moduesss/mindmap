import { useMemo, useEffect, useState, useRef } from "react";
import { Node, Edge, useReactFlow } from "@xyflow/react";
import Dagre from "@dagrejs/dagre";

export type UseMindmapCollapseOptions = {
  direction?: "TB" | "LR" | "BT" | "RL";
  spacing?: [number, number];
};

function filterCollapsedChildren(dagre: Dagre.graphlib.Graph, node: Node) {
  const children = dagre.successors(node.id) as unknown as string[] | undefined;

  node.data.expandable = !!children?.length;

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
  const { getNode } = useReactFlow();
  const [animatedNodes, setAnimatedNodes] = useState<Node[]>([]);
  const [animatedEdges, setAnimatedEdges] = useState<Edge[]>([]);
  const previousTargetNodesRef = useRef<Node[]>([]);

  // Вычисляем целевые позиции и edges
  const { targetNodes, targetEdges } = useMemo(() => {
    const dagre = new Dagre.graphlib.Graph()
      .setDefaultEdgeLabel(() => ({}))
      .setGraph({
        rankdir: direction,
        nodesep: spacing[1],
        ranksep: spacing[0],
        marginx: 20,
        marginy: 20,
      });

    for (const node of nodes) {
      dagre.setNode(node.id, {
        width: 200,
        height: 50,
        data: node.data,
      });
    }

    for (const edge of edges) {
      dagre.setEdge(edge.source, edge.target);
    }

    for (const node of nodes) {
      filterCollapsedChildren(dagre, node);
    }

    Dagre.layout(dagre);

    const rootNode = nodes.find((n) => n.id === "root");
    let rootOffset = { x: 0, y: 0 };

    if (rootNode && dagre.hasNode("root")) {
      const rootDagrePos = dagre.node("root");
      rootOffset = {
        x: -rootDagrePos.x,
        y: -rootDagrePos.y,
      };
    }

    // Получаем только те узлы, которые остались в Dagre графе
    const validNodes = nodes.flatMap((node) => {
      if (!dagre.hasNode(node.id)) return [];

      const { x, y } = dagre.node(node.id);
      const position = {
        x: x + rootOffset.x - 100,
        y: y + rootOffset.y - 25,
      };

      const data = {
        ...node.data,
      };
      return [{ ...node, position, data }];
    });

    // Извлекаем edges из Dagre графа после обработки
    const dagreEdges = dagre.edges().map((edgeObj) => {
      const edgeId = `${edgeObj.v}-${edgeObj.w}`;
      return {
        id: edgeId,
        source: edgeObj.v,
        target: edgeObj.w,
      };
    });

    // Debug removed
    return { targetNodes: validNodes, targetEdges: dagreEdges };
  }, [nodes, edges, direction, spacing]);

  // Анимация к целевым позициям
  useEffect(() => {
    const previousTargetNodes = previousTargetNodesRef.current;

    if (previousTargetNodes.length === 0) {
      setAnimatedNodes(targetNodes);
      setAnimatedEdges(targetEdges);
      previousTargetNodesRef.current = targetNodes;
      return;
    }

    const parentMap = new Map<string, string>();
    targetEdges.forEach((edge) => {
      parentMap.set(edge.target, edge.source);
    });

    const currentIds = new Set(targetNodes.map((n) => n.id));
    const previousIds = new Set(previousTargetNodes.map((n) => n.id));

    const appearingNodes = targetNodes.filter((n) => !previousIds.has(n.id));
    const stayingNodes = targetNodes.filter((n) => previousIds.has(n.id));
    const disappearingNodes = previousTargetNodes.filter((n) => !currentIds.has(n.id));

    // Debug logging removed

    // Если нет изменений узлов, просто обновляем позиции
    if (appearingNodes.length === 0 && disappearingNodes.length === 0) {
      if (stayingNodes.length > 0) {
        animatePositions(stayingNodes, targetNodes, targetEdges);
      } else {
        setAnimatedNodes(targetNodes);
        setAnimatedEdges(targetEdges);
      }
      previousTargetNodesRef.current = targetNodes;
      return;
    }

    // Создаем полный список узлов для анимации (включая исчезающие)
    const allNodesForAnimation = [...targetNodes, ...disappearingNodes];

    // Создаем переходы
    const transitions = [
      ...appearingNodes.map((node) => {
        const parentId = parentMap.get(node.id);
        const parentNode = parentId ? getNode(parentId) || targetNodes.find((n) => n.id === parentId) : null;
        const fromPosition = parentNode ? parentNode.position : node.position;

        return {
          id: node.id,
          from: fromPosition,
          to: node.position,
          node: { ...node, style: { ...node.style, opacity: 0 } },
          type: "appearing" as const,
        };
      }),

      ...stayingNodes.map((node) => ({
        id: node.id,
        from: getNode(node.id)?.position ?? node.position,
        to: node.position,
        node,
        type: "staying" as const,
      })),

      ...disappearingNodes.map((node) => {
        const parentId = parentMap.get(node.id);
        const parentNode = parentId ? getNode(parentId) || targetNodes.find((n) => n.id === parentId) : null;
        const toPosition = parentNode ? parentNode.position : node.position;

        return {
          id: node.id,
          from: getNode(node.id)?.position ?? node.position,
          to: toPosition,
          node: { ...node, style: { ...node.style, opacity: 1 } },
          type: "disappearing" as const,
        };
      }),
    ];

    animateWithDisappearing(transitions, targetNodes, allNodesForAnimation, targetEdges);
    previousTargetNodesRef.current = targetNodes;
  }, [targetNodes, targetEdges, getNode]);

  // Функция анимации позиций (без появления/исчезновения)
  const animatePositions = (nodesToAnimate: Node[], finalNodes: Node[], finalEdges: Edge[]) => {
    const transitions = nodesToAnimate.map((node) => ({
      id: node.id,
      from: getNode(node.id)?.position ?? node.position,
      to: node.position,
      node,
    }));

    const duration = 300;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currNodes = transitions.map(({ node, from, to }) => ({
        ...node,
        position: {
          x: from.x + (to.x - from.x) * easeOut,
          y: from.y + (to.y - from.y) * easeOut,
        },
      }));

      // Создаем анимированные рёбра, которые следуют за анимированными позициями узлов
      const animatedEdges = finalEdges
        .filter((edge) => currNodes.some((n) => n.id === edge.source) && currNodes.some((n) => n.id === edge.target))
        .map((edge) => {
          const sourceNode = currNodes.find((n) => n.id === edge.source);
          const targetNode = currNodes.find((n) => n.id === edge.target);

          if (sourceNode && targetNode) {
            return {
              ...edge,
              source: sourceNode.id,
              target: targetNode.id,
            };
          }
          return edge;
        });

      setAnimatedNodes(currNodes);
      setAnimatedEdges(animatedEdges);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedNodes(finalNodes);
        setAnimatedEdges(targetEdges);
      }
    };

    requestAnimationFrame(animate);
  };

  // Функция анимации с исчезающими узлами
  const animateWithDisappearing = (
    transitions: Array<{
      id: string;
      from: { x: number; y: number };
      to: { x: number; y: number };
      node: Node;
      type: "appearing" | "staying" | "disappearing";
    }>,
    finalNodes: Node[],
    allNodes: Node[],
    allEdges: Edge[]
  ) => {
    // Устанавливаем рёбра для всех узлов (включая исчезающие)
    setAnimatedEdges(
      allEdges.filter(
        (edge) => allNodes.some((n) => n.id === edge.source) && allNodes.some((n) => n.id === edge.target)
      )
    );

    const duration = 400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currNodes = transitions.map(({ node, from, to, type }) => {
        const animatedPosition = {
          x: from.x + (to.x - from.x) * easeOut,
          y: from.y + (to.y - from.y) * easeOut,
        };

        let opacity = 1;
        if (type === "appearing") {
          opacity = easeOut;
        } else if (type === "disappearing") {
          opacity = 1 - easeOut;
        }

        return {
          ...node,
          position: animatedPosition,
          style: {
            ...node.style,
            opacity,
          },
        };
      });

      // Создаем анимированные рёбра, которые следуют за анимированными позициями узлов
      const animatedEdges = allEdges
        .filter((edge) => currNodes.some((n) => n.id === edge.source) && currNodes.some((n) => n.id === edge.target))
        .map((edge) => {
          const sourceNode = currNodes.find((n) => n.id === edge.source);
          const targetNode = currNodes.find((n) => n.id === edge.target);

          if (sourceNode && targetNode) {
            return {
              ...edge,
              source: sourceNode.id,
              target: targetNode.id,
            };
          }
          return edge;
        });

      setAnimatedNodes(currNodes);
      setAnimatedEdges(animatedEdges);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Финальное состояние - только целевые узлы
        setAnimatedNodes(
          finalNodes.map((node) => ({
            ...node,
            style: { ...node.style, opacity: 1 },
          }))
        );
        setAnimatedEdges(targetEdges);
      }
    };

    requestAnimationFrame(animate);
  };

  return {
    nodes: animatedNodes.length > 0 ? animatedNodes : targetNodes,
    edges: animatedEdges.length > 0 ? animatedEdges : targetEdges,
  };
}

export default useMindmapCollapse;
