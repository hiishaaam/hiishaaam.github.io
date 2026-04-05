import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from 'motion/react';

const stats = [
  { value: 3, suffix: '+', label: 'Years Building' },
  { value: 5, suffix: '+', label: 'Projects Shipped' },
  { value: 4, suffix: '', label: 'Languages Spoken' },
  { value: 'CTO', suffix: '', label: '@ College IEDC', isText: true },
];

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
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
          className="mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">/ about</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: Image/Avatar with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-[#0a0f1a] border border-white/5 p-2 aspect-[4/5] max-w-md mx-auto lg:mx-0"
          >
            {/* Workspace/portrait photo supplied by user */}
            <motion.div
              style={{ y, scale: 1.15 }}
              className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10"
            >
              <img 
                src="https://i.postimg.cc/pvSGPR0r/Gemini-Generated-Image-qgkohuqgkohuqgko.png" 
                alt="About Workspace" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </motion.div>

          {/* Right: Bio & Stats */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="pl-6 border-l border-primary mb-12"
            >
              <motion.p 
                className="text-lg md:text-xl text-white/80 leading-relaxed font-sans"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
              >
                I'm a Computer Engineering student at Seethi Sahib Memorial Polytechnic College, Tirur — and the CTO of its IEDC. I design interfaces in Figma and ship them in React. I've built production systems used by 1,000+ students, led development teams, and worked professionally as a Junior Developer at Infinio Technology Solutions. I don't just design how it looks — I build how it works.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/5 p-6 rounded-xl flex flex-col justify-center"
                >
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                    {stat.isText ? stat.value : <Counter value={stat.value as number} suffix={stat.suffix} />}
                  </h3>
                  <p className="text-sm text-white/50 font-medium font-sans uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
