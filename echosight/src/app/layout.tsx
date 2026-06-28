import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import "./globals.css";

/**
 * Font strategy
 * ---------------------------------------------------------------
 * Body: Atkinson Hyperlegible — designed by the Braille Institute
 * specifically for low-vision readers (open apertures, disambiguated
 * 1/l/I and 0/O). This is the single most important typographic
 * decision on the site because it's a body face, read the most, by
 * the people who need it most.
 *
 * CORRECTION: earlier in this project, this was wired up via
 * next/font/local, on the claim that Atkinson Hyperlegible "isn't in
 * the standard Google Fonts catalog." That claim was wrong — it's
 * been on Google Fonts since August 2021, confirmed directly against
 * Braille Institute's own announcement before making this change. The
 * local-font setup pointed at three .woff2 files in public/fonts/
 * that were never actually added, which meant the project has been
 * unable to build since the very first turn — next/font/local throws
 * a hard build error when its source files are missing, not a
 * graceful runtime fallback. Loading it through next/font/google
 * instead fixes the build and removes a manual asset-management step
 * that was never necessary in the first place.
 *
 * Display: Inter, used only for headlines, set with restraint
 * (see globals.css h1–h4 rule). Chosen over a more "characterful"
 * display face on purpose — the brief for this product is trust
 * and clarity, not personality-forward branding. A loud display
 * face would work against the message.
 *
 * Mono: JetBrains Mono, used only for small utility text (e.g.
 * timestamps, technical labels) — not a personality choice.
 *
 * next/font self-hosts and inlines font-display automatically,
 * which avoids both a layout-shift-causing FOUT and an external
 * request to Google at runtime.
 */
const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const bodyFont = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://echosight.ai"),
  title: {
    default: "EchoSight — AI that describes the world around you",
    template: "%s — EchoSight",
  },
  description:
    "EchoSight uses AI to describe your surroundings in real time, giving blind and low-vision users a faster, more independent way to understand the world around them.",
  keywords: [
    "EchoSight",
    "blind assistive technology",
    "low vision AI",
    "scene description AI",
    "accessibility technology",
  ],
  openGraph: {
    title: "EchoSight — AI that describes the world around you",
    description:
      "Real-time AI scene description for blind and low-vision users.",
    url: "https://echosight.ai",
    siteName: "EchoSight",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EchoSight — AI that describes the world around you",
    description:
      "Real-time AI scene description for blind and low-vision users.",
  },
  // No manual `icons` field: favicon is provided by icon.tsx via
  // Next's file convention (auto-detected), which replaced a
  // reference here to /favicon.ico — a file that never actually
  // existed in public/, found during audit.
};

export const viewport: Viewport = {
  // userScalable is intentionally left at its default (allowed).
  // Locking zoom or capping maximumScale is a common mobile-web
  // pattern that actively breaks the site for the people it exists
  // to serve, so this is a deliberate omission, not an oversight.
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0D12" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <head>
        {/*
          Anti-FOUC theme script.
          Runs synchronously before paint, before React hydrates, so
          a returning user with a saved "light" preference never sees
          a flash of the dark default first. This duplicates a small
          piece of logic that also lives in ThemeProvider — that
          duplication is intentional, not a leftover: this script has
          to work standing completely alone, with no React and no
          module system, because it must run before either exists.
        */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = window.localStorage.getItem("echosight-theme");
                  if (stored === "light") {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {/*
            Skip link: the first focusable element on the page, for
            keyboard and screen-reader users to bypass the header nav
            and jump straight to main content. Visually hidden until
            focused. This is table-stakes for a site built for this
            audience, and easy to forget because it's invisible by
            design until someone who needs it tabs in.
          */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-signal-600 focus:px-4 focus:py-2 focus:text-ink-950 focus:no-underline"
          >
            Skip to main content
          </a>
          {/*
            Navbar and footer now live here, in the root layout,
            rather than inside individual page files. They were
            originally only rendered inside the homepage's page.tsx,
            which meant a second real route (the privacy page added
            this turn) would have rendered with no navigation and no
            footer at all — caught and fixed while building that
            page, not left as a known gap. Every route now gets
            consistent nav/footer for free, and there's one place to
            edit either of them rather than risking the two drifting
            out of sync across multiple page files.
          */}
          <Navbar />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
