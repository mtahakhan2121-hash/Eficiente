import { AudienceCard } from "@/components/AudienceCard";
import { Container } from "@/components/Container";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProjectCtaBanner } from "@/components/ProjectCtaBanner";
import { SectionHeadingBlock } from "@/components/SectionHeadingBlock";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StageCard } from "@/components/StageCard";
import { TeamSection } from "@/components/TeamSection";
import { audienceContent, footerContent, heroContent, howWeHelpContent, projectCtaContent } from "@/data/home";
import { footerNavigationLinks, navigationLinks, primaryNavigationCta } from "@/data/navigation";
import { partnersSectionContent, partnerLogos } from "@/data/partners";
import { portfolioItems, portfolioSectionContent } from "@/data/portfolio";
import { leadershipTeam, operationalTeam, teamSectionContent } from "@/data/team";

export default function HomePage() {
  return (
    <>
      <SiteHeader links={navigationLinks} primaryCta={primaryNavigationCta} />
      <main>
        <HeroSection {...heroContent} />

        <section id="how-we-work" className="section-divider bg-gray-50 py-20 md:py-30">
          <Container>
            <SectionHeadingBlock
              eyebrow={howWeHelpContent.eyebrow}
              title={howWeHelpContent.title}
              className="mb-12 md:mb-14"
            />
            <div className="space-y-4 md:space-y-6">
              {howWeHelpContent.stages.map((stage) => (
                <StageCard key={stage.stageNumber} {...stage} />
              ))}
            </div>
          </Container>
        </section>

        <section id="who-we-work-with" className="section-divider bg-blue-300 pb-16 pt-14 text-white md:pb-20 md:pt-20">
          <Container>
            <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 px-3 py-1 text-[12px] leading-[18px] text-white">
                <span className="h-2 w-2 rounded-full bg-white" />
                {audienceContent.eyebrow}
              </span>
              <h2 className="mt-6 max-w-[1100px] text-display-2-mobile font-medium leading-[120%] md:text-display-2">
                For companies that need buyers, partners,{" "}
                <br className="hidden md:block" />
                and local traction in the GCC.
              </h2>
            </div>
          </Container>
          <div className="mx-auto mt-12 w-full max-w-[1360px] px-5 md:mt-16 md:px-8 xl:px-10">
            <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
              {audienceContent.items.map((item, index) => (
                <div
                  key={item.title}
                  className={index === 0 ? "lg:col-span-6" : "lg:col-span-3"}
                >
                  <AudienceCard {...item} featured={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioSection
          eyebrow={portfolioSectionContent.eyebrow}
          title={portfolioSectionContent.title}
          description={portfolioSectionContent.description}
          items={portfolioItems}
        />

        <TeamSection
          eyebrow={teamSectionContent.eyebrow}
          title={teamSectionContent.title}
          leaders={leadershipTeam}
          operationalMembers={operationalTeam}
        />

        <PartnersSection
          eyebrow={partnersSectionContent.eyebrow}
          title={partnersSectionContent.title}
          logos={partnerLogos}
        />

        <ProjectCtaBanner {...projectCtaContent} />

        <SiteFooter
          tagline={footerContent.tagline}
          newsletterPlaceholder={footerContent.newsletterPlaceholder}
          newsletterButtonLabel={footerContent.newsletterButtonLabel}
          newsletterHelper={footerContent.newsletterHelper}
          navigationLinks={footerNavigationLinks}
          regions={footerContent.regions}
          contactEmail={footerContent.contactEmail}
          socialLinks={footerContent.socialLinks}
          copyright={footerContent.copyright}
        />
      </main>
    </>
  );
}
