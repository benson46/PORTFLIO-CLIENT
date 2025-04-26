import { useState } from 'react'
import  Modal  from '../layout/Modal'
import { ImageUploader } from '../ui/ImageUploader'

export const ProjectFormModal = ({ isOpen, onClose, onSubmit, project }) => {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    category: project?.category || '',
    image: project?.image || null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project ? 'Edit Project' : 'Add Project'}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Project Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full bg-gray-700 rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="w-full bg-gray-700 rounded-lg p-3"
            required
          >
            <option value="">Select a category</option>
            <option value="web">Web Application</option>
            <option value="mobile">Mobile App</option>
            <option value="design">UI/UX Design</option>
          </select>
        </div>

        <ImageUploader
          image={formData.image}
          onUpload={(file) => setFormData({...formData, image: file})}
        />

        <div>
          <label className="block mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full bg-gray-700 rounded-lg p-3 min-h-[100px]"
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
            {project ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </Modal>
  )
}