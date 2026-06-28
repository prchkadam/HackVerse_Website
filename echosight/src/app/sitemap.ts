import type { MetadataRoute } from "next";

/**
 * sitemap.xml, generated via Next's metadata file convention.
 *
 * Only two real routes exist on this site today (home and privacy),
 * so this lists exactly those two — not a speculative list of pages
 * that don't exist yet. Add an entry here whenever a new top-level
 * route is actually built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://echosight.ai";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
