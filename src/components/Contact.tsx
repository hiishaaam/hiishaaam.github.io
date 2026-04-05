import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Check, Copy, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hishamaju189@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs.sendForm(
      'service_pvv9794', 
      'template_k7413ml', 
      formRef.current, 
      'xfROoHMmbhpTWzuKF'
    )
    .then(() => {
      setSubmitStatus('success');
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setTimeout(() => setIsSubmitting(false), 1000);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    });
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-32 relative z-10 overflow-hidden"
    >
      {/* Radial Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-t-full pointer-events-none z-[-1]" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-6 block">/ let's build</span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight leading-tight">
            Got an idea?<br/>
            <span className="text-primary">Let's build it.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-sans max-w-2xl mx-auto">
            Whether you need a product designed, engineered, or both — I'm your person.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5 glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Send a message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-xs font-mono text-white/50 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-xs font-mono text-white/50 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    id="user_email" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-white/50 uppercase tracking-wider">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  required 
                  rows={5} 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors resize-none" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest text-sm py-4 px-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,122,95,0.5)] uppercase flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed rounded-lg"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitStatus === 'success' ? (
                  <><Check size={18} /> Message Sent</>
                ) : submitStatus === 'error' ? (
                  <><AlertCircle size={18} /> Error Sending</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Direct Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-2/5 flex flex-col gap-4 justify-center"
          >
            <button 
              onClick={handleCopyEmail}
              className="glass-card p-6 flex items-center justify-between gap-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group w-full"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-white/50 group-hover:text-primary transition-colors" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/40 font-mono mb-1">Email</p>
                  <p className="text-white/90 font-sans text-sm md:text-base">hishamaju189@gmail.com</p>
                </div>
              </div>
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-white/30 group-hover:text-white/70 transition-colors" />}
            </button>

            <a 
              href="https://www.linkedin.com/in/hiishaaam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center justify-between gap-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group w-full"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                  <Linkedin className="text-white/50 group-hover:text-[#0A66C2] transition-colors" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/40 font-mono mb-1">Network</p>
                  <p className="text-white/90 font-sans text-sm md:text-base">LinkedIn</p>
                </div>
              </div>
              <span className="text-xs text-white/40 group-hover:text-white/80 transition-colors font-mono">View Profile &rarr;</span>
            </a>

            <a 
              href="https://github.com/hiishaaam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center justify-between gap-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group w-full"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Github className="text-white/50 group-hover:text-white transition-colors" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/40 font-mono mb-1">Code</p>
                  <p className="text-white/90 font-sans text-sm md:text-base">GitHub</p>
                </div>
              </div>
              <span className="text-xs text-white/40 group-hover:text-white/80 transition-colors font-mono">See My Work &rarr;</span>
            </a>

            <div className="mt-8 text-center lg:text-left">
              <p className="text-xs text-white/30 font-sans">
                Usually replies within 24 hours.<br/>Based in Kerala, India. Open to remote.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
