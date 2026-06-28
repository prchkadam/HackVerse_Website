import { Container } from "@/components/ui/container";
import { CampusScene, ShoppingScene } from "@/components/sections/real-life-scenes";

interface RealLifeScenario {
  id: string;
  place: string;
  sentence: string;
  Scene: React.ComponentType;
}

/**
 * Two scenarios, not four.
 *
 * The brief named four (Railway Station, Hospital, Shopping, College
 * Campus). Shopping and College Campus map directly onto EchoSight
 * capabilities already established as real elsewhere on this site
 * (Currency/Read Text, and Navigation/Read Text, respectively).
 * Railway Station and Hospital would require inventing specifics
 * about what EchoSight actually does in those settings — exactly
 * the kind of unverified product claim this project has corrected
 * itself on twice already. Shipping two honest scenarios beats
 * shipping four where two are guesses; the other two can be added
 * the moment there's something true to say about them.
 */
const SCENARIOS: RealLifeScenario[] = [
  {
    id: "shopping",
    place: "Shopping",
    sentence: "Pick up the right one, the first time \u2014 no guessing, no asking.",
    Scene: ShoppingScene,
  },
  {
    id: "campus",
    place: "College Campus",
    sentence: "Find the room. Make the class. Without needing a guide.",
    Scene: CampusScene,
  },
];

/**
 * "Built for Real Life" section.
 *
 * No AI language anywhere in this section, by design \u2014 no
 * "describes," "detects," "powered by," nothing naming the
 * mechanism. Every other section on the page explains how EchoSight
 * works; this one is the only place explaining what it feels like
 * not to need it explained. Visuals are large and atmospheric, text
 * is a single sentence per scenario \u2014 the opposite proportion from
 * Features, on purpose.
 */
export function RealLifeSection() {
  return (
    <section
      id="real-life"
      aria-labelledby="real-life-heading"
      className="bg-ink-900 py-24 md:py-32 [html:not(.dark)_&]:bg-paper-100"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="real-life-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Built for real life.
          </h2>
        </div>

        <div className="mt-16 grid gap-16 md:mt-20 md:grid-cols-2 md:gap-12">
          {SCENARIOS.map(({ id, place, sentence, Scene }) => (
            <figure key={id} className="text-center">
              <Scene />
              <figcaption className="mt-6">
                <p className="text-sm font-medium uppercase tracking-wide text-signal-400">
                  {place}
                </p>
                <p className="mt-3 text-xl font-medium leading-snug tracking-tight text-ink-100 md:text-2xl [html:not(.dark)_&]:text-paper-900">
                  {sentence}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
