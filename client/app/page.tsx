"use client";

import CanvasContainer from "@/components/CanvasContainer";
import Palette from "@/components/PalletItem";

export default function Page() {
  return (
    <div className="flex h-screen w-screen bg-[#0b1120] text-white overflow-hidden">
      <Palette />
      <CanvasContainer />
    </div>
  );
}
