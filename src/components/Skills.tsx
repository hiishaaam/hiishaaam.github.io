import { motion } from 'motion/react';

const skills = [
  {
    title: 'Frontend Engineering',
    proof: 'Built a real-time attendance system handling 1,000+ concurrent users with React 19 and Supabase.',
    color: '#7B5CF0', // violet
    colSpan: 'md:col-span-2',
    logos: [
      { name: 'React', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg> },
      { name: 'TypeScript', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M9 14l2 2 4-4"/></svg> },
      { name: 'Tailwind', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4c-4 0-6 3-6 8s2 8 6 8 6-3 6-8-2-8-6-8z"/></svg> }
    ],
    bgVisual: (
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden flex items-center justify-center">
        <pre className="text-[8px] leading-tight font-mono text-white">
          {`function App() {
  const [state, setState] = useState()
  useEffect(() => {
    fetchData().then(res => setState(res))
  }, [])
  return <div className="app">...</div>
}`}
        </pre>
      </div>
    )
  },
  {
    title: 'UI/UX Design',
    proof: 'Designed 10+ high-fidelity prototypes and user flows during Friends of Figma internship.',
    color: '#D946EF', // pink/purple
    colSpan: 'md:col-span-1',
    logos: [
      { name: 'Figma', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg> },
      { name: 'Framer', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v8h-8v8l-8-8z"/></svg> }
    ],
    bgVisual: (
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      </div>
    )
  },
  {
    title: 'Backend & APIs',
    proof: 'Architected secure JWT auth systems and REST APIs for e-commerce platforms using Node.js.',
    color: '#00D4C8', // cyan
    colSpan: 'md:col-span-1',
    logos: [
      { name: 'Node.js', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
      { name: 'MongoDB', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2c-4 0-6 4-6 10s2 10 6 10 6-4 6-10-2-10-6-10z"/></svg> },
      { name: 'Supabase', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg> }
    ],
    bgVisual: (
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M20,50 L40,30 L60,70 L80,50" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="20" cy="50" r="3" fill="white"/>
          <circle cx="80" cy="50" r="3" fill="white"/>
        </svg>
      </div>
    )
  },
  {
    title: 'AI & Integrations',
    proof: 'Integrated Google Gemini AI for intelligent data processing and automated workflows.',
    color: '#F59E0B', // amber
    colSpan: 'md:col-span-2',
    logos: [
      { name: 'Python', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2c-4 0-6 2-6 6v4h12V8c0-4-2-6-6-6zM12 22c4 0 6-2 6-6v-4H6v4c0 4 2 6 6 6z"/></svg> },
      { name: 'Gemini', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"/></svg> }
    ],
    bgVisual: (
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="white" strokeWidth="1"/>
          <path d="M0,60 Q25,35 50,60 T100,60" fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      </div>
    )
  }
];

export function Skills() {
  return (
    <motion.section 
      id="skills" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-32 relative z-10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block" aria-hidden="true">/ skills</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">What I Work With</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative glass-card p-8 md:p-10 flex flex-col justify-between overflow-hidden border-l-4 transition-all duration-500 hover:scale-[1.02] ${skill.colSpan}`}
              style={{ borderLeftColor: 'rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = skill.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {/* Background Visual */}
              <div className="transition-opacity duration-500 group-hover:opacity-100 opacity-50">
                {skill.bgVisual}
              </div>

              <div className="relative z-10 mb-12">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight">
                  {skill.title}
                </h3>
                <p className="text-white/60 font-sans text-lg leading-relaxed max-w-md">
                  {skill.proof}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 mt-auto">
                {skill.logos.map((logo) => (
                  <div 
                    key={logo.name} 
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300"
                    title={logo.name}
                  >
                    <div className="w-5 h-5">
                      {logo.svg}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-white/40 font-sans italic">
            and yes, I wrote this portfolio's code too.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
