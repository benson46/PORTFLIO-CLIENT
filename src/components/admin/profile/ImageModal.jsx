"use client"
import { X } from "lucide-react"

export const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>
        <img
          src={imageUrl}
          alt="Profile Preview"
          className="max-w-full max-h-[80vh] object-contain mx-auto"
        />
      </div>
    </div>
  )
}