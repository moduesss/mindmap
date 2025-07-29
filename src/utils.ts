import { Position } from "@xyflow/react";
import { Direction } from "./algorithms";
import { Node, Edge } from "@xyflow/react";

export function getSourceHandlePosition(direction: Direction) {
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

export function getTargetHandlePosition(direction: Direction) {
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

export function getId() {
  return `${Date.now()}`;
}

// Dark theme цветовая схема для разных уровней вложенности
export const LEVEL_COLORS = {
  0: {
    // Root level
    background: "#3E60E9",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  1: {
    // Level 1
    background: "#4F73F3",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  2: {
    // Level 2
    background: "#6086FD",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  3: {
    // Level 3
    background: "#35B56A",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  4: {
    // Level 4
    background: "#42C47A",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  5: {
    // Level 5
    background: "#50D28A",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  6: {
    // Level 6
    background: "#7F54E3",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  7: {
    // Level 7
    background: "#9065ED",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  8: {
    // Level 8
    background: "#A176F7",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  9: {
    // Level 9
    background: "#E58B3A",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  10: {
    // Level 10
    background: "#F19B4C",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  11: {
    // Level 11
    background: "#FBAE62",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  12: {
    // Level 12
    background: "#D44570",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  13: {
    // Level 13
    background: "#E25783",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  14: {
    // Level 14
    background: "#EE6B97",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
  15: {
    // Level 15+ (резерв)
    background: "#5B7080",
    border: "#ffffff14",
    text: "#ffffff",
    button: "#ffffff",
    buttonHover: "#f0f0f0",
  },
};

// Кэш для уровней узлов
const levelCache = new Map<string, number>();
let lastNodesHash = "";
let lastEdgesHash = "";

// Функция для создания хеша массивов
function createHash(items: any[]): string {
  return items
    .map((item) => item.id)
    .sort()
    .join("|");
}

// Функция для определения уровня ноды (упрощенная версия)
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

  // Простая функция для вычисления уровня
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

// Функция для получения цвета уровня
export function getLevelColor(level: number) {
  const maxLevel = Math.max(...Object.keys(LEVEL_COLORS).map(Number));
  const actualLevel = Math.min(level, maxLevel);
  return LEVEL_COLORS[actualLevel as keyof typeof LEVEL_COLORS] || LEVEL_COLORS[maxLevel];
}
