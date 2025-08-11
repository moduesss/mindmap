import { Node, Edge } from "@xyflow/react";

export type Direction = "TB" | "LR" | "BT" | "RL";

export interface MindmapNodeData extends Record<string, unknown> {
  label: string;
  expanded: boolean;
  expandable?: boolean;
  level?: number;
}

export interface MindmapNode extends Node {
  data: MindmapNodeData;
}

export interface MindmapEdge extends Edge {
  id: string;
  source: string;
  target: string;
}

export interface MindmapData {
  nodes: Array<{
    id: string;
    type?: string;
    data: {
      label: string;
      [key: string]: any;
    };
    style?: Record<string, any>;
  }>;
  edges: Array<{
    id: string;
    source: string;
    target: string;
  }>;
  meta?: {
    generatedAt?: string;
    rootId: string;
    totalNodes: number;
    totalEdges: number;
  };
}

export interface MindmapProps {
  data: MindmapData;
  width?: string | number;
  height?: string | number;
  direction?: Direction;
  spacing?: [number, number];
  onNodeClick?: (nodeId: string, node: Node) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface UseMindmapCollapseOptions {
  direction?: Direction;
  spacing?: [number, number];
}

export interface ColorScheme {
  background: string;
  border: string;
  text: string;
  button: string;
  buttonHover: string;
}
