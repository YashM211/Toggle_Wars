import { motion } from "framer-motion";
import {
  AlertTriangle,
  Rocket,
  RefreshCcw,
  Clock,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Risky Deployments",
    description:
      "Releasing unfinished features can introduce unexpected bugs and affect production users.",
  },
  {
    icon: RefreshCcw,
    title: "Redeployment Overhead",
    description:
      "Changing feature availability often requires code changes, rebuilds and repeated deployments.",
  },
  {
    icon: Clock,
    title: "Slow Incident Response",
    description:
      "Disabling problematic functionality during production incidents can take valuable time.",
  },
];

const solutions = [
  {
    icon: ShieldCheck,
    title: "Release with Confidence",
    description:
      "Control feature availability independently of deployments and minimize release risks.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control Every Rollout",
    description:
      "Gradually expose features to selected users and increase rollout percentages when ready.",
  },
  {
    icon: Zap,
    title: "React Instantly",
    description:
      "Use kill switches to disable problematic features without waiting for another deployment.",
  },
];

const steps = [
  { number: "01", label: "Build", description: "Write your feature" },
  { number: "02", label: "Flag", description: "Wrap it with a flag" },
  { number: "03", label: "Control", description: "Configure rollout" },
  { number: "04", label: "Release", description: "Ship with confidence" },
];

export default function ProblemSolution() {
  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-10">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            The Deployment Challenge
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Deployments shouldn't
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              feel like a gamble.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Shipping code is easy. Shipping features safely, controlling
            releases and responding to production issues is the real challenge.
          </p>
        </motion.div>

        {/* Problem and solution columns */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-rose-400/10 bg-[#0E1421]/80 p-6 sm:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/10">
                <AlertTriangle size={19} className="text-rose-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Without Feature Flags
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Traditional release challenges
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {problems.map((problem, index) => {
                const Icon = problem.icon;

                return (
                  <div key={problem.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500/[0.08]">
                      <Icon size={19} className="text-rose-400" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">
                        {problem.title}
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.08] to-[#0E1421] p-6 sm:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10">
                <CheckCircle2 size={19} className="text-emerald-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">With Toggle Wars</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Smarter feature management
                </p>
              </div>
            </div>

            <div className="space-y-7">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <div key={solution.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                      <Icon size={19} className="text-violet-400" />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">
                        {solution.title}
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-white/[0.07] bg-[#0E1421]/70 p-6 sm:p-10"
        >
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              The Workflow
            </span>

            <h3 className="mt-3 text-2xl font-bold text-white">
              From code to controlled release.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10">
                  <span className="font-mono text-sm font-bold text-violet-400">
                    {step.number}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white">
                  {step.label}
                </h4>

                <p className="mt-2 text-xs text-slate-500">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-4 hidden text-slate-600 md:block"
                    size={18}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
