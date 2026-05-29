import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { GridScan } from "@/components/site/GridScan";
import tejasvi from "@/assets/team-tejasvi.webp";
import harshith from "@/assets/team-harshith.png";
import prajwal from "@/assets/team-prajwal.png";
import revanth from "@/assets/team-revanth.png";
import { BackgroundGrid } from "@/components/site/BackgroundGrid";
import { Marquee } from "@/components/site/Marquee";
import { Faq } from "@/components/site/Faq";
import { FooterTagline } from "@/components/site/ScrollReveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceGroupCard } from "@/components/site/ServiceGroupCard";
import { CountUp } from "@/components/site/CountUp";
import { HeroHeadline } from "@/components/site/HeroHeadline";
import { SiteHeader } from "@/components/site/SiteHeader";
import { TeamPhoto } from "@/components/site/TeamPhoto";
import { CareersTeaser } from "@/components/site/CareersList";
import { WorkTeaser } from "@/components/site/WorkGrid";
import { CAREER_OPENINGS } from "@/data/careers";
import { SERVICE_GROUPS } from "@/data/services";
import { CASE_STUDIES, FEATURED_PROJECT } from "@/data/work";

import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_URL,
  CONTACT_SECONDARY_PHONE_DISPLAY,
  CONTACT_SECONDARY_PHONE_URL,
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Software Development Agency in Mysore | AdMark Digitals" },
      {
        name: "description",
        content:
          "Top software company in Mysore offering custom software development, website development, React, and Python solutions. Led by innovative startup founders in Saraswathipuram.",
      },
      { property: "og:title", content: "AdMark Digitals: Top Software Company in Mysore" },
      {
        property: "og:description",
        content:
          "Research-first agency building digital infrastructure for startups and MSMEs. We mentor final year engineering project developers.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

// ──────────────────────────────────────────────────────────────────────────
// Static content
// ──────────────────────────────────────────────────────────────────────────

const PROCESS = [
  {
    n: "01",
    t: "Discovery",
    d: "Audit business model, market gap and user intent. No assumptions.",
  },
  { n: "02", t: "Research", d: "Competitive teardown, user signals, technical feasibility study." },
  {
    n: "03",
    t: "Strategy",
    d: "Wireframes, information architecture, conversion logic, tech stack lock.",
  },
  {
    n: "04",
    t: "Development",
    d: "Modular, version-controlled engineering against staged milestones.",
  },
  {
    n: "05",
    t: "Testing",
    d: "Performance, security, accessibility and end-to-end QA before release.",
  },
  {
    n: "06",
    t: "Launch & Scale",
    d: "Deploy, monitor, iterate. Infrastructure scaled as load demands.",
  },
];

const INDUSTRIES = [
  "Manufacturing",
  "Infrastructure",
  "Beauty & Salon",
  "SaaS Startups",
  "Wellness",
  "Events & Hospitality",
  "Logistics",
  "Drones & Aerospace",
  "Education",
];

const TESTIMONIALS = [
  {
    q: "AdMark didn't sell us a website. They sold us a working hypothesis, then proved it on the page.",
    n: "Operations Lead",
    c: "Manufacturing client",
  },
  {
    q: "The ERP they built saved us four hours a day in week one. By month three it had paid for itself.",
    n: "Founder",
    c: "Logistics startup",
  },
  {
    q: "Most agencies talk in deliverables. These guys talk in metrics, and then ship to them.",
    n: "Co-founder",
    c: "Wellness SaaS",
  },
];

const LEADERSHIP = [
  {
    img: tejasvi,
    name: "Tejasvi Jois",
    role: "Founder & CEO",
    bio: "Tejasvi leads strategy, client architecture and the research methodology that anchors every project at AdMark Digitals and REXU.",
  },
  {
    img: harshith,
    name: "Harshith V. Malipatil",
    role: "Co-founder & COO",
    bio: "Harshith drives operations: client delivery, partnerships and the systems that keep every AdMark project on scope and on time.",
  },
  {
    img: revanth,
    name: "Revanth Kumar S",
    role: "CTO",
    bio: "Revanth leads engineering: product architecture, infrastructure and the technical R&D behind AdMark's SaaS, ERP and platform work.",
  },
  {
    img: prajwal,
    name: "Prajwal B. P.",
    role: "CFO",
    bio: "Prajwal oversees finance and commercial strategy: budgeting, forecasting and the fiscal discipline behind sustainable growth.",
  },
] as const;

// ──────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────

function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AdMark Digitals",
    "url": "https://admarkdigitals.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://admarkdigitals.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const founderSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://admarkdigitals.com/#tejasvijois",
        "name": "Tejasvi Jois",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@id": "https://admarkdigitals.com/#organization" },
        "alumniOf": { "@type": "EducationalOrganization", "name": "ATME College of Engineering" }
      },
      {
        "@type": "Person",
        "@id": "https://admarkdigitals.com/#harshith",
        "name": "Harshith V Malipatil",
        "jobTitle": "Co-founder & COO",
        "worksFor": { "@id": "https://admarkdigitals.com/#organization" },
        "alumniOf": { "@type": "EducationalOrganization", "name": "ATME College of Engineering" }
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground font-body overflow-x-clip">
      <JsonLd data={[homeSchema, founderSchema]} />
      <BackgroundGrid />
      <SiteHeader />
      <Hero />
      <ClientStrip />
      <Services />
      <Process />
      <Work />
      <Industries />
      <Founders />
      <Testimonials />
      <FaqSection />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Hero
// ──────────────────────────────────────────────────────────────────────────

function Hero() {

  return (
    <section id="top" className="relative border-b border-border-dim">
      {/* Grid stack: video pins in back, copy scrolls in front */}
      <div className="grid grid-cols-1">
        <div className="col-start-1 row-start-1 sticky top-0 z-0 h-svh w-full self-start overflow-hidden">
          <div className="absolute inset-0 z-0 bg-background">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <GridScan
                sensitivity={0.55}
                lineThickness={1}
                linesColor="#2F293A"
                gridScale={0.1}
                scanColor="#EF4444"
                scanOpacity={0.4}
                enablePost
                bloomIntensity={0.6}
                chromaticAberration={0.002}
                noiseIntensity={0.01}
              />
            </div>
          </div>
          {/* Black gradient layers over video */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.25)_35%,rgba(0,0,0,0.65)_65%,#000_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-transparent to-transparent"
            aria-hidden
          />
        </div>

        <div className="col-start-1 row-start-1 z-10 min-h-[min(200svh,200dvh)] w-full">
          <div className="flex h-svh w-full flex-col justify-end pt-[4.25rem] max-sm:pb-8 sm:pb-0">
            <div className="site-container max-w-5xl pb-24 sm:pb-12 md:pb-16">
              <p className="text-xs sm:text-sm text-brand-silver mb-4 max-w-md">
                Research-first digital agency · Est. 2024
              </p>

              <HeroHeadline className="font-display text-[clamp(1.75rem,4.25vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-balance max-w-2xl mb-4 sm:mb-5 text-foreground" />

              <div className="grid md:grid-cols-[minmax(0,22rem)_1fr] gap-6 md:gap-10 items-end">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty max-w-md">
                  We are a research-first studio building digital infrastructure for startups and MSMEs. We build scalable SaaS, custom ERPs, and high-performance websites that become business assets.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:justify-end">
                  <a
                    href="#contact"
                    className="px-5 py-2.5 bg-brand-red text-white text-xs sm:text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                  >
                    Talk to us
                  </a>
                  <Link
                    to="/work"
                    className="text-sm text-muted-foreground hover:text-foreground border-b border-border-bright hover:border-foreground pb-0.5 transition-colors"
                  >
                    See our work
                  </Link>
                </div>
              </div>

              <dl className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-border-dim/80 grid grid-cols-3 gap-3 sm:gap-5 max-w-sm sm:max-w-md text-[11px] sm:text-xs">
                <div className="min-w-0">
                  <dt className="text-muted-foreground leading-snug">Projects shipped</dt>
                  <dd className="font-display text-lg sm:text-xl font-semibold mt-0.5 text-foreground tabular-nums">
                    <CountUp value={25} suffix="+" />
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-muted-foreground text-[11px] sm:text-inherit leading-snug">
                    Industries
                  </dt>
                  <dd className="font-display text-lg sm:text-xl font-semibold mt-0.5 text-foreground tabular-nums">
                    <CountUp value={9} duration={1400} delay={120} />
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-muted-foreground text-[11px] sm:text-inherit leading-snug">
                    Cities
                  </dt>
                  <dd className="font-display text-lg sm:text-xl font-semibold mt-0.5 text-foreground tabular-nums">
                    <CountUp value={3} duration={1200} delay={240} />
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="h-svh w-full" aria-hidden />
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Client strip
// ──────────────────────────────────────────────────────────────────────────

function ClientStrip() {
  return (
    <Marquee
      items={[
        "Aerospace",
        "Manufacturing",
        "SaaS",
        "Wellness",
        "Logistics",
        "Hospitality",
        "Beauty",
        "Infrastructure",
        "Education",
      ]}
    />
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Services
// ──────────────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-10 md:py-14 border-b border-border-dim">
      <div className="site-container">
        <SectionHeader index="01" eyebrow="What we build" />
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_minmax(0,16rem)] md:items-end">
          <h2 className="type-section-title">
            Five capability pillars.
            <span className="text-muted-foreground">
              {" "}
              full-stack technology, not just websites.
            </span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Digital products, AI systems, data intelligence, growth strategy, and tech talent,
            grouped so you can find what you need without wading through a long list.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-border-dim bg-border-dim sm:grid-cols-2 lg:grid-cols-5">
          {SERVICE_GROUPS.map((group, index) => (
            <ServiceGroupCard
              key={group.slug}
              group={group}
              className={
                index === SERVICE_GROUPS.length - 1
                  ? "sm:col-span-2 sm:max-w-md sm:justify-self-center sm:w-full lg:col-span-1 lg:max-w-none lg:justify-self-stretch"
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Process
// ──────────────────────────────────────────────────────────────────────────

function Process() {
  const { ref, visible } = useScrollReveal<HTMLOListElement>({ threshold: 0.12 });

  return (
    <section id="process" className="py-10 md:py-14 border-b border-border-dim">
      <div className="site-container">
        <SectionHeader index="02" eyebrow="How we work" />
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_minmax(0,14rem)] md:items-end">
          <h2 className="type-section-title">
            From research to launch.
            <br />
            <span className="text-muted-foreground">Six stages, same every time.</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            No surprise scope. You always know what phase we're in and what comes next.
          </p>
        </div>

        <ol
          ref={ref}
          className="grid grid-cols-1 gap-px border border-border-dim bg-border-dim sm:grid-cols-2 lg:grid-cols-6"
        >
          {PROCESS.map((p, i) => (
            <li
              key={p.n}
              className={cn(
                "group bg-background p-5 transition-[opacity,transform,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:bg-muted/30 lg:p-6",
                visible
                  ? "translate-x-0 translate-y-0 opacity-100"
                  : "translate-x-8 translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: visible ? `${100 + i * 120}ms` : "0ms" }}
            >
              <div className="mb-4 font-display text-4xl font-black text-border-bright transition-colors group-hover:text-brand-red">
                {p.n}
              </div>
              <div className="mb-4 h-px w-full bg-border-bright transition-colors group-hover:bg-brand-red" />
              <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-foreground">
                {p.t}
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{p.d}</p>
              {i < PROCESS.length - 1 && (
                <span className="mt-4 hidden font-mono text-xs text-brand-red lg:inline">→</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Work
// ──────────────────────────────────────────────────────────────────────────

function Work() {
  return (
    <section id="work" className="py-10 md:py-14 border-b border-border-dim">
      <div className="site-container">
        <SectionHeader index="03" eyebrow="Case studies" />
        <div className="mb-8 max-w-3xl">
          <h2 className="type-section-title mb-4">
            Recently deployed.
            <span className="text-muted-foreground"> Real systems, measurable outcomes.</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            From ERP and SaaS to e-commerce and mobile, we ship production infrastructure for
            startups and MSMEs across nine industries.
          </p>
        </div>
        <WorkTeaser featured={FEATURED_PROJECT} studies={CASE_STUDIES} />
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Industries
// ──────────────────────────────────────────────────────────────────────────

function Industries() {
  return (
<section className="py-10 md:py-14 border-b border-border-dim">
  <div className="site-container">
    <SectionHeader index="04" eyebrow="Sectors Served" />
    <h2 className="type-section-title mb-8 max-w-3xl">
      Versatile by design.
      <span className="text-muted-foreground"> Industry-agnostic by architecture.</span>
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {INDUSTRIES.map((ind, i) => (
        <div
          key={ind}
          className="bg-background flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 border border-border-bright rounded-2xl md:rounded-3xl"
        >
          <span className="font-display text-xl sm:text-2xl md:text-3xl font-medium min-w-0 text-pretty">
            {ind}
          </span>
          <span className="font-mono text-sm text-brand-red transition-colors shrink-0">
            / {String(i + 1).padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
      
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Founders
// ──────────────────────────────────────────────────────────────────────────

function Founders() {
  return (
    <section className="py-10 md:py-14 border-b border-border-dim">
      <div className="site-container">
        <SectionHeader index="05" eyebrow="Leadership" />
        <h2 className="type-section-title mb-8 max-w-3xl">
          Young entrepreneurs of Mysore.
          <span className="text-muted-foreground"> Built by operators, run by engineers.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-dim border border-border-dim">
          {LEADERSHIP.map((p) => (
            <article key={p.name} className="bg-background p-5 lg:p-6 group cursor-pointer" tabIndex={0}>
              <div className="aspect-[3/4] bg-neutral-900 mb-4 overflow-hidden relative">
                <TeamPhoto
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-active:grayscale-0 group-focus:grayscale-0"
                />
              </div>
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                  {p.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-red shrink-0">
                  {p.role}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Testimonials
// ──────────────────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-10 md:py-14 border-b border-border-dim">
      <div className="site-container">
        <SectionHeader index="06" eyebrow="Client notes" />
        <div className="grid md:grid-cols-3 gap-px bg-border-dim border border-border-dim">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="bg-background flex flex-col p-6 lg:p-8">
              <blockquote className="font-display text-xl md:text-2xl font-medium tracking-tight leading-snug text-foreground mb-8 flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="border-t border-border-dim pt-4">
                <div className="font-mono text-[11px] uppercase tracking-widest text-foreground">
                  {t.n}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  {t.c}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// FAQ
// ──────────────────────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section className="py-10 md:py-14 border-b border-border-dim">
      <div className="site-container">
        <SectionHeader index="07" eyebrow="FAQ" />
        <h2 className="type-section-title mb-8 max-w-3xl">
          Questions we've answered <br className="hidden sm:block" /> a hundred times.
        </h2>
        <Faq />
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Careers
// ──────────────────────────────────────────────────────────────────────────

function Careers() {
  return (
    <section id="careers" className="py-10 md:py-14 border-b border-border-dim">
      <div className="site-container">
        <SectionHeader index="08" eyebrow="Open Positions" />
        <h2 className="type-section-title mb-8 max-w-3xl">
          Build alongside us.
          <span className="text-muted-foreground"> Internships open across four disciplines.</span>
        </h2>
        <CareersTeaser openings={CAREER_OPENINGS} limit={2} />
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Contact
// ──────────────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-10 md:py-14 border-b border-border-dim bg-surface">
      <div className="site-container">
        <SectionHeader index="09" eyebrow="Contact" />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="type-contact-title mb-6 sm:mb-8">
              Tell us what <br /> <span className="text-brand-red">you're building.</span>
            </h2>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              We're based in Mysuru with teams in Bengaluru and Hyderabad. Drop a line. We reply
              within one business day.
            </p>
            <dl className="space-y-8 text-sm">
              <div>
                <dt className="text-muted-foreground mb-1">Email</dt>
                <dd>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="break-all text-base sm:text-lg text-foreground border-b border-border-bright hover:border-brand-red pb-1 transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground mb-1">Call</dt>
                <dd>
                  <a
                    href={CONTACT_PHONE_URL}
                    className="text-lg text-foreground border-b border-border-bright hover:border-brand-red pb-1 transition-colors"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground mb-1">WhatsApp</dt>
                <dd>
                  <a
                    href={CONTACT_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground border-b border-border-bright hover:border-brand-red pb-1 transition-colors"
                  >
                    {CONTACT_WHATSAPP_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground mb-1">Office</dt>
                <dd>
                  <span className="mb-3 inline-block border border-brand-red/50 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-brand-red">
                    Opening Soon
                  </span>
                  <p className="text-lg leading-relaxed text-foreground">
                    Prashanth Plaza, 5th Cross, 4th Main,
                    <br />
                    Saraswathipuram, Mysuru 570009
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Karnataka, India</p>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground mb-1">Also in</dt>
                <dd className="text-foreground">Bengaluru · Hyderabad</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-background border border-border-dim p-6 lg:p-8"
          >
            <p className="text-sm text-muted-foreground mb-8">New project brief</p>
            <div className="space-y-6">
              <Field label="Name">
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="w-full bg-transparent border-b border-border-bright py-3 text-sm text-foreground focus:border-brand-red outline-none transition-colors"
                  placeholder="Your name"
                  suppressHydrationWarning
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="w-full bg-transparent border-b border-border-bright py-3 text-sm text-foreground focus:border-brand-red outline-none transition-colors"
                  placeholder="you@company.com"
                  suppressHydrationWarning
                />
              </Field>
              <Field label="Requirement Scope">
                <select
                  id="contact-requirement"
                  name="requirement"
                  className="w-full bg-transparent border-b border-border-bright py-3 text-sm text-foreground focus:border-brand-red outline-none transition-colors appearance-none"
                  suppressHydrationWarning
                >
                  <option className="bg-background">Custom website</option>
                  <option className="bg-background">SaaS build</option>
                  <option className="bg-background">Custom ERP</option>
                  <option className="bg-background">E-commerce platform</option>
                  <option className="bg-background">Mobile application</option>
                  <option className="bg-background">Research paper</option>
                  <option className="bg-background">Internship enquiry</option>
                </select>
              </Field>
              <Field label="Project Notes">
                <textarea
                  id="contact-notes"
                  name="notes"
                  rows={3}
                  className="w-full bg-transparent border-b border-border-bright py-3 text-sm text-foreground focus:border-brand-red outline-none transition-colors resize-none"
                  placeholder="Tell us what you're trying to build."
                  suppressHydrationWarning
                />
              </Field>
              <button
                type="submit"
                id="contact-submit"
                className="mt-4 w-full py-4 bg-brand-red text-white text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                suppressHydrationWarning
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground block mb-1">{label}</span>
      {children}
    </label>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8 bg-background">
      <div className="site-container">
        <FooterTagline />
        <div className="mt-10 grid gap-8 border-t border-border-dim pt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6 items-start">
          <div className="text-sm text-muted-foreground">
            © 2024 AdMark Digitals
            <br />
            Research-led digital studio
          </div>
          <div className="text-sm text-muted-foreground">
            <div className="text-foreground mb-2 font-medium">Team</div>
            Tejasvi Jois · CEO
            <br />
            Harshith V. Malipatil · COO
            <br />
            Revanth Kumar S · CTO
            <br />
            Prajwal B. P. · CFO
          </div>
          <div className="text-sm sm:col-span-2 md:col-span-1 md:text-right">
            <div className="mb-2 font-medium text-foreground">Phone</div>
            <a
              href={CONTACT_SECONDARY_PHONE_URL}
              className="block text-muted-foreground transition-colors hover:text-brand-red"
            >
              {CONTACT_SECONDARY_PHONE_DISPLAY}
            </a>
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-muted-foreground transition-colors hover:text-brand-red"
            >
              {CONTACT_WHATSAPP_DISPLAY}
            </a>
            <div className="mt-5 flex flex-wrap gap-6 md:justify-end">
              <a href="#" className="text-muted-foreground transition-colors hover:text-brand-red">
                LinkedIn
              </a>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-brand-red"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground transition-colors hover:text-brand-red"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
