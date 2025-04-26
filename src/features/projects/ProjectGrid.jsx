import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'

export const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard project={project} index={index} />
        </motion.div>
      ))}
    </div>
  )
}