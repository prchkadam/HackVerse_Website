export interface TechLogo {
  name: string;
  /**
   * Path to the real logo asset, to be added later. Pointing at a
   * file that doesn't exist yet is standard practice for wiring up
   * brand assets you don't have on hand — it's not the same as
   * inventing placeholder *content* (lorem ipsum, fake copy). The
   * <TechLogoTile> component below fails gracefully (falls back to
   * the wordmark text) until these files are actually added under
   * /public/logos/.
   */
  logoSrc: string;
}

/**
 * Technology stack. Featherless AI is real and confirmed (a
 * serverless AI inference platform) but whether EchoSight's backend
 * specifically runs on it couldn't be confirmed, so this section is
 * framed as "built with these technologies" generically rather than
 * asserting verified architecture details — see TechnologySection's
 * heading/description copy for how that's handled honestly.
 */
export const TECH_LOGOS: TechLogo[] = [
  { name: "React Native", logoSrc: "/logos/react-native.svg" },
  { name: "Expo", logoSrc: "/logos/expo.svg" },
  { name: "TypeScript", logoSrc: "/logos/typescript.svg" },
  { name: "Gemini", logoSrc: "/logos/gemini.svg" },
  { name: "Featherless", logoSrc: "/logos/featherless.svg" },
  { name: "Vision Camera", logoSrc: "/logos/vision-camera.svg" },
  { name: "Expo Speech", logoSrc: "/logos/expo-speech.svg" },
  { name: "Next.js", logoSrc: "/logos/nextjs.svg" },
  { name: "Tailwind CSS", logoSrc: "/logos/tailwind.svg" },
  { name: "Framer Motion", logoSrc: "/logos/framer-motion.svg" },
];
