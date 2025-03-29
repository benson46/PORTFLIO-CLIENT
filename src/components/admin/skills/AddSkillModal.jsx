import { useState } from "react";
import Modal from "../Modal";

export default function AddSkillModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    skillName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData.skillName);
    setFormData({ skillName: "" });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ skillName: e.target.value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Skill">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="skillName"
            className="block text-sm font-medium text-white mb-2"
          >
            Skill Name
          </label>
          <input
            type="text"
            id="skillName"
            name="skillName"
            value={formData.skillName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#00D8FF]"
            placeholder="Enter skill"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#00D8FF] text-black rounded hover:bg-[#009FCC] transition-colors font-medium"
        >
          Add Skill
        </button>
      </form>
    </Modal>
  );
}
