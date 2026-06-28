import { cn } from "@/lib/cn";

/**
 * Wordmark logo, rendered as real markup rather than an SVG/image
 * asset that doesn't exist yet. The small dot is a deliberate,
 * minimal signature: it's the one place "signal" teal appears in
 * the nav, standing in for the idea of a single point of focus —
 * consistent with how the same color means "this is the AI" inside
 * the demo experience elsewhere on the site.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-display text-lg font-semibold tracking-tight",
        className,
      )}
    >
      EchoSight
      <span
        aria-hidden="true"
        className="mb-2 inline-block h-1.5 w-1.5 rounded-full bg-signal-500"
      />
    </span>
  );
}
