"use client";

import { cn } from "@/lib/cn";

import type { PortfolioItem } from "@/data/portfolio";

type PortfolioSelectorCardProps = {
  item: PortfolioItem;
  isActive: boolean;
  onSelect: (slug: string) => void;
};

export function PortfolioSelectorCard({
  item,
  isActive,
  onSelect
}: PortfolioSelectorCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item.slug)}
      className={cn(
        "rounded-sm border bg-white p-3 text-left shadow-card transition-colors md:p-4",
        isActive ? "border-blue-300" : "border-transparent"
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-xs bg-blue-300 text-xs text-white">
          {item.logoSymbol}
        </span>
        <div>
          <p className="text-body-2-mobile md:text-body-4">{item.name}</p>
          <p className="mt-1 text-body-4-mobile text-gray-300">{item.category}</p>
        </div>
      </div>
    </button>
  );
}
