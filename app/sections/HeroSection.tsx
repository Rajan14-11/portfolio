import Link from "next/link";
import { heroProofPoints, heroStrengths, heroTags, personal } from "@/app/data";

export default function HeroSection() {
  return (
    <section className="hero-section relative flex flex-col justify-center min-h-[calc(100vh-64px)] max-w-[1100px] mx-auto px-4 md:px-8 pb-10 pt-[calc(64px+2rem)]">
      <div className="hero-layout relative z-10 grid gap-10 items-center grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
        <div>
          {/* Status Indicator */}
          <div className="fade-up-1 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary bg-surface-soft text-xs text-text-secondary mb-5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] text-text-primary font-medium tracking-wide">
              Available for Full-Stack Roles
            </span>
            <span className="text-border-secondary">|</span>
            <span className="text-text-tertiary text-[11px] font-mono">Gurgaon / Remote</span>
          </div>

          {/* Heading */}
          <h1 className="fade-up-2 text-[clamp(2.75rem,6.8vw,4.5rem)] font-[750] leading-[1.02] tracking-[-0.05em] text-text-primary mb-3">
            Rajan Goyal
          </h1>

          <p className="fade-up-3 text-[clamp(1.05rem,2.2vw,1.25rem)] text-text-secondary font-medium mb-4 tracking-[-0.02em]">
            {personal.role} <span className="text-text-tertiary mx-1">·</span>{" "}
            <span className="text-text-primary font-semibold">{personal.tagline}</span>
          </p>

          <p className="fade-up-4 text-[0.95rem] text-text-secondary max-w-[620px] leading-[1.8] mb-5">
            2+ years building and optimizing production systems for a{" "}
            <span className="text-text-primary font-semibold">30,000 MAU edtech platform</span>.
            Deep experience across <span className="text-text-primary font-semibold">React + Django architectures</span>{" "}
            and hands-on <span className="text-text-primary font-semibold">MERN stack</span>{" "}
            engineering for real-time features, dashboards, and scalable APIs.
          </p>

          {/* Skill / Capability Chips */}
          <div className="fade-up-4 flex gap-1.5 flex-wrap mb-6">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="text-[0.75rem] font-mono py-1 px-2.5 rounded-md bg-surface-soft border border-border-primary text-text-secondary hover:text-text-primary hover:border-border-secondary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Proof Strip (Metrics) */}
          <div className="fade-up-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-7 max-w-[640px]">
            {heroProofPoints.map((point) => (
              <div
                key={point}
                className="p-3 rounded-lg border border-border-primary bg-surface-soft/60 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-text-secondary text-[0.78rem] font-medium leading-snug">
                    {point}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="fade-up-6 flex gap-3 flex-wrap items-center">
            <Link href="/projects" className="btn-primary group">
              <span>View Selected Work</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
            <a
              href={personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* Aside Engineering Bento */}
        <div className="fade-up-5 bg-card border border-border-primary rounded-2xl p-6 relative overflow-hidden shadow-[0_12px_36px_-16px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-primary">
            <span className="text-[10px] uppercase tracking-widest font-mono text-primary font-semibold">
              Engineering Profile
            </span>
            <span className="text-[10px] font-mono text-text-tertiary">2+ YRS EXP</span>
          </div>

          <div className="text-[1.05rem] font-semibold text-text-primary leading-[1.35] tracking-[-0.02em] mb-4">
            Production depth with focus on real metrics, performance, and clean maintainability.
          </div>

          <div className="space-y-3 mb-5">
            {heroStrengths.map((item) => (
              <div key={item} className="flex gap-2.5 items-start text-[0.82rem] text-text-secondary leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0 text-xs font-mono">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-border-primary flex gap-1.5 flex-wrap">
            {["React / Next.js", "Python / Django", "MERN Stack", "Real-Time / ASGI"].map((item) => (
              <span
                key={item}
                className="text-[10px] font-mono py-0.5 px-2 rounded bg-surface-soft-2 text-text-secondary border border-border-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
