import { motion } from 'motion/react';
import { PenTool, Code, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    color: 'primary',
    icon: <PenTool size={32} className="text-primary" />,
    deliverables: [
      'Figma prototyping',
      'User flow diagrams',
      'Wireframes',
      'App & web UI design',
      'UX research',
      'Accessibility-focused design systems'
    ]
  },
  {
    title: 'Full-Stack Web Development',
    color: 'secondary',
    icon: <Code size={32} className="text-secondary" />,
    deliverables: [
      'MERN stack web applications',
      'REST API design',
      'Authentication systems',
      'Real-time features with Supabase',
      'Responsive frontend development'
    ]
  },
  {
    title: 'Technical Consulting & Leadership',
    color: 'primary',
    icon: <Lightbulb size={32} className="text-primary" />,
    deliverables: [
      'Tech architecture review',
      'Code audits',
      'Security reviews',
      'Student team mentoring',
      'Innovation project scoping (via IEDC experience)'
    ]
  }
];

export function Services() {
  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 relative z-10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">/</span> services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass-card p-8 flex flex-col hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:bg-white/10 ${service.color === 'primary' ? 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(123,92,240,0.15)]' : 'hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(0,212,200,0.15)]'}`}
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 }}
                className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                {service.icon}
              </motion.div>
              
              <div className="relative mb-6">
                <h3 className="text-2xl font-heading font-bold text-white">{service.title}</h3>
                <div className={`absolute -bottom-2 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${service.color === 'primary' ? 'from-primary to-transparent' : 'from-secondary to-transparent'}`} />
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-sans">
                    <span className={`mt-1 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors group/link">
                Let's Talk <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
