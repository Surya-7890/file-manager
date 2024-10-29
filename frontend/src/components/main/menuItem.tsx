import { ArrowDown } from "../../svg/navbar";
import {
  ExtraOptions,
  NormalContextListItem,
} from "../../utils/contextMenu/context";

export default function MenuItem({
  item,
  type,
}: {
  item: NormalContextListItem | ExtraOptions;
  type: "normal" | "sub";
}) {
  return (
    <div className="h-10 flex justify-between items-center px-2 cursor-pointer hover:bg-[#2A2A2A] hover:border-[0.01px] border-white rounded-sm">
      {item.name}
      {/*@ts-ignore */}
      {type === "sub" && item.sub_properties?.length > 0 && (
        <div className="-rotate-90 h-3 w-3">
          <ArrowDown />
        </div>
      )}
    </div>
  );
}
