import { Container } from "@/components/Container";
import { HeroSection } from "@/components/HeroSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { PartnersSection } from "@/components/PartnersSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProjectCtaBanner } from "@/components/ProjectCtaBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TeamSection } from "@/components/TeamSection";
import { WhoWeWorkWithSection } from "@/components/WhoWeWorkWithSection";
import { footerContent, heroContent, howWeHelpContent, projectCtaContent } from "@/data/home";
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

        <HowWeWorkSection {...howWeHelpContent} />

        <WhoWeWorkWithSection />

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
