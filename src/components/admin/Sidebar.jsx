import React, { useState } from "react"
import { Menu, X } from "lucide-react"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = ["MESSAGES", "PROJECT", "SKILLS", "PROFILE"]

  return (
    <>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 left-4 z-50 md:hidden text-white">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-30 bg-[#1A1A1A] text-white z-40
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static
      `}
      >
        <div className="p-6">
          <h1 className="text-xl font-bold mb-8">Benson B Varoor</h1>
          <nav className="space-y-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block text-gray-300 hover:text-white transition-colors
                  ${item === "PROJECT" ? "text-white font-medium" : ""}
                `}
              >
                {item}
              </a>
            ))}
            <button className="text-gray-300 hover:text-white transition-colors">Logout</button>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}