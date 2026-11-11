import { Fragment } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { RevealLines } from "@/components/RevealLines";
import { Eyebrow } from "@/components/SectionHeading";
import { NumberTicker } from "@/components/NumberTicker";
import { Parallax } from "@/components/Parallax";
import { Magnetic } from "@/components/Magnetic";
import { Marquee } from "@/components/Marquee";
import { DisciplineCards, type Discipline } from "@/components/DisciplineCards";
import { FeatureProject } from "@/components/FeatureProject";
import { CtaBand } from "@/components/CtaBand";
import { HeroVideo } from "@/components/HeroVideo";
import { IconGrowth, IconCompass, IconUsers } from "@/components/icons";
import { heroHome, projects, landBanking, pillars } from "@/lib/site";

const stats = [
  { value: 2020, suffix: "", label: "Established in Sarawak", tick: false },
  { value: 30, suffix: "+", label: "Years of Team Experience", tick: true },
  { value: 400, suffix: "", label: "Acres of Land Bank", tick: true },
  { value: 100, suffix: "+", label: "Homes Delivered & Underway", tick: true },
];

const disciplines: Discipline[] = [
  {
    index: "01",
    title: "Strategic Land Banking",
    description: pillars[0].description,
    href: "/land-banking",
    image: "/visual/land.jpg",
    alt: "Aerial view of parcelled development land",
  },
  {
    index: "02",
    title: "Project Management",
    description: pillars[1].description,
    href: "/about",
    image: "/visual/project-management.jpg",
    alt: "A professional holding a scale model of a development",
  },
  {
    index: "03",
    title: "Construction Services",
    description: pillars[2].description,
    href: "/portfolio",
    image: "/visual/construction.jpg",
    alt: "Construction team at work inside a building under construction",
  },
];

