import React from "react"

export function SkillSection({ title, children }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-white">{title}</h2>
        <button className="bg-[#5B9A8B] text-white px-4 py-2 rounded-lg hover:bg-[#4A8B7C] transition-colors">
          ADD SKILL
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
    </div>
  )
}