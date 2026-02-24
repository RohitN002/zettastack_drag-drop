"use client";

const types = ["textbox", "label", "textarea", "circle"];

export default function Palette() {
  return (
    <aside
      className="w-60 h-full p-6 border-r border-white/10 
                      bg-white/5 backdrop-blur-xl
                      shadow-[0_0_40px_rgba(0,150,255,0.1)]"
    >
      <h2 className="text-lg font-semibold mb-6 text-center tracking-wide">
        Elements
      </h2>

      <div className="space-y-3">
        {types.map((type) => (
          <div
            key={type}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("type", type);
            }}
            className="p-3 rounded-lg bg-linear-to-br 
                       from-blue-500/20 to-blue-700/10
                       border border-blue-500/30
                       hover:border-blue-400
                       cursor-grab active:cursor-grabbing
                       transition-all duration-200"
          >
            {type}
          </div>
        ))}
      </div>
    </aside>
  );
}
