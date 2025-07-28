import { useMemo } from "react";
import { Node, Edge } from "@xyflow/react";
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
  { direction = "LR", spacing = [300, 100] }: UseMindmapCollapseOptions = {} // Увеличил spacing
): { nodes: Node[]; edges: Edge[] } {
  return useMemo(() => {
    const dagre = new Dagre.graphlib.Graph()
      .setDefaultEdgeLabel(() => ({}))
      .setGraph({
        rankdir: direction,
        nodesep: spacing[1], // вертикальное расстояние между узлами
        ranksep: spacing[0], // горизонтальное расстояние между уровнями
      });

    // Добавляем узлы в граф
    for (const node of nodes) {
      dagre.setNode(node.id, {
        width: 250, // увеличил ширину
        height: 80, // увеличил высоту
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

    return {
      nodes: nodes.flatMap((node) => {
        if (!dagre.hasNode(node.id)) return [];

        const { x, y } = dagre.node(node.id);
        const position = {
          x: x - 125, // центрируем по новой ширине (250/2)
          y: y - 40, // центрируем по новой высоте (80/2)
        };

        const data = { ...node.data };
        return [{ ...node, position, data }];
      }),
      edges: edges.filter((edge) => dagre.hasNode(edge.source) && dagre.hasNode(edge.target)),
    };
  }, [nodes, edges, direction, spacing]);
}

export default useMindmapCollapse;
