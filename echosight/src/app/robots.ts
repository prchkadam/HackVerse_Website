import type { MetadataRoute } from "next";

/**
 * robots.txt, generated via Next's metadata file convention rather
 * than a static public/robots.txt — keeps it in sync with the same
 * metadataBase URL used in layout.tsx instead of a second hardcoded
 * domain string living in a plain text file.
 *
 * Allows everything: this is a public marketing site with nothing
 * that needs hiding from crawlers (no admin routes, no user-specific
 * pages exist yet).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://echosight.ai/sitemap.xml",
  };
}
