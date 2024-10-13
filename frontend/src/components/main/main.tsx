import { app as application } from "../../../state/state";
import styles from "./index.module.css";

export default function Main() {
  const contents = application((state) => state.contents);

  return (
    <div className="h-full w-[90%]">
      <div className="h-[5%] w-full bg-white"></div>
      <div className="h-[90%] w-full">
        <div className="h-fit grid grid-cols-10 gap-y-10 pt-5 px-5">
          {contents.map((item) => {
            console.log(item.icon);
            return (
              <div className="h-[70px] aspect-square" key={item.name}>
                {item.icon !== "" ? (
                  <span
                    className={`${styles[item.icon]} ${
                      styles[item.icon.split("-")[1]]
                    }`}
                  ></span>
                ) : (
                  <img
                    src="src/assets/images/folder_icon.png"
                    className="cursor-pointer h-full"
                  />
                )}
                <div className="text-center text-sm">
                  {item.name.substr(0, 10)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[5%] w-full bg-white"></div>
    </div>
  );
}
