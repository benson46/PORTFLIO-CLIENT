export function ProjectCard({ project }) {
    return (
      <div className="bg-[#242424] rounded-lg">
        <div className="flex gap-6 p-6">
          {/* Logo Section */}
          <div className="relative w-32 h-32 flex-shrink-0 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
            <div className="w-24 h-24">
              <img src={project.logo || "/placeholder.svg"} alt="Project logo" className="w-full h-full object-contain" />
              <div className="text-center mt-1 text-sm font-semibold">XPWIDE</div>
            </div>
          </div>
  
          {/* Content Section with Blue Accent Line */}
          <div className="flex-1 relative pl-6 border-l-2 border-blue-500">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <div className="space-x-4 text-sm">
                <a href={project.liveLink} className="text-blue-400 hover:text-blue-300">
                  live link!
                </a>
                <a href={project.sourceCode} className="text-blue-400 hover:text-blue-300">
                  Source Code
                </a>
              </div>
            </div>
            <ul className="space-y-2">
              {project.description.map((detail, idx) => (
                <li key={idx} className="text-gray-300">
                  • {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  