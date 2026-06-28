import { cn } from "@/lib/cn";

/**
 * Container primitive — the single source of truth for horizontal
 * rhythm (max-width + gutters), per the blueprint's grid system.
 * Every section composes this rather than redeclaring `max-w-content
 * mx-auto px-6` inline, so a future change to the site's content
 * width is a one-file edit, not a find-and-replace across sections.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-content px-6", className)}>
      {children}
    </div>
  );
}
