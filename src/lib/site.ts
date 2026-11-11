/**
 * Central content + configuration for the Katimas Properties website.
 * Editing copy, contact details, navigation, or project data here updates
 * the whole site. Keeping it in one typed module keeps the pages declarative.
 */

export const siteConfig = {
  name: "Katimas Properties",
  legalName: "Katimas Properties Sdn. Bhd.",
  registration: "202001027194 (1383514-M)",
  /** Used for canonical URLs, sitemap and Open Graph. Update if the domain differs. */
  url: "https://www.katimasproperties.com.my",
  tagline: "Crafting Spaces Where Life Happens",
  description:
    "Katimas Properties is a Sarawak-based property developer, project-management specialist and strategic land-banking firm, creating quality spaces and vibrant communities across Kuching and beyond.",
  established: 2020,
  copyrightYear: 2026,
} as const;

export const contact = {
  addressLines: [
    "Level 2, Lot 32 & 33, Block B2",
    "Saradise, 93350 Kuching",
    "Sarawak, Malaysia",
  ],
  addressInline:
    "Level 2, Lot 32 & 33, Block B2, Saradise, 93350 Kuching, Sarawak, Malaysia",
  phoneDisplay: "082-555 770",
  phoneHref: "tel:+60825557770",
  email: "hello@katimasproperties.com.my",
  hours: [
    { days: "Monday – Friday", time: "8:30am – 5:45pm" },
    { days: "Sunday & Public Holidays", time: "Closed" },
  ],
} as const;

export type SocialLink = {
  name: "Facebook" | "Instagram" | "TikTok";
  href: string;
  handle: string;
};

// TODO: replace "#" with the client's real social profile URLs.
export const socials: SocialLink[] = [
  { name: "Facebook", href: "#", handle: "Katimas Properties" },
  { name: "Instagram", href: "#", handle: "@katimasproperties" },
  { name: "TikTok", href: "#", handle: "@katimasproperties" },
];

/** Legal pages; their wording lives in `src/lib/legal.ts`. */
export const legalLinks = {
  privacy: "/privacy-notice",
  disclaimer: "/disclaimer",
} as const;

export type NavChild = { label: string; href: string; note?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Portfolio",
    href: "/portfolio",
    children: [
      { label: "Portfolio Overview", href: "/portfolio" },
      { label: "Kasa Luma", href: "/portfolio/kasa-luma", note: "Main Contractor" },
      { label: "Kasa Lumina", href: "/portfolio/kasa-lumina", note: "Main Contractor" },
      { label: "Kasa Kasturi", href: "/portfolio/kasa-kasturi", note: "Main Contractor" },
    ],
  },
  { label: "Land Banking", href: "/land-banking" },
  { label: "Contact Us", href: "/contact" },
];

/* ----------------------------------------------------------------------- */
/* Home                                                                    */
/* ----------------------------------------------------------------------- */

export const heroHome = {
  eyebrow: "Sarawak Property Developer · Est. 2020",
  title: "Crafting Spaces Where Life Happens",
  subtitle:
    "At Katimas Properties, we go beyond buildings to create vibrant communities. We deliver quality spaces that enrich lives through trusted project management and future-ready construction.",
  primaryCta: { label: "Discover More", href: "/about" },
  secondaryCta: { label: "View Our Portfolio", href: "/portfolio" },
};

export type Pillar = {
  icon: "land" | "management" | "construction";
  title: string;
  description: string;
  href: string;
};

export const pillars: Pillar[] = [
  {
    icon: "land",
    title: "Strategic Land Banking",
    description:
      "Securing and managing prime assets across Kuching to shape the built environment and unlock long-term value.",
    href: "/land-banking",
  },
  {
    icon: "management",
    title: "Project Management",
    description:
      "End-to-end management from concept to completion, delivered with elite operational precision and discipline.",
    href: "/about",
  },
  {
    icon: "construction",
    title: "Construction Services",
    description:
      "Acting as a specialised main contractor to bring high-value residential developments to life with quality craftsmanship.",
    href: "/portfolio",
  },
];

/* ----------------------------------------------------------------------- */
/* About                                                                   */
/* ----------------------------------------------------------------------- */

