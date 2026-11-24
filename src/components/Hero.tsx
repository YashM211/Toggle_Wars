import { motion } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Activity,
  Zap,
  ChevronRight,
  Radio,
} from "lucide-react";

const flags = [
  {
    name: "New Dashboard",
    key: "new_dashboard",
    description: "Redesigned user experience",
    enabled: true,
    percentage: "75%",
    color: "bg-violet-400",
  },
  {
    name: "AI Analytics",
    key: "ai_analytics",
    description: "AI-powered insights",
    enabled: true,
    percentage: "40%",
    color: "bg-cyan-400",
  },
  {
    name: "Beta Checkout",
    key: "beta_checkout",
    description: "New payment experience",
    enabled: false,
    percentage: "0%",
    color: "bg-emerald-400",
  },
];

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[570px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-full bg-violet-600/10 blur-[70px] sm:-inset-8 sm:blur-[90px]" />

      {/* Dashboard */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0E1421] shadow-2xl shadow-black/50 sm:rounded-2xl">
        {/* Window header */}
        <div className="flex items-center justify-between gap-2 border-b border-white/[0.07] px-3 py-3 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15">
              <Zap size={16} className="text-violet-400" />
            </div>

            <span className="truncate text-xs font-semibold text-white sm:text-sm">
              Flag Control
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2 py-1 sm:gap-2 sm:px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] font-medium text-emerald-400 sm:text-[10px]">
              Systems Operational
            </span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-3 sm:p-5">
          {/* Metrics */}
          <div className="mb-5 grid grid-cols-2 gap-2 sm:mb-6 sm:gap-3">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 sm:p-4">
              <div className="mb-2 flex items-center gap-2 text-[10px] text-slate-400 sm:text-xs">
                <Activity size={14} />
                Active Flags
              </div>

              <div className="text-xl font-bold text-white sm:text-2xl">
                12{" "}
                <span className="text-xs font-normal text-slate-500">/ 16</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 sm:p-4">
              <div className="mb-2 flex items-center gap-2 text-[10px] text-slate-400 sm:text-xs">
                <ShieldCheck size={14} />
                Safe Deployments
              </div>

              <div className="text-xl font-bold text-white sm:text-2xl">
                99.9<span className="text-sm text-slate-400">%</span>
              </div>
            </div>
          </div>

          {/* Flags header */}
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-white">
                Feature Flags
              </h3>
              <p className="mt-1 text-[10px] text-slate-500 sm:text-[11px]">
                Manage your releases in real time
              </p>
            </div>

            <span className="shrink-0 rounded-md border border-white/10 px-2 py-1 text-[9px] text-slate-400 sm:px-2.5 sm:text-[10px]">
              Production
            </span>
          </div>

          {/* Flag list */}
          <div className="space-y-2">
            {flags.map((flag) => (
              <div
                key={flag.key}
                className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-2.5 transition hover:border-violet-400/20 sm:gap-3 sm:p-3"
              >
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <div
                    className={`h-8 w-1 shrink-0 rounded-full ${flag.color}`}
                  />

                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-slate-200 sm:text-xs">
                      {flag.name}
                    </p>

                    <p className="mt-1 truncate text-[9px] text-slate-500 sm:text-[10px]">
                      {flag.key}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                  <span className="text-[10px] text-slate-400 sm:text-[11px]">
                    {flag.percentage}
                  </span>

                  <div
                    className={`flex h-5 w-9 items-center rounded-full p-0.5 ${
                      flag.enabled
                        ? "justify-end bg-violet-500"
                        : "justify-start bg-slate-700"
                    }`}
                  >
                    <span className="h-4 w-4 rounded-full bg-white shadow" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/[0.07] pt-4 sm:mt-5">
            <div className="flex items-center gap-1.5 text-[9px] text-slate-500 sm:gap-2 sm:text-[10px]">
              <Radio size={12} className="shrink-0 text-cyan-400" />
              Powered by Flagsmith
            </div>

            <span className="flex shrink-0 items-center gap-1 text-[9px] text-violet-400 sm:text-[10px]">
              View dashboard
              <ChevronRight size={12} />
            </span>
          </div>
        </div>
      </div>

      {/* Floating deployment indicator */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-xl border border-emerald-400/20 bg-[#101B1C] px-4 py-3 shadow-xl sm:flex lg:-left-5"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10">
          <ShieldCheck size={17} className="text-emerald-400" />
        </div>

        <div>
          <p className="text-xs font-semibold text-white">Deployment secured</p>
          <p className="mt-0.5 text-[10px] text-slate-400">
            Gradual rollout active
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:py-28">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[90px] sm:h-[500px] sm:w-[700px] sm:blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="min-w-0"
        >
          {/* Announcement */}
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-2 sm:mb-8">
            <Zap size={13} className="shrink-0 text-violet-400" />

            <span className="text-[9px] font-medium leading-5 text-violet-200 sm:text-[11px]">
              Built for the next generation of deployments
            </span>

            <ArrowRight size={12} className="shrink-0 text-violet-400" />
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Ship Features.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Not Risks.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
            Take control of every release with intelligent feature flags,
            progressive rollouts and instant kill switches. Deploy confidently.
            Experiment fearlessly.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#demo"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-500 sm:w-auto"
            >
              Explore Platform
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://github.com/YashM211/Toggle_Wars"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:w-auto"
            >
              <GitBranch size={17} />
              View on GitHub
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-slate-500 sm:mt-10 sm:gap-x-6 sm:text-xs">
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} className="shrink-0 text-emerald-400" />
              Safer deployments
            </span>

            <span className="flex items-center gap-2">
              <Zap size={15} className="shrink-0 text-violet-400" />
              Instant control
            </span>
          </div>
        </motion.div>

        {/* Right dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="min-w-0 w-full"
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
