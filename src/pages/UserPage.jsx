import { Element } from 'react-scroll';
import { HeroSection } from '../components/user/hero-section/HeroSection';
import { ProjectsSection } from '../components/user/projects-section/ProjectsSection';
import { AboutSection } from '../components/user/about-section/AboutSection';
import { ContactSection } from '../components/user/contact-section/ContactSection';

export function UserPage() {
  return (
    <div className="scroll-smooth">
      <Element name="home">
        <HeroSection />
      </Element>

      <Element name="projects">
        <ProjectsSection />
      </Element>

      <Element name="about">
        <AboutSection />
      </Element>

      <Element name="contact">
        <ContactSection />
      </Element>
    </div>
  );
}