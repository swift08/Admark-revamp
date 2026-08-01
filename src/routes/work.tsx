import { createFileRoute, Link } from "@tanstack/react-router";
import { BackgroundGrid } from "@/components/site/BackgroundGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WorkClientGrid, WorkFeatured, WorkGrid } from "@/components/site/WorkGrid";
import {
  CLIENT_WEBSITES,
  FEATURED_PROJECT,
  SOFTWARE_PROJECTS,
} from "@/data/work";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work · Client Projects | AdMark Digitals" },
      {
        name: "description",
        content:
          "Software products and client websites by AdMark Digitals: REXU, Rent Flow, Vivid Infrastructures, Naidile, Nandini Decor, DEE Events, and more.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const projectCount = 1 + SOFTWARE_PROJECTS.length; // REXU featured + grid
  const websiteCount = CLIENT_WEBSITES.length;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background font-body text-foreground">
      <BackgroundGrid />
      <SiteHeader />

      <main className="site-container pb-20 pt-[calc(4.25rem+2.5rem)] sm:pb-24 sm:pt-[calc(4.25rem+3rem)] md:pb-32 md:pt-[calc(4.25rem+4rem)]">
        <nav className="mb-10 text-sm text-muted-foreground sm:mb-12">
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Our work</span>
        </nav>

        <SectionHeader index="03" eyebrow="Our work" />
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="type-section-title">Built by AdMark.</h1>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {projectCount} projects · {websiteCount} websites
          </span>
        </div>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Software products we ship for real operations, and websites we designed for founders,
          MSMEs, and organisations across India.
        </p>

        <h2 className="mb-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Projects
        </h2>
        <div className="mb-10">
          <WorkFeatured project={FEATURED_PROJECT} />
        </div>
        {SOFTWARE_PROJECTS.length > 0 ? (
          <div className="mb-16">
            <WorkGrid studies={SOFTWARE_PROJECTS} />
          </div>
        ) : null}

        <h2 className="mb-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Websites
        </h2>
        <WorkClientGrid projects={CLIENT_WEBSITES} />

        <div className="mt-16 flex flex-col gap-6 border border-border-dim bg-muted/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-brand-red">
              Your project next?
            </p>
            <p className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Tell us what you're building. We reply within one business day.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 bg-brand-red px-6 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-foreground hover:text-background"
          >
            Start a project
          </a>
        </div>
      </main>
    </div>
  );
}
