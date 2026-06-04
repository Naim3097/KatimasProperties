import Link from "next/link";
import Image from "next/image";
import {
  siteConfig,
  contact,
  socials,
  nav,
  legalLinks,
} from "@/lib/site";
import { socialIcon, IconMapPin, IconPhone, IconMail, IconClock } from "./icons";
import { Container } from "./Container";

const footerNav = nav.filter((i) => i.href !== "/");

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <Container>
        <div className="border-b border-white/10 py-12 lg:py-16">
          <p className="display text-[clamp(2.25rem,8vw,7rem)] leading-[0.9] tracking-[-0.03em] text-white">
            Crafting spaces
            <br />
            <span className="text-white/45">where life happens.</span>
          </p>
        </div>
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/logo/katimas-logo-white.png"
              alt="Katimas Properties"
              width={626}
              height={180}
              className="h-11 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Crafting spaces where life happens. A Sarawak-based property developer,
              project-management specialist and strategic land-banking firm.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = socialIcon[s.name];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={`${siteConfig.name} on ${s.name}`}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-clay hover:bg-clay hover:text-white"
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Explore
            </h2>
            <ul className="mt-6 space-y-3.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Get in Touch
            </h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3.5">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <span className="leading-relaxed text-white/70">
                  {contact.addressLines.join(", ")}
                </span>
              </li>
              <li className="flex gap-3.5">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <a href={contact.phoneHref} className="text-white/70 transition-colors hover:text-white">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3.5">
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-white/70 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3.5">
                <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <span className="leading-relaxed text-white/70">
                  {contact.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.legalName}{" "}
            <span className="whitespace-nowrap">
              [Registration No. {siteConfig.registration}]
            </span>
            . All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={legalLinks.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Privacy Notice
            </a>
            <a
              href={legalLinks.disclaimer}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
