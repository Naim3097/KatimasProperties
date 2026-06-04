"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * First-visit intro: a navy curtain with the brand mark and a filling rule,
 * then it lifts to reveal the page. Shows once per session; skipped under
 * reduced-motion. Page content renders underneath the whole time (SEO-safe).
 */
export function Loader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("katimas_intro")) return;
    setShow(true);
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem("katimas_intro", "1");
      setShow(false);
      document.documentElement.style.overflow = "";
    }, 1500);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 0.7, 0.2, 1] }}
          >
            <Image
              src="/logo/katimas-logo-white.png"
              alt="Katimas Properties"
              width={626}
              height={180}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
            <motion.div
              className="h-full bg-clay"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.1, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
