import { Container } from "@/components/ui/container";
import { TechLogoTile } from "@/components/sections/tech-logo-tile";
import { TECH_LOGOS } from "@/lib/tech-logos";

/**
 * Technology section.
 *
 * Framed as "built with" rather than asserting specific backend
 * architecture claims. Featherless AI is a real, verified inference
 * platform, but whether EchoSight's production backend specifically
 * runs on Gemini + Featherless couldn't be confirmed in this
 * session — so the heading and copy here stay at "these are the
 * technologies behind EchoSight" without implying a verified,
 * audited claim about exact production infrastructure. If that
 * needs to be more specific and confirmed later, this is a one-file
 * edit away from a more assertive claim.
 *
 * Logos render as a clean grid, evenly sized, no per-tile border or
 * background — a "wall of trust marks" reads as a card grid the
 * instant you put a box around each one, which is exactly what "no
 * oversized cards" is ruling out.
 */
export function TechnologySection() {
  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            Under the hood
          </p>
          <h2
            id="technology-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Built on technology that&apos;s actually ready for this.
          </h2>
        </div>

        <ul
          aria-label="Technologies used to build EchoSight"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5"
        >
          {TECH_LOGOS.map((logo) => (
            <li key={logo.name}>
              <TechLogoTile name={logo.name} logoSrc={logo.logoSrc} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
