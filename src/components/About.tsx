import { motion } from 'motion/react';

const stats = [
  { value: '3+', label: 'Years of Building' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '4', label: 'Languages Spoken' },
  { value: 'CTO', label: 'at College IEDC' },
];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">/</span> about
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-2 aspect-square max-w-md mx-auto lg:mx-0">
              <img
                src="https://picsum.photos/seed/workspace/800/800"
                alt="Workspace"
                className="w-full h-full object-cover rounded-xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-10 mb-8">
              <p className="text-lg text-white/80 leading-relaxed">
                "I'm a Computer Engineering student at Seethi Sahib Memorial Polytechnic College, Tirur (2023–2026), working at the intersection of design and code. As CTO of my college's IEDC, I lead technical teams and drive innovation projects. I'm currently working as a Junior Developer at Infinio Technology Solutions, where I build full-stack web products and contribute to UI/UX redesigns. I speak English, Malayalam, Arabic, and Tamil — and I think in clean code and pixel-perfect layouts."
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 text-center flex flex-col justify-center"
                >
                  <h3 className="text-3xl font-heading font-bold text-gradient mb-2">{stat.value}</h3>
                  <p className="text-sm text-white/60 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
