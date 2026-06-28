"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

interface DocInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  downloadUrl: string;
  icon: React.ReactNode;
  sections: {
    title: string;
    content: string | React.ReactNode;
  }[];
}

export function DocumentationSection() {
  const [activeDocId, setActiveDocId] = useState("economics");

  const docs: DocInfo[] = [
    {
      id: "economics",
      title: "Revenue & Unit Economics",
      subtitle: "Document 1 — Financial Model & GTM Strategy",
      description:
        "Analysis of our freemium consumer model, pricing strategy (₹149/mo), sensitivity tables, and unit economics at 1,000 MAU.",
      downloadUrl: "/Documentation/Document1_Revenue_Unit_Economics.docx",
      icon: (
        <svg
          className="h-6 w-6 text-signal-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      sections: [
        {
          title: "Freemium & Premium Strategy",
          content: (
            <div className="space-y-4">
              <p>
                EchoSight operates on a hybrid model combining a free tier, individual premium subscriptions, and institutional licenses.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-ink-100 dark:text-ink-100 [html:not(.dark)_&]:text-paper-900">Free Tier:</strong> Includes unlimited on-device OCR (Read Text via Google ML Kit), Emergency SOS, and a soft cap of 8 vision calls/day for Navigation and Scene description.
                </li>
                <li>
                  <strong className="text-ink-100 dark:text-ink-100 [html:not(.dark)_&]:text-paper-900">Premium Tier (₹149/month):</strong> Anchored below the psychological threshold of mainstream subscriptions. Unlocks a soft Fair-Use cap of ~40 calls/day, priority API routing, offline caching for route descriptions, and a caregiver companion view.
                </li>
                <li>
                  <strong className="text-ink-100 dark:text-ink-100 [html:not(.dark)_&]:text-paper-900">Conversion Rate:</strong> Modeled at 2.5% base case, adjusting for the higher intent-to-pay of utility tools, offset by visual-impairment demographic income constraints.
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: "Unit Economics (1,000 MAU Scenario)",
          content: (
            <div className="space-y-4">
              <p>
                Calculations are based on a cascading API route structure (Groq → Featherless → Gemini).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-ink-800 [html:not(.dark)_&]:border-paper-200">
                      <th className="py-2 font-semibold">User Segment</th>
                      <th className="py-2 font-semibold">Count</th>
                      <th className="py-2 font-semibold">Calls/User/Day</th>
                      <th className="py-2 font-semibold">Monthly Call Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-ink-800/50 [html:not(.dark)_&]:border-paper-200/50">
                      <td className="py-2">Free Users</td>
                      <td className="py-2">975</td>
                      <td className="py-2">8</td>
                      <td className="py-2">234,000</td>
                    </tr>
                    <tr>
                      <td className="py-2">Premium Users</td>
                      <td className="py-2">25</td>
                      <td className="py-2">20</td>
                      <td className="py-2">15,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-ink-400 [html:not(.dark)_&]:text-paper-400 italic">
                *Note: On-device OCR (Google ML Kit) runs with zero marginal server costs and is excluded from call volume costs.
              </p>
            </div>
          ),
        },
        {
          title: "Cost & Revenue Breakdown",
          content: (
            <div className="space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-ink-100 dark:text-ink-100 [html:not(.dark)_&]:text-paper-900">Total Monthly Cost:</strong> $325.96 ($258.96 AI inference routing + $67.00 cloud infrastructure).
                </li>
                <li>
                  <strong className="text-ink-100 dark:text-ink-100 [html:not(.dark)_&]:text-paper-900">Premium Revenue (2.5% conversion):</strong> ₹3,725 (~$44.88).
                </li>
                <li>
                  <strong className="text-ink-100 dark:text-ink-100 [html:not(.dark)_&]:text-paper-900">Net Gross Margin:</strong> −$281.08/month.
                </li>
              </ul>
              <div className="rounded-md border border-red-900/30 bg-red-950/20 p-4 [html:not(.dark)_&]:border-red-200 [html:not(.dark)_&]:bg-red-50">
                <h4 className="text-sm font-semibold text-red-500 [html:not(.dark)_&]:text-red-700">
                  Critical Finding: Consumer Subscriptions Alone Do Not Break Even
                </h4>
                <p className="mt-1 text-sm text-ink-400 [html:not(.dark)_&]:text-paper-600">
                  Consumer subscription revenue alone does not cover API costs at 1,000 MAU. Breakeven would require ~18% conversion, which is unrealistic. Consequently, B2B institutional partnerships (schools, NGOs, and CSR contracts) are structurally required, and consumer growth acts as trust-building validation for large scale procurement.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "B2B & Institutional Channels",
          content: (
            <div className="space-y-4">
              <p>
                Predictable and viable revenue is driven by targeted organization channels:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Schools for the Visually Impaired:</strong> Bulk annual licenses (e.g., ₹15,000/mo school licenses for 50 student seats, funded via CSR or government support).
                </li>
                <li>
                  <strong>NGOs:</strong> Cohort licensing programs bundled with deployment and orientation training.
                </li>
                <li>
                  <strong>CSR Partnerships (India Companies Act):</strong> Earmarked statutory funds (2% net profit) sponsoring deployments for blind populations.
                </li>
                <li>
                  <strong>Government:</strong> Long-term state disability welfare schemes and distribution programs.
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      id: "architecture",
      title: "Architecture & Technical Moat",
      subtitle: "Document 2 — Implementation & Scalability Specifications",
      description:
        "Technical overview of the multi-provider vision AI fallback chain, on-device OCR, security parameters, and query caching.",
      downloadUrl: "/Documentation/Document2_Architecture_Technical_Moat.docx",
      icon: (
        <svg
          className="h-6 w-6 text-signal-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      sections: [
        {
          title: "Current MVP Flow",
          content: (
            <div className="space-y-4">
              <p>
                The existing system coordinates camera inputs and cascades queries dynamically:
              </p>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-ink-900/50 [html:not(.dark)_&]:bg-paper-100 border border-ink-800 [html:not(.dark)_&]:border-paper-200">
                <div className="text-center">
                  <div className="text-xs text-signal-400 font-mono uppercase">Input</div>
                  <div className="mt-1 font-semibold text-sm">Vision Camera (React Native/Expo)</div>
                </div>
                <div className="text-ink-600 hidden md:block">&rarr;</div>
                <div className="text-center">
                  <div className="text-xs text-signal-400 font-mono uppercase">Local processing</div>
                  <div className="mt-1 font-semibold text-sm">Google ML Kit (On-device OCR)</div>
                </div>
                <div className="text-ink-600 hidden md:block">&rarr;</div>
                <div className="text-center">
                  <div className="text-xs text-signal-400 font-mono uppercase">AI Cloud Routing</div>
                  <div className="mt-1 font-semibold text-sm">Groq &rarr; Featherless &rarr; Gemini</div>
                </div>
                <div className="text-ink-600 hidden md:block">&rarr;</div>
                <div className="text-center">
                  <div className="text-xs text-signal-400 font-mono uppercase">Output</div>
                  <div className="mt-1 font-semibold text-sm">Accessibility Engine &rarr; Expo Speech</div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Three-Tier Inference Cascade",
          content: (
            <div className="space-y-4">
              <p>
                Rather than relying on a single vision API, EchoSight implements a server-managed fallback chain:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Groq (Primary - ~85% traffic):</strong> Handles the bulk of queries with high-speed vision inference on LPU architectures, offering ultra-low latencies critical for safe movement.
                </li>
                <li>
                  <strong>Featherless (Secondary - ~12% traffic):</strong> A serverless vision model endpoint used as a fallback if Groq encounters a failure or rate limits.
                </li>
                <li>
                  <strong>Gemini AI (Tertiary - ~3% traffic):</strong> A final, high-intelligence fallback used only when simpler pathways fail, controlling overall API cost overheads.
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: "Security & Defensibility",
          content: (
            <div className="space-y-4">
              <p>
                To avoid credentials leakage and abuse, the production architecture separates client access from API execution:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Server-Side Secret Store:</strong> No AI keys reside inside the client application wrapper. All vision API calls are routed and authenticated via backend services.
                </li>
                <li>
                  <strong>Privacy by Design:</strong> Captured frames are treated as transient memory. They are processed and discarded immediately, never stored, unless explicitly opted-in for contextual reference features (e.g. key tracker).
                </li>
                <li>
                  <strong>Rate Limiting Exceptions:</strong> Emergency SOS features are strictly isolated from normal rate limits, ensuring critical safety triggers are never throttled.
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: "Technical Moat",
          content: (
            <div className="space-y-4">
              <p>
                The defensive value of EchoSight is built on concrete engineering components, not prompt adjustments:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>The Accessibility Engine:</strong> A custom logic layer that structures raw, verbose AI model descriptors into brief, audio-friendly, safety-first direction commands.
                </li>
                <li>
                  <strong>Perceptual Caching:</strong> A cache based on image-hash similarity keys (rather than exact pixel matches), serving recurring path descriptions immediately with zero external API calls.
                </li>
                <li>
                  <strong>Integrated Workflows:</strong> Consolidating OCR, object reading, currency identification, and navigation into one unified voice-based experience.
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      id: "roadmap",
      title: "Scale & Expansion Roadmap",
      subtitle: "Document 3 — User Milestones & Product Vision",
      description:
        "Sequence of scaling milestones (10 to 10,000 active users) and long-term directions like smart glasses and offline local vision models.",
      downloadUrl: "/Documentation/Document3_Scale_Expansion_Roadmap.docx",
      icon: (
        <svg
          className="h-6 w-6 text-signal-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      sections: [
        {
          title: "Scaling Milestones",
          content: (
            <div className="space-y-4">
              <p>
                Development is planned along active user volumes, rather than standard arbitrary calendar months:
              </p>
              <div className="space-y-3">
                <div className="p-3 border border-ink-800 [html:not(.dark)_&]:border-paper-200 rounded bg-ink-950/20">
                  <span className="text-xs font-semibold text-signal-400 uppercase font-mono">Stage 1 (10 Users)</span>
                  <p className="text-sm mt-1 text-ink-400 [html:not(.dark)_&]:text-paper-600">
                    Qualitative design focus. Sitting with users, observing cognitive load, and optimizing translation formats. Simple database, zero caching.
                  </p>
                </div>
                <div className="p-3 border border-ink-800 [html:not(.dark)_&]:border-paper-200 rounded bg-ink-950/20">
                  <span className="text-xs font-semibold text-signal-400 uppercase font-mono">Stage 2 (100 Users)</span>
                  <p className="text-sm mt-1 text-ink-400 [html:not(.dark)_&]:text-paper-600">
                    Infrastructure foundation. Managed database backups, simple text caching, error notifications, and design of the institutional B2B tenancy model.
                  </p>
                </div>
                <div className="p-3 border border-ink-800 [html:not(.dark)_&]:border-paper-200 rounded bg-ink-950/20">
                  <span className="text-xs font-semibold text-signal-400 uppercase font-mono">Stage 3 (1,000 Users)</span>
                  <p className="text-sm mt-1 text-ink-400 [html:not(.dark)_&]:text-paper-600">
                    Scale execution. Read database replica, deployment of perceptual caching to tackle inference cost spikes, active B2B contract onboarding.
                  </p>
                </div>
                <div className="p-3 border border-ink-800 [html:not(.dark)_&]:border-paper-200 rounded bg-ink-950/20">
                  <span className="text-xs font-semibold text-signal-400 uppercase font-mono">Stage 4 (10,000 Users)</span>
                  <p className="text-sm mt-1 text-ink-400 [html:not(.dark)_&]:text-paper-600">
                    High availability. Multi-zone load balancing, distributed query tracing, localized vision model evaluations, and offline route features.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Long-Term Roadmap Vision",
          content: (
            <div className="space-y-4">
              <p>
                Aspirational directions to scale visual independence:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Public Transport Companion:</strong> Live guidance for transit hubs (requires schedules and route data integrations).
                </li>
                <li>
                  <strong>Object Memory:</strong> Retaining spatial coordinates of common household items securely via user opt-in context blocks.
                </li>
                <li>
                  <strong>Wearables Integration:</strong> Smart glass integrations as form-factors mature to support hand-free operations.
                </li>
                <li>
                  <strong>Personalized Assistance:</strong> Adapting descriptive speed and information depth automatically to individual visual impairment needs.
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
  ];

  const activeDoc = (docs.find((d) => d.id === activeDocId) || docs[0]) as DocInfo;

  return (
    <section
      id="documentation"
      aria-labelledby="documentation-heading"
      className="py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            Resources & Insights
          </p>
          <h2
            id="documentation-heading"
            className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Deep Dives & Specifications
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-lg text-ink-400 [html:not(.dark)_&]:text-paper-400">
            Review our detailed financial model, architectural roadmap, and technical design documents.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {docs.map((doc) => {
            const isActive = doc.id === activeDocId;
            return (
              <div
                key={doc.id}
                className={cn(
                  "flex flex-col justify-between rounded-lg border p-6 transition-all duration-300",
                  isActive
                    ? "border-signal-500/50 bg-ink-950/40 shadow-md shadow-signal-500/5 [html:not(.dark)_&]:bg-paper-50"
                    : "border-ink-800 bg-ink-950/20 hover:border-ink-700 [html:not(.dark)_&]:border-paper-200 [html:not(.dark)_&]:bg-paper-50/30 [html:not(.dark)_&]:hover:border-paper-300"
                )}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-ink-900/50 p-2.5 [html:not(.dark)_&]:bg-paper-100">
                      {doc.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-signal-400">
                      Specification
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink-100 dark:text-ink-100 [html:not(.dark)_&]:text-paper-900">
                    {doc.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-400 [html:not(.dark)_&]:text-paper-400 line-clamp-3">
                    {doc.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveDocId(doc.id)}
                    className={cn(
                      "inline-flex h-9 w-full items-center justify-center rounded px-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-signal-500 text-ink-950 hover:bg-signal-400"
                        : "bg-ink-800 text-ink-100 hover:bg-ink-700 [html:not(.dark)_&]:bg-paper-200 [html:not(.dark)_&]:text-paper-900 [html:not(.dark)_&]:hover:bg-paper-300"
                    )}
                  >
                    {isActive ? "Viewing Summary" : "Explore Insights"}
                  </button>
                  <a
                    href={doc.downloadUrl}
                    download
                    className="inline-flex h-9 w-full items-center justify-center rounded border border-ink-800 text-xs font-medium text-ink-400 hover:border-ink-700 hover:text-ink-100 transition-colors [html:not(.dark)_&]:border-paper-200 [html:not(.dark)_&]:text-paper-400 [html:not(.dark)_&]:hover:border-paper-300 [html:not(.dark)_&]:hover:text-paper-900"
                  >
                    Download Full (.docx)
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Document Details Container */}
        <div className="mt-10 rounded-lg border border-ink-800 bg-ink-950/30 p-6 md:p-8 [html:not(.dark)_&]:border-paper-200 [html:not(.dark)_&]:bg-paper-50/20">
          <div>
            <span className="text-xs font-mono tracking-wider text-signal-400 uppercase">
              Interactive Preview
            </span>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink-100 dark:text-ink-100 [html:not(.dark)_&]:text-paper-900">
              {activeDoc.title}
            </h3>
            <p className="text-sm text-ink-400 [html:not(.dark)_&]:text-paper-400">
              {activeDoc.subtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {activeDoc.sections.slice(0, 2).map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-signal-400">
                  {section.title}
                </h4>
                <div className="text-base leading-relaxed text-ink-400 [html:not(.dark)_&]:text-paper-400">
                  {section.content}
                </div>
              </div>
            ))}
            {activeDoc.sections.slice(2, 4).map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-signal-400">
                  {section.title}
                </h4>
                <div className="text-base leading-relaxed text-ink-400 [html:not(.dark)_&]:text-paper-400">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
