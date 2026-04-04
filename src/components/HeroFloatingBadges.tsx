import { useEffect, useRef } from "react";

const badges = [
  {
    id: "mern",
    label: "MERN",
    color: "#61DAFB",
    border: "rgba(97,218,251,0.35)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#61DAFB"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    id: "figma",
    label: "Figma",
    color: "#A259FF",
    border: "rgba(162,89,255,0.35)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5A9.5 9.5 0 0 1 28.5 19H19V9.5A9.5 9.5 0 0 0 9.5 19v.5a9 9 0 0 0 9.5 9z" fill="#0ACF83"/>
        <path d="M19 9.5h9.5a9.5 9.5 0 1 1-9.5 9.5V9.5z" fill="#A259FF"/>
        <path d="M9.5 19H19v9.5a9.5 9.5 0 0 1-9.5-9.5z" fill="#F24E1E"/>
        <path d="M19 28.5v9.5a9.5 9.5 0 0 1 0-19v9.5z" fill="#FF7262"/>
        <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/>
      </svg>
    ),
  },
  {
    id: "python",
    label: "Python",
    color: "#3DDC84",
    border: "rgba(61,220,132,0.35)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 256 255" fill="none">
        <path d="M126.9 0C105 0 90.2 9.8 90.2 9.8L90 56.6h37.6V64H56.4C38.6 64 18 73.3 18 108.8c0 35.5 19.7 34.3 19.7 34.3H49v-21.5s-1.3-19.7 19.3-19.7h67.5s18.7.3 18.7-18.1V38.6s3.2-38.6-27.6-38.6zm-15.4 12c5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4-9.4-4.2-9.4-9.4 4.2-9.4 9.4-9.4z" fill="#366A96"/>
        <path d="M129.1 255c21.9 0 36.7-9.8 36.7-9.8l.2-46.8h-37.6v-7.4h71.2c17.8 0 38.4-9.3 38.4-44.8 0-35.5-19.7-34.3-19.7-34.3H207v21.5s1.3 19.7-19.3 19.7h-67.5s-18.7-.3-18.7 18.1v45s-3.2 38.8 27.6 38.8zm15.4-12c-5.2 0-9.4-4.2-9.4-9.4s4.2-9.4 9.4-9.4 9.4 4.2 9.4 9.4-4.2 9.4-9.4 9.4z" fill="#FFC331"/>
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    color: "#38BDF8",
    border: "rgba(56,189,248,0.35)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path fill="#e6edf3" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    id: "supabase",
    label: "Supabase",
    color: "#3ECF8E",
    border: "rgba(62,207,142,0.35)",
    icon: (
      <svg width="16" height="16" viewBox="0 0 109 113" fill="none">
        <path d="M63.7 0.3c-2.5-3-7.2-1.3-7.2 2.6v44.5h40c2.9 0 4.5-3.3 2.7-5.6L63.7.3z" fill="#3ECF8E"/>
        <path d="M45.3 112.7c2.5 3 7.2 1.3 7.2-2.6V65.6H12.5c-2.9 0-4.5 3.3-2.7 5.6l35.5 41.5z" fill="#3ECF8E" opacity="0.6"/>
      </svg>
    ),
  },
];

function OrbitBadge({ badge, index, total, mousePosRef }: { badge: any, index: number, total: number, mousePosRef: React.MutableRefObject<{x: number, y: number}> }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef((index / total) * Math.PI * 2);
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    const radius = 200; // Orbit radius
    const speed = 0.0025; // Orbit speed
    const repelRadius = 150; // Distance to trigger repel
    const maxRepel = 120; // Max outward push distance

    const animate = () => {
      // Increment angle for continuous orbit
      angleRef.current += speed;
      const angle = angleRef.current;

      // Calculate base orbit position
      const baseX = Math.cos(angle) * radius;
      const baseY = Math.sin(angle) * radius;

      let targetX = baseX;
      let targetY = baseY;

      // Get current mouse position relative to center
      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;

      // Calculate distance from mouse to the badge's base position
      const dx = baseX - mx;
      const dy = baseY - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Apply repel force if mouse is near
      if (dist < repelRadius) {
        const force = Math.pow((repelRadius - dist) / repelRadius, 1.2);
        
        // Push outward from the center of the image
        const dirX = baseX / radius;
        const dirY = baseY / radius;
        
        targetX = baseX + dirX * force * maxRepel;
        targetY = baseY + dirY * force * maxRepel;
      }

      // Smoothly interpolate current position to target position
      currentPos.current.x += (targetX - currentPos.current.x) * 0.08;
      currentPos.current.y += (targetY - currentPos.current.y) * 0.08;

      // Apply transform directly to DOM node for maximum performance
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate(-50%, -50%) translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [index, total, mousePosRef]);

  return (
    <div 
      ref={wrapperRef}
      style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        zIndex: 10,
        willChange: 'transform'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.zIndex = '20'; }}
      onMouseLeave={(e) => { e.currentTarget.style.zIndex = '10'; }}
    >
      <div 
        className="badge-pill" 
        style={{ border: `0.5px solid ${badge.border}` }}
      >
        <span className="badge-icon">{badge.icon}</span>
        {badge.label}
      </div>
    </div>
  );
}

