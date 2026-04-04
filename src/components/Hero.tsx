import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-glass border border-glass-border text-secondary text-sm font-medium mb-6">
              UI/UX Designer & Full-Stack Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              Muhammed <br />
              <span className="text-gradient">Hisham A</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
              Building experiences that are both beautiful and engineered to scale.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects &rarr;
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-glass border border-glass-border text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hishamaju189@gmail.com" className="text-white/50 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-primary/30 to-secondary/30 backdrop-blur-3xl border border-white/10">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background relative">
                <img
                  src="https://picsum.photos/seed/hisham/800/800"
                  alt="Muhammed Hisham A"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 glass-card px-4 py-2 flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-[#61DAFB]" />
                <span className="text-sm font-medium">React</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-8 glass-card px-4 py-2 flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-[#F24E1E]" />
                <span className="text-sm font-medium">Figma</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 left-20 glass-card px-4 py-2 flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-[#339933]" />
                <span className="text-sm font-medium">Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
