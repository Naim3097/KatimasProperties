import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { IconArrowRight } from "./icons";

export type Discipline = {
  index: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

/**
 * The homepage's three disciplines as "product cards": a photo carrying an orange
 * tag, then the title, a short description and a link.
 */
export function DisciplineCards({ items }: { items: Discipline[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 90} className="h-full">
          <Link
            href={it.href}
            className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={it.image}
                alt={it.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-0 top-0 rounded-br-2xl bg-orange px-4 py-2 text-xs font-semibold tabular-nums tracking-wider text-white">
                {it.index}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="display text-2xl text-ink transition-colors duration-300 group-hover:text-brand">
                {it.title}
              </h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">
                {it.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange">
                Learn More
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
