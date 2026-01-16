import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
            Contact
          </h2>

          <p className="text-muted-foreground mb-8 max-w-lg">
            Open to discussing new opportunities and interesting projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:avoore26@gmail.com"
              className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Mail size={18} />
              avoore26@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/she-anu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin size={18} />
              linkedin.com/in/she-anu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
