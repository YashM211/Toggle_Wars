import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#080B14] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.06] to-transparent" />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#111B35] via-[#10172B] to-[#0B1020] px-5 py-12 text-center sm:rounded-3xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-[80px] sm:-right-20 sm:-top-20 sm:h-64 sm:w-64 sm:blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-[80px] sm:-bottom-20 sm:-left-20 sm:h-64 sm:w-64 sm:blur-[100px]" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 sm:mb-7 sm:h-14 sm:w-14 sm:rounded-2xl">
              <Zap className="h-6 w-6 text-cyan-400 sm:h-7 sm:w-7" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Ship faster.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stay in control.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base">
              Take control of your releases with smarter feature flags.
              Experiment, roll out gradually and ship with confidence.
            </p>

            {/* Action buttons */}
            <div className="mx-auto mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:gap-4">
              <a
                href="#demo"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25 sm:w-auto sm:px-7"
              >
                Try Interactive Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/YashM211/Toggle_Wars"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto sm:px-7"
              >
                <GitBranch className="h-4 w-4" />
                Explore on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
