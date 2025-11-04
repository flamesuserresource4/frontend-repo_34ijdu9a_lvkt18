import { Shield, Users, Server, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-neutral-950 py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About the Community</h2>
          <p className="mt-4 text-neutral-300">
            Lampung Cyber Security is a collaborative hub for learners, professionals, and researchers passionate about
            cybersecurity. We focus on knowledge-sharing, hands-on labs, and real-world projects that elevate regional
            cyber resilience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-emerald-400" />}
            title="Defense & Offense"
            desc="Red team/blue team drills, threat modeling, and secure architecture practices."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6 text-emerald-400" />}
            title="Open Community"
            desc="Inclusive meetups and study groups from beginner to expert levels."
          />
          <FeatureCard
            icon={<Server className="h-6 w-6 text-emerald-400" />}
            title="Hands-on Labs"
            desc="CTFs, homelabs, and cloud security scenarios with guided walkthroughs."
          />
          <FeatureCard
            icon={<GraduationCap className="h-6 w-6 text-emerald-400" />}
            title="Career Growth"
            desc="Mentorship, certifications guidance, and portfolio-building projects."
          />
        </div>

        <div id="join" className="mt-14 flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent p-8 text-center">
          <h3 className="text-2xl font-semibold">Ready to contribute and learn together?</h3>
          <p className="max-w-2xl text-neutral-300">
            Join our community channels to connect, collaborate, and stay updated on events, workshops, and
            responsible disclosure programs around Lampung.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-400"
            >
              Join via Discord
            </a>
            <a
              href="#"
              className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Follow on X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-neutral-900/50 p-5 transition hover:border-emerald-500/30 hover:bg-neutral-900">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-inset ring-emerald-500/20">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}
