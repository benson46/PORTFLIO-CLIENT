import React from "react"

export function SkillCard({ name }) {
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-4 flex items-center gap-3 hover:bg-[#252525] transition-colors">
      <div className="text-[#00D8FF]">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5ZM12 10.5C11.1716 10.5 10.5 9.82843 10.5 9C10.5 8.17157 11.1716 7.5 12 7.5C12.8284 7.5 13.5 8.17157 13.5 9C13.5 9.82843 12.8284 10.5 12 10.5ZM12 16.5C11.1716 16.5 10.5 15.8284 10.5 15C10.5 14.1716 11.1716 13.5 12 13.5C12.8284 13.5 13.5 14.1716 13.5 15C13.5 15.8284 12.8284 16.5 12 16.5Z" />
        </svg>
      </div>
      <span className="text-white">{name}</span>
    </div>
  )
}