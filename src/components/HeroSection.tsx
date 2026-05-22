import { Button } from "./Button";
import { Container } from "./Container";
import { BackgroundPattern } from "./BackgroundPattern";
import { SectionEyebrow } from "./SectionEyebrow";

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
    <section className="relative overflow-hidden bg-gray-400 pb-20 pt-7 text-white md:pb-30 md:pt-12">
      <BackgroundPattern className="top-px" />
      <div className="pointer-events-none absolute -bottom-[20px] -right-[188px] hidden h-[332px] w-[640px] overflow-hidden md:block">
        <div className="absolute left-0 top-0 h-[640px] w-[640px]">
          <HeroDecorativeMark />
        </div>
      </div>
      <Container className="relative z-10">
        <div className="max-w-[640px] pt-10 text-center md:pt-16 md:text-left">
          <SectionEyebrow label={eyebrow} theme="dark" className="mb-8" />
          <h1 className="mx-auto max-w-[620px] text-display-1-mobile md:mx-0 md:text-display-1">
            “{title}”
          </h1>
          <p className="mx-auto mt-5 max-w-[470px] text-body-3-mobile text-white/78 md:mx-0 md:text-body-4">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button
              label={primaryCta.label}
              href={primaryCta.href}
              variant="primaryLight"
              icon="arrow"
            />
            <Button
              label={secondaryCta.label}
              href={secondaryCta.href}
              variant="secondaryLightOutline"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroDecorativeMark() {
  return (
    <svg
      viewBox="0 0 900 900"
      aria-hidden="true"
      className="hero-decorative-mark h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.68">
        <path
          d="M450.25 353.82C503.369 353.82 546.43 396.881 546.43 450C546.43 503.119 503.369 546.18 450.25 546.18C397.131 546.18 354.07 503.119 354.07 450C354.07 396.881 397.131 353.82 450.25 353.82Z"
          stroke="#0F45E0"
          strokeWidth="1.5"
        />
        <path
          d="M260.596 72.9492L186.768 145.898L330.932 288.406C336.548 293.957 344.126 297.07 352.022 297.07H549.634C557.591 297.07 565.221 293.91 570.847 288.284L713.232 145.898L640.283 72.9492L501.416 212.695V66.7969H398.584V212.695L260.596 72.9492Z"
          stroke="#0F45E0"
          strokeWidth="1.5"
        />
        <path
          d="M639.404 827.051L713.232 754.102L569.068 611.594C563.452 606.043 555.874 602.93 547.978 602.93L350.366 602.93C342.409 602.93 334.779 606.09 329.153 611.716L186.768 754.102L259.717 827.051L398.584 687.305L398.584 833.203L501.416 833.203L501.416 687.305L639.404 827.051Z"
          stroke="#0F45E0"
          strokeWidth="1.5"
        />
        <path
          d="M827.051 260.596L754.102 186.768L611.594 330.932C606.043 336.548 602.93 344.126 602.93 352.022L602.93 549.634C602.93 557.591 606.09 565.221 611.716 570.847L754.102 713.232L827.051 640.283L687.305 501.416L833.203 501.416L833.203 398.584L687.305 398.584L827.051 260.596Z"
          stroke="#0F45E0"
          strokeWidth="1.5"
        />
        <path
          d="M72.9492 639.404L145.898 713.232L288.406 569.068C293.957 563.452 297.07 555.874 297.07 547.978L297.07 350.366C297.07 342.409 293.91 334.779 288.284 329.153L145.899 186.768L72.9493 259.717L212.695 398.584L66.7969 398.584L66.7969 501.416L212.695 501.416L72.9492 639.404Z"
          stroke="#0F45E0"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
