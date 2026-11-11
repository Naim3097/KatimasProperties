import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { IconMapPin, IconPhone, IconMail, IconClock } from "@/components/icons";
import { contact, socials, siteConfig } from "@/lib/site";
import { socialIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Katimas Properties in Kuching, Sarawak. Call 082-555 770, email hello@katimasproperties.com.my, or send us a message.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Katimas Properties",
    description:
      "Looking to learn more about our projects or explore opportunities with us? We'd love to hear from you.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />

      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        eyebrow="Contact Us"
        title="Let's Connect"
        subtitle="Looking to learn more about our projects or explore opportunities with us? We would love to hear from you."
        image="/visual/contact-hero.jpg"
        imageAlt="Two colleagues discussing plans in an office"
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Details */}
            <div>
              <Eyebrow tone="clay">Get in Touch</Eyebrow>
              <h2 className="display mt-5 text-3xl leading-tight text-ink sm:text-4xl">
                Speak with our team
              </h2>
              <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted">
                Reach us at the office, by phone or email — or send a message and we will respond as
                soon as we can.
              </p>

              <ul className="mt-10 space-y-7">
                <li className="flex gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <IconMapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">Office</p>
                    <p className="mt-1.5 text-pretty text-base leading-relaxed text-ink">
                      {contact.addressInline}
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <IconPhone className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">Phone</p>
                    <a
                      href={contact.phoneHref}
                      className="mt-1.5 inline-block text-base font-medium text-ink transition-colors hover:text-brand"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <IconMail className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1.5 inline-block break-all text-base font-medium text-ink transition-colors hover:text-brand"
                    >
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <IconClock className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted">Hours</p>
                    <div className="mt-1.5 space-y-0.5 text-base text-ink">
                      {contact.hours.map((h) => (
                        <p key={h.days}>
                          <span className="font-medium">{h.days}:</span>{" "}
                          <span className="text-muted">{h.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 flex items-center gap-3">
                {socials.map((s) => {
                  const Icon = socialIcon[s.name];
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={`${siteConfig.name} on ${s.name}`}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand hover:bg-brand hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
