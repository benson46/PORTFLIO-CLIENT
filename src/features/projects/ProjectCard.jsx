import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      className="relative group bg-gray-800 rounded-2xl overflow-hidden"
    >
      <div className="h-48 bg-gray-700 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
          <div className="flex gap-3">
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};