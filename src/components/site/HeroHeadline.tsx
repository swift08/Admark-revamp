import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
const PHRASES = [
  "SaaS that scales",
  "digital foundations",
  "growth engines",
  "websites that convert",
] as const;

const CYCLE_MS = 3200;

type HeroHeadlineProps = {
  className?: string;
};

export function HeroHeadline({ className }: HeroHeadlineProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const phrase = PHRASES[index];

  return (
    <h1 className={className}>
      <span className="block">We build</span>
      <span
        className="relative block min-h-[1.05em] text-brand-red"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={phrase}
            className="block"
            initial={
              reduceMotion ? false : { opacity: 0, y: "45%", scale: 0.88, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={
              reduceMotion ? undefined : { opacity: 0, y: "-35%", scale: 0.94, filter: "blur(2px)" }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {phrase}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="block">that grow with you.</span>
    </h1>
  );
}
