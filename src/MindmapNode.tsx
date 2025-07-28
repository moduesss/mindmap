import { memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";

interface MindmapNodeData {
  label: string;
  expanded: boolean;
  expandable?: boolean;
}

const MindmapNode = memo(({ data }: NodeProps<{ data: MindmapNodeData }>) => {
  const { label, expanded, expandable } = data;

  return (
    <div>
      {/* Левый handle */}
      <Handle type="target" position={Position.Left} style={{ visibility: "hidden" }} />

      {/* Контент узла */}
      <div className="mindmap-node-content">{label}</div>

      {/* Кнопка expand/collapse */}
      {expandable && <div className="mindmap-expand-button">{expanded ? "−" : "+"}</div>}

      {/* Правый handle */}
      <Handle type="source" position={Position.Right} style={{ visibility: "hidden" }} />
    </div>
  );
});

MindmapNode.displayName = "MindmapNode";

export default MindmapNode;
