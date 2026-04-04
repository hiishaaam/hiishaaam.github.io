import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'Full Stack Development',
    issuer: 'Infinio Technology Solutions',
    year: '2025'
  },
  {
    name: 'MERN Stack Development',
    issuer: 'Coursera',
    year: '2024'
  },
  {
    name: 'UI & UX Design Certification',
    issuer: 'Friends of Figma',
    year: '2024'
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">/</span> certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white mb-1">{cert.name}</h3>
                <p className="text-sm text-white/60">{cert.issuer}</p>
                <p className="text-xs text-secondary mt-2 font-mono">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
