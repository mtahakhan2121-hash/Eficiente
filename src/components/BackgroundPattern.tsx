import Image from "next/image";

import { cn } from "@/lib/cn";

type BackgroundPatternProps = {
  className?: string;
};

export function BackgroundPattern({ className }: BackgroundPatternProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <Image
        src="/assets/Elements & Icons/Back Pattern.svg"
        alt=""
        fill
        className="object-cover opacity-28"
        priority
      />
    </div>
  );
}
