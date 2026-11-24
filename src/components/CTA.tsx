import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#080B14] px-6 py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#111B35] via-[#10172B] to-[#0B1020] px-8 py-16 text-center sm:px-16"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10">
              <Zap className="h-7 w-7 text-cyan-400" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ship faster.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Stay in control.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400">
              Take control of your releases with smarter feature flags.
              Experiment, roll out gradually and ship with confidence.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Try Interactive Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://GitBranch.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-gray-200 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
              >
                <GitBranch className="h-4 w-4" />
                Explore on GitBranch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
