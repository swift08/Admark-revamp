import { motion, useReducedMotion } from "framer-motion";
import {
  CheckSquare,
  FileText,
  Rocket,
  Search,
  Shield,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  actionIcon: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVERY",
    description: "Audit business model, market gap and user intent. No assumptions.",
    actionIcon: "→",
  },
  {
    step: "02",
    title: "RESEARCH",
    description: "Competitive teardown, user signals, technical feasibility study.",
    actionIcon: "→",
  },
  {
    step: "03",
    title: "STRATEGY",
    description: "Wireframes, information architecture, conversion logic, tech stack lock.",
    actionIcon: "→",
  },
  {
    step: "04",
    title: "DEVELOPMENT",
    description: "Modular, version-controlled engineering against staged milestones.",
    actionIcon: "→",
  },
  {
    step: "05",
    title: "TESTING",
    description: "Performance, security, accessibility and end-to-end QA before release.",
    actionIcon: "→",
  },
  {
    step: "06",
    title: "LAUNCH & SCALE",
    description: "Deploy, monitor, iterate. Infrastructure scaled as load demands.",
    actionIcon: "",
  },
];

/** Slot matches step number (text-4xl / 2.25rem) + py for animation room. */
const VISUAL_SLOT =
  "relative flex h-14 w-full items-center justify-end overflow-visible py-2 text-muted-foreground";

const CODE_SNIPPET = "const app = {\n  ship: true,\n};";

function CodeTypewriter({ play }: { play: boolean }) {
  const [n, setN] = useState(play ? 0 : CODE_SNIPPET.length);
  const [phase, setPhase] = useState<"type" | "delete">("type");

  useEffect(() => {
    if (!play) {
      setN(CODE_SNIPPET.length);
      setPhase("type");
      return;
    }
    setN(0);
    setPhase("type");
  }, [play]);

  useEffect(() => {
    if (!play) return;
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (n >= CODE_SNIPPET.length) {
        t = setTimeout(() => setPhase("delete"), 1100);
      } else {
        const ch = CODE_SNIPPET[n];
        t = setTimeout(() => setN((v) => v + 1), ch === "\n" ? 140 : 58);
      }
    } else if (n <= 0) {
      t = setTimeout(() => setPhase("type"), 450);
    } else {
      t = setTimeout(() => setN((v) => v - 1), 32);
    }
    return () => clearTimeout(t);
  }, [play, n, phase]);

  return (
    <pre className="m-0 whitespace-pre font-mono text-xs leading-snug text-brand-red sm:text-sm">
      {CODE_SNIPPET.slice(0, n)}
      <span
        aria-hidden
        className={cn(
          "ml-px inline-block h-[1em] w-[2px] translate-y-px bg-brand-red align-[-0.1em]",
          play && "animate-pulse",
        )}
      />
    </pre>
  );
}

