"use client";

import Image from "next/image";

import type { PortfolioItem } from "@/data/portfolio";

type PortfolioFeaturedCardProps = {
  item: PortfolioItem;
};

export function PortfolioFeaturedCard({ item }: PortfolioFeaturedCardProps) {
  return (
    <article className="rounded-md bg-white p-4 shadow-card md:p-6">
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-6">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-xs bg-blue-300 text-sm text-white">
              {item.logoSymbol}
            </span>
            <h3 className="text-display-5-mobile md:text-display-5">{item.name}</h3>
          </div>
          <p className="mt-3 text-body-2-mobile md:hidden">{item.category}</p>
          <p className="mt-10 max-w-[310px] text-body-3-mobile text-gray-300 md:mt-40 md:text-body-4">
            {item.description}
          </p>
        </div>
        <div className="md:col-span-5 md:col-start-7">
          <p className="hidden md:block md:text-body-3">{item.category}</p>
          <div
            className={`mt-4 aspect-square overflow-hidden rounded-md bg-gradient-to-br ${item.visualTone}`}
          >
            <div className="flex h-full w-full items-end justify-end bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(255,173,117,0.3),transparent_36%),linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_48%,transparent_70%)] p-5">
              <div className="grid h-full w-full grid-cols-4 gap-3 opacity-65">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/30"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end md:col-span-1">
          <Image
            src="/assets/Elements & Icons/Arrow.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </div>
      </div>
    </article>
  );
}
