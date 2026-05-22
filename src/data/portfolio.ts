export type PortfolioItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  visualTone: string;
  logoSymbol: string;
};

export const portfolioSectionContent = {
  eyebrow: "Portfolio",
  title: "Supporting companies entering and growing in new markets.",
  description:
    "We support selected companies where we believe we can create real commercial value."
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "muuvment",
    name: "Muuvment",
    category: "Mobility Infrastructure",
    description:
      "Developing intelligent mobility systems focused on sustainable urban transportation.",
    visualTone: "from-[#7f5539] via-[#3b1d5c] to-[#091a61]",
    logoSymbol: "✺"
  },
  {
    slug: "oneedershot",
    name: "OneederShot",
    category: "Consumer Technology",
    description:
      "Building focused consumer technology products designed for high-retention adoption.",
    visualTone: "from-[#4f6bed] via-[#1b2d7a] to-[#101a29]",
    logoSymbol: "◔"
  },
  {
    slug: "advatar",
    name: "Advatar",
    category: "AI Infrastructure",
    description:
      "Creating infrastructure that helps AI products scale with operational reliability.",
    visualTone: "from-[#ffa285] via-[#7751b8] to-[#102961]",
    logoSymbol: "◉"
  },
  {
    slug: "rest-easier",
    name: "Rest Easier",
    category: "Health & Wellbeing",
    description:
      "Designing wellbeing services with practical delivery models for regional growth.",
    visualTone: "from-[#f4b48e] via-[#d57f6b] to-[#102961]",
    logoSymbol: "⌘"
  },
  {
    slug: "wagyu-arabiya",
    name: "Wagyu Arabiya",
    category: "Food & Agriculture",
    description:
      "Shaping premium food and agriculture ventures for selective market expansion.",
    visualTone: "from-[#d4995c] via-[#675c42] to-[#101a29]",
    logoSymbol: "✷"
  },
  {
    slug: "sonotarg",
    name: "Sonotarg",
    category: "Medical Technology",
    description:
      "Positioning medical technology innovation with serious institutional pathways.",
    visualTone: "from-[#6aa8ff] via-[#2e5cc5] to-[#101a29]",
    logoSymbol: "◑"
  },
  {
    slug: "permia-sensing",
    name: "Permia Sensing",
    category: "Industrial Sensing",
    description:
      "Scaling sensing technology into industrial environments with execution discipline.",
    visualTone: "from-[#86a8c6] via-[#4d5870] to-[#101a29]",
    logoSymbol: "◌"
  },
  {
    slug: "hillsbridge",
    name: "Hillsbridge",
    category: "Deep Technology",
    description:
      "Backing deep technology companies that need structured market traction.",
    visualTone: "from-[#f3c99b] via-[#b99b7e] to-[#102961]",
    logoSymbol: "⌬"
  },
  {
    slug: "ardhann",
    name: "Ardhann",
    category: "Digital Infrastructure",
    description:
      "Supporting digital infrastructure ventures entering complex regional ecosystems.",
    visualTone: "from-[#6a7fbf] via-[#364873] to-[#101a29]",
    logoSymbol: "✹"
  },
  {
    slug: "p-chip",
    name: "p-Chip",
    category: "Authentication Technology",
    description:
      "Commercializing authentication technology with a practical GCC entry path.",
    visualTone: "from-[#c7967e] via-[#7b5664] to-[#101a29]",
    logoSymbol: "◐"
  },
  {
    slug: "ais-field",
    name: "AIS Field",
    category: "Field Intelligence Systems",
    description:
      "Deploying field intelligence systems through the right operators and buyers.",
    visualTone: "from-[#9db9d9] via-[#5f678f] to-[#101a29]",
    logoSymbol: "◎"
  },
  {
    slug: "lumi",
    name: "Lumi",
    category: "Energy Technology",
    description:
      "Advancing energy technology companies that need traction before full setup.",
    visualTone: "from-[#ffb27d] via-[#7f5e6b] to-[#102961]",
    logoSymbol: "◈"
  }
];
