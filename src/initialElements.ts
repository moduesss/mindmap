import { type Node, type Edge } from "@xyflow/react";
// @ts-expect-error - JS file without type declarations
import { MINDMAP_DATA } from "../mindmap-data.js";

// Конвертируем данные из mindmap-data.js в формат React Flow
export const nodes: Node[] = MINDMAP_DATA.nodes.map((node) => ({
  id: node.id,
  type: node.type || "default",
  data: node.data,
  position: { x: 0, y: 0 }, // позиции будут вычислены автоматически
  style: node.style || {},
}));

export const edges: Edge[] = MINDMAP_DATA.edges.map((edge) => ({
  id: edge.id,
  source: edge.source,
  target: edge.target,
}));
