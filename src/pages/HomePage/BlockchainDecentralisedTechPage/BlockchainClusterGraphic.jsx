import React from 'react';

export default function BlockchainClusterGraphic({ className = '' }) {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 800 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[620px] drop-shadow-[0_15px_35px_rgba(15,164,175,0.2)] select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glowing Filters */}
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="intenseGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients for Main Center Cube (Teal/Cyan Theme) */}
          <linearGradient id="mainCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6F7F9" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#AFDDE5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0FA4AF" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="mainCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#024950" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#003135" stopOpacity="0.98" />
          </linearGradient>

          <linearGradient id="mainCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#024950" stopOpacity="0.98" />
          </linearGradient>

          {/* Gradients for Floating Satellite Cubes */}
          <linearGradient id="satCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6F7F9" />
            <stop offset="100%" stopColor="#AFDDE5" />
          </linearGradient>

          <linearGradient id="satCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#024950" />
            <stop offset="100%" stopColor="#003135" />
          </linearGradient>

          <linearGradient id="satCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FA4AF" />
            <stop offset="100%" stopColor="#024950" />
          </linearGradient>

          {/* Center Pedestal Gradients */}
          <linearGradient id="pedestalGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#024950" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="pedestalGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#AFDDE5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#003135" stopOpacity="0.9" />
          </linearGradient>

          {/* Holographic Radial Glows */}
          <radialGradient id="holoDiscGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0FA4AF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#024950" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#003135" stopOpacity="0" />
          </radialGradient>

          {/* Shield Outline Gradient */}
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#AFDDE5" />
          </linearGradient>

          {/* Track Glow Gradients */}
          <linearGradient id="trackGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AFDDE5" />
            <stop offset="50%" stopColor="#0FA4AF" />
            <stop offset="100%" stopColor="#AFDDE5" />
          </linearGradient>
        </defs>

        {/* 1. HOLOGRAPHIC AMBIENT DISCS & RADAR RINGS ON FLOOR */}
        <g opacity="0.9">
          {/* Outermost faint dashed radar track */}
          <ellipse
            cx="400"
            cy="275"
            rx="330"
            ry="115"
            stroke="#AFDDE5"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            opacity="0.5"
          />

          {/* Middle holographic cyan ring */}
          <ellipse
            cx="400"
            cy="275"
            rx="275"
            ry="96"
            stroke="#0FA4AF"
            strokeWidth="2"
            opacity="0.85"
            filter="url(#neonGlow)"
          />

          {/* Inner ambient glow disc */}
          <ellipse
            cx="400"
            cy="275"
            rx="210"
            ry="74"
            fill="url(#holoDiscGlow)"
          />

          {/* Concentric inner technical ring */}
          <ellipse
            cx="400"
            cy="275"
            rx="185"
            ry="65"
            stroke="#AFDDE5"
            strokeWidth="1.5"
            strokeDasharray="12 6"
            opacity="0.6"
          />

          {/* Fine concentric pulse ellipse */}
          <ellipse
            cx="400"
            cy="275"
            rx="135"
            ry="48"
            stroke="#0FA4AF"
            strokeWidth="1"
            opacity="0.7"
          />
        </g>

        {/* 2. FLOOR CIRCUIT TRACES & BUS LINES */}
        <g stroke="#0FA4AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.75">
          <path d="M 230 330 L 170 330 L 140 300 L 90 300" strokeWidth="1.5" />
          <path d="M 210 350 L 170 350 L 140 380 L 100 380" strokeWidth="1.2" strokeDasharray="4 4" />

          <path d="M 570 330 L 630 330 L 660 300 L 710 300" strokeWidth="1.5" />
          <path d="M 590 350 L 630 350 L 660 380 L 700 380" strokeWidth="1.2" strokeDasharray="4 4" />

          <path d="M 260 170 L 200 170 L 170 140 L 120 140" strokeWidth="1.2" />
          <path d="M 540 170 L 600 170 L 630 140 L 680 140" strokeWidth="1.2" />

          {/* Circuit nodes (dots) */}
          <circle cx="140" cy="300" r="3.5" fill="#0FA4AF" filter="url(#subtleGlow)" />
          <circle cx="90" cy="300" r="2.5" fill="#0FA4AF" />
          <circle cx="660" cy="300" r="3.5" fill="#0FA4AF" filter="url(#subtleGlow)" />
          <circle cx="710" cy="300" r="2.5" fill="#0FA4AF" />
          <circle cx="170" cy="140" r="3" fill="#0FA4AF" />
          <circle cx="630" cy="140" r="3" fill="#0FA4AF" />
          <circle cx="140" cy="380" r="3" fill="#0FA4AF" />
          <circle cx="660" cy="380" r="3" fill="#0FA4AF" />
        </g>

        {/* 3. NEON INTERCONNECT BUS TRACKS (Connecting Center Cube to Satellites) */}
        <g filter="url(#neonGlow)">
          {/* Center to Left Foreground */}
          <path d="M 360 280 L 260 295" stroke="url(#trackGlow)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 360 280 L 260 295" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

          {/* Center to Right Foreground */}
          <path d="M 440 280 L 540 295" stroke="url(#trackGlow)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 440 280 L 540 295" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

          {/* Center to Left Background */}
          <path d="M 365 258 L 285 165" stroke="url(#trackGlow)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 365 258 L 285 165" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />

          {/* Center to Right Background */}
          <path d="M 435 258 L 515 165" stroke="url(#trackGlow)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 435 258 L 515 165" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Connection Junction Rings on Floor */}
        <g>
          <circle cx="260" cy="295" r="5" fill="#024950" stroke="#0FA4AF" strokeWidth="1.5" filter="url(#subtleGlow)" />
          <circle cx="260" cy="295" r="2" fill="#FFFFFF" />

          <circle cx="540" cy="295" r="5" fill="#024950" stroke="#0FA4AF" strokeWidth="1.5" filter="url(#subtleGlow)" />
          <circle cx="540" cy="295" r="2" fill="#FFFFFF" />

          <circle cx="285" cy="165" r="4.5" fill="#024950" stroke="#0FA4AF" strokeWidth="1.5" filter="url(#subtleGlow)" />
          <circle cx="285" cy="165" r="2" fill="#FFFFFF" />

          <circle cx="515" cy="165" r="4.5" fill="#024950" stroke="#0FA4AF" strokeWidth="1.5" filter="url(#subtleGlow)" />
          <circle cx="515" cy="165" r="2" fill="#FFFFFF" />
        </g>

        {/* 4. BACKGROUND FLOATING SATELLITE BOXES (CUBES) */}
        {/* LEFT BACKGROUND FLOATING BOX (Hovering at x=260, y=125) */}
        <g>
          {/* Subtle Ground Ring & Shadow */}
          <ellipse cx="260" cy="160" rx="26" ry="9" stroke="#0FA4AF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <ellipse cx="260" cy="160" rx="16" ry="6" fill="#024950" opacity="0.25" filter="url(#subtleGlow)" />

          {/* Small Floating Isometric Cube (hovering in air) */}
          <g>
            {/* Top Face */}
            <path d="M 260 106 L 282 119 L 260 132 L 238 119 Z" fill="url(#satCubeTop)" stroke="#AFDDE5" strokeWidth="1.2" />
            {/* Left Face */}
            <path d="M 238 119 L 260 132 L 260 156 L 238 143 Z" fill="url(#satCubeLeft)" stroke="#0FA4AF" strokeWidth="1" />
            {/* Right Face */}
            <path d="M 260 132 L 282 119 L 282 143 L 260 156 Z" fill="url(#satCubeRight)" stroke="#0FA4AF" strokeWidth="1" />
          </g>
        </g>

        {/* RIGHT BACKGROUND FLOATING BOX (Hovering at x=540, y=125) */}
        <g>
          {/* Subtle Ground Ring & Shadow */}
          <ellipse cx="540" cy="160" rx="26" ry="9" stroke="#0FA4AF" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <ellipse cx="540" cy="160" rx="16" ry="6" fill="#024950" opacity="0.25" filter="url(#subtleGlow)" />

          {/* Small Floating Isometric Cube */}
          <g>
            {/* Top Face */}
            <path d="M 540 106 L 562 119 L 540 132 L 518 119 Z" fill="url(#satCubeTop)" stroke="#AFDDE5" strokeWidth="1.2" />
            {/* Left Face */}
            <path d="M 518 119 L 540 132 L 540 156 L 518 143 Z" fill="url(#satCubeLeft)" stroke="#0FA4AF" strokeWidth="1" />
            {/* Right Face */}
            <path d="M 540 132 L 562 119 L 562 143 L 540 156 Z" fill="url(#satCubeRight)" stroke="#0FA4AF" strokeWidth="1" />
          </g>
        </g>

        {/* 5. CENTER TIERED CYBER PEDESTAL */}
        <g>
          {/* Lower Base Wall */}
          <path
            d="M 295 305 C 295 328 342 345 400 345 C 458 345 505 328 505 305 L 505 290 C 505 268 458 250 400 250 C 342 250 295 268 295 290 Z"
            fill="url(#pedestalGrad1)"
          />
          {/* Lower Disc Top Rim */}
          <ellipse cx="400" cy="290" rx="105" ry="35" fill="#003135" stroke="#0FA4AF" strokeWidth="2" filter="url(#subtleGlow)" />

          {/* Upper Stepped Base Wall */}
          <path
            d="M 320 286 C 320 304 356 318 400 318 C 444 318 480 304 480 286 L 480 272 C 480 254 444 240 400 240 C 356 240 320 254 320 272 Z"
            fill="url(#pedestalGrad2)"
          />
          {/* Upper Disc Top */}
          <ellipse cx="400" cy="272" rx="80" ry="26" fill="#024950" stroke="#AFDDE5" strokeWidth="2" />

          {/* Holographic Glowing Inner Core Ring on Pedestal */}
          <ellipse cx="400" cy="272" rx="64" ry="21" stroke="#0FA4AF" strokeWidth="2.5" opacity="0.9" filter="url(#intenseGlow)" />
          <ellipse cx="400" cy="272" rx="48" ry="15" fill="#AFDDE5" opacity="0.3" />
        </g>

        {/* 6. FOREGROUND FLOATING SATELLITE BOXES (CUBES) */}
        {/* LEFT FOREGROUND FLOATING BOX (Hovering at x=230, y=260) */}
        <g>
          {/* Holographic Ground Ring & Soft Shadow */}
          <ellipse cx="230" cy="305" rx="32" ry="11" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <ellipse cx="230" cy="305" rx="20" ry="7" fill="#024950" opacity="0.3" filter="url(#subtleGlow)" />

          {/* Small Floating Isometric Cube (hovering in air above ground) */}
          <g>
            {/* Top Face */}
            <path d="M 230 238 L 256 253 L 230 268 L 204 253 Z" fill="url(#satCubeTop)" stroke="#AFDDE5" strokeWidth="1.5" />
            {/* Left Face */}
            <path d="M 204 253 L 230 268 L 230 296 L 204 281 Z" fill="url(#satCubeLeft)" stroke="#0FA4AF" strokeWidth="1.2" />
            {/* Right Face */}
            <path d="M 230 268 L 256 253 L 256 281 L 230 296 Z" fill="url(#satCubeRight)" stroke="#0FA4AF" strokeWidth="1.2" />
          </g>
        </g>

        {/* RIGHT FOREGROUND FLOATING BOX (Hovering at x=570, y=260) */}
        <g>
          {/* Holographic Ground Ring & Soft Shadow */}
          <ellipse cx="570" cy="305" rx="32" ry="11" stroke="#0FA4AF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <ellipse cx="570" cy="305" rx="20" ry="7" fill="#024950" opacity="0.3" filter="url(#subtleGlow)" />

          {/* Small Floating Isometric Cube */}
          <g>
            {/* Top Face */}
            <path d="M 570 238 L 596 253 L 570 268 L 544 253 Z" fill="url(#satCubeTop)" stroke="#AFDDE5" strokeWidth="1.5" />
            {/* Left Face */}
            <path d="M 544 253 L 570 268 L 570 296 L 544 281 Z" fill="url(#satCubeLeft)" stroke="#0FA4AF" strokeWidth="1.2" />
            {/* Right Face */}
            <path d="M 570 268 L 596 253 L 596 281 L 570 296 Z" fill="url(#satCubeRight)" stroke="#0FA4AF" strokeWidth="1.2" />
          </g>
        </g>

        {/* 7. FLOATING MICRO-VOXELS IN 3D SPACE */}
        <g opacity="0.9">
          <g transform="translate(325, 235) scale(0.65)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#AFDDE5" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#003135" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>

          <g transform="translate(460, 235) scale(0.65)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#AFDDE5" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#003135" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>

          <g transform="translate(210, 220) scale(0.5)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#E6F7F9" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#024950" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>

          <g transform="translate(575, 220) scale(0.5)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#E6F7F9" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#024950" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>

          <g transform="translate(390, 80) scale(0.45)">
            <path d="M 12 0 L 24 7 L 12 14 L 0 7 Z" fill="#AFDDE5" />
            <path d="M 0 7 L 12 14 L 12 28 L 0 21 Z" fill="#024950" />
            <path d="M 12 14 L 24 7 L 24 21 L 12 28 Z" fill="#0FA4AF" />
          </g>
        </g>

        {/* 8. CENTER HERO ISOMETRIC 3D CUBE WITH SECURITY SHIELD */}
        <g>
          {/* Top Face */}
          <path
            d="M 400 115 L 468 154 L 400 193 L 332 154 Z"
            fill="url(#mainCubeTop)"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          {/* Inner diagonal sheen line */}
          <path
            d="M 366 135 L 434 174"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            opacity="0.6"
            strokeLinecap="round"
          />

          {/* Left Face */}
          <path
            d="M 332 154 L 400 193 L 400 273 L 332 234 Z"
            fill="url(#mainCubeLeft)"
            stroke="#0FA4AF"
            strokeWidth="1.8"
          />

          {/* Right Face */}
          <path
            d="M 400 193 L 468 154 L 468 234 L 400 273 Z"
            fill="url(#mainCubeRight)"
            stroke="#0FA4AF"
            strokeWidth="1.8"
          />

          {/* Edge Highlights with Neon Glow */}
          <g stroke="#AFDDE5" strokeWidth="2" filter="url(#subtleGlow)">
            <line x1="400" y1="193" x2="400" y2="273" />
            <line x1="332" y1="154" x2="400" y2="193" />
            <line x1="400" y1="193" x2="468" y2="154" />
          </g>

          {/* Glowing Security Shield Emblem on Front Face */}
          <g transform="translate(372, 195)">
            <path
              d="M 28 6 C 36 6 46 0 46 0 C 46 0 56 6 64 6 C 64 22 56 36 46 44 C 36 36 28 22 28 6 Z"
              fill="none"
              stroke="#0FA4AF"
              strokeWidth="4"
              opacity="0.8"
              filter="url(#intenseGlow)"
            />
            <path
              d="M 28 6 C 36 6 46 0 46 0 C 46 0 56 6 64 6 C 64 22 56 36 46 44 C 36 36 28 22 28 6 Z"
              fill="none"
              stroke="url(#shieldGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 34 11 C 39 11 46 7 46 7 C 46 7 53 11 58 11 C 58 22 52 31 46 37 C 40 31 34 22 34 11 Z"
              fill="none"
              stroke="#AFDDE5"
              strokeWidth="1.5"
              opacity="0.8"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
