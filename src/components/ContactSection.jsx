import React from "react";
import { Element } from "react-scroll";
import { ProfileSection } from "./user/ProfileSection";
import { ResumeButton } from "./user/ResumeButton";
import { ContactForm } from "./user/ContactForm";


export function ContactSection() {
  return (
    <Element name="contact">
      <div className="min-h-screen bg-black text-white p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">BENSON B VAROOR</h1>
            <h2 className="text-xl text-gray-400">MERN STACK DEVELOPER</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <ProfileSection />
              <ResumeButton />
            </div>

            <ContactForm/>
          </div>
        </div>
      </div>
    </Element>
  );
}