import { motion } from 'motion/react';

const techStack = [
  'React', 'Node.js', 'Figma', 'TypeScript', 'Supabase', 'Python', 
  'MongoDB', 'Express.js', 'Git', 'Framer', 'Vite', 'Postman'
];

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden py-8 border-y border-white/5 bg-[#050810]/50 backdrop-blur-sm relative z-10">
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
        {/* Render the list twice for seamless infinite scroll */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            {techStack.map((tech, index) => (
              <div key={`${i}-${index}`} className="flex items-center">
                <span className="text-white/60 font-mono text-sm uppercase tracking-widest px-8">
                  {tech}
                </span>
                <div className="w-1.5 h-1.5 bg-primary/40 rotate-45" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
