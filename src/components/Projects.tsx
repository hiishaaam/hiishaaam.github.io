import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink } from 'lucide-react';

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

const getTechStyle = (tech: string) => {
  const styles: Record<string, { bg: string, text: string, border: string }> = {
    'React 19': { bg: 'rgba(97, 218, 251, 0.1)', text: '#61DAFB', border: 'rgba(97, 218, 251, 0.2)' },
    'React 18': { bg: 'rgba(97, 218, 251, 0.1)', text: '#61DAFB', border: 'rgba(97, 218, 251, 0.2)' },
    'React.js': { bg: 'rgba(97, 218, 251, 0.1)', text: '#61DAFB', border: 'rgba(97, 218, 251, 0.2)' },
    'TypeScript': { bg: 'rgba(49, 120, 198, 0.1)', text: '#61DAFB', border: 'rgba(49, 120, 198, 0.2)' },
    'Node.js': { bg: 'rgba(51, 153, 51, 0.1)', text: '#4ade80', border: 'rgba(51, 153, 51, 0.2)' },
    'Supabase': { bg: 'rgba(62, 207, 142, 0.1)', text: '#3ECF8E', border: 'rgba(62, 207, 142, 0.2)' },
    'MongoDB': { bg: 'rgba(71, 162, 72, 0.1)', text: '#4ade80', border: 'rgba(71, 162, 72, 0.2)' },
    'Python': { bg: 'rgba(55, 118, 171, 0.1)', text: '#60a5fa', border: 'rgba(55, 118, 171, 0.2)' },
    'JavaScript': { bg: 'rgba(247, 223, 30, 0.1)', text: '#fde047', border: 'rgba(247, 223, 30, 0.2)' },
  };
  return styles[tech] || { bg: 'rgba(255, 255, 255, 0.05)', text: 'rgba(255, 255, 255, 0.7)', border: 'rgba(255, 255, 255, 0.1)' };
};

function ProjectCard({ project, index }: { key?: React.Key, project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`relative glass-card p-8 flex flex-col group ${project.featured ? 'lg:col-span-2' : ''}`}
    >
      {/* Top border matching primary tech color (using first stack item as primary) */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" 
        style={{ background: `linear-gradient(90deg, ${getTechStyle(project.stack[0]).text}, transparent)` }}
      />
      
      {/* Glow behind */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10 rounded-2xl pointer-events-none" />

      {/* Content with 3D translation */}
      <div style={{ transform: "translateZ(20px)", display: "flex", flexDirection: "column", height: "100%" }}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-white/5 text-secondary text-xs font-mono mb-3 uppercase tracking-wider">
              {project.badge}
            </span>
            <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors z-10">
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <p className="text-white/70 leading-relaxed mb-6 flex-grow font-sans">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech: string) => {
            const style = getTechStyle(tech);
            return (
              <span 
                key={tech} 
                className="px-3 py-1 rounded-md text-xs font-mono border transition-colors duration-300"
                style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-glass-border">
          <div className="flex gap-2">
            {project.tags.map((tag: string) => (
              <span 
                key={tag} 
                className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${tag === 'Featured' || project.featured ? 'bg-primary/20 text-primary animate-pulse-slow' : 'bg-white/10 text-white/80'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors group/btn">
            View Project 
            <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-2">&rarr;</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 relative z-10"
    >
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(123, 92, 240, 0.4); }
          50% { opacity: 0.8; box-shadow: 0 0 10px 2px rgba(123, 92, 240, 0.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
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

        <div className="grid lg:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
