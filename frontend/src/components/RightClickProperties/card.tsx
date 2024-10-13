import { CreateNewFolder } from "../../../functions/FolderProperties";
import { app } from "../../../state/state";
import CreateFolderModal from "./CreateFolderModel";
import { useState } from "react";

interface Card {
  name: string;
  functionalityToastMessage: string;
}

export default function Card({ name, functionalityToastMessage }: Card) {
  const location = app((state) => state.current_location);
  const [showModal, setShowModal] = useState(false);
  const get_contents = app((state) => state.get_contents);

  const handleCreate = (folderName: string) => {
    const fullPath = location.join("/");
    CreateNewFolder(fullPath, folderName);
    get_contents();

    setShowModal(false);
  };

  const showCreateFolderModel = () => {
    setShowModal(true);
  };

  return (
    <div>
      <CreateFolderModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleCreate={handleCreate}
      />

      <button
        className="block w-full text-left px-2 py-1 hover:bg-gray-200 hover:text-black"
        onClick={showCreateFolderModel}
      >
        {name}
      </button>
    </div>
  );
}
