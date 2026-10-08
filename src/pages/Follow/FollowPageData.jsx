import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Users, 
  UserCheck, 
  Plus 
} from 'lucide-react';

// ============================================================================
// 1. FOREGROUND APP ICONS DATA (12 Non-Overlapping Spaced Bouquet Icons)
// ============================================================================
export const BrandVectorIcons = {
  TikTok: () => (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-[72%] h-[72%]" fill="none">
        <path
          d="M17.8 7.2a4.8 4.8 0 0 1-3.2-1.9v8.4a5.3 5.3 0 1 1-5.3-5.3c.4 0 .7 0 1.1.1v2.8a2.5 2.5 0 1 0 1.4 2.4V2h2.8c.2 1.8 1.4 3.3 3.2 3.8v1.4z"
          fill="#25F4EE"
          transform="translate(-0.8, -0.6)"
        />
        <path
          d="M17.8 7.2a4.8 4.8 0 0 1-3.2-1.9v8.4a5.3 5.3 0 1 1-5.3-5.3c.4 0 .7 0 1.1.1v2.8a2.5 2.5 0 1 0 1.4 2.4V2h2.8c.2 1.8 1.4 3.3 3.2 3.8v1.4z"
          fill="#FE2C55"
          transform="translate(0.8, 0.6)"
        />
        <path
          d="M17.8 7.2a4.8 4.8 0 0 1-3.2-1.9v8.4a5.3 5.3 0 1 1-5.3-5.3c.4 0 .7 0 1.1.1v2.8a2.5 2.5 0 1 0 1.4 2.4V2h2.8c.2 1.8 1.4 3.3 3.2 3.8v1.4z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  ),

  LinkedIn: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      <svg viewBox="0 0 24 24" className="w-[66%] h-[66%]" fill="currentColor">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" transform="translate(1.5, 0) scale(0.88)" />
      </svg>
    </div>
  ),

  Behance: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      <svg viewBox="0 0 24 24" className="w-[70%] h-[70%]" fill="currentColor">
        <path d="M8.2 11.2c1-.4 1.7-1.2 1.7-2.3 0-2-1.6-2.9-3.8-2.9H1v12h5.5c2.4 0 4.2-1.1 4.2-3.4 0-1.6-.9-2.9-2.5-3.4zm-4.4-3.1h2.1c1.1 0 1.7.5 1.7 1.3 0 .9-.6 1.4-1.7 1.4H3.8V8.1zm2.3 7.8H3.8V12h2.4c1.2 0 1.9.6 1.9 1.5 0 1.1-.7 1.6-2 1.6v.8zm11.7-4.1c-2.4 0-4.1 1.8-4.1 4.4 0 2.6 1.7 4.4 4.2 4.4 1.9 0 3.3-1.1 3.8-2.6h-2.1c-.3.5-.8.8-1.6.8-1.2 0-1.9-.7-2-1.8h5.9c.1-.3.1-.6.1-.9 0-2.4-1.6-4.3-4.2-4.3zm-1.8 3.5c.2-.9.8-1.7 1.8-1.7.9 0 1.6.7 1.8 1.7h-3.6zm.1-5.1h3.4V9h-3.4v1.2z" transform="translate(1.2, 2) scale(0.88)" />
      </svg>
    </div>
  ),

  Pinterest: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[84%] h-[84%] rounded-full bg-[#E60023] flex items-center justify-center shadow-inner">
        <svg viewBox="0 0 24 24" className="w-[62%] h-[62%] text-white fill-current">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.224-.174.271-.4.164-1.49-.694-2.42-2.87-2.42-4.62 0-3.763 2.734-7.22 7.884-7.22 4.14 0 7.359 2.95 7.359 6.896 0 4.114-2.595 7.425-6.196 7.425-1.21 0-2.348-.629-2.738-1.373l-.744 2.836c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      </div>
    </div>
  ),

  Twitch: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      <svg viewBox="0 0 24 24" className="w-[68%] h-[68%]" fill="currentColor">
        <path d="M4.25 3L2 7.5V20.25H6.5V23.25L9.5 20.25H14L20.75 13.5V3H4.25ZM19.25 12.75L16.25 15.75H13.25L10.625 18.375V15.75H6.5V4.5H19.25V12.75ZM15.5 7.5H13.625V12.75H15.5V7.5ZM10.625 7.5H8.75V12.75H10.625V7.5Z" transform="translate(1, 0.5) scale(0.92)" />
      </svg>
    </div>
  ),

  WhatsApp: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      <svg viewBox="0 0 24 24" className="w-[74%] h-[74%]" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.1 7.32C8.94 7.32 8.67 7.38 8.44 7.63C8.21 7.88 7.56 8.49 7.56 9.72C7.56 10.96 8.46 12.15 8.59 12.32C8.71 12.49 10.36 15.03 12.87 16.12C13.47 16.38 13.93 16.53 14.3 16.65C14.9 16.84 15.44 16.81 15.87 16.75C16.36 16.67 17.37 16.13 17.58 15.54C17.78 14.96 17.78 14.46 17.72 14.35C17.66 14.25 17.51 14.19 17.28 14.07C17.06 13.96 15.96 13.42 15.75 13.34C15.55 13.27 15.4 13.23 15.25 13.46C15.1 13.69 14.67 14.19 14.54 14.35C14.41 14.5 14.28 14.52 14.05 14.41C13.83 14.29 12.89 13.99 11.77 12.99C10.9 12.21 10.31 11.25 10.14 10.96C9.97 10.67 10.12 10.51 10.24 10.39C10.34 10.29 10.47 10.12 10.58 9.98C10.7 9.85 10.74 9.75 10.82 9.59C10.89 9.42 10.86 9.28 10.8 9.16C10.74 9.05 10.3 7.97 10.11 7.52C9.93 7.08 9.75 7.14 9.61 7.13C9.48 7.12 9.33 7.12 9.18 7.12L9.1 7.32Z" />
      </svg>
    </div>
  ),

  Telegram: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[84%] h-[84%] rounded-full bg-white/25 flex items-center justify-center shadow-inner">
        <svg viewBox="0 0 24 24" className="w-[66%] h-[66%] text-white fill-current translate-x-[-1px] translate-y-[1px]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      </div>
    </div>
  ),

  Instagram: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      <svg viewBox="0 0 24 24" className="w-[66%] h-[66%] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round">
        <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.8" cy="6.2" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    </div>
  ),

  Google: () => (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-[72%] h-[72%]">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>
    </div>
  ),

  Twitter: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      <svg viewBox="0 0 24 24" className="w-[68%] h-[68%] fill-current">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
      </svg>
    </div>
  ),

  Facebook: () => (
    <div className="w-full h-full flex items-center justify-center text-white">
      <svg viewBox="0 0 24 24" className="w-[74%] h-[74%] fill-current translate-x-[2px] translate-y-[2px]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </div>
  ),

  YouTube: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[80%] h-[64%] rounded-[11px] bg-[#FF0000] flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 24 24" className="w-[44%] h-[44%] text-white fill-current translate-x-[1px]">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  ),
};

