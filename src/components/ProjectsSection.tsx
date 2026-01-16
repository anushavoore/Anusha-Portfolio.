import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Server, Monitor, Database, Cloud } from 'lucide-react';

const projects = [
  {
    title: 'Live Event & Outage Operations Console',
    company: 'Uber',
    icon: Monitor,
    description: 'Internal operational platform for real-time incident management, service monitoring, and coordinated response workflows during system events.',
    tech: ['React', 'Redux Toolkit', 'Spring Boot', 'Java 17', 'Kafka', 'PostgreSQL', 'Redis'],
    features: ['Real-time incident timelines', 'RBAC enforcement', 'Audit trail tracking', 'Service health matrix']
  },
  {
    title: 'Vehicle Configuration Validation Tool',
    company: 'Polaris',
    icon: Server,
    description: 'Enterprise validation system evaluating thousands of vehicle configurations against manufacturing and regulatory constraints before production release.',
    tech: ['Angular', 'RxJS', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Azure'],
    features: ['Hierarchical form validation', 'BOM integration', 'Incremental re-validation', 'Audit compliance']
  },
  {
    title: 'TraceLens API Debugging Tool',
    company: 'Vytalize Health',
    icon: Database,
    description: 'Engineering console for investigating API failures across distributed healthcare services with secure access to request payloads and execution traces.',
    tech: ['React', 'Spring Boot', 'OAuth 2.0', 'AWS', 'Elasticsearch'],
    features: ['JSON payload inspection', 'Correlation ID tracing', 'Role-based access', 'Configurable capture rules']
  },
  {
    title: 'CoreBridge Integration Platform',
    company: 'Austin Bank',
    icon: Cloud,
    description: 'Banking integration platform mediating data exchange between legacy core systems and modern applications with contract enforcement.',
    tech: ['Angular', 'React', 'Node.js', 'Spring Boot', 'Oracle', 'Kafka', 'Redis'],
    features: ['Contract version control', 'Payload simulation', 'Breaking change detection', 'End-to-end tracing']
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elevated p-6 lg:p-8 group hover:shadow-elevated transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {project.company}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
