import { motion } from "framer-motion";
import { SectionTitle } from "../common/section-tilte/SectionTitle";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's Work Together"
          align="center"
        />

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mt-16 bg-gray-800 p-8 rounded-2xl shadow-xl"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};