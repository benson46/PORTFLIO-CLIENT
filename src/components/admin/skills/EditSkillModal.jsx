import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function EditSkillModal({ isOpen, onClose, onSubmit, currentName }) {
  const [newName, setNewName] = useState(currentName);

  useEffect(() => {
    setNewName(currentName);
  }, [currentName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newName);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Skill">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Skill Name
          </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#00D8FF]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#00D8FF] text-black rounded hover:bg-[#009FCC] font-medium"
        >
          Save Changes
        </button>
      </form>
    </Modal>
  );
}