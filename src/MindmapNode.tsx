import { memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { getLevelColor } from "./utils";

interface MindmapNodeData {
  label: string;
  expanded: boolean;
  expandable?: boolean;
  level?: number;
}

const MindmapNode = memo(({ data }: NodeProps<{ data: MindmapNodeData }>) => {
  const { label, expanded, expandable, level = 0 } = data;

  // Получаем цвета для текущего уровня
  const colors = getLevelColor(level);

  return (
    <div
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
        color: colors.text,
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        border: `2px solid ${colors.border}`,
      }}
    >
      {/* Левый handle */}
      <Handle type="target" position={Position.Left} style={{ visibility: "hidden" }} />

      {/* Контент узла */}
      <div className="mindmap-node-content">{label}</div>

      {/* Кнопка expand/collapse */}
      {expandable && (
        <div
          className="mindmap-expand-button"
          style={{
            borderColor: colors.button,
            color: colors.button,
          }}
        >
          {expanded ? "−" : "+"}
        </div>
      )}

      {/* Правый handle */}
      <Handle type="source" position={Position.Right} style={{ visibility: "hidden" }} />
    </div>
  );
});

MindmapNode.displayName = "MindmapNode";

export default MindmapNode;
