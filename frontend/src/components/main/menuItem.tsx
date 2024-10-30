import { ArrowDown } from "../../assets/svg/navbar";
import {
  ExtraOptions,
  NormalContextListItem,
} from "../../utils/contextMenu/context";

export default function MenuItem({
  item,
}: {
  item: NormalContextListItem | ExtraOptions;
}) {
  return (
    <div
      className="h-10 flex justify-between items-center px-2 cursor-pointer hover:bg-[#2A2A2A] hover:border-[0.01px] border-white rounded-sm"
      onClick={(e) => item.func?.(e)}
    >
      {item.name}
      {/*@ts-ignore */}
      {item.sub_properties?.length > 0 && (
        <div className="-rotate-90 h-3 w-3">
          <ArrowDown />
        </div>
      )}
    </div>
  );
}
