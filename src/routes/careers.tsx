import { createFileRoute, Link } from "@tanstack/react-router";
import { BackgroundGrid } from "@/components/site/BackgroundGrid";
import { CareersList } from "@/components/site/CareersList";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CAREER_OPENINGS } from "@/data/careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Internships | AdMark Digitals" },
      {
        name: "description",
        content:
          "Join AdMark Digitals. Open internships in web development, UI/UX, business development, and digital marketing across Mysuru, Bengaluru, and remote.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-body overflow-x-clip">
      <BackgroundGrid />
      <SiteHeader />

      <main className="site-container pt-[calc(4.25rem+2.5rem)] pb-20 sm:pt-[calc(4.25rem+3rem)] sm:pb-24 md:pt-[calc(4.25rem+4rem)] md:pb-32">
        <nav className="mb-10 text-sm text-muted-foreground sm:mb-12">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Careers</span>
        </nav>

        <SectionHeader index="08" eyebrow="Open positions" />
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="type-section-title max-w-3xl">
            Build alongside us.
            <span className="text-muted-foreground">
              {" "}
              Internships open across four disciplines.
            </span>
          </h1>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {CAREER_OPENINGS.length} roles open
          </span>
        </div>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          AdMark is a research-led studio. Interns work on real client and product work, not slide
          decks. Tell us which role you're applying for in your message.
        </p>

        <CareersList openings={CAREER_OPENINGS} />

        <div className="mt-16 flex flex-col gap-6 border border-border-dim bg-muted/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-brand-red">
              How to apply
            </p>
            <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Send your portfolio or CV with the role title in the subject line.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 px-6 py-3.5 bg-brand-red text-center text-sm font-medium text-white transition-colors hover:bg-foreground hover:text-background"
          >
            Apply via contact
          </a>
        </div>
      </main>
    </div>
  );
}