export const FOREGROUND_ICONS_DATA = [
  // Tier 1: Center Bottom (Directly above phone display)
  {
    id: 'tiktok',
    name: 'TikTok',
    bgColor: 'bg-black',
    shadowClass: 'shadow-3d-tile-dark',
    renderIcon: BrandVectorIcons.TikTok,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '50%',
    posY: '82%',
    originX: 0,
    originY: 60,
    originRot: 0,
    delay: 0.04,
    zIndex: 25,
    tint: '#010101'
  },
  
  // Tier 2: Center (Pinterest)
  {
    id: 'pinterest',
    name: 'Pinterest',
    bgColor: 'bg-white',
    shadowClass: 'shadow-3d-tile-white',
    renderIcon: BrandVectorIcons.Pinterest,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '50%',
    posY: '56%',
    originX: 0,
    originY: 155,
    originRot: 0,
    delay: 0.12,
    zIndex: 22,
    tint: '#ffffff'
  },

  // Tier 2: Lower-Mid Left (LinkedIn)
  {
    id: 'linkedin',
    name: 'LinkedIn',
    bgColor: 'bg-[#0077b5]',
    shadowClass: 'shadow-3d-tile-blue',
    renderIcon: BrandVectorIcons.LinkedIn,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '32%',
    posY: '64%',
    originX: 140,
    originY: 125,
    originRot: 10,
    delay: 0.16,
    zIndex: 20,
    tint: '#0077b5'
  },

  // Tier 2: Lower-Mid Right (Behance)
  {
    id: 'behance',
    name: 'Behance',
    bgColor: 'bg-[#0057ff]',
    shadowClass: 'shadow-3d-tile-blue',
    renderIcon: BrandVectorIcons.Behance,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '68%',
    posY: '64%',
    originX: -140,
    originY: 125,
    originRot: -10,
    delay: 0.16,
    zIndex: 20,
    tint: '#0057ff'
  },

  // Tier 3: Mid Outer Left (Twitch)
  {
    id: 'twitch',
    name: 'Twitch',
    bgColor: 'bg-[#9146ff]',
    shadowClass: 'shadow-3d-tile-purple',
    renderIcon: BrandVectorIcons.Twitch,
    size: 'w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] md:w-[72px] md:h-[72px]',
    posX: '16%',
    posY: '42%',
    originX: 260,
    originY: 200,
    originRot: 18,
    delay: 0.28,
    zIndex: 18,
    tint: '#9146ff'
  },

  // Tier 3: Mid Inner Left (Google)
  {
    id: 'google',
    name: 'Google',
    bgColor: 'bg-white',
    shadowClass: 'shadow-3d-tile-white',
    renderIcon: BrandVectorIcons.Google,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '36%',
    posY: '38%',
    originX: 110,
    originY: 215,
    originRot: 6,
    delay: 0.24,
    zIndex: 18,
    tint: '#ffffff'
  },

  // Tier 3: Mid Inner Right (WhatsApp)
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    bgColor: 'bg-[#25d366]',
    shadowClass: 'shadow-3d-tile-green',
    renderIcon: BrandVectorIcons.WhatsApp,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '64%',
    posY: '38%',
    originX: -110,
    originY: 215,
    originRot: -6,
    delay: 0.24,
    zIndex: 18,
    tint: '#25d366'
  },

  // Tier 3: Mid Outer Right (Instagram)
  {
    id: 'instagram',
    name: 'Instagram',
    bgColor: 'bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5]',
    shadowClass: 'shadow-3d-tile-insta',
    renderIcon: BrandVectorIcons.Instagram,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '84%',
    posY: '42%',
    originX: -260,
    originY: 200,
    originRot: -18,
    delay: 0.28,
    zIndex: 18,
    tint: '#d62976'
  },

  // Tier 4: Top Outer Left (Telegram)
  {
    id: 'telegram',
    name: 'Telegram',
    bgColor: 'bg-[#24a1de]',
    shadowClass: 'shadow-3d-tile-blue',
    renderIcon: BrandVectorIcons.Telegram,
    size: 'w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] md:w-[72px] md:h-[72px]',
    posX: '26%',
    posY: '15%',
    originX: 180,
    originY: 300,
    originRot: 12,
    delay: 0.38,
    zIndex: 15,
    tint: '#24a1de'
  },

  // Tier 4: Top Inner Left (Twitter)
  {
    id: 'twitter',
    name: 'Twitter',
    bgColor: 'bg-[#1da1f2]',
    shadowClass: 'shadow-3d-tile-cyan',
    renderIcon: BrandVectorIcons.Twitter,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '42%',
    posY: '12%',
    originX: 60,
    originY: 315,
    originRot: 3,
    delay: 0.34,
    zIndex: 15,
    tint: '#1da1f2'
  },

  // Tier 4: Top Inner Right (Facebook)
  {
    id: 'facebook',
    name: 'Facebook',
    bgColor: 'bg-[#1877f2]',
    shadowClass: 'shadow-3d-tile-blue',
    renderIcon: BrandVectorIcons.Facebook,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '58%',
    posY: '12%',
    originX: -60,
    originY: 315,
    originRot: -3,
    delay: 0.34,
    zIndex: 15,
    tint: '#1877f2'
  },

  // Tier 4: Top Outer Right (YouTube)
  {
    id: 'youtube',
    name: 'YouTube',
    bgColor: 'bg-white',
    shadowClass: 'shadow-3d-tile-white',
    renderIcon: BrandVectorIcons.YouTube,
    size: 'w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px]',
    posX: '74%',
    posY: '15%',
    originX: -180,
    originY: 300,
    originRot: -12,
    delay: 0.38,
    zIndex: 15,
    tint: '#ff0000'
  },
];

