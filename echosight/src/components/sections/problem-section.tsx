import { Container } from "@/components/ui/container";

/**
 * Problem section.
 *
 * The story is grounded in real sources, not imagined from scratch:
 * researched accounts of daily life with vision impairment converge
 * on a specific theme — the friction is usually mundane
 * (identifying things, reading things, knowing what's nearby), and
 * the deeper cost is independence being quietly taken away, often by
 * people rushing in to help rather than by the world's intentional
 * design. That's why this is written as one ordinary moment, not a
 * dramatic or dangerous one, and why it's second person — asking the
 * reader to feel the friction for a few seconds, not observe someone
 * else's hardship from a safe distance. Anything more dramatic risks
 * pity rather than understanding, which is the wrong feeling to
 * leave someone with right before introducing the product.
 *
 * The statistic appears only after the story, never before it — a
 * number read first invites a reader to process this abstractly,
 * as a market size. Read after a concrete scene, it lands as "this
 * happens to 2.2 billion people," which is the intended weight.
 *
 * No feature cards, no icon grid, per your instruction — this
 * section is built to be read, not scanned. Generous line length
 * within max-w-prose, quiet typography, and real whitespace are
 * doing the work that a card layout would otherwise do elsewhere.
 */
export function ProblemSection() {
  return (
    <section
      id="why"
      aria-labelledby="problem-heading"
      className="py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-prose">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            Why we built this
          </p>

          <h2
            id="problem-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            You reach for the can on the shelf. It could be soup. It
            could be cat food. You can&apos;t tell, and the person
            who could is three aisles away.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-400 [html:not(.dark)_&]:text-paper-400">
            <p>
              This is the part of vision loss that rarely makes it
              into a headline. Not a single dramatic moment, but a
              hundred small ones, spread across an ordinary day. A
              menu with no braille. A pill bottle that looks
              identical to the one beside it. A doorway that might be
              open, or might not.
            </p>
            <p>
              Each one is minor on its own. Together, they add up to
              something larger: having to ask, again, for something a
              sighted person would never think twice about. And the
              help that arrives is often well-meant but unasked
              for &mdash; someone reaching for the can before you&apos;ve
              finished reaching for it yourself. The task gets done.
              The independence doesn&apos;t.
            </p>
            <p>
              It&apos;s not a small group of people living this. It&apos;s
              most of the world&apos;s population, at some scale, at
              some point.
            </p>
          </div>

          {/*
            The statistic, set apart visually as its own moment —
            larger type, more whitespace around it — so it reads as
            a beat in the page, not another sentence in a paragraph.
          */}
          <div className="mt-14 border-l-2 border-signal-600 pl-6 md:mt-16">
            <p className="text-4xl font-semibold tracking-tight text-ink-100 md:text-5xl [html:not(.dark)_&]:text-paper-900">
              2.2 billion+
            </p>
            <p className="mt-2 text-base text-ink-400 [html:not(.dark)_&]:text-paper-400">
              people experience vision impairment worldwide, according
              to the World Health Organization.
            </p>
          </div>

          <p className="mt-14 text-2xl font-medium leading-snug tracking-tight text-ink-100 md:mt-16 md:text-3xl [html:not(.dark)_&]:text-paper-900">
            Technology should empower independence&mdash;not create
            barriers.
          </p>
        </div>
      </Container>
    </section>
  );
}
