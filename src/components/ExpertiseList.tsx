"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { IconArrowUpRight } from "./icons";

export type ExpertiseItem = {
  index: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

/**
 * Editorial index of capabilities. Hovering a row reveals its image in the
 * sticky panel (desktop); on mobile each row carries its own image.
 */
export function ExpertiseList({ items }: { items: ExpertiseItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        {items.map((it, i) => (
          <Link
            key={it.title}
            href={it.href}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className="group/row block border-t border-line/80 py-8 last:border-b"
          >
            <div className="flex items-center gap-5">
              <span className="text-sm font-medium tabular-nums text-clay">{it.index}</span>
              <h3
                className={cn(
                  "display text-3xl transition-colors duration-300 sm:text-4xl lg:text-[2.75rem]",
                  i === active ? "text-brand" : "text-ink group-hover/row:text-brand",
                )}
              >
                {it.title}
              </h3>
              <IconArrowUpRight className="ml-auto h-6 w-6 shrink-0 -translate-x-1 text-muted opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:text-brand group-hover/row:opacity-100" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:pl-10">
              {it.description}
            </p>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl sm:ml-10 lg:hidden">
              <Image src={it.image} alt={it.alt} fill sizes="100vw" className="object-cover" />
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop sticky preview */}
      <div className="hidden lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[2rem]">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
              )}
            >
              <Image src={it.image} alt={it.alt} fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