export const about = {
  intro:
    "Katimas Properties Sdn. Bhd. is a dynamic, Sarawak-based property developer, project-management specialist and strategic land-banking expert, established in 2020. Backed by an elite project-management team with over 30 years of combined industry experience, we transform visions into reality through our dual capabilities as an independent developer and a premier construction collaborator.",
  philosophy:
    "More than a motto, “Crafting Spaces Where Life Happens” is the core philosophy guiding every Katimas Properties endeavour. We go beyond construction to foster vibrant, holistic communities where individuals and families find a true sense of belonging and success. Across all our development, management and contracting roles, our goal is to create distinctive spaces that enhance the quality of life for all Sarawakians.",
  vision:
    "To set the benchmark for excellence in Malaysia’s property landscape by shaping quality developments that inspire better living and foster long-term community trust.",
  mission: [
    "Execute thoughtfully planned residential and mixed-use spaces.",
    "Serve as a high-performing main contractor and partner of choice for leading developers.",
    "Maximise value for stakeholders through data-driven land banking and sustainable growth.",
  ],
  experienceYears: 30,
};

export type Value = { title: string; description: string };

export const values: Value[] = [
  {
    title: "Integrity",
    description:
      "We act with honesty and accountability, earning trust through every commitment we keep.",
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest standards of quality and craftsmanship in everything we build.",
  },
  {
    title: "Innovation",
    description:
      "We embrace future-ready thinking to design spaces that stay relevant for generations.",
  },
  {
    title: "Sustainability",
    description:
      "We develop responsibly, balancing growth with lasting environmental and social value.",
  },
  {
    title: "Community",
    description:
      "We build more than homes — we nurture neighbourhoods where life truly happens.",
  },
];

/* ----------------------------------------------------------------------- */
/* Land Banking                                                            */
/* ----------------------------------------------------------------------- */

export const landBanking = {
  hero: {
    eyebrow: "Land Banking",
    title: "Building Tomorrow, Today",
    intro:
      "Katimas Properties’ long-term growth is driven by land banking — with 400 acres of prime land strategically positioned to shape regional development and create lasting value for stakeholders and communities.",
  },
  bankPoints: [
    "400 acres of strategically located land, anchored in Sarawak’s growth corridors.",
    "Sites selected for their development potential, accessibility and community impact.",
    "Positioned for residential, mixed-use and sustainable development in line with future market demand.",
  ],
  bankSummary:
    "Our land bank is not just about holding acreage — it is about unlocking opportunities that transform raw land into thriving, well-planned communities.",
  expansion: [
    {
      text: "Synergistic acquisitions that complement our existing portfolio.",
      image: "/land/synergistic-acquisition.jpg",
    },
    {
      text: "Value-creating opportunities with strong development potential.",
      image: "/land/development-potential.jpg",
    },
    {
      text: "Partnerships aligned with our vision of building quality homes and sustainable townships in Sarawak.",
      image: "/land/sustainable-partnerships.jpg",
    },
  ],
  whyItMatters: [
    {
      title: "Future Growth",
      description: "A secured pipeline of projects for the next decade and beyond.",
      color: "cyan",
    },
    {
      title: "Strategic Advantage",
      description: "Control of prime locations before market demand surges.",
      color: "orange",
    },
    {
      title: "Community Building",
      description: "Developments thoughtfully planned for lasting, positive impact.",
      color: "green",
    },
  ] as { title: string; description: string; color: "cyan" | "orange" | "green" }[],
  acres: 400,
  heroVideo: {
    poster: "/video/land-banking-poster.jpg",
    desktop: "/video/land-banking.mp4",
    mobile: "/video/land-banking-mobile.mp4",
  },
  acresImage: "/land/farmland.jpg",
};

/* ----------------------------------------------------------------------- */
/* Projects (portfolio)                                                    */
/* ----------------------------------------------------------------------- */

export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  role: string;
  /** Sub-brand accent used to tint the project page. */
  accent: "luma" | "kasturi" | "lumina";
  /** Project logo, shown in place of imagery when `galleryAvailable` is false. */
  logo?: string;
  tagline: string;
  status: string;
  statusTone: "complete" | "ongoing";
  developer: string;
  location: string;
  scale: string;
  propertyType: string;
  /** Short card description for listings. */
  summary: string;
  /** Full narrative for the project page. */
  brief: string;
  highlights: { label: string; value: string }[];
  gallery: ProjectImage[];
  /** Gallery video; `label` is the badge shown over it (e.g. "Walkthrough"). */
  video?: { src: string; poster: string; label: string };
  hero: string;
  /** Card image for the homepage and portfolio listings. Falls back to `hero`. */
  thumbnail?: string;
  /** PDF in /public. When set, the project page shows a "Download Brochure" button. */
  brochure?: string;
  /** When false, gallery shows a "renders coming soon" treatment. */
  galleryAvailable: boolean;
};

