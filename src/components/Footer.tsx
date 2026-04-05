import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
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
      
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs text-white/40 font-sans order-2 md:order-1"
        >
          © {new Date().getFullYear()} Muhammed Hisham A.
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
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
        
        <div className="flex items-center gap-4 order-3">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs text-white/40 font-sans italic"
          >
            Designed & Built by Hisham
          </motion.div>
          
          <style>{`
            @keyframes pulse-reminder {
              0%, 90%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(224, 122, 95, 0); }
              95% { transform: scale(1.1); box-shadow: 0 0 15px 2px rgba(224, 122, 95, 0.4); }
            }
            .animate-pulse-reminder {
              animation: pulse-reminder 4s infinite;
            }
          `}</style>
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-white/50 hover:text-white transition-all duration-300 animate-pulse-reminder border border-white/5 hover:border-primary/50 ml-4"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
