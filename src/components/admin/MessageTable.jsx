"use client"

import { useState } from "react"
import { ToggleButton, DeleteButton } from "../ui/admin/ActionButton"

export function MessagesTable() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "user1",
      message:
        "This is a message to inform you i want to contact you for some kind of project i just wondered about your projects",
      email: "test@gmail.com",
      isActive: true,
    },
    {
      id: 2,
      name: "user2",
      message:
        "This is a message to inform you i want to contact you for some kind of project i just wondered about your projects",
      email: "test@gmail.com",
      isActive: false,
    },
    {
      id: 3,
      name: "user3",
      message:
        "This is a message to inform you i want to contact you for some kind of project i just wondered about your projects",
      email: "test@gmail.com",
      isActive: true,
    },
    {
      id: 4,
      name: "user4",
      message:
        "This is a message to inform you i want to contact you for some kind of project i just wondered about your projects",
      email: "test@gmail.com",
      isActive: false,
    },
    {
      id: 5,
      name: "user5",
      message:
        "This is a message to inform you i want to contact you for some kind of project i just wondered about your projects",
      email: "test@gmail.com",
      isActive: true,
    },
  ])

  const toggleMessage = (id) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, isActive: !msg.isActive } : msg)))
  }

  const deleteMessage = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id))
  }

  // Sort messages to move active ones to the bottom
  const sortedMessages = [...messages].sort((a, b) => {
    if (a.isActive && !b.isActive) return 1
    if (!a.isActive && b.isActive) return -1
    return 0
  })

  return (
    <div className="w-full overflow-x-auto bg-[#222222] rounded-lg shadow-lg">
      <table className="w-full min-w-[800px] text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-3 sm:p-4 text-gray-300 font-medium">Name</th>
            <th className="p-3 sm:p-4 text-gray-300 font-medium">Message</th>
            <th className="p-3 sm:p-4 text-gray-300 font-medium">Email</th>
            <th className="p-3 sm:p-4 text-gray-300 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedMessages.map((msg) => (
            <tr
              key={msg.id}
              className={`
                border-b border-gray-700 hover:bg-[#2A2A2A] transition-colors
                ${msg.isActive ? "bg-[#1E2E29]" : ""}
              `}
            >
              <td className="p-3 sm:p-4 text-white">{msg.name}</td>
              <td className="p-3 sm:p-4 text-gray-400">
                <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg truncate" title={msg.message}>
                  {msg.message}
                </div>
              </td>
              <td className="p-3 sm:p-4 text-gray-400">{msg.email}</td>
              <td className="p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <ToggleButton isActive={msg.isActive} onToggle={() => toggleMessage(msg.id)} />
                  <DeleteButton onClick={() => deleteMessage(msg.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

