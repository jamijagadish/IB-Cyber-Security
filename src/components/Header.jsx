/**
 * @file Header.jsx
 * @description Header navigation component matching screenshot design.
 * Features Search (🔍) and Notification Bell (🔔) icons with red badge counter (0),
 * inline close button toggle (X), and floating "Type to search..." popup with blue button.
 */

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Bell, CheckCheck, FileText, HelpCircle, Image, Menu, PhoneCall, PlayCircle, Search, UserPlus, X } from 'lucide-react';
import { navigationItems, sectionsData } from '../data/HomePageData/Home';
import LogoMark from './LogoMark';
import CenterAssembledText from './CenterAssembledText';

// Initial sample notification list
const initialNotifications = [
  { id: 1, title: 'MCA Registration Verified', detail: 'Registration No. 1010 official verification complete.', time: '10m ago', unread: false },
  { id: 2, title: 'New Product Suite Live', detail: '240 Enterprise AI & Cyber Security platforms released.', time: '1h ago', unread: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [showTopMeta, setShowTopMeta] = useState(true);
  const lastScrollY = useRef(0);
  const searchInputRef = useRef(null);
  const metaTimerRef = useRef(null);
  const wasAtTopRef = useRef(true);
  const isTransitioningRef = useRef(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  // Flatten all cards with parent section metadata for search
  const allSearchableItems = sectionsData.flatMap((section) => {
    if (!section) return [];
    const cards = Array.isArray(section.cards)
      ? section.cards
      : Array.isArray(section)
        ? section
        : [];
    return cards.map((card) => ({
      ...card,
      sectionTitle: section.eyebrow || card.title || '',
      sectionSlug: section.slug || '',
    }));
  });

  // Filter search results dynamically
  const filteredResults = searchQuery.trim()
    ? allSearchableItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6)
    : [];

  // Focus search input when search popover opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
    }
  }, [isSearchOpen]);

  // Prevent body overflow when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Handle window scroll behavior for header top banner & metadata
  useEffect(() => {
    setShowTopMeta(true);
    setShowTopBanner(true);
    wasAtTopRef.current = true;

    if (metaTimerRef.current) clearTimeout(metaTimerRef.current);
    metaTimerRef.current = setTimeout(() => {
      setShowTopMeta(false);
    }, 7000);

    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const isScrollDown = currentScrollY > lastScrollY.current + 4;
      const isScrollUp = currentScrollY < lastScrollY.current - 4;

      // 1. Page at top (<= 10px)
      if (currentScrollY <= 10) {
        setShowTopBanner(true);
        if (!wasAtTopRef.current) {
          wasAtTopRef.current = true;
          setShowTopMeta(true);
          if (metaTimerRef.current) clearTimeout(metaTimerRef.current);
          metaTimerRef.current = setTimeout(() => {
            setShowTopMeta(false);
          }, 7000);
        }
      } else {
        // 2. Page scrolled down from top
        if (wasAtTopRef.current) {
          wasAtTopRef.current = false;
          setShowTopMeta(false);
          if (metaTimerRef.current) clearTimeout(metaTimerRef.current);
        }

        if (isScrollDown) {
          setShowTopBanner(false);
        } else if (isScrollUp) {
          setShowTopBanner(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (metaTimerRef.current) clearTimeout(metaTimerRef.current);
    };
  }, []);

  // Handle Mark All Notifications Read
  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  return (
    <header id="home" className="sticky inset-x-0 top-0 z-[9999] scroll-mt-0 bg-[#001C1F] shadow-lg w-full max-w-full overflow-x-clip">
      {/* Company Header Announcement Bar (GPU-accelerated CSS Grid transitions - Zero scrollbars, zero lag) */}
      <div
        className={`grid transition-[grid-template-rows,opacity,padding] duration-350 ease-in-out overflow-hidden bg-[#001C1F] text-center px-2 sm:px-4 ${(showTopBanner || showTopMeta)
            ? 'grid-rows-[1fr] opacity-100 py-1.5 border-b border-[#0FA4AF]/15'
            : 'grid-rows-[0fr] opacity-0 py-0 border-b-0 pointer-events-none'
          }`}
      >
        <div className="overflow-hidden min-h-0 w-full">
          <div className="w-full max-w-[1480px] mx-auto px-2 sm:px-4 flex flex-col items-center justify-center text-center">

            {/* Welcome Heading (Shows at top, auto-hides after 7 seconds) */}
            <div
              className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out w-full overflow-hidden ${showTopMeta ? 'grid-rows-[1fr] opacity-100 mb-1' : 'grid-rows-[0fr] opacity-0 mb-0 pointer-events-none'
                }`}
            >
              <div className="overflow-hidden min-h-0 w-full py-0.5">
                <h1 className="font-display text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-extrabold tracking-tight sm:tracking-wider text-white uppercase flex items-center justify-center gap-1.5 sm:gap-2 px-1">
                  <span className="navbar-live-dot shrink-0 my-auto" aria-hidden="true" />
                  <CenterAssembledText key={showTopMeta ? 'welcome-active' : 'welcome-inactive'} text="WELCOME TO IB CYBER SECURITY PRIVATE LIMITED" />
                </h1>
              </div>
            </div>

            {/* Description (Shows on scroll up & top, hides on scroll down) */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out w-full overflow-hidden ${showTopBanner ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                }`}
            >
              <div className="overflow-hidden min-h-0 w-full py-0.5">
                <p className="w-full max-w-full text-center whitespace-normal sm:whitespace-nowrap text-[9.5px] sm:text-[11px] md:text-[12.5px] font-medium leading-tight sm:leading-snug tracking-normal sm:tracking-tight text-[#0FA4AF]">
                  One of the best international software product-based companies, focused on creating innovative and intelligent technology solutions. Creating intelligent software products and technologies for a digital future.
                </p>
              </div>
            </div>

            {/* Registration & Establishment Meta (Shows at top, auto-hides after 7 seconds) */}
            <div
              className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out w-full overflow-hidden ${showTopMeta ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                }`}
            >
              <div className="overflow-hidden min-h-0 w-full py-0.5">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-[9px] sm:text-[10.5px] font-mono text-white/70">
                  <span>ESTABLISHED • SEPT. 26-26</span>
                  <span className="text-[#0FA4AF] hidden sm:inline">•</span>
                  <span>MCA REGISTRATION NO. 1010</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sticky Navigation Menu Bar (Underneath Announcement Banner) */}
      <div className="border-b border-white/10 bg-brand-navy/95 shadow-[0_8px_30px_-24px_rgba(0,49,53,.55)] backdrop-blur-xl w-full max-w-full overflow-hidden">
        {/* Main Navigation Menu Bar (UNDERNEATH Heading & Description) */}
        <div className="w-full max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-6 flex h-14 sm:h-16 items-center justify-between gap-1.5 sm:gap-2">
          {/* Logo & Brand Name */}
          <a href="#home" className="group flex min-w-0 items-center gap-1.5 sm:gap-2 focus-ring shrink-0" aria-label="IB Cyber Security home">
            <LogoMark className="h-7 w-7 sm:h-9 sm:w-9 shrink-0 drop-shadow-sm" />
            <span className="flex flex-col font-display leading-[1.1] min-w-0">
              <span className="text-[11px] xs:text-[12px] sm:text-[13.5px] lg:text-[14px] font-extrabold tracking-[0.03em] text-white whitespace-nowrap">
                IB CYBER SECURITY
              </span>
              <span className="text-[8px] xs:text-[8.5px] sm:text-[9.5px] lg:text-[10px] font-bold tracking-[0.06em] text-white/80 whitespace-nowrap">
                PRIVATE LIMITED
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-1.5 xl:gap-2.5 2xl:gap-4 px-1 sm:px-2 mx-auto min-w-0" aria-label="Primary navigation">
            {navigationItems.map((item) => {
              const parts = item.label.split(' ');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-1.5 xl:px-2 py-1 text-[11.5px] xl:text-[12px] 2xl:text-[13px] font-bold text-white/95 transition-colors hover:bg-white/10 hover:text-brand-cyan focus-ring text-center whitespace-nowrap shrink-0 flex items-center justify-center"
                >
                  {parts.length > 1 ? (
                    <span className="flex flex-col items-center leading-[1.18] text-center">
                      <span>{parts[0]}</span>
                      <span>{parts.slice(1).join(' ')}</span>
                    </span>
                  ) : (
                    <span className="leading-tight">{item.label}</span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side Action Area: Search, Help, Follow, Gallery, Tender, Contact Us */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* 1. Search Icon & Floating Popover */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen((prev) => !prev);
                  setIsNotificationOpen(false);
                }}
                className="relative grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-brand-cyan rounded-lg focus:outline-none shrink-0"
                aria-label={isSearchOpen ? 'Close search' : 'Open search'}
                title="Search"
              >
                {isSearchOpen ? <X className="h-4 w-4 text-white" /> : <Search className="h-4 w-4" />}
              </button>

              {/* Floating Search Popup Box */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2.5 w-[210px] xs:w-[230px] sm:w-80 md:w-96 rounded-xl sm:rounded-2xl border border-[#0FA4AF]/40 bg-[#002629] p-1.5 sm:p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-2xl z-50 before:absolute before:-top-2 before:right-2.5 before:h-0 before:w-0 before:border-b-8 before:border-b-[#002629] before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent">
                  {/* Search Input Bar with Cyber Cyan Submit Button */}
                  <form onSubmit={(e) => e.preventDefault()} className="flex items-center overflow-hidden rounded-lg sm:rounded-xl border border-[#0FA4AF]/25 bg-[#001719]">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Type to search..."
                      className="w-full bg-transparent px-2.5 py-1 text-[11px] sm:text-sm text-white placeholder-[#0FA4AF]/60 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="grid h-7 w-7.5 sm:h-9 sm:w-11 shrink-0 place-items-center bg-[#0FA4AF] text-[#002629] font-bold transition-colors hover:bg-[#12BCC8] focus:outline-none"
                      aria-label="Submit search"
                    >
                      <Search className="h-3 w-3 sm:h-4 sm:w-4 stroke-[2.5]" />
                    </button>
                  </form>

                  {/* Dynamic Search Results Dropdown List */}
                  {searchQuery.trim() && (
                    <div className="mt-2.5 max-h-72 overflow-y-auto space-y-1.5 border-t border-[#0FA4AF]/20 pt-2">
                      {filteredResults.length > 0 ? (
                        filteredResults.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.sectionSlug}`}
                            onClick={() => setIsSearchOpen(false)}
                            className="group flex flex-col rounded-xl border border-[#0FA4AF]/15 bg-white/[0.03] p-2 sm:p-2.5 transition-colors hover:border-[#0FA4AF]/50 hover:bg-[#0FA4AF]/10"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-display text-xs font-bold text-white group-hover:text-[#0FA4AF]">{item.title}</span>
                              <span className="text-[9px] font-bold uppercase tracking-wider text-[#0FA4AF]/80">{item.sectionTitle}</span>
                            </div>
                            <p className="mt-0.5 line-clamp-1 text-[11px] text-[#0FA4AF]/75">{item.description}</p>
                          </a>
                        ))
                      ) : (
                        <div className="py-6 text-center text-xs text-[#0FA4AF]/70">
                          No results for &quot;{searchQuery}&quot;
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 2. Help Icon */}
            <a
              href="#help"
              className="hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-brand-cyan rounded-lg focus:outline-none shrink-0"
              title="Help"
              aria-label="Help"
            >
              <HelpCircle className="h-4 w-4" />
            </a>

            {/* 3. Follow Icon */}
            <a
              href="#follow"
              className="hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-brand-cyan rounded-lg focus:outline-none shrink-0"
              title="Follow"
              aria-label="Follow"
            >
              <UserPlus className="h-4 w-4" />
            </a>

            {/* 4. Gallery Icon */}
            <a
              href="#gallery"
              className="hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-brand-cyan rounded-lg focus:outline-none shrink-0"
              title="Gallery"
              aria-label="Gallery"
            >
              <Image className="h-4 w-4" />
            </a>

            {/* 5. Tender Icon */}
            <a
              href="#tender"
              className="hidden lg:grid h-7 w-7 sm:h-8 sm:w-8 place-items-center text-white/90 transition-colors hover:bg-white/10 hover:text-brand-cyan rounded-lg focus:outline-none shrink-0"
              title="Tender"
              aria-label="Tender"
            >
              <FileText className="h-4 w-4" />
            </a>

            {/* 6. Contact Us CTA Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 rounded-md bg-brand-rust px-2.5 sm:px-3 py-1 text-[11px] sm:text-[11.5px] font-bold text-white transition-all hover:bg-[#a9543e] shrink-0 shadow-xs whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Navigation Menu Toggle */}
            <button
              type="button"
              className="grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/15 focus-ring xl:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Modal */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="absolute inset-x-0 top-full h-[calc(100vh-88px)] overflow-y-auto border-t border-brand-cyan/20 bg-[#0B1528] opacity-100 px-5 py-6 shadow-2xl sm:h-[calc(100vh-96px)] xl:hidden z-[9999]">
            {/* Quick Action Buttons Grid on Mobile Drawer */}
            <div className="grid grid-cols-4 gap-2 pb-4 border-b border-white/10 mb-4">
              <a href="#help" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl bg-white/5 text-[11px] font-medium text-white hover:bg-white/10">
                <HelpCircle className="h-4 w-4 text-[#0FA4AF]" /> Help
              </a>
              <a href="#follow" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl bg-white/5 text-[11px] font-medium text-white hover:bg-white/10">
                <UserPlus className="h-4 w-4 text-[#0FA4AF]" /> Follow
              </a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl bg-white/5 text-[11px] font-medium text-white hover:bg-white/10">
                <Image className="h-4 w-4 text-[#0FA4AF]" /> Gallery
              </a>
              <a href="#tender" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl bg-white/5 text-[11px] font-medium text-white hover:bg-white/10">
                <FileText className="h-4 w-4 text-[#0FA4AF]" /> Tender
              </a>
            </div>

            <nav className="mx-auto flex max-w-2xl flex-col space-y-1" aria-label="Mobile navigation">
              {navigationItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 px-3 py-3 font-display text-sm font-bold text-white transition-all hover:bg-white/10 hover:text-brand-cyan rounded-xl focus-ring"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-bold text-brand-cyan/80 font-mono tracking-wider">{String(index + 1).padStart(2, '0')}</span>
                </a>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#0FA4AF]/40 bg-[#0FA4AF]/15 px-4 py-3 text-xs font-extrabold text-white shadow-md transition-all active:scale-[0.98]"
                >
                  <PhoneCall className="h-4 w-4 text-[#0FA4AF]" /> Contact Us
                </a>
                <a
                  href="#tender"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0FA4AF] to-[#0D5C63] px-4 py-3 text-xs font-extrabold text-white shadow-lg shadow-[#0FA4AF]/20 transition-all active:scale-[0.98]"
                >
                  <FileText className="h-4 w-4" /> Tender
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
