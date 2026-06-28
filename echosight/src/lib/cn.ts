import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind-aware conflict resolution.
 *
 * Plain clsx() isn't enough on its own: if a component's default
 * classes include `px-4` and a caller passes `px-6` to override it,
 * clsx just concatenates both into the className string and the
 * browser's CSS cascade — not our intent — decides which one wins.
 * twMerge resolves that conflict correctly so component APIs that
 * accept a `className` prop actually behave the way callers expect.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
