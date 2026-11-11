import type { MetadataRoute } from "next";
import { siteConfig, projects } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/land-banking", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy-notice", priority: 0.3 },
    { path: "/disclaimer", priority: 0.3 },
  ].map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  const projectPages = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
