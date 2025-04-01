import { useState } from "react"
import { Sidebar } from "../../components/admin/Sidebar"
import { AddProjectButton } from "../../components/ui/admin/AddProjectButton"
import { ProjectModal } from "../../components/admin/project/ProjectModal"
import { DeleteModal } from "../../components/admin/project/DeleteModal"
import { ProjectCard } from "../../components/admin/project/ProjectCard"

export default function Project() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "GRAVITAL - Social Media Platform",
      image: "https://gravital-posts.s3.ap-south-1.amazonaws.com/images/1733472371223_674ee0892e2c1a6d8007d566_blob?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIASDRANBDWMBMKGWDY%2F20250120%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250120T152702Z&X-Amz-Expires=3600&X-Amz-Signature=769a874e6d10a4498df76185c116e07f0a342ae6709b2fd653c379c72f81a0a7&X-Amz-SignedHeaders=host&x-id=GetObject",
      details: [
        "Project Details in details then we go through it on what are the things i just done in my project",
        "Project Details in details then we go through it on what are the things i just done in my project",
      ],
      links: { github1: "", github2: "", live: "" }
    },
  ])

  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)
  const [projectToDelete, setProjectToDelete] = useState(null)

  const handleSubmit = (projectData) => {
    const newProject = {
      ...projectData,
      details: projectData.details || [''],
      links: projectData.links || { github1: '', github2: '', live: '' }
    }

    if (projectData.id) {
      setProjects(prevProjects => prevProjects.map(p => p.id === projectData.id ? newProject : p));
    } else {
      setProjects(prevProjects => [...prevProjects, { ...newProject, id: Date.now() }]);
    }
    setShowModal(false);
  }

  const handleDelete = () => {
    setProjects(prevProjects => prevProjects.filter(p => p.id !== projectToDelete.id));
    setShowDeleteModal(false);
    setProjectToDelete(null);
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 lg:p-8 ml-0 md:ml-64">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white">PROJECTS</h1>
            <AddProjectButton onClick={() => {
              setCurrentProject(null);
              setShowModal(true);
            }} />
          </div>

          <div className="space-y-4 md:space-y-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={() => {
                  setCurrentProject(project);
                  setShowModal(true);
                }}
                onDelete={() => {
                  setProjectToDelete(project);
                  setShowDeleteModal(true);
                }}
              />
            ))}
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        initialData={currentProject}
      />

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  )
}