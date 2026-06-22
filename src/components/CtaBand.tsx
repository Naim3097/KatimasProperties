import Image from "next/image";
import { corporateCta } from "@/lib/site";
import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function CtaBand({
  headline = corporateCta.headline,
  subtext = corporateCta.subtext,
  ctaLabel = corporateCta.cta.label,
  ctaHref = corporateCta.cta.href,
  image,
  overlay = "brand",
}: {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  overlay?: "brand" | "orange";
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 lg:px-16 lg:py-20">
          {image ? (
            <>
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1280px) 1120px, 100vw"
                className="-z-20 object-cover"
              />
              <div
                className={`absolute inset-0 -z-10 ${overlay === "orange" ? "bg-orange/75" : "bg-brand/80"}`}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 -z-10 bg-brand" />
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-light/25 via-transparent to-brand-dark/50" />
              <span
                aria-hidden="true"
                className="display pointer-events-none absolute -right-6 -top-16 select-none text-[13rem] leading-none text-white/[0.06] lg:text-[17rem]"
              >
                K
              </span>
            </>
          )}
          <h2 className="display mx-auto max-w-2xl text-balance text-3xl leading-tight text-white sm:text-4xl">
            {headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
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
