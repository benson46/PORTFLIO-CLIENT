import React from 'react'

export function Input({ label, type = 'text', placeholder, ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-400">
          {label}
        </label>
      )}
      <input
        type={type}
        className="w-full px-4 py-3 bg-[#1E1E1E] rounded-lg border-0 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#5B9A8B]"
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}