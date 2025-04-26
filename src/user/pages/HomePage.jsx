import { HeroSection } from '../components/HeroSection'
import {ContactSection} from '../../features/contact/ContactSection'
import {AboutSection} from '../../features/user-profile/AboutSection'
import {ProjectsSection} from '../../features/projects/ProjectSection'
import { Header } from '../components/Header'
export const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <Header/>
      <HeroSection />
      <ProjectsSection />  
      <AboutSection />
      <ContactSection />
    </div>
  )
}