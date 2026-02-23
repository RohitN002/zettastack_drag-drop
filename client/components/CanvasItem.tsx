"use client";

import { Rnd } from "react-rnd";
import { useDispatch } from "react-redux";
import { updateItem, deleteItem, bringToFront } from "@/store/canvasSlice";
import { CanvasItem as ItemType } from "@/types/canvas";

interface Props {
  item: ItemType;
}

export default function CanvasItem({ item }: Props) {
  const dispatch = useDispatch();

  return (
    <Rnd
      bounds="parent"
      minWidth={100}
      minHeight={50}
      size={{ width: item.width, height: item.height }}
      position={{ x: item.x, y: item.y }}
      dragGrid={[10, 10]}
      resizeGrid={[10, 10]}
      onMouseDown={() => dispatch(bringToFront(item.id))}
      onDragStop={(e, d) => {
        dispatch(
          updateItem({
            id: item.id,
            updates: { x: d.x, y: d.y },
          }),
        );
      }}
      onResizeStop={(e, dir, ref, delta, position) => {
        dispatch(
          updateItem({
            id: item.id,
            updates: {
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
              ...position,
            },
          }),
        );
      }}
      className="border bg-blue-600 flex items-center justify-center"
    >
      {item.type}
      <button
        onClick={() => dispatch(deleteItem(item.id))}
        className="absolute top-0 right-0 text-xs bg-black text-white p-1"
      >
        X
      </button>
    </Rnd>
  );
}
