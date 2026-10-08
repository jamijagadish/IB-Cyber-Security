import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { COPYRIGHT_CARDS, getTwoLineName } from './CopyRightPageData';

// Embedded CSS Keyframe Animations and Base Styles
const EMBEDDED_STYLES = `
html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

@keyframes ringDrawIn {
  0% { stroke-dashoffset: 1230; opacity: 0; }
  20% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

@keyframes ringAccentDrawIn {
  0% { stroke-dashoffset: 1320; opacity: 0; }
  20% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

@keyframes ringInnerDrawIn {
  0% { stroke-dashoffset: 1140; opacity: 0; }
  20% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

@keyframes cGlyphDrawIn {
  0% { stroke-dashoffset: 620; opacity: 0; transform: scale(0.92); transform-origin: 210px 250px; }
  25% { opacity: 1; }
  75% { transform: scale(1.03); transform-origin: 210px 250px; }
  100% { stroke-dashoffset: 0; opacity: 1; transform: scale(1); transform-origin: 210px 250px; }
}

@keyframes letterFromC {
  0% { opacity: 0; transform: translateX(-100px) scale(0.5); filter: blur(4px); }
  65% { opacity: 1; transform: translateX(6px) scale(1.06); filter: blur(0px); }
  85% { transform: translateX(-2px) scale(0.98); }
  100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0px); }
}

@keyframes fadeSlideIn {
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
}

.animate-ring-draw {
  stroke-dasharray: 1230;
  stroke-dashoffset: 1230;
  animation: ringDrawIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-ring-accent-draw {
  stroke-dasharray: 1320;
  stroke-dashoffset: 1320;
  animation: ringAccentDrawIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
}

.animate-ring-inner-draw {
  stroke-dasharray: 1140;
  stroke-dashoffset: 1140;
  animation: ringInnerDrawIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

.animate-c-draw {
  stroke-dasharray: 620;
  stroke-dashoffset: 620;
  animation: cGlyphDrawIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.18s forwards;
}

.animate-letter-stagger {
  display: inline-block;
  opacity: 0;
  animation: letterFromC 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-capsule-follow {
  opacity: 0;
  animation: fadeSlideIn 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.85s forwards;
}
`;

export function CopyrightCardItem({ item }) {
  const [isCircleHovered, setIsCircleHovered] = useState(false);
  const [cardKey, setCardKey] = useState(0);
  const [line1, line2] = getTwoLineName(item.name);

  const toggleRotation = () => {
    setIsCircleHovered((prev) => !prev);
  };

  return (
    <div 
      onClick={() => setCardKey((k) => k + 1)}
      className="flex flex-col items-center justify-between p-3.5 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 active:scale-[0.99] cursor-pointer"
    >
      {/* Card Header Tag */}
      <div className="w-full flex items-center justify-between gap-2 mb-1 sm:mb-2">
        <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 truncate max-w-[150px]">
          {item.badge}
        </span>
        <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 font-bold shrink-0">
          {item.code}
        </span>
      </div>

      {/* SVG Emblem Canvas - Fully Responsive */}
      <div className="w-full flex items-center justify-center my-0.5 sm:my-1">
        <svg
          key={cardKey}
          viewBox="0 0 680 500"
          className="w-full h-auto max-w-[240px] sm:max-w-[270px] md:max-w-[290px] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={item.name}
        >
          <defs>
            <linearGradient id={`ringGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={item.ringStart} />
              <stop offset="35%" stopColor={item.ringMid} />
              <stop offset="75%" stopColor={item.ringEnd} />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id={`cGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={item.cStart} />
              <stop offset="100%" stopColor={item.cEnd} />
            </linearGradient>
          </defs>

          {/* ROUND CIRCLE AREA - MOUSE HOVER & TOUCH SUPPORT */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setIsCircleHovered(true)}
            onMouseLeave={() => setIsCircleHovered(false)}
            onTouchStart={toggleRotation}
          >
            {/* Invisible Hitbox over circle */}
            <circle
              cx="210"
              cy="250"
              r="215"
              fill="#ffffff"
              fillOpacity="0.001"
              className="pointer-events-auto"
            />

            {/* 1. Outer Round Rings */}
            <circle cx="210" cy="250" r="212" stroke="#f1f5f9" strokeWidth="2.5" fill="none" className="animate-ring-accent-draw" />
            <circle cx="210" cy="250" r="195" stroke={`url(#ringGrad-${item.id})`} strokeWidth="28" strokeLinecap="round" className="animate-ring-draw" />
            <circle cx="210" cy="250" r="209" stroke={item.accentLine} strokeWidth="2" fill="none" className="animate-ring-accent-draw" />
            <circle cx="210" cy="250" r="181" stroke={item.accentLine} strokeWidth="1.5" strokeOpacity="0.4" fill="none" className="animate-ring-inner-draw" />

            {/* 2. 'C' Glyph - Centered 360° Rotation */}
            <g
              transform={isCircleHovered ? 'rotate(360 210 250)' : 'rotate(0 210 250)'}
              style={{
                transition: 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <path
                d="M 306 170 A 125 125 0 1 0 306 330"
                stroke={`url(#cGrad-${item.id})`}
                strokeWidth="34"
                strokeLinecap="round"
                fill="none"
                className="animate-c-draw"
              />
            </g>
          </g>

          {/* 3. FULL CARD NAME INSIDE EMBLEM (Uniform Text Size across all 16 cards, Pill Capsule Removed) */}
          <g transform="translate(185, 202)" className="pointer-events-none">
            {/* Line 1 */}
            <text
              x="20"
              y="32"
              className="select-none animate-letter-stagger"
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
                fontSize: '25px',
                fontWeight: 900,
                fill: item.color,
                stroke: item.color,
                strokeWidth: '1.2px',
                paintOrder: 'stroke fill',
                letterSpacing: '0.03em',
                animationDelay: '0.2s',
              }}
            >
              {line1}
            </text>

            {/* Line 2 */}
            {line2 && (
              <text
                x="20"
                y="66"
                className="select-none animate-letter-stagger"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
                  fontSize: '24px',
                  fontWeight: 800,
                  fill: item.color,
                  stroke: item.color,
                  strokeWidth: '1px',
                  paintOrder: 'stroke fill',
                  letterSpacing: '0.02em',
                  animationDelay: '0.35s',
                }}
              >
                {line2}
              </text>
            )}
          </g>
        </svg>
      </div>

      {/* Subtle Bottom Interaction Hint */}
      <div className="w-full flex items-center justify-between pt-2 border-t border-neutral-100 text-[10px] text-neutral-400">
        <span className="font-mono">{item.number} / 16</span>
        <span className="group-hover:text-amber-600 font-medium transition-colors">Tap / Hover to Spin</span>
      </div>
    </div>
  );
}

