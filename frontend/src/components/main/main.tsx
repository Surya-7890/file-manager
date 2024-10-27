import { Suspense } from "react";
import { app as application } from "../../../state/state";
import Item from "./item";
import { contextMenu } from "../../../state/contextmenu";

export default function Main() {
  const contents = application((state) => state.contents);

  const hideMenu = contextMenu((state) => state.hideMenu);
  const filePosition = contextMenu((state) => state.file);
  const normalPosition = contextMenu((state) => state.normal);
  const openNormalContext = contextMenu((state) => state.setNormalPosition);

  const handleNormalContextOpen = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    openNormalContext({
      left: e.pageX,
      top: e.pageY,
    });
  };

  return (
    <div
      className="h-full w-[90%] relative"
      onClick={hideMenu}
      onContextMenu={handleNormalContextOpen}
    >
      <div className="h-[5%] w-full bg-white"></div>
      <div className="h-[90%] w-full">
        <div className="h-fit grid grid-cols-10 gap-y-10 pt-5 px-5">
          <Suspense fallback={<div>loading...</div>}>
            {contents.map((item, index) => {
              const type = item.icon.split("-")[1];
              return <Item index={index} item={item} type={type} key={index} />;
            })}
          </Suspense>
        </div>
      </div>
      <div className="h-[5%] w-full bg-white"></div>
      {filePosition.left && filePosition.top && (
        <div
          className="absolute z-20 h-64 min-w-44 bg-[#242424] rounded-md"
          style={{ top: filePosition.top, left: filePosition.left }}
        ></div>
      )}
      {normalPosition.left && normalPosition.top && (
        <div
          className="absolute z-20 h-64 min-w-44 bg-[#242424] rounded-md"
          style={{ top: normalPosition.top, left: normalPosition.left }}
        ></div>
      )}
    </div>
  );
}
