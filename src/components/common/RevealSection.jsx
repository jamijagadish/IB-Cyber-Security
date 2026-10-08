import { useEffect, useRef, useState } from 'react';

/**
 * RevealSection
 * 
 * Production-ready, performance-optimized progressive section reveal component.
 * - Uses IntersectionObserver with a generous rootMargin (200px) so sections
 *   render *before* entering viewport, preventing blank spaces during fast scrolling.
 * - Supports `priority={true}` for above-the-fold content (Navbar, Hero, First Sections)
 *   so they render immediately with zero delay and never flicker.
 * - Once revealed, permanently stays revealed (unobserves immediately).
 * - Smooth, subtle 600ms opacity & 20px upward translation curve: cubic-bezier(0.22, 1, 0.36, 1).
 * - Maintains fixed DOM flow and reserved space, ensuring zero Cumulative Layout Shift (CLS = 0).
 * - Fully respects prefers-reduced-motion.
 */
export default function RevealSection({
  children,
  priority = false,
  delay = 0,
  className = '',
  id,
  as: Component = 'div',
  ...rest
}) {
  const [isRevealed, setIsRevealed] = useState(() => {
    if (priority) return true;
    if (typeof window !== 'undefined') {
      if (!('IntersectionObserver' in window)) return true;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    }
    return false;
  });
  const elementRef = useRef(null);

  useEffect(() => {
    if (isRevealed) return;

    const node = elementRef.current;
    if (!node || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        // 200px top/bottom margin ensures content reveals BEFORE entering view
        rootMargin: '200px 0px 80px 0px',
        threshold: 0.02,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isRevealed]);

  const style = {
    transitionDuration: '650ms',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDelay: `${delay}ms`,
  };

  return (
    <Component
      ref={elementRef}
      id={id}
      style={style}
      className={`transition-[opacity,transform] will-change-[opacity,transform] ${
        isRevealed
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5'
      } ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
