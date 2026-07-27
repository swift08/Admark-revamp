export type FeaturedProject = {
  name: string;
  url: string;
  domain: string;
  tag: string;
  headline: string;
  body: string;
};

export type ClientProject = {
  name: string;
  url: string;
  location?: string;
  quote: string;
};

/** @deprecated Use CLIENT_PROJECTS — kept for teaser slice compatibility */
export type CaseStudy = {
  ref: string;
  name: string;
  tag: string;
  body: string;
  url?: string;
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
};

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    name: "Dronark Aerospace",
    url: "https://dronarkaerospace.com",
    quote:
      "Not just a client. A founder-led decision. Founded by Drone Prathap, Dronark represents ambition and aerospace innovation — we built a digital presence to match that scale.",
  },
  {
    name: "Vivid Infrastructures",
    location: "Mysore",
    url: "https://www.vividinfrastructures.com/",
    quote:
      "Everything was perfect from the first design. The website looks great and the team's follow-up was excellent. We couldn't be happier with the results.",
  },
  {
    name: "Naidile",
    url: "https://www.naidile.com",
    quote:
      "Professional execution with a strong understanding of our brand vision. Clean, modern, and delivered on time.",
  },
  {
    name: "Nandini Decor",
    url: "https://www.nandinidecor.com",
    quote:
      "The design reflects our creativity beautifully. Smooth communication and a very refined outcome.",
  },
  {
    name: "DEE Events",
    url: "https://www.deeevents.in",
    quote:
      "A vibrant and well-structured website that showcases our events perfectly. The team understood our requirements clearly.",
  },
  {
    name: "Shree Samrajya Lakshmi Foundation",
    url: "https://www.shreesamrajyalakshmifoundation.org/",
    quote: "Elegant layout, easy navigation, and a strong representation of our mission.",
  },
  {
    name: "Brookwell Industries",
    url: "https://brookwellindustries.in/",
    quote: "A strong corporate presence online. Structured, professional, and performance-driven.",
  },
  {
    name: "Rama AI",
    url: "https://www.ramaai.in",
    quote: "Modern, tech-focused design that aligns perfectly with our AI positioning.",
  },
];

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

/** Preview cards for homepage carousel */
export const CASE_STUDIES: CaseStudy[] = CLIENT_PROJECTS.slice(0, 5).map((p, i) => ({
  ref: String(i + 1).padStart(2, "0"),
  name: p.location ? `${p.name} — ${p.location}` : p.name,
  tag: "Web · Live",
  body: p.quote,
  url: p.url,
}));
