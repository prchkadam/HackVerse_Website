"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the user's `prefers-reduced-motion` OS setting, live.
 *
 * Why this exists as a hook rather than a CSS-only solution: pure
 * CSS media queries can disable transitions/animations, but they
 * can't stop a component from deciding *not* to run a JS-driven
 * scroll-triggered reveal or an autoplaying carousel in the first
 * place. Motion sensitivity (often vestibular) co-occurs with visual
 * impairment more than general audiences assume, so for this site
 * specifically, this isn't a progressive-enhancement nicety — it's
 * a constraint every section's motion design has to be checked against.
 *
 * Listens for live changes (not just read-once) because a user may
 * toggle the OS setting while the tab is open and should not have to
 * reload to get a calmer experience.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(query.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return prefersReduced;
}
