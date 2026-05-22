export type NavigationLink = {
  label: string;
  href: string;
};

export const navigationLinks: NavigationLink[] = [
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Portfolios", href: "/#portfolio" },
  { label: "Team", href: "/#team" },
  { label: "Partners", href: "/#partners" }
];

export const primaryNavigationCta = {
  label: "Apply to Work",
  href: "/#apply"
};

export const footerNavigationLinks: NavigationLink[] = [
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Who We Work With", href: "/#who-we-work-with" },
  { label: "Partners", href: "/#partners" },
  { label: "Team", href: "/#team" }
];
