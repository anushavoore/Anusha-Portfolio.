import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8 mx-auto" />

          <p className="text-lg text-muted-foreground mb-10">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and software development.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:avoore26@gmail.com"
              className="card-elevated p-6 group hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={20} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">avoore26@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/she-anu"
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated p-6 group hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Linkedin size={20} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                Connect <ArrowUpRight size={14} />
              </p>
            </a>

            <div className="card-elevated p-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin size={20} className="text-accent" />
              </div>
              <h3 className="font-medium text-foreground mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">Saint Louis, MO</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to new opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
};
