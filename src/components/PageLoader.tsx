import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400); // Small delay before fading out
          return 100;
        }
        // Random increment for a more natural loading feel
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050810] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4 w-64">
            <motion.div 
              className="text-white font-heading font-bold text-5xl tracking-tighter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {progress}%
            </motion.div>
            <div className="w-full h-[2px] bg-white/10 overflow-hidden">
              <motion.div 
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
