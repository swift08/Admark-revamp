import { Link } from "@tanstack/react-router";
import type { ServiceGroup } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceGroupCard({
  group,
  className,
}: {
  group: ServiceGroup;
  className?: string;
}) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: group.slug }}
      className={cn(
        "group flex h-full min-h-0 flex-col bg-background p-6 transition-colors hover:bg-muted/40 lg:p-7",
        className,
      )}
    >
      <span className="text-xs font-medium tabular-nums text-brand-red">{group.id}</span>
      <h3 className="mt-3 mb-2 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-brand-red md:text-2xl">
        {group.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{group.tagline}</p>
      <ul className="mb-5 space-y-1.5">
        {group.services.map((service) => (
          <li key={service} className="flex items-center gap-2 text-sm text-foreground/90">
            <span className="font-mono text-xs text-brand-red">+</span>
            {service}
          </li>
        ))}
      </ul>
      <span className="mt-auto font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-brand-red">
        Explore offerings →
      </span>
    </Link>
  );
}
