import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeading from '../../../components/common/AnimatedSectionHeading';
import {
  ArrowRight,
  Search,
  Lightbulb,
  Layers,
  Code2,
  CheckSquare,
  ShieldCheck,
  CloudUpload,
  TrendingUp,
} from 'lucide-react';

/* 3D Isometric Cube Emblem SVG for Center of Orbit */
function Central3DCubeEmblem() {
  return (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" className="drop-shadow-md mb-1.5">
      {/* Top Face */}
      <polygon points="30,8 52,20 30,32 8,20" fill="#00C4CC" />
      {/* Left Face */}
      <polygon points="8,20 30,32 30,52 8,40" fill="#008891" />
      {/* Right Face */}
      <polygon points="30,32 52,20 52,40 30,52" fill="#005F66" />
      {/* Inner Sheen & Highlight Lines */}
      <polyline points="8,20 30,32 52,20" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" fill="none" />
      <line x1="30" y1="32" x2="30" y2="52" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
    </svg>
  );
}

export default function ProductDevelopmentLifecycleSection({ onOpenPage }) {
  const handleCtaClick = (e) => {
    if (e) e.preventDefault();
    window.location.hash = '#pdl-page';
    if (onOpenPage) {
      onOpenPage();
    }
  };

  const lifecycleStages = [
    {
      id: 'research',
      title: 'Research',
      desc: 'Understand needs and opportunities',
      icon: Search,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
      pos: 'top-[2%] left-1/2 -translate-x-1/2',
    },
    {
      id: 'strategy',
      title: 'Product Strategy',
      desc: 'Define vision and roadmap',
      icon: Lightbulb,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      pos: 'top-[14%] right-[0%] sm:right-[2%]',
    },
    {
      id: 'architecture',
      title: 'Architecture',
      desc: 'Design scalable solutions',
      icon: Layers,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
      pos: 'top-1/2 -translate-y-1/2 right-[-5%] sm:right-[-2%]',
    },
    {
      id: 'development',
      title: 'Development',
      desc: 'Build and iterate',
      icon: Code2,
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-200/80',
      pos: 'bottom-[14%] right-[0%] sm:right-[2%]',
    },
    {
      id: 'testing',
      title: 'Testing',
      desc: 'Ensure quality and reliability',
      icon: CheckSquare,
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200/80',
      pos: 'bottom-[2%] left-1/2 -translate-x-1/2',
    },
    {
      id: 'security',
      title: 'Security',
      desc: 'Protect and mitigate risks',
      icon: ShieldCheck,
      iconBg: 'bg-teal-50 text-teal-600 border-teal-200/80',
      pos: 'bottom-[14%] left-[0%] sm:left-[2%]',
    },
    {
      id: 'deployment',
      title: 'Deployment',
      desc: 'Launch to market',
      icon: CloudUpload,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
      pos: 'top-1/2 -translate-y-1/2 left-[-5%] sm:left-[-2%]',
    },
    {
      id: 'improvement',
      title: 'Continuous Improvement',
      desc: 'Learn and evolve',
      icon: TrendingUp,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      pos: 'top-[14%] left-[0%] sm:left-[2%]',
    },
  ];

  return (
    <section
      id="product-development-lifecycle"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#F0F7FF] via-[#FAFDFD] to-[#F2F8FF] border-b border-[#00A8B5]/15 overflow-hidden relative"
    >
      {/* Background Decorative Elements Matching Reference Image Exactly */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Left Glowing Concentric Arc Ring & Light-Blue Aura */}
        <div className="absolute -top-36 -left-36 w-[580px] h-[580px] rounded-full border-[36px] border-[#D9EEF9]/70 bg-gradient-to-br from-[#E6F3FE]/90 via-sky-50/50 to-transparent blur-sm opacity-90" />

        {/* Soft Golden/Amber Radial Warm Glow Ring Behind Left Orbit Diagram */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-gradient-to-r from-amber-100/50 via-orange-50/35 to-amber-100/40 blur-2xl opacity-75" />

        {/* Top-Right Soft Translucent White Glow Wave Ribbon */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-white/90 via-sky-50/60 to-blue-50/30 blur-2xl opacity-90" />

        {/* Bottom-Right Glowing 3D Glass Orb & Soft Blue Radial Aura */}
        <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#DCEEFF]/80 via-blue-50/40 to-transparent blur-3xl opacity-90" />
        <div className="absolute bottom-16 right-16 w-32 h-32 rounded-full bg-gradient-to-br from-white/90 via-[#D0E7FF]/60 to-[#A5D3FF]/30 blur-[1px] shadow-[0_20px_45px_rgba(0,168,181,0.18)] opacity-80" />

        {/* Soft 5x5 Grid Dots Matrix (Left Edge) */}
        <div className="absolute top-1/3 left-6 grid grid-cols-5 gap-2 opacity-25">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00A8B5]" />
          ))}
        </div>

        {/* Soft 5x5 Grid Dots Matrix (Right Edge) */}
        <div className="absolute bottom-12 right-6 grid grid-cols-5 gap-2 opacity-25">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00A8B5]" />
          ))}
        </div>

        {/* Flowing Translucent Wave Lines */}
        <svg className="w-full h-full min-h-[600px] absolute inset-0 opacity-45" viewBox="0 0 1440 750" fill="none" preserveAspectRatio="none">
          <path d="M-100,500 C300,300 750,600 1250,400 C1450,350 1550,500 1650,550 L1650,850 L-100,850 Z" fill="#FFFFFF" opacity="0.45" />
          <path d="M-50,150 C350,300 850,100 1350,320" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
          <path d="M-100,550 C300,400 750,650 1250,450" stroke="#FFFFFF" strokeWidth="2" opacity="0.7" />
        </svg>
      </div>

      <div className="site-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* ================= LEFT COLUMN: CIRCULAR ORBITAL DIAGRAM WITH 8 STAGES ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[500px] sm:min-h-[560px] order-2 lg:order-1 py-4"
          >
            {/* Outer Concentric Orbit Dashed Ring SVG */}
            <svg className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] pointer-events-none" viewBox="0 0 460 460" fill="none">
              {/* Outer Dashed Orbit Circle */}
              <circle cx="230" cy="230" r="190" stroke="#00A8B5" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
              {/* Inner Light Solid Ring */}
              <circle cx="230" cy="230" r="120" stroke="#00A8B5" strokeWidth="1" opacity="0.25" />
            </svg>

            {/* Central 3D Cube Core Emblem (COMPLETELY VISIBLE IN CENTER) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white/95 backdrop-blur-md border border-cyan-100 shadow-[0_15px_35px_rgba(0,168,181,0.2)] flex flex-col items-center justify-center text-center p-2.5 transition-transform duration-500 hover:scale-105">
              <Central3DCubeEmblem />
              <h3 className="text-[11px] sm:text-xs font-extrabold text-[#002D33] tracking-tight leading-tight max-w-[110px]">
                Product Development Lifecycle
              </h3>
            </div>

            {/* 8 Radially Positioned Compact Stage Cards around Center Orbit */}
            {lifecycleStages.map((stage) => {
              const StageIcon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className={`absolute ${stage.pos} z-20 bg-white/95 backdrop-blur-md rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 border border-cyan-100/90 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2 text-left group max-w-[150px] sm:max-w-[185px]`}
                >
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border flex items-center justify-center shrink-0 ${stage.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <StageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.2} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-[11px] sm:text-xs font-extrabold text-[#002D33] tracking-tight leading-none mb-0.5 truncate">
                      {stage.title}
                    </h4>
                    <p className="text-[9.5px] sm:text-[10.5px] text-slate-500 font-medium leading-tight truncate">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* ================= RIGHT COLUMN: OVERVIEW, DESCRIPTION & CTA BUTTON ================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2"
          >


            {/* Main Section Heading */}
            <AnimatedSectionHeading
              text="Product Development Lifecycle"
              className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#002D33] tracking-tight leading-[1.12] mb-6 text-center lg:text-left"
            />

            {/* Paragraph 1 */}
            <div className="space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#002D33]/85 font-medium mb-8 text-center lg:text-left">
              <p>
                We follow a structured product development approach that transforms technology ideas and real-world problems into engineered software products. Each stage of the product lifecycle contributes to product quality, usability, security, scalability and commercial viability.
              </p>
              <p>
                Our product lifecycle combines research, product strategy, architecture, development, testing, security, deployment and continuous improvement. This approach allows us to develop proprietary and specialised technology products with a clear path from concept to market.
              </p>
            </div>

            {/* Solid Cyan CTA Pill Button (Explore Lifecycle) */}
            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00A8B5] hover:bg-[#002D33] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#00A8B5]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/30"
              >
                <span>Explore Lifecycle</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

