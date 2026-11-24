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
      className="relative overflow-hidden px-6 py-28 lg:px-10"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
              Powerful Capabilities
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              ship safely.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Take complete control over feature releases with intelligent
            toggles, targeted rollouts and real-time safeguards.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className={`group relative rounded-2xl border border-white/[0.07] bg-[#0E1421]/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-[#111827] hover:shadow-2xl ${styles.glow}`}
              >
                {/* Top row */}
                <div className="mb-8 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${styles.icon}`}
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="font-mono text-xs text-slate-600">
                    /{feature.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-violet-200">
                  {feature.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

                {/* Footer */}
                <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${styles.tag}`}
                  >
                    {feature.tag}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="h-px w-10 bg-white/10" />
          <p className="text-xs text-slate-500">
            Built for developers who want control without complexity.
          </p>
          <span className="h-px w-10 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
