import React from "react"
import { Download } from "lucide-react"

export function Button({ children, variant = "primary", icon, href, download, className = "" }) {
  return (
    <a
      href={href}
      download={download}
      className={`
        inline-flex items-center justify-center px-6 py-3 rounded-lg text-white
        transition-colors duration-200 gap-2
        ${variant === "primary" ? "bg-[#5B9A8B] hover:bg-[#4A8B7C]" : ""}
        ${className}
      `}
    >
      {children}
      {icon === "download" && <Download className="w-5 h-5" />}
    </a>
  )
}