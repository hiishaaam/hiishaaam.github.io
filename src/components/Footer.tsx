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
    <footer className="py-8 border-t border-glass-border relative z-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <p className="text-xs text-white/40">
            © 2025 Muhammed Hisham A · Designed & Built by Hisham
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
