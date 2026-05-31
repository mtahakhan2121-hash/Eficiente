"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { NavigationLink } from "@/data/navigation";

import { cn } from "@/lib/cn";

import { Button } from "./Button";

type SiteHeaderProps = {
  links: NavigationLink[];
  primaryCta: {
    label: string;
    href: string;
  };
};

export function SiteHeader({ links, primaryCta }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-[#0979FF]/25 bg-[linear-gradient(90deg,#102961_4.97%,#101A29_100%)] text-white">
      <div className="flex min-h-[72px] w-full items-center justify-between gap-4 px-5 md:min-h-20 md:px-8 xl:px-20">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center">
            <Image
              src="/assets/Elements & Icons/Header Logo White.png"
              alt=""
              width={36}
              height={36}
              aria-hidden="true"
              className="h-9 w-9 shrink-0"
            />
          </span>
          <span className="text-[28px] font-medium leading-none tracking-[-0.02em]">
            Eficiente
          </span>
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {links.map((link) => (
            <HeaderNavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button
            label={primaryCta.label}
            href={primaryCta.href}
            variant="primaryLight"
            size="sm"
            className="min-h-12 rounded-xs px-5 text-[16px] leading-6 tracking-[-0.02em] text-blue-300"
          />
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span
            className={cn(
              "h-px w-6 bg-white transition-transform",
              isMenuOpen ? "translate-y-[7px] rotate-45" : ""
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-white transition-opacity",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-white transition-transform",
              isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            )}
          />
        </button>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-[#102961] lg:hidden">
          <div className="w-full px-5 py-4 md:px-8 xl:px-20">
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-sm border border-white/10 px-4 py-3 text-body-4"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                label={primaryCta.label}
                href={primaryCta.href}
                variant="primaryLight"
                size="sm"
                className="mt-2 min-h-10 self-start px-4 text-body-4-mobile"
              />
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

type HeaderNavLinkProps = {
  href: string;
  label: string;
};

function HeaderNavLink({ href, label }: HeaderNavLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group relative block overflow-hidden pr-4 text-button-1 leading-6 tracking-[-0.02em] text-white"
    >
      <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#C99700] opacity-0 transition-all duration-300 ease-out group-hover:opacity-100" />
      <span aria-hidden="true" className="grid h-6">
        <span className="col-start-1 row-start-1 transition-transform duration-[380ms] ease-out group-hover:-translate-y-[135%]">
          {label}
        </span>
        <span className="col-start-1 row-start-1 translate-y-[135%] transition-transform duration-[380ms] ease-out group-hover:translate-y-0">
          {label}
        </span>
      </span>
    </Link>
  );
}
