"use client"
import { useState } from "react"
import { Edit2 } from "lucide-react"

export const EditableSection = ({ title, content, onContentChange, textAreaHeight = "min-h-[100px]" }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="bg-[#1A1A1A] rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-lg font-semibold uppercase">{title}</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-400 hover:text-blue-300"
        >
          <Edit2 size={18} />
        </button>
      </div>

      {isEditing ? (
        <textarea
          value={content}
          onChange={onContentChange}
          className={`w-full bg-[#2A2A2A] text-gray-300 p-3 rounded-md ${textAreaHeight} focus:outline-none focus:ring-1 focus:ring-blue-500`}
        />
      ) : (
        <p className="text-gray-300 whitespace-pre-line">{content}</p>
      )}
    </div>
  )
}