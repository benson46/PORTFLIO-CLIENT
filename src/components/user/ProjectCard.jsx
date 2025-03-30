export function ProjectCard({ project }) {
  return (
    <div className="bg-[#242424] rounded-lg">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Logo Section */}
        <div className="sm:w-32 sm:h-32 w-full flex-shrink-0 bg-[#1a1a1a] rounded-lg flex items-center justify-center p-2">
          <div className="w-20 h-20 sm:w-24 sm:h-24">
            <img 
              src={project.logo || "/placeholder.svg"} 
              alt="Project logo" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>

        {/* Content Section with Responsive Blue Accent */}
        <div className="flex-1 relative sm:pl-6 sm:border-l-2 border-blue-500 pt-2 sm:pt-0">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
            <h2 className="text-lg sm:text-xl font-semibold">{project.title}</h2>
            <div className="flex sm:flex-col gap-2 sm:gap-1 text-sm">
              <a href={project.liveLink} className="text-blue-400 hover:text-blue-300 whitespace-nowrap">
                Live Demo →
              </a>
              <a href={project.sourceCode} className="text-blue-400 hover:text-blue-300 whitespace-nowrap">
                Source Code →
              </a>
            </div>
          </div>
          <ul className="space-y-2">
            {project.description.map((detail, idx) => (
              <li key={idx} className="text-gray-300 text-sm sm:text-base">
                • {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}