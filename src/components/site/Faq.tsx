import { useState } from "react";

const items = [
  {
    q: "How long does a typical website project take?",
    a: "A conversion-focused marketing site lands in 3 to 5 weeks. A custom SaaS or ERP build runs 8 to 16 weeks depending on scope, integrations, and the depth of research required.",
  },
  {
    q: "Do you build custom ERP systems from scratch?",
    a: "Yes. We architect bespoke ERP and internal tooling: inventory, logistics, billing, dashboards, designed around your specific operational workflow, not a templated SaaS shell.",
  },
  {
    q: "Is SEO included in every build?",
    a: "Every project ships with technical SEO baked into the architecture: semantic markup, structured data, Core Web Vitals tuning, sitemaps and metadata. Content and ongoing SEO operations are scoped separately.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We retain most clients on monthly or quarterly maintenance agreements covering performance monitoring, security patches, infrastructure scaling and iterative feature work.",
  },
  {
    q: "Custom build vs pre-built: which one is right for me?",
    a: "If you need speed-to-market and your requirements are conventional, pre-built is faster and lighter on budget. If you need unique UX, proprietary logic or long-term scalability, custom always wins on TCO.",
  },
  {
    q: "Where are you based and do you work remotely?",
    a: "Headquartered in Saraswathipuram, Mysuru, with active teams in Bangalore and Hyderabad. We work with clients across India and internationally, fully remote-first.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-t border-border-dim">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="border-b border-border-dim">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full min-h-12 items-start justify-between gap-4 py-4 sm:gap-8 sm:py-5 text-left transition-colors hover:bg-muted/40"
              suppressHydrationWarning
            >
              <div className="flex min-w-0 items-start gap-3 sm:gap-6">
                <span className="mt-1.5 w-7 shrink-0 text-xs tabular-nums text-brand-red sm:w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-foreground text-pretty">
                  {it.q}
                </span>
              </div>
              <span className="mt-1 w-6 shrink-0 text-center text-lg text-muted-foreground">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pl-10 pr-4 text-sm leading-relaxed text-muted-foreground sm:pb-8 sm:pl-[3.5rem] sm:pr-12 sm:text-base">
                  {it.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
