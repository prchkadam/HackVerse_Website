"use client";

import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/cn";

/**
 * The theme toggle is a real, labeled control — not an icon-only
 * button relying on a tooltip. Icon-only toggles are a common
 * accessibility failure: a screen reader user gets no indication
 * of which state they're switching *to* unless the accessible name
 * updates with the current state, which is what aria-label does here.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md",
        "border border-ink-800 bg-ink-900 text-ink-100",
        "dark:border-ink-800 dark:bg-ink-900 dark:text-ink-100",
        "[html:not(.dark)_&]:border-paper-200 [html:not(.dark)_&]:bg-paper-100 [html:not(.dark)_&]:text-paper-900",
        "transition-colors hover:border-signal-600",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
        className,
      )}
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
