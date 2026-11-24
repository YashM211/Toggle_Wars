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
    <footer className="border-t border-white/[0.08] bg-[#060810] px-6 pt-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 pb-12 md:flex-row">
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Toggle<span className="text-blue-400">Wars</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Smarter feature management. Safer releases. Complete control over
              how your features reach users.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Explore</h3>

            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-gray-500 transition-colors hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">Project</h3>

            <a
              href="https://GitBranch.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-cyan-400"
            >
              <GitBranch className="h-4 w-4" />
              GitBranch Repository
              <ArrowUpRight className="h-3 w-3" />
            </a>

            <p className="mt-4 text-sm text-gray-500">
              Built for Toggle Wars Hackathon
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/[0.08] py-6 text-xs text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Toggle Wars. All rights reserved.</p>
          <p>Built with passion and modern technology.</p>
        </div>
      </div>
    </footer>
  );
}
