import { useEffect, useRef, useCallback } from "react";
import { useReactFlow, useStore, Node, Edge, ReactFlowState } from "@xyflow/react";
import { timer } from "d3-timer";
import useMindmapCollapse from "./useMindmapCollapse";

const options = { duration: 400 };

// Селектор для отслеживания изменений
const stateSelector = (state: ReactFlowState) => ({
  nodeCount: state.nodeLookup.size,
  nodes: Array.from(state.nodeLookup.values()),
});

function useAnimatedMindmap(
  nodes: Node[],
  edges: Edge[],
  collapseOptions: { direction?: "TB" | "LR" | "BT" | "RL"; spacing?: [number, number] } = {}
) {
  const initial = useRef(true);
  const { getNode, setNodes, fitView } = useReactFlow();

  // Получаем текущее состояние для отслеживания изменений
  useStore(stateSelector);

  // Получаем целевые позиции из collapse hook
  const { nodes: targetNodes, edges: visibleEdges } = useMindmapCollapse(nodes, edges, collapseOptions);

  // Функция анимации
  const animateToPositions = useCallback(
    (targetNodes: Node[]) => {
      const transitions = targetNodes.map((node) => ({
        id: node.id,
        from: getNode(node.id)?.position || node.position,
        to: node.position,
        node,
      }));

      const t = timer((elapsed: number) => {
        const s = Math.min(elapsed / options.duration, 1);

        // Используем ease-out функцию для более плавной анимации
        const easeOut = 1 - Math.pow(1 - s, 3);

        const currNodes = transitions.map(({ node, from, to }) => ({
          ...node,
          position: {
            x: from.x + (to.x - from.x) * easeOut,
            y: from.y + (to.y - from.y) * easeOut,
          },
        }));

        setNodes(currNodes);

        if (elapsed >= options.duration) {
          // Финальная установка позиций
          setNodes(targetNodes);
          t.stop();

          // Центрируем view после анимации
          if (!initial.current) {
            fitView({ duration: 300, padding: 0.1 });
          }
          initial.current = false;
        }
      });

      return () => t.stop();
    },
    [getNode, setNodes, fitView]
  );

  // Запускаем анимацию при изменении nodes
  useEffect(() => {
    if (targetNodes.length === 0) return;

    const cleanup = animateToPositions(targetNodes);
    return cleanup;
  }, [targetNodes, animateToPositions]);

  return {
    nodes: targetNodes,
    edges: visibleEdges,
  };
}

export default useAnimatedMindmap;
