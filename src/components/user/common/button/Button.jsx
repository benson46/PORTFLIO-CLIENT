import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10',
    ghost: 'text-gray-300 hover:text-white'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-lg font-medium transition-colors ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};