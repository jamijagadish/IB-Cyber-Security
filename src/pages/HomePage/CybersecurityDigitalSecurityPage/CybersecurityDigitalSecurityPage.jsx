import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Cloud,
  Database,
  Eye,
  Activity,
  Bug,
  AlertTriangle,
  Fingerprint,
  Lock,
  ShieldAlert,
  BarChart3,
  Cpu,
  Sparkles,
  Layers,
  Home,
} from 'lucide-react';
import { SECURITY_CARDS } from '../../../data/HomePageData/CybersecurityDigitalSecurityData/CybersecurityDigitalSecurityPageData';

// Icon mapper for quick dynamic resolution
const ICON_MAP = {
  ShieldCheck,
  Cloud,
  Database,
  Eye,
  Activity,
  Bug,
  AlertTriangle,
  Fingerprint,
  Lock,
  ShieldAlert,
  BarChart3,
  Cpu,
};

/**
 * Cybersecurity & Digital Security Main Component
 * Fully self-contained React component with Tailwind CSS & 3D CSS Keyframe animations
 */
export default function CybersecurityDigitalSecurityPage({ onClose }) {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [screenSize, setScreenSize] = useState({
    width: 230,
    height: 340,
    perspective: 2200,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleBack = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.hash = '#cybersecurity-digital-security';
    }
  };

  const handleHome = () => {
    if (onClose) {
      onClose();
    }
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Responsive Screen Dimensions Listener
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 480) {
        setScreenSize({ width: 145, height: 220, perspective: 1200 });
      } else if (windowWidth < 768) {
        setScreenSize({ width: 170, height: 250, perspective: 1500 });
      } else if (windowWidth < 1024) {
        setScreenSize({ width: 195, height: 290, perspective: 1800 });
      } else {
        setScreenSize({ width: 230, height: 340, perspective: 2200 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height, perspective } = screenSize;
  const quantity = SECURITY_CARDS.length;
  // Precise geometric cylinder radius
  const translateZ = Math.round((width / 2) / Math.tan(Math.PI / quantity)) + (width < 160 ? 25 : 50);
  const isAnyCardActive = activeCardIndex !== null;

  return (
    <div
      className="relative min-h-screen w-full bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] text-slate-900 flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto font-sans select-none pb-20 sm:pb-28"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setActiveCardIndex(null);
        }
      }}
    >
      {/* 3D Keyframes & Animation Styles */}
      <style>{`
        @keyframes rotating3d {
          from {
            transform: perspective(var(--perspective, 1000px)) rotateX(var(--rotateX, -10deg)) rotateY(0deg);
          }
          to {
            transform: perspective(var(--perspective, 1000px)) rotateX(var(--rotateX, -10deg)) rotateY(360deg);
          }
        }
        .animate-3d-rotating {
          animation: rotating3d var(--duration, 26s) linear infinite;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .scrollbar-custom::-webkit-scrollbar {
          width: 3px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: rgba(100, 116, 139, 0.45);
          border-radius: 9999px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>

      {/* Ambient Light Gradient & Color Glow Orbs */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#f1f5f9] to-[#e2e8f0] pointer-events-none" />
      <div className="fixed top-12 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-20 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Background Tech Grid */}
      <div
        className="fixed inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Header Navigation buttons for standalone page view */}
      <div className="w-full max-w-7xl px-4 pt-4 pb-2 sm:px-6 lg:px-8 flex items-center justify-start gap-3 z-30">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-[#003135] hover:bg-[#0D5C63] px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={handleHome}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0FA4AF] hover:bg-[#12BCC8] px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <Home className="w-4 h-4 text-white" />
          <span>Home</span>
        </button>
      </div>

      {/* Hero Header Section */}
      <header className="relative z-20 pt-8 sm:pt-12 pb-4 sm:pb-6 text-center max-w-4xl px-4 sm:px-6 flex flex-col items-center w-full">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/85 border border-slate-200/90 shadow-sm backdrop-blur-xl mb-3 sm:mb-4 text-[11px] sm:text-xs font-semibold text-slate-800 hover:shadow-md transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600" />
          <span className="truncate max-w-[200px] sm:max-w-none">IB Cyber Security Private Limited</span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
        </div>

        {/* Main Title with Rich Gradient Accent */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
          Cybersecurity & <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Digital Security</span>
        </h1>

        {/* Frosted Glass Description Container */}
        <div className="mt-4 sm:mt-5 w-full max-w-3xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col gap-2.5 sm:gap-3.5 text-center transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal antialiased" style={{ textWrap: 'pretty' }}>
            Cybersecurity is a core technology area within <strong className="font-semibold text-slate-900">IB Cyber Security Private Limited</strong>. We develop security-focused software products designed to help organisations address application, infrastructure, data and digital security requirements through modern technology.
          </p>
          <div className="h-px w-20 sm:w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto" />
          <p className="text-[10.5px] sm:text-xs text-slate-500 leading-relaxed font-normal antialiased" style={{ textWrap: 'pretty' }}>
            Our cybersecurity product development combines security engineering, monitoring, analytics, automation and intelligent technologies. From threat intelligence and vulnerability management to privacy and incident management, our security products are designed to support organisations in building more secure and resilient digital environments.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-600">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/5 backdrop-blur-md border border-slate-900/5">
            <Layers className="w-3 h-3 text-cyan-600" />
            <span>12 Product Dimensions</span>
          </div>
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/5 backdrop-blur-md border border-slate-900/5">
            <Cpu className="w-3 h-3 text-indigo-600" />
            <span>Intelligent Automation</span>
          </div>
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/5 backdrop-blur-md border border-slate-900/5">
            <Lock className="w-3 h-3 text-emerald-600" />
            <span>Enterprise Resilient Architecture</span>
          </div>
        </div>
      </header>

      {/* 3D Carousel Stage */}
      <main className="w-full flex items-center justify-center relative mt-1 sm:mt-2">
        <div className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[580px] h-[520px] sm:h-[560px] md:h-[600px] flex items-center justify-center overflow-visible select-none">
          
          {/* 3D Rotating Ring */}
          <div
            className="absolute top-[48%] left-[calc(50%_-_(var(--w)/2))] -translate-y-[50%] preserve-3d animate-3d-rotating cursor-pointer transition-all duration-300"
            style={{
              '--w': `${width}px`,
              '--h': `${height}px`,
              '--translateZ': `${translateZ}px`,
              '--rotateX': '-10deg',
              '--perspective': `${perspective}px`,
              '--duration': '26s',
              animationPlayState: isAnyCardActive ? 'paused' : undefined,
              width: 'var(--w)',
              height: 'var(--h)',
              transform: 'perspective(var(--perspective))',
              zIndex: 2,
            }}
          >
            {SECURITY_CARDS.map((card, index) => {
              const color = card.color || '142, 249, 252';
              const isActive = activeCardIndex === index;
              const IconComponent = ICON_MAP[card.icon] || ShieldCheck;

              return (
                /* Outer 3D Ring Anchor */
                <div
                  key={card.id ?? index}
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl preserve-3d transition-all duration-300 pointer-events-auto group"
                  onMouseEnter={() => setActiveCardIndex(index)}
                  onMouseLeave={() => setActiveCardIndex(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCardIndex(isActive ? null : index);
                  }}
                  style={{
                    transform: `rotateY(${(360 / quantity) * index}deg) translateZ(var(--translateZ))`,
                    zIndex: isActive ? 100 : 1,
                  }}
                >
                  {/* Card Container: Zoom on Hover (Desktop) and Tap (Mobile) */}
                  <div
                    className={`w-full h-full rounded-2xl sm:rounded-3xl preserve-3d relative transition-all duration-400 ease-out cursor-pointer ${
                      isActive
                        ? 'scale-[1.42] sm:scale-[1.44] md:scale-[1.46] -translate-y-8 sm:-translate-y-10 md:-translate-y-12'
                        : 'scale-100 translate-y-0'
                    }`}
                  >
                    {/* 1. FRONT FACE (Facing Viewer) */}
                    <div
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col justify-between backface-hidden transition-all duration-300 ${
                        isActive ? 'p-4 sm:p-5 md:p-6' : 'p-3 sm:p-4 md:p-5'
                      }`}
                      style={{
                        transform: 'translateZ(1px)',
                        background: isActive
                          ? `linear-gradient(180deg, rgba(255, 255, 255, 0.99) 0%, rgba(255, 255, 255, 0.95) 55%, rgba(${color}, 0.55) 100%)`
                          : `linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(${color}, 0.3) 100%)`,
                        border: isActive
                          ? `2.5px solid rgba(${color}, 1)`
                          : `1.5px solid rgba(${color}, 0.8)`,
                        boxShadow: isActive
                          ? `0 25px 60px -15px rgba(0, 0, 0, 0.24), 0 0 35px rgba(${color}, 0.7)`
                          : `0 8px 20px -6px rgba(0, 0, 0, 0.05), 0 0 12px rgba(${color}, 0.3)`,
                      }}
                    >
                      {/* Header: Number & Icon */}
                      <div className="flex items-center justify-between z-10 relative">
                        <span
                          className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-wider backdrop-blur-md shadow-xs border transition-colors duration-300"
                          style={{
                            backgroundColor: isActive ? '#0f172a' : 'rgba(255, 255, 255, 0.95)',
                            borderColor: `rgba(${color}, 0.9)`,
                            color: isActive ? '#ffffff' : '#0f172a',
                          }}
                        >
                          {card.num}
                        </span>

                        <div
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-md shadow-xs border transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? `rgba(${color}, 0.25)` : 'rgba(255, 255, 255, 0.95)',
                            borderColor: `rgba(${color}, 0.9)`,
                            color: '#0f172a',
                            transform: isActive ? 'rotate(8deg) scale(1.15)' : 'none',
                          }}
                        >
                          <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900" />
                        </div>
                      </div>

                      {/* Body: Center-Aligned Title & Smooth Scrollable Description */}
                      <div className="my-auto z-10 flex flex-col gap-1.5 sm:gap-2 text-center items-center flex-1 justify-center py-1 overflow-hidden">
                        <div className="flex items-center justify-center gap-1 border-b border-slate-900/10 pb-1 w-full flex-shrink-0">
                          <h3
                            className={`font-extrabold text-slate-950 tracking-tight leading-snug group-hover:text-black transition-all duration-200 text-center ${
                              isActive
                                ? 'text-xs sm:text-sm'
                                : 'text-[11px] sm:text-xs line-clamp-1'
                            }`}
                          >
                            {card.title}
                          </h3>
                          {isActive && <Sparkles className="w-3 h-3 text-amber-500 animate-pulse flex-shrink-0" />}
                        </div>

                        {/* Description Container with Touch Scroll on Mobile */}
                        <div
                          className={`w-full text-center transition-all duration-300 overflow-y-auto ${
                            isActive
                              ? 'max-h-28 sm:max-h-36 md:max-h-none pr-1 scrollbar-custom touch-pan-y'
                              : 'max-h-16 sm:max-h-24 md:max-h-28 overflow-hidden'
                          }`}
                          style={{
                            WebkitOverflowScrolling: 'touch',
                          }}
                        >
                          <p
                            className={`text-slate-800 leading-relaxed font-normal transition-all duration-300 antialiased text-center ${
                              isActive
                                ? 'text-[10px] sm:text-[10.5px] md:text-[11px] line-clamp-none opacity-100'
                                : 'text-[9px] sm:text-[9.5px] md:text-[10px] line-clamp-4 sm:line-clamp-5 opacity-90'
                            }`}
                            style={{
                              textAlign: 'center',
                              textWrap: 'balance',
                            }}
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 2. BACK FACE (Facing Inward / Rear of Ring) */}
                    <div
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-md flex flex-col items-center justify-between p-3.5 sm:p-4 md:p-5 backface-hidden transition-all duration-300"
                      style={{
                        transform: 'rotateY(180deg) translateZ(1px)',
                        border: isActive ? `2.5px solid rgba(${color}, 1)` : `2px solid rgba(${color}, 0.75)`,
                        boxShadow: isActive
                          ? `0 25px 60px -15px rgba(0, 0, 0, 0.2), 0 0 35px rgba(${color}, 0.7)`
                          : `0 0 20px rgba(${color}, 0.35)`,
                        background: isActive
                          ? `radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(${color}, 0.5) 60%, rgba(${color}, 0.9) 100%)`
                          : `radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, rgba(${color}, 0.4) 60%, rgba(${color}, 0.75) 100%)`,
                      }}
                    >
                      <div className="w-full flex justify-between items-center opacity-80">
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold text-slate-700">{card.num}</span>
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
                      </div>

                      {/* Glowing center depth disk */}
                      <div className={`rounded-full bg-white/50 blur-md pointer-events-none transition-all duration-300 ${isActive ? 'w-12 h-12 sm:w-16 sm:h-16 scale-125' : 'w-8 h-8 sm:w-12 sm:h-12'}`} />

                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 tracking-tight truncate max-w-full text-center">
                        {card.title}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
