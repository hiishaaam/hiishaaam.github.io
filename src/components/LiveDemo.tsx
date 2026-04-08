import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export function LiveDemo() {
  return (
    <section className="py-24 relative z-10 bg-[#050810]/80 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight text-white">
            I don't just design screens. <br className="hidden md:block" />
            <span className="text-primary">I ship products.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* EduFace Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-xl border border-white/10 bg-[#0a0f1a] overflow-hidden shadow-2xl flex flex-col h-full">
              {/* Browser Header */}
              <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto bg-white/5 rounded text-[10px] font-mono text-white/40 px-4 py-0.5 flex items-center gap-2">
                  eduface.app <ExternalLink size={10} />
                </div>
              </div>
              {/* Browser Content */}
              <div className="aspect-video bg-[#050810] relative overflow-hidden flex items-center justify-center">
                {/* Placeholder for actual iframe or video */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" 
                  alt="EduFace Demo" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-mono text-white/80 border border-white/10">
                    Live Demo: EduFace
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AchieveLog Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-xl border border-white/10 bg-[#0a0f1a] overflow-hidden shadow-2xl flex flex-col h-full">
              {/* Browser Header */}
              <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto bg-white/5 rounded text-[10px] font-mono text-white/40 px-4 py-0.5 flex items-center gap-2">
                  achievelog.app <ExternalLink size={10} />
                </div>
              </div>
              {/* Browser Content */}
              <div className="aspect-video bg-[#050810] relative overflow-hidden flex items-center justify-center">
                {/* Placeholder for actual iframe or video */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
                  alt="AchieveLog Demo" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-mono text-white/80 border border-white/10">
                    Live Demo: AchieveLog
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
