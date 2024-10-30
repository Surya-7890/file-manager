import { useState } from "react";
import { NavbarIcons } from "../../assets/svg";
import MyComputerComponents from "./myComputerComponent";
import { myComputerComponent } from "../../utils/myComputer/myComupter";

export default function MyComputer() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center w-full select-none cursor-pointer hover:bg-[#333333] px-3 py-2 transition-colors duration-100 ease-linear"
        onClick={() => setIsOpen((state) => !state)}
      >
        <div className="font-extrabold w-[80%]">My Computer</div>
        <div
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-200 ease-in-out h-5 w-5`}
        >
          <NavbarIcons.ArrowDown />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "h-[400px]" : "h-0"
        } overflow-hidden transition-all duration-200`}
      >
        {myComputerComponent().map((element) => {
          return <MyComputerComponents key={element.name} element={element} />;
        })}
      </div>
    </div>
  );
}
