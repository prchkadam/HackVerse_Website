import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { FAQ_ITEMS } from "@/lib/faq-data";

/**
 * FAQ section.
 *
 * Answers are kept genuinely concise, per instruction — most are
 * one sentence. Two of the six (internet requirement, open source
 * status) are direct factual claims, answered with what was
 * actually confirmed in this project rather than what would read
 * best; see faq-data.ts for the full reasoning on each.
 */
export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-ink-900 py-24 md:py-32 [html:not(.dark)_&]:bg-paper-100"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            Questions
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Frequently asked.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  );
}
