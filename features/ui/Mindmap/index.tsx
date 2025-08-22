"use client";

import { useCallback, useEffect, useMemo } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  NodeMouseHandler,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  Node,
} from "@xyflow/react";

import MindmapNode from "./MIndmapNode/MindmapNode";
import useMindmapCollapse from "../../hooks/useMindmapCollapse";
import { transformMindmapData } from "../../utils/utils";
import { MindmapProps } from "../../utils/types";

import "@xyflow/react/dist/style.css";
import "../../utils/mindmap.css";

const proOptions = {
  hideAttribution: true,
};

const nodeTypes = {
  mindmap: MindmapNode,
};

function MindmapComponent({
                            data,
                            width = "100%",
                            height = "600px",
                            direction = "LR",
                            spacing = [200, 30],
                            onNodeClick,
                            className = "",
                            style = {},
                          }: MindmapProps) {
  const { fitView } = useReactFlow();

  // Используем useMemo, чтобы не пересоздавать initialNodes/initialEdges при каждом рендере
  const memoizedInitial = useMemo(() => transformMindmapData(data), [data]);
  const [nodes, setNodes, onNodesChange] = useNodesState(memoizedInitial.nodes);
  // @ts-ignore
  const [edges, setEdges, onEdgesChange] = useEdgesState(memoizedInitial.edges);

  // Получаем видимые узлы/рёбра с учётом сворачивания
  const { nodes: visibleNodes, edges: visibleEdges } = useMindmapCollapse(nodes, edges, {
    direction,
    spacing,
  });

  // Обработчик клика для expand/collapse
  const handleNodeClick: NodeMouseHandler = useCallback(
      (_, node) => {
        setNodes((nds) => {
          // заменяем .map() на цикл for для повышения производительности
          const updated: Node[] = [];
          for (let i = 0; i < nds.length; i++) {
            const n = nds[i];
            if (n.id === node.id) {
              updated.push({
                ...n,
                data: { ...n.data, expanded: !((n.data as any).expanded) },
              });
            } else {
              updated.push(n);
            }
          }
          return updated;
        });

        // Вызываем пользовательский обработчик, если он передан
        if (onNodeClick) {
          onNodeClick(node.id, node as Node);
        }
      },
      [setNodes, onNodeClick]
  );

  // Центрируем только при первой загрузке
  useEffect(() => {
    if (visibleNodes.length > 0) {
      fitView({ duration: 500, padding: 0.1 });
    }
  }, [fitView, visibleNodes.length]);

  // Мемоизируем обработчики изменений, чтобы не создавать новые функции на каждом рендере
  const memoOnNodesChange = useCallback(onNodesChange, [onNodesChange]);
  const memoOnEdgesChange = useCallback(onEdgesChange, [onEdgesChange]);

  return (
      <div className={className} style={{ width, height, ...style }}>
        <ReactFlowProvider>
          <ReactFlow
              nodes={visibleNodes}
              edges={visibleEdges}
              onNodesChange={memoOnNodesChange}
              onEdgesChange={memoOnEdgesChange}
              nodeTypes={nodeTypes}
              proOptions={proOptions}
              onNodeClick={handleNodeClick}
          >
            <Background />
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
  );
}

// Экспортируем обёрнутый компонент с ReactFlowProvider
export default function Mindmap(props: MindmapProps) {
  return <MindmapComponent {...props} />;
}

// Экспортируем типы для удобства использования
export type { MindmapProps, MindmapData, MindmapNodeData } from "../../utils/types";