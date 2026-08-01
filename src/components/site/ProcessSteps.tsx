import { motion, useReducedMotion } from "framer-motion";
import {
  Boxes,
  CheckSquare,
  Code2,
  Cog,
  FileText,
  Rocket,
  Search,
  Shield,
} from "lucide-react";
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

function StepVisual({ step, active }: { step: string; active: boolean }) {
  const reduce = useReducedMotion();
  const play = active && !reduce;

  switch (step) {
    case "01":
      return (
        <div className="relative h-14 w-full text-muted-foreground">
          <motion.div
            className="absolute left-2 top-2"
            initial={false}
            animate={play ? { opacity: 1, pathLength: 1 } : { opacity: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="size-8" strokeWidth={1.25} />
          </motion.div>
          <motion.div
            className="absolute text-brand-red"
            initial={false}
            animate={play ? { x: [0, 28, 8], y: [4, 10, 18] } : { x: 8, y: 12 }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: play ? Infinity : 0, repeatDelay: 0.8 }}
          >
            <Search className="size-5" strokeWidth={1.75} />
          </motion.div>
        </div>
      );
    case "02":
      return (
        <div className="relative flex h-14 items-end gap-1.5 px-1 text-muted-foreground">
          {[40, 70, 50, 85].map((h, i) => (
            <motion.span
              key={i}
              className="w-2.5 rounded-sm bg-border-bright origin-bottom"
              style={{ height: `${h}%` }}
              initial={false}
              animate={play ? { scaleY: [0, 1] } : { scaleY: 1 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      );
    case "03":
      return (
        <div className="relative flex h-14 items-center justify-start gap-1 text-muted-foreground">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block size-5 border border-border-bright bg-background"
              initial={false}
              animate={
                play
                  ? { x: 0, y: 0, opacity: 1, rotate: 0 }
                  : { x: (i - 1) * 14, y: i === 1 ? -10 : 8, opacity: 0.35, rotate: (i - 1) * 12 }
              }
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          <Boxes className="ml-2 size-5 text-brand-red/80" strokeWidth={1.4} />
        </div>
      );
    case "04":
      return (
        <div className="relative flex h-14 items-center gap-3 text-muted-foreground">
          <motion.div
            initial={false}
            animate={play ? { opacity: [0.3, 1, 1] } : { opacity: 1 }}
            transition={{ duration: 1.2, repeat: play ? Infinity : 0, repeatDelay: 1 }}
          >
            <Code2 className="size-7 text-brand-red" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            animate={play ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 4, ease: "linear", repeat: play ? Infinity : 0 }}
          >
            <Cog className="size-6" strokeWidth={1.25} />
          </motion.div>
        </div>
      );
    case "05":
      return (
        <div className="relative flex h-14 items-center gap-3 text-muted-foreground">
          <motion.div
            initial={false}
            animate={play ? { scale: [0.9, 1], opacity: 1 } : { opacity: 0.7 }}
            transition={{ duration: 0.45 }}
          >
            <CheckSquare className="size-7 text-emerald-500/90" strokeWidth={1.5} />
          </motion.div>
          <motion.div
            initial={false}
            animate={play ? { scale: [0.85, 1.08, 1], opacity: 1 } : { opacity: 0.7 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <Shield className="size-7 text-brand-red" strokeWidth={1.5} />
          </motion.div>
        </div>
      );
    case "06":
      return (
        <div className="relative flex h-14 items-center text-muted-foreground">
          <motion.div
            initial={false}
            animate={play ? { y: [8, -6, -10], opacity: [0.5, 1, 1] } : { y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], repeat: play ? Infinity : 0, repeatDelay: 1.2 }}
          >
            <Rocket className="size-8 text-brand-red" strokeWidth={1.4} />
          </motion.div>
        </div>
      );
    default:
      return null;
  }
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
