import { lazy } from "react";
import { FILE } from "../../../types/file";
import { contextMenu } from "../../../state/contextmenu";
const FaModule = lazy(() => import("./faModule"));
const DevIconsModule = lazy(() => import("./deviconsModule"));
const FiModule = lazy(() => import("./fiModule"));
const MfModule = lazy(() => import("./mfModule"));
const OctIconsModule = lazy(() => import("./octiconsModule"));

type Params = {
  item: FILE;
  index: number;
  type: string;
};

export default function Item({ item, index, type }: Params) {
  const handleFileClick = contextMenu((state) => state.setFilePosition);

  const onRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    const index = e.currentTarget.getAttribute("index");
    handleFileClick({ left: e.pageX, top: e.pageY }, Number(index));
  };

  return (
    <div key={item.name}>
      {type == "fi" ? (
        <FiModule
          key={item.name}
          item={item}
          index={index}
          onRightClick={onRightClick}
        />
      ) : type == "fa" ? (
        <FaModule
          key={item.name}
          item={item}
          index={index}
          onRightClick={onRightClick}
        />
      ) : type == "mf" ? (
        <MfModule
          key={item.name}
          item={item}
          index={index}
          onRightClick={onRightClick}
        />
      ) : type == "devicons" ? (
        <DevIconsModule
          key={item.name}
          item={item}
          index={index}
          onRightClick={onRightClick}
        />
      ) : (
        <OctIconsModule
          key={item.name}
          item={item}
          index={index}
          onRightClick={onRightClick}
        />
      )}
    </div>
  );
}
