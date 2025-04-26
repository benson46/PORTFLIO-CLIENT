import { useState } from 'react'
import { ProjectRow } from './ProjectRow'
import { ProjectFormModal } from './ProjectFormModal'
import { projectsService } from '../../api/projects'

export const ProjectsTable = () => {
  const [projects, setProjects] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)

  const handleSubmit = async (projectData) => {
    try {
      if (currentProject) {
        const updated = await projectsService.updateProject(currentProject.id, projectData)
        setProjects(projects.map(p => p.id === currentProject.id ? updated : p))
      } else {
        const newProject = await projectsService.createProject(projectData)
        setProjects([...projects, newProject])
      }
      setIsModalOpen(false)
    } catch (error) {
      console.error('Failed to save project:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await projectsService.deleteProject(id)
      setProjects(projects.filter(p => p.id !== id))
    } catch (error) {
      console.error('Failed to delete project:', error)
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Projects</h2>
        <button
          onClick={() => {
            setCurrentProject(null)
            setIsModalOpen(true)
          }}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Project
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <ProjectRow
                key={project.id}
                project={project}
                onEdit={() => {
                  setCurrentProject(project)
                  setIsModalOpen(true)
                }}
                onDelete={() => handleDelete(project.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        project={currentProject}
      />
    </div>
  )
}