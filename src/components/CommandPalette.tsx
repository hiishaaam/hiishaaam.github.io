import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Folder, User, Mail, FileText, Code2, Copy, Linkedin, Github, X } from 'lucide-react';

type Command = {
  id: string;
  label: string;
  icon: React.ReactNode;
  onSelect: () => void;
  category: string;
};

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle palette on Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Autofocus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  // Handle escape to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const commands: Command[] = [
    {
      id: 'projects',
      label: 'View Projects',
      icon: <Folder size={18} />,
      category: 'Navigation',
      onSelect: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'about',
      label: 'About Me',
      icon: <User size={18} />,
      category: 'Navigation',
      onSelect: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'contact',
      label: 'Get in Touch',
      icon: <Mail size={18} />,
      category: 'Navigation',
      onSelect: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'skills',
      label: 'View Skills',
      icon: <Code2 size={18} />,
      category: 'Navigation',
      onSelect: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'resume',
      label: 'Download Resume',
      icon: <FileText size={18} />,
      category: 'Actions',
      onSelect: () => {
        window.open('/Muhammed Hisham A.pdf', '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'copy-email',
      label: 'Copy Email Address',
      icon: <Copy size={18} />,
      category: 'Actions',
      onSelect: () => {
        navigator.clipboard.writeText('hishamaju189@gmail.com');
        alert('Email copied to clipboard!');
        setIsOpen(false);
      }
    },
    {
      id: 'github',
      label: 'Open GitHub',
      icon: <Github size={18} />,
      category: 'Socials',
      onSelect: () => {
        window.open('https://github.com/hiishaaam', '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      icon: <Linkedin size={18} />,
      category: 'Socials',
      onSelect: () => {
        window.open('https://www.linkedin.com/in/hiishaaam/', '_blank');
        setIsOpen(false);
      }
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const categories = Array.from(new Set(filteredCommands.map((c) => c.category)));

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-[#050810]/80 backdrop-blur-sm"
            />

            {/* Palette Modal */}
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-2xl bg-[#0a0f1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
              >
                {/* Search Header */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                  <Search className="text-white/40" size={20} />
                  <input
                    ref={inputRef}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type a command or search..."
                    className="flex-grow bg-transparent border-none outline-none text-white text-lg placeholder:text-white/30"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-white/30 px-2 py-1 rounded bg-white/5 border border-white/5">ESC</span>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="text-white/40 hover:text-white/80 transition-colors p-1"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Commands List */}
                <div className="max-h-[60vh] overflow-y-auto p-2 pb-4 scrollbar-hide">
                  {filteredCommands.length === 0 ? (
                    <div className="py-12 text-center text-white/40 font-sans">
                      No results found for "{search}"
                    </div>
                  ) : (
                    categories.map((category) => (
                      <div key={category} className="mb-4 last:mb-0">
                        <div className="px-3 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider font-sans">
                          {category}
                        </div>
                        <div className="flex flex-col gap-1">
                          {filteredCommands
                            .filter((c) => c.category === category)
                            .map((cmd) => (
                              <button
                                key={cmd.id}
                                onClick={cmd.onSelect}
                                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 group transition-colors text-left"
                              >
                                <span className="text-white/40 group-hover:text-primary transition-colors">
                                  {cmd.icon}
                                </span>
                                <span className="font-medium font-sans">{cmd.label}</span>
                              </button>
                            ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-white/5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <span className="bg-white/10 px-1 rounded">↑</span>
                      <span className="bg-white/10 px-1 rounded">↓</span>
                      to navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="bg-white/10 px-1 rounded text-[10px]">ENTER</span>
                      to select
                    </span>
                  </div>
                  <div>Command Palette</div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
