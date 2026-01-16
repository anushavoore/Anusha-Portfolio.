import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex justify-center lg:justify-start"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 overflow-hidden">
              <img
                src={profilePhoto}
                alt="Anusha Voore"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4 leading-tight tracking-tight">
              Anusha Voore
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground font-light mb-6">
              Senior Full Stack Java Developer
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              8+ years building production-grade applications at Uber, Polaris, and beyond. 
              Focused on React, Spring Boot, and cloud infrastructure.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="mailto:avoore26@gmail.com"
                className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-sm"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/she-anu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
