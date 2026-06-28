"use client";

import { useState } from "react";
import type { TechLogo } from "@/lib/tech-logos";

/**
 * Single technology tile.
 *
 * Tries to render the real logo image; if it fails to load (e.g.
 * the asset hasn't been added to /public/logos/ yet), falls back to
 * the plain technology name instead of showing a broken-image icon.
 * This means the grid looks intentional and clean either way — as a
 * row of real logos once assets are added, or as a row of clean
 * wordmark labels until then — rather than visibly broken in the
 * interim.
 */
export function TechLogoTile({ name, logoSrc }: TechLogo) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="flex h-20 items-center justify-center rounded-md px-4">
      {imageFailed ? (
        <span className="text-base font-medium text-ink-400 [html:not(.dark)_&]:text-paper-400">
          {name}
        </span>
      ) : (
        // Plain <img>, not next/image: these are small, static brand
        // marks where next/image's optimization pipeline adds
        // overhead without benefit, and onError fallback handling is
        // simpler with a plain element here.
        <img
          src={logoSrc}
          alt={name}
          className="h-8 w-auto max-w-[120px] object-contain opacity-70 grayscale transition-opacity hover:opacity-100 [html:not(.dark)_&]:invert-0"
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
}
