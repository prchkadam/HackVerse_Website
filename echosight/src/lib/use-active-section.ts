"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently most visible in the viewport,
 * by id, for active-link highlighting in the navbar.
 *
 * Built on IntersectionObserver rather than a scroll listener doing
 * manual getBoundingClientRect math — IntersectionObserver is the
 * platform-correct tool for "is this element visible" and doesn't
 * force a synchronous layout read on every scroll frame the way
 * manual position math does.
 *
 * rootMargin biases the observation window toward the upper third of
 * the viewport, so a section is considered "active" once a reader
 * has scrolled to where its content fills the top of their screen —
 * matching the moment a reader would intuitively say "I'm on the
 * About section now," rather than the moment its bottom pixel
 * first appears.
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          // When multiple sections intersect the observation band at
          // once (common during fast scrolling), prefer the one
          // closest to the top of the viewport.
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveId(topmost.target.id);
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
