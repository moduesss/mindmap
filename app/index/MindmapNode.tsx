import { memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { getLevelColor } from "../../features/model/utils";

interface MindmapNodeData {
  label: string;
  expanded: boolean;
  expandable?: boolean;
  level?: number;
}

const MindmapNode = memo(({ data }: NodeProps) => {
  const { label, expanded, expandable, level = 0 } = data as unknown as MindmapNodeData;
  const colors = getLevelColor(level);

  return (
    <div
      /* передаём цвет в CSS‑переменную, чтобы ею пользоваться в :hover */
      style={
        {
          "--node-color": colors.button, // <── важно
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
      <Handle type="target" position={Position.Left} style={{ visibility: "hidden" }} />

      <div className="mindmap-node-content">{label}</div>

      {expandable && (
        <div
          className={`mindmap-expand-button ${expanded ? "is-expanded" : ""}`}
          /* базовый цвет кнопки = цвет узла */
          style={{ color: "var(--node-color)", borderColor: "var(--node-color)" }}
        />
      )}

      <Handle type="source" position={Position.Right} style={{ visibility: "hidden" }} />
    </div>
  );
});

MindmapNode.displayName = "MindmapNode";
export default MindmapNode;
