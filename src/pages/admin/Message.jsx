import { Sidebar } from "../../components/admin/Sidebar"
import { MessagesTable } from "../../components/admin/MessageTable"

export default function Messages() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 mt-12 md:mt-0">MESSAGES</h1>
          <MessagesTable />
        </div>
      </main>
    </div>
  )
}
