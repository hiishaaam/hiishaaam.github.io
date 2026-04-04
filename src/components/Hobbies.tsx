import { motion } from 'motion/react';
import { Camera, Car, Code, Dribbble, Video } from 'lucide-react';

const hobbies = [
  { name: 'Photography', icon: <Camera size={20} /> },
  { name: 'Driving', icon: <Car size={20} /> },
  { name: 'Coding & Designing', icon: <Code size={20} /> },
  { name: 'Football', icon: <Dribbble size={20} /> },
  { name: 'Videography & Video Editing', icon: <Video size={20} /> },
];

const softSkillsCloud = [
  'Problem Solving', 'Communication', 'Leadership', 'Networking', 
  'Teamwork', 'Adaptability', 'Better Understanding'
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">/</span> beyond the code
          </h2>
          <p className="text-white/60">When I'm not pushing pixels or code, here's what I do.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-heading font-semibold mb-6 text-white/90">Hobbies & Interests</h3>
            <div className="flex flex-col gap-3">
              {hobbies.map((hobby, index) => (
                <div key={index} className="glass-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                  <div className="text-primary">{hobby.icon}</div>
                  <span className="text-white/80 font-medium">{hobby.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-heading font-semibold mb-6 text-white/90">Core Strengths</h3>
            <div className="flex flex-wrap gap-3">
              {softSkillsCloud.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-secondary/50 hover:text-secondary transition-colors cursor-default"
                  style={{ fontSize: `${Math.max(0.85, 1.1 - (index * 0.03))}rem` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
