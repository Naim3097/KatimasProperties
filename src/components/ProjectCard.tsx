import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";
import { cn } from "@/lib/cn";
import { IconArrowRight } from "./icons";

const accent: Record<Project["accent"], { text: string; dot: string; grad: string }> = {
  kasturi: {
    text: "text-kasturi",
    dot: "bg-kasturi",
    grad: "from-[#3a2218] to-[#9a462a]",
  },
  lumina: {
    text: "text-lumina",
    dot: "bg-lumina",
    grad: "from-[#7a3d12] to-[#df7a26]",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const a = accent[project.accent];
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      {/* Visual */}
      <div className="relative aspect-[16/11] overflow-hidden">
        {project.galleryAvailable ? (
          <Image
            src={project.hero}
            alt={`${project.name} — ${project.propertyType}`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={cn("flex h-full w-full items-center justify-center bg-gradient-to-br", a.grad)}>
            <Image
              src={project.logo}
              alt={project.name}
              width={448}
              height={260}
              className="h-auto w-48 opacity-95 brightness-0 invert"
            />
          </div>
        )}
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink backdrop-blur">
          <span className={cn("h-1.5 w-1.5 rounded-full", a.dot)} />
          {project.role}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted">
          <span className={cn("font-semibold", a.text)}>{project.scale}</span>
          <span className="h-1 w-1 rounded-full bg-line" />
          <span>{project.propertyType}</span>
        </div>
        <h3 className="display mt-3 text-2xl text-ink lg:text-[1.7rem]">{project.name}</h3>
        <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
          <span className="text-xs font-medium text-muted">{project.status}</span>
          <span className={cn("inline-flex items-center gap-2 text-sm font-semibold", a.text)}>
            View Project Details
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
