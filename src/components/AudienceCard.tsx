import Image from "next/image";

import { Button } from "./Button";

type AudienceCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
};

export function AudienceCard({
  icon,
  title,
  description,
  href,
  ctaLabel
}: AudienceCardProps) {
  return (
    <article
      className="group flex h-full flex-col rounded-md bg-white p-5 text-gray-400 shadow-card transition-[padding] duration-500 ease-out md:min-h-[404px] md:px-8 md:pb-8 md:pt-10"
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
        <h3 className="text-display-4-mobile md:text-display-5">
          {title}
        </h3>
        <p className="mt-3 text-body-4-mobile text-gray-300 md:mt-4 md:text-body-4">
          {description}
        </p>
      </div>
      {ctaLabel ? (
        <div className="mt-6 overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:mt-8 lg:max-h-0 lg:translate-y-3 lg:opacity-0 lg:pointer-events-none lg:group-hover:max-h-16 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto">
          <Button
            label={ctaLabel}
            href={href}
            variant="sectionCtaBlue"
            size="sm"
            className="self-start"
          />
        </div>
      ) : null}
    </article>
  );
}
