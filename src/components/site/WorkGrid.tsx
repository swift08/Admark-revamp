import { Link } from "@tanstack/react-router";
import type { CaseStudy, ClientProject, FeaturedProject } from "@/data/work";
import { cn } from "@/lib/utils";

function ExternalProjectLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function WorkFeatured({
  project,
  compact = false,
}: {
  project: FeaturedProject;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "group border border-border-dim bg-background transition-colors hover:bg-muted/30",
        compact ? "p-6 lg:p-8" : "p-6 lg:p-12",
      )}
    >
      <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-brand-red">
        Featured project
      </p>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2
            className={cn(
              "font-display font-bold tracking-tight transition-colors group-hover:text-brand-red",
              compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl",
            )}
          >
            {project.name}
          </h2>
          <ExternalProjectLink
            href={project.url}
            className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-brand-red"
          >
            {project.domain}
          </ExternalProjectLink>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {project.tag}
        </span>
      </div>
      <p
        className={cn(
          "max-w-3xl font-display font-medium tracking-tight text-foreground",
          compact ? "mb-3 text-lg" : "mb-4 text-xl md:text-2xl",
        )}
      >
        {project.headline}
      </p>
      <p
        className={cn(
          "max-w-3xl leading-relaxed text-muted-foreground",
          compact ? "text-sm" : "text-base",
        )}
      >
        {project.body}
      </p>
      <div className="mt-8 flex items-center justify-between border-t border-border-dim pt-6">
        <span className="text-xs text-muted-foreground">Live in production</span>
        <ExternalProjectLink
          href={project.url}
          className="text-sm text-foreground transition-colors hover:text-brand-red"
        >
          View project →
        </ExternalProjectLink>
      </div>
    </article>
  );
}

export function WorkClientGrid({ projects }: { projects: ClientProject[] }) {
  return (
    <div className="grid gap-px border border-border-dim bg-border-dim sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ExternalProjectLink
          key={p.url}
          href={p.url}
          className="group flex h-full flex-col bg-background p-6 transition-colors hover:bg-muted/30 lg:p-7"
        >
          <h3 className="font-display text-xl font-bold tracking-tight transition-colors group-hover:text-brand-red md:text-2xl">
            {p.name}
            {p.location ? (
              <span className="mt-1 block text-sm font-normal text-muted-foreground">
                {p.location}
              </span>
            ) : null}
          </h3>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
            &ldquo;{p.quote}&rdquo;
          </blockquote>
          <span className="mt-6 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors group-hover:text-brand-red">
            View project →
          </span>
        </ExternalProjectLink>
      ))}
    </div>
  );
}

type WorkGridProps = {
  studies: CaseStudy[];
};

/** Legacy grid for homepage preview cards */
export function WorkGrid({ studies }: WorkGridProps) {
  return (
    <div className="grid gap-px border border-border-dim bg-border-dim md:grid-cols-2">
      {studies.map((w) => (
        <article
          key={w.ref}
          className="group bg-background p-6 transition-colors hover:bg-muted/30 lg:p-8"
        >
          <div className="mb-6 flex flex-wrap items-start justify-between gap-2">
            <span className="shrink-0 text-xs text-muted-foreground">Ref {w.ref}</span>
            <span className="max-w-[60%] text-right font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {w.tag}
            </span>
          </div>
          <h3 className="mb-3 font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-brand-red md:text-3xl">
            {w.name}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground line-clamp-4">
            {w.body}
          </p>
          <div className="mt-8 flex items-center justify-between border-t border-border-dim pt-6">
            <span className="text-xs text-muted-foreground">Live in production</span>
            {w.url ? (
              <ExternalProjectLink
                href={w.url}
                className="text-sm text-foreground transition-colors hover:text-brand-red"
              >
                View project →
              </ExternalProjectLink>
            ) : (
              <span className="text-sm text-foreground transition-colors group-hover:text-brand-red">
                View project →
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

type WorkTeaserProps = {
  featured: FeaturedProject;
  studies: CaseStudy[];
};

export function WorkTeaser({ featured, studies }: WorkTeaserProps) {
  return (
    <>
      <div className="mb-px border border-border-dim">
        <WorkFeatured project={featured} compact />
      </div>
      <WorkGrid studies={studies} />
      <div className="mt-10 flex flex-col gap-6 border border-border-dim bg-muted/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-xl">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-brand-red">
            Our work
          </p>
          <p className="font-display text-lg font-bold tracking-tight sm:text-xl">
            Client websites and brand platforms shipped live, from aerospace to AI, events, and
            infrastructure.
          </p>
        </div>
        <Link
          to="/work"
          className="shrink-0 bg-brand-red px-6 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-foreground hover:text-background"
        >
          See our work
        </Link>
      </div>
    </>
  );
}
