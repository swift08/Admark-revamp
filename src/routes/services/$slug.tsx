import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BackgroundGrid } from "@/components/site/BackgroundGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SiteHeader } from "@/components/site/SiteHeader";
import { getServiceBySlug, SERVICE_GROUPS } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.title || "Service"} | AdMark Digitals`,
      },
      {
        name: "description",
        content: loaderData?.tagline || "",
      },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const otherGroups = SERVICE_GROUPS.filter((g) => g.slug !== service.slug);

  return (
    <div className="relative min-h-screen bg-background text-foreground font-body overflow-x-clip">
      <BackgroundGrid />
      <SiteHeader />

      <main className="site-container max-w-7xl pt-[calc(4.25rem+2.5rem)] pb-20 sm:pt-[calc(4.25rem+3rem)] sm:pb-24 md:pt-[calc(4.25rem+4rem)] md:pb-32">
        <nav className="text-sm text-muted-foreground mb-12">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <a href="/#services" className="hover:text-foreground transition-colors">
            Services
          </a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.title}</span>
        </nav>

        <SectionHeader index={service.id} eyebrow="Service pillar" />
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <h1 className="type-section-title lg:col-span-8 lg:text-[clamp(2.5rem,4vw,3.75rem)]">
            {service.title}
          </h1>
          <p className="lg:col-span-4 text-lg text-muted-foreground leading-relaxed">
            {service.tagline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-border-dim border border-border-dim mb-16">
          <section className="bg-background p-8 lg:p-12">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-brand-red mb-6">
              Core offerings
            </h2>
            <ul className="space-y-4">
              {service.services.map((item) => (
                <li
                  key={item}
                  className="font-display text-xl md:text-2xl font-semibold tracking-tight border-b border-border-dim pb-4 last:border-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-background p-8 lg:p-12">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-brand-silver mb-6">
              Sub-services
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.subServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="text-brand-red mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="border border-border-dim bg-muted/20 p-8 lg:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-brand-red mb-2">
              Ready to scope?
            </p>
            <p className="font-display text-2xl font-bold tracking-tight">
              Tell us what you're building in {service.navLabel.toLowerCase()}.
            </p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 px-6 py-3.5 bg-brand-red text-white text-sm font-medium hover:bg-foreground hover:text-background transition-colors text-center"
          >
            Start a project
          </a>
        </div>

        <div className="mt-20 pt-12 border-t border-border-dim">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-8">
            Other capability pillars
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-dim border border-border-dim">
            {otherGroups.map((group) => (
              <Link
                key={group.slug}
                to="/services/$slug"
                params={{ slug: group.slug }}
                className="bg-background p-6 hover:bg-muted/40 transition-colors group"
              >
                <span className="text-xs text-brand-red font-medium">{group.id}</span>
                <p className="font-display text-lg font-bold mt-2 group-hover:text-brand-red transition-colors">
                  {group.navLabel}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
