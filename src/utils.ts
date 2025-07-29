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

// порядок тот же, что в ручной палитре:
// синий → зеленый → фиолет → оранж → розовый
const BASE_HUES = [225, 115, 275, 30, 340]; // градусы на цветовом круге (HSL)
const LEVELS_PER_CLUSTER = 1; // 0‑2, 3‑5, 6‑8 …

// Функция для получения цвета уровня
export function getLevelColor(level: number) {
  // 1) какой «кластер» (синий, зеленый …)
  const cluster = Math.floor(level / LEVELS_PER_CLUSTER);
  const hue = BASE_HUES[cluster] ?? BASE_HUES.at(-1)!; // запас для 15+

  // 2) яркость‑контраст внутри кластера
  const idx = level % LEVELS_PER_CLUSTER; // 0 / 1 / 2
  const lightness = [45, 45, 40][idx]; // светлее‑светлее‑темнее
  const saturation = 70; // можноTweaks

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
