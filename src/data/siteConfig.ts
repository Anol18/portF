export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  title: string;
  primaryTitle: string;
  supportingTitle: string;
  tagline: string;
  positioning: string;
  brandMessage: string;
  experienceClaim: string;
  marketExperience: string;
  email: string;
  whatsapp: {
    number: string;
    display: string;
    link: string;
  };
  linkedin: string;
  navLinks: { name: string; href: string }[];
  seoKeywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "Mohammad Rafe",
  domain: "MRafeDigital.com",
  url: "https://mrafedigital.com",
  title: "Mohammad Rafe | Digital Growth & Measurement Specialist",
  primaryTitle: "Digital Growth & Measurement Specialist",
  supportingTitle: "Digital Marketing, Analytics & Tracking Specialist",
  tagline: "Grow Smarter. Measure Better.",
  positioning: "Marketing → Measurement → Growth",
  brandMessage:
    "Marketing gets attention. Measurement shows what matters. Growth comes from improving what works. Mohammad Rafe combines performance marketing, analytics and tracking to help businesses build a more measurable digital growth system.",
  experienceClaim: "4+ Years Experience",
  marketExperience:
    "Bangladesh and international markets, through direct client projects and multiple freelancing platforms.",
  email: "almahmudrafe@gmail.com",
  whatsapp: {
    number: "+8801618824349",
    display: "+880 1618-824349",
    link: "https://wa.me/8801618824349?text=Hi%20Mohammad%20Rafe,%20I'd%20like%20to%20discuss%20a%20digital%20marketing%20and%20tracking%20project.",
  },
  linkedin: "https://www.linkedin.com/in/digital-marketer-rafe",
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  seoKeywords: [
    "Digital Growth Specialist",
    "Digital Marketing Specialist",
    "Google Ads Specialist",
    "Meta Ads Specialist",
    "GA4 Specialist",
    "Google Tag Manager Specialist",
    "Conversion Tracking Specialist",
    "Server-Side Tracking Specialist",
    "Meta Conversions API Specialist",
    "eCommerce Tracking Specialist",
    "Digital Analytics Consultant",
    "Performance Marketing Specialist",
  ],
};
