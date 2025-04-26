import { useState } from 'react'
import { SkillCategory } from './SkillCategory'
import { AddSkillModal } from '../ui/AddSkillModal'
import { skillsService } from '../../api/skills'

export const SkillsSection = () => {
  const [skills, setSkills] = useState({
    languages: [],
    frameworks: [],
    tools: []
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState('')

  const handleAddSkill = async (category, name) => {
    try {
      const newSkill = await skillsService.createSkill({ name, category })
      setSkills(prev => ({
        ...prev,
        [category]: [...prev[category], newSkill]
      }))
    } catch (error) {
      console.error('Failed to add skill:', error)
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Skills Management</h2>
        <button 
          onClick={() => {
            setCurrentCategory('')
            setIsModalOpen(true)
          }}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Skill
        </button>
      </div>

      <div className="space-y-8">
        <SkillCategory 
          title="Languages"
          skills={skills.languages}
          onAdd={() => {
            setCurrentCategory('languages')
            setIsModalOpen(true)
          }}
        />
        <SkillCategory 
          title="Frameworks"
          skills={skills.frameworks}
          onAdd={() => {
            setCurrentCategory('frameworks')
            setIsModalOpen(true)
          }}
        />
        <SkillCategory 
          title="Tools"
          skills={skills.tools}
          onAdd={() => {
            setCurrentCategory('tools')
            setIsModalOpen(true)
          }}
        />
      </div>

      <AddSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(name) => handleAddSkill(currentCategory, name)}
      />
    </div>
  )
}