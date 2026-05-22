import Image from "next/image";

import { Button } from "./Button";

type AudienceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  featured?: boolean;
};

export function AudienceCard({
  icon,
  title,
  description,
  href,
  ctaLabel,
  featured = false
}: AudienceCardProps) {
  return (
    <article
      className={
        featured
          ? "flex h-full flex-col rounded-md bg-white p-5 text-gray-400 shadow-card md:min-h-[404px] md:p-10"
          : "flex h-full flex-col rounded-md bg-white p-5 text-gray-400 shadow-card md:min-h-[404px] md:px-8 md:pb-8 md:pt-10"
      }
    >
      <div className="mb-14 flex items-start justify-between md:mb-14">
        <Image src={icon} alt="" width={60} height={60} />
        <Image
          src="/assets/Elements & Icons/Arrow.svg"
          alt=""
          width={24}
          height={24}
        />
      </div>
      <div className="mt-auto">
        <h3
          className={
            featured
              ? "max-w-[520px] text-display-4-mobile md:text-display-5"
              : "text-display-4-mobile md:text-display-5"
          }
        >
          {title}
        </h3>
        <p
          className={
            featured
              ? "mt-3 max-w-[520px] text-body-4-mobile text-gray-300 md:mt-4 md:text-body-4"
              : "mt-3 text-body-4-mobile text-gray-300 md:mt-4 md:text-body-4"
          }
        >
          {description}
        </p>
      </div>
      {ctaLabel ? (
        <Button
          label={ctaLabel}
          href={href}
          variant="sectionCtaBlue"
          size="sm"
          className="mt-6 self-start md:mt-8"
        />
      ) : null}
    </article>
  );
}
