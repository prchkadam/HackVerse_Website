import { cn } from "@/lib/cn";

/**
 * Large scenario illustrations for "Built for Real Life."
 *
 * These are intentionally different in character from the feature
 * visuals: larger, more atmospheric, depicting a place and a person
 * in it rather than a diagram of a mechanism. No phone, no waveform,
 * no AI-coded visual language at all — the brief asked this section
 * to connect emotionally rather than talk about the product, and a
 * literal device illustration would undercut that immediately.
 */

const sceneShellClasses = cn(
  "flex aspect-[5/4] w-full items-center justify-center overflow-hidden rounded-xl",
  "bg-ink-900 [html:not(.dark)_&]:bg-paper-100",
);

function SceneShell({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden="true" className={sceneShellClasses}>
      {children}
    </div>
  );
}

/** Shopping: a figure before a shelf of products, one item highlighted. */
export function ShoppingScene() {
  return (
    <SceneShell>
      <svg width="280" height="220" viewBox="0 0 280 220" fill="none">
        {/* Shelf */}
        <rect x="40" y="40" width="200" height="6" rx="3" className="fill-ink-700 [html:not(.dark)_&]:fill-paper-200" />
        <rect x="40" y="100" width="200" height="6" rx="3" className="fill-ink-700 [html:not(.dark)_&]:fill-paper-200" />
        {/* Products */}
        {[60, 95, 130, 165, 200].map((x, i) => (
          <rect
            key={x}
            x={x}
            y="50"
            width="26"
            height="46"
            rx="4"
            className={
              i === 2
                ? "fill-signal-500"
                : "fill-ink-800 [html:not(.dark)_&]:fill-paper-50"
            }
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="1.5"
          />
        ))}
        {/* Person, simplified */}
        <circle cx="140" cy="150" r="14" className="fill-ink-400 [html:not(.dark)_&]:fill-paper-400" />
        <path
          d="M118 200c0-16 10-30 22-30s22 14 22 30"
          className="fill-ink-400 [html:not(.dark)_&]:fill-paper-400"
        />
      </svg>
    </SceneShell>
  );
}

/** College campus: a corridor of doors, one lit/found. */
export function CampusScene() {
  return (
    <SceneShell>
      <svg width="280" height="220" viewBox="0 0 280 220" fill="none">
        {/* Perspective corridor lines */}
        <path
          d="M20 200 L100 80 L180 80 L260 200 Z"
          className="fill-none stroke-ink-700 [html:not(.dark)_&]:stroke-paper-200"
          strokeWidth="2"
        />
        {/* Doors along the corridor */}
        <rect x="60" y="120" width="22" height="60" rx="2" className="fill-ink-800 [html:not(.dark)_&]:fill-paper-50" />
        <rect x="198" y="120" width="22" height="60" rx="2" className="fill-ink-800 [html:not(.dark)_&]:fill-paper-50" />
        {/* The found room, highlighted */}
        <rect x="129" y="100" width="22" height="80" rx="2" className="fill-signal-500" />
        <circle cx="140" cy="92" r="6" className="fill-signal-400" />
      </svg>
    </SceneShell>
  );
}
