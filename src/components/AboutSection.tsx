import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Bio */}
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a Full Stack Java Developer with over 8 years of experience delivering 
                production-grade web applications where frontend behavior, backend services, 
                messaging systems, data persistence, and cloud infrastructure operate together 
                to support real business workflows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans from engineering React-based user interfaces that consume 
                paginated and filterable REST APIs, to designing Spring Boot microservices 
                that handle concurrent request processing. I'm passionate about building 
                systems that are not just functional, but elegant, maintainable, and scalable.
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-6">
              {/* Education */}
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground text-sm">Master's in Information Systems</p>
                    <p className="text-muted-foreground text-sm">Saint Louis University, MO</p>
                    <p className="text-muted-foreground text-xs">2022 – 2024</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">B.Tech in Computer Science</p>
                    <p className="text-muted-foreground text-sm">Hyderabad, India</p>
                    <p className="text-muted-foreground text-xs">2015 – 2018</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="text-accent" size={20} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">Certifications</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">AWS Certified Cloud Practitioner</li>
                  <li className="text-sm text-muted-foreground">AWS Solutions Architect – Associate</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
