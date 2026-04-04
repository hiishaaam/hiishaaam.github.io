import { motion } from 'motion/react';

const designSkills = [
  'Figma Prototyping', 'User Flow Diagrams', 'UI Designing', 'Interaction Design',
  'Visual Design', 'Information Architecture', 'Usability Heuristics', 'Accessibility',
  'Responsive Design', 'User Testing', 'Framer Website Builder'
];

const devSkills = [
  'JavaScript', 'Python', 'HTML5', 'CSS3', 'React.js / React 19', 'Vite',
  'Node.js', 'Express.js', 'MongoDB', 'Supabase', 'PostgreSQL', 'MySQL',
  'REST API Design', 'JWT Auth', 'Zustand', 'Framer Motion', 'Recharts',
  'Git / GitHub', 'Vercel', 'Railway', 'Postman', 'Google Gemini AI', 'Geofencing APIs'
];

const softSkills = [
  'Problem Solving', 'Communication', 'Leadership', 'Teamwork', 'Adaptability'
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                <span key={skill} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-white/90">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                <span key={skill} className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-mono text-white/90">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-white/60 font-medium mr-4">Soft Skills:</span>
          {softSkills.map((skill) => (
            <span key={skill} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
