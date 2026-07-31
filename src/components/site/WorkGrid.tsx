import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type {
  CaseStudy,
  ClientProject,
  FeaturedProject,
  WorkShowcase,
} from "@/data/work";
import { WORK_SHOWCASE } from "@/data/work";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

function ExternalProjectLink({
  href,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function wrapOffset(i: number, active: number, n: number) {
  let offset = i - active;
  if (offset > Math.floor(n / 2)) offset -= n;
  if (offset < -Math.floor(n / 2)) offset += n;
  return offset;
}

const STACK_EASE = [0.22, 0.61, 0.36, 1] as const;
const STACK_DURATION = 1.35;
/** Horizontal spacing between coverflow cards (px) */
const CARD_STEP = 245;
const PEEK_ANGLE = 32;

function CoverflowCard({ card, active }: { card: WorkShowcase; active: boolean }) {
  return (
    <article className="relative h-[22rem] w-[13.5rem] overflow-hidden rounded-2xl border border-border-dim bg-surface sm:h-[26rem] sm:w-[16rem]">
      <img
        src={card.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      {active ? (
        <motion.span
          key={`shine-${card.id}`}
          aria-hidden
          className="pointer-events-none absolute inset-y-[-10%] z-[2] w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-brand-red/45 to-transparent"
          initial={{ left: "-50%", opacity: 0 }}
          animate={{ left: "130%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1], delay: 0.85 }}
        />
      ) : null}
      {/* Black blend from bottom up through the red tag */}
      <div className="absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-black from-15% via-black/95 via-45% to-transparent pt-24 pb-4 pl-4 pr-4 sm:pb-5 sm:pl-5 sm:pr-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-brand-red">{card.tag}</p>
        <h3 className="mt-2 font-display text-lg font-bold tracking-tight sm:text-xl">{card.name}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {card.body}
        </p>
        <span className="mt-2 inline-block text-xs text-foreground">View work →</span>
      </div>
    </article>
  );
}

export function WorkCoverflow({ cards = WORK_SHOWCASE }: { cards?: WorkShowcase[] }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const n = cards.length;

  useEffect(() => {
    if (n < 2 || reduceMotion) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % n), 5000);
    return () => window.clearInterval(id);
  }, [n, reduceMotion, active]);

  if (n === 0) return null;

  const tween = reduceMotion
    ? { duration: 0 }
    : { type: "tween" as const, duration: STACK_DURATION, ease: STACK_EASE };
  const rotateTween = reduceMotion
    ? { duration: 0 }
    : { type: "tween" as const, duration: STACK_DURATION + 0.2, ease: STACK_EASE };

  return (
    <div className="relative flex flex-col items-center gap-5">
      <div
        className="relative mx-auto h-[24rem] w-full min-w-0 overflow-hidden sm:h-[28rem]"
        style={{ perspective: "1600px", perspectiveOrigin: "50% 50%" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-background to-transparent sm:w-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-background to-transparent sm:w-20"
        />

        {cards.map((card, i) => {
          const offset = wrapOffset(i, active, n);
          const isCenter = offset === 0;
          const isPeek = Math.abs(offset) === 1;
          const far = Math.abs(offset) > 1;
          // Same size as center for every card in the revolution
          const x = offset * CARD_STEP;
          const rotateY = isCenter ? 0 : Math.sign(offset || 1) * -PEEK_ANGLE * Math.min(Math.abs(offset), 2);
          const opacity = far ? 0 : isCenter ? 1 : 0.75;
          const z = isCenter ? 20 : isPeek ? 10 : 1;
          // Snap when off-stage so the deck can revolve without jumping across the screen
          const stage = far
            ? { duration: 0 }
            : tween;
          const stageRotate = far
            ? { duration: 0 }
            : rotateTween;

          return (
            <div
              key={card.id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: z, pointerEvents: far ? "none" : "auto" }}
              aria-hidden={far || undefined}
            >
              <motion.div
                className="origin-center will-change-transform"
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                initial={false}
                animate={{
                  x,
                  rotateY,
                  scale: 1,
                  opacity,
                }}
                transition={{
                  x: stage,
                  rotateY: stageRotate,
                  scale: stage,
                  opacity: far
                    ? { duration: reduceMotion ? 0 : 0.35 }
                    : { ...tween, duration: reduceMotion ? 0 : 1.1 },
                }}
              >
                <div className="relative" style={{ transformStyle: "preserve-3d" }}>
                  <CoverflowCard card={card} active={isCenter} />
                  {isCenter ? (
                    card.url.startsWith("http") ? (
                      <ExternalProjectLink
                        href={card.url}
                        className="absolute inset-0 z-10"
                        aria-label={`View ${card.name}`}
                      >
                        <span className="sr-only">View {card.name}</span>
                      </ExternalProjectLink>
                    ) : (
                      <Link
                        to="/work"
                        className="absolute inset-0 z-10"
                        aria-label={`View ${card.name}`}
                      />
                    )
                  ) : isPeek ? (
                    <button
                      type="button"
                      className="absolute inset-0 z-10 cursor-pointer"
                      onClick={() => setActive(i)}
                      aria-label={`Show ${card.name}`}
                    />
                  ) : null}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div
        className="flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Industries"
      >
        {cards.map((card, i) => (
          <button
            key={card.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={card.name}
            onClick={() => setActive(i)}
            className={cn(
              "h-1.5 transition-all duration-500",
              i === active ? "w-6 bg-foreground" : "w-1.5 bg-border-bright hover:bg-muted-foreground",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function WorkFeatured({
  project,
  compact = false,
}: {
  project: FeaturedProject;
  compact?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const { ref, visible } = useScrollReveal<HTMLElement>({
    once: false,
    threshold: 0.45,
    rootMargin: "0px",
  });
  const expanded = Boolean(project.previewImage) && (hovered || visible);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden border border-border-dim bg-background",
        reduceMotion ? "" : "transition-[box-shadow] duration-500",
        expanded && "shadow-[0_0_0_1px_var(--border-dim)]",
      )}
    >
      {/* Top half: rexu.in website preview — expands on hover / in-view */}
      {project.previewImage ? (
        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="relative h-44 sm:h-56 md:h-72 lg:h-80">
              <img
                src={project.previewImage}
                alt={`${project.name} website preview`}
                className="h-full w-full object-cover object-top"
                draggable={false}
              />
              {/* Blend image down into the copy */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/80 to-transparent"
              />
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={cn(
          "relative",
          compact ? "p-6 lg:p-8" : "p-6 lg:p-12",
          // Soft black wash from copy bottom up through Featured label
          "bg-gradient-to-t from-background from-20% via-background/95 to-transparent",
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

function WorkStudyCard({ study }: { study: CaseStudy }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useScrollReveal<HTMLElement>({
    once: false,
    threshold: 0.45,
    rootMargin: "0px",
  });
  const expanded = Boolean(study.previewImage) && (hovered || visible);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden bg-background transition-colors"
    >
      {study.previewImage ? (
        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="relative h-40 sm:h-48 md:h-56">
              <img
                src={study.previewImage}
                alt={`${study.name} website preview`}
                className="h-full w-full object-cover object-top"
                draggable={false}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/55 to-transparent"
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="relative bg-gradient-to-t from-background from-20% via-background/95 to-transparent p-6 lg:p-8">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-2">
          <span className="shrink-0 text-xs text-muted-foreground">Ref {study.ref}</span>
          <span className="max-w-[60%] text-right font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {study.tag}
          </span>
        </div>
        <h3 className="mb-3 font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-brand-red md:text-3xl">
          {study.name}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground line-clamp-4">
          {study.body}
        </p>
        <div className="mt-8 flex items-center justify-between border-t border-border-dim pt-6">
          <span className="text-xs text-muted-foreground">Live in production</span>
          {study.url ? (
            <ExternalProjectLink
              href={study.url}
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
      </div>
    </article>
  );
}

/** Legacy grid for homepage preview cards */
export function WorkGrid({ studies }: WorkGridProps) {
  return (
    <div className="grid gap-px border border-border-dim bg-border-dim md:grid-cols-2">
      {studies.map((w) => (
        <WorkStudyCard key={w.ref} study={w} />
      ))}
    </div>
  );
}

export function WorkTeaser({
  featured,
  studies,
}: {
  featured: FeaturedProject;
  studies: CaseStudy[];
}) {
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
