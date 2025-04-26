import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle, align = 'left' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-${align} mb-12`}
    >
      <span className="text-blue-400 font-mono text-sm mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-4xl font-bold text-gray-100">{title}</h2>
      <div className="mt-4 w-16 h-1 bg-blue-500 rounded-full" />
    </motion.div>
  );
};