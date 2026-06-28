import Link from "next/link";
import { HeroDemoPreview } from "@/components/sections/hero-demo-preview";
import { PhoneMockup } from "@/components/sections/phone-mockup";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { primaryCtaStyles } from "@/lib/styles";

/**
 * Hero section.
 *
 * Headline is a plain, concrete statement of what happens for the
 * user — not a metaphor requiring decoding ("see the world
 * differently"), per the no-generic-AI-copy rule. It names the
 * actual benefit (knowing what's around you, fast) rather than the
 * mechanism (AI, computer vision), because the reader landing here
 * is evaluating a life impact, not a technology.
 *
 * Background: a single soft radial glow behind the headline,
 * inspired by the restrained gradient-as-backdrop pattern on
 * Sarvam's hero (glow sits behind content, never inside text or as
 * a page-wide wash) — the one deliberate exception to this site's
 * otherwise no-gradient rule, kept narrow on purpose.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]",
          "bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,theme(colors.signal.600/0.18),transparent)]",
          "[html:not(.dark)_&]:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,theme(colors.signal.500/0.12),transparent)]",
        )}
      />

      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="mb-5 text-sm font-medium uppercase tracking-wide text-signal-400">
            AI-powered scene description
          </p>

          <h1
            id="hero-heading"
            className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
          >
            Know what&apos;s in front of you. The instant you need to.
          </h1>

          <p className="mt-6 max-w-prose text-lg text-ink-400 [html:not(.dark)_&]:text-paper-400">
            EchoSight describes your surroundings out loud, in real
            time, the moment you point your phone at them. No
            searching for help. No waiting for someone else to look.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className={cn(
                "inline-flex h-11 items-center justify-center px-6 text-base",
                primaryCtaStyles,
              )}
            >
              Get Started
            </Link>
            <Link
              href="#showcase"
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-md border border-ink-700 px-6 text-base font-medium text-ink-100 transition-colors hover:border-signal-600 hover:text-signal-400",
                "[html:not(.dark)_&]:border-paper-200 [html:not(.dark)_&]:text-paper-900",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
              )}
            >
              See how it works
            </Link>
          </div>

          {/*
            Intentionally no credibility line here yet (e.g. "built
            with input from O&M specialists"). That's a factual claim
            about who was actually involved, and I'm not going to
            assert it without knowing it's true — fabricating it would
            be exactly the kind of generic, unearned trust signal this
            project has explicitly ruled out. It belongs here once
            it's real; the "About" section is where we'll work out
            what's true to say.
          */}
        </div>

        <div className="lg:col-span-5">
          <PhoneMockup>
            <HeroDemoPreview />
          </PhoneMockup>
        </div>
      </Container>
    </section>
  );
}
