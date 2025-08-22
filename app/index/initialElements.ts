import { type Node, type Edge } from "@xyflow/react";
// @ts-expect-error - JS file without type declarations
import { MINDMAP_DATA } from "../../public/mindmap-data.js";
import { getNodeLevel } from "../../features/utils/utils";
import { MindmapData } from "../../features/utils/types";

// Функция для определения, должен ли узел быть развернут изначально
function shouldBeExpanded(nodeId: string): boolean {
  // Разворачиваем ТОЛЬКО root узел
  const rootId = MINDMAP_DATA.meta.rootId;
  return nodeId === rootId;
}

const DATA = MINDMAP_DATA as MindmapData;

// Конвертируем данные из mindmap-data.js в формат React Flow с expand/collapse
export const nodes: Node[] = DATA.nodes.map((node) => {
  // Вычисляем уровень для каждого узла
  const level = getNodeLevel(node.id, MINDMAP_DATA.nodes, MINDMAP_DATA.edges);

  return {
    id: node.id,
    type: "mindmap", // используем кастомный тип узла
    data: {
      ...node.data,
      expanded: shouldBeExpanded(node.id),
      expandable: false, // будет установлено в useMindmapCollapse
      level: level, // добавляем уровень в данные
    },
    position: { x: 0, y: 0 }, // позиции будут вычислены автоматически
    style: {
      ...node.style,
      opacity: 1, // начальная прозрачность
    },
  };
});

export const edges: Edge[] = DATA.edges.map((edge) => ({
  id: edge.id,
  source: edge.source,
  target: edge.target,
}));
