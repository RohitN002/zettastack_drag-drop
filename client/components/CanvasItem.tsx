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
      className="
    relative
    bg-white
    border border-gray-300
    rounded-md
    shadow-sm
    hover:shadow-md
    transition-shadow
    flex items-center justify-center
    text-sm font-medium text-gray-700
  "
    >
      {item.type}

      <button
        onClick={() => dispatch(deleteItem(item.id))}
        className="
      absolute top-1 right-1
      w-5 h-5
      rounded
      bg-gray-200
      text-gray-600
      text-xs
      flex items-center justify-center
      hover:bg-red-500
      hover:text-white
      transition-colors
    "
      >
        x
      </button>
    </Rnd>
  );
}
