"use client";

// TODO:: Отрефакторить под FSD ( https://feature-sliced.design/ru/ )
// Полностью имплементировать не нужно, но нужно разбить на hooks, types, ui, utils, constants, etc.
// Также нужно учесть, что данные компонент будет получать из бэкенда

import { useCallback, useEffect } from "react";
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
  Edge,
} from "@xyflow/react";

import MindmapNode from "./MIndmapNode/MindmapNode";
import useMindmapCollapse from "../../model/useMindmapCollapse";
import { transformMindmapData } from "../../model/utils";
import { MindmapProps } from "../../lib/types";

// Import React Flow styles
import "@xyflow/react/dist/style.css";
// Import our custom styles
import "../../lib/mindmap.css";

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

  // Преобразуем данные в формат React Flow
  const { nodes: initialNodes, edges: initialEdges } = transformMindmapData(data);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState<Edge>(initialEdges);

  // Используем хук для анимации сворачивания/разворачивания
  const { nodes: visibleNodes, edges: visibleEdges } = useMindmapCollapse(nodes, edges, {
    direction,
    spacing,
  });

  // Обработчик клика для expand/collapse
  const handleNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              data: { ...n.data, expanded: !((n.data as Record<string, unknown>).expanded as boolean) },
            };
          }
          return n;
        })
      );

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
  }, [fitView, visibleNodes.length]); // Добавляем зависимости

  return (
    <div className={`mindmap-container ${className}`} style={{ width, height, ...style }}>
      <ReactFlow
        nodes={visibleNodes}
        edges={visibleEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        proOptions={proOptions}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

// Экспортируем обёрнутый компонент с ReactFlowProvider
export default function Mindmap(props: MindmapProps) {
  return (
    <ReactFlowProvider>
      <MindmapComponent {...props} />
    </ReactFlowProvider>
  );
}

// Экспортируем типы для удобства использования
export type { MindmapProps, MindmapData, MindmapNodeData } from "../../lib/types";
