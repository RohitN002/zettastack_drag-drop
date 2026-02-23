"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addItem } from "@/store/canvasSlice";
import { useCanvasDrop } from "./useCanvasDrop";
import CanvasItemRenderer from "./CanvasItemRenderer";

export default function CanvasContainer() {
  const dispatch = useDispatch();
  const items = useSelector((s: RootState) => s.canvas.present);

  const handleDrop = useCanvasDrop(items, dispatch);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="flex-1 relative bg-gray-800 overflow-hidden"
    >
      <CanvasItemRenderer items={items} />
    </div>
  );
}
