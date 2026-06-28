import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { FEATURES } from "@/lib/features-data";
import { FEATURE_VISUALS } from "@/components/sections/feature-visuals";

/**
 * Features section.
 *
 * Expands the five capabilities the Solution section already
 * introduced at a glance into full detail — deliberately the same
 * five, not a coincidence (see features-data.ts). This is the
 * "how exactly" layer; Solution was the "what, briefly" layer.
 *
 * No feature cards: no borders, no background fill, no boxed
 * container around each row. Rhythm comes entirely from alternating
 * image/content position and generous vertical spacing between rows
 * — closer to how Apple's product pages separate sections (through
 * space and position) than how a SaaS marketing page separates them
 * (through a grid of bordered tiles).
 *
 * Image-left/content-right alternates every row starting with image
 * left, per your instruction. On mobile, image always renders above
 * content regardless of desktop position — reading order should
 * never visually invert relative to DOM order for a screen reader
 * user, so "alternating" is a desktop-only visual arrangement, not a
 * DOM reorder.
 */
export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            What EchoSight does
          </p>
          <h2
            id="features-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Five capabilities. One quiet companion.
          </h2>
        </div>

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-36">
          {FEATURES.map((feature, index) => {
            const Visual = FEATURE_VISUALS[feature.id];
            const imageOnRight = index % 2 === 1;

            return (
              <article
                key={feature.id}
                aria-labelledby={`feature-${feature.id}-heading`}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <div
                  className={cn(
                    "lg:order-1",
                    imageOnRight && "lg:order-2",
                  )}
                >
                  {Visual ? <Visual /> : null}
                </div>

                <div
                  className={cn(
                    "lg:order-2",
                    imageOnRight && "lg:order-1",
                  )}
                >
                  <p className="text-sm font-medium uppercase tracking-wide text-signal-400">
                    {feature.eyebrow}
                  </p>
                  <h3
                    id={`feature-${feature.id}-heading`}
                    className="mt-3 text-2xl font-semibold leading-snug tracking-tight md:text-3xl"
                  >
                    {feature.headline}
                  </h3>
                  <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-400 [html:not(.dark)_&]:text-paper-400">
                    {feature.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {feature.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-signal-500"
                        />
                        <span className="text-base text-ink-100 [html:not(.dark)_&]:text-paper-900">
                          {capability}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
