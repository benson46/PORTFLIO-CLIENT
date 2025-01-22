import React from "react"
import { Pencil, Link, Trash2 } from "lucide-react"

export function ProjectCard({ project }) {
  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        <div className="w-full md:w-64 h-48 bg-[#252525] rounded-lg overflow-hidden">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <div className="flex gap-4 text-gray-400">
              <button className="hover:text-[#5B9A8B] transition-colors">
                <Pencil size={20} />
              </button>
              <button className="hover:text-[#5B9A8B] transition-colors">
                <Link size={20} />
              </button>
              <button className="hover:text-red-500 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {project.details.map((detail, index) => (
              <li key={index} className="text-gray-400 flex items-start">
                <span className="mr-2">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}