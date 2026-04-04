import { motion } from 'motion/react';

const designSkills = [
  { name: 'Figma Prototyping', level: 'Advanced' },
  { name: 'User Flow Diagrams', level: 'Advanced' },
  { name: 'UI Designing', level: 'Advanced' },
  { name: 'Interaction Design', level: 'Intermediate' },
  { name: 'Visual Design', level: 'Advanced' },
  { name: 'Information Architecture', level: 'Intermediate' },
  { name: 'Usability Heuristics', level: 'Intermediate' },
  { name: 'Accessibility', level: 'Intermediate' },
  { name: 'Responsive Design', level: 'Advanced' },
  { name: 'User Testing', level: 'Intermediate' },
  { name: 'Framer Website Builder', level: 'Intermediate' }
];

const devSkills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3', level: 'Advanced' },
  { name: 'React.js / React 19', level: 'Advanced' },
  { name: 'Vite', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Express.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Supabase', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'REST API Design', level: 'Advanced' },
  { name: 'JWT Auth', level: 'Intermediate' },
  { name: 'Zustand', level: 'Advanced' },
  { name: 'Framer Motion', level: 'Advanced' },
  { name: 'Recharts', level: 'Intermediate' },
  { name: 'Git / GitHub', level: 'Advanced' },
  { name: 'Vercel', level: 'Advanced' },
  { name: 'Railway', level: 'Intermediate' },
  { name: 'Postman', level: 'Advanced' },
  { name: 'Google Gemini AI', level: 'Intermediate' },
  { name: 'Geofencing APIs', level: 'Intermediate' }
];

const softSkills = [
  'Problem Solving', 'Communication', 'Leadership', 'Teamwork', 'Adaptability'
];

export function Skills() {
  return (
    <motion.section 
      id="skills" 
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
            <span className="text-primary">/</span> skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 overflow-hidden">
          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            className="glass-card p-8 border-t-4 border-t-primary"
          >
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5A8.5 8.5 0 1 0 3.5 12v8.5H12z"/><path d="M12 3.5A8.5 8.5 0 1 1 20.5 12H12V3.5z"/></svg>
              </span>
              Design Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill) => (
                <div key={skill.name} className="group relative">
                  <span className="block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-white/90 cursor-default transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(123,92,240,0.4)]">
                    {skill.name}
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                    {skill.level}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50, delay: 0.1 }}
            className="glass-card p-8 border-t-4 border-t-secondary"
          >
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </span>
              Development Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((skill) => (
                <div key={skill.name} className="group relative">
                  <span className="block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-mono text-white/90 cursor-default transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-secondary/20 group-hover:border-secondary/50 group-hover:shadow-[0_0_15px_rgba(0,212,200,0.4)]">
                    {skill.name}
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                    {skill.level}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="glass-card p-6 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            className="text-white/60 font-medium mr-4"
          >
            Soft Skills:
          </motion.span>
          {softSkills.map((skill) => (
            <motion.span 
              key={skill} 
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0], transition: { duration: 0.3 } }}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
