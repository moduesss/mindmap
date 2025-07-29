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
} from "@xyflow/react";

import MindmapNode from "./MindmapNode";
import useMindmapCollapse from "./useMindmapCollapse";
import { nodes as initialNodes, edges as initialEdges } from "./initialElements";

import "@xyflow/react/dist/style.css";

const proOptions = {
  hideAttribution: true,
};

const nodeTypes = {
  mindmap: MindmapNode,
};

function ReactFlowAutoLayout() {
  const { fitView } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  // Используем обновленный хук с анимациями
  const { nodes: visibleNodes, edges: visibleEdges } = useMindmapCollapse(nodes, edges, {
    direction: "LR",
    spacing: [200, 30],
  });

  // Обработчик клика для expand/collapse
  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
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
    },
    [setNodes]
  );

  // Центрируем только при первой загрузке
  useEffect(() => {
    if (visibleNodes.length > 0) {
      fitView({ duration: 500, padding: 0.1 });
    }
  }, []); // Пустой массив зависимостей - только при монтировании

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={visibleNodes}
        edges={visibleEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        proOptions={proOptions}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
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
