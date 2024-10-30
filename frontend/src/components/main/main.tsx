import { Suspense, useEffect } from "react";
import Item from "./item";
import { app as application } from "../../../state/state";
import { contextMenu } from "../../../state/contextmenu";
import { NormalContextList } from "../../utils/contextMenu/context";
import "./css/main.css";
import MenuItem from "./menuItem";

let timer: number;

export default function Main() {
  const contents = application((state) => state.contents);

  const hideMenu = contextMenu((state) => state.hideMenu);
  const filePosition = contextMenu((state) => state.file);
  const normalPosition = contextMenu((state) => state.normal);
  const openNormalContext = contextMenu((state) => state.setNormalPosition);
  const menuIndex = contextMenu((state) => state.subMenuParentIndex);
  const setSubMenuIndex = contextMenu((state) => state.setSubMenuIndex);

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

  const handleMouseEnterForSubMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    clearInterval(timer);
    e.preventDefault();
    const index = Number(e.currentTarget.getAttribute("index"));
    if (NormalContextList[index].sub_properties.length > 0) {
      setSubMenuIndex(index);
    } else {
      setSubMenuIndex(-1);
    }
  };

  const handleMouseExitForSubMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    timer = setTimeout(() => {
      setSubMenuIndex(-1);
    }, 200);
  };

  const handleMouseOverMenuItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    clearInterval(timer);
    setSubMenuIndex(menuIndex);
  };

  const handleMouseExitMenuItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSubMenuIndex(-1);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="h-full w-[90%] relative"
      onClick={hideMenu}
      onContextMenu={handleNormalContextOpen}
    >
      <div className="h-[5%] w-full bg-white"></div>
      <div className="h-[90%] w-full overflow-y-scroll">
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
          className="absolute z-10 h-64 w-44 bg-[#242424] rounded-sm"
          style={{ top: filePosition.top, left: filePosition.left }}
        ></div>
      )}
      {normalPosition.left && normalPosition.top && (
        <div className="z-10 absolute top-0 left-0 h-full w-full bg-transparent">
          <div
            className="absolute h-fit max-h-72 w-44 bg-[#242424] rounded-sm overflow-y-scroll"
            style={{ top: normalPosition.top, left: normalPosition.left }}
          >
            {NormalContextList.map((item, index) => (
              <div
                onMouseEnter={handleMouseEnterForSubMenu}
                onMouseLeave={handleMouseExitForSubMenu}
                //@ts-ignore
                index={index}
              >
                <MenuItem item={item} />
              </div>
            ))}
          </div>
          <div
            className="max-h-56 h-fit overflow-y-scroll w-44 absolute bg-[#242424] border-l-[0.1px] border-l-[dodgerblue] rounded-sm"
            onMouseEnter={handleMouseOverMenuItem}
            onMouseLeave={handleMouseExitMenuItem}
            style={{
              left:
                normalPosition.left + 350 + 0.15 * window.innerWidth >
                window.innerWidth
                  ? normalPosition.left - 176
                  : normalPosition.left + 176,
              top: normalPosition.top,
              display: menuIndex === -1 ? "none" : "block",
            }}
          >
            {menuIndex >= 0 &&
              NormalContextList[menuIndex].sub_properties.map((item, index) => (
                <MenuItem item={item} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
