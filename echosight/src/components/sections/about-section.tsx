import { Container } from "@/components/ui/container";

/**
 * About section.
 *
 * Written as one continuous line of reasoning rather than five
 * separate paragraphs each assigned to a theme (accessibility, AI,
 * human-centered design, independence, inclusivity). That structure
 * — a paragraph per buzzword — is exactly the corporate pattern this
 * brief is ruling out; it reads like a checklist even when the
 * individual sentences are fine. Instead, each idea shows up as a
 * consequence of the one before it: independence is the actual
 * goal, AI is just the tool that happens to make a certain kind of
 * independence possible now, and "accessible/inclusive/human-
 * centered" aren't separate virtues being claimed, they're what it
 * looks like to take that goal seriously.
 *
 * No invented founding story, team bios, or specific credentials —
 * those would be factual claims about real people and history that
 * haven't been confirmed, the same category of thing flagged and
 * corrected earlier in this project. This stays at the level of
 * "why this exists," which can be written honestly without needing
 * facts not yet provided.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-prose">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            About EchoSight
          </p>
          <h2
            id="about-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            We didn&apos;t set out to build an AI company.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-400 [html:not(.dark)_&]:text-paper-400">
            <p>
              We set out to solve a much smaller, much more specific
              problem: a phone can already see better than most
              cameras built for sighted people. There was no good
              reason that sight couldn&apos;t be shared back, out
              loud, the instant someone needed it.
            </p>
            <p>
              AI turned out to be the part of the puzzle that made
              this possible now, instead of in another decade. But
              it&apos;s not the point of EchoSight &mdash; it&apos;s
              the part you&apos;re not supposed to notice. The point
              is simpler than the technology: someone should be able
              to read their own mail, cross their own street, and pay
              for their own coffee, without needing to borrow someone
              else&apos;s eyes to do it.
            </p>
            <p>
              That only works if it&apos;s actually built around the
              people using it, not around what looks impressive in a
              demo. So EchoSight is shaped by the parts of a day that
              are easy to overlook if you&apos;ve never had to think
              about them &mdash; and it&apos;s built to work with the
              tools people already rely on, not to replace them with
              something unfamiliar.
            </p>
            <p>
              Independence isn&apos;t a feature we added. It&apos;s
              the only outcome that was ever the goal.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
