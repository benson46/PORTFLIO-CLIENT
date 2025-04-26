import { motion } from 'framer-motion'
import { SectionTitle } from '../../theme/components/SectionTitle'
// import { SkillsGrid } from '../skills/'

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="My Journey"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              With 3+ years of experience in web development, I specialize in building
              scalable applications using modern technologies like React, Node.js, and
              MongoDB.
            </p>
            <p className="text-lg text-gray-300">
              My passion lies in creating efficient, maintainable code and solving
              complex problems with elegant solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
            {/* <SkillsGrid /> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}