import { cn } from "@/lib/cn";

import { StageVisual } from "./StageVisual";

type StageCardProps = {
  stageNumber: string;
  title: string;
  description: string;
  asset: string;
  reverseOnDesktop?: boolean;
};

export function StageCard({
  stageNumber,
  title,
  description,
  asset,
  reverseOnDesktop = false
}: StageCardProps) {
  return (
    <article className="rounded-md bg-white p-4 shadow-card md:p-6">
      <div
        className={cn(
          "grid gap-5 md:grid-cols-12 md:items-center md:gap-8",
          reverseOnDesktop ? "md:[&>*:first-child]:order-2" : ""
        )}
      >
        <div className="md:col-span-5">
          <StageVisual asset={asset} title={title} />
        </div>
        <div className="md:col-span-7 md:px-1">
          <p className="text-body-4-mobile text-coral md:text-body-5">{stageNumber}</p>
          <h3 className="mt-4 text-display-4-mobile md:text-display-4">{title}</h3>
          <p className="mt-4 max-w-[470px] text-body-3-mobile text-gray-300 md:mt-5 md:text-body-4">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
