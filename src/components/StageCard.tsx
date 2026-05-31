import { cn } from "@/lib/cn";

import { StageVisual } from "./StageVisual";

type StageCardProps = {
  stageNumber: string;
  title: string;
  description: string;
  asset: string;
  reverseOnDesktop?: boolean;
  className?: string;
};

export function StageCard({
  stageNumber,
  title,
  description,
  asset,
  reverseOnDesktop = false,
  className
}: StageCardProps) {
  return (
    <article className={cn("rounded-md bg-white px-6 py-6 shadow-card md:px-7 md:py-7 lg:px-8 lg:py-8", className)}>
      <div
        className={cn(
          "grid gap-8 md:grid-cols-12 md:items-center md:gap-12 lg:gap-14",
          reverseOnDesktop ? "md:[&>*:first-child]:order-2" : ""
        )}
      >
        <div
          className={cn(
            "md:col-span-4 md:flex",
            reverseOnDesktop ? "md:justify-end" : "md:justify-start"
          )}
        >
          <div className="w-full md:max-w-[420px] lg:max-w-[438px]">
            <StageVisual asset={asset} title={title} />
          </div>
        </div>
        <div className="md:col-span-8 md:px-0 lg:pr-6">
          <p className="text-[14px] leading-6 tracking-[-0.02em] text-coral md:text-button-2">
            {stageNumber}
          </p>
          <h3 className="mt-5 max-w-[620px] text-[38px] font-normal leading-[1.08] tracking-[-0.04em] text-gray-400 md:text-[44px] lg:text-[52px]">
            {title}
          </h3>
          <p className="mt-6 max-w-[600px] text-body-3-mobile leading-[1.38] text-gray-300 md:text-[20px] md:leading-[28px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
