export type ServiceGroup = {
  id: string;
  slug: string;
  navLabel: string;
  title: string;
  tagline: string;
  services: string[];
  subServices: string[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "01",
    slug: "digital-solutions",
    navLabel: "Digital Solutions",
    title: "Digital Solutions",
    tagline: "Build modern digital experiences that grow businesses",
    services: [
      "Web Development",
      "App Development",
      "Custom Software Development",
      "SaaS Software Development",
    ],
    subServices: [
      "Business websites",
      "E-commerce platforms",
      "Admin dashboards",
      "CRM/ERP systems",
      "Cross-platform apps",
      "Enterprise software",
      "Scalable cloud solutions",
    ],
  },
  {
    id: "02",
    slug: "ai-intelligent-systems",
    navLabel: "AI & Intelligent Systems",
    title: "AI & Intelligent Systems",
    tagline: "Smart technology powered by AI and automation",
    services: [
      "AI Models Development",
      "WhatsApp Chat Agents",
      "Automation Solutions",
      "Generative AI Solutions",
    ],
    subServices: [
      "Predictive Models",
      "NLP (Natural Language Processing)",
      "Computer Vision",
      "Recommendation Systems",
      "AI Chatbots",
      "Workflow Automation",
      "Process Intelligence",
    ],
  },
  {
    id: "03",
    slug: "data-analytics",
    navLabel: "Data & Analytics",
    title: "Data & Analytics",
    tagline: "Transform raw data into business intelligence",
    services: [
      "Dataset Curation",
      "Business Analytics",
      "Data Cleaning & Structuring",
      "AI/ML Data Preparation",
    ],
    subServices: [
      "Data collection",
      "Dataset annotation",
      "Analytics dashboards",
      "Data optimization",
      "Insights & reporting",
    ],
  },
  {
    id: "04",
    slug: "business-growth",
    navLabel: "Business Growth",
    title: "Business Growth & Strategy",
    tagline: "Helping businesses scale smarter",
    services: [
      "Business Consultancy",
      "Digital Transformation Consulting",
      "Growth Strategy",
      "Process Optimization",
    ],
    subServices: [
      "Market analysis",
      "Performance improvement",
      "Technology consulting",
      "Business planning",
    ],
  },
  {
    id: "05",
    slug: "workforce-solutions",
    navLabel: "Workforce Solutions",
    title: "Workforce & Tech Hiring",
    tagline: "On-demand skilled professionals for your business",
    services: [
      "Workforce [Tech]",
      "Dedicated Developers",
      "QA & DevOps Teams",
      "Flexible Hiring Models",
    ],
    subServices: [
      "Staff augmentation",
      "Dedicated tech teams",
      "Contract-based hiring",
      "Project-based resources",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceGroup | undefined {
  return SERVICE_GROUPS.find((g) => g.slug === slug);
}
