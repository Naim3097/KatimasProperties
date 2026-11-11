import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { LegalBlocks } from "@/components/LegalBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { disclaimer } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for the Katimas Properties website, covering the use of its information, artist impressions, personal data and intellectual property.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer | Katimas Properties",
    description:
      "Terms covering the information, artist impressions and intellectual property on the Katimas Properties website.",
    url: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: "/disclaimer" },
        ])}
      />

      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
        eyebrow="Legal"
        title="Disclaimer"
      />

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <LegalBlocks blocks={disclaimer.blocks} />
          </div>
        </Container>
      </section>
    </>
  );
}
