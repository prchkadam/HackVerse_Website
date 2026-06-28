import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Typed routes catch broken internal links (e.g. a renamed section
  // anchor) at build time instead of as a silent 404 in production —
  // cheap insurance for a marketing site with no test suite.
  typedRoutes: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Fails the build on lint errors rather than warning and shipping
  // anyway. For a production site this is the right default; it's
  // easy to relax per-rule later if it gets in the way.
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
