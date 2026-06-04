import { corporateCta } from "@/lib/site";
import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function CtaBand({
  headline = corporateCta.headline,
  subtext = corporateCta.subtext,
  ctaLabel = corporateCta.cta.label,
  ctaHref = corporateCta.cta.href,
}: {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-brand px-6 py-16 text-center sm:px-12 lg:px-16 lg:py-20">
          {/* Editorial accents */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-light/25 via-transparent to-brand-dark/50" />
          <span
            aria-hidden="true"
            className="display pointer-events-none absolute -right-6 -top-16 select-none text-[13rem] leading-none text-white/[0.06] lg:text-[17rem]"
          >
            K
          </span>
          <h2 className="display mx-auto max-w-2xl text-balance text-3xl leading-tight text-white sm:text-4xl">
            {headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {subtext}
          </p>
          <div className="mt-9 flex justify-center">
            <Button href={ctaHref} variant="light" size="lg" withArrow>
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
