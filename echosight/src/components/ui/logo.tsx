import { cn } from "@/lib/cn";

/**
 * Wordmark logo, now updated to render the official Logo.png image
 * asset alongside the brand typography, maintaining consistent scaling
 * and legibility across all layouts.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src="/logos/Logo.png"
        alt="EchoSight Logo"
        className="h-20 w-auto object-contain transition-opacity hover:opacity-90"
      />
    </div>
  );
}
