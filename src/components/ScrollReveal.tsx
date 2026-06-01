"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  as?: "div" | "span";
  direction?: "up" | "left" | "right";
  replay?: boolean;
};

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  durationMs = 700,
  as = "div",
  direction = "up",
  replay = false
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | HTMLSpanElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (replay) {
          setIsVisible(entry.isIntersecting);
          return;
        }

        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -15% 0px"
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [replay]);

  const Component = as;

  return (
    <Component
      ref={elementRef as never}
      className={cn(
        "scroll-reveal",
        direction === "left" && "scroll-reveal-left",
        direction === "right" && "scroll-reveal-right",
        isVisible && "is-visible",
        className
      )}
      style={{
        ["--reveal-delay" as string]: `${delayMs}ms`,
        ["--reveal-duration" as string]: `${durationMs}ms`
      }}
    >
      {children}
    </Component>
  );
}
