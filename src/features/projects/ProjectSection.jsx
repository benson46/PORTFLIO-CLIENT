import { motion } from 'framer-motion'
import { SectionTitle } from '../../theme/components/SectionTitle'
// import { ProjectsFilter } from './'
import {ProjectsGrid} from './ProjectGrid'
import { useState } from 'react'
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    image: "/projects/ecommerce.jpg",
    sourceLink: "#",
    liveLink: "#"
  },
  // Add more projects...
]

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Projects"
          subtitle="Featured Work"
          align="center"
        />
        
        {/* <ProjectsFilter 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        /> */}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ProjectsGrid projects={filteredProjects} />
        </motion.div>
      </div>
    </section>
  )
}