// ============================================================================
// 2. BACKGROUND STREAMING ICONS DATA (32 Panoramic Trajectory Icons)
// ============================================================================
export const StreamVectorGlyphs = {
  spotify: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-[#1DB954]" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.3a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.58-1.04 8.5-.6 11.66 1.34a.75.75 0 0 1 .25 1.03zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.99-8.15-2.56-11.97-1.4a.94.94 0 1 1-.55-1.8c4.37-1.32 9.8-.69 13.5 1.6a.94.94 0 0 1 .31 1.29zm.13-3.4c-3.87-2.3-10.26-2.51-13.98-1.38a1.13 1.13 0 1 1-.65-2.16c4.27-1.3 11.33-1.05 15.79 1.6a1.13 1.13 0 1 1-1.16 1.94z" />
    </svg>
  ),
  snapchat: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-[#FFFC00]" fill="currentColor">
      <path d="M12.001 2.002c-4.417 0-8.001 3.584-8.001 8.001 0 1.25.304 2.433.84 3.483-.243.606-.757 1.309-1.536 1.708-.28.143-.377.485-.224.761.15.27.48.375.76.236.953-.478 1.637-1.282 2.016-2.072 1.523 1.205 3.447 1.884 5.518 1.884 1.487 0 2.9-.356 4.145-1.002.316.592.83 1.254 1.55 1.748.273.187.643.125.842-.143.197-.266.147-.643-.117-.85-.811-.635-1.345-1.517-1.554-2.287.652-1.077 1.033-2.342 1.033-3.692 0-4.417-3.584-8.001-8.001z" />
    </svg>
  ),
  reddit: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-[#FF4500]" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm7.404 13.593c.038.26.059.525.059.794 0 2.766-3.235 5.008-7.227 5.008s-7.226-2.242-7.226-5.008c0-.269.021-.534.059-.794-.652-.395-1.09-1.109-1.09-1.927 0-1.246 1.01-2.256 2.256-2.256.7 0 1.326.321 1.743.823 1.244-.824 2.898-1.353 4.732-1.428l.942-4.425 3.084.656c.099-.547.573-.96 1.144-.96.643 0 1.164.521 1.164 1.164s-.521 1.164-1.164 1.164c-.559 0-1.025-.395-1.137-.924l-2.618-.557-.768 3.606c1.862.064 3.541.597 4.802 1.432.421-.511 1.054-.839 1.763-.839 1.246 0 2.256 1.01 2.256 2.256 0 .818-.438 1.532-1.09 1.927z" />
    </svg>
  ),
  discord: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-[#5865F2]" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
  threads: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
      <path d="M12.186 24h-.007C5.463 23.974.004 18.508 0 11.785.004 5.068 5.463-.399 12.179-.425c3.542-.014 6.89 1.34 9.426 3.811 2.39 2.327 3.738 5.462 3.795 8.828.064 3.75-1.288 7.159-3.807 9.601-2.316 2.245-5.409 3.52-8.71 3.593-.232.005-.463.007-.697.007v-2.146c.203 0 .405-.002.608-.007 2.76-.06 5.342-1.127 7.272-3.001 2.115-2.05 3.25-4.912 3.197-8.058-.048-2.825-1.18-5.454-3.187-7.404C17.95 2.723 15.139 1.6 12.179 1.612 6.574 1.633 2.023 6.19 2.02 11.785c.003 5.59 4.554 10.142 10.16 10.163.002 0 .004 0 .006 0 2.296 0 4.48-.758 6.314-2.193l1.328 1.684C17.65 23.2 15.004 24 12.186 24z" />
    </svg>
  ),
  messenger: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-[#0084FF]" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.914 1.45 5.518 3.714 7.185V22l3.37-1.85c.92.256 1.895.394 2.916.394 5.523 0 10-4.145 10-9.26S17.523 2 12 2zm1.06 12.445l-2.71-2.89-5.29 2.89 5.82-6.18 2.78 2.89 5.22-2.89-5.82 6.18z" />
    </svg>
  ),
  apple: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.66-.8 1.11-1.92.99-3.04-1 .04-2.18.67-2.85 1.46-.58.68-1.1 1.79-.96 2.89 1.11.09 2.19-.58 2.82-1.31z" />
    </svg>
  ),
  github: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  dribbble: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-[#EA4C89]" fill="currentColor">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.189 11.462c-.178-.035-2.732-.534-5.46-.223.116-.32.228-.646.333-.978.077-.245.149-.49.215-.735 2.871.393 5.434 1.378 5.492 1.401l-.58.535zm-1.155-2.22c-.144-.066-2.5-1.066-5.185-1.428.614-1.284 1.139-2.616 1.547-3.957 2.062 1.258 3.52 3.298 3.638 5.385zm-5.753-6.242c-.419 1.309-.942 2.607-1.548 3.864-2.696-.921-5.69-1.264-6.177-1.311 1.776-1.745 4.148-2.822 6.772-2.822.319 0 .634.016.953.048v.221zm-8.868 3.493c.433.041 3.272.361 5.86 1.233-.48 1.242-1.026 2.457-1.636 3.626-2.659-.838-5.748-.962-6.096-.973.197-1.461.854-2.784 1.872-3.886zm-2.413 5.807c.307.011 3.236.126 5.854.912-.663 1.308-1.385 2.541-2.164 3.689-2.253-1.189-3.541-3.232-3.69-4.601zm3.262 6.425c.732-1.096 1.417-2.274 2.046-3.522 2.606.326 5.093.385 5.334.388-.344 1.851-1.383 3.447-2.81 4.502-1.383-.356-3.085-.867-4.57-1.368zm6.55 1.575c1.199-.868 2.083-2.146 2.441-3.642 2.399-.345 4.545.109 4.708.146-.499 1.777-1.657 3.27-3.208 4.195-.623-.223-1.309-.457-1.941-.699z" />
    </svg>
  ),
  netflix: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
      <path d="M5.5 2h3.2v19.5c-.8-.2-1.6-.4-2.4-.6-.2 0-.4-.1-.8-.2V2z" fill="#E50914" />
      <path d="M15.3 2h3.2v20c-.8-.2-1.6-.3-2.4-.5-.3 0-.5-.1-.8-.2V2z" fill="#E50914" />
      <path d="M5.5 2h3.2l6.6 18.5c-.8-.2-1.6-.3-2.4-.5L5.5 2z" fill="#B81D24" />
    </svg>
  ),
  figma: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
    </svg>
  ),
  slack: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A" />
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0" />
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D" />
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E" />
    </svg>
  ),
  tiktok: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
      <path d="M17.8 7.2a4.8 4.8 0 0 1-3.2-1.9v8.4a5.3 5.3 0 1 1-5.3-5.3c.4 0 .7 0 1.1.1v2.8a2.5 2.5 0 1 0 1.4 2.4V2h2.8c.2 1.8 1.4 3.3 3.2 3.8v1.4z" fill="#25F4EE" transform="translate(-0.8, -0.6)" />
      <path d="M17.8 7.2a4.8 4.8 0 0 1-3.2-1.9v8.4a5.3 5.3 0 1 1-5.3-5.3c.4 0 .7 0 1.1.1v2.8a2.5 2.5 0 1 0 1.4 2.4V2h2.8c.2 1.8 1.4 3.3 3.2 3.8v1.4z" fill="#FE2C55" transform="translate(0.8, 0.6)" />
      <path d="M17.8 7.2a4.8 4.8 0 0 1-3.2-1.9v8.4a5.3 5.3 0 1 1-5.3-5.3c.4 0 .7 0 1.1.1v2.8a2.5 2.5 0 1 0 1.4 2.4V2h2.8c.2 1.8 1.4 3.3 3.2 3.8v1.4z" fill="#FFFFFF" />
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.8" cy="6.2" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  whatsapp: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-[#25D366]" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.1 7.32C8.94 7.32 8.67 7.38 8.44 7.63C8.21 7.88 7.56 8.49 7.56 9.72C7.56 10.96 8.46 12.15 8.59 12.32C8.71 12.49 10.36 15.03 12.87 16.12C13.47 16.38 13.93 16.53 14.3 16.65C14.9 16.84 15.44 16.81 15.87 16.75C16.36 16.67 17.37 16.13 17.58 15.54C17.78 14.96 17.78 14.46 17.72 14.35C17.66 14.25 17.51 14.19 17.28 14.07C17.06 13.96 15.96 13.42 15.75 13.34C15.55 13.27 15.4 13.23 15.25 13.46C15.1 13.69 14.67 14.19 14.54 14.35C14.41 14.5 14.28 14.52 14.05 14.41C13.83 14.29 12.89 13.99 11.77 12.99C10.9 12.21 10.31 11.25 10.14 10.96C9.97 10.67 10.12 10.51 10.24 10.39C10.34 10.29 10.47 10.12 10.58 9.98C10.7 9.85 10.74 9.75 10.82 9.59C10.89 9.42 10.86 9.28 10.8 9.16C10.74 9.05 10.3 7.97 10.11 7.52C9.93 7.08 9.75 7.14 9.61 7.13C9.48 7.12 9.33 7.12 9.18 7.12L9.1 7.32Z" />
    </svg>
  ),
  youtube: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-red-600" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  twitter: () => (
    <svg viewBox="0 0 24 24" className="w-full h-full text-[#1DA1F2]" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
    </svg>
  ),
};

