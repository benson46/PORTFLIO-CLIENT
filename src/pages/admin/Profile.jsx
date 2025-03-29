"use client"
import { useState, useRef } from "react"
import { Sidebar } from "../../components/admin/Sidebar"
import { ProfileImageUploader } from "../../components/admin/profile/ProfileImageUploader"
import { ResumeUploader } from "../../components/admin/profile/ResumeUploader"
import { SocialLinks } from "../../components/admin/profile/SocialLinks"
import { EditableSection } from "../../components/admin/profile/EditableSection"
import { ImageModal } from "../../components/admin/profile/ImageModal"
import { DeleteResumeModal } from "../../components/admin/profile/DeleteResumeModal"

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=200&width=200")
  const [summary, setSummary] = useState("Intro text: Lorem ipsum dolor sit amet...")
  const [aboutMe, setAboutMe] = useState("Intro text: Lorem ipsum dolor sit amet...")
  const [socialLinks, setSocialLinks] = useState({ linkedin: "", leetcode: "", github: "" })
  const [resumeFile, setResumeFile] = useState(null)
  const [hasChanges, setHasChanges] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [showDeleteResumeConfirm, setShowDeleteResumeConfirm] = useState(false)

  const fileInputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target.result)
        setHasChanges(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleResumeUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setResumeFile({
        name: file.name,
        url: URL.createObjectURL(file),
        file: file
      })
      setHasChanges(true)
    }
  }

  const handleDeleteResume = () => {
    if (resumeFile) {
      URL.revokeObjectURL(resumeFile.url)
      setResumeFile(null)
      setHasChanges(true)
    }
    setShowDeleteResumeConfirm(false)
  }

  const handleSummaryChange = (e) => {
    setSummary(e.target.value)
    setHasChanges(true)
  }

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value)
    setHasChanges(true)
  }

  const handleLinkChange = (e, platform) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: e.target.value
    }))
    setHasChanges(true)
  }

  const handleSaveChanges = () => {
    console.log("Saving changes:", { profileImage, summary, aboutMe, socialLinks, resumeFile })
    setHasChanges(false)
  }

  const openImageModal = () => {
    if (profileImage && profileImage !== "/placeholder.svg?height=200&width=200") {
      setIsImageModalOpen(true)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#1A1A1A]">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <ProfileImageUploader
                profileImage={profileImage}
                handleImageChange={handleImageChange}
                openImageModal={openImageModal}
                fileInputRef={fileInputRef}
              />

              <ResumeUploader
                resumeFile={resumeFile}
                handleResumeUpload={handleResumeUpload}
                setShowDeleteResumeConfirm={setShowDeleteResumeConfirm}
              />

              <SocialLinks
                socialLinks={socialLinks}
                handleLinkChange={handleLinkChange}
              />
            </div>

            <div className="flex-1 space-y-6 w-full">
              <EditableSection
                title="Summary"
                content={summary}
                onContentChange={handleSummaryChange}
              />

              <EditableSection
                title="About Me"
                content={aboutMe}
                onContentChange={handleAboutMeChange}
                textAreaHeight="min-h-[200px]"
              />

              {hasChanges && (
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveChanges}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors uppercase font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageUrl={profileImage}
        />

        <DeleteResumeModal
          isOpen={showDeleteResumeConfirm}
          onClose={() => setShowDeleteResumeConfirm(false)}
          onConfirm={handleDeleteResume}
        />
      </main>
    </div>
  )
}