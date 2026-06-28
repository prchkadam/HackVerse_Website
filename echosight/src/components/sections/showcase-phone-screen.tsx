"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ECHOSIGHT_MODES, type EchoSightMode } from "@/lib/use-mode-selection";
import { cn } from "@/lib/cn";

interface ShowcasePhoneScreenProps {
  activeMode: EchoSightMode;
  prefersReducedMotion: boolean;
}

/**
 * What's shown inside the phone mockup for the Interactive App
 * Showcase.
 *
 * Fade only, per your instruction — no slide, no scale, no
 * spring bounce. AnimatePresence + a plain opacity transition is
 * the correct tool for exactly that: it properly sequences the
 * outgoing screen's exit and the incoming screen's enter so they
 * cross-fade instead of either popping or briefly overlapping
 * unstyled. This replaces an earlier CSS-keyframe version of this
 * same idea — now that Framer Motion is a real, used dependency,
 * there's no reason to keep two different fade implementations
 * side by side on the same site.
 *
 * Title and description are real content tied to whichever mode is
 * currently selected, not a "screenshot" image swap — consistent
 * with how every other phone-screen content on this site has been
 * built as functioning UI, not a placeholder picture.
 */
export function ShowcasePhoneScreen({
  activeMode,
  prefersReducedMotion,
}: ShowcasePhoneScreenProps) {
  return (
    <div className="flex h-full flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-ink-400">
          EchoSight
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-signal-400">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-signal-400"
          />
          Active
        </span>
      </div>

      <div className="relative flex-1 py-6" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeMode.id}
            initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeInOut" }}
          >
            <p className="text-sm font-medium uppercase tracking-wide text-signal-400">
              {activeMode.label}
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink-100">
              {activeMode.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="flex items-center justify-center gap-2"
        aria-hidden="true"
      >
        {ECHOSIGHT_MODES.map((mode) => (
          <span
            key={mode.id}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              mode.id === activeMode.id
                ? "w-6 bg-signal-500"
                : "w-1.5 bg-ink-700",
            )}
          />
        ))}
      </div>
    </div>
  );
}
