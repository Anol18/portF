import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mohammad Rafe | Digital Growth & Measurement Specialist",
    template: "%s | Mohammad Rafe",
  },
  description:
    "Mohammad Rafe is a Digital Growth & Measurement Specialist helping businesses grow with Google Ads, Meta Ads, GA4, GTM, conversion tracking and server-side measurement.",
  keywords: siteConfig.seoKeywords,
  authors: [{ name: "Mohammad Rafe", url: siteConfig.url }],
  creator: "Mohammad Rafe",
  publisher: "Mohammad Rafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.domain,
    title: "Mohammad Rafe | Digital Growth & Measurement Specialist",
    description:
      "Grow Smarter. Measure Better. Performance advertising, GA4, GTM, and Server-Side tracking solutions that turn marketing data into measurable growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Rafe - Digital Growth & Measurement Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Rafe | Digital Growth & Measurement Specialist",
    description:
      "Grow Smarter. Measure Better. Performance advertising, GA4, GTM, and Server-Side tracking solutions that turn marketing data into measurable growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090d16] text-[#f1f5f9] light:bg-[#f8fafc] light:text-[#0f172a] bg-grid-pattern selection:bg-emerald-500/30 selection:text-emerald-200 light:selection:text-emerald-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
