"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has scrolled past a small threshold.
 *
 * The threshold (not 0) exists to avoid flicker: at exactly 0px,
 * momentum scrolling on trackpads/mobile can bounce a pixel or two
 * above and below the top, which would otherwise cause the navbar
 * background to rapidly toggle on and off. 8px of tolerance absorbs
 * that without being large enough to feel like a delayed transition.
 *
 * Uses a passive scroll listener — appropriate here since we're only
 * reading scrollY, never calling preventDefault, so passive mode
 * lets the browser optimize scroll performance instead of waiting
 * to confirm the handler won't block it.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
