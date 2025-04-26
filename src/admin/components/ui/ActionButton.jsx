"use client"
import { Trash2 } from "lucide-react"

export function ToggleButton({ isActive, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`
        w-12 h-6 rounded-full p-1 transition-colors duration-200
        ${isActive ? "bg-[#5B9A8B]" : "bg-gray-600"}
      `}
    >
      <div
        className={`
          w-4 h-4 rounded-full bg-white transition-transform duration-200
          ${isActive ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </button>
  )
}

export function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick} className="text-gray-400 hover:text-red-500 transition-colors">
      <Trash2 size={20} />
    </button>
  )
}

