"use client"
import { useState } from "react"
import { Edit2, Linkedin, Github } from "lucide-react"

export const SocialLinks = ({ socialLinks, handleLinkChange }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="bg-[#1A1A1A] rounded-lg p-4 w-full mt-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-lg font-semibold uppercase">Social Links</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-400 hover:text-blue-300"
        >
          <Edit2 size={18} />
        </button>
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Linkedin className="text-blue-500" size={18} />
            <input
              type="text"
              value={socialLinks.linkedin}
              onChange={(e) => handleLinkChange(e, 'linkedin')}
              placeholder="LinkedIn URL"
              className="flex-1 bg-[#2A2A2A] text-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.67 1.67 0 0 0-.463 1.176l1.156 9.842a1.674 1.674 0 0 0 1.691 1.488h.002c.179 0 .354-.05.509-.146l4.408-2.563 4.41 2.563a1.67 1.67 0 0 0 1.691-1.488l1.156-9.842a1.67 1.67 0 0 0-.463-1.176l-3.854-4.126L14.445.438a1.374 1.374 0 0 0-.962-.438zm-2.866 12.815a.483.483 0 0 1-.462-.463l-.001-5.902a.483.483 0 0 1 .463-.463h1.93a.483.483 0 0 1 .462.463v5.902a.483.483 0 0 1-.462.463z"/>
            </svg>
            <input
              type="text"
              value={socialLinks.leetcode}
              onChange={(e) => handleLinkChange(e, 'leetcode')}
              placeholder="LeetCode URL"
              className="flex-1 bg-[#2A2A2A] text-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Github className="text-gray-300" size={18} />
            <input
              type="text"
              value={socialLinks.github}
              onChange={(e) => handleLinkChange(e, 'github')}
              placeholder="GitHub URL"
              className="flex-1 bg-[#2A2A2A] text-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {socialLinks.linkedin && (
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <Linkedin className="text-blue-500" size={18} />
              <span className="truncate">LinkedIn</span>
            </a>
          )}
          {socialLinks.leetcode && (
            <a 
              href={socialLinks.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.67 1.67 0 0 0-.463 1.176l1.156 9.842a1.674 1.674 0 0 0 1.691 1.488h.002c.179 0 .354-.05.509-.146l4.408-2.563 4.41 2.563a1.67 1.67 0 0 0 1.691-1.488l1.156-9.842a1.67 1.67 0 0 0-.463-1.176l-3.854-4.126L14.445.438a1.374 1.374 0 0 0-.962-.438zm-2.866 12.815a.483.483 0 0 1-.462-.463l-.001-5.902a.483.483 0 0 1 .463-.463h1.93a.483.483 0 0 1 .462.463v5.902a.483.483 0 0 1-.462.463z"/>
              </svg>
              <span className="truncate">LeetCode</span>
            </a>
          )}
          {socialLinks.github && (
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <Github size={18} />
              <span className="truncate">GitHub</span>
            </a>
          )}
          {!socialLinks.linkedin && !socialLinks.leetcode && !socialLinks.github && (
            <p className="text-gray-500 text-sm">No social links added</p>
          )}
        </div>
      )}
    </div>
  )
}