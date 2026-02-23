import { CanvasItem as ItemType } from "@/types/canvas";
import CanvasItem from "./CanvasItem";

interface Props {
  items: ItemType[];
}

export default function CanvasItemRenderer({ items }: Props) {
  return (
    <>
      {[...items]
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((item) => (
          <CanvasItem key={item.id} item={item} />
        ))}
    </>
  );
}
