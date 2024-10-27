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
  file: Position;
  normal: Position;

  setFilePosition: (position: Position) => void;
  setNormalPosition: (position: Position) => void;
  hideMenu: () => void;
};

export const contextMenu = create<ContextMenu>((set) => {
  return {
    file: {
      left: 0,
      top: 0,
    },
    normal: {
      left: 0,
      top: 0,
    },
    setFilePosition: (position) => {
      set((state) => {
        return {
          ...state,
          file: {
            left: position.left - DIMENSIONS.LEFT,
            top: position.top - DIMENSIONS.TOP,
          },
        };
      });
    },
    setNormalPosition: (position) => {
      set((state) => {
        return {
          ...state,
          normal: position,
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
