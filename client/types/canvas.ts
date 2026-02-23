// src/types/canvas.ts

export type CanvasItemType = "textbox" | "textarea" | "circle" | "label";

// export interface CanvasItem {
//   id: string;
//   type: CanvasItemType;
//   x: number;
//   y: number;
//   width: number;
//   height: number;
//   zIndex: number;
// }
export type BaseItem = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
};

export type TextboxItem = BaseItem & {
  type: "textbox";
  content: string;
};

export type LabelItem = BaseItem & {
  type: "label";
  content: string;
};

export type RoundItem = BaseItem & {
  type: "round";
};

export type SquareItem = BaseItem & {
  type: "square";
};

export type CanvasItem = TextboxItem | LabelItem | RoundItem | SquareItem;
