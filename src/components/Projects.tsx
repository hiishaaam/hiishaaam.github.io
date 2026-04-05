import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'EduFace: Face Recognition Attendance System',
    badge: '2025',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'Google Gemini AI', 'Vercel'],
    description: 'AI-powered web app enabling 1,000+ students to mark attendance simultaneously using real-time facial recognition and GPS-based geo-fencing.',
    featured: true,
  },
  {
    title: 'AchieveLog: Study Tracker App',
    badge: '2024',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    stack: ['React 18', 'TypeScript', 'Supabase', 'Zustand', 'Recharts', 'Framer Motion'],
    description: 'Personal productivity app with session logging, analytics dashboards, exam countdown timers, streak tracking, and a real-time two-user companion mode.',
    featured: false,
  },
  {
    title: 'finder-sports.com',
    badge: '2024',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800',
    stack: ['React.js', 'Node.js', 'REST API', 'MongoDB'],
    description: 'Full-stack e-commerce website for a wellness product brand. Includes product listing, cart, checkout workflows, and frontend performance optimization.',
    link: 'https://finder-sports.com',
    featured: false,
  },
  {
    title: 'REST API Auth System',
    badge: '2023',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    stack: ['Node.js', 'Express.js', 'JWT', 'MongoDB'],
    description: 'Secure authentication system with JWT-based login, signup, and protected route middleware with proper error handling and token expiry.',
    featured: false,
  },
  {
    title: 'DSA Practice',
    badge: '2023',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800',
    stack: ['JavaScript', 'Python'],
    description: '50+ coding problems solved covering arrays, strings, recursion, trees, and dynamic programming — focused on time/space complexity optimization.',
    featured: false,
  }
];

const getTechStyle = (tech: string) => {
  const styles: Record<string, { bg: string, text: string, border: string, glow: string }> = {
    'React 19': { bg: 'rgba(97, 218, 251, 0.1)', text: '#61DAFB', border: 'rgba(97, 218, 251, 0.2)', glow: 'rgba(97, 218, 251, 0.15)' },
    'React 18': { bg: 'rgba(97, 218, 251, 0.1)', text: '#61DAFB', border: 'rgba(97, 218, 251, 0.2)', glow: 'rgba(97, 218, 251, 0.15)' },
    'React.js': { bg: 'rgba(97, 218, 251, 0.1)', text: '#61DAFB', border: 'rgba(97, 218, 251, 0.2)', glow: 'rgba(97, 218, 251, 0.15)' },
    'TypeScript': { bg: 'rgba(49, 120, 198, 0.1)', text: '#61DAFB', border: 'rgba(49, 120, 198, 0.2)', glow: 'rgba(49, 120, 198, 0.15)' },
    'Node.js': { bg: 'rgba(51, 153, 51, 0.1)', text: '#4ade80', border: 'rgba(51, 153, 51, 0.2)', glow: 'rgba(51, 153, 51, 0.15)' },
    'Supabase': { bg: 'rgba(62, 207, 142, 0.1)', text: '#3ECF8E', border: 'rgba(62, 207, 142, 0.2)', glow: 'rgba(62, 207, 142, 0.15)' },
    'MongoDB': { bg: 'rgba(71, 162, 72, 0.1)', text: '#4ade80', border: 'rgba(71, 162, 72, 0.2)', glow: 'rgba(71, 162, 72, 0.15)' },
    'Python': { bg: 'rgba(55, 118, 171, 0.1)', text: '#60a5fa', border: 'rgba(55, 118, 171, 0.2)', glow: 'rgba(55, 118, 171, 0.15)' },
    'JavaScript': { bg: 'rgba(247, 223, 30, 0.1)', text: '#fde047', border: 'rgba(247, 223, 30, 0.2)', glow: 'rgba(247, 223, 30, 0.15)' },
  };
  return styles[tech] || { bg: 'rgba(255, 255, 255, 0.05)', text: 'rgba(255, 255, 255, 0.7)', border: 'rgba(255, 255, 255, 0.1)', glow: 'rgba(255, 255, 255, 0.05)' };
};

function ProjectCard({ project, index }: { key?: React.Key, project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

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

  const primaryStyle = getTechStyle(project.stack[0]);

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
      className={`relative bg-[#0a0f1a] border border-white/5 rounded-2xl flex flex-col group ${project.featured ? 'lg:col-span-2' : ''}`}
    >
      {/* Glow behind */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10 rounded-2xl pointer-events-none" 
        style={{ backgroundColor: primaryStyle.glow }}
      />

      {/* Content with 3D translation */}
      <div style={{ transform: "translateZ(20px)", display: "flex", flexDirection: "column", height: "100%" }}>
        
        {/* Full-width image */}
        <div className="w-full h-48 md:h-64 overflow-hidden rounded-t-2xl relative border-b border-white/5">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          {project.featured && (
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold tracking-wider uppercase animate-pulse-slow shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-white/5 text-white/60 text-xs font-mono mb-3 uppercase tracking-wider">
                {project.badge}
              </span>
              <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors z-10 shrink-0">
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

          <div className="mt-auto pt-6 border-t border-white/5">
            <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors group/btn">
              View Project 
              <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-2">&rarr;</span>
            </button>
          </div>
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
      className="py-32 relative z-10"
    >
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(224, 122, 95, 0.4); }
          50% { opacity: 0.8; box-shadow: 0 0 10px 2px rgba(224, 122, 95, 0.2); }
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
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">/ projects</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Callout Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-4 md:mb-0">
            Want to see it live?
          </h3>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold text-sm tracking-wider uppercase hover:bg-gray-200 transition-colors"
          >
            <Github size={18} />
            View GitHub
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
