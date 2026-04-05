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
    <motion.section 
      id="hobbies" 
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
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">/ beyond the code</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center relative">
          {/* Stickers */}
          <motion.div 
            initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
            whileInView={{ opacity: 0.2, rotate: -10, scale: 1 }}
            className="absolute -top-10 -left-10 text-primary pointer-events-none z-0"
          >
            <Camera size={64} />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
            whileInView={{ opacity: 0.2, rotate: 20, scale: 1 }}
            className="absolute bottom-10 -right-10 text-secondary pointer-events-none z-0"
          >
            <Dribbble size={64} />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
            whileInView={{ opacity: 0.1, rotate: 30, scale: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none z-0"
          >
            <Code size={120} />
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4 text-white/90 px-2">Hobbies & Interests</h3>
            {hobbies.map((hobby, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group glass-card p-5 flex items-center gap-5 hover:bg-white/10 transition-colors cursor-default rounded-2xl"
              >
                <motion.div 
                  className="text-primary p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: [0, -15, 15, -15, 15, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {hobby.icon}
                </motion.div>
                <span className="text-white/80 font-medium font-sans text-lg">{hobby.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl border-t-4 border-t-secondary"
          >
            <h3 className="text-2xl font-heading font-semibold mb-8 text-white/90 text-center">Core Strengths</h3>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {softSkillsCloud.map((skill, index) => (
                <motion.span 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                  }}
                  whileHover={{ y: -5, scale: 1.05, backgroundColor: "rgba(0, 212, 200, 0.1)", borderColor: "rgba(0, 212, 200, 0.5)", color: "#00D4C8" }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 transition-colors cursor-default font-sans shadow-sm"
                  style={{ fontSize: `${Math.max(0.9, 1.1 - (index * 0.02))}rem` }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
