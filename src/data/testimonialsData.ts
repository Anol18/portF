export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  rating: number;
  highlightMetric: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "Mohammad Rafe completely transformed our attribution setup. His server-side GTM and Meta Conversions API implementation recovered over 35% in unrecorded sales and pushed our Event Match Quality to 8.9/10.",
    author: "Zubair Al-Mansoor",
    role: "Head of Growth & eCommerce",
    company: "Luxury Shopping Retail",
    project: "Meta CAPI & Server-Side GTM",
    rating: 5,
    highlightMetric: "8.9/10 Event Match Quality",
  },
  {
    id: "2",
    quote:
      "Our medical training academy was struggling with international ad attribution. Mohammad integrated offline wire transfers with Google Ads Smart Bidding, cutting our CPA by 38% while scaling qualified doctor enrollments by 142%.",
    author: "Dr. K. Rahman",
    role: "Executive Director",
    company: "Excellence for MRCS",
    project: "Google Ads & Offline Conversion Pipeline",
    rating: 5,
    highlightMetric: "+142% Qualified Inquiries",
  },
  {
    id: "3",
    quote:
      "Before working with Mohammad, our counselors wasted hours filtering unqualified leads. By connecting dynamic call tracking and CRM stages directly to Google and Meta, we halved our cost per qualified candidate.",
    author: "Tanvir Ahmed",
    role: "Managing Director",
    company: "Hikmah Overseas Consultancy",
    project: "Lead Gen & Offline Call Tracking",
    rating: 5,
    highlightMetric: "-52% Cost Per Qualified Lead",
  },
  {
    id: "4",
    quote:
      "The GA4 Enhanced eCommerce dataLayer audit and rebuild by Mohammad Rafe gave us real clarity on cart drop-offs. His dynamic retargeting setup drove a 4.1x return on ad spend.",
    author: "Farhan Chowdhury",
    role: "Founder & Operations Lead",
    company: "Aman Toys",
    project: "GA4 Funnels & Dynamic Shopping Ads",
    rating: 5,
    highlightMetric: "4.1x Blended ROAS",
  },
];
