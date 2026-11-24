import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Power,
  Users,
  SlidersHorizontal,
  RotateCcw,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

type FeatureFlag = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  rollout: number;
};

const initialFlags: FeatureFlag[] = [
  {
    id: "new_dashboard",
    name: "New Dashboard",
    description: "Redesigned dashboard experience",
    enabled: true,
    rollout: 75,
  },
  {
    id: "ai_analytics",
    name: "AI Analytics",
    description: "AI-powered usage insights",
    enabled: true,
    rollout: 40,
  },
  {
    id: "beta_checkout",
    name: "Beta Checkout",
    description: "Experimental payment experience",
    enabled: false,
    rollout: 0,
  },
];

export default function InteractiveDemo() {
  const [flags, setFlags] = useState(initialFlags);
  const [selectedFlagId, setSelectedFlagId] = useState("new_dashboard");
  const [traffic, setTraffic] = useState(1000);

  const selectedFlag =
    flags.find((flag) => flag.id === selectedFlagId) ?? flags[0];

  const updateFlag = (id: string, updates: Partial<FeatureFlag>) => {
    setFlags((currentFlags) =>
      currentFlags.map((flag) =>
        flag.id === id ? { ...flag, ...updates } : flag,
      ),
    );
  };

  const eligibleUsers = useMemo(() => {
    if (!selectedFlag.enabled) return 0;
    return Math.floor((traffic * selectedFlag.rollout) / 100);
  }, [traffic, selectedFlag]);

  const resetDemo = () => {
    setFlags(initialFlags);
    setSelectedFlagId("new_dashboard");
    setTraffic(1000);
  };

  const activeFlags = flags.filter((flag) => flag.enabled).length;

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-[#080B14] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[110px] sm:h-96 sm:w-96 sm:blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/[0.07] px-3 py-1.5">
            <Activity size={13} className="text-cyan-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Interactive Playground
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Take control.
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              See the impact.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Experiment with feature flags, control rollout percentages and see
            how your application responds. No deployment required.
          </p>
        </motion.div>

        {/* Main playground */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E1421] shadow-2xl shadow-black/30">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-white/[0.07] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                <SlidersHorizontal size={17} className="text-violet-400" />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-white">
                  Feature Control Center
                </h3>
                <p className="mt-1 text-[10px] text-slate-500">
                  Interactive simulation environment
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <span className="flex items-center gap-2 text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Simulation Active
              </span>

              <button
                onClick={resetDemo}
                className="flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                <RotateCcw size={13} />
                Reset
              </button>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-px border-b border-white/[0.07] bg-white/[0.06] sm:grid-cols-4">
            {[
              {
                label: "Total Flags",
                value: flags.length,
                color: "text-white",
              },
              {
                label: "Active Flags",
                value: activeFlags,
                color: "text-emerald-400",
              },
              {
                label: "Simulated Users",
                value: traffic.toLocaleString(),
                color: "text-white",
              },
              {
                label: "Selected Audience",
                value: eligibleUsers.toLocaleString(),
                color: "text-cyan-400",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="min-w-0 bg-[#0E1421] p-4 sm:p-5"
              >
                <p className="text-[9px] uppercase tracking-wider text-slate-500 sm:text-[10px]">
                  {metric.label}
                </p>
                <p
                  className={`mt-2 break-words text-xl font-bold sm:text-2xl ${metric.color}`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* Playground content */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left: Flag controls */}
            <div className="min-w-0 border-b border-white/[0.07] p-4 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-white">
                  Feature Flags
                </h4>
                <p className="mt-1 text-xs text-slate-500">
                  Select a flag to configure its behavior
                </p>
              </div>

              <div className="space-y-3">
                {flags.map((flag) => {
                  const selected = selectedFlagId === flag.id;

                  return (
                    <button
                      key={flag.id}
                      onClick={() => setSelectedFlagId(flag.id)}
                      className={`w-full min-w-0 rounded-xl border p-3 text-left transition sm:p-4 ${
                        selected
                          ? "border-violet-400/30 bg-violet-500/[0.07]"
                          : "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <div className="flex min-w-0 items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-200">
                            {flag.name}
                          </p>
                          <p className="mt-1 truncate text-[10px] text-slate-500">
                            {flag.description}
                          </p>
                        </div>

                        <span
                          className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-semibold ${
                            flag.enabled
                              ? "bg-emerald-400/10 text-emerald-400"
                              : "bg-slate-700/50 text-slate-400"
                          }`}
                        >
                          {flag.enabled ? "ENABLED" : "DISABLED"}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span className="min-w-0 truncate font-mono text-[10px] text-slate-500">
                          {flag.id}
                        </span>

                        <div
                          className={`flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 ${
                            flag.enabled
                              ? "justify-end bg-violet-500"
                              : "justify-start bg-slate-700"
                          }`}
                        >
                          <span className="h-4 w-4 rounded-full bg-white shadow" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Configuration */}
              <div className="mt-7 border-t border-white/[0.07] pt-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Rollout Percentage
                    </h4>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Control audience exposure
                    </p>
                  </div>

                  <span className="shrink-0 rounded-lg border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 font-mono text-sm font-bold text-violet-300">
                    {selectedFlag.rollout}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={selectedFlag.rollout}
                  disabled={!selectedFlag.enabled}
                  onChange={(event) =>
                    updateFlag(selectedFlag.id, {
                      rollout: Number(event.target.value),
                    })
                  }
                  className="mt-6 h-1.5 w-full cursor-pointer accent-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
                />

                <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                  <span>0% Exposure</span>
                  <span>100% Exposure</span>
                </div>

                {/* Toggle */}
                <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 sm:p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                      <Power size={17} className="text-violet-400" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white">
                        Master Switch
                      </p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        Enable or disable this feature
                      </p>
                    </div>
                  </div>

                  <button
                    role="switch"
                    aria-checked={selectedFlag.enabled}
                    aria-label={`Toggle ${selectedFlag.name}`}
                    onClick={() =>
                      updateFlag(selectedFlag.id, {
                        enabled: !selectedFlag.enabled,
                      })
                    }
                    className={`flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition-colors ${
                      selectedFlag.enabled
                        ? "justify-end bg-violet-500"
                        : "justify-start bg-slate-700"
                    }`}
                  >
                    <span className="h-4 w-4 rounded-full bg-white shadow" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Live preview */}
            <div className="min-w-0 bg-[#0A101C] p-4 sm:p-7">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Application Preview
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">
                    Simulated user experience
                  </p>
                </div>

                <span className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5 text-[10px] text-cyan-400">
                  <Activity size={12} />
                  Live Preview
                </span>
              </div>

              {/* Preview window */}
              <div className="min-h-[290px] overflow-hidden rounded-xl border border-white/10 bg-[#111827]">
                {/* Browser bar */}
                <div className="flex min-w-0 items-center gap-2 border-b border-white/[0.07] px-3 py-3 sm:px-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

                  <div className="ml-2 min-w-0 truncate rounded-md bg-black/20 px-3 py-1 text-[9px] text-slate-500 sm:ml-3">
                    app.togglewars.dev
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedFlag.id}-${selectedFlag.enabled}-${selectedFlag.rollout}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {selectedFlag.enabled && selectedFlag.rollout > 0 ? (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-emerald-400">
                            <CheckCircle2 size={15} />
                            <span className="text-[10px] font-semibold">
                              FEATURE AVAILABLE
                            </span>
                          </div>

                          <div>
                            <h3 className="break-words text-lg font-bold text-white sm:text-xl">
                              {selectedFlag.name}
                            </h3>
                            <p className="mt-2 text-xs leading-6 text-slate-400">
                              {selectedFlag.description}
                            </p>
                          </div>

                          <div className="rounded-xl border border-violet-400/20 bg-violet-500/[0.07] p-3 sm:p-4">
                            <div className="mb-3 flex items-center justify-between gap-3">
                              <span className="text-xs text-slate-300">
                                Audience rollout
                              </span>
                              <span className="font-mono text-xs text-violet-300">
                                {selectedFlag.rollout}%
                              </span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${selectedFlag.rollout}%`,
                                }}
                                transition={{ duration: 0.35 }}
                                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                              />
                            </div>

                            <div className="mt-4 flex items-start gap-2">
                              <Users
                                size={14}
                                className="mt-0.5 shrink-0 text-cyan-400"
                              />
                              <span className="text-[10px] leading-5 text-slate-400">
                                {eligibleUsers.toLocaleString()} of{" "}
                                {traffic.toLocaleString()} simulated users
                                eligible
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
                          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/10">
                            <AlertTriangle
                              size={24}
                              className="text-rose-400"
                            />
                          </div>

                          <h3 className="text-lg font-semibold text-white">
                            Feature Unavailable
                          </h3>

                          <p className="mt-2 max-w-xs text-xs leading-6 text-slate-400">
                            {selectedFlag.enabled
                              ? "The rollout is currently set to 0%. No users are eligible for this feature."
                              : "This feature has been disabled using the master switch."}
                          </p>

                          <span className="mt-4 rounded-lg border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-[10px] text-rose-400">
                            {selectedFlag.enabled
                              ? "0% ROLLOUT"
                              : "KILL SWITCH ACTIVE"}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Traffic simulator */}
              <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 sm:p-4">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Users size={15} className="text-cyan-400" />
                    <span className="text-xs font-semibold text-white">
                      Traffic Simulator
                    </span>
                  </div>

                  <span className="font-mono text-xs text-cyan-400">
                    {traffic.toLocaleString()} users
                  </span>
                </div>

                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={traffic}
                  onChange={(event) => setTraffic(Number(event.target.value))}
                  className="h-1.5 w-full cursor-pointer accent-cyan-400"
                />

                <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                  <span>100 users</span>
                  <span>10,000 users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom status */}
          <div className="flex flex-col gap-3 border-t border-white/[0.07] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              <Terminal size={13} />
              <span>ToggleWars Playground / Simulation Mode</span>
            </div>

            <span className="flex items-center gap-2 text-[10px] text-emerald-400">
              <ShieldCheck size={13} />
              Changes applied instantly
            </span>
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] leading-5 text-slate-600">
          Demo uses local simulation data. Actual Flagsmith integration will be
          connected in the application.
        </p>
      </div>
    </section>
  );
}
