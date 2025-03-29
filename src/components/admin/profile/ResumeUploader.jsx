"use client"
import { FileText, Trash2 } from "lucide-react"
import { useRef } from "react"

export const ResumeUploader = ({ resumeFile, handleResumeUpload, setShowDeleteResumeConfirm }) => {
  const resumeInputRef = useRef(null)

  return (
    <div className="w-full">
      <input
        type="file"
        ref={resumeInputRef}
        onChange={handleResumeUpload}
        className="hidden"
        accept=".pdf,.doc,.docx"
      />
      
      {resumeFile ? (
        <div className="bg-[#2A2A2A] rounded-md p-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FileText className="text-blue-400" size={18} />
            <span className="text-gray-300 text-sm truncate">{resumeFile.name}</span>
          </div>
          <div className="flex gap-2">
            <a
              href={resumeFile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm text-center"
            >
              View
            </a>
            <button
              onClick={() => setShowDeleteResumeConfirm(true)}
              className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded text-sm"
              title="Delete resume"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => resumeInputRef.current.click()}
          className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white py-2 px-4 rounded-md transition-colors w-full text-center"
        >
          Upload Resume
        </button>
      )}
    </div>
  )
}