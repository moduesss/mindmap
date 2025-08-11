import { Position, Node, Edge } from "@xyflow/react";
import { Direction, ColorScheme } from "./types";

export function getSourceHandlePosition(direction: Direction): Position {
  switch (direction) {
    case "TB":
      return Position.Bottom;
    case "BT":
      return Position.Top;
    case "LR":
      return Position.Right;
    case "RL":
      return Position.Left;
  }
}

export function getTargetHandlePosition(direction: Direction): Position {
  switch (direction) {
    case "TB":
      return Position.Top;
    case "BT":
      return Position.Bottom;
    case "LR":
      return Position.Left;
    case "RL":
      return Position.Right;
  }
}

export function getId(): string {
  return `${Date.now()}`;
}

// Цветовая схема для разных уровней mindmap
const BASE_HUES = [225, 115, 275, 30, 340]; // синий → зеленый → фиолет → оранж → розовый
const LEVELS_PER_CLUSTER = 1;

// Функция для получения цвета уровня
export function getLevelColor(level: number): ColorScheme {
  const cluster = Math.floor(level / LEVELS_PER_CLUSTER);
  const hue = BASE_HUES[cluster] ?? BASE_HUES.at(-1)!;

  const idx = level % LEVELS_PER_CLUSTER;
  const lightness = [45, 45, 40][idx] || 45;
  const saturation = 70;

  const bg = `hsl(${hue}deg ${saturation}% ${lightness}%)`;

  return {
    background: bg,
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  };
}

// Кэш для уровней узлов
const levelCache = new Map<string, number>();
let lastNodesHash = "";
let lastEdgesHash = "";

// Функция для создания хеша массивов
function createHash(items: { id: string }[]): string {
  return items
    .map((item) => item.id)
    .sort()
    .join("|");
}

// Функция для определения уровня ноды
export function getNodeLevel(nodeId: string, nodes: Node[], edges: Edge[]): number {
  // Создаем хеши для проверки изменений
  const nodesHash = createHash(nodes);
  const edgesHash = createHash(edges);
  const currentHash = `${nodesHash}|${edgesHash}`;

  // Если данные изменились, очищаем кэш
  if (currentHash !== `${lastNodesHash}|${lastEdgesHash}`) {
    levelCache.clear();
    lastNodesHash = nodesHash;
    lastEdgesHash = edgesHash;
  }

  // Если уровень уже в кэше, возвращаем его
  if (levelCache.has(nodeId)) {
    return levelCache.get(nodeId)!;
  }

  // Создаем карту родителей
  const parentMap = new Map<string, string>();
  edges.forEach((edge) => {
    parentMap.set(edge.target, edge.source);
  });

  // Функция для вычисления уровня
  function calculateLevel(nodeId: string): number {
    if (nodeId === "root") return 0;

    const parentId = parentMap.get(nodeId);
    if (!parentId) return 0;

    return calculateLevel(parentId) + 1;
  }

  // Вычисляем уровень для всех узлов и кэшируем
  const level = calculateLevel(nodeId);
  levelCache.set(nodeId, level);

  return level;
}

// Функция для преобразования данных в формат React Flow
export function transformMindmapData(data: any): { nodes: Node[]; edges: Edge[] } {
  // Функция для определения, должен ли узел быть развернут изначально
  function shouldBeExpanded(nodeId: string): boolean {
    const rootId = data.meta?.rootId || "root";
    return nodeId === rootId;
  }

  // Преобразуем узлы
  const nodes: Node[] = data.nodes.map((node: any) => {
    const level = getNodeLevel(node.id, data.nodes, data.edges);

    return {
      id: node.id,
      type: "mindmap",
      data: {
        ...node.data,
        expanded: shouldBeExpanded(node.id),
        expandable: false, // будет установлено в useMindmapCollapse
        level: level,
      },
      position: { x: 0, y: 0 }, // позиции будут вычислены автоматически
      style: {
        ...node.style,
        opacity: 1,
      },
    };
  });

  // Преобразуем рёбра
  const edges: Edge[] = data.edges.map((edge: any) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
  }));

  return { nodes, edges };
}
