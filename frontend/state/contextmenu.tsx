import { create } from "zustand";

const DIMENSIONS = {
  TOP: 0.1 * window.innerHeight,
  LEFT: 0.15 * window.innerWidth,
};

type Position = {
  top: number;
  left: number;
};

type ContextMenu = {
  file: Position & {
    index: number | null;
  };
  normal: Position;
  subMenuParentIndex: number;

  setFilePosition: (position: Position, index: number) => void;
  setNormalPosition: (position: Position) => void;
  hideMenu: () => void;
  setSubMenuIndex: (index: number) => void;
};

export const contextMenu = create<ContextMenu>((set) => {
  return {
    file: {
      left: 0,
      top: 0,
      index: null,
    },
    normal: {
      left: 0,
      top: 0,
    },
    subMenuParentIndex: -1,
    setSubMenuIndex: (index) => {
      set((state) => {
        return {
          ...state,
          subMenuParentIndex: index,
        };
      });
    },
    setFilePosition: (position, index) => {
      set((state) => {
        return {
          ...state,
          normal: {
            left: 0,
            top: 0,
          },
          file: {
            left:
              position.left - DIMENSIONS.LEFT + 350 > window.innerWidth
                ? position.left - DIMENSIONS.LEFT - 176
                : position.left - DIMENSIONS.LEFT,
            top:
              position.top - DIMENSIONS.TOP + 350 > window.innerHeight
                ? position.top - DIMENSIONS.TOP - 256
                : position.top - DIMENSIONS.TOP,
            index,
          },
        };
      });
    },
    setNormalPosition: (position) => {
      set((state) => {
        return {
          ...state,
          normal: {
            left:
              position.left - DIMENSIONS.LEFT + 350 > window.innerWidth
                ? position.left - DIMENSIONS.LEFT - 176
                : position.left - DIMENSIONS.LEFT,
            top:
              position.top - DIMENSIONS.TOP + 350 > window.innerHeight
                ? position.top - DIMENSIONS.TOP - 256
                : position.top - DIMENSIONS.TOP,
          },
          file: {
            index: null,
            left: 0,
            top: 0,
          },
        };
      });
    },
    hideMenu: () => {
      set((state) => {
        return {
          ...state,
          file: {
            left: 0,
            top: 0,
            index: null,
          },
          normal: {
            left: 0,
            top: 0,
          },
        };
      });
    },
  };
});
