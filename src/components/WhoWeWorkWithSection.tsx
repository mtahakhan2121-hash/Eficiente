"use client";

import { useEffect, useRef, useState } from "react";

import { audienceContent } from "@/data/home";
import { cn } from "@/lib/cn";

import { AudienceCard } from "./AudienceCard";
import { Container } from "./Container";
import { SectionTicker } from "./SectionTicker";

export function WhoWeWorkWithSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const cardCtaLabel = audienceContent.items[0]?.ctaLabel ?? "Send Company Details";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setIsActive(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(Boolean(entry?.isIntersecting));
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -15% 0px"
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="who-we-work-with"
      className={cn(
        "section-divider grain-bg pb-16 pt-14 text-white md:pb-20 md:pt-20",
        isActive && "who-reveal-active"
      )}
    >
      <SectionTicker />
      <Container>
        <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <div
            className="who-reveal-item inline-block"
            style={{
              ["--reveal-delay" as string]: "0ms",
              ["--reveal-duration" as string]: "800ms"
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 px-3 py-1 text-[12px] leading-[18px] text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
              {audienceContent.eyebrow}
            </span>
          </div>
          <div
            className="who-reveal-item"
            style={{
              ["--reveal-delay" as string]: "140ms",
              ["--reveal-duration" as string]: "900ms"
            }}
          >
            <h2 className="mt-6 max-w-[1100px] text-display-2-mobile font-medium leading-[120%] md:text-display-2">
              For companies that need buyers, partners,{" "}
              <br className="hidden md:block" />
              and local traction in the GCC.
            </h2>
          </div>
        </div>
      </Container>
      <div className="mx-auto mt-12 w-full max-w-[1360px] px-5 md:mt-16 md:px-8 xl:px-10">
        <div className="grid gap-4 lg:flex lg:items-stretch lg:gap-6">
          {audienceContent.items.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "who-reveal-item lg:flex-[1_1_0%] lg:transition-[flex-grow,flex-basis] lg:duration-700 lg:ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:flex-[1.65_1_0%]"
              )}
              style={{
                ["--reveal-delay" as string]: `${280 + (index * 150)}ms`,
                ["--reveal-duration" as string]: "950ms"
              }}
            >
              <AudienceCard {...item} ctaLabel={cardCtaLabel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
