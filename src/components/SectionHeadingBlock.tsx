import { cn } from "@/lib/cn";

import { SectionEyebrow } from "./SectionEyebrow";

type SectionHeadingBlockProps = {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeadingBlock({
  eyebrow,
  title,
  description,
  theme = "light",
  align = "center",
  className
}: SectionHeadingBlockProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-[820px] flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <SectionEyebrow label={eyebrow} theme={theme} />
      <h2 className={cn("max-w-[820px] text-display-4-mobile md:text-display-3")}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-[680px] text-body-3-mobile md:text-body-4",
            theme === "dark" ? "text-white/76" : "text-gray-300"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
