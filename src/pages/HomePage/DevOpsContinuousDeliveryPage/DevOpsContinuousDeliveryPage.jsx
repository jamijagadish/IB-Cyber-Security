import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "lucide-react";
import { demoCards } from "../../../data/HomePageData/DevOpsContinuousDeliveryPageData/DevOpsContinuousDeliveryPageData";
import {
  Cloud, Key, RefreshCw, Server, Tag, Code2,
  Cpu, Users, Blocks, Globe, Sliders, Network
} from "lucide-react";

/* ─── CONSTANTS ──────────────────────────────────────────────────────────── */

const iconList = [Cloud, Key, RefreshCw, Server, Tag, Code2, Cpu, Users, Blocks, Globe, Sliders, Network];

const N = 12;
const cards = Array.from({ length: N }, (_, i) => {
  const d = demoCards[i] || {};
  return {
    id: i + 1,
    title: d.title || "DevOps\nEngineering",
    Icon: iconList[i % iconList.length],
  };
});

/*
 * Card color themes — each card gets a unique glassmorphic tint
 * matching the reference image's varied gradient palette.
 */
const themes = [
  { bg: "from-blue-500 to-indigo-600", border: "border-blue-400/50", icon: "text-white" },
  { bg: "from-violet-500 to-purple-600", border: "border-violet-400/50", icon: "text-white" },
  { bg: "from-teal-400 to-emerald-500", border: "border-teal-300/50", icon: "text-white" },
  { bg: "from-rose-400 to-red-500", border: "border-rose-400/50", icon: "text-white" },
  { bg: "from-cyan-400 to-blue-500", border: "border-cyan-400/50", icon: "text-white" },
  { bg: "from-amber-400 to-orange-500", border: "border-amber-400/50", icon: "text-white" },
  { bg: "from-fuchsia-500 to-pink-600", border: "border-fuchsia-400/50", icon: "text-white" },
  { bg: "from-emerald-400 to-green-500", border: "border-emerald-400/50", icon: "text-white" },
  { bg: "from-sky-400 to-indigo-500", border: "border-sky-400/50", icon: "text-white" },
  { bg: "from-orange-400 to-rose-500", border: "border-orange-400/50", icon: "text-white" },
  { bg: "from-indigo-400 to-violet-500", border: "border-indigo-400/50", icon: "text-white" },
  { bg: "from-pink-400 to-rose-500", border: "border-pink-400/50", icon: "text-white" },
];

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */

