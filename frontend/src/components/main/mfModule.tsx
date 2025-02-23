import { FILE } from "../../../types/file";
import { FileIcon } from "../../svg/file-icon";
import styles from "./css/mf.module.css";

export default function MfModule({ item }: { item: FILE }) {
  return (
    <div className="h-[70px] aspect-square" key={item.name}>
      {item.icon !== "" ? (
        <div className="h-[70px] aspect-square flex justify-center items-center">
          <FileIcon />
          <span
            className={`${styles[item.icon]} ${
              styles["icon"]
            } z-10 absolute text-[130%]`}
          ></span>
        </div>
      ) : (
        <img
          src="src/assets/images/folder_icon.png"
          className="cursor-pointer h-full"
        />
      )}
      <div className="text-center text-sm">{item.name.substr(0, 10)}</div>
    </div>
  );
}
