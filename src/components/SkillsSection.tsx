import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages & Core',
    skills: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'OOP', 'Data Structures', 'Multithreading']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'Redux', 'RxJS', 'HTML5', 'CSS3', 'Responsive Design']
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring MVC', 'RESTful APIs', 'Microservices', 'Node.js', 'Express']
  },
  {
    title: 'Messaging & Streaming',
    skills: ['Apache Kafka', 'RabbitMQ', 'Event-Driven Architecture']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB', 'Cassandra', 'Redis', 'Couchbase']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, RDS, S3)', 'Azure', 'GCP', 'Docker', 'Jenkins', 'GitLab CI/CD']
  },
  {
    title: 'Testing & Quality',
    skills: ['JUnit', 'Mockito', 'Jest', 'TDD', 'Integration Testing']
  },
  {
    title: 'Tools & Methods',
    skills: ['Git', 'GitHub', 'Agile Scrum', 'Log4j', 'Maven']
  }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-elevated p-6"
              >
                <h3 className="font-serif text-lg text-foreground mb-4 pb-3 border-b border-border">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
