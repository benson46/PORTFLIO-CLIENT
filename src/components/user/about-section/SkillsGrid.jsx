import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

const skillsData = [
  {
    name: "JavaScript",
    icon: "javascript",
    proficiency: 95,
    description: "ES6+ syntax, Async programming, DOM manipulation"
  },
  {
    name: "React",
    icon: "react",
    proficiency: 90,
    description: "Hooks, Context API, React Router"
  },
  // Add more skills
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const SkillsGrid = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skillsData.map((skill, index) => (
        <motion.div key={index} variants={itemVariants}>
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </motion.div>
  );
};