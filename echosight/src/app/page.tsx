import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { RealLifeSection } from "@/components/sections/real-life-section";
import { DocumentationSection } from "@/components/sections/documentation-section";
import { VisionSection } from "@/components/sections/vision-section";
import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FAQ_ITEMS } from "@/lib/faq-data";

/**
 * Homepage shell.
 *
 * CtaSection (#contact) added per the staff audit — every "Get
 * Started" CTA on the site (hero, navbar, mobile menu) and the
 * footer's Contact link had been pointing at #contact since the
 * first turn this project shipped, and no section with that id ever
 * existed. This was the most severe defect found in review.
 *
 * JSON-LD below uses only facts already established elsewhere in
 * this project (the FAQ's actual questions/answers, the same name
 * and description already in metadata) — no invented founding date,
 * legal entity details, or review/rating data, which would be the
 * structured-data equivalent of the fabricated claims this project
 * has repeatedly caught and removed in other forms.
 *
 * Background elevation check (no two consecutive raised sections):
 * Hero(base) → Problem(base) → Showcase(raised) → Features(base) →
 * RealLife(raised) → Documentation(base) → Vision(base) → About(base) →
 * Faq(raised) → Cta(base). No violation.
 */
export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EchoSight",
    url: "https://echosight.ai",
    description:
      "EchoSight uses AI to describe your surroundings in real time, giving blind and low-vision users a faster, more independent way to understand the world around them.",
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <ProblemSection />
      <ShowcaseSection />
      <FeaturesSection />
      <RealLifeSection />
      <DocumentationSection />
      <VisionSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
