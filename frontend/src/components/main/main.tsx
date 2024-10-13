import { Suspense, lazy } from "react";
import { app as application } from "../../../state/state";
const FaModule = lazy(() => import("./faModule"));
const DevIconsModule = lazy(() => import("./deviconsModule"));
const FiModule = lazy(() => import("./fiModule"));
const MfModule = lazy(() => import("./mfModule"));
const OctIconsModule = lazy(() => import("./octiconsModule"));

export default function Main() {
  const contents = application((state) => state.contents);

  return (
    <div className="h-full w-[90%]">
      <div className="h-[5%] w-full bg-white"></div>
      <div className="h-[90%] w-full">
        <div className="h-fit grid grid-cols-10 gap-y-10 pt-5 px-5">
          <Suspense fallback={<div>loading...</div>}>
            {contents.map((item) => {
              const type = item.icon.split("-")[1];
              return (
                <div key={item.name}>
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
        </div>
      </div>
      <div className="h-[5%] w-full bg-white"></div>
    </div>
  );
}
