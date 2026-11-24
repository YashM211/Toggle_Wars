import { motion } from "framer-motion";
import {
  Code2,
  SlidersHorizontal,
  Cpu,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Terminal,
  GitBranch,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Build Your Feature",
    subtitle: "Developer Workflow",
    description:
      "Developers implement new functionality behind feature flags instead of exposing it to every user immediately.",
    icon: Code2,
    color: "violet",
    code: `if (flags.new_dashboard) {
  return <NewDashboard />;
}

return <LegacyDashboard />;`,
    points: [
      "Wrap features with flags",
      "Keep code deployment independent",
      "Ship without exposing features",
    ],
  },
  {
    number: "02",
    title: "Configure the Rollout",
    subtitle: "Toggle Wars Control",
    description:
      "Configure feature availability, rollout percentages and targeting rules through a centralized control interface.",
    icon: SlidersHorizontal,
    color: "cyan",
    code: `{
  "feature": "new_dashboard",
  "enabled": true,
  "rollout": 50,
  "environment": "production"
}`,
    points: [
      "Enable or disable features",
      "Configure rollout percentages",
      "Manage environments",
    ],
  },
  {
    number: "03",
    title: "Evaluate Feature Flags",
    subtitle: "Flagsmith Integration",
    description:
      "The application uses Flagsmith to evaluate feature flags and determine whether a particular user should receive a feature.",
    icon: Cpu,
    color: "blue",
    code: `const flags = await
  flagsmith.getIdentityFlags(userId);

const enabled =
  flags.isEnabled("new_dashboard");`,
    points: [
      "Evaluate feature states",
      "Apply targeting rules",
      "Retrieve flag configurations",
    ],
  },
  {
    number: "04",
    title: "Release with Confidence",
    subtitle: "Application Experience",
    description:
      "The application renders the appropriate experience based on the evaluated feature flag and its configuration.",
    icon: Rocket,
    color: "emerald",
    code: `if (enabled) {
  renderNewExperience();
} else {
  renderExistingExperience();
}`,
    points: [
      "Deliver controlled experiences",
      "Monitor feature adoption",
      "Disable problematic releases",
    ],
  },
];

const colors: Record<
  string,
  {
    icon: string;
    number: string;
    border: string;
    glow: string;
    dot: string;
  }
> = {
  violet: {
    icon: "bg-violet-500/10 text-violet-400",
    number: "text-violet-400",
    border: "border-violet-400/20",
    glow: "bg-violet-500/10",
    dot: "bg-violet-400",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400",
    number: "text-cyan-400",
    border: "border-cyan-400/20",
    glow: "bg-cyan-500/10",
    dot: "bg-cyan-400",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400",
    number: "text-blue-400",
    border: "border-blue-400/20",
    glow: "bg-blue-500/10",
    dot: "bg-blue-400",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400",
    number: "text-emerald-400",
    border: "border-emerald-400/20",
    glow: "bg-emerald-500/10",
    dot: "bg-emerald-400",
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden px-6 py-28 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            The Process
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            From code to production.
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Every step under control.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            A simple workflow that separates deploying code from releasing
            features. Build once, control releases whenever you need.
          </p>
        </motion.div>

        {/* Workflow cards */}
        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-violet-500/40 via-cyan-400/40 to-emerald-400/40 xl:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const style = colors[step.color];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                {/* Step icon */}
                <div className="relative z-10 mb-7 flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${style.border} ${style.icon} shadow-xl`}
                  >
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <span className={`font-mono text-sm ${style.number}`}>
                    /{step.number}
                  </span>
                </div>

                {/* Card */}
                <div className="h-full rounded-2xl border border-white/[0.07] bg-[#0E1421]/80 p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/15 group-hover:bg-[#111827]">
                  <p
                    className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] ${style.number}`}
                  >
                    {step.subtitle}
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 min-h-[105px] text-xs leading-6 text-slate-400">
                    {step.description}
                  </p>

                  {/* Code preview */}
                  <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.07] bg-[#080B14]">
                    <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2">
                      <Terminal size={12} className="text-slate-500" />
                      <span className="text-[9px] text-slate-500">
                        workflow.ts
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-3 text-[10px] leading-5 text-cyan-200/80">
                      <code>{step.code}</code>
                    </pre>
                  </div>

                  {/* Points */}
                  <div className="mt-6 space-y-3">
                    {step.points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          className={`mt-0.5 shrink-0 ${style.number}`}
                        />

                        <span className="text-[10px] text-slate-400">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                    <span className="text-[10px] text-slate-500">
                      STEP {step.number}
                    </span>

                    {index !== steps.length - 1 && (
                      <ArrowRight
                        size={15}
                        className="text-slate-600 transition-transform group-hover:translate-x-1"
                      />
                    )}

                    {index === steps.length - 1 && (
                      <CheckCircle2 size={15} className="text-emerald-400" />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom deployment message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-5 text-center"
        >
          <GitBranch size={17} className="text-violet-400" />

          <p className="text-xs text-slate-400">
            One deployment. Multiple controlled releases.
          </p>

          <CheckCircle2 size={16} className="text-emerald-400" />
        </motion.div>
      </div>
    </section>
  );
}
