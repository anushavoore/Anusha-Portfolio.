import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 lg:pt-0" style={{ background: 'var(--gradient-hero)' }}>
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm font-medium">Saint Louis, Missouri</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
              Anusha Voore
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary font-medium mb-6">
              Senior Full Stack Java Developer
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              8+ years crafting production-grade web applications where frontend elegance meets 
              backend robustness. Currently building operational platforms at Uber.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/she-anu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={profilePhoto}
                  alt="Anusha Voore"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20" />
              <div className="absolute -z-20 -bottom-8 -right-8 w-full h-full rounded-2xl bg-secondary" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={24} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
