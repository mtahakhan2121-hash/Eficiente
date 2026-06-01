"use client";

import { cn } from "@/lib/cn";

type PortfolioSymbolProps = {
  symbol: string;
  className?: string;
};

function StarburstIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.8">
        <path d="M12 3.5v4" />
        <path d="M12 16.5v4" />
        <path d="M3.5 12h4" />
        <path d="M16.5 12h4" />
        <path d="M6 6l2.85 2.85" />
        <path d="M15.15 15.15L18 18" />
        <path d="M18 6l-2.85 2.85" />
        <path d="M8.85 15.15L6 18" />
        <path d="M12 5.8v3.1" />
        <path d="M12 15.1v3.1" />
        <path d="M5.8 12h3.1" />
        <path d="M15.1 12h3.1" />
        <path d="M7.55 7.55l2.2 2.2" />
        <path d="M14.25 14.25l2.2 2.2" />
        <path d="M16.45 7.55l-2.2 2.2" />
        <path d="M9.75 14.25l-2.2 2.2" />
      </g>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

function PartialCircleIcon({
  className,
  side
}: {
  className?: string;
  side: "left" | "right";
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d={
          side === "left"
            ? "M12 4a8 8 0 0 0 0 16"
            : "M12 4a8 8 0 0 1 0 16"
        }
        fill="currentColor"
      />
    </svg>
  );
}

function RingIcon({
  className,
  centerDot
}: {
  className?: string;
  centerDot?: boolean;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      {centerDot ? <circle cx="12" cy="12" r="3.2" fill="currentColor" /> : null}
    </svg>
  );
}

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M12 4.5l6.5 7.5-6.5 7.5L5.5 12 12 4.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M12 7.4 16 12l-4 4.6L8 12 12 7.4Z" fill="currentColor" />
    </svg>
  );
}

function CommandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M8.2 10.4a2.7 2.7 0 1 1 0-5.4c1.5 0 2.7 1.2 2.7 2.7v8.6a2.7 2.7 0 1 1-5.4 0c0-1.5 1.2-2.7 2.7-2.7h8.6a2.7 2.7 0 1 1 0 5.4c-1.5 0-2.7-1.2-2.7-2.7V7.7a2.7 2.7 0 1 1 5.4 0c0 1.5-1.2 2.7-2.7 2.7H8.2Z" />
      </g>
    </svg>
  );
}

export function PortfolioSymbol({ symbol, className }: PortfolioSymbolProps) {
  const normalizedClassName = cn("h-full w-full", className);

  switch (symbol) {
    case "✺":
    case "✷":
    case "✹":
      return <StarburstIcon className={normalizedClassName} />;
    case "◔":
    case "◑":
      return <PartialCircleIcon className={normalizedClassName} side="left" />;
    case "◐":
      return <PartialCircleIcon className={normalizedClassName} side="right" />;
    case "◉":
      return <RingIcon className={normalizedClassName} centerDot />;
    case "◌":
    case "◎":
      return <RingIcon className={normalizedClassName} />;
    case "⌘":
      return <CommandIcon className={normalizedClassName} />;
    case "⌬":
    case "◈":
      return <DiamondIcon className={normalizedClassName} />;
    default:
      return (
        <span className={cn("block text-center leading-none", className)} aria-hidden="true">
          {symbol}
        </span>
      );
  }
}
