export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQ content.
 *
 * "Does it require internet?" and "Is it open source?" are direct,
 * falsifiable factual claims, not soft marketing language — so both
 * are answered with what was actually confirmed, not what would
 * sound best. The internet answer is also deliberately consistent
 * with the Vision section's "Offline AI" milestone (offline support
 * is the goal, not yet real) — these two pieces of copy were
 * written to agree with each other. The open-source answer is an
 * honest "not decided yet" rather than a guessed yes or no, since
 * asserting a license that may not exist would be a real, checkable
 * claim made up from nothing.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is EchoSight?",
    answer:
      "EchoSight is an app that uses AI to describe what's in front of you, out loud, in real time \u2014 built for people who are blind or have low vision.",
  },
  {
    question: "Who is it for?",
    answer:
      "Primarily blind and low-vision users, and the people who support them \u2014 though anyone curious about what it does is welcome to explore it too.",
  },
  {
    question: "How does the AI work?",
    answer:
      "It looks at what your camera sees and turns it into a clear, spoken description \u2014 the same way you might describe a scene to someone over the phone.",
  },
  {
    question: "Does it require internet?",
    answer:
      "Yes, currently. EchoSight needs an internet connection to work \u2014 offline support is on our roadmap, but it isn't available yet.",
  },
  {
    question: "Can anyone use it?",
    answer:
      "Yes. EchoSight is built to work with the screen reader and accessibility settings you already use, so there's nothing new to learn to get started.",
  },
  {
    question: "Is it open source?",
    answer:
      "Not yet decided. We're still figuring out the right approach, and we'll share more here once we do.",
  },
];
