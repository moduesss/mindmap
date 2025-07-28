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
    <div
      style={{
        padding: "10px 14px",
        background: "#ffffff",
        border: "2px solid #4ecdc4",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: "500",
        color: "#333",
        minWidth: "180px",
        maxWidth: "280px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.2s ease",
        cursor: expandable ? "pointer" : "default",
      }}
    >
      {/* Левый handle */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: "8px",
          height: "8px",
          background: "#4ecdc4",
          border: "none",
        }}
      />

      {/* Текст узла */}
      <span style={{ flex: 1, marginRight: expandable ? "8px" : "0" }}>{label}</span>

      {/* Кнопка expand/collapse */}
      {expandable && (
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "2px solid #4ecdc4",
            background: "#ffffff",
            color: "#4ecdc4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            transition: "all 0.2s ease",
          }}
        >
          {expanded ? "−" : "+"}
        </div>
      )}

      {/* Правый handle */}
      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: "8px",
          height: "8px",
          background: "#4ecdc4",
          border: "none",
        }}
      />
    </div>
  );
});

MindmapNode.displayName = "MindmapNode";

export default MindmapNode;
