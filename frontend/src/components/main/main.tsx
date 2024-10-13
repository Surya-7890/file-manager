import { useState, useEffect, useRef } from "react";
import { Suspense, lazy } from "react";
import { app, app as application } from "../../../state/state";
const FaModule = lazy(() => import("./faModule"));
const DevIconsModule = lazy(() => import("./deviconsModule"));
const FiModule = lazy(() => import("./fiModule"));
const MfModule = lazy(() => import("./mfModule"));
const OctIconsModule = lazy(() => import("./octiconsModule"));
import RightClickProperties from "../RightClickProperties/index";

export default function Main() {
  const contents = application((state) => state.contents);

  const [selectedItem, setSelectedItem] = useState(false);
  const ChangeNewDirectory = application((state) => state.go_forward);
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [
    { name: "New Folder", functionalityToastMessage: "r" },
    { name: "New File", functionalityToastMessage: "New File" },
    { name: "Paste", functionalityToastMessage: "Paste" },
    { name: "Cut", functionalityToastMessage: "Cut" },
    { name: "Copy", functionalityToastMessage: "Copy" },
    { name: "Delete", functionalityToastMessage: "Delete" },
  ];
  const onRightClick = () => {
    setSelectedItem(!selectedItem);
  };

  return (
    <div
      className="h-full w-[90%]"
      ref={containerRef}
      onContextMenu={(e) => {
        onRightClick();
      }}
    >
      <div className="h-[5%] w-full bg-white"></div>
      <div className="h-[90%] w-full">
        <div className="h-fit grid grid-cols-10 gap-y-10 pt-5 px-5">
          <Suspense fallback={<div>loading...</div>}>
            {contents.map((item) => {
              const type = item.icon.split("-")[1];
              return (
                <div
                  key={item.name}
                  onClick={() => {
                    ChangeNewDirectory(item.name);
                  }}
                >
                  {type == "fi" ? (
                    <FiModule key={item.name} item={item} />
                  ) : type == "fa" ? (
                    <FaModule key={item.name} item={item} />
                  ) : type == "mf" ? (
                    <MfModule key={item.name} item={item} />
                  ) : type == "devicons" ? (
                    <DevIconsModule key={item.name} item={item} />
                  ) : (
                    <OctIconsModule key={item.name} item={item} />
                  )}
                </div>
              );
            })}
          </Suspense>

          {selectedItem && <RightClickProperties RightFunctionality={items} />}
        </div>
      </div>
      <div className="h-[5%] w-full bg-white"></div>
    </div>
  );
}