export default function Copyright({ onClose }) {
  const [globalKey, setGlobalKey] = useState(0);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else if (onClose) {
      onClose();
    } else {
      window.location.hash = '#about-us';
    }
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-50 via-slate-50/60 to-neutral-100/50 px-3 py-6 sm:px-6 sm:py-10 lg:px-12 select-none overflow-x-hidden">
      
      {/* Inject Embedded Animation Styles */}
      <style>{EMBEDDED_STYLES}</style>

      {/* Top Header Navigation Bar */}
      <div className="w-full max-w-7xl mx-auto mb-6 flex items-center justify-start gap-3 z-50 relative">
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

      {/* ========================================================= */}
      {/* SECTION 1: COPYRIGHT (Header & Detailed Description Section) */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-6 sm:space-y-8">
        
        {/* Main Heading & Badge */}
        <div className="text-center space-y-3 sm:space-y-4 px-2">
          
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 capitalize">
            Copyright
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg font-medium text-neutral-600 max-w-2xl mx-auto leading-relaxed px-2">
            Universal intellectual property protection, licensing protocols, and digital content defense standards.
          </p>
        </div>

        {/* Responsive Legal Description Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/90 shadow-sm p-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left Narrative Text */}
          <div className="md:col-span-8 space-y-3 sm:space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
              <span>✦ Legal Notice &amp; Ownership Policy</span>
            </div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 leading-snug">
              Comprehensive Protection for Original Works, Source Code, Digital Media &amp; Brand Assets.
            </h2>
            
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              All materials, design architectures, texts, vector emblems, graphics, and proprietary digital assets published on this platform are legally protected under international copyright treaties, Berne Convention guidelines, and digital ownership statutes. Unauthorized reproduction, modification, or redistribution without express written authorization is strictly prohibited.
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-[10px] sm:text-xs font-semibold">16 Legal Chapters</span>
              <span className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-[10px] sm:text-xs font-semibold">Berne Convention</span>
              <span className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-[10px] sm:text-xs font-semibold">DMCA Protected</span>
              <span className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-[10px] sm:text-xs font-semibold">Global Enforcement</span>
            </div>
          </div>

          {/* Right Highlights & Metrics Box */}
          <div className="md:col-span-4 bg-neutral-50/90 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-neutral-200/80 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4 text-left">
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900">© 2026</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 font-medium">All Rights Reserved</div>
            </div>
            <div className="hidden md:block border-t border-neutral-200" />
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-600">16 / 16</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 font-medium">Verified Frameworks</div>
            </div>
            <div className="col-span-2 md:col-span-1 border-t border-neutral-200 pt-2">
              <div className="text-[10px] text-neutral-400 font-mono tracking-tight">STATUS: ACTIVE &amp; GLOBALLY ENFORCED</div>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION 2: RESPONSIVE 16 COPYRIGHT CARDS GRID             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto">
        {/* Fully Responsive Grid: 1 col (mobile), 2 cols (tablet), 3-4 cols (desktop) */}
        <div
          key={globalKey}
          onClick={() => setGlobalKey((k) => k + 1)}
          title="Click anywhere to replay animations"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch justify-center"
        >
          {COPYRIGHT_CARDS.map((item) => (
            <CopyrightCardItem
              key={`${item.id}-${globalKey}`}
              item={item}
            />
          ))}
        </div>

      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 pt-6 border-t border-neutral-200 text-center text-[11px] sm:text-xs text-neutral-400 font-mono">
        © {new Date().getFullYear()} Copyright Policy &amp; Intellectual Property Protection Directory • Mobile Responsive &amp; Dynamic
      </footer>

    </div>
  );
}
