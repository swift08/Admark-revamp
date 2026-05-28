export function SectionHeader({ index, eyebrow }: { index: string; eyebrow: string }) {
  return (
    <div className="mb-4 flex items-baseline gap-4 text-sm">
      <span className="text-brand-red font-medium tabular-nums">{index}</span>
      <span className="text-muted-foreground">{eyebrow}</span>
      <span className="flex-1 h-px bg-border-dim ml-2" />
    </div>
  );
}
