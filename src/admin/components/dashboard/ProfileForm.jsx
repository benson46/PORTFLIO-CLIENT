import { useState } from 'react'
import { ImageUploader } from '../ui/ImageUploader'
import { SocialLinksForm } from './SocialLinksForm'

export const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: 'Benson B Varoor',
    title: 'Full Stack Developer',
    bio: 'Experienced developer specializing in modern web technologies...',
    image: '/profile.jpg',
    socialLinks: {
      github: '',
      linkedin: '',
      twitter: ''
    }
  })

  const handleImageUpload = (file) => {
    // Upload logic would go here
    const imageUrl = URL.createObjectURL(file)
    setProfile({ ...profile, image: imageUrl })
  }

  const handleSocialLinksChange = (updatedLinks) => {
    setProfile({
      ...profile,
      socialLinks: updatedLinks
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save logic would go here
    console.log('Profile saved:', profile)
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <ImageUploader
              image={profile.image}
              onUpload={handleImageUpload}
            />
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="w-full bg-gray-700 rounded-lg p-3"
              />
            </div>
            
            <div>
              <label className="block mb-2">Professional Title</label>
              <input
                type="text"
                value={profile.title}
                onChange={(e) => setProfile({...profile, title: e.target.value})}
                className="w-full bg-gray-700 rounded-lg p-3"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2">Bio</label>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({...profile, bio: e.target.value})}
            className="w-full bg-gray-700 rounded-lg p-3 min-h-[150px]"
          />
        </div>

        <SocialLinksForm
          links={profile.socialLinks}
          onChange={handleSocialLinksChange}
        />

        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Save Profile
        </button>
      </form>
    </div>
  )
}