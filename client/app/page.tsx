"use client";
import Palette from "@/components/PalletItem";

import CanvasContainer from "@/components/CanvasContainer";

export default function Page() {
  return (
    <div className="flex h-screen w-screen">
      <Palette />
      <CanvasContainer />
    </div>
  );
}
