import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { IconCheck, IconGrowth, IconCompass, IconUsers } from "@/components/icons";
import { landBanking } from "@/lib/site";

export const metadata: Metadata = {
  title: "Land Banking",
  description:
    "Katimas Properties holds 400 acres of strategically located land, positioned for residential, mixed-use and sustainable development across Sarawak's growth corridors.",
  alternates: { canonical: "/land-banking" },
  openGraph: {
    title: "Land Banking | Katimas Properties",
    description:
      "400 acres of prime land, strategically positioned to shape regional development and create lasting value.",
    url: "/land-banking",
  },
};

const whyIcons = [IconGrowth, IconCompass, IconUsers];

export default function LandBankingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Land Banking", path: "/land-banking" },
        ])}
      />

      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Land Banking" }]}
        eyebrow="Land Banking"
        title="Building Tomorrow, Today"
        subtitle={landBanking.hero.intro}
        image={landBanking.heroImage}
        imageAlt="Aerial view of prime development land"
      />

      {/* Our land bank */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative isolate overflow-hidden rounded-[2rem] p-10 text-white lg:p-14">
              <Image
                src={landBanking.parcelImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="-z-20 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/70" />
              <p className="display text-7xl leading-none lg:text-8xl">{landBanking.acres}</p>
              <p className="mt-3 text-lg font-semibold uppercase tracking-wider text-white/70">
                Acres of prime land
              </p>
              <p className="mt-6 max-w-sm text-pretty leading-relaxed text-white/70">
                Strategically located and carefully selected for development potential,
                accessibility and lasting community impact.
              </p>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Our Land Bank"
                title="Land positioned for what's next"
              />
              <ul className="mt-8 space-y-5">
                {landBanking.bankPoints.map((point) => (
                  <li key={point} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-pretty text-base leading-relaxed text-ink">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-l-2 border-clay pl-5 text-pretty text-base italic leading-relaxed text-muted">
                {landBanking.bankSummary}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Active expansion */}
      <section className="bg-sand py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Active Expansion"
            title="Strategic acquisitions, actively sought"
            intro="With a keen eye for expansion, we continuously strengthen our foundation for future projects. Katimas Properties is actively seeking:"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {landBanking.expansion.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 90}
                className="flex h-full flex-col rounded-2xl border border-line bg-white p-8"
              >
                <span className="display text-3xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-pretty text-base leading-relaxed text-ink">{item}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Why Land Banking Matters"
            title="A foundation for the decade ahead"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {landBanking.whyItMatters.map((w, i) => {
              const Icon = whyIcons[i] ?? IconGrowth;
              return (
                <Reveal
                  key={w.title}
                  delay={i * 90}
                  className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-sand p-8"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="display mt-6 text-xl text-ink">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{w.description}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Partner with us */}
      <section className="bg-white pb-24">
        <Container>
          <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24">
            <Image
              src="/land/parcel.jpg"
              alt=""
              fill
              sizes="100vw"
              className="-z-10 object-cover opacity-20"
            />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/90 to-navy/75" />
            <Eyebrow tone="white" centered>
              Partner With Us
            </Eyebrow>
            <h2 className="display mx-auto mt-6 max-w-3xl text-balance text-3xl leading-tight text-white sm:text-4xl lg:text-[2.85rem]">
              Looking to explore collaborations or acquisition opportunities?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
              We seek collaborations with landowners, investors and partners who share our vision
              for Malaysia's property landscape. Together, we can create valuable, sustainable
              developments that enrich communities.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" variant="light" size="lg" withArrow>
                Contact Us Today
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
