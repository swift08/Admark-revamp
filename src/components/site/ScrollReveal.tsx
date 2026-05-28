import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "article" | "span";
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
}: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

type WordmarkRevealProps = {
  text: string;
  className?: string;
  decorative?: boolean;
};

const FOOTER_TAGLINE = ["Trust Us", "We Deliver", "Beyond Expectations."] as const;

export function FooterTagline({ className }: { className?: string }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn("max-w-4xl", className)}
      aria-label="Trust Us. We Deliver. Beyond Expectations."
    >
      {FOOTER_TAGLINE.map((line, i) => (
        <p
          key={line}
          className={cn(
            "font-display font-bold leading-[1.02] tracking-[-0.03em] transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            "text-[clamp(2.25rem,5.25vw,4.25rem)]",
            i === FOOTER_TAGLINE.length - 1 ? "text-muted-foreground" : "text-foreground",
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
          )}
          style={{ transitionDelay: visible ? `${i * 90}ms` : "0ms" }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export function WordmarkReveal({ text, className, decorative = true }: WordmarkRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      aria-hidden={decorative || undefined}
    >
      <div className="flex flex-nowrap whitespace-nowrap">
        {text.split("").map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="inline-block transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transitionDelay: visible ? `${80 + i * 28}ms` : "0ms",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(110%)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}
