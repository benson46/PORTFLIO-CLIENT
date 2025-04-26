import { motion } from 'framer-motion'
import { SkillCard } from './SkillCard'

const skills = [
  {
    name: "JavaScript",
    level: 90,
    icon: "js",
    category: "languages"
  },
  {
    name: "React",
    level: 85,
    icon: "react",
    category: "frameworks"
  },
  {
    name: "Node.js",
    level: 80,
    icon: "node",
    category: "frameworks"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export const SkillsGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {skills.map((skill, index) => (
        <motion.div key={index} variants={itemVariants}>
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </motion.div>
  )
}