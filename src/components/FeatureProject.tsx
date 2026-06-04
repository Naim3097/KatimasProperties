import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";
import { cn } from "@/lib/cn";
import { IconArrowRight } from "./icons";

const accent: Record<Project["accent"], string> = {
  kasturi: "text-kasturi",
  lumina: "text-lumina",
};
const accentDot: Record<Project["accent"], string> = {
  kasturi: "bg-kasturi",
  lumina: "bg-lumina",
};

/** Large, editorial, alternating project feature for the homepage. */
export function FeatureProject({
  project,
  index,
  reversed = false,
}: {
  project: Project;
  index: number;
  reversed?: boolean;
}) {
  return (
    <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <Link
        href={`/portfolio/${project.slug}`}
        className={cn(
          "relative block aspect-[16/11] overflow-hidden rounded-[1.75rem] lg:col-span-7",
          reversed && "lg:order-2",
        )}
      >
        <Image
          src={project.hero}
          alt={`${project.name} — ${project.propertyType}`}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink backdrop-blur">
          <span className={cn("h-1.5 w-1.5 rounded-full", accentDot[project.accent])} />
          {project.role}
        </span>
      </Link>

      <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
        <span className="display text-5xl text-line lg:text-6xl">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="display mt-4 text-4xl text-ink lg:text-5xl">{project.name}</h3>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted">Scale</dt>
            <dd className="mt-1 font-semibold text-ink">{project.scale}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted">Status</dt>
            <dd className="mt-1 font-semibold text-ink">{project.status}</dd>
          </div>
        </dl>

        <Link
          href={`/portfolio/${project.slug}`}
          className={cn(
            "mt-8 inline-flex items-center gap-2 text-sm font-semibold",
            accent[project.accent],
          )}
        >
          View Project Details
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
