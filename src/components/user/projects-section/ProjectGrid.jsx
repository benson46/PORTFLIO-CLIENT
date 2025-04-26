import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with MERN stack",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    image: "/projects/ecommerce.jpg",
    sourceLink: "#",
    liveLink: "#"
  },
  // Add more projects
];

export const ProjectsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};