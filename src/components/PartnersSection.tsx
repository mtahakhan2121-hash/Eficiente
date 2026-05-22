import { Container } from "./Container";
import { SectionHeadingBlock } from "./SectionHeadingBlock";

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
  return (
    <section id="partners" className="section-divider bg-gray-50 py-20 md:py-30">
      <Container>
        <SectionHeadingBlock eyebrow={eyebrow} title={title} className="mb-12 md:mb-14" />
      </Container>
      <div className="logo-ticker overflow-hidden">
        <div className="flex min-w-max items-center gap-8 px-5 text-[22px] font-medium uppercase tracking-[0.12em] text-gray-400 md:gap-12 md:px-20 md:text-[28px]">
          {logos.map((logo, index) => (
            <span key={`${logo}-${index}`} className="whitespace-nowrap opacity-90">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
