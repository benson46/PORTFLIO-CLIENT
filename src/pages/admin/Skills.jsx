import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/admin/Sidebar";
import { SkillSection } from "../../components/admin/skills/SkillSection";
import { SkillCard } from "../../components/admin/skills/SkillCard";
import { skillsService } from "../../services/skill";

export default function Skills() {
  const [skills, setSkills] = useState({
    "Language & Frameworks": [],
    "Database & Cloud": [],
    "Tools & Platforms": [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await skillsService.getSkills();
      if (response.success) setSkills(groupSkillsByCategory(response.skills));
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  const groupSkillsByCategory = (skills) => {
    const categories = {
      "Language & Frameworks": [],
      "Database & Cloud": [],
      "Tools & Platforms": [],
    };
    skills.forEach((skill) => categories[skill.category]?.push(skill));
    return categories;
  };

  console.log(skills);

  const handleAddSkill = async (category, skillName) => {
    try {
      const response = await skillsService.addSkill({
        name: skillName,
        category,
      });
      if (response.success) {
        setSkills((prev) => ({
          ...prev,
          [category]: [...prev[category], response.skill],
        }));
      }
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  const handleEditSkill = async (category, skillId, newName) => {
    try {
      const response = await skillsService.updateSkill(skillId, {
        name: newName,
      });
      console.log(newName);
      if (response.success) {
        setSkills((prev) => ({
          ...prev,
          [category]: prev[category].map((skill) =>
            skill._id === skillId ? { ...skill, name: newName } : skill
          ),
        }));
      }
    } catch (error) {
      console.error("Error updating skill:", error);
    }
  };

  const handleDeleteSkill = async (category, skillId) => {
    try {
      const response = await skillsService.deleteSkill(skillId);
      if (response.success) {
        setSkills((prev) => ({
          ...prev,
          [category]: prev[category].filter((skill) => skill._id !== skillId),
        }));
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  if (loading) return <div className="text-white p-8">Loading skills...</div>;

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">SKILLS</h1>

          {Object.entries(skills).map(([category, items]) => (
            <SkillSection
              key={category}
              title={category}
              onAddSkill={(skillName) => handleAddSkill(category, skillName)}
            >
              {items.map((skill) => (
                <SkillCard
                  key={skill._id}
                  skill={skill}
                  onEdit={(newName) =>
                    handleEditSkill(skill.category, skill._id, newName)
                  }
                  onDelete={() => handleDeleteSkill(skill.category, skill._id)}
                />
              ))}
            </SkillSection>
          ))}
        </div>
      </main>
    </div>
  );
}
