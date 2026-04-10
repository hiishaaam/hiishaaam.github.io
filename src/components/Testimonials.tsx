import type React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Hisham doesn't just build what you ask for; he builds what the product actually needs. His ability to bridge design and engineering is rare.",
    name: "Ahammed",
    role: "Colleague @ Infinio",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahammed&backgroundColor=7B5CF0"
  },
  {
    quote: "As CTO of IEDC, he transformed how we approach projects. He leads by example, shipping real products instead of just talking about ideas.",
    name: "Fathima",
    role: "IEDC Member",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fathima&backgroundColor=00D4C8"
  },
  {
    quote: "The cleanest code I've seen from a student developer. He thinks about architecture and UI simultaneously.",
    name: "Rahul",
    role: "Senior Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=7B5CF0"
  },
  {
    quote: "EduFace was a game-changer for us. Hisham designed a seamless interface and backed it up with a rock-solid backend.",
    name: "Dr. Smitha",
    role: "Faculty Coordinator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Smitha&backgroundColor=00D4C8"
  }
];
type TestimonialCardProps = {
  key?: React.Key;
  testimonial: typeof testimonials[0];
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 shrink-0 flex flex-col gap-6 hover:bg-white/10 transition-colors">
      <Quote className="text-primary/40" size={32} />
      <p className="text-white/80 font-sans text-lg leading-relaxed flex-grow">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" decoding="async" className="w-12 h-12 rounded-full bg-white/10" />
        <div>
          <h4 className="text-white font-heading font-bold">{testimonial.name}</h4>
          <p className="text-white/50 text-sm font-sans">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">/ what they say</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white">
            Don't just take my word for it.
          </h2>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-6">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scroll Left */}
        <div className="flex w-fit animate-marquee-left hover:[animation-play-state:paused] gap-6 px-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-6">
              {testimonials.map((t, index) => (
                <TestimonialCard key={`${i}-${index}`} testimonial={t} />
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: Scroll Right */}
        <div className="flex w-fit animate-marquee-right hover:[animation-play-state:paused] gap-6 px-6 relative left-[-50%]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-6">
              {[...testimonials].reverse().map((t, index) => (
                <TestimonialCard key={`${i}-${index}`} testimonial={t} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(33.33%); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
