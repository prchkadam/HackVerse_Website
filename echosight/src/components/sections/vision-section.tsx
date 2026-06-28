"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { VISION_MILESTONES } from "@/lib/vision-milestones";

/**
 * Vision section — an aspirational roadmap, not a commitment.
 *
 * Explicitly framed this way per direction: the heading and intro
 * copy say "where we want to go," and the milestone copy itself
 * (see vision-milestones.ts) uses aspirational language throughout
 * rather than promising specific delivery. This matters because a
 * roadmap is a much heavier, more falsifiable claim than anything
 * else on the site — if framed as a guarantee, it actively damages
 * trust the moment plans change, which is the opposite of this
 * project's whole premise.
 *
 * "Today" is the one item written as present-tense fact rather than
 * aspiration, and it's deliberately consistent with the FAQ's honest
 * answer that EchoSight currently needs a connection — these two
 * pieces of copy were written to agree with each other, not by
 * coincidence.
 *
 * Animation: each milestone fades and shifts up slightly as it
 * enters the viewport, staggered by a small delay — one minimal,
 * one-time entrance per item, not a repeating or attention-grabbing
 * effect. Skipped entirely under reduced motion, where every
 * milestone is simply visible immediately.
 */
export function VisionSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            Where we want to go
          </p>
          <h2
            id="vision-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            This is a beginning, not a finished product.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg text-ink-400 [html:not(.dark)_&]:text-paper-400">
            None of this is promised on a deadline. It&apos;s the
            direction we&apos;re working toward.
          </p>
        </div>

        <ol className="relative mx-auto mt-20 max-w-2xl">
          {/* Connecting line, behind the milestone markers */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-2rem)] w-px bg-ink-800 [html:not(.dark)_&]:bg-paper-200"
          />

          {VISION_MILESTONES.map((milestone, index) => (
            <motion.li
              key={milestone.id}
              className="relative flex gap-6 pb-12 last:pb-0"
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span
                aria-hidden="true"
                className={`relative z-10 mt-1.5 h-3.5 w-3.5 flex-shrink-0 rounded-full ${
                  index === 0
                    ? "bg-signal-500"
                    : "bg-ink-700 [html:not(.dark)_&]:bg-paper-200"
                }`}
              />
              <div>
                <p
                  className={`text-base font-semibold ${
                    index === 0
                      ? "text-signal-400"
                      : "text-ink-100 [html:not(.dark)_&]:text-paper-900"
                  }`}
                >
                  {milestone.label}
                </p>
                <p className="mt-2 max-w-prose text-base leading-relaxed text-ink-400 [html:not(.dark)_&]:text-paper-400">
                  {milestone.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
