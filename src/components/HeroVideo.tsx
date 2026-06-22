"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Background hero video: poster paints instantly (good LCP), then an autoplay,
 * muted, looping video layers over it. Picks a smaller file on phones, and
 * shows only the poster under reduced-motion or Data Saver.
 */
export function HeroVideo({
  poster,
  desktop,
  mobile,
}: {
  poster: string;
  desktop: string;
  mobile: string;
}) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduce || conn?.saveData) return; // poster only
    setSrc(window.matchMedia("(max-width: 640px)").matches ? mobile : desktop);
  }, [desktop, mobile]);

  return (
    <>
      <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover" />
      {src && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  );
}
