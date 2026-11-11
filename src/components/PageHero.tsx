import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";
import { HeroVideo } from "./HeroVideo";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  video,
  breadcrumb,
  align = "left",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  /** Muted background video (like the homepage hero); takes precedence over `image`. */
  video?: { poster: string; desktop: string; mobile: string };
  breadcrumb?: Crumb[];
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {video ? (
        <>
          <HeroVideo poster={video.poster} desktop={video.desktop} mobile={video.mobile} />
          {/* Logo-blue wash as on the homepage hero, deepened on the text side. */}
          <div className="absolute inset-0 bg-brand/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/80 via-brand/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/30" />
        </>
      ) : image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-700 via-navy to-navy" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-clay/50 to-transparent" />
        </>
      )}

      <Container>
        <div
          className={cn(
            "relative pb-16 pt-36 sm:pb-20 lg:pb-28 lg:pt-48",
            centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
          )}
        >
          {breadcrumb && (
            <nav
              aria-label="Breadcrumb"
              className={cn(
                "mb-6 flex flex-wrap items-center gap-2 text-sm text-white/55",
                centered && "justify-center",
              )}
            >
              {breadcrumb.map((c, i) => (
                <span key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && (
                    <span className="text-white/30" aria-hidden="true">
                      /
                    </span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {eyebrow && (
            <div className={cn("mb-5", centered && "flex justify-center")}>
              <Eyebrow tone="white">{eyebrow}</Eyebrow>
            </div>
          )}

          <h1 className="display text-balance text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p
              className={cn(
                "mt-6 text-pretty text-lg leading-relaxed text-white/75",
                centered ? "mx-auto max-w-2xl" : "max-w-2xl",
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
