import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const QUICK_LINKS = [
  { label: "Why", href: "#why" },
  { label: "How it works", href: "#showcase" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

const GITHUB_URL = "https://github.com/echosight";

/**
 * Site footer.
 *
 * This was foundation-era scaffolding ("minimal at this stage... no
 * invented links... that don't exist yet") — now that real sections
 * exist, filling it out is finishing that explicitly deferred work,
 * not rewriting something already complete.
 *
 * Quick links now match the navbar's sitemap exactly (both call the
 * showcase section "How it works," both list the same five sections,
 * footer adds Contact since it's the destination of the site's
 * primary CTA) — caught and fixed during a full-site audit that
 * found the two navigation surfaces had quietly drifted into two
 * different, half-overlapping mental models of the site's structure.
 *
 * Includes Privacy (a real page, not a dead link — see
 * src/app/privacy/page.tsx) but deliberately omits "License": the
 * FAQ honestly states open-source status is undecided, and a
 * License link with nothing behind it would directly contradict
 * that on the same page. Dropped per direction rather than linked
 * to something that doesn't exist.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-ink-800 dark:border-ink-800 [html:not(.dark)_&]:border-paper-200">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-base text-ink-400 [html:not(.dark)_&]:text-paper-400">
              Know what&apos;s in front of you. The instant you need
              to.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-ink-100 [html:not(.dark)_&]:text-paper-400 [html:not(.dark)_&]:hover:text-paper-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center sm:justify-between [html:not(.dark)_&]:border-paper-200">
          <p className="text-sm text-ink-400 [html:not(.dark)_&]:text-paper-400">
            &copy; {new Date().getFullYear()} EchoSight.
          </p>

          <ul className="flex gap-6">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-ink-400 transition-colors hover:text-ink-100 [html:not(.dark)_&]:text-paper-400 [html:not(.dark)_&]:hover:text-paper-900"
              >
                Privacy
              </Link>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-400 transition-colors hover:text-ink-100 [html:not(.dark)_&]:text-paper-400 [html:not(.dark)_&]:hover:text-paper-900"
              >
                GitHub
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
