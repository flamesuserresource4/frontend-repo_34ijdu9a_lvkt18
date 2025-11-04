import { Shield, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10 text-sm text-neutral-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            <Shield size={18} />
          </span>
          <span className="font-semibold text-white">Lampung Cyber Security</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 hover:text-white">
            <Globe size={16} /> Website
          </a>
          <a href="mailto:contact@lcs.id" className="inline-flex items-center gap-2 hover:text-white">
            <Mail size={16} /> contact@lcs.id
          </a>
        </div>
        <p className="text-center sm:text-right">© {new Date().getFullYear()} Lampung Cyber Security. All rights reserved.</p>
      </div>
    </footer>
  );
}
