import { motion } from 'framer-motion'
import { Button } from '../../theme/components/Button'

export const HeroSection = () => {
  return (
    <section id='home' className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm Benson B Varoor
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Full-stack developer specializing in modern web technologies
          </p>
          <div className="flex gap-4">
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}