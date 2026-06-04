import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "clay" | "brand" | "kasturi" | "lumina" | "white";

const toneText: Record<Tone, string> = {
  clay: "text-clay",
  brand: "text-brand",
  kasturi: "text-kasturi",
  lumina: "text-lumina",
  white: "text-white/80",
};

export function Eyebrow({
  children,
  tone = "clay",
  className,
  centered = false,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  centered?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
        toneText[tone],
        centered && "justify-center",
        className,
      )}
    >
      <span className="h-px w-7 bg-current opacity-50" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "clay",
  align = "left",
  inverted = false,
  className,
  titleClassName,
  as: Tag = "h2",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
  titleClassName?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        centered ? "mx-auto max-w-2xl" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={inverted ? "white" : tone} centered={centered}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          "display text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-[2.85rem]",
          inverted ? "text-white" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed sm:text-lg",
            inverted ? "text-white/70" : "text-muted",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
