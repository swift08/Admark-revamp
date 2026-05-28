import { Link } from "@tanstack/react-router";
import type { CareerOpening } from "@/data/careers";

type CareersListProps = {
  openings: CareerOpening[];
  applyHref?: string;
};

export function CareersList({ openings, applyHref = "/#contact" }: CareersListProps) {
  return (
    <ul className="border-t border-border-dim">
      {openings.map((c, i) => (
        <li
          key={c.id}
          className="border-b border-border-dim px-2 py-5 transition-colors hover:bg-muted/30 sm:py-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="flex min-w-0 gap-4 sm:gap-6">
              <span className="font-mono text-[10px] text-brand-red tracking-widest w-8 shrink-0 pt-1 sm:w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-medium tracking-tight">
                  {c.role}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pl-12 sm:shrink-0 sm:flex-col sm:items-end sm:justify-center sm:gap-3 sm:pl-0">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-foreground">
                {c.type}
              </span>
              <a
                href={applyHref}
                className="min-h-11 inline-flex items-center font-mono text-[11px] uppercase tracking-widest text-foreground hover:text-brand-red transition-colors"
              >
                Apply →
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

type CareersTeaserProps = {
  openings: CareerOpening[];
  limit?: number;
};

export function CareersTeaser({ openings, limit = 2 }: CareersTeaserProps) {
  const preview = openings.slice(0, limit);

  return (
    <>
      <CareersList openings={preview} />
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border-dim pt-8">
        <p className="text-sm text-muted-foreground">
          {openings.length} internship{openings.length === 1 ? "" : "s"} open · Mysuru, Bengaluru &
          remote
        </p>
        <Link
          to="/careers"
          className="font-mono text-[11px] uppercase tracking-widest text-foreground hover:text-brand-red transition-colors"
        >
          View all openings →
        </Link>
      </div>
    </>
  );
}
