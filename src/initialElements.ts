import { type Node, type Edge } from "@xyflow/react";
// @ts-expect-error - JS file without type declarations
import { MINDMAP_DATA } from "../mindmap-data.js";

// Функция для определения, должен ли узел быть развернут изначально
function shouldBeExpanded(nodeId: string): boolean {
  // Разворачиваем ТОЛЬКО root узел
  const rootId = MINDMAP_DATA.meta.rootId;
  return nodeId === rootId;
}

// Конвертируем данные из mindmap-data.js в формат React Flow с expand/collapse
export const nodes: Node[] = MINDMAP_DATA.nodes.map((node: any) => ({
  id: node.id,
  type: "mindmap", // используем кастомный тип узла
  data: {
    ...node.data,
    expanded: shouldBeExpanded(node.id),
    expandable: false, // будет установлено в useExpandCollapse
  },
  position: { x: 0, y: 0 }, // позиции будут вычислены автоматически
  style: node.style || {},
}));

export const edges: Edge[] = MINDMAP_DATA.edges.map((edge: any) => ({
  id: edge.id,
  source: edge.source,
  target: edge.target,
}));
