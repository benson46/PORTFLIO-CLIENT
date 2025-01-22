import React, { useState } from "react"
import { Sidebar } from "../../components/admin/Sidebar"
import { ProjectCard } from "../../components/admin/ProjectCard"
import { AddProjectButton } from "../../components/admin/AddProjectButton"

export default function ProjectsEdit() {
  const [projects] = useState([
    {
      id: 1,
      title: "GRAVITAL - Social Medial Platform",
      image: "https://gravital-posts.s3.ap-south-1.amazonaws.com/images/1733472371223_674ee0892e2c1a6d8007d566_blob?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIASDRANBDWMBMKGWDY%2F20250120%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250120T152702Z&X-Amz-Expires=3600&X-Amz-Signature=769a874e6d10a4498df76185c116e07f0a342ae6709b2fd653c379c72f81a0a7&X-Amz-SignedHeaders=host&x-id=GetObject",
      details: [
        "Project Details in details then we go through it on what are the things i just done in my project",
        "Project Details in details then we go through it on what are the things i just done in my project",

      ],
    },
    // Add more projects as needed
  ])

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">PROJECTS</h1>
            <AddProjectButton />
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}