"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, contact } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { IconChevronDown, IconMenu, IconClose, IconArrowRight } from "./icons";

const mainItems = nav.filter((i) => i.href !== "/contact");

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-line/70 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            solid ? "h-[4.75rem]" : "h-20 lg:h-24",
          )}
        >
          {/* Logo */}
          <Link href="/" aria-label="Katimas Properties — home" className="relative z-10 shrink-0">
            <Image
              src={solid ? "/logo/katimas-logo.png" : "/logo/katimas-logo-white.png"}
              alt="Katimas Properties"
              width={626}
              height={180}
              priority
              className={cn("w-auto transition-all duration-300", solid ? "h-9" : "h-10 lg:h-11")}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {mainItems.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 text-[0.95rem] font-medium transition-colors",
                      solid
                        ? isActive(item.href)
                          ? "text-brand"
                          : "text-ink hover:text-brand"
                        : "text-white/90 hover:text-white",
                    )}
                  >
                    {item.label}
                    <IconChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown panel */}
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lift">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col rounded-xl px-4 py-3 transition-colors hover:bg-sand"
                        >
                          <span className="text-sm font-semibold text-ink">{child.label}</span>
                          {child.note && (
                            <span className="mt-0.5 text-xs uppercase tracking-wider text-clay">
                              {child.note}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[0.95rem] font-medium transition-colors",
                    solid
                      ? isActive(item.href)
                        ? "text-brand"
                        : "text-ink hover:text-brand"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300",
                solid
                  ? "bg-brand text-white hover:bg-brand-dark"
                  : "border border-white/45 text-white hover:bg-white hover:text-ink",
              )}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={cn(
              "relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
              solid ? "text-ink hover:bg-sand" : "text-white hover:bg-white/10",
            )}
          >
            {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-0 origin-top bg-white transition-all duration-300 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24">
          <nav className="flex flex-col divide-y divide-line border-y border-line">
            {mainItems.map((item) =>
              item.children ? (
                <div key={item.href} className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroup((g) => (g === item.href ? null : item.href))
                    }
                    className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-ink"
                    aria-expanded={openGroup === item.href}
                  >
                    {item.label}
                    <IconChevronDown
                      className={cn(
                        "h-5 w-5 text-muted transition-transform duration-300",
                        openGroup === item.href && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openGroup === item.href ? "max-h-60 pb-3" : "max-h-0",
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center justify-between py-2.5 pl-4 text-base text-muted hover:text-brand"
                      >
                        {child.label}
                        {child.note && (
                          <span className="text-[0.7rem] uppercase tracking-wider text-clay">
                            {child.note}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-4 text-lg font-semibold text-ink hover:text-brand"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <Link
            href="/contact"
            className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white"
          >
            Contact Us
            <IconArrowRight className="h-5 w-5" />
          </Link>

          <div className="mt-auto pt-10 text-sm text-muted">
            <a href={contact.phoneHref} className="block font-semibold text-ink">
              {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="mt-1 block link-underline">
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
