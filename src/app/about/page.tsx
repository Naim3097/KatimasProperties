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
  IconShield,
  IconGem,
  IconSpark,
  IconLeaf,
  IconUsers,
  IconCalendar,
  IconAward,
  IconMapPin,
  IconLayers,
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

const stats = [
  { value: "2020", label: "Year established", icon: IconCalendar, bg: "bg-katimas-blue" },
  { value: "30+", label: "Years of combined experience", icon: IconAward, bg: "bg-orange" },
  { value: "Kuching", label: "Home base in Sarawak", icon: IconMapPin, bg: "bg-katimas-cyan" },
  { value: "Dual", label: "Developer & main contractor", icon: IconLayers, bg: "bg-katimas-green" },
];

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
        video={{
          poster: "/video/hero-poster.jpg",
          desktop: "/video/hero.mp4",
          mobile: "/video/hero-mobile.mp4",
        }}
      />

      {/* Who we are */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <Image
          src="/visual/about-who-we-are.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/50" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Who We Are"
                title="A developer and construction collaborator in equal measure"
              />
              <div className="mt-7 space-y-5 text-pretty text-base leading-relaxed text-charcoal lg:text-lg">
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
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal
                      key={s.label}
                      delay={i * 70}
                      className={`flex flex-col justify-center rounded-2xl p-6 text-white shadow-soft ${s.bg}`}
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                        <Icon className="h-6 w-6" />
                      </span>
                      <p className="display mt-5 text-2xl lg:text-3xl">{s.value}</p>
                      <p className="mt-1.5 text-sm font-medium leading-snug">{s.label}</p>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="relative isolate overflow-hidden py-24 lg:py-32">
        <Image
          src="/visual/about-philosophy.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-brand/70" />
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
              <IconQuote className="h-7 w-7" />
            </span>
            <Eyebrow tone="white" centered className="mt-7">
              Our Philosophy
            </Eyebrow>
            <p className="display mt-6 text-balance text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              “Crafting Spaces Where Life Happens”
            </p>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/90 lg:text-lg">
              {about.philosophy}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Vision & Mission — photo / colour panels meeting on a diagonal */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal className="overflow-hidden rounded-[2rem]">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src="/visual/about-vision.jpg"
                  alt="Architects reviewing plans inside a building under construction"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 flex flex-col justify-center bg-katimas-cyan px-8 py-12 text-white sm:px-12 lg:-ml-16 lg:py-16 lg:pl-28 lg:pr-14 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
                <h2 className="display text-3xl lg:text-4xl">Our Vision</h2>
                <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-white/95">
                  {about.vision}
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-center bg-orange px-8 py-12 text-white sm:px-12 lg:-mr-16 lg:py-16 lg:pl-14 lg:pr-28 lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">
                <h2 className="display text-3xl lg:text-4xl">What We Set Out to Achieve</h2>
                <ul className="mt-6 space-y-4">
                  {about.mission.map((m) => (
                    <li key={m} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      <span className="text-pretty text-base leading-relaxed text-white/95 lg:text-lg">
                        {m}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src="/visual/about-mission.jpg"
                  alt="A site engineer studying construction drawings"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="relative isolate overflow-hidden py-20 lg:py-28">
        <Image
          src="/visual/about-values.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy/75" />
        <Container>
          <SectionHeading
            align="center"
            inverted
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
                  className="flex h-full flex-col rounded-2xl bg-white p-7 text-center shadow-soft"
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
