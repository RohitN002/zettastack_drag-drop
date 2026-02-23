export default function Palette() {
  const types = ["textbox", "label", "textarea", "circle"];

  return (
    <div className="w-48 p-4 border-r space-y-2 ">
      <h3 className=" text-center">Section</h3>
      {types.map((type) => (
        <div
          key={type}
          draggable
          onDragStart={(e) => e.dataTransfer.setData("type", type)}
          className="p-2 bg-gray-500 rounded cursor-grab"
        >
          {type}
        </div>
      ))}
    </div>
  );
}
