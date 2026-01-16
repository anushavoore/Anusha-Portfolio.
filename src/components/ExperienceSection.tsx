import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Senior Full Stack Java Developer',
    company: 'Uber',
    period: 'Jul 2024 – Present',
  },
  {
    title: 'Full Stack Java Developer',
    company: 'Polaris',
    period: 'Oct 2021 – Jun 2024',
  },
  {
    title: 'Full Stack Developer',
    company: 'Vytalize Health',
    period: 'Feb 2020 – Sep 2021',
  },
  {
    title: 'Full Stack Java Developer',
    company: 'Austin Bank',
    period: 'Jun 2018 – Feb 2020',
  },
  {
    title: 'Java Developer',
    company: 'Chimera Technologies',
    period: 'Jun 2016 – May 2018',
  }
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-border">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
            Experience
          </h2>

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="py-5 border-b border-border first:border-t flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-foreground">{exp.title}</span>
                  <span className="text-muted-foreground">—</span>
                  <span className="text-muted-foreground">{exp.company}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {exp.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
