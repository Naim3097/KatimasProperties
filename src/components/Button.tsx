import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconArrowRight } from "./icons";

type Variant = "primary" | "light" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none disabled:opacity-60";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-8 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark shadow-soft hover:shadow-lift",
  light: "bg-white text-ink hover:bg-sand shadow-soft hover:shadow-lift",
  outline: "border border-line text-ink hover:border-brand hover:text-brand",
  outlineLight: "border border-white/45 text-white hover:bg-white hover:text-ink",
  ghost: "text-brand hover:text-brand-dark px-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  const isExternal = /^(https?:|tel:|mailto:|#)/.test(href);
  if (isExternal) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
