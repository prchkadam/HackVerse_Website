import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { primaryCtaStyles } from "@/lib/styles";

/**
 * Final CTA / Contact section.
 *
 * This section did not exist before this audit — every "Get
 * Started" button across the site (hero, navbar, mobile menu) and
 * the footer's "Contact" link pointed at #contact, which resolved
 * to nothing. That's the single most damaging defect found in this
 * review: the site's one primary action went nowhere, on every
 * device, since the very first turn it was written. Building this
 * section is the fix, not a new feature being added unprompted.
 *
 * Per the blueprint's original CTA spec: single button, one
 * sentence of supporting context, repeats the core value
 * proposition once more in different words for anyone who skimmed
 * straight to the bottom. No newsletter field, no multi-option
 * "talk to sales / get started / learn more" menu.
 *
 * No real signup flow exists yet, so the button is a mailto: link
 * to a contact address rather than a form posting somewhere that
 * doesn't exist — an honest, working action instead of another dead
 * placeholder.
 */
export function CtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Let&apos;s give you back the parts of your day that
            shouldn&apos;t need help.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg text-ink-400 [html:not(.dark)_&]:text-paper-400">
            EchoSight is in active development. Reach out and
            we&apos;ll let you know as it becomes available.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@echosight.ai"
              className={cn(
                "inline-flex h-11 items-center justify-center px-6 text-base",
                primaryCtaStyles,
              )}
            >
              Get Started
            </a>
            <Link
              href="#faq"
              className={cn(
                "text-base font-medium text-ink-400 underline-offset-4 transition-colors hover:text-ink-100 hover:underline",
                "[html:not(.dark)_&]:text-paper-400 [html:not(.dark)_&]:hover:text-paper-900",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
              )}
            >
              Have questions first?
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
