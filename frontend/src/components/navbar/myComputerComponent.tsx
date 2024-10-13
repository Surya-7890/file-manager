import { MyComputerComponent } from "../../../types/myComputerComponents";
import { app as application } from "../../../state/state";

export default function MyComputerComponents({
  element,
}: {
  element: MyComputerComponent;
}) {
  const app = application((state) => state);
  async function handleClick() {
    app.replace_location(element.path);
  }

  return (
    <div
      className="flex px-3 py-2 items-center space-x-5 hover:bg-[#333333] cursor-pointer"
      onClick={handleClick}
    >
      <element.icon />
      <div>{element.name}</div>
    </div>
  );
}
