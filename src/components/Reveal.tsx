"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const tags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
  figure: motion.figure,
} as const;

/**
 * Fades + lifts its children into view on scroll (Motion `whileInView`,
 * fires once). Honors reduced-motion. `delay` is in milliseconds.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof tags;
}) {
  const reduce = useReducedMotion();
  const M = tags[as];

  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 0.7, 0.2, 1], delay: delay / 1000 }}
    >
      {children}
    </M>
  );
}
