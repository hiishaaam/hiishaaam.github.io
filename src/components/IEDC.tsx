import { motion } from 'motion/react';

const photos = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
];

export function IEDC() {
  return (
    <section className="py-32 relative z-10 bg-[#050810]/40 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">/ community</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white">
            Building more than just software.
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-sans leading-relaxed">
            As the CTO of the IEDC at Seethi Sahib Memorial Polytechnic College, my work extends beyond the editor. It's about mentoring the next generation of builders, organizing hackathons, and creating an ecosystem where ideas turn into shipped products. We don't just write code; we build a culture of innovation.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling photo grid */}
      <div className="w-full overflow-hidden relative">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-fit animate-marquee-slow hover:[animation-play-state:paused] gap-6 px-6">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6">
              {photos.map((photo, index) => (
                <div 
                  key={`${i}-${index}`} 
                  className="w-72 md:w-96 aspect-[4/3] rounded-2xl overflow-hidden relative group shrink-0 border border-white/10"
                >
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <img 
                    src={photo} 
                    alt="IEDC Community Event" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
