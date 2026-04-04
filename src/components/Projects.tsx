import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'EduFace: Face Recognition Attendance System',
    badge: 'Jan 2025 · AI · Full-Stack',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'Google Gemini AI', 'Vercel'],
    description: 'AI-powered web app enabling 1,000+ students to mark attendance simultaneously using real-time facial recognition and GPS-based geo-fencing. Includes full security audit, role-based access control, and real-time Supabase sync.',
    tags: ['IEDC Project', 'Production Grade'],
    featured: true,
  },
  {
    title: 'AchieveLog: Study Tracker App',
    badge: 'Productivity',
    stack: ['React 18', 'TypeScript', 'Supabase', 'Zustand', 'Recharts', 'Framer Motion', 'Railway', 'Vercel'],
    description: 'Personal productivity app with session logging, analytics dashboards, exam countdown timers, streak tracking, and a real-time two-user companion/compare mode.',
    tags: [],
    featured: false,
  },
  {
    title: 'finder-sports.com: E-Commerce Platform',
    badge: 'E-Commerce',
    stack: ['React.js', 'Node.js', 'REST API', 'MongoDB'],
    description: 'Full-stack e-commerce website for a wellness product brand. Includes product listing, cart, checkout workflows, and frontend performance optimization with code splitting.',
    tags: [],
    link: 'https://finder-sports.com',
    featured: false,
  },
  {
    title: 'REST API Auth System',
    badge: 'Backend',
    stack: ['Node.js', 'Express.js', 'JWT', 'MongoDB'],
    description: 'Secure authentication system with JWT-based login, signup, and protected route middleware with proper error handling and token expiry.',
    tags: [],
    featured: false,
  },
  {
    title: 'DSA Practice',
    badge: 'Algorithms',
    stack: ['JavaScript', 'Python'],
    description: '50+ coding problems solved covering arrays, strings, recursion, trees, and dynamic programming — focused on time/space complexity optimization.',
    tags: [],
    featured: false,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">/</span> projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col ${project.featured ? 'lg:col-span-2 border-primary/30' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-white/5 text-secondary text-xs font-medium mb-3">
                    {project.badge}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{project.title}</h3>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <p className="text-white/70 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-white/5 text-xs font-mono text-white/60">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-glass-border">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors group">
                  View Project <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
