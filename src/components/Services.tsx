import { motion } from 'motion/react';
import { Check, Smartphone, Server, Database, Sparkles } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'UI/UX Design',
    proof: 'Crafting intuitive, user-centric interfaces that convert.',
    deliverables: [
      'Wireframing & Prototyping',
      'Design Systems',
      'High-Fidelity Mockups'
    ],
    align: 'left',
    visual: (
      <div className="w-full aspect-video md:aspect-auto md:h-[400px] bg-[#1E1E1E] rounded-xl border border-white/10 overflow-hidden flex flex-col relative shadow-2xl">
        {/* Figma Top Bar */}
        <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-[#2C2C2C]">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <div className="ml-4 text-[10px] text-white/40 font-mono">App.fig</div>
        </div>
        {/* Figma Canvas */}
        <div className="flex-1 flex p-4 gap-4 bg-[#121212]">
          {/* Sidebar */}
          <div className="hidden md:flex w-1/4 h-full border border-white/5 rounded bg-white/5 p-2 flex-col gap-2">
            <div className="h-2 w-full bg-white/10 rounded" />
            <div className="h-2 w-3/4 bg-white/10 rounded" />
            <div className="h-2 w-5/6 bg-white/10 rounded" />
          </div>
          {/* Main Canvas Area */}
          <div className="flex-1 h-full border border-white/10 rounded bg-[#1E1E1E] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Mockup Card */}
            <div className="w-full max-w-[200px] bg-white/5 rounded-lg border border-white/10 shadow-lg p-4 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 mb-2" />
              <div className="h-3 w-3/4 bg-white/20 rounded" />
              <div className="h-2 w-full bg-white/10 rounded" />
              <div className="h-2 w-5/6 bg-white/10 rounded" />
              <div className="mt-4 h-8 w-full bg-primary/40 rounded flex items-center justify-center">
                <div className="h-2 w-1/3 bg-white/50 rounded" />
              </div>
            </div>
            {/* Cursor */}
            <svg className="absolute top-1/2 left-1/2 w-6 h-6 text-white drop-shadow-md z-10" viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1">
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'Development',
    proof: 'Building scalable, high-performance web applications from the ground up.',
    deliverables: [
      'Frontend Architecture',
      'API Development',
      'Database Design'
    ],
    align: 'right',
    visual: (
      <div className="w-full aspect-video md:aspect-auto md:h-[400px] bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl font-mono text-[10px] md:text-xs">
        {/* VS Code Top Bar */}
        <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-[#161B22]">
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
          <div className="ml-4 text-[10px] text-white/40">server.ts</div>
        </div>
        {/* Code Content */}
        <div className="flex-1 p-4 md:p-6 text-left overflow-x-auto">
          <pre className="leading-loose">
            <span className="text-[#FF7B72]">import</span> <span className="text-[#79C0FF]">express</span> <span className="text-[#FF7B72]">from</span> <span className="text-[#A5D6FF]">'express'</span>;<br/>
            <span className="text-[#FF7B72]">import</span> <span className="text-[#C9D1D9]">{'{'}</span> <span className="text-[#79C0FF]">createClient</span> <span className="text-[#C9D1D9]">{'}'}</span> <span className="text-[#FF7B72]">from</span> <span className="text-[#A5D6FF]">'@supabase/supabase-js'</span>;<br/>
            <br/>
            <span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">app</span> <span className="text-[#FF7B72]">=</span> <span className="text-[#D2A8FF]">express</span>();<br/>
            <span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">supabase</span> <span className="text-[#FF7B72]">=</span> <span className="text-[#D2A8FF]">createClient</span>(<span className="text-[#79C0FF]">env</span>.<span className="text-[#79C0FF]">URL</span>, <span className="text-[#79C0FF]">env</span>.<span className="text-[#79C0FF]">KEY</span>);<br/>
            <br/>
            <span className="text-[#79C0FF]">app</span>.<span className="text-[#D2A8FF]">post</span>(<span className="text-[#A5D6FF]">'/api/attendance'</span>, <span className="text-[#FF7B72]">async</span> (<span className="text-[#FFA657]">req</span>, <span className="text-[#FFA657]">res</span>) <span className="text-[#FF7B72]">=&gt;</span> {'{'}<br/>
            {'  '}<span className="text-[#FF7B72]">const</span> {'{'} <span className="text-[#79C0FF]">userId</span>, <span className="text-[#79C0FF]">status</span> {'}'} <span className="text-[#FF7B72]">=</span> <span className="text-[#79C0FF]">req</span>.<span className="text-[#79C0FF]">body</span>;<br/>
            {'  '}<span className="text-[#FF7B72]">const</span> {'{'} <span className="text-[#79C0FF]">data</span>, <span className="text-[#79C0FF]">error</span> {'}'} <span className="text-[#FF7B72]">=</span> <span className="text-[#FF7B72]">await</span> <span className="text-[#79C0FF]">supabase</span><br/>
            {'    '}.<span className="text-[#D2A8FF]">from</span>(<span className="text-[#A5D6FF]">'attendance'</span>)<br/>
            {'    '}.<span className="text-[#D2A8FF]">insert</span>([<span className="text-[#C9D1D9]">{'{'}</span> <span className="text-[#79C0FF]">userId</span>, <span className="text-[#79C0FF]">status</span> <span className="text-[#C9D1D9]">{'}'}</span>]);<br/>
            <br/>
            {'  '}<span className="text-[#FF7B72]">if</span> (<span className="text-[#79C0FF]">error</span>) <span className="text-[#FF7B72]">return</span> <span className="text-[#79C0FF]">res</span>.<span className="text-[#D2A8FF]">status</span>(<span className="text-[#79C0FF]">500</span>).<span className="text-[#D2A8FF]">json</span>(<span className="text-[#C9D1D9]">{'{'}</span> <span className="text-[#79C0FF]">error</span> <span className="text-[#C9D1D9]">{'}'}</span>);<br/>
            {'  '}<span className="text-[#FF7B72]">return</span> <span className="text-[#79C0FF]">res</span>.<span className="text-[#D2A8FF]">status</span>(<span className="text-[#79C0FF]">200</span>).<span className="text-[#D2A8FF]">json</span>(<span className="text-[#C9D1D9]">{'{'}</span> <span className="text-[#79C0FF]">success</span>: <span className="text-[#79C0FF]">true</span> <span className="text-[#C9D1D9]">{'}'}</span>);<br/>
            {'}'});
          </pre>
        </div>
      </div>
    )
  },
  {
    id: '03',
    title: 'Design + Build',
    badge: 'End-to-End',
    proof: 'Taking your idea from a napkin sketch to a fully deployed production app.',
    deliverables: [
      'Product Strategy',
      'UI/UX Design',
      'Full-Stack Engineering'
    ],
    align: 'left',
    visual: (
      <div className="w-full aspect-video md:aspect-auto md:h-[400px] bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl relative p-4 md:p-8">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative w-full max-w-[400px] h-full flex items-center justify-between">
          {/* Client Node */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/20 flex flex-col items-center justify-center gap-2 z-10 backdrop-blur-md">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center"><Smartphone size={16} className="text-primary"/></div>
            <span className="text-[10px] font-mono text-white/60">Client</span>
          </div>
          
          {/* Connection Line */}
          <div className="absolute left-10 right-1/2 h-[2px] bg-gradient-to-r from-primary/50 to-secondary/50 top-1/2 -translate-y-1/2 border-t border-dashed border-white/20" />
          
          {/* API Node */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/5 border border-white/20 flex flex-col items-center justify-center gap-2 z-10 backdrop-blur-md shadow-[0_0_30px_rgba(0,212,200,0.1)]">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center"><Server size={20} className="text-secondary"/></div>
            <span className="text-[10px] font-mono text-white/60">API Gateway</span>
          </div>
          
          {/* Connection Line */}
          <div className="absolute left-1/2 right-10 h-[2px] bg-gradient-to-r from-secondary/50 to-amber-500/50 top-1/2 -translate-y-1/2 border-t border-dashed border-white/20" />
          
          {/* DB Node */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/20 flex flex-col items-center justify-center gap-2 z-10 backdrop-blur-md">
            <div className="w-8 h-8 rounded bg-amber-500/20 flex items-center justify-center"><Database size={16} className="text-amber-500"/></div>
            <span className="text-[10px] font-mono text-white/60">Database</span>
          </div>
        </div>
      </div>
    )
  }
];

export function Services() {
  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-32 relative z-10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block" aria-hidden="true">/ services</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">What I Offer</h2>
        </motion.div>

        <div className="flex flex-col gap-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col ${service.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 w-full`}
            >
              {/* Content */}
              <div className="w-full md:w-1/2 relative">
                <span className="absolute -top-16 -left-8 md:-left-12 text-8xl md:text-9xl font-bold text-white/5 select-none pointer-events-none font-heading tracking-tighter">
                  {service.id}
                </span>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-mono font-bold uppercase tracking-widest whitespace-nowrap">
                        <Sparkles size={12} />
                        {service.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-lg md:text-xl text-white/60 font-sans mb-8 leading-relaxed max-w-lg">
                    {service.proof}
                  </p>
                  
                  <ul className="space-y-4">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80 font-sans">
                        <Check size={18} className="text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual */}
              <div className="w-full md:w-1/2">
                {service.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
