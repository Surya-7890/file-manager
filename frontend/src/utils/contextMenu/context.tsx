export type ExtraOptions = {
  name: string;
  func: () => void;
};

export type NormalContextListItem = {
  name: string;
  sub_properties: ExtraOptions[];
  func: () => void;
};

export const NormalContextList: NormalContextListItem[] = [
  {
    name: "New",
    sub_properties: [
      {
        name: "File",
        func: () => {},
      },
      {
        name: "Folder",
        func: () => {},
      },
    ],
    func: () => {},
  },
  {
    name: "Sort By",
    sub_properties: [
      {
        name: "Name",
        func: () => {},
      },
      {
        name: "Created At",
        func: () => {},
      },
      {
        name: "Size",
        func: () => {},
      },
      {
        name: "Ascending",
        func: () => {},
      },
      {
        name: "Descending",
        func: () => {},
      },
    ],
    func: () => {},
  },
  {
    name: "View Mode",
    sub_properties: [
      {
        name: "Tiles",
        func: () => {},
      },
      {
        name: "Details",
        func: () => {},
      },
      {
        name: "Compact",
        func: () => {},
      },
    ],
    func: () => {},
  },
  {
    name: "Copy",
    sub_properties: [],
    func: () => {},
  },
  {
    name: "Paste Here",
    sub_properties: [],
    func: () => {},
  },
  {
    name: "Open Terminal Here",
    sub_properties: [],
    func: () => {},
  },
  {
    name: "Properties",
    sub_properties: [],
    func: () => {},
  },
];
