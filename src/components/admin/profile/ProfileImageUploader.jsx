"use client"
import { useRef } from "react"

export const ProfileImageUploader = ({ profileImage, handleImageChange, openImageModal }) => {
  const fileInputRef = useRef(null)
  
  return (
    <div className="flex flex-col items-center gap-4 w-full md:w-auto">
      <div className="relative cursor-pointer" onClick={openImageModal}>
        <img
          src={profileImage || "/placeholder.svg"}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-[#2A2A2A] hover:opacity-90 transition-opacity"
        />
      </div>
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white py-2 px-4 rounded-md transition-colors w-full text-center"
      >
        Change Profile
      </button>
      <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
    </div>
  )
}