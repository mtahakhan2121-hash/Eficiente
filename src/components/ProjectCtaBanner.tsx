import { Button } from "./Button";
import { Container } from "./Container";
import { ScrollReveal } from "./ScrollReveal";

type ProjectCtaBannerProps = {
  title: string;
  primaryCta: {
    label: string;
    href: string;
  };
  regions: string;
  supportLabel: string;
  supportCopy: string;
};

export function ProjectCtaBanner({
  title,
  primaryCta,
  regions,
  supportLabel,
  supportCopy
}: ProjectCtaBannerProps) {
  return (
    <section id="apply" className="grain-bg py-16 text-white md:py-20">
      <Container className="max-w-[1580px] xl:px-12">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <ScrollReveal
            direction="left"
            replay
            durationMs={820}
            className="md:col-span-10"
          >
            <h2 className="max-w-none text-[52px] font-medium leading-[0.95] tracking-[-0.06em] text-white md:text-[112px]">
              {title}
            </h2>
            <div className="mt-8 md:mt-12">
              <Button
                label={primaryCta.label}
                href={primaryCta.href}
                variant="primaryLight"
                icon="arrow"
                className="project-cta-button !border-white !bg-white !text-[#245CE1] hover:!border-white hover:!bg-white hover:!text-[#245CE1]"
                contentClassName="project-cta-button-content"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            replay
            delayMs={120}
            durationMs={820}
            className="md:col-span-2 md:pb-4 md:text-right"
          >
            <p className="text-[14px] font-medium uppercase tracking-[0.08em] text-white md:text-[20px]">
              {supportLabel}
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-8 border-t border-white/70 pt-4 md:mt-10 md:grid md:grid-cols-12 md:items-start md:gap-6 md:pt-7">
          <ScrollReveal
            direction="left"
            replay
            delayMs={80}
            durationMs={860}
            className="md:col-span-4"
          >
            <p className="text-[14px] leading-[1.35] text-white md:text-[24px] md:leading-[1.2]">
              {regions}
            </p>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            replay
            delayMs={180}
            durationMs={860}
            className="md:col-span-8 md:justify-self-end"
          >
            <p className="mt-4 max-w-[760px] text-[16px] leading-[1.35] text-white/88 md:mt-0 md:text-[24px] md:leading-[1.2] md:text-right">
              {supportCopy}
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
