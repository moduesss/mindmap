import { memo } from "react";
import { Handle, NodeProps } from "@xyflow/react";
import {
    getLevelColor,
    getSourceHandlePosition,
    getTargetHandlePosition,
} from "../../../utils/utils";
import { MindmapNodeData } from "../../../utils/types";

const MindmapNode = memo(({ data }: NodeProps) => {
    const { label, expanded, expandable, level = 0, direction = "LR" } = data as MindmapNodeData;
  const colors = getLevelColor(level);

  return (
    <div
      style={
        {
          "--node-color": colors.button,
          backgroundColor: colors.background,
          borderColor: colors.border,
          color: colors.text,
          width: "100%",
          height: "100%",
          borderRadius: 8,
          border: `1px solid ${colors.border}`,
          boxShadow: "0 2px 4px rgba(0,0,0,.1)",
        } as React.CSSProperties
      }
    >
        <Handle
            type="target"
            position={getTargetHandlePosition(direction)}
            style={{ visibility: "hidden" }}
        />

      <div className="mindmap-node-content">{label}</div>

      {expandable && (
        <div
          className={`mindmap-expand-button ${expanded ? "is-expanded" : ""}`}
          style={{ color: "var(--node-color)", borderColor: "var(--node-color)" }}
        />
      )}

        <Handle
            type="source"
            position={getSourceHandlePosition(direction)}
            style={{ visibility: "hidden" }}
        />
    </div>
  );
});

MindmapNode.displayName = "MindmapNode";
export default MindmapNode;