export const STREAMING_BACKGROUND_ITEMS = [
  // Wave 1: Full Panoramic Screen Fan Out
  { type: 'spotify', anim: 'liftoffFlow1', dur: '8.4s', delay: '0.0s', startX: -180 },
  { type: 'snapchat', anim: 'liftoffFlow2', dur: '7.8s', delay: '0.25s', startX: -140 },
  { type: 'reddit', anim: 'liftoffFlow3', dur: '8.6s', delay: '0.5s', startX: -100 },
  { type: 'discord', anim: 'liftoffFlow4', dur: '8.0s', delay: '0.75s', startX: -60 },
  { type: 'threads', anim: 'liftoffFlow5', dur: '8.8s', delay: '1.0s', startX: -20 },
  { type: 'messenger', anim: 'liftoffFlow6', dur: '8.1s', delay: '1.25s', startX: 0 },
  { type: 'apple', anim: 'liftoffFlow7', dur: '8.5s', delay: '1.5s', startX: 0 },
  { type: 'github', anim: 'liftoffFlow8', dur: '7.9s', delay: '1.75s', startX: 20 },
  { type: 'dribbble', anim: 'liftoffFlow9', dur: '8.7s', delay: '2.0s', startX: 60 },
  { type: 'netflix', anim: 'liftoffFlow10', dur: '8.2s', delay: '2.25s', startX: 100 },
  { type: 'figma', anim: 'liftoffFlow11', dur: '8.0s', delay: '2.5s', startX: 140 },
  { type: 'slack', anim: 'liftoffFlow12', dur: '8.9s', delay: '2.75s', startX: 180 },
  { type: 'tiktok', anim: 'liftoffFlow13', dur: '8.5s', delay: '3.0s', startX: 200 },
  { type: 'instagram', anim: 'liftoffFlow14', dur: '7.7s', delay: '3.25s', startX: -120 },
  { type: 'whatsapp', anim: 'liftoffFlow15', dur: '8.3s', delay: '3.5s', startX: 120 },
  { type: 'youtube', anim: 'liftoffFlow16', dur: '8.9s', delay: '3.75s', startX: 0 },

  // Wave 2: Interleaved High Density Full Flow
  { type: 'twitter', anim: 'liftoffFlow1', dur: '8.2s', delay: '4.0s', startX: -160 },
  { type: 'spotify', anim: 'liftoffFlow2', dur: '8.5s', delay: '4.25s', startX: -120 },
  { type: 'discord', anim: 'liftoffFlow3', dur: '7.9s', delay: '4.5s', startX: -80 },
  { type: 'snapchat', anim: 'liftoffFlow4', dur: '8.4s', delay: '4.75s', startX: -40 },
  { type: 'reddit', anim: 'liftoffFlow5', dur: '8.8s', delay: '5.0s', startX: -10 },
  { type: 'threads', anim: 'liftoffFlow6', dur: '8.0s', delay: '5.25s', startX: 0 },
  { type: 'apple', anim: 'liftoffFlow7', dur: '8.7s', delay: '5.5s', startX: 0 },
  { type: 'netflix', anim: 'liftoffFlow8', dur: '8.2s', delay: '5.75s', startX: 10 },
  { type: 'tiktok', anim: 'liftoffFlow9', dur: '8.6s', delay: '6.0s', startX: 40 },
  { type: 'instagram', anim: 'liftoffFlow10', dur: '7.8s', delay: '6.25s', startX: 80 },
  { type: 'whatsapp', anim: 'liftoffFlow11', dur: '8.3s', delay: '6.5s', startX: 120 },
  { type: 'youtube', anim: 'liftoffFlow12', dur: '8.9s', delay: '6.75s', startX: 160 },
  { type: 'messenger', anim: 'liftoffFlow13', dur: '8.1s', delay: '7.0s', startX: 190 },
  { type: 'github', anim: 'liftoffFlow14', dur: '7.9s', delay: '7.25s', startX: -100 },
  { type: 'dribbble', anim: 'liftoffFlow15', dur: '8.7s', delay: '7.5s', startX: 100 },
  { type: 'figma', anim: 'liftoffFlow16', dur: '8.0s', delay: '7.75s', startX: 0 },
];

