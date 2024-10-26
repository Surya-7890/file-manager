import { Suspense, lazy, useState } from "react";
import { app as application } from "../../../state/state";
const FaModule = lazy(() => import("./faModule"));
const DevIconsModule = lazy(() => import("./deviconsModule"));
const FiModule = lazy(() => import("./fiModule"));
const MfModule = lazy(() => import("./mfModule"));
const OctIconsModule = lazy(() => import("./octiconsModule"));

const DIMENSIONS = {
  TOP: 0.1 * window.innerHeight,
  LEFT: 0.15 * window.innerWidth,
};

export default function Main() {
  const contents = application((state) => state.contents);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleRightClickFile = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setPosition(() => {
      return {
        left: e.pageX - DIMENSIONS.LEFT,
        top: e.pageY - DIMENSIONS.TOP,
      };
    });
  };

  const handleCloseContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setPosition(() => {
      return {
        left: 0,
        top: 0,
      };
    });
  };

  return (
    <div className="h-full w-[90%] relative" onClick={handleCloseContextMenu}>
      <div className="h-[5%] w-full bg-white"></div>
      <div className="h-[90%] w-full">
        <div className="h-fit grid grid-cols-10 gap-y-10 pt-5 px-5">
          <Suspense fallback={<div>loading...</div>}>
            {contents.map((item, index) => {
              const type = item.icon.split("-")[1];
              return (
                //@ts-ignore
                <div key={item.name} index={index}>
                  {type == "fi" ? (
                    <FiModule
                      key={item.name}
                      item={item}
                      onRightClick={handleRightClickFile}
                    />
                  ) : type == "fa" ? (
                    <FaModule
                      key={item.name}
                      item={item}
                      onRightClick={handleRightClickFile}
                    />
                  ) : type == "mf" ? (
                    <MfModule
                      key={item.name}
                      item={item}
                      onRightClick={handleRightClickFile}
                    />
                  ) : type == "devicons" ? (
                    <DevIconsModule
                      key={item.name}
                      item={item}
                      onRightClick={handleRightClickFile}
                    />
                  ) : (
                    <OctIconsModule
                      key={item.name}
                      item={item}
                      onRightClick={handleRightClickFile}
                    />
                  )}
                </div>
              );
            })}
          </Suspense>
        </div>
      </div>
      <div className="h-[5%] w-full bg-white"></div>
      {position.left && position.top && (
        <div
          className="absolute z-20 h-64 min-w-44 bg-[#242424] rounded-md"
          style={{ top: position.top, left: position.left }}
        ></div>
      )}
    </div>
  );
}
