import { motion } from 'motion/react';
import { ArrowLeft, Ban } from 'lucide-react';

export function NotFound() {
  const goHome = () => {
    // Remove the ?404 query param and cleanly navigate to root
    window.history.replaceState({}, '', '/');
    window.location.reload();
  };

  return (
    <div className="min-h-screen text-white selection:bg-primary/30 selection:text-white flex items-center justify-center relative overflow-hidden bg-[#050505]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] opacity-60 pointer-events-none" />
      <div className="noise-overlay" />
      <div className="mesh-bg" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          {/* Glitch text effect container */}
          <h1 className="text-[150px] md:text-[250px] font-heading font-bold leading-none bg-clip-text text-transparent bg-gradient-to-br from-white to-white/20 select-none">
            404
          </h1>
          
          <motion.div 
            animate={{ 
              rotate: [0, 10, -10, 0], 
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/80 drop-shadow-[0_0_30px_rgba(0,212,200,0.8)] mix-blend-screen"
          >
            <Ban size={120} strokeWidth={1} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white/90 mb-4">
            Lost in Cyberspace
          </h2>
          <p className="text-lg text-white/50 max-w-md mx-auto font-sans">
            The page you are looking for has been moved, deleted, or possibly never existed at all. Let's get you back on track.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={goHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-white font-medium rounded-full transition-all duration-300 flex items-center gap-3 overflow-hidden backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300 relative z-10" />
          <span className="relative z-10 font-sans tracking-wide">Back to Home</span>
        </motion.button>
      </div>
    </div>
  );
}
