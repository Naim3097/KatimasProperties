import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { IconArrowRight, IconArrowUpRight, IconPlay } from "@/components/icons";
import { projects, getProject } from "@/lib/site";

const accentMap = {
  kasturi: {
    text: "text-kasturi",
    bg: "bg-kasturi",
    border: "border-kasturi",
    grad: "from-[#2b1a12] via-[#6a3420] to-[#9a462a]",
    eyebrow: "kasturi" as const,
  },
  lumina: {
    text: "text-lumina",
    bg: "bg-lumina",
    border: "border-lumina",
    grad: "from-[#34200c] via-[#8a4a18] to-[#df7a26]",
    eyebrow: "lumina" as const,
  },
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.role}`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.name} | Katimas Properties`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
      images: project.galleryAvailable ? [{ url: project.hero, width: 1800, height: 1238 }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const a = accentMap[project.accent];
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Our Portfolio", path: "/portfolio" },
          { name: project.name, path: `/portfolio/${project.slug}` },
        ])}
      />

      {/* ---- Hero ---- */}
      <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-navy lg:min-h-[80vh]">
        {project.galleryAvailable ? (
          <>
            <Image
              src={project.hero}
              alt={`${project.name} development`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-navy/30" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${a.grad}`} />
        )}

        <Container>
          <div className="relative pb-14 pt-36 lg:pb-20 lg:pt-44">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60"
            >
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="text-white/30">/</span>
              <Link href="/portfolio" className="hover:text-white">Our Portfolio</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/85">{project.name}</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              <span className={`h-1.5 w-1.5 rounded-full ${a.bg}`} />
              Our Role · {project.role}
            </span>

            <h1 className="display mt-6 text-balance text-5xl leading-[1.05] text-white text-shadow-hero sm:text-6xl lg:text-7xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-white/80">{project.tagline}</p>
          </div>
        </Container>
      </section>

      {/* ---- Overview & metrics ---- */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow tone={a.eyebrow}>Project Overview</Eyebrow>
              <h2 className="display mt-5 text-3xl leading-tight text-ink sm:text-4xl">
                The brief
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted lg:text-lg">
                {project.brief}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="primary" withArrow>
                  Discuss Your Project
                </Button>
                {project.galleryAvailable && (
                  <Button href="#gallery" variant="outline">
                    View the Gallery
                  </Button>
                )}
              </div>
            </div>

            {/* Framework grid */}
            <div className="lg:col-span-5">
              <div className={`rounded-[2rem] border border-line border-t-4 ${a.border} bg-sand p-8 lg:p-9`}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Project Framework
                </h3>
                <dl className="mt-6 divide-y divide-line">
                  {project.highlights.map((h) => (
                    <div key={h.label} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                        {h.label}
                      </dt>
                      <dd className="text-pretty text-base font-semibold text-ink">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Gallery ---- */}
      <section id="gallery" className="scroll-mt-24 bg-sand py-20 lg:py-28">
        <Container>
          <Eyebrow tone={a.eyebrow}>Property Gallery</Eyebrow>
          <h2 className="display mt-5 max-w-2xl text-3xl leading-tight text-ink sm:text-4xl">
            {project.representative
              ? "A glimpse of the vision"
              : project.galleryAvailable
                ? "A closer look at the finished development"
                : "Imagery is on its way"}
          </h2>
          {project.representative && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Representative imagery shown — the developer&rsquo;s final 3D renders for {project.name}{" "}
              will appear here once available.
            </p>
          )}

          {project.galleryAvailable ? (
            <div className="mt-12 space-y-4">
              {project.video && (
                <Reveal className="group relative overflow-hidden rounded-[1.25rem]">
                  <video
                    className="aspect-video w-full object-cover"
                    poster={project.video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="none"
                  >
                    <source src={project.video.src} type="video/mp4" />
                  </video>
                  <span className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/45 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                    <IconPlay className="h-4 w-4" /> Walkthrough
                  </span>
                </Reveal>
              )}

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {project.gallery.map((img, i) => (
                  <Reveal
                    key={img.src}
                    delay={(i % 3) * 80}
                    className={`group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] ${
                      i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto" : ""
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          ) : (
            <div
              className={`mt-12 flex flex-col items-center justify-center gap-6 rounded-[2rem] bg-gradient-to-br ${a.grad} px-6 py-20 text-center`}
            >
              <Image
                src={project.logo}
                alt={project.name}
                width={448}
                height={260}
                className="h-auto w-56 brightness-0 invert"
              />
              <p className="max-w-md text-pretty text-white/85">
                3D renders and photography for {project.name} are being prepared and will appear
                here soon. In the meantime, reach out to learn more about the development.
              </p>
              <Button href="/contact" variant="light" withArrow>
                Enquire About {project.name}
              </Button>
            </div>
          )}
        </Container>
      </section>

      <CtaBand />

      {/* ---- Cross navigation ---- */}
      <section className="bg-white pb-24">
        <Container>
          <div className="flex items-center justify-between border-b border-line pb-6">
            <h2 className="display text-2xl text-ink lg:text-3xl">View more from our portfolio</h2>
            <Link
              href="/portfolio"
              className="hidden items-center gap-2 text-sm font-semibold text-brand sm:inline-flex"
            >
              All projects
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
