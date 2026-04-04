import { motion } from 'motion/react';

const experiences = [
  {
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
    title: 'Figma Internship',
    company: 'Friends of Figma Kozhikkode',
    period: '1 Week',
    points: [
      'Studied Figma core features; mastered user flow and UX basics',
      'Created 10+ Figma designs for apps and web pages'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">/</span> experience
          </h2>
        </motion.div>

        <div className="relative border-l border-glass-border ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(108,99,255,0.8)]" />
              
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">{exp.title}</h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="text-primary/50 mt-1">-</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
