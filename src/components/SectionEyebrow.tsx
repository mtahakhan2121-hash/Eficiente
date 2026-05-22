import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  label: string;
  theme?: "dark" | "light";
  className?: string;
};

export function SectionEyebrow({
  label,
  theme = "light",
  className
}: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px] leading-[18px] md:text-body-4-mobile",
        theme === "dark"
          ? "border-white/70 text-white"
          : "border-gray-400 text-gray-400",
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          theme === "dark" ? "bg-white" : "bg-gray-400"
        )}
      />
      {label}
    </span>
  );
}
