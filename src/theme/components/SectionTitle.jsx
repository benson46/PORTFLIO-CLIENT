import { motion } from 'framer-motion'

export const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`${alignmentClasses[align]} ${className}`}
    >
      {subtitle && (
        <span className="text-blue-400 font-mono text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className={`h-1 w-16 bg-blue-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}