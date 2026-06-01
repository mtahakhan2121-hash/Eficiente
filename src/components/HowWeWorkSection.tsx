import { Fragment } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { SectionEyebrow } from "./SectionEyebrow";

type HowWeWorkStage = {
  stageNumber: string;
  title: string;
  description: string;
  asset: string;
  reverseOnDesktop?: boolean;
};

type HowWeWorkSectionProps = {
  eyebrow: string;
  title: string;
  stages: HowWeWorkStage[];
};

export function HowWeWorkSection({
  eyebrow,
  title,
  stages
}: HowWeWorkSectionProps) {
  const titleLines = title.split(". ").filter(Boolean);

  return (
    <section id="how-we-work" className="section-divider bg-gray-50 pb-24 pt-24 md:pb-30 md:pt-[132px]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow label={eyebrow} className="px-5 py-2 text-[14px] leading-6 md:text-button-2" />
          <h2 className="mt-10 max-w-[820px] text-[36px] font-medium leading-[1.08] tracking-[-0.04em] text-gray-400 md:text-[50px] lg:text-[56px]">
            {titleLines.map((line, index) => (
              <span key={line}>
                {line.trim()}
                {index < titleLines.length - 1 ? "." : ""}
                {index < titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
        </div>

        {/* Stages — all cards are flat siblings so sticky stacking works correctly.
            Each card stays pinned until the parent scrolls out of view.
            Later cards (higher z-index) cover earlier ones. */}
        <div className="mt-16 md:mt-20">
          {stages.map((stage, index) => {
            const isReversed = stage.reverseOnDesktop;
            const isLast = index === stages.length - 1;
            const stickyTop = 80 + index * 20;

            return (
              <Fragment key={stage.stageNumber}>
                {/* Sticky card */}
                <div
                  className="sticky"
                  style={{ top: `${stickyTop}px`, zIndex: (index + 1) * 10 }}
                >
                  <article className="group rounded-[20px] bg-white px-6 py-6 shadow-[0_2px_16px_rgba(0,0,0,0.05),0_0_0_1px_rgba(16,26,41,0.04)] md:rounded-[24px] md:px-10 md:py-10">
                    <div
                      className={cn(
                        "flex flex-col gap-6 md:flex-row md:items-center md:gap-10 lg:gap-14",
                        isReversed && "md:flex-row-reverse"
                      )}
                    >
                      {/* Image */}
                      <div className="w-full flex-shrink-0 md:w-[42%]">
                        <div className="relative aspect-[16/11] overflow-hidden rounded-[6px] md:aspect-[16/12]">
                          <Image
                            src={stage.asset}
                            alt={stage.title}
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="flex-1">
                        <p className="text-[14px] font-normal leading-[1.5] tracking-normal text-coral md:text-[15px]">
                          {stage.stageNumber}
                        </p>
                        <h3 className="mt-2.5 text-[26px] font-normal leading-[1.15] tracking-[-0.025em] text-gray-300 transition-colors duration-500 ease-out group-hover:text-[#101A29] md:mt-3 md:text-[30px] lg:text-[34px]">
                          {stage.title}
                        </h3>
                        <p className="mt-4 max-w-[480px] text-[15px] leading-[1.65] tracking-[-0.005em] text-gray-200 md:text-[16px]">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Connector + scroll spacer between cards.
                    z-index 0 so it scrolls behind the sticky cards. */}
                {!isLast && (
                  <div className="relative z-0 flex h-[45vh] items-center justify-center md:h-[55vh]">
                    <div className="flex flex-col items-center">
                      <div className="h-[60px] w-px bg-[#C7CCD4] md:h-[80px]" />
                      <div className="my-[2px] h-[12px] w-[12px] rounded-full border border-[#C7CCD4] bg-gray-50" />
                      <div className="h-[14px] w-px bg-[#C7CCD4] md:h-[18px]" />
                    </div>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
