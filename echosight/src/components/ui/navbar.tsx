"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { cn } from "@/lib/cn";
import { primaryCtaStyles } from "@/lib/styles";
import { useActiveSection } from "@/lib/use-active-section";
import { useScrolled } from "@/lib/use-scrolled";

export interface NavLink {
  label: string;
  href: `#${string}`;
}

/**
 * Primary navigation, shared by desktop and mobile.
 *
 * Maps to the site's real sections. "How it works" points to
 * #showcase — the interactive demo section — which is the actual id
 * on the page; it previously pointed to #how-it-works, an id that
 * never existed anywhere, found and fixed during a full-site audit.
 *
 * FAQ is now included, since a real FAQ section exists on the page;
 * an earlier version of this comment claimed "no FAQ — neither
 * exists on this site," which became false the moment the FAQ
 * section was built and was never updated to match — also caught in
 * that audit. GitHub remains the one external link, visually and
 * semantically marked as such.
 */
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Why", href: "#why" },
  { label: "How it works", href: "#showcase" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const GITHUB_URL = "https://github.com/echosight";

export function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(
    NAV_LINKS.map((link) => link.href.replace("#", "")),
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? cn(
              "border-b border-ink-800 bg-ink-950/80 backdrop-blur-md",
              "[html:not(.dark)_&]:border-paper-200 [html:not(.dark)_&]:bg-paper-50/80",
            )
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link
          href="#home"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative inline-flex items-center rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
                      isActive
                        ? "text-ink-100 [html:not(.dark)_&]:text-paper-900"
                        : cn(
                            "text-ink-400 hover:text-ink-100",
                            "[html:not(.dark)_&]:text-paper-400 [html:not(.dark)_&]:hover:text-paper-900",
                          ),
                    )}
                  >
                    {link.label}
                    {/*
                      The active indicator is a permanent, reserved
                      2px strip rather than a border that gets added
                      on the active state — adding a border shifts
                      layout by its own width, a classic CLS bug.
                      Reserving the space always and only coloring it
                      conditionally keeps every link's box identical.
                    */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-px transition-colors",
                        isActive ? "bg-signal-500" : "bg-transparent",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                  "text-ink-400 hover:text-ink-100",
                  "[html:not(.dark)_&]:text-paper-400 [html:not(.dark)_&]:hover:text-paper-900",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
                )}
              >
                GitHub
                <span className="sr-only">(opens in a new tab)</span>
                <svg
                  aria-hidden="true"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Link
            href="#contact"
            className={cn(
              "hidden h-10 items-center justify-center px-4 text-sm md:inline-flex",
              primaryCtaStyles,
            )}
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-100 md:hidden",
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
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        githubUrl={GITHUB_URL}
        activeId={activeId}
      />
    </header>
  );
}
