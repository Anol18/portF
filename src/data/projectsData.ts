export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  client: string;
  industry: string;
  duration: string;
  summary: string;
  heroMetric: {
    value: string;
    label: string;
    sublabel: string;
  };
  tools: string[];
  challenge: string;
  strategy: string;
  implementation: string[];
  measurement: string[];
  optimization: string[];
  results: {
    label: string;
    value: string;
    change: string;
    description: string;
  }[];
  keyTakeaways: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "mrcs",
    slug: "excellence-for-mrcs",
    name: "Excellence for MRCS",
    client: "Excellence for MRCS Education Academy",
    industry: "Medical Education & Professional Certification",
    duration: "6 Months Retainer",
    summary:
      "Engineered full-funnel Google Ads campaigns coupled with server-side GTM tracking and offline bank payment attribution for international surgical candidates.",
    heroMetric: {
      value: "+142%",
      label: "Qualified Candidate Leads",
      sublabel: "With 38% reduction in Cost Per Acquisition",
    },
    tools: ["Google Ads", "Google Tag Manager (sGTM)", "Google Analytics 4", "Meta CAPI", "Stape Cloud"],
    challenge:
      "The academy faced climbing acquisition costs across international search markets (UK, Middle East, South Asia). Candidate registrations were happening across broken multi-step forms, and many high-value tuition payments were completed via offline wire transfers without digital attribution, leaving Google's smart bidding algorithms operating with partial data.",
    strategy:
      "Restructured the entire Google Ads account into high-intent STAGs (Single-Theme Ad Groups) separating candidates by exam stage (MRCS Part A vs Part B). Implemented a comprehensive server-side tracking pipeline to capture lead inquiries, WhatsApp chats, and uploaded verified offline tuition payments as high-value offline conversions.",
    implementation: [
      "Deployed Server-Side Google Tag Manager hosted on custom first-party subdomain (data.excellence-mrcs.com)",
      "Built multi-step lead capture forms with instant WhatsApp handoff and GCLID session storage",
      "Configured GA4 Enhanced Measurement with custom dimensions for target surgical specialties",
      "Automated weekly offline conversion uploads linking bank wire confirmations to initial Google Click IDs",
      "Launched localized Performance Max campaigns with surgical training asset groups",
    ],
    measurement: [
      "Exam syllabus downloads and lead form submissions",
      "Direct WhatsApp counseling chat initiations",
      "Online checkout start events and mock exam registrations",
      "Offline tuition bank transfer completions",
      "Cross-domain attribution between blog learning materials and course checkout",
    ],
    optimization: [
      "Implemented exhaustive negative keyword lists eliminating generic medical queries",
      "Shifted Google bidding strategy from Maximize Clicks to Target CPA based on verified offline enrollees",
      "Refined ad schedules to match peak study hours of junior doctors in target time zones",
      "Created dynamic countdown ad copy aligned with official Royal College exam registration deadlines",
    ],
    results: [
      {
        label: "Qualified Leads",
        value: "+142%",
        change: "positive",
        description: "Verified candidate inquiries increased dramatically over 6 months",
      },
      {
        label: "Cost Per Acquisition",
        value: "-38%",
        change: "positive",
        description: "Reduced average candidate acquisition cost across international campaigns",
      },
      {
        label: "Tracking Accuracy",
        value: "99.4%",
        change: "positive",
        description: "Zero duplicate transactions and complete offline conversion attribution",
      },
      {
        label: "Enrolled Doctors",
        value: "680+",
        change: "positive",
        description: "Surgical candidates enrolled in premium coaching batches",
      },
    ],
    keyTakeaways:
      "High-intent professional training thrives when offline conversions and server-side tracking validate real paying students rather than superficial clicks, training ad algorithms to target serious candidates.",
    testimonial: {
      quote:
        "Mohammad Rafe solved our multi-country attribution nightmare. Not only did our ad spend become completely measurable, but our enrollment numbers hit record highs while our cost per candidate dropped by nearly 40%.",
      author: "Lead Program Coordinator",
      role: "Excellence for MRCS",
    },
  },
  {
    id: "luxury-shopping",
    slug: "luxury-shopping",
    name: "Luxury Shopping Brand",
    client: "Luxury Shopping Apparel & Accessories",
    industry: "High-Ticket Luxury eCommerce",
    duration: "4 Months Optimization",
    summary:
      "Recovered 35%+ lost purchase signals post-iOS 14.5 through Meta Conversions API (CAPI) with Server-Side GTM, lifting attributed ROAS to 3.4x.",
    heroMetric: {
      value: "8.9/10",
      label: "Meta Event Match Quality",
      sublabel: "Up from 4.2/10 before CAPI deployment",
    },
    tools: ["Meta Conversions API", "Server-Side GTM", "GA4 eCommerce", "Shopify Plus", "Meta Ads Manager"],
    challenge:
      "Due to Safari ITP cookie expirations and iOS ad-tracking opt-outs, the brand suffered an acute 35% drop in tracked purchases on Meta. With an Average Order Value exceeding $280, Meta's Advantage+ campaigns were starving for conversion data, resulting in fluctuating CPMs and unstable ad performance.",
    strategy:
      "Engineered an enterprise dual-channel tracking architecture using Server-Side GTM on Stape Cloud with first-party cookie mapping. Enriched server events with SHA-256 hashed customer parameters (email, phone, fbp, fbc, user agent, IP) and enforced strict event_id deduplication.",
    implementation: [
      "Configured Server-Side GTM container connected to Shopify Plus Webhooks and DataLayer",
      "Implemented Meta CAPI with redundant browser Pixel fallback and exact event_id matching",
      "Activated Enhanced Conversions in Google Ads using hashed user data",
      "Set up first-party cookie delegation extending attribution windows to 90+ days",
      "Restructured Meta Ads account into top-of-funnel creative testing and high-value LTV retargeting",
    ],
    measurement: [
      "ViewItem, AddToCart, and InitiateCheckout funnel milestone drop-offs",
      "Real-time Purchase event deduplication between browser and server",
      "Meta Event Match Quality (EMQ) score on high-value orders",
      "First-party customer lifetime value (LTV) cohort progression",
      "Blended MER (Marketing Efficiency Ratio) and platform-reported ROAS",
    ],
    optimization: [
      "A/B tested catalog collection ads against lifestyle founder video hooks",
      "Segmented remarketing by cart value: <$200 vs >$500 cart abandoners with differentiated offers",
      "Suppressed existing buyers for 45 days post-purchase to prevent wasteful ad exposure",
      "Fine-tuned bidding towards Value Optimization rather than raw Purchase counts",
    ],
    results: [
      {
        label: "Event Match Quality",
        value: "8.9 / 10",
        change: "positive",
        description: "Attained top-tier Meta data fidelity rating",
      },
      {
        label: "Attributed ROAS",
        value: "3.4x",
        change: "positive",
        description: "Consistent blended return across scaled ad spend",
      },
      {
        label: "Signal Recovery",
        value: "+47%",
        change: "positive",
        description: "Previously lost iOS 14.5+ purchases reliably captured and attributed",
      },
      {
        label: "Revenue Growth",
        value: "+85%",
        change: "positive",
        description: "Quarter-over-quarter revenue lift driven by stabilized ad delivery",
      },
    ],
    keyTakeaways:
      "High-ticket eCommerce cannot afford browser-only measurement. Server-side CAPI feeds ad networks the precise first-party signals required to stabilize algorithmic bidding and protect profitability.",
    testimonial: {
      quote:
        "Mohammad's server-side tracking setup was an absolute game changer. We went from wondering why Meta wasn't reporting our best sales to seeing every transaction accurately attributed with an 8.9 Event Match Quality.",
      author: "E-Commerce Director",
      role: "Luxury Shopping Brand",
    },
  },
  {
    id: "aman-toys",
    slug: "aman-toys",
    name: "Aman Toys",
    client: "Aman Toys Retail & Online Store",
    industry: "Retail & Consumer Toys eCommerce",
    duration: "Ongoing Growth Partner",
    summary:
      "Overhauled GA4 Enhanced eCommerce dataLayer tracking and deployed dynamic Google Shopping and Meta catalog ads, boosting tracked revenue by +210%.",
    heroMetric: {
      value: "+210%",
      label: "Tracked eCommerce Revenue",
      sublabel: "With +28% checkout completion rate",
    },
    tools: ["Google Analytics 4", "Google Tag Manager", "Google Shopping / Merchant Center", "Meta Catalog Ads"],
    challenge:
      "The client had an active online toy store with high traffic but had no granular insight into where shoppers were dropping out of the purchase journey. Google Analytics was missing item-level data, cart abandonment was high, and product ad feeds were misaligned with current inventory stock.",
    strategy:
      "Implemented a standardized GA4 Enhanced eCommerce schema covering every micro-interaction from item impressions to final invoice. Connected Google Merchant Center and Meta Product Catalogs with automated live feed synchronization and launched segmented retargeting campaigns for cart abandoners.",
    implementation: [
      "Built complete dataLayer instrumentation (view_item_list, select_item, view_item, add_to_cart, view_cart, begin_checkout, add_payment_info, purchase)",
      "Set up dynamic checkout abandonment triggers in GTM",
      "Audited and cleaned up Google Merchant Center product feed disapprovals",
      "Built custom GA4 exploration reports analyzing product category conversion rates",
      "Launched dynamic remarketing ads with personalized discount incentives for warm carts",
    ],
    measurement: [
      "Item view to Add-to-Cart ratio by toy category",
      "Checkout funnel drop-off between shipping selection and payment gateway",
      "Total revenue, transaction IDs, tax, and shipping breakdown",
      "Google Shopping ad ROAS per individual product SKU",
      "Cross-channel customer acquisition journeys",
    ],
    optimization: [
      "Streamlined the 3-step checkout page into an accordion layout based on GA4 drop-off data",
      "Prioritized ad spend on best-selling holiday educational toy lines",
      "Set up 24-hour and 72-hour dynamic catalog remarketing cadences",
      "Filtered out out-of-stock items automatically from ad campaigns",
    ],
    results: [
      {
        label: "Tracked Revenue",
        value: "+210%",
        change: "positive",
        description: "Verified increase in attributed online sales revenue",
      },
      {
        label: "Checkout Completion",
        value: "+28%",
        change: "positive",
        description: "Drop-off reduction following funnel analytics audit",
      },
      {
        label: "Blended ROAS",
        value: "4.1x",
        change: "positive",
        description: "Average return on ad spend across Google and Meta campaigns",
      },
      {
        label: "Cart Recovery Rate",
        value: "18.4%",
        change: "positive",
        description: "High-intent abandoned carts recovered via automated remarketing",
      },
    ],
    keyTakeaways:
      "You cannot fix what you cannot see. Full-funnel eCommerce measurement immediately pinpoints checkout friction points and unlocks hyper-profitable dynamic catalog retargeting.",
  },
  {
    id: "hikmah-overseas",
    slug: "hikmah-overseas",
    name: "Hikmah Overseas",
    client: "Hikmah Overseas Education & Visa Consulting",
    industry: "Study Abroad & Immigration Consultancy",
    duration: "5 Months Campaign",
    summary:
      "Designed a full-funnel lead generation framework with Google Search, Meta Ads, Call Tracking, and CRM offline conversion feedback, resulting in 450+ student enrollments.",
    heroMetric: {
      value: "-52%",
      label: "Cost Per Qualified Lead",
      sublabel: "450+ verified student admissions achieved",
    },
    tools: ["Google Search Ads", "Meta Lead Ads", "Dynamic Call Tracking", "WhatsApp API Tracking", "CRM Webhooks"],
    challenge:
      "The agency was spending heavily on Facebook and Google ads but receiving hundreds of unqualified submissions—students without basic language requirements or budget. Additionally, 70% of candidate interactions happened over WhatsApp and phone calls, leaving digital ad platforms unable to distinguish genuine applicants from spam.",
    strategy:
      "Redesigned the intake funnel with an interactive multi-step qualification assessment before lead submission. Implemented dynamic call tracking and WhatsApp click attribution, combined with a CRM webhook that transmitted verified student consultation milestones back to Google Ads as offline conversions.",
    implementation: [
      "Built custom qualification landing pages with prerequisite screening criteria",
      "Implemented dynamic call tracking with minimum call-duration event triggers",
      "Added WhatsApp conversation tracking passing UTM referral parameters into sales chats",
      "Connected CRM pipeline stages ('Consultation Completed', 'File Opened') to Google Ads Offline Conversions",
      "Configured Meta Instant Forms with conditional qualification questions",
    ],
    measurement: [
      "Initial assessment form starts and completions",
      "WhatsApp inquiries with specific destination country interest",
      "Phone calls lasting over 90 seconds (Sales Qualified Calls)",
      "CRM stage milestones: Initial counseling attended and university file opened",
      "True Cost Per Enrolled Student across all ad channels",
    ],
    optimization: [
      "Configured Google Smart Bidding to optimize exclusively for CRM-validated 'File Opened' conversions",
      "Excluded non-viable demographic segments and geographical locations outside target student clusters",
      "Created country-specific ad creatives (UK, Canada, Australia) addressing student visa requirements",
      "Introduced automated email and WhatsApp confirmation reminders reducing consultation no-shows",
    ],
    results: [
      {
        label: "Cost Per Qualified Lead",
        value: "-52%",
        change: "positive",
        description: "Substantial drop in cost to acquire verified qualified applicants",
      },
      {
        label: "Consultation Show-Up",
        value: "84%",
        change: "positive",
        description: "Up from 41% before qualification screening was introduced",
      },
      {
        label: "Successful Admissions",
        value: "450+",
        change: "positive",
        description: "Students successfully placed in international university programs",
      },
      {
        label: "Offline Data Match",
        value: "96.2%",
        change: "positive",
        description: "CRM consultations accurately attributed back to original ad campaigns",
      },
    ],
    keyTakeaways:
      "In high-trust service industries, feeding offline qualification milestones back into ad platforms trains machine learning to stop generating cheap junk leads and focus on high-intent clients.",
    testimonial: {
      quote:
        "Before Mohammad Rafe, our counselors spent half their day calling people who couldn't even qualify for a visa. Mohammad redesigned our tracking and campaigns so that 80%+ of our leads are now genuinely qualified students.",
      author: "Managing Director",
      role: "Hikmah Overseas Consultancy",
    },
  },
];
