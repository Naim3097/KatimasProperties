"use client";

import { createElement, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Editorial line reveal: each line rises out of a clipped container with a
 * stagger. Pass an array of lines (each may contain inline JSX such as italics).
 *
 * Important: the IntersectionObserver is attached to the (always-visible)
 * heading element — NOT the translated inner lines. Those lines start clipped
 * outside their `overflow:hidden` parent, which would report zero visible area
 * and prevent a `whileInView` trigger from ever firing.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.09,
  duration = 0.85,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const show = reduce || inView;

  return createElement(
    Tag,
    { ref, className },
    lines.map((line, i) => (
      <span key={i} className={cn("block overflow-hidden pb-[0.08em]", lineClassName)}>
        <motion.span
          className="block"
          initial={false}
          animate={{ y: show ? "0%" : "115%" }}
          transition={{
            duration,
            ease: [0.22, 0.9, 0.25, 1],
            delay: show ? delay + i * stagger : 0,
          }}
        >
          {line}
        </motion.span>
      </span>
    )),
  );
}
