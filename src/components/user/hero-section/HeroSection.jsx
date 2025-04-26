import { motion } from 'framer-motion';
import { Button } from '../common/button/Button';
import { SocialLinks } from '../../admin/profile/SocialLinks';
import { Navbar } from '../common/Navbar/Navbar';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Benson B Varoors
            </h1>
            <h2 className="text-2xl lg:text-3xl text-blue-400 mb-8 font-mono">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl">
              Building digital experiences that combine creativity with technical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button href="#about" variant="primary">
                Explore My Work
              </Button>
              <Button href="/resume.pdf" download variant="secondary">
                Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 bg-blue-400 rounded-full overflow-hidden border-8 border-blue-400/20 hover:border-blue-400/40 transition-all">
              <img
                src="/profile.jpg"
                alt="Benson B Varoors"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        <SocialLinks className="mt-16 justify-center lg:justify-start" />
      </div>
    </section>
  );
};