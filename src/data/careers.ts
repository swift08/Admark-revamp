export type CareerOpening = {
  id: string;
  role: string;
  type: string;
  description: string;
};

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "web-dev-intern",
    role: "Web Development Intern",
    type: "Mysuru · Hybrid",
    description:
      "Ship production UI with React and TypeScript. Pair with senior engineers on client sites, internal tools, and performance work.",
  },
  {
    id: "ui-ux-intern",
    role: "UI / UX Design Intern",
    type: "Remote · Full-time",
    description:
      "Research user flows, wireframe conversion paths, and deliver high-fidelity screens aligned with AdMark's research-led process.",
  },
  {
    id: "bd-intern",
    role: "Business Development Intern",
    type: "Bangalore · Hybrid",
    description:
      "Support outreach, proposal scoping, and client discovery for startups and MSMEs across our core service pillars.",
  },
  {
    id: "marketing-intern",
    role: "Digital Marketing Intern",
    type: "Remote · Full-time",
    description:
      "Run content, SEO, and campaign experiments. Measure what moves pipeline, not vanity metrics.",
  },
];
