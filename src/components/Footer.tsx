import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 relative z-10 bg-[#050810]/80 backdrop-blur-md">
      {/* Animated Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-white/50 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xs text-white/40 font-sans"
          >
            © 2025 Muhammed Hisham A · Designed & Built by Hisham
          </motion.p>
          
          <style>{`
            @keyframes pulse-reminder {
              0%, 90%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(123, 92, 240, 0); }
              95% { transform: scale(1.1); box-shadow: 0 0 15px 2px rgba(123, 92, 240, 0.4); }
            }
            .animate-pulse-reminder {
              animation: pulse-reminder 4s infinite;
            }
          `}</style>
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-white/50 hover:text-white transition-all duration-300 animate-pulse-reminder border border-white/5 hover:border-primary/50"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
