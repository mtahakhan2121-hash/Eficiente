import { Button } from "./Button";
import { Container } from "./Container";

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
    <section id="apply" className="bg-blue-300 py-16 text-white md:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h2 className="text-display-1-mobile md:text-display-1">{title}</h2>
            <div className="mt-8">
              <Button
                label={primaryCta.label}
                href={primaryCta.href}
                variant="primaryLight"
                icon="arrow"
              />
            </div>
          </div>
          <div className="md:col-span-4 md:pb-2 md:text-right">
            <p className="text-body-4-mobile uppercase tracking-[0.1em] text-white/88">
              {supportLabel}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/60 pt-4 md:mt-10 md:grid md:grid-cols-12 md:items-start md:gap-6">
          <p className="text-body-4-mobile md:col-span-4 md:text-body-5">{regions}</p>
          <p className="mt-4 max-w-[450px] text-body-3-mobile text-white/82 md:col-span-8 md:mt-0 md:text-body-4 md:text-right">
            {supportCopy}
          </p>
        </div>
      </Container>
    </section>
  );
}
