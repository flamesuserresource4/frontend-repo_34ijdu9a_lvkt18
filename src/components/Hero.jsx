import Spline from '@splinetool/react-spline';
import { ArrowRight, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[88vh] overflow-hidden bg-neutral-950 pt-24 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial glow overlays - do not block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-neutral-900/60 px-3 py-1 text-xs text-emerald-300">
          <Lock size={14} /> Cybersecurity Community • Lampung
        </div>
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Lampung Cyber Security
        </h1>
        <p className="mt-4 max-w-2xl text-center text-base text-neutral-300 sm:text-lg">
          Building a safer digital future in Sumatra. We learn, research, and collaborate on offensive and defensive
          security, responsible disclosure, and cyber resilience.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            Join the Community <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
