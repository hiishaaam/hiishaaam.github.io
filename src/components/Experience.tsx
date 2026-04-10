import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const experiences = [
  {
    type: 'work',
    title: 'CTO, IEDC',
    company: 'Seethi Sahib Memorial Polytechnic College',
    period: 'Ongoing',
    points: [
      'Led technical vision and managed student development teams',
      'Oversaw end-to-end delivery of IEDC innovation projects',
      'Flagship output: EduFace Attendance System'
    ]
  },
  {
    type: 'work',
    title: 'Junior Developer',
    company: 'Infinio Technology Solutions',
    period: 'March 2025 – March 2026',
    points: [
      'Built finder-sports.com (full-stack e-commerce, React + Node.js + REST APIs)',
      'Designed reusable UI components and integrated checkout/cart backend APIs',
      'Frontend performance optimization, code splitting, Git version control',
      'UI/UX redesigns across multiple client web products',
      'Social media marketing for a crypto-based company'
    ]
  },
  {
    type: 'cert',
    title: 'Full Stack Development',
    issuer: 'Infinio Technology Solutions',
    year: '2025'
  },
  {
    type: 'cert',
    title: 'MERN Stack Development',
    issuer: 'Coursera',
    year: '2024'
  },
  {
    type: 'work',
    title: 'Figma Internship',
    company: 'Friends of Figma Kozhikkode',
    period: '1 Week',
    points: [
      'Studied Figma core features; mastered user flow and UX basics',
      'Created 10+ Figma designs for apps and web pages'
    ]
  },
  {
    type: 'cert',
    title: 'UI & UX Design',
    issuer: 'Friends of Figma',
    year: '2024'
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section 
      id="experience" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 relative z-10"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block" aria-hidden="true">/ experience</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">Experience & Certifications</h2>
        </motion.div>

        <div ref={containerRef} className="relative ml-4 md:ml-0">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
          <motion.div 
            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" 
            style={{ height: lineHeight, transformOrigin: "top" }} 
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`mb-12 pl-8 relative ${exp.type === 'cert' ? 'md:w-1/2' : ''}`}
            >
              {/* Timeline Dot/Diamond */}
              {exp.type === 'work' ? (
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -left-[5px] top-8 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(224,122,95,0.8)] z-10" 
                />
              ) : (
                <motion.div 
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: [0, 1.5, 1], rotate: 45 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -left-[4px] top-6 w-2 h-2 bg-secondary z-10" 
                />
              )}
              
              {exp.type === 'work' ? (
                <div className="glass-card p-6 md:p-8 hover:bg-white/5 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white mb-1">{exp.title}</h3>
                      <div className="relative inline-block group cursor-default">
                        <p className="text-secondary font-medium font-sans">{exp.company}</p>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-white/80 text-xs font-mono whitespace-nowrap shadow-inner">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.points?.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-sans">
                        <span className="text-primary/50 mt-1.5 text-[10px]">■</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="glass-card p-5 hover:bg-white/5 transition-colors duration-300 border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-2 py-1 bg-green-500/10 border-b border-l border-green-500/20 rounded-bl-lg">
                    <span className="text-[9px] font-mono font-bold text-green-400 tracking-widest uppercase">Certified</span>
                  </div>
                  <div className="flex justify-between items-center gap-4 pr-16">
                    <div>
                      <h4 className="text-base font-heading font-medium text-white/90 mb-1">{exp.title}</h4>
                      <p className="text-xs text-white/40 font-sans">{exp.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-white/30 shrink-0">{exp.year}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
