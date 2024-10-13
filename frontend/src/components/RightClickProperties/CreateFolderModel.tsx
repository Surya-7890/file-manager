import React, { useState } from "react";

interface CreateFolderModalProps {
  showModal: boolean;
  handleClose: () => void;
  handleCreate: (folderName: string) => void;
}

const CreateFolderModal: React.FC<CreateFolderModalProps> = ({
  showModal,
  handleClose,
  handleCreate,
}) => {
  const [folderName, setFolderName] = useState("");

  const onCreate = () => {
    if (!folderName.trim()) {
      // Ensure the folder name is not empty
      alert("Folder name cannot be empty!");
      return;
    }
    handleCreate(folderName);
    setFolderName("");
    handleClose();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-white text-lg font-semibold mb-4">
          Create New Folder
        </h2>
        <input
          type="text"
          placeholder="Enter folder name"
          className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={onCreate}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFolderModal;
