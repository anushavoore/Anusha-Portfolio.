import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'Redux', 'RxJS']
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Node.js', 'REST APIs', 'Microservices']
  },
  {
    title: 'Data',
    skills: ['PostgreSQL', 'Oracle', 'MongoDB', 'Redis', 'Kafka']
  },
  {
    title: 'Cloud',
    skills: ['AWS', 'Azure', 'GCP', 'Docker']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Jenkins', 'JUnit', 'Agile']
  }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-1">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