function StepVisual({ step, active }: { step: string; active: boolean }) {
  const reduce = useReducedMotion();
  const play = active && !reduce;

  let body: ReactNode = null;

  switch (step) {
    case "01":
      body = (
        <div className="relative size-[1em] text-4xl leading-none">
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={play ? { opacity: 1 } : { opacity: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="size-[1em]" strokeWidth={1.1} />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-red"
            initial={false}
            animate={play ? { x: [0, -10, -4], y: [0, 6, 10] } : { x: -4, y: 4 }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: play ? Infinity : 0, repeatDelay: 0.8 }}
          >
            <Search className="size-[0.45em]" strokeWidth={1.75} />
          </motion.div>
        </div>
      );
      break;
    case "02":
      body = (
        <div className="flex h-[1em] items-end gap-1.5 text-4xl leading-none">
          {[40, 70, 50, 85].map((h, i) => (
            <motion.span
              key={i}
              className="w-[0.22em] rounded-sm origin-bottom"
              style={{ height: `${h}%` }}
              initial={false}
              animate={
                play
                  ? {
                      scaleY: [0, 1],
                      backgroundColor: ["#333333", "#333333", "#e11d48", "#e11d48", "#333333"],
                    }
                  : { scaleY: 1, backgroundColor: "#333333" }
              }
              transition={{
                scaleY: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
                backgroundColor: {
                  duration: 1.6,
                  times: [0, 0.15, 0.35, 0.65, 1],
                  delay: 0.55 + i * 0.28,
                  ease: "easeInOut",
                  repeat: play ? Infinity : 0,
                  repeatDelay: 0.85,
                },
              }}
            />
          ))}
        </div>
      );
      break;
    case "03":
      body = (
        <div className="relative size-[1em] text-4xl leading-none">
          {(
            [
              { key: "bl", className: "absolute bottom-0 left-0", delay: 0 },
              { key: "br", className: "absolute bottom-0 right-0", delay: 0.18 },
              {
                key: "top",
                className: "absolute left-1/2 top-0 -translate-x-1/2",
                delay: 0.36,
                accent: true,
              },
            ] as const
          ).map(({ key, className, delay, accent }) => (
            <motion.span
              key={key}
              className={cn(
                className,
                "block size-[0.48em] border bg-background",
                accent ? "border-brand-red" : "border-border-bright",
              )}
              initial={false}
              animate={
                play
                  ? {
                      y: [accent ? -14 : 10, 0, 0, accent ? -14 : 10],
                      opacity: [0, 1, 1, 0],
                      scale: [0.85, 1, 1, 0.85],
                    }
                  : { y: 0, opacity: 0.55, scale: 1 }
              }
              transition={{
                duration: 2.4,
                delay,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.25, 0.7, 1],
                repeat: play ? Infinity : 0,
                repeatDelay: 0.35,
              }}
            />
          ))}
        </div>
      );
      break;
    case "04":
      body = <CodeTypewriter play={play} />;
      break;
    case "05":
      body = (
        <div className="relative size-[1em] text-4xl leading-none">
          <motion.div
            className="absolute inset-0 text-brand-red"
            initial={false}
            animate={
              play
                ? { scale: [0.75, 1.08, 1, 1, 1], opacity: [0, 1, 1, 1, 1] }
                : { scale: 1, opacity: 0.7 }
            }
            transition={{
              duration: 2.8,
              times: [0, 0.22, 0.35, 0.7, 1],
              ease: [0.22, 1, 0.36, 1],
              repeat: play ? Infinity : 0,
              repeatDelay: 0.55,
            }}
          >
            <Shield className="size-full" strokeWidth={1.25} />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center pt-[0.06em] text-emerald-500"
            initial={false}
            animate={
              play
                ? { scale: [0, 0, 0, 1.2, 1], opacity: [0, 0, 0, 1, 1] }
                : { scale: 1, opacity: 0.85 }
            }
            transition={{
              duration: 2.8,
              times: [0, 0.35, 0.48, 0.68, 1],
              ease: [0.22, 1, 0.36, 1],
              repeat: play ? Infinity : 0,
              repeatDelay: 0.55,
            }}
          >
            <CheckSquare className="size-[0.5em]" strokeWidth={2.25} />
          </motion.div>
        </div>
      );
      break;
    case "06":
      body = (
        <div className="relative h-[1em] w-[3.25em] overflow-visible text-4xl leading-none">
          <motion.div
            className="absolute top-1/2 -mt-[0.5em] text-brand-red"
            initial={false}
            animate={
              play
                ? {
                    // under the number: enter left → turn → shoot out right
                    left: ["-20%", "28%", "28%", "28%", "130%"],
                    y: [0, 0, 0, 0, -4],
                    opacity: [0, 1, 1, 1, 0],
                    rotate: [10, 10, 55, 55, 60],
                    scale: [0.85, 1, 1, 1, 1.05],
                  }
                : { left: "28%", y: 0, opacity: 1, rotate: 55, scale: 1 }
            }
            transition={{
              duration: 3.6,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.18, 0.32, 0.55, 1],
              repeat: play ? Infinity : 0,
              repeatDelay: 0.45,
            }}
          >
            <Rocket className="size-[1em]" strokeWidth={1.4} />
          </motion.div>
        </div>
      );
      break;
    default:
      return null;
  }

  return (
    <div className={cn(VISUAL_SLOT, step === "06" && "justify-start")}>{body}</div>
  );
}

type ProcessStepsProps = {
  visible: boolean;
};

export function ProcessSteps({ visible }: ProcessStepsProps) {
  const reduce = useReducedMotion();

  return (
    <ol className="grid grid-cols-1 gap-px border border-border-dim bg-border-dim sm:grid-cols-2 lg:grid-cols-6">
      {PROCESS_STEPS.map((p, i) => (
        <li
          key={p.step}
          className={cn(
            "group bg-background p-5 transition-[opacity,transform,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:bg-muted/30 lg:p-6",
            visible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-8 translate-y-6 opacity-0",
          )}
          style={{ transitionDelay: visible ? `${100 + i * 120}ms` : "0ms" }}
        >
          <div className="mb-3 [perspective:600px]">
            <motion.div
              className="font-display text-4xl font-black text-border-bright transition-colors group-hover:text-brand-red"
              initial={false}
              animate={
                reduce
                  ? { opacity: visible ? 1 : 0 }
                  : visible
                    ? { rotateY: 0, opacity: 1 }
                    : { rotateY: 75, opacity: 0 }
              }
              transition={{ duration: 0.65, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {p.step}
            </motion.div>
          </div>

          <div className="mb-3">
            <StepVisual step={p.step} active={visible} />
          </div>

          <div className="mb-4 h-px w-full bg-border-bright transition-colors group-hover:bg-brand-red" />
          <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-foreground">
            {p.title}
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">{p.description}</p>
          {p.actionIcon ? (
            <span className="mt-4 hidden font-mono text-xs text-brand-red lg:inline">{p.actionIcon}</span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
