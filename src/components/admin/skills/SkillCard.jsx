import { useState } from "react";
import EditSkillModal from "./EditSkillModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export function SkillCard({ skill, onEdit, onDelete }) {
  const { name, category, _id } = skill;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="bg-[#1E1E1E] rounded-lg p-4 flex items-center justify-between hover:bg-[#252525] transition-colors">
      <div className="text-[#00D8FF]">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5ZM12 10.5C11.1716 10.5 10.5 9.82843 10.5 9C10.5 8.17157 11.1716 7.5 12 7.5C12.8284 7.5 13.5 8.17157 13.5 9C13.5 9.82843 12.8284 10.5 12 10.5ZM12 16.5C11.1716 16.5 10.5 15.8284 10.5 15C10.5 14.1716 11.1716 13.5 12 13.5C12.8284 13.5 13.5 14.1716 13.5 15C13.5 15.8284 12.8284 16.5 12 16.5Z" />
        </svg>
      </div>
      <span className="text-white">{name}</span>
      
      <div className="flex gap-2">
        {/* Edit Button */}
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="text-[#00D8FF] hover:text-[#009FCC] px-2 py-1 rounded-md transition-colors"
          aria-label="Edit skill"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>

        {/* Delete Button */}
        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className="text-red-500 hover:text-red-600 px-2 py-1 rounded-md transition-colors"
          aria-label="Delete skill"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      {/* Edit Modal */}
      <EditSkillModal
  isOpen={isEditModalOpen}
  onClose={() => setIsEditModalOpen(false)}
  onSubmit={(newName) => onEdit(newName)}
  currentName={name}
/>

      {/* Delete Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          onDelete(category, name);
          setIsDeleteModalOpen(false);
        }}
        skillName={name}
      />
    </div>
  );
}