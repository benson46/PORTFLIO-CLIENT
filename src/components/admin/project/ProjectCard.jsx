import { Pencil, Trash2, Github, ExternalLink } from "lucide-react"

export function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden transition-transform md:hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-6">
        <div className="w-full md:w-64 h-32 md:h-48 bg-[#252525] rounded-lg overflow-hidden">
          <div className="aspect-[16/9] h-full w-full">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {project.title}
            </h3>
            <div className="flex gap-4 text-gray-400">
              <button
                onClick={onEdit}
                className="hover:text-[#5B9A8B] p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Pencil size={20} />
              </button>
              <button
                onClick={onDelete}
                className="hover:text-red-500 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
          
          <ul className="list-disc pl-4 space-y-2 mb-4 md:mb-6">
            {project.details.map((detail, index) => (
              <li key={index} className="text-sm md:text-base text-gray-300">
                {detail}
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {project.links.github1 && (
              <a
                href={project.links.github1}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5B9A8B] hover:bg-[#4A8B7C] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors w-full md:w-auto"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
            
            {project.links.github2 && (
              <a
                href={project.links.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5B9A8B] hover:bg-[#4A8B7C] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors w-full md:w-auto"
              >
                <Github size={18} />
                Client Code
              </a>
            )}
            
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5B9A8B] hover:bg-[#4A8B7C] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors w-full md:w-auto"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}