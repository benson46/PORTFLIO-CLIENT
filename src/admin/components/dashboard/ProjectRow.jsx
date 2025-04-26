import { Link } from 'react-router-dom'
import {ToggleButton,DeleteButton} from '../ui/ActionButton'
export const ProjectRow = ({ project, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
      <td className="p-4">
        <Link 
          to={`/admin/projects/${project.id}`} 
          className="hover:text-blue-400 transition-colors"
        >
          {project.title}
        </Link>
      </td>
      <td className="p-4 text-gray-400">{project.category}</td>
      <td className="p-4">
        <div className="flex gap-2">
          <ToggleButton action="edit" onClick={onEdit} />
          <DeleteButton action="delete" onClick={onDelete} />
        </div>
      </td>
    </tr>
  )
}