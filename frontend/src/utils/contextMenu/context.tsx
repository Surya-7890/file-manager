import { create } from "../../../functions/create";

export type ExtraOptions = {
  name: string;
  func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type NormalContextListItem = {
  name: string;
  sub_properties: ExtraOptions[];
  func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const NormalContextList: NormalContextListItem[] = [
  {
    name: "New",
    sub_properties: [
      {
        name: "Folder",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          create("folder", "new folder");
        },
      },
      {
        name: "Text File",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          create("file", "text_file" + ".txt");
        },
      },
      {
        name: "Empty File",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          create("file", "empty_file");
        },
      },
      {
        name: "HTML File",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          create("file", "html_file" + ".html");
        },
      },
    ],
    func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
  },
  {
    name: "Sort By",
    sub_properties: [
      {
        name: "Name",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
      },
      {
        name: "Created At",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
      },
      {
        name: "Size",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
      },
      {
        name: "Ascending",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
      },
      {
        name: "Descending",
        func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
      },
    ],
    func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
  },
  {
    name: "Copy",
    sub_properties: [],
    func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
  },
  {
    name: "Paste Here",
    sub_properties: [],
    func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
  },
  {
    name: "Open Terminal Here",
    sub_properties: [],
    func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
  },
  {
    name: "Properties",
    sub_properties: [],
    func: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
  },
];
