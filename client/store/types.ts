// store/types.ts
export type CanvasItemType = "textbox" | "label" | "square" | "circle";

export interface CanvasItem {
  id: string;
  type: any;
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string;
  zIndex: number;
}
