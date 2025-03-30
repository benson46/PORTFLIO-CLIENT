import { ProjectCard } from "../../components/user/ProjectCard"

const projects = [
  {
    title: "Xpwide Store - An Ecommerce website for gammers",
    description: [
      "Project Details in details then we go through it on what are the things i just done in my project",
      "Project Details in details then we go through it on what are the things i just done in my project",
      "Project Details in details then we go through it on what are the things i just done in my project",
    ],
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kbF0jYS0C6PMrnf3qKhtJe7y90TDz0.png",
    liveLink: "#",
    sourceCode: "#",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-6 sm:mb-8">PROJECTS</h1>
      <div className="space-y-4 sm:space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

