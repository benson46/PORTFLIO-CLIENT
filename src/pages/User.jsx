import React from 'react';
import { Element } from 'react-scroll';
import { HomeSection } from '../components/HomeSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

export function User() {
  return (
    <div className="single-page">
      <Element name="home">
        <HomeSection />
      </Element>
      
      <Element name="projects">
        <ProjectsSection/>
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