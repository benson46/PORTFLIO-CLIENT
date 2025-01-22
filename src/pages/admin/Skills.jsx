import React from "react"
import { Sidebar } from "../../components/admin/Sidebar"
import { SkillSection } from "../../components/admin/SkillSection"
import { SkillCard } from "../../components/admin/SkillCard"

export default function Skills() {
  const languageFrameworks = [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS",
  ]

  const databaseCloud = ["MongoDB", "Redis", "Firebase"]

  const toolsPlatforms = ["Vite", "Git", "Github", "Postman", "AWS S3", "Redux toolkit"]

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">SKILLS</h1>

          <SkillSection title="Language & Frameworks">
            {languageFrameworks.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillSection>

          <SkillSection title="Database & Cloud">
            {databaseCloud.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillSection>

          <SkillSection title="Tools & Platforms">
            {toolsPlatforms.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillSection>
        </div>
      </main>
    </div>
  )
}