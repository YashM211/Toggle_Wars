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
      className="relative overflow-hidden bg-[#080B14] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[110px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-300 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            Built With Modern Technology
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The technology behind{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Toggle Wars
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            A modern technology stack designed to make feature management
            reliable, scalable and developer-friendly.
          </p>
        </motion.div>

        {/* Technology cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
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
                className="group flex min-w-0 flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.045] sm:p-7"
              >
                {/* Icon */}
                <div
                  className={`mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${group.color} sm:mb-6 sm:h-12 sm:w-12`}
                >
                  <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-0 flex-1 text-sm leading-6 text-gray-400 sm:min-h-12">
                  {group.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full break-words rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-2 text-[11px] font-medium text-gray-300 transition-colors group-hover:border-white/[0.12] sm:px-3 sm:text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Implementation note */}
        <p className="mx-auto mt-7 max-w-2xl text-center text-[10px] leading-5 text-gray-500 sm:mt-8 sm:text-xs">
          Architecture and deployment technologies are planned components;
          update this section as implementation progresses.
        </p>
      </div>
    </section>
  );
}