// ============================================================================
// 3. 7 REVIEWS CARDS DATA (Icon-Only Styling)
// ============================================================================
export const REVIEWS_CARDS_DATA = [
  {
    id: 'google-reviews',
    title: 'Google Reviews',
    bgClass: 'bg-white text-gray-900',
    shadowClass: 'shadow-3d-tile-white',
    glowColor: 'rgba(66, 133, 244, 0.35)',
    textColor: 'text-gray-900',
    renderIcon: () => (
      <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>
    )
  },
  {
    id: 'student-reviews',
    title: 'Student Reviews',
    bgClass: 'bg-gradient-to-br from-[#6366F1] via-[#4F46E5] to-[#3730A3] text-white',
    shadowClass: 'shadow-3d-tile-purple',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    textColor: 'text-white',
    renderIcon: () => (
      <div className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
        <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[2.2]" />
      </div>
    )
  },
  {
    id: 'client-reviews',
    title: 'Client Reviews',
    bgClass: 'bg-gradient-to-br from-[#0EA5E9] via-[#0284C7] to-[#0369A1] text-white',
    shadowClass: 'shadow-3d-tile-blue',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    textColor: 'text-white',
    renderIcon: () => (
      <div className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
        <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[2.2]" />
      </div>
    )
  },
  {
    id: 'victim-testimonials',
    title: 'Victim Testimonials',
    bgClass: 'bg-gradient-to-br from-[#F43F5E] via-[#E11D48] to-[#9F1239] text-white',
    shadowClass: 'shadow-3d-tile-red',
    glowColor: 'rgba(244, 63, 94, 0.42)',
    textColor: 'text-white',
    renderIcon: () => (
      <div className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
        <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[2.2]" />
      </div>
    )
  },
  {
    id: 'employee-reviews',
    title: 'Employee Reviews',
    bgClass: 'bg-gradient-to-br from-[#10B981] via-[#059669] to-[#065F46] text-white',
    shadowClass: 'shadow-3d-tile-green',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    textColor: 'text-white',
    renderIcon: () => (
      <div className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
        <Users className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[2.2]" />
      </div>
    )
  },
  {
    id: 'candidate-reviews',
    title: 'Candidate Reviews',
    bgClass: 'bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#B45309] text-white',
    shadowClass: 'shadow-3d-tile-insta',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    textColor: 'text-white',
    renderIcon: () => (
      <div className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
        <UserCheck className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white stroke-[2.2]" />
      </div>
    )
  },
  {
    id: 'add-review',
    title: 'Add Review',
    bgClass: 'bg-white/85 text-gray-900 border-2 border-dashed border-rose-400/60 hover:border-rose-500',
    shadowClass: 'shadow-3d-tile-white',
    glowColor: 'rgba(225, 29, 72, 0.35)',
    textColor: 'text-gray-900',
    renderIcon: () => (
      <div className="w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr from-orange-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:rotate-90 transition-transform duration-300">
        <Plus className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 stroke-[3]" />
      </div>
    )
  }
];
