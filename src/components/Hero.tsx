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
    <div className="relative mx-auto w-full max-w-[570px]">
      {/* Ambient glow */}
      <div className="absolute -inset-8 rounded-full bg-violet-600/10 blur-[90px]" />

      {/* Dashboard */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1421] shadow-2xl shadow-black/50">
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15">
              <Zap size={16} className="text-violet-400" />
            </div>
            <span className="text-sm font-semibold text-white">
              Flag Control
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium text-emerald-400">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* Metrics */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                <Activity size={14} />
                Active Flags
              </div>
              <div className="text-2xl font-bold text-white">
                12{" "}
                <span className="text-xs font-normal text-slate-500">/ 16</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck size={14} />
                Safe Deployments
              </div>
              <div className="text-2xl font-bold text-white">
                99.9<span className="text-sm text-slate-400">%</span>
              </div>
            </div>
          </div>

          {/* Flags header */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Feature Flags
              </h3>
              <p className="mt-1 text-[11px] text-slate-500">
                Manage your releases in real time
              </p>
            </div>

            <span className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">
              Production
            </span>
          </div>

          {/* Flag list */}
          <div className="space-y-2">
            {flags.map((flag) => (
              <div
                key={flag.key}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition hover:border-violet-400/20"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className={`h-8 w-1 rounded-full ${flag.color}`} />

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-slate-200">
                      {flag.name}
                    </p>
                    <p className="mt-1 truncate text-[10px] text-slate-500">
                      {flag.key}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-[11px] text-slate-400">
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
          <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              <Radio size={12} className="text-cyan-400" />
              Powered by Flagsmith
            </div>

            <span className="flex items-center gap-1 text-[10px] text-violet-400">
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
        className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-emerald-400/20 bg-[#101B1C] px-4 py-3 shadow-xl sm:flex"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10">
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
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 lg:px-10 lg:pt-44">
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
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          {/* Announcement */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-2">
            <Zap size={13} className="text-violet-400" />
            <span className="text-[11px] font-medium text-violet-200">
              Built for the next generation of deployments
            </span>
            <ArrowRight size={12} className="text-violet-400" />
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.1] tracking-[-0.045em] text-white sm:text-6xl lg:text-[68px]">
            Ship Features.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Not Risks.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
            Take control of every release with intelligent feature flags,
            progressive rollouts and instant kill switches. Deploy confidently.
            Experiment fearlessly.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="group flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-500"
            >
              Explore Platform
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://GitBranch.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <GitBranch size={17} />
              View on GitBranch
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-emerald-400" />
              Safer deployments
            </span>

            <span className="flex items-center gap-2">
              <Zap size={15} className="text-violet-400" />
              Instant control
            </span>
          </div>
        </motion.div>

        {/* Right dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
