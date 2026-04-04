import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, Loader2, Check, X } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    emailjs
      .sendForm(
        'service_pvv9794',
        'template_k7413ml',
        formRef.current,
        'xfROoHMmbhpTWzuKF'
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
          setTimeout(() => setStatus('idle'), 3000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
        }
      );
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 relative z-10 overflow-hidden"
    >
      {/* Radial Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-t-full pointer-events-none z-[-1]" />

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">/</span> contact
          </h2>
          <p className="text-xl text-white/80 font-sans">Let's build something great.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 mb-12 relative"
        >
          <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/70 font-sans">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(123,92,240,0.3)] transition-all duration-300 font-sans"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70 font-sans">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(123,92,240,0.3)] transition-all duration-300 font-sans"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white/70 font-sans">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={5}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(123,92,240,0.3)] transition-all duration-300 resize-none font-sans"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="mt-4 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 self-start flex items-center justify-center min-w-[160px] disabled:opacity-80 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(123,92,240,0.4)]"
            >
              {status === 'idle' && <span>Send Message</span>}
              {status === 'loading' && <Loader2 className="animate-spin" size={20} />}
              {status === 'success' && <Check className="text-white" size={20} />}
              {status === 'error' && <span className="flex items-center gap-2"><X size={18} /> Error</span>}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/70 font-sans"
        >
          <a href="mailto:hishamaju189@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors group">
            <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
            hishamaju189@gmail.com
          </a>
          <a href="tel:+919496344384" className="flex items-center gap-2 hover:text-white transition-colors group">
            <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
            +91 9496344384
          </a>
          <div className="flex items-center gap-2 group cursor-default">
            <MapPin size={18} className="text-primary group-hover:scale-110 transition-transform" />
            Manjeri, Kerala, India
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(123,92,240,0.5)] hover:scale-110 transition-all duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(123,92,240,0.5)] hover:scale-110 transition-all duration-300">
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
