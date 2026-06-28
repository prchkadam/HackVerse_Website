export interface Feature {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  capabilities: string[];
}

/**
 * Feature content.
 *
 * This deliberately covers the same five capabilities introduced at
 * a glance in the Solution section (navigate, read, currency, SOS,
 * accessibility) — that's not an accident or a duplication to apologize
 * for, it's the natural next layer: Solution says "here's what this
 * does," Features says "here's exactly how." Each headline names a
 * concrete outcome rather than a technology, consistent with this
 * project's stance against generic AI-startup copy.
 *
 * Emergency SOS intentionally has only one capability listed, not
 * three. EchoSight's confirmed SOS behavior is sharing live location
 * with a trusted contact — inventing two more specific mechanisms
 * to hit a round number would mean asserting product behavior that
 * isn't verified, which this project has already caught and
 * corrected once before. Better to be honestly asymmetric than
 * uniformly padded.
 */
export const FEATURES: Feature[] = [
  {
    id: "navigation",
    eyebrow: "Navigation Assistant",
    headline: "Walk with confidence, not guesswork.",
    description:
      "Describes the path ahead in real time \u2014 what's underfoot, what's overhead, and what's about to be in your way.",
    capabilities: [
      "Detects curbs, steps, and uneven ground",
      "Identifies doors, entrances, and obstacles ahead",
      "Announces distance and direction in plain language",
    ],
  },
  {
    id: "read-text",
    eyebrow: "Read Text",
    headline: "Every word, read the moment you need it.",
    description:
      "Point your phone at anything printed, and EchoSight reads it aloud \u2014 no waiting for someone else to do it for you.",
    capabilities: [
      "Reads signs, labels, and printed mail",
      "Reads restaurant menus and price tags",
      "Works in multiple languages",
    ],
  },
  {
    id: "currency",
    eyebrow: "Currency Reader",
    headline: "Know exactly what's in your hand.",
    description:
      "Identifies bills and coins instantly, so paying for something never means guessing or asking a stranger.",
    capabilities: [
      "Identifies denomination by sight",
      "Works with bills held at any angle",
      "Confirms the amount out loud before you hand it over",
    ],
  },
  {
    id: "sos",
    eyebrow: "Emergency SOS",
    headline: "Help, one tap away.",
    description:
      "In an urgent moment, EchoSight shares your exact location with someone who can act \u2014 instantly, without needing to explain where you are.",
    capabilities: ["Shares your live location with a trusted contact"],
  },
  {
    id: "accessibility",
    eyebrow: "Accessibility Settings",
    headline: "Built around how you already use your phone.",
    description:
      "EchoSight doesn't ask you to learn a new way of doing things \u2014 it works with the screen reader and settings you've already set up.",
    capabilities: [
      "Works with VoiceOver and TalkBack",
      "Adjustable speech rate and voice",
      "Compatible with switch control and other input methods",
    ],
  },
];
