import { useEffect, useCallback } from "react";

import {
  ReactFlow,
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
  Node,
  Edge,
  NodeMouseHandler,
  useNodesState,
  useEdgesState,
  OnConnect,
  addEdge,
  ConnectionLineType,
} from "@xyflow/react";

// This is used to display a leva (https://github.com/pmndrs/leva) control panel for the example
import { useControls, button } from "leva";

import useAutoLayout, { type LayoutOptions } from "./useAutoLayout";

import { nodes as initialNodes, edges as initialEdges } from "./initialElements";

import { getId } from "./utils";

import "@xyflow/react/dist/style.css";

import MindmapNode from "./MindmapNode";
import useMindmapCollapse from "./useMindmapCollapse";

const proOptions = {
  hideAttribution: true,
};

const defaultEdgeOptions = {
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed },
  pathOptions: { offset: 5 },
};

/**
 * This example shows how you can automatically arrange your nodes after adding child nodes to your graph.
 */
function ReactFlowAutoLayout() {
  const { fitView } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Заменить useAutoLayout на useMindmapCollapse
  const { nodes: visibleNodes, edges: visibleEdges } = useMindmapCollapse(
    nodes,
    edges,
    { direction: "LR", spacing: [350, 120] } // больше расстояния
  );

  // Заменить onNodeClick на expand/collapse функциональность
  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      // Переключаем expanded состояние узла
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              data: { ...n.data, expanded: !n.data.expanded },
            };
          }
          return n;
        })
      );

      // Центрируем view после изменения
      setTimeout(() => fitView({ duration: 300 }), 50);
    },
    [setNodes, fitView]
  );

  const onConnect: OnConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

  // every time our nodes change, we want to center the graph again
  useEffect(() => {
    fitView();
  }, [nodes, fitView]);

  const nodeTypes = {
    mindmap: MindmapNode,
  };

  return (
    <ReactFlow
      nodes={visibleNodes}
      edges={visibleEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      nodeTypes={nodeTypes}
      nodesDraggable={false}
      nodesConnectable={false}
      zoomOnDoubleClick={false}
      defaultEdgeOptions={defaultEdgeOptions}
      connectionLineType={ConnectionLineType.SmoothStep}
      proOptions={proOptions}
    />
  );
}

const ReactFlowWrapper = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowAutoLayout />
    </ReactFlowProvider>
  );
};

export default ReactFlowWrapper;
