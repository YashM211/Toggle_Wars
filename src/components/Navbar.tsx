import { useState } from "react";
import { Menu, X, GitBranch, Zap } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Architecture", href: "#architecture" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.06] bg-[#080B14]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10">
            <Zap className="h-5 w-5 text-violet-400" />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white">
              Toggle<span className="text-violet-400">Wars</span>
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-slate-500">
              Feature Control Platform
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://GitBranch.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
          >
            <GitBranch size={17} />
            GitBranch
          </a>

          <a
            href="#demo"
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
          >
            Explore Platform
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[#080B14] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://GitBranch.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <GitBranch size={17} />
              GitBranch
            </a>

            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-violet-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Explore Platform
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
