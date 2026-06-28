import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How EchoSight handles the information it needs to work.",
};

/**
 * Privacy page.
 *
 * Written using only what's been explicitly confirmed elsewhere in
 * this project: camera input is processed to generate descriptions,
 * the app currently requires an internet connection, and the SOS
 * feature shares live location with a trusted contact when used.
 * Anything not confirmed (data retention period, whether images are
 * stored after processing, third-party sub-processors, regional
 * compliance specifics) is explicitly named as undecided/unspecified
 * rather than filled in with plausible-sounding boilerplate — the
 * same standard this project has held to everywhere else.
 *
 * This is not a substitute for an actual reviewed legal privacy
 * policy, and says so directly on the page — a real one should be
 * drafted with a lawyer before this site handles real user data.
 */
export default function PrivacyPage() {
  return (
    <div className="py-32 md:py-40">
      <Container>
        <div className="mx-auto max-w-prose">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-signal-400">
            Privacy
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            What EchoSight does with what it sees.
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-400 [html:not(.dark)_&]:text-paper-400">
            <p>
              EchoSight works by looking at what your camera sees and
              turning it into a spoken description. To do that, the
              app currently needs an internet connection &mdash;
              there is no offline mode yet, so camera input is sent
              elsewhere to be processed rather than handled entirely
              on your device.
            </p>
            <p>
              If you use the SOS feature, EchoSight shares your live
              location with a contact you&apos;ve chosen, so they can
              find or reach you.
            </p>
            <p>
              That&apos;s what we can confirm today. We haven&apos;t
              yet finalized details like how long data is kept, where
              it&apos;s stored, or whether any third-party services
              are involved in processing it &mdash; and we&apos;d
              rather say that plainly than guess. This page will be
              updated as those decisions are made.
            </p>
          </div>

          <div className="mt-12 rounded-md border border-amber-600/30 bg-amber-500/10 p-5">
            <p className="text-sm leading-relaxed text-ink-100 [html:not(.dark)_&]:text-paper-900">
              <strong className="font-semibold">A note on this page:</strong>{" "}
              this is a plain-language description, not a formal
              legal privacy policy. It hasn&apos;t been reviewed by a
              lawyer, and shouldn&apos;t be relied on as one.
            </p>
          </div>

          <p className="mt-12 text-base">
            <Link
              href="/"
              className="text-signal-400 underline-offset-4 hover:underline"
            >
              Back to home
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
