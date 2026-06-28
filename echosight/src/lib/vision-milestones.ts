export interface VisionMilestone {
  id: string;
  label: string;
  description: string;
}

/**
 * Vision roadmap content.
 *
 * Framed as where EchoSight wants to go, not a committed timeline —
 * per explicit direction, since promising specific shipped dates
 * for unbuilt capabilities (smart glasses hardware, spatial audio)
 * is a much heavier claim than anything else on this site, and one
 * that ages badly the moment plans change. "Today" is written as
 * a statement of present, confirmed capability (matches the FAQ's
 * honest answer that EchoSight currently requires connectivity);
 * everything after it is intentionally written in aspirational
 * language ("the goal is," "we want to") rather than future-tense
 * promises ("will," "by 2027").
 */
export const VISION_MILESTONES: VisionMilestone[] = [
  {
    id: "today",
    label: "Today",
    description:
      "EchoSight runs on your phone right now, describing what's in front of you in real time \u2014 it currently requires an internet connection to work.",
  },
  {
    id: "offline-ai",
    label: "Offline AI",
    description:
      "The goal: descriptions that work without a connection at all, so EchoSight is just as reliable in a basement or a dead zone as it is anywhere else.",
  },
  {
    id: "indoor-navigation",
    label: "Indoor Navigation",
    description:
      "We want to extend guidance indoors \u2014 hallways, offices, and buildings that have no GPS signal to rely on.",
  },
  {
    id: "spatial-audio",
    label: "Spatial Audio",
    description:
      "Eventually, sound that comes from the direction of the thing it's describing, so hearing where something is becomes as natural as seeing it.",
  },
  {
    id: "smart-glasses",
    label: "Smart Glasses",
    description:
      "A future where this lives on your face instead of in your hand \u2014 hands free, always ready, nothing to point.",
  },
  {
    id: "ai-companion",
    label: "Personal AI Companion",
    description:
      "The long-term vision: not a tool you open, but a companion that's already paying attention, ready before you have to ask.",
  },
];
