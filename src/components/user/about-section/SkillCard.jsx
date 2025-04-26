import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';

const iconMap = {
  javascript: <SiJavascript />,
  react: <SiReact />,
  node: <SiNodedotjs />,
  // Add more icons as needed
};

export const SkillCard = ({ skill }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-gray-800 rounded-xl group transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
          <IconContext.Provider value={{ className: "w-6 h-6" }}>
            {iconMap[skill.icon] || <SiJavascript />}
          </IconContext.Provider>
        </div>
        <h3 className="text-xl font-semibold text-gray-100">{skill.name}</h3>
      </div>
      
      <div className="h-2 bg-gray-700 rounded-full">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
      
      <p className="mt-4 text-sm text-gray-400">{skill.description}</p>
    </motion.div>
  );
};