export default function HeroFloatingBadges() {
  const frameRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!frameRef.current) return;
      const rect = frameRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mousePosRef.current = {
        x: e.clientX - centerX,
        y: e.clientY - centerY
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 60% 40%, #0d1b2a 0%, #080c14 60%, #050810 100%)",
      fontFamily: "'Syne', 'Inter', sans-serif",
      paddingTop: "80px",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&display=swap');

        @keyframes orbitGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(108,99,255,0); }
          50% { box-shadow: 0 0 32px 4px rgba(108,99,255,0.18); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        .badge-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px 7px 9px;
          background: rgba(10,12,22,0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 100px;
          font-family: 'Syne', 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.92);
          cursor: default;
          white-space: nowrap;
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .badge-pill:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255,255,255,0.1);
        }

        .badge-pill:hover .badge-icon {
          filter: brightness(1.3);
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(108,99,255,0.12);
          pointer-events: none;
        }

        .photo-frame {
          animation: scaleIn 0.8s cubic-bezier(.34,1.2,.64,1) both;
        }

        .ring-glow {
          animation: orbitGlow 4s ease-in-out infinite;
        }

        .text-block {
          animation: fadeInUp 0.7s ease both;
        }

        .cta-btn {
          background: rgba(108,99,255,0.15);
          border: 1px solid rgba(108,99,255,0.4);
          color: #a78bfa;
          padding: 10px 24px;
          border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          letter-spacing: 0.02em;
          text-decoration: none;
          display: inline-block;
        }
        .cta-btn:hover {
          background: rgba(108,99,255,0.28);
          border-color: rgba(108,99,255,0.7);
          transform: translateY(-1px);
        }
        .cta-btn.ghost {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.6);
        }
        .cta-btn.ghost:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.85);
          transform: translateY(-1px);
        }
        
        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            gap: 60px !important;
          }
          .text-block {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .orbit-ring {
            display: none;
          }
        }
      `}</style>

      <div className="hero-container" style={{ display: "flex", alignItems: "center", gap: "80px", padding: "60px 20px", maxWidth: "1200px", width: "100%", margin: "0 auto" }}>

        {/* Left — Text */}
        <div style={{ maxWidth: 480 }} className="text-block">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(108,99,255,0.1)", border: "0.5px solid rgba(108,99,255,0.3)",
            borderRadius: 100, padding: "5px 14px", marginBottom: 20,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7C3AED", display: "inline-block" }}/>
            <span style={{ fontSize: 12, color: "#a78bfa", fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: "0.06em" }}>
              UI/UX · FULL-STACK · CTO @ IEDC
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.05,
            color: "#fff", margin: "0 0 16px",
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.02em",
          }}>
            Muhammed<br/>
            <span style={{ color: "#7B5CF0" }}>Hisham A</span>
          </h1>

          <p style={{
            fontSize: 16, color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, margin: "0 0 32px",
            fontFamily: "'Syne', sans-serif", fontWeight: 400,
          }}>
            Building experiences that are both beautiful and engineered to scale. Design meets code, always.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#projects" className="cta-btn">View Projects →</a>
            <a href="#contact" className="cta-btn ghost">Contact Me</a>
          </div>
        </div>

        {/* Right — Photo + Badges */}
        <div ref={frameRef} style={{ position: "relative", width: 320, height: 320, flexShrink: 0, margin: "0 auto" }} className="photo-frame">

          {/* Orbit rings */}
          <div className="orbit-ring" style={{ width: 420, height: 420, top: -50, left: -50 }}/>
          <div className="orbit-ring" style={{ width: 360, height: 360, top: -20, left: -20, borderStyle: "solid", borderColor: "rgba(108,99,255,0.08)" }}/>

          {/* Photo circle */}
          <div className="ring-glow" style={{
            width: 280, height: 280,
            borderRadius: "50%",
            border: "2px solid rgba(108,99,255,0.45)",
            overflow: "hidden",
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            background: "linear-gradient(135deg, #1a1040 0%, #0d1b2a 100%)",
          }}>
            <img 
              src="https://picsum.photos/seed/hisham/800/800" 
              alt="Muhammed Hisham A" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              referrerPolicy="no-referrer"
            />
          </div>

          {badges.map((badge, index) => (
            <OrbitBadge 
              key={badge.id} 
              badge={badge} 
              index={index} 
              total={badges.length} 
              mousePosRef={mousePosRef} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