export const projects: Project[] = [
  {
    slug: "kasa-luma",
    name: "Kasa Luma",
    role: "Main Contractor",
    accent: "luma",
    tagline: "Single storey terrace homes thoughtfully designed to radiate.",
    status: "Targeted completion 2029",
    statusTone: "ongoing",
    developer: "KMS Maju Sdn. Bhd.",
    location: "Jalan Camar, Matang, Sarawak",
    scale: "48 Units",
    propertyType: "Single-Storey Terrace Houses",
    summary:
      "A contemporary residential development of 48 single-storey terrace homes designed for comfortable family living. Expected to launch for booking by 2026 and set to be built under our delivery as main contractor.",
    brief:
      "Kasa Luma represents the next highly anticipated structural execution for property developer KMS Maju Sdn. Bhd. Situated along Jalan Camar in the Matang Jaya enclave, this project comprises 48 units of spacious single-storey terrace houses dedicated to Sarawakian Bumiputera. Serving as the main contractor, Katimas Properties provides specialized construction expertise to ensure high-quality execution throughout the build. Demonstrating operational efficiency and a commitment to superior craftsmanship, our team is set to deliver these adaptable, high-ceiling homes as a sophisticated retreat for modern living.",
    highlights: [
      { label: "Developer", value: "KMS Maju Sdn. Bhd." },
      { label: "Location", value: "Jalan Camar, Matang, Sarawak" },
      { label: "Development Scale", value: "48 Units of Single-Storey Terrace Houses" },
      { label: "Status", value: "Launch 2026 (Expected completion 24 months from S&P)" },
    ],
    gallery: [
      { src: "/projects/kasa-luma/aerial.jpg", alt: "Aerial 3D render of the Kasa Luma terrace development" },
      { src: "/projects/kasa-luma/exterior.jpg", alt: "3D render of a Kasa Luma single-storey terrace home" },
      { src: "/projects/kasa-luma/living.jpg", alt: "3D render of a Kasa Luma living area" },
      { src: "/projects/kasa-luma/dining-kitchen.jpg", alt: "3D render of a Kasa Luma dining and kitchen space" },
      { src: "/projects/kasa-luma/bedroom.jpg", alt: "3D render of a Kasa Luma bedroom" },
      { src: "/projects/kasa-luma/master-bedroom.jpg", alt: "3D render of a Kasa Luma master bedroom" },
    ],
    // TODO: add the Kasa Luma video once its Google Drive file is shared (the link in the
    // website comments is private), and set `brochure` once the PDF is supplied.
    hero: "/projects/kasa-luma/exterior.jpg",
    thumbnail: "/projects/kasa-luma/facade.jpg",
    galleryAvailable: true,
  },
  {
    slug: "kasa-lumina",
    name: "Kasa Lumina",
    role: "Main Contractor",
    accent: "lumina",
    logo: "/logo/kasa-lumina-logo.png",
    tagline: "Single storey terrace homes designed to capture the radiance of serene living.",
    status: "Targeted completion 2029",
    statusTone: "ongoing",
    developer: "KMS Maju Sdn. Bhd.",
    location: "Kuching, Sarawak", // TODO: confirm exact location of Kasa Lumina
    scale: "49 Units",
    propertyType: "Single-Storey Terrace Houses",
    summary:
      "A contemporary residential development of 49 single-storey terrace homes for modern family living. Launched in 2026 and now progressing through construction under our delivery as main contractor.",
    brief:
      "Kasa Lumina is a contemporary residential development of 49 single-storey terrace homes designed for modern family living, developed by KMS Maju Sdn. Bhd. As main contractor, Katimas Properties brings specialised construction expertise to deliver high-quality execution across the build — applying the same operational precision and craftsmanship that defined our earlier collaboration. The development was launched to a strong market reception in 2026 and is currently progressing toward its targeted completion in 2029.",
    highlights: [
      { label: "Developer", value: "KMS Maju Sdn. Bhd." },
      { label: "Location", value: "Kuching, Sarawak" },
      { label: "Development Scale", value: "49 Units · Single-Storey Terrace" },
      { label: "Status", value: "Under Construction · Targeted 2029" },
    ],
    gallery: [
      { src: "/projects/kasa-lumina/aerial.jpg", alt: "Aerial 3D render of the Kasa Lumina development" },
      { src: "/projects/kasa-lumina/front-view.jpg", alt: "3D render of the Kasa Lumina terrace homes from the street" },
      { src: "/projects/kasa-lumina/courtyard.jpg", alt: "3D render of a Kasa Lumina courtyard" },
      { src: "/projects/kasa-lumina/dining.jpg", alt: "3D render of a Kasa Lumina dining area" },
      { src: "/projects/kasa-lumina/living.jpg", alt: "3D render of a Kasa Lumina living room" },
      { src: "/projects/kasa-lumina/bedroom.jpg", alt: "3D render of a Kasa Lumina bedroom" },
    ],
    video: {
      src: "/projects/kasa-lumina/launch-video.mp4",
      poster: "/projects/kasa-lumina/launch-video-poster.jpg",
      label: "Launch Video",
    },
    hero: "/projects/kasa-lumina/front-view.jpg",
    galleryAvailable: true,
  },
  {
    slug: "kasa-kasturi",
    name: "Kasa Kasturi",
    role: "Main Contractor",
    accent: "kasturi",
    logo: "/logo/kasa-kasturi-logo.png",
    tagline: "Double storey terrace homes offering a true place to call home.",
    status: "Completed 2026 · Early Handover",
    statusTone: "complete",
    developer: "KMS Maju Sdn. Bhd.",
    location: "Jalan Camar, Matang, Kuching, Sarawak",
    scale: "51 Units",
    propertyType: "Double-Storey Terrace Houses",
    summary:
      "A premier neighbourhood of 51 double-storey terrace homes catering to Sarawakian Bumiputera, completed well ahead of schedule under our delivery as main contractor.",
    brief:
      "Kasa Kasturi represents a highly successful structural execution for property developer KMS Maju Sdn. Bhd. Situated at Jalan Camar in Matang, this maiden project comprises 51 units of double-storey terrace houses dedicated to Sarawakian Bumiputera. Serving as main contractor, Katimas Properties provided specialised construction expertise to ensure high-quality execution throughout the build. Demonstrating our operational efficiency and commitment to superior craftsmanship, our team successfully completed and delivered the entire development well ahead of schedule.",
    highlights: [
      { label: "Developer", value: "KMS Maju Sdn. Bhd." },
      { label: "Location", value: "Jalan Camar, Matang, Kuching" },
      { label: "Development Scale", value: "51 Units · Double-Storey Terrace" },
      { label: "Status", value: "Completed 2026 · Early Handover" },
    ],
    gallery: [
      { src: "/projects/kasa-kasturi/exterior.jpg", alt: "Kasa Kasturi double-storey terrace house facade and streetscape" },
      { src: "/projects/kasa-kasturi/side.jpg", alt: "Side elevation of a completed Kasa Kasturi terrace home" },
      { src: "/projects/kasa-kasturi/living.jpg", alt: "Bright, open-plan living area inside a Kasa Kasturi home" },
      { src: "/projects/kasa-kasturi/dining-kitchen.jpg", alt: "Dining and kitchen space in a Kasa Kasturi terrace house" },
      { src: "/projects/kasa-kasturi/master-room.jpg", alt: "Spacious master bedroom interior at Kasa Kasturi" },
      { src: "/projects/kasa-kasturi/bedroom.jpg", alt: "Comfortable secondary bedroom in a Kasa Kasturi home" },
    ],
    video: {
      src: "/projects/kasa-kasturi/walkthrough.mp4",
      poster: "/projects/kasa-kasturi/walkthrough-poster.jpg",
      label: "Walkthrough",
    },
    hero: "/projects/kasa-kasturi/exterior.jpg",
    galleryAvailable: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const corporateCta = {
  headline: "Looking for a Reliable Construction Partner?",
  subtext:
    "Reach out to discuss how Katimas Properties can deliver your next residential or commercial development with precision.",
  cta: { label: "Contact Our Team", href: "/contact" },
};
