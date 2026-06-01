"use client";

import { cn } from "@/lib/cn";

import type { PortfolioItem } from "@/data/portfolio";

import { PortfolioSymbol } from "./PortfolioSymbol";

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
        "group box-border h-full min-h-[96px] w-full min-w-0 overflow-hidden rounded-[16px] border bg-white px-5 py-4 text-left shadow-card transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[112px] md:min-h-[112px] md:px-7 md:py-4.5",
        isActive
          ? "border-blue-300 text-gray-400 hover:bg-blue-300 hover:text-white"
          : "border-transparent text-gray-400 hover:border-blue-300 hover:bg-blue-300 hover:text-white"
      )}
    >
      <div className="flex h-full items-center gap-3 md:gap-5">
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:h-9 md:w-9",
            "text-gray-400 group-hover:text-white"
          )}
        >
          <PortfolioSymbol
            symbol={item.logoSymbol}
            className="h-[24px] w-[24px] md:h-[28px] md:w-[28px]"
          />
        </span>
        <div className="min-w-0 flex-1">
          <p className={cn(
            "text-[20px] font-medium leading-[1.08] tracking-[-0.01em] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[24px]",
            "text-gray-400 group-hover:text-white"
          )}>
            {item.name}
          </p>
          <p className={cn(
            "mt-0.5 overflow-hidden text-[14px] font-normal leading-[1.18] tracking-[-0.02em] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] md:text-[16px]",
            "text-gray-300 group-hover:text-white"
          )}>
            {item.category}
          </p>
        </div>
      </div>
    </button>
  );
}
