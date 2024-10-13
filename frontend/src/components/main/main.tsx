import { useState, useEffect, useRef } from "react";
import { app as application } from "../../../state/state";
import RightClickProperties from "../RightClickProperties/index";

export default function Main() {
  const contents = application((state) => state.contents);
  const items = [
    { name: "New Folder", functionalityToastMessage: "r" },
    { name: "New File", functionalityToastMessage: "New File" },
    { name: "Paste", functionalityToastMessage: "Paste" },
    { name: "Cut", functionalityToastMessage: "Cut" },
    { name: "Copy", functionalityToastMessage: "Copy" },
    { name: "Delete", functionalityToastMessage: "Delete" },
  ];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFolderClick = (itemName: string) => {
    if (selectedItem === itemName) {
      setSelectedItem(null);
      return;
    } else {
      setSelectedItem(itemName);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-full w-[90%]" ref={containerRef}>
      <div className="h-[5%] w-full bg-white"></div>
      <div className="h-[90%] w-full">
        <div className="h-fit grid grid-cols-10 gap-y-10 pt-5 px-5">
          {contents.map((item) => (
            <div className="h-[70px] aspect-square" key={item.name}>
              <img
                src="src/assets/images/folder_icon.png"
                className="cursor-pointer h-full"
                onClick={() => handleFolderClick(item.name)}
              />
              <div className="text-center text-sm">
                {selectedItem === item.name && (
                  <RightClickProperties
                    key={item.name}
                    RightFunctionality={items}
                  />
                )}
                {item.name.substr(0, 10)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[5%] w-full bg-white"></div>
    </div>
  );
}
