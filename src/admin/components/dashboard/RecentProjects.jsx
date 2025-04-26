import { Link } from 'react-router-dom'

export const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      status: "Live",
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      title: "Portfolio Website",
      status: "In Progress",
      lastUpdated: "1 week ago"
    }
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Recent Projects</h3>
        <Link to="/admin/projects" className="text-blue-400 hover:text-blue-300 text-sm">
          View All
        </Link>
      </div>
      
      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="flex justify-between items-center p-3 hover:bg-gray-700 rounded-lg transition-colors">
            <div>
              <h4 className="font-medium">{project.title}</h4>
              <p className="text-sm text-gray-400">{project.status}</p>
            </div>
            <span className="text-xs text-gray-500">{project.lastUpdated}</span>
          </div>
        ))}
      </div>
    </div>
  )
}