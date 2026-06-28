"use client";

import { useState } from "react";

export interface EchoSightMode {
  id: string;
  label: string;
  description: string;
}

export const ECHOSIGHT_MODES: EchoSightMode[] = [
  {
    id: "navigation",
    label: "Navigate",
    description: "Describes the path ahead — curbs, doors, stairs, people.",
  },
  {
    id: "read-text",
    label: "Read",
    description: "Reads signs, labels, mail, and menus out loud.",
  },
  {
    id: "currency",
    label: "Currency",
    description: "Identifies bills and coins by denomination.",
  },
  {
    id: "sos",
    label: "SOS",
    description: "One tap shares your location with a trusted contact.",
  },
];

/**
 * Click-driven mode selection for the interactive showcase.
 *
 * This replaces what was previously an auto-advancing timer shared
 * between the Solution section's phone screen and its label list —
 * removed at your explicit request to merge the auto-cycling demo
 * and the click-driven showcase into one interactive section rather
 * than maintaining two near-identical phone demos on the same page.
 *
 * Accessibility Settings has been dropped from this set, matching
 * your instruction that the showcase exposes exactly four buttons
 * (Navigation, Read Text, Currency, SOS) — not silently padded back
 * to five. Accessibility is still covered in full in the Features
 * section; it simply isn't one of this component's interactive modes.
 */
export function useModeSelection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return {
    activeIndex,
    setActiveIndex,
    modes: ECHOSIGHT_MODES,
  };
}

