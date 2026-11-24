import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Database,
  Workflow,
  ShieldCheck,
  Cloud,
} from "lucide-react";

const stackGroups = [
  {
    title: "Frontend",
    description: "Building a responsive and interactive experience",
    icon: Code2,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Backend",
    description: "Managing APIs, authentication and application logic",
    icon: Layers3,
    technologies: ["Node.js", "Express.js", "REST APIs"],
    color: "from-violet-400 to-purple-500",
  },
  {
    title: "Database",
    description: "Storing application and user-related information",
    icon: Database,
    technologies: ["PostgreSQL"],
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Feature Management",
    description: "Controlling feature flags and release strategies",
    icon: Workflow,
    technologies: ["Flagsmith", "Feature Flags", "Remote Configuration"],
    color: "from-orange-400 to-pink-500",
  },
  {
    title: "Security",
    description: "Keeping management operations secure",
    icon: ShieldCheck,
    technologies: ["Authentication", "Role-Based Access", "Audit Logs"],
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Deployment",
    description: "Preparing the application for production",
    icon: Cloud,
    technologies: ["Docker", "Cloud Deployment", "CI/CD"],
    color: "from-sky-400 to-indigo-500",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-[#080B14] px-6 py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            Built With Modern Technology
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            The technology behind{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Toggle Wars
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400">
            A modern technology stack designed to make feature management
            reliable, scalable and developer-friendly.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.045]"
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${group.color} bg-opacity-10`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-400">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition-colors group-hover:border-white/[0.12]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Architecture and deployment technologies are planned components;
          update this section as implementation progresses.
        </p>
      </div>
    </section>
  );
}
