export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border-dim bg-background">
      <div className="marquee-track flex whitespace-nowrap py-3">
        {loop.map((t, i) => (
          <span
            key={i}
            className="mx-6 sm:mx-10 flex items-center gap-6 sm:gap-10 text-sm text-muted-foreground"
          >
            {t}
            <span className="text-brand-red">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
