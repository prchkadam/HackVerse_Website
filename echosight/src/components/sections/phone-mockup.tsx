/**
 * Phone mockup shell — built as real CSS/markup, not an image of a
 * device. This keeps it sharp at any resolution, themeable (it
 * needs to look correct in both light and dark mode), and means the
 * "screen" can host actually-interactive content rather than a flat
 * picture with a fake play button on top of it.
 *
 * Takes its screen content as `children` rather than hardcoding one
 * specific demo, so the Hero and Solution sections can each show
 * different content inside the same physical mockup — "one premium
 * phone mockup" as a shared visual system, not two different phones
 * that happen to look similar.
 */
export function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-[280px] rounded-[2.5rem] border-[6px] border-ink-800 bg-ink-900 p-2 shadow-2xl shadow-black/40 [html:not(.dark)_&]:border-paper-200 [html:not(.dark)_&]:bg-paper-100 [html:not(.dark)_&]:shadow-black/10"
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-950 [html:not(.dark)_&]:bg-paper-50" />

      <div className="h-[560px] overflow-hidden rounded-[2rem] bg-ink-950 [html:not(.dark)_&]:bg-paper-50">
        {children}
      </div>
    </div>
  );
}
