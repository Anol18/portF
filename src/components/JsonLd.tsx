import { siteConfig } from "@/data/siteConfig";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.primaryTitle,
    alternateName: siteConfig.supportingTitle,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [siteConfig.linkedin, siteConfig.whatsapp.link],
    knowsAbout: siteConfig.seoKeywords,
    description: siteConfig.brandMessage,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mohammad Rafe - Digital Growth & Measurement",
    image: `${siteConfig.url}/og-image.png`,
    url: siteConfig.url,
    telephone: siteConfig.whatsapp.number,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
