"use client";

import { useState } from "react";

import type { PortfolioItem } from "@/data/portfolio";

import { Container } from "./Container";
import { PortfolioFeaturedCard } from "./PortfolioFeaturedCard";
import { PortfolioSelectorCard } from "./PortfolioSelectorCard";
import { SectionHeadingBlock } from "./SectionHeadingBlock";

type PortfolioSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: PortfolioItem[];
};

export function PortfolioSection({
  eyebrow,
  title,
  description,
  items
}: PortfolioSectionProps) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");
  const activeItem = items.find((item) => item.slug === activeSlug) ?? items[0];

  return (
    <section id="portfolio" className="bg-gray-50 py-20 md:py-30">
      <Container>
        <SectionHeadingBlock
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mb-12 md:mb-14"
        />
        {activeItem ? <PortfolioFeaturedCard item={activeItem} /> : null}
        <div className="mt-4 grid gap-3 md:mt-5 md:grid-cols-4">
          {items.map((item) => (
            <PortfolioSelectorCard
              key={item.slug}
              item={item}
              isActive={item.slug === activeSlug}
              onSelect={setActiveSlug}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