const landIcons = [IconGrowth, IconCompass, IconUsers];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-brand">
        <div className="absolute inset-0 -z-10">
          <HeroVideo
            poster="/video/hero-poster.jpg"
            desktop="/video/hero.mp4"
            mobile="/video/hero-mobile.mp4"
          />
          <div className="absolute inset-0 bg-brand/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-brand/30" />
        </div>

        <Container>
          <div className="relative w-full pb-24 pt-32 lg:pb-28">
            <Reveal>
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                <span className="text-white">Est. 2020</span>
                <span className="h-px w-8 bg-white/40" />
                <span>Sarawak Property Developer</span>
              </div>
            </Reveal>

            <RevealLines
              as="h1"
              delay={0.45}
              className="display mt-7 text-[clamp(2.1rem,9vw,7rem)] font-medium leading-[0.95] tracking-[-0.03em] text-white text-shadow-hero"
              lines={[
                "Crafting Spaces",
                <Fragment key="line-2">
                  Where <span className="font-light italic">Life</span> Happens
                </Fragment>,
              ]}
            />

            <Reveal
              delay={700}
              className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
            >
              <p className="max-w-md text-pretty text-lg leading-relaxed text-white/85">
                {heroHome.subtitle}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Magnetic className="inline-block">
                  <Button href={heroHome.primaryCta.href} variant="orange" size="lg" withArrow>
                    {heroHome.primaryCta.label}
                  </Button>
                </Magnetic>
                <Button href={heroHome.secondaryCta.href} variant="outlineLight" size="lg">
                  {heroHome.secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center">
          <span className="flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-white/70">
            Scroll
            <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </span>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Introduction + stats                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white">
        {/* The contractor photo fills the section; the copy sits on its light right side. */}
        <div className="relative isolate overflow-hidden">
          <div className="relative aspect-[16/10] sm:aspect-[2/1] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
            <Image
              src="/visual/who-we-are-wide.jpg"
              alt="A Katimas Properties construction professional on a residential site"
              fill
              sizes="100vw"
              className="object-cover object-[left_30%]"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-white/25 to-white/90 lg:block" />
          </div>
          <Container>
            <div className="grid py-14 lg:min-h-[620px] lg:grid-cols-12 lg:items-center lg:py-24">
              <div className="lg:col-span-6 lg:col-start-7">
                <Eyebrow>Who We Are</Eyebrow>
                <Reveal className="mt-7">
                  <p className="display text-balance text-3xl leading-[1.25] text-ink sm:text-4xl lg:text-[2.6rem]">
                    A Sarawak-based developer, project-management specialist and main contractor —
                    turning prime land into communities where{" "}
                    <span className="italic text-brand">life happens</span>.
                  </p>
                </Reveal>
                <Reveal delay={150} className="mt-9">
                  <Button href="/about" variant="outline" withArrow className="bg-white/80">
                    More About Katimas
                  </Button>
                </Reveal>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-24 pt-14 lg:grid-cols-4 lg:pb-32 lg:pt-20">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="mb-5 h-px w-10 bg-clay" />
                <dt className="display text-5xl text-brand lg:text-6xl">
                  {s.tick ? (
                    <NumberTicker value={s.value} suffix={s.suffix} />
                  ) : (
                    `${s.value}${s.suffix}`
                  )}
                </dt>
                <dd className="mt-3 text-sm text-muted">{s.label}</dd>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Big display marquee */}
      <section className="overflow-hidden bg-orange py-9 lg:py-12">
        <Marquee
          big
          items={[
            "Property Development",
            "Project Management",
            "Land Banking",
            "Construction",
            "Sustainable Communities",
          ]}
        />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Expertise                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-sand py-24 lg:py-32">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="display mt-5 text-4xl text-ink sm:text-5xl">
                Three Disciplines, One Standard
              </h2>
            </div>
            <p className="max-w-sm text-pretty text-muted">
              From the ground we secure to the homes we build, every role carries the same precision.
            </p>
          </div>
          <div className="mt-14">
            <DisciplineCards items={disciplines} />
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Cinematic philosophy                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-brand py-28 text-white lg:py-40">
        <Parallax className="absolute inset-x-0 -top-[10%] -z-10 h-[120%]" distance={110}>
          <Image src="/visual/family.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </Parallax>
        <div className="absolute inset-0 -z-10 bg-brand/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand/80 via-brand/35 to-brand/55" />
        <Container>
          <Eyebrow tone="white">Our Philosophy</Eyebrow>
          <RevealLines
            as="p"
            className="display mt-7 max-w-4xl text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-white"
            lines={[
              "“Crafting Spaces",
              <Fragment key="line-2">
                Where <span className="font-light italic">Life</span>{" "}Happens.&rdquo;
              </Fragment>,
            ]}
          />
          <Reveal delay={300} className="mt-9 max-w-xl">
            <p className="text-lg leading-relaxed text-white/85">
              We go beyond construction to foster vibrant communities where individuals and families
              find a true sense of belonging and success.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Featured projects                                                */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="flex flex-col gap-5 border-b border-line pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <h2 className="display mt-5 text-4xl text-ink sm:text-5xl">
                Where We Deliver as the
                <br />
                Main Contractor
              </h2>
            </div>
            <p className="max-w-xs text-pretty text-muted">
              In collaboration with property developer KMS Maju Sdn. Bhd.
            </p>
          </div>

          <div className="mt-16 space-y-20 lg:space-y-28">
            {projects.map((p, i) => (
              <Reveal key={p.slug}>
                <FeatureProject project={p} index={i + 1} reversed={i % 2 === 1} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 flex flex-col gap-6 overflow-hidden rounded-[1.75rem] bg-katimas-blue px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between lg:px-12 lg:py-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
                On the Horizon
              </p>
              <h3 className="display mt-3 text-2xl lg:text-3xl">Katimas-Developed Projects</h3>
              <p className="mt-2 max-w-md text-sm text-white/70">
                Our own fully owned developments are taking shape — register to hear first.
              </p>
            </div>
            <Button href="/contact" variant="light" withArrow className="shrink-0">
              Register Interest
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Land banking                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-brand py-24 text-white lg:py-32">
        <Image src="/visual/land.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-brand/65" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand/90 via-brand/55 to-brand/40" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow tone="white">Land Banking</Eyebrow>
              <h2 className="display mt-6 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-[3.25rem]">
                <NumberTicker value={400} /> Acres, Positioned for Tomorrow
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
                {landBanking.hero.intro}
              </p>
              <div className="mt-9">
                <Button href="/land-banking" variant="light" withArrow>
                  Explore Land Banking
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {landBanking.whyItMatters.map((w, i) => {
                const Icon = landIcons[i] ?? IconGrowth;
                return (
                  <Reveal
                    key={w.title}
                    delay={i * 90}
                    className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="display text-lg text-white">{w.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/75">{w.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        headline="Let's Create Spaces Where Life Happens"
        subtext="Whether you are a landowner, investor or developer, we would love to explore how we can build something lasting together."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
        image="/visual/team.jpg"
        overlay="orange"
      />
    </>
  );
}
