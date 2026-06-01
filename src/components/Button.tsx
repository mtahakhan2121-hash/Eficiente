import Link from "next/link";
import type { MouseEventHandler } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primaryBlue"
  | "primaryLight"
  | "sectionCtaBlue"
  | "accentCoral"
  | "blueOutlineOnDark"
  | "teamPrimaryBlue"
  | "secondaryLightOutline";

type ButtonSize = "md" | "sm";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: "arrow";
  className?: string;
  contentClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-5 w-5 md:h-6 md:w-6", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16509 18.6933C3.82206 19.0641 3.22305 19.1046 2.82717 18.7825C2.43129 18.4604 2.3888 17.8992 2.73183 17.5274L8.91258 10.8409C9.07736 10.6616 9.31261 10.5522 9.56444 10.536C9.81627 10.5198 10.065 10.5978 10.2546 10.7548L13.2186 13.191L18.2749 7.77976H14.8591C14.3358 7.77976 13.9109 7.38167 13.9109 6.89039C13.9109 6.3991 14.3358 6 14.8591 6L20.5507 6.00101C21.0751 6 21.5 6.3991 21.5 6.89039V12.2287C21.5 12.7199 21.0751 13.118 20.5507 13.118C20.0274 13.118 19.6025 12.7199 19.6025 12.2287V9.06014L14.0197 15.0335C13.6746 15.4022 13.0745 15.4397 12.6807 15.1156L9.72093 12.6825L4.16509 18.6933Z"
        fill="currentColor"
      />
    </svg>
  );
}

const variantClasses: Record<ButtonVariant, string> = {
  primaryBlue:
    "border-blue-300 bg-blue-300 text-white hover:border-blue-400 hover:bg-blue-400 hover:text-white",
  primaryLight:
    "border-white bg-white text-blue-300 hover:border-white hover:bg-blue-300 hover:text-white",
  sectionCtaBlue:
    "border-blue-300 bg-blue-300 text-white hover:border-blue-300 hover:bg-white hover:text-blue-300",
  accentCoral:
    "border-coral bg-coral text-gray-400 hover:border-[#de7754] hover:bg-[#de7754] hover:text-gray-400",
  blueOutlineOnDark:
    "border-blue-300 bg-transparent text-blue-300 hover:border-blue-300 hover:bg-blue-400/18 hover:text-blue-300",
  teamPrimaryBlue:
    "border-[#245CE1] bg-[#245CE1] text-white hover:border-[#245CE1] hover:bg-transparent hover:text-[#245CE1]",
  secondaryLightOutline:
    "border-white/70 bg-transparent text-white hover:border-white hover:bg-white hover:text-blue-300"
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-12 px-4 text-button-2 md:min-h-[52px] md:px-5 md:text-button-1",
  sm: "min-h-10 px-4 text-button-2-mobile md:text-button-2"
};

export function Button({
  label,
  href = "#",
  variant = "primaryBlue",
  size = "md",
  icon,
  className,
  contentClassName,
  onClick
}: ButtonProps) {
  const content = (
    <span className={cn("inline-flex items-center justify-center gap-2", contentClassName)}>
      <span>{label}</span>
      {icon === "arrow" ? <ArrowIcon /> : null}
    </span>
  );

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xs border transition-colors duration-200 ease-out",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
