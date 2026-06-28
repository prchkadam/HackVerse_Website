"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/cn";

/**
 * The phone mockup's content: a simplified preview of EchoSight's
 * core interaction — a description appearing in sync with a speaking
 * indicator, cycling through a few real, concrete scenes.
 *
 * This is explicitly a *simulation*, not a recording, because no
 * real demo asset exists yet. It's built as functioning UI rather
 * than a static screenshot because a placeholder image would be the
 * exact thing this project rules out.
 *
 * Note on history: this component's content shape (auto-cycling
 * freeform scene narration) is intentionally different from the
 * Interactive App Showcase's phone screen (showcase-phone-screen.tsx),
 * which is click-driven and shows fixed mode descriptions rather
 * than freeform scenes. An earlier version of this comment claimed
 * this component would later be reused by a "Solution" section —
 * that section was merged into the showcase in a later pass and
 * ended up with its own independent phone-screen component instead,
 * so that reuse never happened. Caught and corrected during a
 * full-site audit rather than left as a misleading rationale for why
 * this component looks the way it does.
 *
 * Text and the "speaking" state are the same source rendered two
 * ways (visual caption + aria-live announcement), not a caption
 * track bolted onto an audio/video element — consistent with the
 * blueprint's accessibility section.
 */
const SCENES = [
  "A kitchen counter. Coffee maker on the left, a closed laptop in front of you, keys to the right.",
  "Approaching a crosswalk. The light is red. Two people are waiting beside you.",
  "A hallway table. An unopened envelope and a small box, postmarked yesterday.",
] as const;

const TYPE_SPEED_MS = 28;
const HOLD_DURATION_MS = 2600;

export function HeroDemoPreview() {
  const prefersReducedMotion = useReducedMotion();
  const [sceneIndex, setSceneIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(true);

  useEffect(() => {
    const fullText = SCENES[sceneIndex % SCENES.length] ?? SCENES[0];

    // With reduced motion, skip the character-by-character reveal —
    // it's decorative, not informational, and respecting the OS
    // setting means showing the same content immediately instead.
    if (prefersReducedMotion) {
      setDisplayedText(fullText);
      setIsSpeaking(true);
      const holdTimer = setTimeout(() => {
        setIsSpeaking(false);
        const nextTimer = setTimeout(() => {
          setSceneIndex((current) => current + 1);
        }, 900);
        return () => clearTimeout(nextTimer);
      }, HOLD_DURATION_MS);
      return () => clearTimeout(holdTimer);
    }

    setIsSpeaking(true);
    setDisplayedText("");
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      charIndex += 1;
      setDisplayedText(fullText.slice(0, charIndex));

      if (charIndex >= fullText.length) {
        clearInterval(typeInterval);
        setIsSpeaking(false);

        setTimeout(() => {
          setSceneIndex((current) => current + 1);
        }, HOLD_DURATION_MS);
      }
    }, TYPE_SPEED_MS);

    return () => clearInterval(typeInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneIndex, prefersReducedMotion]);

  return (
    <div className="flex h-full flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-ink-400">
          EchoSight
        </span>
        <StatusIndicator isSpeaking={isSpeaking} />
      </div>

      <div
        className="flex-1 py-6"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="text-lg leading-relaxed text-ink-100">
          {displayedText}
          {!prefersReducedMotion && isSpeaking && (
            <span
              aria-hidden="true"
              className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-signal-400 align-middle"
            />
          )}
        </p>
      </div>

      <Waveform isSpeaking={isSpeaking} prefersReducedMotion={prefersReducedMotion} />
    </div>
  );
}

function StatusIndicator({ isSpeaking }: { isSpeaking: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-signal-400">
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full bg-signal-400",
          isSpeaking && "animate-pulse",
        )}
      />
      {isSpeaking ? "Describing" : "Listening"}
    </span>
  );
}

/**
 * Decorative waveform — purely visual reinforcement of "speaking,"
 * never the only signal that state has changed (the text label and
 * dot above carry that meaning redundantly, per the blueprint's
 * rule against color/motion-only state). Marked aria-hidden because
 * it conveys nothing a screen reader user needs that the live
 * region text doesn't already say.
 */
function Waveform({
  isSpeaking,
  prefersReducedMotion,
}: {
  isSpeaking: boolean;
  prefersReducedMotion: boolean;
}) {
  const barHeights = [40, 70, 100, 65, 90, 50, 75, 45, 60, 85];

  return (
    <div
      aria-hidden="true"
      className="flex h-10 items-center justify-center gap-1"
    >
      {barHeights.map((height, index) => (
        <span
          key={index}
          className={cn(
            "w-1 rounded-full bg-signal-500/70 transition-all duration-300",
            !prefersReducedMotion && isSpeaking && "animate-wave",
          )}
          style={{
            height: isSpeaking ? `${height}%` : "20%",
            animationDelay: `${index * 80}ms`,
          }}
        />
      ))}
    </div>
  );
}
