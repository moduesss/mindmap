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

// Цветовая схема для разных уровней вложенности
export const LEVEL_COLORS = {
  0: {
    // Root level
    background: "#2c3e50",
    border: "#34495e",
    text: "#ffffff",
    button: "#3498db",
    buttonHover: "#2980b9",
  },
  1: {
    // Level 1
    background: "#34495e",
    border: "#2c3e50",
    text: "#ffffff",
    button: "#e74c3c",
    buttonHover: "#c0392b",
  },
  2: {
    // Level 2
    background: "#e74c3c",
    border: "#c0392b",
    text: "#ffffff",
    button: "#f39c12",
    buttonHover: "#e67e22",
  },
  3: {
    // Level 3
    background: "#f39c12",
    border: "#e67e22",
    text: "#ffffff",
    button: "#27ae60",
    buttonHover: "#229954",
  },
  4: {
    // Level 4
    background: "#27ae60",
    border: "#229954",
    text: "#ffffff",
    button: "#9b59b6",
    buttonHover: "#8e44ad",
  },
  5: {
    // Level 5+
    background: "#9b59b6",
    border: "#8e44ad",
    text: "#ffffff",
    button: "#1abc9c",
    buttonHover: "#16a085",
  },
};

// Функция для определения уровня ноды
export function getNodeLevel(nodeId: string, nodes: Node[], edges: Edge[]): number {
  if (nodeId === "root") return 0;

  const visited = new Set<string>();
  const levelMap = new Map<string, number>();

  // Создаем карту родителей
  const parentMap = new Map<string, string>();
  edges.forEach((edge) => {
    parentMap.set(edge.target, edge.source);
  });

  function calculateLevel(nodeId: string): number {
    if (visited.has(nodeId)) {
      return levelMap.get(nodeId) || 0;
    }

    visited.add(nodeId);

    const parentId = parentMap.get(nodeId);
    if (!parentId) {
      levelMap.set(nodeId, 0);
      return 0;
    }

    const parentLevel = calculateLevel(parentId);
    const currentLevel = parentLevel + 1;
    levelMap.set(nodeId, currentLevel);
    return currentLevel;
  }

  return calculateLevel(nodeId);
}

// Функция для получения цвета уровня
export function getLevelColor(level: number) {
  const maxLevel = Math.max(...Object.keys(LEVEL_COLORS).map(Number));
  const actualLevel = Math.min(level, maxLevel);
  return LEVEL_COLORS[actualLevel as keyof typeof LEVEL_COLORS] || LEVEL_COLORS[maxLevel];
}
