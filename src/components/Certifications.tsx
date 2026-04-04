import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Full Stack Development',
    issuer: 'Infinio Technology Solutions',
    year: '2025',
    description: 'Comprehensive training in modern web development including React, Node.js, Express, and MongoDB.',
    link: '#'
  },
  {
    name: 'MERN Stack Development',
    issuer: 'Coursera',
    year: '2024',
    description: 'Specialization covering front-end and back-end development with the MERN stack.',
    link: '#'
  },
  {
    name: 'UI & UX Design Certification',
    issuer: 'Friends of Figma',
    year: '2024',
    description: 'Intensive internship and certification focusing on user-centered design, prototyping, and Figma mastery.',
    link: '#'
  }
];

export function Certifications() {
  return (
    <motion.section 
      id="certifications" 
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
            <span className="text-primary">/</span> certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="relative h-48 group"
              style={{ perspective: "1000px" }}
            >
              <div 
                className="w-full h-full transition-transform duration-700" 
                style={{ transformStyle: "preserve-3d" }}
              >
                <style>{`
                  .group:hover > div {
                    transform: rotateY(180deg);
                  }
                `}</style>
                {/* Front */}
                <div 
                  className="absolute inset-0 glass-card p-6 flex items-start gap-4" 
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-sm text-white/60 font-sans">{cert.issuer}</p>
                    <p className="text-xs text-secondary mt-2 font-mono">{cert.year}</p>
                  </div>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 glass-card p-6 flex flex-col justify-center items-center text-center bg-primary/5 border-primary/30" 
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-sm text-white/80 font-sans mb-4">{cert.description}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors">
                    Verify <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
