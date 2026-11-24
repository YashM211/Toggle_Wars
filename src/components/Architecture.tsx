import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Layers,
  ShieldCheck,
  ArrowDown,
  ArrowUpDown,
  Globe,
  Code2,
  Settings2,
  Activity,
  Lock,
  Workflow,
} from "lucide-react";

const layers = [
  {
    title: "Frontend Layer",
    subtitle: "User Interface",
    icon: Monitor,
    color: "violet",
    items: [
      {
        icon: Code2,
        name: "React + TypeScript",
        description: "Interactive dashboard and application UI",
      },
      {
        icon: Workflow,
        name: "Flagsmith SDK",
        description: "Fetch and evaluate feature flags",
      },
    ],
  },
  {
    title: "Backend Layer",
    subtitle: "Application Services",
    icon: Server,
    color: "cyan",
    items: [
      {
        icon: ShieldCheck,
        name: "Authentication",
        description: "User sessions and access control",
      },
      {
        icon: Settings2,
        name: "Management API",
        description: "Manage projects and configurations",
      },
      {
        icon: Activity,
        name: "Audit & Monitoring",
        description: "Track application-level activities",
      },
    ],
  },
  {
    title: "Data Layer",
    subtitle: "Application Storage",
    icon: Database,
    color: "blue",
    items: [
      {
        icon: Database,
        name: "PostgreSQL",
        description: "Store application metadata and users",
      },
      {
        icon: Layers,
        name: "Flagsmith",
        description: "Manage flags, environments and segments",
      },
    ],
  },
];

const colors: Record<
  string,
  {
    border: string;
    icon: string;
    badge: string;
    glow: string;
  }
> = {
  violet: {
    border: "border-violet-400/20",
    icon: "text-violet-400 bg-violet-500/10",
    badge: "text-violet-300",
    glow: "shadow-violet-500/5",
  },
  cyan: {
    border: "border-cyan-400/20",
    icon: "text-cyan-400 bg-cyan-500/10",
    badge: "text-cyan-300",
    glow: "shadow-cyan-500/5",
  },
  blue: {
    border: "border-blue-400/20",
    icon: "text-blue-400 bg-blue-500/10",
    badge: "text-blue-300",
    glow: "shadow-blue-500/5",
  },
};

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden px-6 py-28 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            System Architecture
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Engineered for
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              controlled releases.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            A modular architecture combining a modern application frontend,
            backend services and Flagsmith's feature management infrastructure.
          </p>
        </motion.div>

        {/* Architecture layers */}
        <div className="mx-auto max-w-4xl space-y-4">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const style = colors[layer.color];

            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className={`rounded-2xl border ${style.border} bg-[#0E1421]/90 p-5 shadow-xl ${style.glow} sm:p-7`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${style.icon}`}
                    >
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {layer.title}
                      </h3>
                      <p className="mt-1 text-[10px] text-slate-500">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`font-mono text-xs ${style.badge}`}>
                    LAYER 0{index + 1}
                  </span>
                </div>

                <div
                  className={`grid gap-3 ${
                    layer.items.length === 3
                      ? "md:grid-cols-3"
                      : "sm:grid-cols-2"
                  }`}
                >
                  {layer.items.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <ItemIcon size={17} className={style.badge} />
                          <span className="text-xs font-semibold text-slate-200">
                            {item.name}
                          </span>
                        </div>

                        <p className="text-[10px] leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {/* Connections */}
          <div className="flex flex-col items-center gap-2 py-2">
            <ArrowDown size={20} className="text-violet-400" />
            <span className="text-[10px] uppercase tracking-widest text-slate-500">
              API communication
            </span>
          </div>

          {/* Flagsmith infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/[0.08] to-[#0E1421] p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10">
                  <Globe size={24} className="text-emerald-400" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Flagsmith Platform
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Feature management infrastructure
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold text-emerald-400">
                EXTERNAL SERVICE
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Feature Flags", "User Segments", "Environments"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/[0.07] bg-black/20 p-3 text-center text-xs text-slate-300"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>

        {/* API flow details */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="mb-6 text-center text-xl font-bold text-white">
            Two separate API flows
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-violet-400/20 bg-[#0E1421] p-6">
              <div className="mb-4 flex items-center gap-2">
                <ArrowUpDown size={18} className="text-violet-400" />
                <h4 className="text-sm font-semibold text-white">Flags API</h4>
              </div>

              <p className="text-xs leading-6 text-slate-400">
                The application SDK retrieves environment and identity-specific
                feature values from Flagsmith.
              </p>

              <span className="mt-5 inline-block rounded-md bg-violet-500/10 px-3 py-2 text-[10px] text-violet-300">
                Feature Evaluation
              </span>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-[#0E1421] p-6">
              <div className="mb-4 flex items-center gap-2">
                <Lock size={18} className="text-cyan-400" />
                <h4 className="text-sm font-semibold text-white">
                  Management API
                </h4>
              </div>

              <p className="text-xs leading-6 text-slate-400">
                Trusted backend services use the private API token to create and
                update projects, flags and environments.
              </p>

              <span className="mt-5 inline-block rounded-md bg-cyan-500/10 px-3 py-2 text-[10px] text-cyan-300">
                Configuration Management
              </span>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Modular architecture designed to separate application responsibilities
          from feature evaluation.
        </p>
      </div>
    </section>
  );
}
