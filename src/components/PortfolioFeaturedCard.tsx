"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import type { PortfolioItem } from "@/data/portfolio";

type PortfolioFeaturedCardProps = {
  item: PortfolioItem;
  prefersReducedMotion: boolean;
  transitionToken: number;
};

type ContentPhase = "entered" | "entering" | "exiting";

export function PortfolioFeaturedCard({
  item,
  prefersReducedMotion,
  transitionToken
}: PortfolioFeaturedCardProps) {
  const [renderedItem, setRenderedItem] = useState(item);
  const [contentPhase, setContentPhase] = useState<ContentPhase>("entered");
  const previousTransitionTokenRef = useRef(transitionToken);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }

      if (enterFrameRef.current) {
        cancelAnimationFrame(enterFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const didSelectNewItem = previousTransitionTokenRef.current !== transitionToken;
    previousTransitionTokenRef.current = transitionToken;

    if (renderedItem.slug === item.slug) {
      return;
    }

    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
    }

    if (enterFrameRef.current) {
      cancelAnimationFrame(enterFrameRef.current);
    }

    if (prefersReducedMotion || !didSelectNewItem) {
      setRenderedItem(item);
      setContentPhase("entered");
      return;
    }

    setContentPhase("exiting");

    transitionTimerRef.current = setTimeout(() => {
      setRenderedItem(item);
      setContentPhase("entering");
      enterFrameRef.current = requestAnimationFrame(() => {
        enterFrameRef.current = requestAnimationFrame(() => {
          setContentPhase("entered");
        });
      });
    }, 220);
  }, [item, prefersReducedMotion, renderedItem.slug, transitionToken]);

  const contentTransitionClass =
    contentPhase === "exiting"
      ? "opacity-0 -translate-y-2"
      : contentPhase === "entering"
        ? "opacity-0 translate-y-3"
        : "opacity-100 translate-y-0";

  return (
    <article className="rounded-md bg-white p-4 shadow-card md:px-9 md:py-7 lg:px-10 lg:py-8">
      <div
        className={`grid gap-7 transition-[opacity,transform] duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${contentTransitionClass} md:grid-cols-12 md:gap-6 lg:gap-7`}
      >
        <div className="flex flex-col md:col-span-6 md:min-h-[322px] md:justify-between lg:min-h-[334px]">
          <div className="flex items-center gap-3 self-start">
            <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-blue-300 text-[20px] text-white md:h-12 md:w-12 md:text-[22px]">
              {renderedItem.logoSymbol}
            </span>
            <h3 className="text-[28px] font-medium leading-none tracking-[-0.03em] text-gray-400 md:text-[32px] lg:text-[36px]">
              {renderedItem.name}
            </h3>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-body-2-mobile md:hidden">{renderedItem.category}</p>
            <p className="mt-4 max-w-[420px] text-[18px] leading-[1.5] tracking-[-0.02em] text-gray-300 md:mt-0 md:text-[20px] md:leading-[1.4] lg:max-w-[450px] lg:text-[22px]">
              {renderedItem.description}
            </p>
            <span className="mt-6 inline-flex w-fit rounded-full bg-[#EFEDEA] px-5 py-2 text-[14px] leading-5 text-blue-300 md:mt-7 md:px-5 md:py-2 md:text-[15px]">
              {renderedItem.tag}
            </span>
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-7">
          <p className="hidden text-[28px] font-medium leading-[1.12] tracking-[-0.03em] text-gray-400 md:block md:text-[32px] lg:text-[36px]">
            {renderedItem.category}
          </p>
          <div
            className={`mt-4 aspect-[1.52/1] overflow-hidden rounded-md md:max-w-[360px] lg:max-w-[380px] ${renderedItem.imageSrc ? "bg-white" : `bg-gradient-to-br ${renderedItem.visualTone}`}`}
          >
            {renderedItem.imageSrc ? (
              <div className="relative h-full w-full">
                <Image
                  src={renderedItem.imageSrc}
                  alt={`${renderedItem.name} portfolio visual`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
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
            )}
          </div>
        </div>
        <div className="flex items-end justify-end md:col-span-1 md:pb-1">
          <Image
            src="/assets/Elements & Icons/Arrow.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 md:h-10 md:w-10"
          />
        </div>
      </div>
    </article>
  );
}
