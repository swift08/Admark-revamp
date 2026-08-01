export type FeaturedProject = {
  name: string;
  url: string;
  domain: string;
  tag: string;
  headline: string;
  body: string;
  /** Website preview shown when the featured card expands */
  previewImage?: string;
};

export type ClientProject = {
  name: string;
  url?: string;
  location?: string;
  quote: string;
  previewImage?: string;
};

/** @deprecated Use SOFTWARE_PROJECTS / CLIENT_WEBSITES */
export type CaseStudy = {
  ref: string;
  name: string;
  tag: string;
  body: string;
  url?: string;
  previewImage?: string;
};

export type WorkShowcase = {
  id: string;
  name: string;
  tag: string;
  body: string;
  image: string;
  url: string;
};

export const FEATURED_PROJECT: FeaturedProject = {
  name: "REXU",
  url: "https://rexu.in/",
  domain: "rexu.in",
  tag: "Safety · SaaS · B2B & B2C",
  headline: "Technology that speaks when you can't.",
  body: "REXU is a safety and trust platform for real-world emergencies — for individual riders and families, and for logistics companies, cab operators, and fleet owners. A QR on your vehicle or ID lets anyone reach your emergency contacts in seconds: no app required, privacy intact, active 24/7. Built for Indian roads, families, and workplaces.",
  previewImage: "/work/rexu-site.png",
};

/** Software / product builds — 6 total with REXU featured above */
export const SOFTWARE_PROJECTS: CaseStudy[] = [
  {
    ref: "01",
    name: "Rent Flow",
    tag: "SaaS · Rent Management",
    body: "Rent management for multi-owner properties — on-time rent emails, invoice creation, cash book, bank statements, GST/tax account users, and monthly expenses like water bills.",
  },
  // ponytail: 4 more software projects TBD — fill to 6 total with REXU
];

/** Client websites — exactly 5 */
export const CLIENT_WEBSITES: ClientProject[] = [
  {
    name: "Dronark Aerospace",
    url: "https://dronarkaerospace.com",
    quote:
      "Not just a client. A founder-led decision. Founded by Drone Prathap, Dronark represents ambition and aerospace innovation — we built a digital presence to match that scale.",
    previewImage: "/work/dronark-site.png",
  },
  {
    name: "Vivid Infrastructures",
    location: "Mysore",
    url: "https://www.vividinfrastructures.com/",
    quote:
      "Everything was perfect from the first design. The website looks great and the team's follow-up was excellent. We couldn't be happier with the results.",
    previewImage: "/work/vivid-preview.png",
  },
  {
    name: "Naidile",
    url: "https://www.naidile.com",
    quote:
      "Professional execution with a strong understanding of our brand vision. Clean, modern, and delivered on time.",
    previewImage: "/work/naidile-preview.png",
  },
  {
    name: "Nandini Decor",
    url: "https://www.nandinidecor.com",
    quote:
      "The design reflects our creativity beautifully. Smooth communication and a very refined outcome.",
    previewImage: "/work/nandini-site.png",
  },
  {
    name: "DEE Events",
    url: "https://www.deeevents.in",
    quote:
      "A vibrant and well-structured website that showcases our events perfectly. The team understood our requirements clearly.",
    previewImage: "/work/dee-events-site.png",
  },
];

/** @deprecated alias — websites only */
export const CLIENT_PROJECTS = CLIENT_WEBSITES;

/** Industry visual cards for homepage 3D coverflow */
export const WORK_SHOWCASE: WorkShowcase[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    tag: "ERP · Operations",
    body: "Shop-floor systems and production tooling built around real workflows — not templates.",
    image: "/work/work-manufacturing.png",
    url: "/work",
  },
  {
    id: "saas",
    name: "SaaS Platforms",
    tag: "Product · Scale",
    body: "Multi-tenant products with clean architecture, billing-ready foundations, and room to grow.",
    image: "/work/work-saas.png",
    url: "https://rexu.in/",
  },
  {
    id: "salon",
    name: "Beauty & Salon",
    tag: "Brand · Bookings",
    body: "Polished digital presence for wellness and salon brands that need to convert walk-ins online.",
    image: "/work/work-salon.png",
    url: "/work",
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    tag: "Web · Corporate",
    body: "Authoritative sites for builders and infrastructure firms — clear, credible, conversion-led.",
    image: "/work/work-infrastructure.png",
    url: "https://www.vividinfrastructures.com/",
  },
  {
    id: "aerospace",
    name: "Drones & Aerospace",
    tag: "Web · Brand",
    body: "High-ambition digital platforms for aerospace and drone companies ready to look the part.",
    image: "/work/work-aerospace.png",
    url: "https://dronarkaerospace.com",
  },
];

/** Homepage case studies — the 5 client websites */
export const CASE_STUDIES: CaseStudy[] = CLIENT_WEBSITES.map((p, i) => ({
  ref: String(i + 1).padStart(2, "0"),
  name: p.location ? `${p.name} — ${p.location}` : p.name,
  tag: "Web · Live",
  body: p.quote,
  url: p.url,
  previewImage: p.previewImage,
}));
