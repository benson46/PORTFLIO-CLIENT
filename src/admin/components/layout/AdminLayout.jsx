import { Sidebar } from './Sidebar'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
        <Toaster position="bottom-right" />
      </main>
    </div>
  )
}