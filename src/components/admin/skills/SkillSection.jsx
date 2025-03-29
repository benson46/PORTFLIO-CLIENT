import { useState } from "react";
import AddSkillModal from "./AddSkillModal";

export function SkillSection({ title, children, onAddSkill }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-white">{title}</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#5B9A8B] text-white px-4 py-2 rounded-lg hover:bg-[#4A8B7C] transition-colors"
        >
          ADD SKILL
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>

      <AddSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onAddSkill}
      />
    </div>
  );
}
