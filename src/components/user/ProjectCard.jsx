export function ProjectCard({ project }) {
  return (
    <div className="bg-[#242424] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/4 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover md:h-56"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-3/4 p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h2>
          
          <ul className="space-y-3 mb-6">
            {project.description.map((detail, idx) => (
              <li key={idx} className="text-gray-300 text-lg">
                • {detail}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-6">
            <a 
              href={project.liveLink}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Live Demo
            </a>
            <a 
              href={project.sourceCode}
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-md transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}