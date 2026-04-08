import { motion, AnimatePresence } from 'motion/react';
import { Camera, Car, Code, Dribbble, Video, Plus } from 'lucide-react';
import React, { useState } from 'react';

const hobbies = [
  { name: 'Photography', icon: <Camera size={20} aria-hidden="true" />, desc: 'Capturing moments and framing the visual world.' },
  { name: 'Driving', icon: <Car size={20} aria-hidden="true" />, desc: 'Focus and endurance through exploring new roads.' },
  { name: 'UI/UX Coding & Designing', icon: <Code size={20} aria-hidden="true" />, desc: 'Transforming creative ideas into functional, full-stack digital reality.' },
  { name: 'Football', icon: <Dribbble size={20} aria-hidden="true" />, desc: 'Embracing team spirit, agile strategy, and leadership.' },
  { name: 'Videography & Editing', icon: <Video size={20} aria-hidden="true" />, desc: 'Directing, shooting, and piecing together compelling digital multimedia.' },
];

const softSkillsCloud = [
  'Problem Solving', 'Communication', 'Leadership', 'Networking',
  'Teamwork', 'Adaptability', 'Better Understanding'
];

export function Hobbies() {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  // Helper for accessibility: allow expanding via keyboard space/enter
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveHobby(activeHobby === index ? null : index);
    }
  };

  return (
    <motion.section
      id="hobbies"
      aria-labelledby="hobbies-heading"
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
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block" aria-hidden="true">/ beyond the code</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center relative">
          {/* Decorative Stickers - hidden from screen readers */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
            whileInView={{ opacity: 0.2, rotate: -10, scale: 1 }}
            animate={{
              y: [0, -15, 0],
              rotate: [-10, -15, -10]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 text-primary pointer-events-none z-0"
          >
            <Camera size={64} />
          </motion.div>

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
            whileInView={{ opacity: 0.2, rotate: 20, scale: 1 }}
            animate={{
              y: [0, 15, 0],
              rotate: [20, 25, 20]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -right-10 text-secondary pointer-events-none z-0"
          >
            <Dribbble size={64} />
          </motion.div>

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
            whileInView={{ opacity: 0.05, rotate: 30, scale: 1 }}
            animate={{
              rotate: [30, 40, 30],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none z-0"
          >
            <Code size={180} />
          </motion.div>

          {/* Hobbies - Semantic List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 relative z-10"
          >
            <h3 id="hobbies-heading" className="text-2xl font-heading font-semibold mb-4 text-white/90 px-2">Hobbies & Interests</h3>
            <ul className="flex flex-col gap-4 m-0 p-0" role="list">
              {hobbies.map((hobby, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setActiveHobby(index)}
                  onHoverEnd={() => setActiveHobby(null)}
                  className={`group glass-card overflow-hidden transition-all duration-300 ${activeHobby === index ? 'bg-white/10 ring-1 ring-white/20' : 'hover:bg-white/5'} cursor-pointer md:cursor-default rounded-2xl`}
                  tabIndex={0}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={activeHobby === index}
                  aria-label={`Show details for ${hobby.name}`}
                  role="button"
                >
                  <div className="p-5 flex items-center gap-5 pointer-events-none">
                    <motion.div
                      aria-hidden="true"
                      className={`p-3 rounded-full transition-colors duration-300 ${activeHobby === index ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/60'}`}
                      animate={activeHobby === index ? { rotate: [0, -15, 15, -15, 15, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {hobby.icon}
                    </motion.div>
                    <span className={`font-medium font-sans text-lg transition-colors duration-300 ${activeHobby === index ? 'text-white' : 'text-white/80'}`}>
                      {hobby.name}
                    </span>

                    <motion.div
                      aria-hidden="true"
                      className="ml-auto text-white/30"
                      animate={{ rotate: activeHobby === index ? 45 : 0 }}
                    >
                      <Plus size={18} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeHobby === index && (
                      <motion.div
                        id={`hobby-desc-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 pt-0 text-white/60 text-sm font-sans pl-[72px]"
                      >
                        {hobby.desc}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Soft Skills Cloud - Semantic List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl border-t-4 border-t-secondary relative z-10"
          >
            <h3 id="skills-heading" className="text-2xl font-heading font-semibold mb-2 text-white/90 text-center">Core Strengths</h3>
            <p className="text-center text-white/40 text-xs mb-8 font-sans" aria-hidden="true">Grab and drag them around!</p>

            <motion.ul
              className="flex flex-wrap gap-4 justify-center m-0 p-0 list-none"
              role="list"
              aria-labelledby="skills-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {softSkillsCloud.map((skill, index) => (
                <motion.li
                  key={index}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.6}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                  }}
                  whileDrag={{ scale: 1.1, zIndex: 10, cursor: "grabbing" }}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    backgroundColor: "rgba(0, 212, 200, 0.1)",
                    borderColor: "rgba(0, 212, 200, 0.5)",
                    color: "#00D4C8",
                    cursor: "grab"
                  }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 transition-colors font-sans shadow-sm select-none"
                  style={{ fontSize: `${Math.max(0.9, 1.1 - (index * 0.02))}rem` }}
                  aria-label={`Skill: ${skill}`}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
