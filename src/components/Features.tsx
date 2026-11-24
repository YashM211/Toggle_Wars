import { motion } from "framer-motion";
import {
  ToggleRight,
  Rocket,
  Users,
  ShieldAlert,
  Layers,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Real-time Feature Toggles",
    description:
      "Enable or disable features instantly without redeploying your application. Stay in complete control of every release.",
    icon: ToggleRight,
    accent: "violet",
    tag: "Instant Control",
  },
  {
    number: "02",
    title: "Progressive Rollouts",
    description:
      "Release features gradually to a percentage of your users. Validate performance before going all in.",
    icon: Rocket,
    accent: "cyan",
    tag: "Controlled Releases",
  },
  {
    number: "03",
    title: "User-Based Targeting",
    description:
      "Deliver personalized experiences by targeting specific users, groups or customer segments.",
    icon: Users,
    accent: "blue",
    tag: "Smart Targeting",
  },
  {
    number: "04",
    title: "Instant Kill Switches",
    description:
      "Disable problematic features immediately and minimize the impact of unexpected production issues.",
    icon: ShieldAlert,
    accent: "rose",
    tag: "Risk Protection",
  },
  {
    number: "05",
    title: "Environment Management",
    description:
      "Manage feature configurations independently across development, staging and production environments.",
    icon: Layers,
    accent: "amber",
    tag: "Multi Environment",
  },
  {
    number: "06",
    title: "Experimentation & Analytics",
    description:
      "Experiment with feature variations, monitor adoption and make informed decisions using meaningful insights.",
    icon: FlaskConical,
    accent: "emerald",
    tag: "Data Driven",
  },
];

const accentStyles: Record<
  string,
  { icon: string; glow: string; tag: string }
> = {
  violet: {
    icon: "bg-violet-500/10 text-violet-400 border-violet-400/20",
    glow: "group-hover:shadow-violet-500/10",
    tag: "text-violet-400",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-400 border-cyan-400/20",
    glow: "group-hover:shadow-cyan-500/10",
    tag: "text-cyan-400",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400 border-blue-400/20",
    glow: "group-hover:shadow-blue-500/10",
    tag: "text-blue-400",
  },
  rose: {
    icon: "bg-rose-500/10 text-rose-400 border-rose-400/20",
    glow: "group-hover:shadow-rose-500/10",
    tag: "text-rose-400",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-400 border-amber-400/20",
    glow: "group-hover:shadow-amber-500/10",
    tag: "text-amber-400",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",
    glow: "group-hover:shadow-emerald-500/10",
    tag: "text-emerald-400",
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-violet-600/[0.06] blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-violet-300 sm:text-[10px] sm:tracking-[0.2em]">
              Powerful Capabilities
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              ship safely.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            Take complete control over feature releases with intelligent
            toggles, targeted rollouts and real-time safeguards.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const styles = accentStyles[feature.accent];

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group relative flex min-w-0 flex-col rounded-2xl border border-white/[0.07] bg-[#0E1421]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-[#111827] hover:shadow-2xl sm:p-6 lg:p-7 ${styles.glow}`}
              >
                {/* Top row */}
                <div className="mb-6 flex items-center justify-between sm:mb-8">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border sm:h-12 sm:w-12 ${styles.icon}`}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="font-mono text-xs text-slate-600">
                    /{feature.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-violet-200 sm:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-5 sm:mt-7">
                  <span
                    className={`text-[9px] font-semibold uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.15em] ${styles.tag}`}
                  >
                    {feature.tag}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center sm:mt-12">
          <span className="h-px w-6 bg-white/10 sm:w-10" />

          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            Built for developers who want control without complexity.
          </p>

          <span className="h-px w-6 bg-white/10 sm:w-10" />
        </div>
      </div>
    </section>
  );
}
