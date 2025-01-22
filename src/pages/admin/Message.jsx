import React from "react"
import { Sidebar } from "../../components/admin/Sidebar"
import { MessagesTable } from "../../components/admin/MessageTable"

export default function Messages() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">MESSAGES</h1>
          <MessagesTable />
        </div>
      </main>
    </div>
  )
}