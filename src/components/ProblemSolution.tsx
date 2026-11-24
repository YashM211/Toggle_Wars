import { motion } from "framer-motion";
import {
  AlertTriangle,
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
    <section className="relative overflow-hidden bg-[#080B14] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* Background effect */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/[0.04] blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-16"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-xs">
            The Deployment Challenge
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
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
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 rounded-2xl border border-rose-400/10 bg-[#0E1421]/80 p-5 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3 sm:mb-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/10">
                <AlertTriangle size={19} className="text-rose-400" />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Without Feature Flags
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Traditional release challenges
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-7">
              {problems.map((problem) => {
                const Icon = problem.icon;

                return (
                  <div
                    key={problem.title}
                    className="flex min-w-0 gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500/[0.08]">
                      <Icon size={19} className="text-rose-400" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-200">
                        {problem.title}
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
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
            className="min-w-0 rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.08] to-[#0E1421] p-5 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3 sm:mb-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10">
                <CheckCircle2 size={19} className="text-emerald-400" />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  With Toggle Wars
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Smarter feature management
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-7">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <div
                    key={solution.title}
                    className="flex min-w-0 gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                      <Icon size={19} className="text-violet-400" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-200">
                        {solution.title}
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
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
          className="mt-10 rounded-2xl border border-white/[0.07] bg-[#0E1421]/70 p-5 sm:mt-16 sm:p-8 lg:p-10"
        >
          <div className="mb-8 text-center sm:mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-xs">
              The Workflow
            </span>

            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              From code to controlled release.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative min-w-0 text-center">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 sm:h-12 sm:w-12">
                  <span className="font-mono text-sm font-bold text-violet-400">
                    {step.number}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white">
                  {step.label}
                </h4>

                <p className="mt-2 text-[11px] leading-5 text-slate-500 sm:text-xs">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-4 hidden text-slate-600 sm:block"
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
