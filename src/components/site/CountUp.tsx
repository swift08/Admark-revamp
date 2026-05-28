import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({
  value,
  suffix = "",
  duration = 1800,
  delay = 0,
  className,
}: CountUpProps) {
  const { ref, visible } = useScrollReveal<HTMLSpanElement>({ threshold: 0.35 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let timeout = 0;

    const run = () => {
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(easeOutCubic(progress) * value));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    timeout = window.setTimeout(run, delay);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [visible, value, duration, delay, reduceMotion]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
      {suffix}
    </span>
  );
}
