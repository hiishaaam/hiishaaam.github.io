import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from 'motion/react';

const stats = [
  { value: 3, suffix: '+', label: 'Years of Building' },
  { value: 5, suffix: '+', label: 'Projects Shipped' },
  { value: 4, suffix: '', label: 'Languages Spoken' },
  { value: 'CTO', suffix: '', label: 'at College IEDC', isText: true },
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

const bioText = "I'm a Computer Engineering student at Seethi Sahib Memorial Polytechnic College, Tirur (2023–2026), working at the intersection of design and code. As CTO of my college's IEDC, I lead technical teams and drive innovation projects. I'm currently working as a Junior Developer at Infinio Technology Solutions, where I build full-stack web products and contribute to UI/UX redesigns. I speak English, Malayalam, Arabic, and Tamil — and I think in clean code and pixel-perfect layouts.";

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
      className="py-24 relative z-10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-primary">/</span> about
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image/Avatar with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative overflow-hidden rounded-2xl glass-card p-2 aspect-square max-w-md mx-auto lg:mx-0"
          >
            <motion.img
              style={{ y, scale: 1.15 }}
              src="https://picsum.photos/seed/workspace/800/800"
              alt="Workspace"
              className="w-full h-full object-cover rounded-xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right: Bio & Stats */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-10 mb-8 border-l-4 border-l-primary"
            >
              <motion.p 
                className="text-lg text-white/80 leading-relaxed font-sans"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.01 } }
                }}
              >
                {bioText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 text-center flex flex-col justify-center"
                >
                  <h3 className="text-3xl font-heading font-bold text-gradient mb-2">
                    {stat.isText ? stat.value : <Counter value={stat.value as number} suffix={stat.suffix} />}
                  </h3>
                  <p className="text-sm text-white/60 font-medium font-sans">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
