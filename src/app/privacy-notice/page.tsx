import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { LegalBlocks } from "@/components/LegalBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { privacyNotice } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How Katimas Properties collects, uses, discloses and protects personal data in compliance with Malaysia's Personal Data Protection Act 2010 (PDPA).",
  alternates: { canonical: "/privacy-notice" },
  openGraph: {
    title: "Privacy Notice | Katimas Properties",
    description:
      "How Katimas Properties collects and handles personal data under the Personal Data Protection Act 2010 (PDPA).",
    url: "/privacy-notice",
  },
};

export default function PrivacyNoticePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Privacy Notice", path: "/privacy-notice" },
        ])}
      />

      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Notice" }]}
        eyebrow="Legal"
        title="Privacy Notice"
        subtitle="This Privacy Notice explains how we collect and handle your personal data."
      />

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav
              aria-label="Language"
              className="flex flex-wrap items-center gap-3 border-b border-line pb-6 text-sm"
            >
              <span className="text-muted">Read in:</span>
              {privacyNotice.map((v) => (
                <a
                  key={v.lang}
                  href={`#${v.lang}`}
                  className="rounded-full border border-line px-4 py-1.5 font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {v.label}
                </a>
              ))}
            </nav>

            {privacyNotice.map((v) => (
              <article key={v.lang} id={v.lang} lang={v.lang} className="scroll-mt-28 pt-12">
                <h2 className="display text-3xl text-ink">{v.label}</h2>
                <div className="mt-6">
                  <LegalBlocks blocks={v.intro} />
                </div>
                <div className="mt-10 space-y-10">
                  {v.sections.map((s, i) => (
                    <section key={s.heading}>
                      <h3 className="display text-xl leading-snug text-ink sm:text-2xl">
                        {i + 1}. {s.heading}
                      </h3>
                      <div className="mt-4">
                        <LegalBlocks blocks={s.blocks} />
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
