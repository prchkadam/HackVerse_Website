import { cn } from "@/lib/cn";

/**
 * Per-feature illustrative visuals.
 *
 * No product screenshots exist, so each visual is a real, simple
 * SVG diagram representing the *idea* of the capability rather than
 * a literal (and currently nonexistent) screen design. This keeps
 * them honest — clearly illustrative, not a mockup of UI we haven't
 * actually built — while still being specific to each feature
 * rather than one generic shape repeated five times with different
 * colors. All use only the established color tokens (signal teal as
 * the sole accent) and respect the same light/dark theming pattern
 * as the rest of the site.
 */

const visualShellClasses = cn(
  "flex aspect-[4/3] w-full items-center justify-center rounded-lg",
  "bg-ink-900 [html:not(.dark)_&]:bg-paper-100",
);

function VisualShell({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden="true" className={visualShellClasses}>
      {children}
    </div>
  );
}

/** Navigation Assistant: a simple path with a waypoint marker. */
export function NavigationVisual() {
  return (
    <VisualShell>
      <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
        <path
          d="M20 120 Q60 60 90 90 T160 30"
          stroke="currentColor"
          className="text-ink-700 [html:not(.dark)_&]:text-paper-200"
          strokeWidth="3"
          strokeDasharray="6 8"
          strokeLinecap="round"
        />
        <circle cx="20" cy="120" r="5" className="fill-ink-400 [html:not(.dark)_&]:fill-paper-400" />
        <circle cx="160" cy="30" r="8" className="fill-signal-500" />
        <circle cx="160" cy="30" r="14" className="fill-signal-500/20" />
      </svg>
    </VisualShell>
  );
}

/** Read Text: a document with a line being highlighted/scanned. */
export function ReadTextVisual() {
  return (
    <VisualShell>
      <svg width="160" height="140" viewBox="0 0 160 140" fill="none">
        <rect
          x="30"
          y="10"
          width="100"
          height="120"
          rx="6"
          className="fill-ink-800 [html:not(.dark)_&]:fill-paper-50"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.15"
        />
        {[30, 50, 70, 90].map((y) => (
          <rect
            key={y}
            x="46"
            y={y}
            width={y === 50 ? 68 : 50}
            height="6"
            rx="3"
            className={
              y === 50
                ? "fill-signal-500"
                : "fill-ink-700 [html:not(.dark)_&]:fill-paper-200"
            }
          />
        ))}
      </svg>
    </VisualShell>
  );
}

/** Currency Reader: a banknote with a denomination check mark. */
export function CurrencyVisual() {
  return (
    <VisualShell>
      <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
        <rect
          x="20"
          y="25"
          width="140"
          height="70"
          rx="8"
          className="fill-ink-800 [html:not(.dark)_&]:fill-paper-50"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.15"
        />
        <circle cx="90" cy="60" r="22" className="fill-none stroke-signal-500" strokeWidth="2.5" />
        <path
          d="M81 60l6 6 12-14"
          className="stroke-signal-500"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </VisualShell>
  );
}

/** Emergency SOS: a location pin with a pulse, not a generic alarm icon. */
export function SosVisual() {
  return (
    <VisualShell>
      <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
        <circle cx="60" cy="55" r="34" className="fill-signal-500/15" />
        <circle cx="60" cy="55" r="20" className="fill-signal-500/25" />
        <path
          d="M60 20c14 0 26 12 26 27 0 19-26 50-26 50S34 66 34 47c0-15 12-27 26-27z"
          className="fill-signal-500"
        />
        <circle cx="60" cy="47" r="9" className="fill-ink-950 [html:not(.dark)_&]:fill-paper-50" />
      </svg>
    </VisualShell>
  );
}

/** Accessibility Settings: a sliders/equalizer icon \u2014 control, not decoration. */
export function AccessibilityVisual() {
  const bars = [
    { x: 40, value: 0.7 },
    { x: 70, value: 0.35 },
    { x: 100, value: 0.55 },
    { x: 130, value: 0.8 },
  ];

  return (
    <VisualShell>
      <svg width="170" height="110" viewBox="0 0 170 110" fill="none">
        {bars.map((bar) => {
          const trackHeight = 70;
          const fillHeight = trackHeight * bar.value;
          return (
            <g key={bar.x}>
              <rect
                x={bar.x - 3}
                y={20}
                width="6"
                height={trackHeight}
                rx="3"
                className="fill-ink-700 [html:not(.dark)_&]:fill-paper-200"
              />
              <rect
                x={bar.x - 3}
                y={20 + (trackHeight - fillHeight)}
                width="6"
                height={fillHeight}
                rx="3"
                className="fill-signal-500"
              />
              <circle
                cx={bar.x}
                cy={20 + (trackHeight - fillHeight)}
                r="7"
                className="fill-signal-400"
              />
            </g>
          );
        })}
      </svg>
    </VisualShell>
  );
}

export const FEATURE_VISUALS: Record<string, React.ComponentType> = {
  navigation: NavigationVisual,
  "read-text": ReadTextVisual,
  currency: CurrencyVisual,
  sos: SosVisual,
  accessibility: AccessibilityVisual,
};
