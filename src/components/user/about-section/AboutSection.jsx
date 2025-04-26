import { motion } from 'framer-motion';
import { SkillsGrid } from './SkillsGrid';
import { SectionTitle } from '../common/section-tilte/SectionTitle';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Technical Expertise"
          align="center"
        />

        <div className="grid lg:grid-cols-3 gap-12 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              With 3+ years of experience in full-stack development, I specialize in building
              scalable web applications using modern technologies. My passion lies in creating
              efficient, maintainable code and solving complex problems.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects,
              exploring new technologies, or mentoring junior developers.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
            <SkillsGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
};