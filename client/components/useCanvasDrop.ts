import { Dispatch } from "@reduxjs/toolkit";
import { addItem } from "@/store/canvasSlice";
import { CanvasItem } from "@/types/canvas";
import toast from "react-hot-toast";

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 50;

export function useCanvasDrop(items: CanvasItem[], dispatch: Dispatch) {
  const isOverlapping = (
    x: number,
    y: number,
    width: number,
    height: number,
  ) => {
    return items.filter((item) => {
      return !(
        x + width < item.x ||
        x > item.x + item.width ||
        y + height < item.y ||
        y > item.y + item.height
      );
    }).length;
  };

  return (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const type = e.dataTransfer.getData("type");
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - DEFAULT_WIDTH / 2;
    const y = e.clientY - rect.top - DEFAULT_HEIGHT / 2;

    const overlappingCount = isOverlapping(x, y, DEFAULT_WIDTH, DEFAULT_HEIGHT);

    if (overlappingCount + 1 >= 5) {
      toast.error("Maximum 5 elements allowed in the same area");
      return;
    }

    dispatch(
      addItem({
        type,
        x,
        y,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
      }),
    );
  };
}
