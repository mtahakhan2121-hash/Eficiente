"use client";

import Link from "next/link";
import { useState } from "react";

import type { NavigationLink } from "@/data/navigation";

import { cn } from "@/lib/cn";

import { Button } from "./Button";
import { Container } from "./Container";

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
    <header className="relative z-50 border-b border-blue-200/40 bg-gray-400 text-white">
      <Container>
        <div className="flex min-h-[68px] items-center justify-between gap-4 md:min-h-[76px]">
          <Link href="/" className="flex items-center gap-3 md:gap-3.5">
            <HeaderLogoIcon />
            <span className="text-[28px] font-semibold leading-none tracking-[-0.02em] md:text-[30px]">
              Eficiente
            </span>
          </Link>
          <nav className="hidden items-center gap-10 text-body-5 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button
              label={primaryCta.label}
              href={primaryCta.href}
              variant="primaryLight"
              size="sm"
              className="min-h-10 px-4 text-body-4-mobile"
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
      </Container>
      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-gray-400 lg:hidden">
          <Container className="py-4">
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
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function HeaderLogoIcon() {
  return (
    <svg
      viewBox="0 0 900 900"
      aria-hidden="true"
      className="h-9 w-9 shrink-0 text-white md:h-11 md:w-11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M450.25 353.82C503.369 353.82 546.43 396.881 546.43 450C546.43 503.119 503.369 546.18 450.25 546.18C397.131 546.18 354.07 503.119 354.07 450C354.07 396.881 397.131 353.82 450.25 353.82Z"
          stroke="currentColor"
          strokeWidth="36"
        />
        <path
          d="M260.596 72.9492L186.768 145.898L330.932 288.406C336.548 293.957 344.126 297.07 352.022 297.07H549.634C557.591 297.07 565.221 293.91 570.847 288.284L713.232 145.898L640.283 72.9492L501.416 212.695V66.7969H398.584V212.695L260.596 72.9492Z"
          stroke="currentColor"
          strokeWidth="36"
        />
        <path
          d="M639.404 827.051L713.232 754.102L569.068 611.594C563.452 606.043 555.874 602.93 547.978 602.93L350.366 602.93C342.409 602.93 334.779 606.09 329.153 611.716L186.768 754.102L259.717 827.051L398.584 687.305L398.584 833.203L501.416 833.203L501.416 687.305L639.404 827.051Z"
          stroke="currentColor"
          strokeWidth="36"
        />
        <path
          d="M827.051 260.596L754.102 186.768L611.594 330.932C606.043 336.548 602.93 344.126 602.93 352.022L602.93 549.634C602.93 557.591 606.09 565.221 611.716 570.847L754.102 713.232L827.051 640.283L687.305 501.416L833.203 501.416L833.203 398.584L687.305 398.584L827.051 260.596Z"
          stroke="currentColor"
          strokeWidth="36"
        />
        <path
          d="M72.9492 639.404L145.898 713.232L288.406 569.068C293.957 563.452 297.07 555.874 297.07 547.978L297.07 350.366C297.07 342.409 293.91 334.779 288.284 329.153L145.899 186.768L72.9493 259.717L212.695 398.584L66.7969 398.584L66.7969 501.416L212.695 501.416L72.9492 639.404Z"
          stroke="currentColor"
          strokeWidth="36"
        />
      </g>
    </svg>
  );
}
