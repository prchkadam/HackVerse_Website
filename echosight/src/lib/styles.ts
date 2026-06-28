/**
 * Shared visual identity for the primary CTA action ("Get Started"),
 * which appears in four places: hero, navbar, mobile menu, and the
 * final CTA section. A full-site audit found all four had hand-
 * rolled the same core styling independently — same teal fill, same
 * hover state, same text color — with no shared definition, which
 * meant a future tweak to one was guaranteed to silently miss the
 * other three. This constant is the fix: each call site still owns
 * its own sizing (height, padding, full-width vs. inline) since
 * those legitimately differ by context, but the identity itself —
 * what makes it *look* like the one primary action on the site —
 * now has exactly one source of truth.
 */
export const primaryCtaStyles =
  "rounded-md bg-signal-600 font-medium text-ink-950 transition-colors hover:bg-signal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";
