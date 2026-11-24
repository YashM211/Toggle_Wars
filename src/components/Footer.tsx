import { GitBranch, Zap, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Live Demo", href: "#demo" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Architecture", href: "#architecture" },
  { label: "Tech Stack", href: "#tech-stack" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060810] px-5 pt-12 sm:px-8 sm:pt-14 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16 lg:pb-12">
          {/* Brand section */}
          <div className="max-w-sm">
            <a
              href="#"
              aria-label="Toggle Wars - Back to top"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
                <Zap className="h-5 w-5 text-white" />
              </div>

              <span className="text-xl font-bold tracking-tight text-white">
                Toggle<span className="text-blue-400">Wars</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Smarter feature management. Safer releases. Complete control over
              how your features reach users.
            </p>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Explore</h3>

            <div className="flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors duration-200 hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Project links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Project</h3>

            <a
              href="https://github.com/YashM211/Toggle_Wars"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center gap-2 text-sm text-gray-500 transition-colors duration-200 hover:text-cyan-400"
            >
              <GitBranch className="h-4 w-4 shrink-0" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="h-3 w-3 shrink-0" />
            </a>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Built for Toggle Wars Hackathon
            </p>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="flex flex-col justify-between gap-3 border-t border-white/[0.08] py-6 text-center text-xs text-gray-600 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Toggle Wars. All rights reserved.</p>

          <p>Built with passion and modern technology.</p>
        </div>
      </div>
    </footer>
  );
}
