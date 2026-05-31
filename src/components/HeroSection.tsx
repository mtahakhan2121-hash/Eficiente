import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(270deg,#101A29_0%,#102961_95.21%)] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.28]">
        <Image
          src="/assets/Elements & Icons/Back Pattern.svg"
          alt=""
          fill
          className="scale-[1.5] object-cover object-left-top"
          priority
        />
      </div>
      <div className="pointer-events-none absolute left-[55.56%] top-[132px] hidden h-[1300px] w-[1301px] opacity-40 md:block">
        <Image
          src="/assets/Elements & Icons/Hero Mark Updated.svg"
          alt=""
          fill
          className="hero-outline-mark-spin object-contain"
          priority
        />
      </div>
      <div className="relative z-10 min-h-[620px] px-5 pb-20 pt-12 md:min-h-[700px] md:px-8 md:pb-[68px] md:pt-[100px] xl:px-20">
        <div className="max-w-[715px]">
          <span className="inline-flex items-center gap-1.5 rounded-[50px] border border-gray-50 px-3 py-1 text-[14px] leading-6 tracking-[-0.02em] text-gray-50 md:text-button-2">
            <span className="h-2 w-2 rounded-full bg-gray-50" />
            {eyebrow}
          </span>
          <h1 className="mt-16 max-w-[710px] text-[48px] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-[56px] md:mt-[122px] md:text-[66px] md:leading-[1.2] md:tracking-[-1.32px]">
            {title}
          </h1>
          <p className="mt-6 max-w-[500px] text-[16px] leading-6 tracking-[-0.02em] text-gray-100 md:max-w-[495px] md:text-body-3">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-12 items-center gap-2 rounded-xs border border-white bg-white px-5 py-3 text-[16px] leading-6 tracking-[-0.02em] text-blue-300 transition-colors duration-200 hover:bg-blue-300 hover:text-white"
            >
              <span>{primaryCta.label}</span>
              <Image
                src="/assets/Elements & Icons/Arrow Button.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
                className="h-6 w-6"
              />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-12 items-center rounded-xs border border-white px-5 py-3 text-[16px] leading-6 tracking-[-0.02em] text-white transition-colors duration-200 hover:bg-white hover:text-blue-300"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
