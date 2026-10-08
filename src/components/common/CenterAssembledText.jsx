import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * CenterAssembledText
 * 
 * Dynamic center-based text assembly animation:
 * 1. Automatically computes the exact center 1–3 characters based on string length.
 * 2. Center characters start visible and anchored in their exact final position.
 * 3. Left-side characters enter individually from the FAR LEFT END OF THE SCREEN and travel to their positions.
 * 4. Right-side characters enter individually from the FAR RIGHT END OF THE SCREEN and travel to their positions.
 * 5. Staggered sequence assembles inward around the center characters.
 * 6. Completely static once assembled, with no glow, neon, gradient, scale, or bounce.
 */
export default function CenterAssembledText({
  text = 'WELCOME TO IB CYBER SECURITY PRIVATE LIMITED',
  className = '',
  staggerMs = 38,
  durationMs = 380,
}) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const [offsets, setOffsets] = useState(null);

  const chars = useMemo(() => Array.from(text || ''), [text]);
  const total = chars.length;

  // Dynamically calculate the center character indices
  const { centerSet, leftEnd, rightStart } = useMemo(() => {
    if (total === 0) return { centerSet: new Set(), leftEnd: -1, rightStart: 0 };
    if (total === 1) return { centerSet: new Set([0]), leftEnd: -1, rightStart: 1 };
    if (total === 2) return { centerSet: new Set([0, 1]), leftEnd: -1, rightStart: 2 };

    const centerIndices = new Set();
    const isEven = total % 2 === 0;

    if (isEven) {
      // Rule 9: If text has an even number of characters, use the two central characters as starting point
      const midLeft = total / 2 - 1;
      const midRight = total / 2;
      centerIndices.add(midLeft);
      centerIndices.add(midRight);
    } else {
      // Rule 10: If text has an odd number of characters, use the single central character as starting point
      const mid = Math.floor(total / 2);
      // Rule 11: If middle character is a space, anchor with adjacent characters (max 3)
      if (chars[mid] === ' ' && total >= 3) {
        centerIndices.add(mid - 1);
        centerIndices.add(mid);
        centerIndices.add(mid + 1);
      } else {
        centerIndices.add(mid);
      }
    }

    const minCenter = Math.min(...centerIndices);
    const maxCenter = Math.max(...centerIndices);

    return {
      centerSet: centerIndices,
      leftEnd: minCenter - 1,
      rightStart: maxCenter + 1,
    };
  }, [chars, total]);

  // Compute exact travel distance from the screen ends so letters enter from the viewport boundaries
  useEffect(() => {
    if (shouldReduceMotion || total === 0) return;

    const computeOffsets = () => {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const containerRect = containerRef.current?.getBoundingClientRect();

      const containerLeft = containerRect ? containerRect.left : (screenWidth / 2 - (total * 8) / 2);
      const containerWidth = containerRect ? containerRect.width : (total * 8);

      const calculated = chars.map((_, i) => {
        // Approximate horizontal position of character 'i' on screen
        const charApproxX = containerLeft + (total > 1 ? (i / (total - 1)) * containerWidth : 0);

        // Distance from left edge of screen (so character starts just outside the left screen border)
        const travelFromLeft = Math.max(charApproxX + 60, screenWidth / 2 + 80);

        // Distance from right edge of screen (so character starts just outside the right screen border)
        const travelFromRight = Math.max(screenWidth - charApproxX + 60, screenWidth / 2 + 80);

        return {
          fromLeft: -travelFromLeft,
          fromRight: travelFromRight,
        };
      });

      setOffsets(calculated);
    };

    computeOffsets();
    window.addEventListener('resize', computeOffsets);
    return () => window.removeEventListener('resize', computeOffsets);
  }, [text, total, shouldReduceMotion]);

  if (total === 0) return null;

  const staggerSec = staggerMs / 1000;
  const durationSec = durationMs / 1000;

  return (
    <span
      ref={containerRef}
      key={text}
      className={`inline-flex items-center justify-center whitespace-nowrap py-0.5 ${className}`}
    >
      {chars.map((char, index) => {
        const isCenter = centerSet.has(index);
        const isLeft = index <= leftEnd;

        // Render space properly so width is never collapsed
        const displayChar = char === ' ' ? '\u00A0' : char;

        // Center characters: already positioned in their final location from start
        if (isCenter || shouldReduceMotion) {
          return (
            <span
              key={`${index}-${char}`}
              className="inline-block whitespace-pre"
            >
              {displayChar}
            </span>
          );
        }

        // Before offsets are measured, keep non-center characters hidden
        if (!offsets) {
          return (
            <span
              key={`${index}-${char}`}
              className="inline-block whitespace-pre opacity-0"
            >
              {displayChar}
            </span>
          );
        }

        // Left-side characters enter sequentially from the left end of the screen (index 0 first)
        const leftStep = index;

        // Right-side characters enter sequentially from the right end of the screen (last index first)
        const rightStep = total - 1 - index;

        const delay = (isLeft ? leftStep : rightStep) * staggerSec;
        const initialX = isLeft ? offsets[index].fromLeft : offsets[index].fromRight;

        return (
          <motion.span
            key={`${index}-${char}`}
            initial={{ opacity: 0, x: initialX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              x: {
                duration: durationSec,
                delay: delay,
                ease: [0.16, 1, 0.3, 1], // smooth ease-out
              },
              opacity: {
                duration: 0.12, // quickly become visible as soon as it enters the screen
                delay: delay,
                ease: 'easeOut',
              },
            }}
            className="inline-block whitespace-pre will-change-transform"
          >
            {displayChar}
          </motion.span>
        );
      })}
    </span>
  );
}
