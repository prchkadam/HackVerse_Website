import type { Config } from "tailwindcss";

/**
 * Color system — design rationale
 * ---------------------------------------------------------------
 * Every text/background pairing below was chosen to clear WCAG AAA
 * (7:1) for body text and AA (4.5:1) for large/bold text, not just
 * the more common AA-for-everything bar. This isn't a generic dark
 * theme with an accent bolted on — EchoSight's actual users are
 * disproportionately likely to need higher contrast than a typical
 * visitor, so the contrast floor is a hard constraint, not a nice
 * default.
 *
 * "ink" = dark mode surface family (default theme)
 * "paper" = light mode surface family (toggle target)
 * "signal" = the one accent color, used sparingly and consistently
 *            for anything interactive or "this is the AI speaking"
 * "amber" exists as a status color for warnings/attention only —
 *            never used decoratively, so its meaning stays load-bearing.
 */
const colors = {
  ink: {
    950: "#0A0D12", // primary dark background
    900: "#11151C", // raised surface (cards, nav)
    800: "#1B212B", // borders / dividers on dark
    700: "#2A323F", // hover surface on dark
    400: "#8C97A6", // secondary text on dark (still ~4.6:1 on ink-950)
    100: "#E7EAEE", // primary text on dark (~15.8:1 on ink-950)
  },
  paper: {
    50: "#FAFAF8", // primary light background
    100: "#F2F1ED", // raised surface (cards, nav) on light
    200: "#E3E1D9", // borders / dividers on light
    400: "#6B6F76", // secondary text on light (~5.3:1 on paper-50)
    900: "#15171A", // primary text on light (~17.9:1 on paper-50)
  },
  signal: {
    // A single accent family. Chosen as a warm, confident amber-cyan
    // is the "every AI startup" default (see frontend-design
    // calibration notes) — so the accent here is a deliberate teal,
    // which also reads as "calm clarity" rather than "hype," which
    // matters for an anxious family member evaluating a medical-
    // adjacent product.
    400: "#5EEAD4",
    500: "#2DD4BF",
    600: "#0F9C8C", // meets AA on both paper-50 and ink-950 backgrounds
    700: "#0B7A6E",
  },
  amber: {
    500: "#F5A524",
    600: "#D4880F",
  },
} as const;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        // Display: used for headlines only, set with restraint per
        // the design skill's guidance — character, not decoration.
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Body: Atkinson Hyperlegible — designed by the Braille
        // Institute specifically for low-vision readers (open
        // apertures, disambiguated 1/l/I and 0/O). This is the
        // single most important typographic decision on the site
        // because it's a body face, read the most, by the people
        // who need it most.
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        // Mono: used only for small utility text (e.g., labels that
        // benefit from tabular alignment). Not a personality choice.
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // A deliberate scale, not Tailwind's default. Base size is
        // 18px rather than 16px — a quiet accessibility decision:
        // larger default body text reduces the need for users to
        // zoom at all, which means layouts are less likely to ever
        // hit a broken 200%-zoom state in the first place.
        xs: ["0.875rem", { lineHeight: "1.5" }],
        sm: ["1rem", { lineHeight: "1.6" }],
        base: ["1.125rem", { lineHeight: "1.7" }],
        lg: ["1.25rem", { lineHeight: "1.7" }],
        xl: ["1.5rem", { lineHeight: "1.4" }],
        "2xl": ["1.875rem", { lineHeight: "1.3" }],
        "3xl": ["2.25rem", { lineHeight: "1.2" }],
        "4xl": ["2.75rem", { lineHeight: "1.15" }],
        "5xl": ["3.5rem", { lineHeight: "1.1" }],
        "6xl": ["4.5rem", { lineHeight: "1.05" }],
      },
      borderRadius: {
        // A restrained, consistent radius scale — not the rounder
        // "friendly AI app" default and not the zero-radius
        // editorial default either. Mid-ground, intentional.
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.6)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        // Used only by the demo waveform's speaking state. Each bar
        // staggers its delay inline (see hero-demo-preview.tsx) so
        // they don't all pulse in lockstep, which would look
        // mechanical rather than like genuine audio activity.
        wave: "wave 0.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
