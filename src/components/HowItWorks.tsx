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
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/[0.05] blur-[100px] sm:h-96 sm:w-96 sm:blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400 sm:text-xs sm:tracking-[0.2em]">
            The Process
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl lg:text-5xl">
            From code to production.
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Every step under control.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            A simple workflow that separates deploying code from releasing
            features. Build once, control releases whenever you need.
          </p>
        </motion.div>

        {/* Workflow cards */}
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {/* Connecting line - desktop only */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-violet-500/40 via-cyan-400/40 to-emerald-400/40 xl:block" />

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
                className="group relative flex min-w-0 flex-col"
              >
                {/* Step icon */}
                <div className="relative z-10 mb-5 flex items-center justify-between sm:mb-7">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-xl sm:h-14 sm:w-14 sm:rounded-2xl lg:h-16 lg:w-16 ${style.border} ${style.icon}`}
                  >
                    <Icon size={23} strokeWidth={1.6} />
                  </div>

                  <span
                    className={`font-mono text-xs sm:text-sm ${style.number}`}
                  >
                    /{step.number}
                  </span>
                </div>

                {/* Card */}
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#0E1421]/80 p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/15 group-hover:bg-[#111827] sm:p-6">
                  <p
                    className={`mb-3 text-[9px] font-semibold uppercase tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em] ${style.number}`}
                  >
                    {step.subtitle}
                  </p>

                  <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-3 flex-1 text-xs leading-6 text-slate-400 sm:mt-4">
                    {step.description}
                  </p>

                  {/* Code preview */}
                  <div className="mt-5 min-w-0 overflow-hidden rounded-xl border border-white/[0.07] bg-[#080B14]">
                    <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2">
                      <Terminal size={12} className="shrink-0 text-slate-500" />
                      <span className="text-[9px] text-slate-500">
                        workflow.ts
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-3 text-[9px] leading-5 text-cyan-200/80 sm:text-[10px]">
                      <code>{step.code}</code>
                    </pre>
                  </div>

                  {/* Points */}
                  <div className="mt-5 space-y-3 sm:mt-6">
                    {step.points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          className={`mt-0.5 shrink-0 ${style.number}`}
                        />

                        <span className="text-[10px] leading-5 text-slate-400 sm:text-[11px]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Card footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4 sm:mt-6">
                    <span className="text-[9px] text-slate-500 sm:text-[10px]">
                      STEP {step.number}
                    </span>

                    {index !== steps.length - 1 ? (
                      <ArrowRight
                        size={15}
                        className="text-slate-600 transition-transform group-hover:translate-x-1"
                      />
                    ) : (
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
          className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-4 text-center sm:mt-12 sm:px-5 sm:py-5"
        >
          <GitBranch size={17} className="shrink-0 text-violet-400" />

          <p className="text-xs leading-6 text-slate-400 sm:text-sm">
            One deployment. Multiple controlled releases.
          </p>

          <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
        </motion.div>
      </div>
    </section>
  );
}
