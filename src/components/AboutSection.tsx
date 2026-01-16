import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
            About
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Full Stack Java Developer delivering production-grade web applications 
                where frontend behavior, backend services, messaging systems, and cloud 
                infrastructure work together to support real business workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Expertise in React and Angular interfaces, Spring Boot microservices, 
                Apache Kafka event streaming, and cloud deployments on AWS, Azure, and GCP.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3">
                  Education
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="text-foreground">M.S. Information Systems</p>
                    <p>Saint Louis University, 2024</p>
                  </div>
                  <div>
                    <p className="text-foreground">B.Tech Computer Science</p>
                    <p>Hyderabad, India, 2018</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3">
                  Certifications
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>AWS Cloud Practitioner</li>
                  <li>AWS Solutions Architect</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
