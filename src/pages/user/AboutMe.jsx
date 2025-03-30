import React, { useState, useEffect } from "react";
import { skillsService } from "../../services/skill";

export function AboutMe() {
  const [skills, setSkills] = useState({
    "Language & Frameworks": [],
    "Database & Cloud": [],
    "Tools & Platforms": [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await skillsService.getSkills();
        if (response.success) {
          setSkills(groupSkillsByCategory(response.skills));
        }
      } catch (err) {
        setError("Failed to load skills");
        console.error("Error fetching skills:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const groupSkillsByCategory = (skills) => {
    const categories = {
      "Language & Frameworks": [],
      "Database & Cloud": [],
      "Tools & Platforms": [],
    };
    skills.forEach((skill) => categories[skill.category]?.push(skill));
    return categories;
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">BENSON B VAROOR</h1>
        <h2 className="text-xl text-gray-400 mb-8">MERN STACK DEVELOPER</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sNUHTsRDbeL00x043DEUQe2lnAKeBp.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
              RESUME
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 space-y-12">
          {loading ? (
            <p className="text-gray-400 text-center">Loading skills...</p>
          ) : error ? (
            <p className="text-red-400 text-center">{error}</p>
          ) : (
            Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-100">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((skill) => (
                    <div
                      key={skill._id}
                      className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}