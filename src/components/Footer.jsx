import React from 'react';
import brandLogo from '../assets/IBCS_BRAND_Transparent.png';
import {
  ArrowRight,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Code2,
  Shield,
  ShieldCheck,
  Cpu,
  Cloud,
  BarChart3,
  Link2,
  Building2,
  Landmark,
  Scale,
  Box,
  Globe,
  Settings,
  Layers,
  Brain,
  Headphones,
} from 'lucide-react';

/* =========================================================================
   SHIELD LOCK CUSTOM VECTOR SVG (Bottom of Col 1)
   ========================================================================= */
function ShieldLockBadge() {
  return (
    <svg className="w-6 h-7 text-[#0FA4AF] shrink-0 drop-shadow-xs" viewBox="0 0 32 36" fill="none">
      <path d="M16 2 L29 6.5 V17 C29 25 16 33 16 33 C16 33 3 25 3 17 V6.5 Z" stroke="#0FA4AF" strokeWidth="2" strokeLinejoin="round" />
      <rect x="11" y="16" width="10" height="8" rx="1.5" stroke="#0FA4AF" strokeWidth="1.6" fill="#0FA4AF" fillOpacity="0.12" />
      <path d="M13 16 V13 C13 11.3 14.3 10 16 10 C17.7 10 19 11.3 19 13 V16" stroke="#0FA4AF" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="19.5" r="1" fill="#0FA4AF" />
    </svg>
  );
}

/* =========================================================================
   BRAND LOGO BADGE (Transparent Official Logo)
   ========================================================================= */
function FooterBrandBadge() {
  return (
    <div className="relative flex items-center justify-center shrink-0 rounded-full p-1 bg-white ring-2 ring-[#0FA4AF] shadow-[0_0_15px_rgba(15,164,175,0.7)] hover:shadow-[0_0_25px_rgba(15,164,175,1)] hover:scale-105 transition-all duration-300 overflow-hidden">
      <img
        src={brandLogo}
        alt="IB Cyber Security Logo"
        className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full object-contain shrink-0"
      />
    </div>
  );
}

/* =========================================================================
   TWITTER / X CUSTOM VECTOR ICON
   ========================================================================= */
function XTwitterIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* =========================================================================
   LINKEDIN 'in' CUSTOM VECTOR ICON (Clean 'in' lettermark without outer box)
   ========================================================================= */
function LinkedInIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
    </svg>
  );
}

/* =========================================================================
   INSTAGRAM CUSTOM VECTOR ICON (Sharp lens and flash dot)
   ========================================================================= */
function InstagramIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* =========================================================================
   YOUTUBE CUSTOM VECTOR ICON (Brand rounded screen with sharp white play triangle)
   ========================================================================= */
function YouTubeIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 8.5v7l6.25-3.5-6.25-3.5z"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick Links (9 items)
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#featured-technology' },
    { label: 'Software Products', href: '#products-platforms' },
    { label: 'Our Technology', href: '#our-technology' },
    { label: 'Product Ecosystem', href: '#our-product-ecosystem' },
    { label: 'Skill Development', href: '#education-training-skill-development-technology' },
    { label: 'Careers', href: '#careers' },
    { label: 'Tender', href: '#tender' },
    { label: 'Contact Us', href: '#contact' },
  ];

  // Technology & Solutions (12 items)
  const techSolutions = [
    { label: 'Software Development', icon: Code2, href: '#products-platforms' },
    { label: 'Cybersecurity & Security', icon: Shield, href: '#cybersecurity-digital-security' },
    { label: 'Artificial Intelligence', icon: Cpu, href: '#artificial-intelligence-intelligent-software' },
    { label: 'Cloud & SaaS Platforms', icon: Cloud, href: '#cloud-saas-digital-platforms' },
    { label: 'Data & Analytics', icon: BarChart3, href: '#data-analytics-intelligence-technology' },
    { label: 'APIs & Connectivity', icon: Link2, href: '#apis-integration-digital-connectivity' },
    { label: 'Enterprise Software', icon: Building2, href: '#enterprise-business-software-products' },
    { label: 'Government Technology', icon: Landmark, href: '#government-public-technology' },
    { label: 'Investigation & Legal', icon: Scale, href: '#investigation-legal-institutional-technology' },
    { label: 'Product Commercialisation', icon: Box, href: '#software-commercialisation-section' },
    { label: 'Global Infrastructure', icon: Globe, href: '#global-infrastructure-managed-services' },
    { label: 'DevOps & Delivery', icon: Settings, href: '#devops-continuous-delivery' },
  ];

  // 4 Capability Cards
  const capabilities = [
    {
      title: 'Cybersecurity',
      subtitle: 'Secure digital infrastructure',
      icon: ShieldCheck,
      href: '#cybersecurity-digital-security',
    },
    {
      title: 'AI & Intelligence',
      subtitle: 'Intelligent technology solutions',
      icon: Brain,
      href: '#artificial-intelligence-intelligent-software',
    },
    {
      title: 'Data & Analytics',
      subtitle: 'Data-driven decision systems',
      icon: BarChart3,
      href: '#data-analytics-intelligence-technology',
    },
    {
      title: 'Software Engineering',
      subtitle: 'Scalable enterprise platforms',
      icon: Layers,
      href: '#software-architecture-product-engineering',
    },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#001C1F] via-[#00272B] to-[#001518] text-white border-t border-[#0FA4AF]/25 select-none"
    >
      {/* Background Soft Glows & Ambient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#0FA4AF_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

        {/* Ambient Teal / Cyan Radial Glows */}
        <div className="absolute -top-10 right-10 w-[500px] h-[350px] bg-[#0FA4AF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#024950]/30 rounded-full blur-[100px]" />
        
        {/* Soft Wave Curve in Brand Cyan */}
        <svg
          className="absolute -bottom-10 right-0 w-[600px] h-[220px] opacity-10 pointer-events-none text-[#0FA4AF]"
          viewBox="0 0 600 220"
          fill="currentColor"
        >
          <path d="M0,120 C180,60 380,180 600,100 L600,220 L0,220 Z" />
        </svg>
      </div>

      {/* Main Container - Extended Width to Eliminate Huge Side Gaps */}
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 pt-8 sm:pt-10 pb-4">
        
        {/* =========================================================================
           TOP 4-COLUMN CONTENT GRID (Compact & Balanced)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-start mb-6 sm:mb-7">

          {/* ================= COLUMN 1: BRAND & CONTACT CARDS (Span 3) ================= */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            {/* Logo + Company Name */}
            <a href="#home" className="inline-flex items-center gap-2.5 group focus:outline-none" aria-label="IB Cyber Security">
              <FooterBrandBadge />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[14px] sm:text-[15px] tracking-[0.03em] text-white group-hover:text-[#0FA4AF] transition-colors leading-tight">
                  IB CYBER SECURITY
                </span>
                <span className="font-bold text-[9px] tracking-[0.16em] text-[#0FA4AF] uppercase mt-0.5">
                  PRIVATE LIMITED
                </span>
              </div>
            </a>

            {/* Cyan Accent Bar Under Brand */}
            <div className="w-7 h-[2px] bg-[#0FA4AF] mt-2 mb-2.5" />

            {/* Description */}
            <p className="text-[12px] leading-relaxed text-white/70 mb-3 max-w-sm font-normal">
              An international software product and technology company creating secure, intelligent solutions for enterprises, institutions and a digital future.
            </p>

            {/* 3 Contact Info Cards (Compact) */}
            <div className="w-full space-y-1.5 mb-3">
              {/* Card 1: Office */}
              <div className="group flex items-center gap-2.5 p-2 rounded-lg bg-[#002B30]/60 border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/60 hover:bg-[#00363D]/80 backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-xs">
                <div className="w-6 h-6 rounded-md bg-[#001C1F] border border-[#0FA4AF]/40 flex items-center justify-center text-[#0FA4AF] shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-bold text-[#0FA4AF] leading-tight">
                    Corporate office address
                  </span>
                  <span className="text-[10px] text-white/60 font-medium leading-tight">
                    To be provided
                  </span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#0FA4AF]/60 group-hover:text-[#0FA4AF] group-hover:translate-x-0.5 transition-all ml-auto shrink-0" />
              </div>

              {/* Card 2: Email */}
              <div className="group flex items-center gap-2.5 p-2 rounded-lg bg-[#002B30]/60 border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/60 hover:bg-[#00363D]/80 backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-xs">
                <div className="w-6 h-6 rounded-md bg-[#001C1F] border border-[#0FA4AF]/40 flex items-center justify-center text-[#0FA4AF] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-bold text-[#0FA4AF] leading-tight">
                    Corporate email
                  </span>
                  <span className="text-[10px] text-white/60 font-medium leading-tight">
                    To be provided
                  </span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#0FA4AF]/60 group-hover:text-[#0FA4AF] group-hover:translate-x-0.5 transition-all ml-auto shrink-0" />
              </div>

              {/* Card 3: Phone */}
              <div className="group flex items-center gap-2.5 p-2 rounded-lg bg-[#002B30]/60 border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/60 hover:bg-[#00363D]/80 backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-xs">
                <div className="w-6 h-6 rounded-md bg-[#001C1F] border border-[#0FA4AF]/40 flex items-center justify-center text-[#0FA4AF] shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-bold text-[#0FA4AF] leading-tight">
                    Corporate phone
                  </span>
                  <span className="text-[10px] text-white/60 font-medium leading-tight">
                    To be provided
                  </span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#0FA4AF]/60 group-hover:text-[#0FA4AF] group-hover:translate-x-0.5 transition-all ml-auto shrink-0" />
              </div>
            </div>

            {/* Bottom Slogan Badge with Glowing Lock Shield */}
            <div className="flex items-center gap-2.5 pt-1">
              <ShieldLockBadge />
              <div className="flex flex-col text-[9.5px] sm:text-[10px] font-extrabold tracking-[0.14em] text-white/80 leading-tight">
                <span>INTELLIGENT SOFTWARE.</span>
                <span>SECURE DIGITAL FUTURES.</span>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: QUICK LINKS (Span 2) ================= */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h3 className="font-display font-extrabold text-[12.5px] sm:text-[13px] uppercase tracking-[0.12em] text-white">
              QUICK LINKS
            </h3>
            <div className="w-7 h-[2px] bg-[#0FA4AF] mt-1.5 mb-2.5" />

            <ul className="w-full space-y-1">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center justify-between py-0.5 text-[12px] text-white/75 hover:text-[#0FA4AF] transition-colors focus:outline-none"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#0FA4AF]/60 group-hover:text-[#0FA4AF] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: TECHNOLOGY & SOLUTIONS (Span 3) ================= */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h3 className="font-display font-extrabold text-[12.5px] sm:text-[13px] uppercase tracking-[0.12em] text-white">
              TECHNOLOGY &amp; SOLUTIONS
            </h3>
            <div className="w-7 h-[2px] bg-[#0FA4AF] mt-1.5 mb-2.5" />

            <ul className="w-full space-y-1">
              {techSolutions.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-center py-0.5 text-[12px] text-white/75 hover:text-[#0FA4AF] transition-colors focus:outline-none"
                    >
                      <ItemIcon className="w-3.5 h-3.5 text-[#0FA4AF] shrink-0 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="truncate group-hover:text-[#0FA4AF] transition-colors font-medium">
                        {item.label}
                      </span>
                      <ArrowRight className="w-3 h-3 text-[#0FA4AF]/60 group-hover:text-[#0FA4AF] group-hover:translate-x-0.5 transition-all ml-auto shrink-0" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= COLUMN 4: OUR CAPABILITIES PANEL (Span 4) ================= */}
          <div className="lg:col-span-4">
            <div className="bg-[#002428]/80 backdrop-blur-md border border-[#0FA4AF]/25 rounded-xl p-3.5 sm:p-4 shadow-sm flex flex-col">
              
              {/* Header */}
              <div className="text-left mb-2.5">
                <h3 className="font-display font-extrabold text-[12.5px] sm:text-[13px] uppercase tracking-[0.12em] text-white">
                  OUR CAPABILITIES
                </h3>
                <div className="w-7 h-[2px] bg-[#0FA4AF] mt-1.5" />
              </div>

              {/* 2x2 Grid of Capability Cards (Compact) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {capabilities.map((cap) => {
                  const CapIcon = cap.icon;
                  return (
                    <a
                      key={cap.title}
                      href={cap.href}
                      className="group p-2 rounded-lg bg-[#001C1F]/80 border border-[#0FA4AF]/20 hover:border-[#0FA4AF]/60 hover:bg-[#002A30]/90 transition-all duration-200 flex flex-col justify-between text-left focus:outline-none shadow-xs"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#00272B] border border-[#0FA4AF]/30 text-[#0FA4AF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <CapIcon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[11.5px] font-bold text-white group-hover:text-[#0FA4AF] transition-colors leading-tight">
                            {cap.title}
                          </span>
                          <span className="text-[9.5px] text-white/60 font-normal leading-tight mt-0.5 line-clamp-1">
                            {cap.subtitle}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end w-full mt-1">
                        <ArrowRight className="w-2.5 h-2.5 text-[#0FA4AF]/60 group-hover:text-[#0FA4AF] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Ready to work together Banner */}
              <div className="pt-2.5 border-t border-[#0FA4AF]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#001C1F] border border-[#0FA4AF]/40 flex items-center justify-center text-[#0FA4AF] shrink-0">
                    <Headphones className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-extrabold text-[11.5px] leading-tight">
                      Ready to work together?
                    </span>
                    <span className="text-white/60 text-[9.5px] leading-tight mt-0.5 font-medium">
                      Have a project or technology requirement?
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#00A4B4] to-[#0FA4AF] hover:from-[#0FA4AF] hover:to-[#AFDDE5] text-[#001C1F] font-extrabold text-[11px] shadow-sm shadow-[#0FA4AF]/25 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
           BOTTOM SUB-FOOTER BAR (Balanced & Non-Wrapping)
           ========================================================================= */}
        <div className="border-t border-white/10 pt-3 flex flex-col xl:flex-row items-center justify-between gap-3 text-[11px] sm:text-[11.5px] text-white/60 font-medium">
          
          {/* Copyright */}
          <div className="whitespace-nowrap text-center xl:text-left">
            &copy; {currentYear} <span className="text-white font-semibold">IB CYBER SECURITY PRIVATE LIMITED</span>. All Rights Reserved.
          </div>

          {/* Legal / Policy Links */}
          <div className="flex items-center justify-center flex-wrap gap-2 text-center text-white/65">
            <a href="#privacy-policy" className="hover:text-[#0FA4AF] transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="#terms-conditions" className="hover:text-[#0FA4AF] transition-colors">
              Terms &amp; Conditions
            </a>
            <span className="text-white/20">|</span>
            <a href="#disclaimer" className="hover:text-[#0FA4AF] transition-colors">
              Disclaimer
            </a>
            <span className="text-white/20">|</span>
            <a href="#legal-information" className="hover:text-[#0FA4AF] transition-colors">
              Legal Information
            </a>
            <span className="text-white/20">|</span>
            <a href="#sitemap" className="hover:text-[#0FA4AF] transition-colors">
              Sitemap
            </a>
          </div>

          {/* Social Icons & Back to Top Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <span className="text-white/80 text-[11.5px] font-semibold mr-0.5">
              Follow Us
            </span>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00262B] border border-[#0FA4AF]/30 hover:border-[#0FA4AF] hover:bg-[#0FA4AF]/20 text-white hover:text-[#0FA4AF] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <LinkedInIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X / Twitter"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00262B] border border-[#0FA4AF]/30 hover:border-[#0FA4AF] hover:bg-[#0FA4AF]/20 text-white hover:text-[#0FA4AF] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <XTwitterIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00262B] border border-[#0FA4AF]/30 hover:border-[#0FA4AF] hover:bg-[#0FA4AF]/20 text-white hover:text-[#0FA4AF] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#00262B] border border-[#0FA4AF]/30 hover:border-[#0FA4AF] hover:bg-[#0FA4AF]/20 text-white hover:text-[#0FA4AF] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
            >
              <YouTubeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 ml-2 text-white/80 hover:text-[#0FA4AF] font-semibold transition-all group focus:outline-none cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00262B] border border-[#0FA4AF]/40 text-[#0FA4AF] flex items-center justify-center group-hover:bg-[#0FA4AF] group-hover:text-[#001C1F] group-hover:scale-105 transition-all shadow-xs">
                <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[11.5px] whitespace-nowrap">
                Back to Top
              </span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
