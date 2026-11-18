import AppIcon from "@/app/components/ui/AppIcon";
import { personal, heroTags } from "@/app/data";

export default function AboutSidebar() {
  return (
    <div className="fade-up-2 bg-card border border-border-primary rounded-2xl p-6 max-md:!static sticky top-[80px] shadow-sm">
      <div className="inline-flex items-center gap-2 mb-4 py-1 px-2.5 rounded-full bg-surface-soft border border-border-primary text-text-secondary text-[11px] font-mono">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Open to full-stack roles</span>
      </div>

      {/* Avatar */}
      <div className="w-16 h-16 rounded-2xl bg-surface-soft-3 border border-border-secondary flex items-center justify-center text-xl font-bold font-mono text-text-primary mb-4">
        RG
      </div>

      <h2 className="font-bold text-lg text-text-primary mb-0.5">
        {personal.name}
      </h2>
      <div className="text-xs text-text-secondary mb-1 font-medium">
        {personal.role}
      </div>
      <div className="text-xs text-text-tertiary mb-4">
        {personal.tagline}
      </div>

      <div className="space-y-2 mb-5">
        {[
          { icon: "twemoji:round-pushpin", text: `${personal.location} · ${personal.locationNote}` },
          { icon: "twemoji:office-building", text: "Freadom Edu · Stones2Milestones" },
          { icon: "twemoji:mobile-phone", text: personal.phone },
          { icon: "twemoji:envelope", text: personal.email },
        ].map((row) => (
          <div
            key={row.text}
            className="flex items-start gap-2 text-xs text-text-secondary"
          >
            <span className="shrink-0 mt-0.5">
              <AppIcon icon={row.icon} size="1.1em" />
            </span>
            <span className="leading-snug">{row.text}</span>
          </div>
        ))}
      </div>

      <hr className="border-none border-t border-border-primary my-4" />

      <div className="mb-4">
        <div className="text-[10px] uppercase font-mono tracking-wider text-text-tertiary font-semibold mb-2">
          Core Focus
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {heroTags.map((tag) => (
            <span
              key={tag}
              className="py-0.5 px-2 rounded text-[10px] font-mono border border-border-primary text-text-secondary bg-surface-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap pt-2 border-t border-border-primary">
        {[
          { label: "Resume", href: personal.resumeLink, icon: "twemoji:page-facing-up" },
          { label: "LinkedIn", href: personal.linkedin, icon: "skill-icons:linkedin" },
          { label: "GitHub", href: personal.github, icon: "skill-icons:github-dark" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-soft text-text-primary py-1 px-2.5 rounded-lg text-xs font-medium border border-border-primary no-underline inline-flex items-center gap-1.5 transition-colors hover:bg-surface-soft-2 hover:border-border-secondary"
          >
            <AppIcon icon={link.icon} size="1.05em" />
            <span>{link.label}</span>
            <span className="text-[10px] text-text-tertiary leading-none">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
