import { Element } from 'react-scroll';
import { ProjectCard } from './user/ProjectCard';

const projects = [
  {
    title: "Xpwide Store - An Ecommerce website for gamers",
    description: [
      "Project Details in details then we go through it on what are the things i just done in my project",
      "Project Details in details then we go through it on what are the things i just done in my project",
      "Project Details in details then we go through it on what are the things i just done in my project",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kbF0jYS0C6PMrnf3qKhtJe7y90TDz0.png",
    liveLink: "#",
    sourceCode: "#",
  },
  // Add more projects as needed
];

export function ProjectsSection() {
  return (
    <Element name="projects">
      <div className="min-h-screen bg-[#1A1A1A] text-white p-4 sm:p-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">PROJECTS</h1>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}