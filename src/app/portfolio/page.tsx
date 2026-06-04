import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore the residential developments Katimas Properties has delivered as main contractor, including Kasa Kasturi and Kasa Lumina in Kuching, Sarawak.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Our Portfolio | Katimas Properties",
    description:
      "Residential developments delivered through our specialised construction expertise as main contractor.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Our Portfolio", path: "/portfolio" },
        ])}
      />

      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Portfolio" }]}
        eyebrow="Our Portfolio"
        title="A portfolio built on precision"
        subtitle="From foundation to handover, we bring developers’ visions to life with quality craftsmanship and disciplined delivery — proven across our work as main contractor."
        image="/projects/kasa-kasturi/exterior.jpg"
        imageAlt="Completed Kasa Kasturi terrace development"
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-5 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Main Contractor"
              title="Selected developments"
              intro="Delivered in collaboration with property developer KMS Maju Sdn. Bhd., where Katimas Properties served as the specialised main contractor."
            />
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {/* Own developments — coming soon */}
          <Reveal className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-sand">
            <div className="flex flex-col items-start gap-6 p-9 sm:flex-row sm:items-center sm:justify-between lg:p-12">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-clay">
                  On the horizon
                </p>
                <h3 className="display mt-3 text-2xl text-ink lg:text-[1.7rem]">
                  Katimas-developed projects
                </h3>
                <p className="mt-3 text-pretty text-base leading-relaxed text-muted">
                  Beyond our contracting collaborations, our own fully owned developments are
                  taking shape. Register your interest to be the first to hear as they launch.
                </p>
              </div>
              <Button href="/contact" variant="primary" withArrow className="shrink-0">
                Register Interest
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
