import { motion } from 'framer-motion'

export const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'border border-blue-600 text-blue-600 hover:bg-blue-600/10',
    ghost: 'text-gray-300 hover:text-white'
  }

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}