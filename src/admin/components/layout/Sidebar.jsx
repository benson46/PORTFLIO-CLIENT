import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const menuItems = [
  { name: 'Dashboard', path: '/admin', icon: 'dashboard' },
  { name: 'Projects', path: '/admin/projects', icon: 'folder' },
  { name: 'Skills', path: '/admin/skills', icon: 'code' },
  { name: 'Messages', path: '/admin/messages', icon: 'mail' },
  { name: 'Profile', path: '/admin/profile', icon: 'user' }
]

export const Sidebar = () => {
  const { logout } = useAuth()

  return (
    <aside className="w-64 bg-gray-800 p-4 hidden md:block">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        
        <nav className="flex-1 py-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              <span className="capitalize">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <button
          onClick={logout}
          className="mt-auto p-4 text-red-400 hover:text-red-300 transition-colors"
        >
          Logout
        </button>
      </div>
    </aside>
  )
}