import { useState } from "react";
import { Menu, X, GitBranch, Zap, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Architecture", href: "#architecture" },
];

const GITHUB_URL = "https://github.com/YashM211/Toggle_Wars";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#080B14]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-5 sm:h-[76px] sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          aria-label="ToggleWars home"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 sm:h-10 sm:w-10">
            <Zap className="h-5 w-5 text-violet-400" />
          </div>

          <div className="flex min-w-0 flex-col">
            <span className="text-base font-bold tracking-tight text-white sm:text-lg">
              Toggle<span className="text-violet-400">Wars</span>
            </span>
            <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500 min-[380px]:block sm:tracking-[0.25em]">
              Feature Control Platform
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:gap-3 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white lg:px-4"
          >
            <GitBranch size={17} />
            GitHub
            <ArrowUpRight size={13} className="text-slate-500" />
          </a>

          <a
            href="#demo"
            className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500 lg:px-5"
          >
            Explore Platform
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/[0.05] md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/[0.06] bg-[#080B14] transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="text-sm text-slate-300 transition-colors hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}

          <div className="h-px bg-white/[0.07]" />

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
          >
            <GitBranch size={17} />
            GitHub Repository
            <ArrowUpRight size={13} className="text-slate-500" />
          </a>

          <a
            href="#demo"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="rounded-lg bg-violet-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
          >
            Explore Platform
          </a>
        </div>
      </div>
    </header>
  );
}