export default function DevOpsContinuousDeliveryPage({ onClose }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [ww, setWw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const handleBack = () => {
    if (onClose) onClose();
    window.history.back();
  };

  const handleHome = () => {
    if (onClose) onClose();
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  /* Live resize tracking */
  useEffect(() => {
    const fn = () => setWw(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  /* Navigation helpers */
  const next = () => setActive((p) => (p + 1) % N);
  const prev = () => setActive((p) => (p - 1 + N) % N);
  const goTo = (i) => setActive(i);

  /* Automatic non-stop scrolling timer */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % N);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  /* Keyboard nav */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight") setActive((p) => (p + 1) % N);
      if (e.key === "ArrowLeft") setActive((p) => (p - 1 + N) % N);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  /* Drag / swipe handler */
  const onDragEnd = (_, info) => {
    if (info.offset.x < -40) next();
    else if (info.offset.x > 40) prev();
  };

  /* ─── RESPONSIVE BREAKPOINTS ─── */
  const mob = ww < 768;
  const tab = ww >= 768 && ww < 1024;

  const ARC_DEG = mob ? 100 : tab ? 135 : 155;
  const RX = mob ? 180 : tab ? 380 : 600;
  const RY = mob ? 60 : tab ? 120 : 180;
  const CW = mob ? 130 : tab ? 140 : 170;
  const CH = mob ? 185 : tab ? 195 : 240;

  /**
   * Compute a card's position, tilt, scale, opacity, and z-index
   * based on its offset from the currently active card.
   */
  const getTransform = (idx) => {
    let off = idx - active;
    if (off > N / 2) off -= N;
    if (off < -N / 2) off += N;

    const isBack = Math.abs(off) === 6;

    const divisor = mob ? 2.5 : 5;
    const deg = isBack ? 180 : (off / divisor) * (ARC_DEG / 2);
    const rad = (deg * Math.PI) / 180;

    const x = isBack ? 0 : Math.sin(rad) * RX;
    const y = isBack ? RY * 2 : (1 - Math.cos(rad)) * RY;

    const rot = isBack ? 0 : deg * 0.55;

    const d = Math.abs(off);
    const sc = isBack ? 0.3 : Math.max(0.5, 1 - d * 0.08);

    let op;
    if (mob) {
      op = d <= 2 ? Math.max(0.3, 1 - d * 0.25) : 0;
    } else {
      op = isBack ? 0 : Math.max(0.1, 1 - d * 0.15);
    }

    const z = isBack ? -100 : 100 - Math.round(d * 10);

    return { x, y, rot, sc, op, z };
  };

  /* ─── RENDER ────────────────────────────────────────────────────────────── */

  return (
    <div 
      className="relative w-full min-h-screen bg-gradient-to-b from-[#EBF7F8] via-[#E7F3F5] to-[#DFEFF2] flex flex-col items-center justify-between pb-16 font-sans select-none overflow-hidden"
    >

      {/* Top Header Navigation buttons */}
      <div className="w-full max-w-[1300px] px-6 pt-6 flex items-center justify-start gap-3 z-30">
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

      {/* ── Background atmospheric glows ── */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-teal-500/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-cyan-600/[0.05] blur-[120px] pointer-events-none" />

      {/* ── HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="z-20 text-center mb-4 md:mb-6 px-4 max-w-4xl"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#003135] tracking-wider uppercase mb-3">
          DEVOPS &amp; CONTINUOUS DELIVERY
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
          Automating software build, deployment, testing, and cloud infrastructure operations to enable continuous integration and rapid, reliable software release cycles.
        </p>
      </motion.div>

      {/* ── ARC CONTAINER ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="relative w-full"
        style={{ height: mob ? "280px" : tab ? "380px" : "460px" }}
      >
        {/* ▸ Glowing Elliptical Platform Ring (3D perspective) */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            width: mob ? "280px" : tab ? "650px" : "1000px",
            height: mob ? "100px" : tab ? "240px" : "350px",
            bottom: mob ? "-30px" : tab ? "-80px" : "-120px",
            left: "50%",
            transform: "translateX(-50%) rotateX(72deg)",
            borderRadius: "50%",
            border: "2px solid rgba(15, 164, 175, 0.35)",
            boxShadow:
              "0 0 50px rgba(15, 164, 175, 0.25), 0 0 90px rgba(0, 49, 53, 0.12), inset 0 0 35px rgba(15, 164, 175, 0.1)",
          }}
        />

        {/* ▸ Bright center glow on platform */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            width: mob ? "160px" : tab ? "300px" : "450px",
            height: mob ? "30px" : tab ? "50px" : "70px",
            bottom: mob ? "-5px" : tab ? "-30px" : "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at center, rgba(15, 164, 175, 0.4) 0%, rgba(13, 92, 99, 0.15) 45%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* ▸ Cards — draggable wrapper */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={onDragEnd}
          className="relative w-full h-full"
          style={{ perspective: "1200px" }}
        >
          {cards.map((card, i) => {
            const { x, y, rot, sc, op, z } = getTransform(i);
            const isActive = i === active;
            const t = themes[i];

            return (
              <motion.div
                key={card.id}
                initial={false}
                animate={{
                  x,
                  y,
                  rotate: rot,
                  scale: isActive ? sc * 1.1 : sc,
                  opacity: op,
                }}
                transition={{
                  type: "spring",
                  stiffness: 45,
                  damping: 20,
                  mass: 2.5,
                }}
                style={{
                  zIndex: z,
                  position: "absolute",
                  width: CW,
                  height: CH,
                  left: "50%",
                  marginLeft: -CW / 2,
                  top: mob ? 20 : tab ? 30 : 40,
                }}
                className={`rounded-xl md:rounded-2xl bg-gradient-to-br ${t.bg} border ${t.border} cursor-pointer overflow-hidden
                  ${isActive
                    ? "shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
                    : "shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
                  }
                `}
                onClick={() => goTo(i)}
              >
                {/* Card inner content */}
                <div className="flex flex-col items-center justify-between h-full pt-4 pb-2 md:pt-6 md:pb-3 px-2 md:px-4 relative text-white">
                  {/* Top highlight line for gloss effect */}
                  <div className="absolute top-0 left-[12%] right-[12%] h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  {/* Top: Card Number Pill */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-0.5 md:px-4 md:py-1 flex items-center justify-center shadow-sm">
                    <span className="text-[9px] md:text-[11px] font-bold tracking-widest text-white/90">
                      {String(card.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Middle: Circular Glass Icon */}
                  <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] mt-2 md:mt-3">
                    <card.Icon className="w-5 h-5 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[11px] sm:text-xs md:text-[15px] font-extrabold text-center leading-tight mt-2 md:mt-3 mb-1 md:mb-1.5 text-white tracking-wide">
                    {demoCards[i]?.title || card.title}
                  </h3>

                  {/* Separator Line */}
                  <div className="w-6 md:w-8 h-[2px] bg-white/40 rounded-full mb-1.5 md:mb-2" />

                  {/* Short Description */}
                  <p className="text-[8px] sm:text-[9px] md:text-[11px] text-center text-white/90 leading-[1.4] font-medium px-1 line-clamp-2 md:line-clamp-3">
                    {demoCards[i]?.content || "Description not available for this item."}
                  </p>

                  {/* Bottom: Arrow Button */}
                  <div className="mt-auto w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors shadow-sm cursor-pointer group">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-white transform group-hover:translate-x-0.5 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ▸ Next / Prev Navigation Controls placed directly ON the 3D Elliptical Ring Platform Center */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 sm:bottom-1 md:bottom-2 lg:bottom-3 z-40 flex items-center justify-center gap-3 md:gap-4 bg-white/95 backdrop-blur-xl px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-[0_10px_30px_rgba(15,164,175,0.25)] border border-[#0FA4AF]/50">
          <button
            type="button"
            onClick={prev}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#003135] hover:bg-[#0FA4AF] text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-md"
            title="Previous Card"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-1.5 md:gap-2 items-center px-1">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${i === active
                    ? "bg-[#0FA4AF] w-5 md:w-7 h-1.5 md:h-2 shadow-[0_0_8px_rgba(15,164,175,0.6)]"
                    : "bg-teal-200 hover:bg-teal-300 w-1.5 md:w-2 h-1.5 md:h-2"
                  }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#003135] hover:bg-[#0FA4AF] text-white transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-md"
            title="Next Card"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* ── ACTIVE CARD DETAILS (Glassmorphism Box) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className="z-20 mt-8 md:mt-12 w-full max-w-4xl px-4 md:px-6 relative"
      >

        {/* Speech Bubble Pointer Arrow */}
        <div className="absolute -top-3.5 md:-top-5 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-white backdrop-blur-xl border-t border-l border-teal-200/60 rotate-45 rounded-tl-lg md:rounded-tl-xl z-20" />

        {/* Glassmorphism Container */}
        <div className="relative w-full h-[340px] sm:h-[280px] md:h-[240px] bg-white/90 backdrop-blur-2xl border border-teal-200/60 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_8px_32px_rgba(15,164,175,0.12)] overflow-hidden z-10 flex flex-col items-center justify-start">

          {/* Subtle Background Blobs */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Title & Icon Row */}
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                {(() => {
                  const ActiveIcon = cards[active]?.Icon;
                  return (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-teal-50 border border-teal-100 text-[#003135] flex items-center justify-center shadow-sm">
                      {ActiveIcon && <ActiveIcon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />}
                    </div>
                  );
                })()}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#003135] tracking-tight">
                  {demoCards[active]?.title || "Loading..."}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-center font-medium max-w-3xl">
                {demoCards[active]?.content || "Content not available."}
              </p>
            </motion.div>
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
}
