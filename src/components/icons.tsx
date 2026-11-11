import type { SVGProps } from "react";

/** Shared defaults for the line-style icons. */
function Line(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

/* ---- Core pillars ---------------------------------------------------- */
export const IconLand = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M3 7.5 9 4.5l6 3 6-3v12l-6 3-6-3-6 3v-12Z" />
    <path d="M9 4.5v12M15 7.5v12" />
  </Line>
);

export const IconManagement = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z" />
    <path d="M8 5H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2" />
    <path d="m9 13 1.8 1.8L14 11.5" />
  </Line>
);

export const IconConstruction = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M3 21h18" />
    <path d="M5 21V8l7-4 7 4v13" />
    <path d="M9.5 21v-4.5h5V21" />
    <path d="M9.5 11h0M14.5 11h0" />
  </Line>
);

/* ---- Values ---------------------------------------------------------- */
export const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Line>
);

export const IconGem = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M6 3h12l3 5-9 13L3 8l3-5Z" />
    <path d="M3 8h18M9 3 7.5 8 12 21l4.5-13L15 3" />
  </Line>
);

export const IconSpark = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    <circle cx="12" cy="12" r="2.5" />
  </Line>
);

export const IconLeaf = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14-1 0-1-1-1-1Z" />
    <path d="M5 19c2-4 5-7 9-9" />
  </Line>
);

export const IconUsers = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.9M17.5 14.4A5.5 5.5 0 0 1 20.5 20" />
  </Line>
);

/* ---- Land banking ---------------------------------------------------- */
export const IconCompass = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </Line>
);

export const IconGrowth = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M3 17 9 11l4 4 8-8" />
    <path d="M15 7h6v6" />
  </Line>
);

/* ---- About stats ----------------------------------------------------- */
export const IconCalendar = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
    <path d="m9.5 15 1.8 1.8 3.4-3.6" />
  </Line>
);

export const IconAward = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.6 13.4-1.6 7.1 5-2.6 5 2.6-1.6-7.1" />
    <path d="m12 6.5.8 1.7 1.8.2-1.3 1.2.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.2 1.8-.2.8-1.7Z" />
  </Line>
);

export const IconLayers = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </Line>
);

/* ---- Contact / footer ------------------------------------------------ */
export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M4 5c0-1 1-2 2-2h2l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V19c0 1-1 2-2 2A16 16 0 0 1 4 5Z" />
  </Line>
);

export const IconMail = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Line>
);

export const IconMapPin = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Line>
);

export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Line>
);

/* ---- UI -------------------------------------------------------------- */
export const IconArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </Line>
);

export const IconArrowUpRight = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Line>
);

export const IconChevronDown = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="m6 9 6 6 6-6" />
  </Line>
);

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Line>
);

export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Line>
);

export const IconClose = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Line>
);

export const IconQuote = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H6c0-1.5 1.5-2 4-2V7Zm11 0h-4a3 3 0 0 0-3 3v7h7v-7h-4c0-1.5 1.5-2 4-2V7Z" />
  </svg>
);

export const IconPlay = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5v7l5.5-3.5L10 8.5Z" fill="currentColor" stroke="none" />
  </Line>
);

/* ---- Social (brand glyphs) ------------------------------------------ */
export const IconFacebook = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
  </svg>
);

export const IconInstagram = (p: SVGProps<SVGSVGElement>) => (
  <Line {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </Line>
);

export const IconTiktok = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16.5 3c.43 2.3 1.86 3.94 4.2 4.18v3.02c-1.57 0-3.04-.5-4.27-1.38v6.3A5.91 5.91 0 1 1 10.5 9.3v3.13a2.83 2.83 0 1 0 2 2.7V3h4Z" />
  </svg>
);

export const socialIcon = {
  Facebook: IconFacebook,
  Instagram: IconInstagram,
  TikTok: IconTiktok,
} as const;
