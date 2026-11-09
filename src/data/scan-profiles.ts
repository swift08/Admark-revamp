import tejasviPhoto from "@/assets/team-tejasvi.webp";
import harshithPhoto from "@/assets/team-harshith.jpeg";
import revanthPhoto from "@/assets/team-revanth.png";
import prajwalPhoto from "@/assets/team-prajwal.png";

export type ScanProfile = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  description: string;
  /** Optional photo URL — leave empty for initials placeholder */
  image?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
};

export const SCAN_PROFILES: ScanProfile[] = [
  {
    slug: "tejasvi-jois",
    name: "Tejasvi Jois",
    role: "Founder",
    initials: "TJ",
    description:
      "Tech entrepreneur and startup founder in Mysore. Leading AdMark Digitals and REXU safety technology.",
    image: tejasviPhoto,
    linkedin: "https://www.linkedin.com/in/tejasvijois",
    email: "tejasvijois@gmail.com",
    phone: "9686658055",
    whatsapp: "919686658055",
  },
  {
    slug: "harshith-v-malipatil",
    name: "Harshith V Malipatil",
    role: "Co-founder & COO",
    initials: "HM",
    description:
      "Co-founder and COO at AdMark Digitals, building operations and growth for digital products and safety technology.",
    image: harshithPhoto,
    linkedin: "https://www.linkedin.com/in/harshith-malipatil-6503a4264/",
    email: "malipatilharshith@gmail.com",
    phone: "9632092273",
    whatsapp: "919632092273",
  },
  {
    slug: "revanth-kumar-s",
    name: "Revanth Kumar S",
    role: "CTO",
    initials: "RK",
    description:
      "Chief Technology Officer driving product engineering across AdMark Digitals and REXU.",
    image: revanthPhoto,
    linkedin: "https://www.linkedin.com/in/revanth-kumar-s-a43672218/",
    phone: "8413005243",
    whatsapp: "918413005243",
  },
  {
    slug: "prajwal-bp",
    name: "Prajwal BP",
    role: "CFO",
    initials: "PB",
    description:
      "Chief Financial Officer guiding finance and strategy for AdMark Digitals and REXU.",
    image: prajwalPhoto,
    linkedin: "https://www.linkedin.com/in/prajwal-prashanth-479348228/",
    phone: "7259588826",
    whatsapp: "917259588826",
  },
];

export function getScanProfileBySlug(slug: string): ScanProfile | undefined {
  return SCAN_PROFILES.find((profile) => profile.slug === slug);
}
