import Card from "./card";
interface RightClickProperties {
  RightFunctionality: { name: string; functionalityToastMessage: string }[];
}
export default function RightClickProperties({
  RightFunctionality,
}: RightClickProperties) {
  return (
    <div>
      <div className="relative group">
        <div className="absolute top-0 left-0 z-10 h-[150px] w-[130px] bg-[#2E2E2E] shadow-lg p-2 rounded group-hover:block border border-white overflow-y-auto max-h-[150px]">
          {RightFunctionality.map((object, index) => (
            <Card
              key={index}
              name={object.name}
              functionalityToastMessage={object.functionalityToastMessage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
