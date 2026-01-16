import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Senior Full Stack Java Developer',
    company: 'Uber',
    period: 'July 2024 – Present',
  },
  {
    title: 'Full Stack Java Developer',
    company: 'Polaris',
    period: 'Oct 2021 – June 2024',
  },
  {
    title: 'Full Stack Developer',
    company: 'Vytalize Health',
    period: 'Feb 2020 – Sep 2021',
  },
  {
    title: 'Full Stack Java Developer',
    company: 'Austin Bank',
    period: 'June 2018 – Feb 2020',
  },
  {
    title: 'Java Developer',
    company: 'Chimera Technologies',
    period: 'June 2016 – May 2018',
  }
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-12">
            Experience
          </h2>

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group py-6 border-b border-border first:border-t"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-lg text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
