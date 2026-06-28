"use client";

import { PhoneMockup } from "@/components/sections/phone-mockup";
import { ShowcasePhoneScreen } from "@/components/sections/showcase-phone-screen";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useModeSelection } from "@/lib/use-mode-selection";

/**
 * Interactive App Showcase.
 *
 * This section used to exist as two separate things: an
 * auto-cycling "Solution" demo and a click-driven "Showcase" demo
 * with near-identical content. At your explicit instruction, they're
 * merged into one interactive section — the auto-cycle is gone,
 * replaced entirely by real buttons the visitor controls.
 *
 * Four buttons, not five — Accessibility Settings was part of the
 * original five-mode set but isn't one of the four buttons you
 * specified here (Navigation, Read Text, Currency, SOS). It isn't
 * silently re-added; it's still covered in full in the Features
 * section, just not as an interactive mode in this component.
 *
 * "Screenshot" changes as real rendered UI inside the phone, not an
 * image swap — no actual product screenshots exist yet, and an
 * image placeholder would be exactly the kind of filler this project
 * has ruled out from the start.
 */
export function ShowcaseSection() {
  const { activeIndex, setActiveIndex, modes } = useModeSelection();
  const prefersReducedMotion = useReducedMotion();
  const activeMode = modes[activeIndex] ?? modes[0]!;

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="bg-ink-900 py-24 md:py-32 [html:not(.dark)_&]:bg-paper-100"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            Introducing EchoSight
          </p>
          <h2
            id="showcase-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            One app. See what it does.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg text-ink-400 [html:not(.dark)_&]:text-paper-400">
            Choose a mode below, and watch the phone respond &mdash;
            exactly how it would in your hand.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <ModeButtonList
              modes={modes}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <PhoneMockup>
              <ShowcasePhoneScreen
                activeMode={activeMode}
                prefersReducedMotion={prefersReducedMotion}
              />
            </PhoneMockup>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface ModeButtonListProps {
  modes: ReturnType<typeof useModeSelection>["modes"];
  activeIndex: number;
  onSelect: (index: number) => void;
}

/**
 * Real, clickable buttons — not the passive, auto-highlighting list
 * this section used to render. Built as a proper tab-like control:
 * `role="tablist"`/`role="tab"` with `aria-selected` so a screen
 * reader user gets the same "here are four modes, this one is
 * currently chosen" understanding that a sighted user gets from the
 * teal highlight, rather than just hearing four buttons with no
 * indication of which is active.
 */
function ModeButtonList({ modes, activeIndex, onSelect }: ModeButtonListProps) {
  return (
    <div
      role="tablist"
      aria-label="EchoSight modes"
      aria-orientation="vertical"
      className="flex flex-col divide-y divide-ink-800 [html:not(.dark)_&]:divide-paper-200"
    >
      {modes.map((mode, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={mode.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(index)}
            className={cn(
              "flex w-full items-start gap-4 py-4 text-left transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors duration-300",
                isActive ? "bg-signal-500" : "bg-ink-700",
              )}
            />
            <span>
              <span
                className={cn(
                  "block text-base font-medium transition-colors duration-300",
                  isActive
                    ? "text-signal-400"
                    : "text-ink-100 [html:not(.dark)_&]:text-paper-900",
                )}
              >
                {mode.label}
              </span>
              <span className="mt-1 block text-sm text-ink-400 [html:not(.dark)_&]:text-paper-400">
                {mode.description}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
