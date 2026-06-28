"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/cn";
import { primaryCtaStyles } from "@/lib/styles";
import type { NavLink } from "@/components/ui/navbar";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  githubUrl: string;
  activeId: string | null;
}

/**
 * Full-screen mobile nav overlay.
 *
 * Three accessibility behaviors that are easy to skip but matter a
 * lot for a keyboard/screen-reader user, and that "premium" sites
 * routinely get wrong:
 *
 * 1. Focus moves into the menu when it opens (to the close button),
 *    and back to the trigger button when it closes — a focused
 *    element disappearing without anywhere to land strands keyboard
 *    users at the top of the document.
 * 2. Escape closes the menu, matching the platform convention for
 *    any dismissible overlay.
 * 3. Focus is trapped inside the menu while open — Tab cannot escape
 *    to header/page content sitting visually behind the overlay.
 *
 * This is a real dialog, not a styled <div>, so it carries
 * role="dialog" and aria-modal — without those, a screen reader
 * still believes the rest of the page is present and reachable.
 */
export function MobileMenu({
  open,
  onClose,
  links,
  githubUrl,
  activeId,
}: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      triggerFocusRef.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0] ?? null;
      const last = focusable[focusable.length - 1] ?? null;

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      ref={panelRef}
      className={cn(
        "fixed inset-0 z-50 bg-ink-950 [html:not(.dark)_&]:bg-paper-50",
        "transition-opacity duration-200 md:hidden",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
      // Hidden from the accessibility tree entirely when closed —
      // aria-modal alone doesn't stop a screen reader from reading
      // an invisible-but-present panel if it isn't also removed from
      // the tree via aria-hidden when inactive.
      aria-hidden={!open}
    >
      <div className="flex h-16 items-center justify-end px-6">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-100",
            "[html:not(.dark)_&]:text-paper-900",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
          )}
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <nav aria-label="Mobile" className="px-6 py-4">
        <ul className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-3 text-lg font-medium transition-colors",
                    isActive
                      ? "text-signal-400"
                      : cn(
                          "text-ink-100 hover:text-signal-400",
                          "[html:not(.dark)_&]:text-paper-900",
                        ),
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-3 text-lg font-medium transition-colors",
                "text-ink-100 hover:text-signal-400",
                "[html:not(.dark)_&]:text-paper-900",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
              )}
            >
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-ink-800 pt-6 [html:not(.dark)_&]:border-paper-200">
          <span className="text-sm text-ink-400 [html:not(.dark)_&]:text-paper-400">
            Theme
          </span>
          <ThemeToggle />
        </div>

        <Link
          href="#contact"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          className={cn(
            "mt-6 flex h-12 w-full items-center justify-center text-base",
            primaryCtaStyles,
          )}
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
}
