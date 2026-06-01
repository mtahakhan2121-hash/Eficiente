"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import {
  type PortfolioFilterCategory,
  type PortfolioItem,
  portfolioFilterOptions
} from "@/data/portfolio";

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
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterCategory>("All");
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");
  const [detailTransitionToken, setDetailTransitionToken] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasMountedGridRef = useRef(false);
  const itemRefs = useRef(new Map<string, HTMLDivElement>());
  const previousPositionsRef = useRef(new Map<string, DOMRect>());
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter((item) => item.filterCategories.includes(activeFilter));
  }, [activeFilter, items]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (filteredItems.some((item) => item.slug === activeSlug)) {
      return;
    }

    setActiveSlug(filteredItems[0]?.slug ?? "");
  }, [activeSlug, filteredItems]);

  useLayoutEffect(() => {
    const currentPositions = new Map<string, DOMRect>();

    filteredItems.forEach((item, index) => {
      const element = itemRefs.current.get(item.slug);

      if (!element) {
        return;
      }

      const nextRect = element.getBoundingClientRect();
      currentPositions.set(item.slug, nextRect);

      if (prefersReducedMotion) {
        return;
      }

      if (!hasMountedGridRef.current) {
        return;
      }

      const previousRect = previousPositionsRef.current.get(item.slug);

      if (previousRect) {
        const deltaX = previousRect.left - nextRect.left;
        const deltaY = previousRect.top - nextRect.top;

        if (deltaX !== 0 || deltaY !== 0) {
          element.animate(
            [
              { transform: `translate(${deltaX}px, ${deltaY}px)` },
              { transform: "translate(0, 0)" }
            ],
            {
              duration: 700,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)"
            }
          );
        }

        return;
      }

      element.animate(
        [
          { opacity: 0, transform: "translateY(14px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 520,
          delay: index * 80,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both"
        }
      );
    });

    previousPositionsRef.current = currentPositions;
    hasMountedGridRef.current = true;
  }, [filteredItems, prefersReducedMotion]);

  const activeItem =
    filteredItems.find((item) => item.slug === activeSlug) ?? filteredItems[0];

  const handleSelectPortfolioItem = (slug: string) => {
    if (slug === activeSlug) {
      return;
    }

    setDetailTransitionToken((currentToken) => currentToken + 1);
    setActiveSlug(slug);
  };

  return (
    <section id="portfolio" className="bg-gray-50 py-20 md:py-30">
      <Container className="max-w-[1440px]">
        <SectionHeadingBlock
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mb-12 md:mb-14"
        />
        <div className="portfolio-filter-shell mb-8 md:mb-10">
          <div className="portfolio-filter-tabs" role="tablist" aria-label="Portfolio categories">
            {portfolioFilterOptions.map((filterLabel) => (
              <button
                key={filterLabel}
                type="button"
                role="tab"
                aria-selected={activeFilter === filterLabel}
                onClick={() => setActiveFilter(filterLabel)}
                className={`portfolio-filter-tab ${activeFilter === filterLabel ? "portfolio-filter-tab-active" : ""}`}
              >
                {filterLabel}
              </button>
            ))}
          </div>
        </div>
        {activeItem ? (
          <PortfolioFeaturedCard
            item={activeItem}
            prefersReducedMotion={prefersReducedMotion}
            transitionToken={detailTransitionToken}
          />
        ) : null}
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-4 md:gap-x-6 md:gap-y-5">
          {filteredItems.map((item) => (
            <div
              key={item.slug}
              className="min-w-0"
              ref={(element) => {
                if (element) {
                  itemRefs.current.set(item.slug, element);
                } else {
                  itemRefs.current.delete(item.slug);
                }
              }}
            >
              <PortfolioSelectorCard
                item={item}
                isActive={item.slug === activeSlug}
                onSelect={handleSelectPortfolioItem}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
