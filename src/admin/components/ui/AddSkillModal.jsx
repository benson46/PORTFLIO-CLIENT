import { useState } from 'react'
import Modal from '../layout/Modal'

export const AddSkillModal = ({ isOpen, onClose, onSubmit }) => {
  const [skillName, setSkillName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(skillName)
    setSkillName('')
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Skill">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Skill Name</label>
          <input
            type="text"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            className="w-full bg-gray-700 rounded-lg p-3"
            placeholder="e.g. React, Node.js"
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-300 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add Skill
          </button>
        </div>
      </form>
    </Modal>
  )
}