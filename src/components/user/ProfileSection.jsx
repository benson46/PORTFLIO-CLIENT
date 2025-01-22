import React from "react"
export function ProfileSection(){
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center">
      <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TUPCPwMjs0d3sPsiffM9FiT58CIYtY.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

