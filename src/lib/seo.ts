import { siteConfig } from "./site";

/** Absolute URL helper for canonical / structured-data references. */
export function abs(path: string): string {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

/** Build a BreadcrumbList structured-data object from page paths. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
