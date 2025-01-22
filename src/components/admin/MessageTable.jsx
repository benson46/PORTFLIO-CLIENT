import React, { useState } from "react"
import { ToggleButton, DeleteButton } from "../ui/ActionButton"

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

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[800px] text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-4 text-gray-300">Name</th>
            <th className="p-4 text-gray-300">Message</th>
            <th className="p-4 text-gray-300">Email</th>
            <th className="p-4 text-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id} className="border-b border-gray-700">
              <td className="p-4 text-white">{msg.name}</td>
              <td className="p-4 text-gray-400 max-w-xl">{msg.message}</td>
              <td className="p-4 text-gray-400">{msg.email}</td>
              <td className="p-4">
                <div className="flex items-center gap-4">
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