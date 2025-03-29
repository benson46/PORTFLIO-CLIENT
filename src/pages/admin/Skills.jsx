import React, { useState } from "react";
import { Sidebar } from "../../components/admin/Sidebar";
import { SkillSection } from "../../components/admin/skills/SkillSection";
import { SkillCard } from "../../components/admin/skills/SkillCard";

export default function Skills() {
  const [languageFrameworks, setLanguageFrameworks] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Node.js",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS",
  ]);

  const [databaseCloud, setDatabaseCloud] = useState([
    "MongoDB",
    "Redis",
    "Firebase",
  ]);

  const [toolsPlatforms, setToolsPlatforms] = useState([
    "Vite",
    "Git",
    "Github",
    "Postman",
    "AWS S3",
    "Redux toolkit",
  ]);

  const handleAddSkill = (category, skillName) => {
    if (category === "Language & Frameworks") {
      setLanguageFrameworks([...languageFrameworks, skillName]);
    } else if (category === "Database & Cloud") {
      setDatabaseCloud([...databaseCloud, skillName]);
    } else if (category === "Tools & Platforms") {
      setToolsPlatforms([...toolsPlatforms, skillName]);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">SKILLS</h1>

          <SkillSection
            title="Language & Frameworks"
            onAddSkill={(skillName) => handleAddSkill("Language & Frameworks", skillName)}
          >
            {languageFrameworks.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillSection>

          <SkillSection
            title="Database & Cloud"
            onAddSkill={(skillName) => handleAddSkill("Database & Cloud", skillName)}
          >
            {databaseCloud.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillSection>

          <SkillSection
            title="Tools & Platforms"
            onAddSkill={(skillName) => handleAddSkill("Tools & Platforms", skillName)}
          >
            {toolsPlatforms.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </SkillSection>
        </div>
      </main>
    </div>
  );
}
