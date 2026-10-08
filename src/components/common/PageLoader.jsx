
/**
 * PageLoader
 * 
 * Global, lightweight, high-performance branded loading screen.
 * - Deep cyber theme (#001C1F) avoiding white/blank screen flashes.
 * - Minimal, elegant cyber shield animation with glowing progress beam.
 * - Non-intrusive, fast, and smooth opacity transitions.
 * - Usable as a Suspense fallback and route transition indicator.
 */
export default function PageLoader({ message = 'Loading Platform...' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#001C1F] text-white select-none transition-opacity duration-300"
    >
      {/* Top High-Tech Progress Beam */}
      <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#003135] overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#0FA4AF] to-[#AFDDE5] animate-page-beam" />
      </div>

      {/* Center Branded Loader */}
      <div className="relative flex flex-col items-center">
        {/* Ambient Cyan Pulse Glow */}
        <div className="absolute -inset-4 rounded-full bg-[#0FA4AF]/15 blur-2xl animate-pulse pointer-events-none" />

        {/* Shield Logo with Subtle Breathing Animation */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
          <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(15,164,175,0.45)]" viewBox="0 0 48 48" fill="none">
            {/* Outer Cyber Shield Path */}
            <path
              d="M24 3.5 42 10v12.6c0 10.9-7.3 18.4-18 21.9C13.3 41 6 33.5 6 22.6V10l18-6.5Z"
              fill="url(#loader-shield-grad)"
              stroke="#0FA4AF"
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />
            {/* Inner Brand Monogram "IB" */}
            <text
              x="24"
              y="27"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="12.5"
              fontWeight="900"
              fontFamily="Manrope, Inter, sans-serif"
              letterSpacing="0.05em"
            >
              IB
            </text>
            <defs>
              <linearGradient id="loader-shield-grad" x1="8" y1="7" x2="40" y2="43" gradientUnits="userSpaceOnUse">
                <stop stopColor="#024950" />
                <stop offset="1" stopColor="#0FA4AF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand Name & Telemetry */}
        <div className="flex flex-col items-center text-center">
          <span className="font-display font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] text-white uppercase leading-tight">
            IB CYBER SECURITY
          </span>
          <span className="text-[9px] font-bold tracking-[0.22em] text-[#0FA4AF] uppercase mt-0.5">
            PRIVATE LIMITED
          </span>

          {/* Minimalist Micro Progress Bar */}
          <div className="mt-3.5 w-32 h-[2px] bg-[#003135] rounded-full overflow-hidden relative">
            <div className="h-full bg-gradient-to-r from-[#0FA4AF] to-[#AFDDE5] rounded-full animate-loader-progress" />
          </div>

          <span className="mt-2 text-[10px] font-mono tracking-wider text-white/50 uppercase">
            {message}
          </span>
        </div>
      </div>
    </div>
  );
}
