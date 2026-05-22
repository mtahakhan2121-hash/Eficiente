import Image from "next/image";
import Link from "next/link";

import type { NavigationLink } from "@/data/navigation";

import { Container } from "./Container";
import { NewsletterForm } from "./NewsletterForm";

type SocialLink = {
  label: string;
  href: string;
};

type SiteFooterProps = {
  tagline: string;
  newsletterPlaceholder: string;
  newsletterButtonLabel: string;
  newsletterHelper: string;
  navigationLinks: NavigationLink[];
  regions: string;
  contactEmail: string;
  socialLinks: SocialLink[];
  copyright: string;
};

export function SiteFooter({
  tagline,
  newsletterPlaceholder,
  newsletterButtonLabel,
  newsletterHelper,
  navigationLinks,
  regions,
  contactEmail,
  socialLinks,
  copyright
}: SiteFooterProps) {
  return (
    <footer className="bg-gray-400 py-14 text-white md:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/Elements & Icons/Efficiente Icon.svg"
                alt="Eficiente"
                width={34}
                height={34}
                className="h-[34px] w-[34px]"
              />
              <span className="text-[24px] font-medium leading-none">Eficiente</span>
            </div>
            <p className="mt-8 max-w-[420px] text-display-4-mobile md:text-display-3">
              {tagline}
            </p>
            <div className="mt-8">
              <NewsletterForm
                placeholder={newsletterPlaceholder}
                buttonLabel={newsletterButtonLabel}
                helperText={newsletterHelper}
              />
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-8">
            <p className="text-body-4-mobile uppercase tracking-[0.08em] text-white/78">
              Main Pages
            </p>
            <ul className="mt-4 space-y-3 text-body-4">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div>
              <p className="text-body-4-mobile uppercase tracking-[0.08em] text-white/78">
                Active Across
              </p>
              <p className="mt-4 text-body-4">{regions}</p>
            </div>
            <div className="mt-10">
              <p className="text-body-4-mobile uppercase tracking-[0.08em] text-white/78">
                Contact
              </p>
              <Link href={`mailto:${contactEmail}`} className="mt-4 block text-body-4">
                {contactEmail}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/30 pt-6 md:mt-12 md:flex md:items-center md:justify-between">
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-[11px] font-medium text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-body-4-mobile text-white/65 md:mt-0">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
