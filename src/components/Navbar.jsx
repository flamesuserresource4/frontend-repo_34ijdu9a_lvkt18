import { useState } from 'react';
import { Shield, Menu, X, Users, Globe } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Join', href: '#join' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-700/20 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            <Shield size={20} />
          </span>
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Lampung Cyber Security</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-0"
          >
            <Users size={18} /> Join
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-300 ring-1 ring-inset ring-white/10 hover:bg-white/5 md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mb-3 rounded-lg border border-white/10 bg-neutral-900/90 p-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-400"
            >
              <Globe size={18} /> Join Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
