import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Java Developer',
    company: 'Uber',
    location: 'Saint Louis, Missouri',
    period: 'July 2024 – Present',
    project: 'Live Event & Outage Operations Console',
    description: 'Building an internal operational platform for engineering teams during live system events and outages. Provides real-time visibility into operational signals, coordinated response workflows, and post-incident audit tracking.',
    highlights: [
      'Built React SPA with Redux Toolkit for incident management',
      'Developed Spring Boot microservices on Java 17',
      'Implemented Apache Kafka for near real-time updates',
      'Added Redis caching for stable console responses under load'
    ]
  },
  {
    title: 'Full Stack Java Developer',
    company: 'Polaris',
    location: 'Roseau, MN',
    period: 'Oct 2021 – June 2024',
    project: 'Vehicle Configuration Validation Tool (VCVT)',
    description: 'Enterprise system for validating vehicle build configurations before production release. Evaluates thousands of option combinations across vehicle subsystems.',
    highlights: [
      'Developed Angular SPA with lazy loading and reactive forms',
      'Built validation logic with Spring Boot and PostgreSQL',
      'Integrated Apache Kafka for downstream event publishing',
      'Deployed on Azure App Service with CI/CD pipelines'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Vytalize Health',
    location: 'Hoboken, NJ',
    period: 'Feb 2020 – Sep 2021',
    project: 'TraceLens – API Debugging Tool',
    description: 'Engineering console for investigating API failures and data inconsistencies across distributed healthcare services with controlled access to request payloads and execution traces.',
    highlights: [
      'React-based inspection interface with custom JSON viewer',
      'Spring Boot backend for payload capture and retrieval',
      'OAuth 2.0 role-based access controls',
      'AWS deployment with managed Elasticsearch'
    ]
  },
  {
    title: 'Full Stack Java Developer',
    company: 'Austin Bank',
    location: 'Austin, TX',
    period: 'June 2018 – Feb 2020',
    project: 'CoreBridge – System Integration Platform',
    description: 'Banking integration platform standardizing data exchange between legacy core systems and modern applications with contract enforcement and version compatibility.',
    highlights: [
      'Angular & React applications for payload inspection',
      'Node.js Express gateway with Java Spring Boot services',
      'Oracle Database with Redis caching',
      'Kafka-based contract violation events'
    ]
  }
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-soft" />

                  <div className="card-elevated p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-serif text-xl lg:text-2xl text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={14} className="text-primary" />
                          <span className="text-primary font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                        {exp.project}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
