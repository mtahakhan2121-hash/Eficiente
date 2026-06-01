import { Container } from "./Container";
import { SectionEyebrow } from "./SectionEyebrow";

type PartnersSectionProps = {
  eyebrow: string;
  title: string;
  logos: string[];
};

export function PartnersSection({
  eyebrow,
  title,
  logos
}: PartnersSectionProps) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section id="partners" className="section-divider bg-gray-50 py-20 md:py-28">
      <Container className="max-w-[1420px]">
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-4 text-center">
          <SectionEyebrow label={eyebrow} />
          <h2 className="max-w-[820px] text-display-4-mobile md:text-display-3">
            {title}
          </h2>
        </div>
      </Container>
      <div className="logo-ticker mt-16 overflow-hidden md:mt-20">
        <div className="partners-marquee-track flex min-w-max items-center gap-8 px-5 text-[22px] font-medium uppercase tracking-[0.12em] text-gray-400 md:gap-12 md:px-20 md:text-[28px]">
          {marqueeLogos.map((logo, index) => (
            <span key={`${logo}-${index}`} className="whitespace-nowrap opacity-90">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
