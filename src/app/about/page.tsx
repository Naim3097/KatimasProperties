import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import {
  IconQuote,
  IconCompass,
  IconCheck,
  IconShield,
  IconGem,
  IconSpark,
  IconLeaf,
  IconUsers,
} from "@/components/icons";
import { about, values, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Established in 2020, Katimas Properties is a Sarawak-based property developer, project-management specialist and main contractor, backed by a team with over 30 years of combined experience.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Katimas Properties",
    description:
      "A dynamic, Sarawak-based property developer, project-management specialist and strategic land-banking expert, established in 2020.",
    url: "/about",
  },
};

const valueIcon: Record<string, typeof IconShield> = {
  Integrity: IconShield,
  Excellence: IconGem,
  Innovation: IconSpark,
  Sustainability: IconLeaf,
  Community: IconUsers,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />

      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        eyebrow="About Katimas Properties"
        title="Building visions into reality across Sarawak"
        subtitle="A dynamic property developer, project-management specialist and strategic land-banking expert — established in 2020 and driven by a team with decades of industry experience."
        image="/projects/kasa-kasturi/master-room.jpg"
        imageAlt="Refined interior of a Katimas-delivered home"
      />

      {/* Who we are */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Who We Are"
                title="A developer and construction collaborator in equal measure"
              />
              <div className="mt-7 space-y-5 text-pretty text-base leading-relaxed text-muted lg:text-lg">
                <p>{about.intro}</p>
                <p>
                  This dual capability lets us move fluidly between leading our own
                  developments and partnering as a premier main contractor — bringing the
                  same discipline, precision and care to every role we take on.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid h-full grid-cols-2 gap-4">
                {[
                  { value: "2020", label: "Year established" },
                  { value: "30+", label: "Years of combined experience" },
                  { value: "Kuching", label: "Home base in Sarawak" },
                  { value: "Dual", label: "Developer & main contractor" },
                ].map((s) => (
                  <Reveal
                    key={s.label}
                    className="flex flex-col justify-center rounded-2xl border border-line bg-sand p-6"
                  >
                    <p className="display text-2xl text-brand lg:text-3xl">{s.value}</p>
                    <p className="mt-2 text-sm text-muted">{s.label}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-sand py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-clay/12 text-clay">
              <IconQuote className="h-7 w-7" />
            </span>
            <Eyebrow tone="clay" centered className="mt-7">
              Our Philosophy
            </Eyebrow>
            <p className="display mt-6 text-balance text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              “Crafting Spaces Where Life Happens”
            </p>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted lg:text-lg">
              {about.philosophy}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-7 lg:grid-cols-2">
            {/* Vision */}
            <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-navy p-9 text-white lg:p-12">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-700 to-navy" />
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 p-3 text-white">
                <IconCompass className="h-7 w-7" />
              </span>
              <h2 className="display mt-6 text-2xl lg:text-3xl">Our Vision</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-white/80">
                {about.vision}
              </p>
            </Reveal>

            {/* Mission */}
            <Reveal className="rounded-[2rem] border border-line bg-sand p-9 lg:p-12">
              <Eyebrow tone="clay">Our Mission</Eyebrow>
              <h2 className="display mt-5 text-2xl text-ink lg:text-3xl">
                What we set out to achieve
              </h2>
              <ul className="mt-7 space-y-5">
                {about.mission.map((m) => (
                  <li key={m} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-pretty text-base leading-relaxed text-ink">{m}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our Values"
            title="The pillars behind every decision"
            intro="Five principles guide how we develop, manage and build — and how we show up for the communities we serve."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => {
              const Icon = valueIcon[v.title] ?? IconShield;
              return (
                <Reveal
                  key={v.title}
                  delay={i * 70}
                  className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 text-center"
                >
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="display mt-5 text-lg text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Partner with a team that builds with purpose"
        subtext={`Discover how ${siteConfig.name} can bring precision and care to your next development.`}
        ctaLabel="Contact Our Team"
        ctaHref="/contact"
      />
    </>
  );
}
