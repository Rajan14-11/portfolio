import AppIcon from "@/app/components/ui/AppIcon";
import { personal, heroTags } from "@/app/data";

export default function AboutSidebar() {
  return (
    <div className="fade-up-2 bg-card border border-border-primary rounded-[22px] p-8 max-md:!static sticky top-[80px] overflow-hidden shadow-[0_20px_50px_-36px_rgba(34,211,238,0.28)]">
      <div
        aria-hidden
        className="absolute -bottom-[10%] -right-[15%] w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,var(--primary-faint)_0%,transparent_72%)] blur-[8px]"
      />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 mb-[1.1rem] py-[0.35rem] px-[0.7rem] rounded-full bg-primary-faint border border-primary-border text-primary text-[0.74rem] font-[650]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#4ADE80] shadow-[0_0_0_4px_rgba(74,222,128,0.12)]" />
          Open to full-stack opportunities
        </div>

        {/* Avatar */}
        <div className="w-[88px] h-[88px] rounded-[24px] bg-[linear-gradient(135deg,var(--primary),#3B82F6)] flex items-center justify-center text-[1.8rem] font-[780] text-[#0F172A] mb-5">
          RG
        </div>

        <div className="font-[720] text-[1.15rem] text-text-primary mb-[0.2rem]">
          {personal.name}
        </div>
        <div className="text-[0.84rem] text-primary mb-[0.35rem] font-[620]">
          {personal.role}
        </div>
        <div className="text-[0.8rem] text-text-tertiary mb-[1.3rem]">
          {personal.tagline}
        </div>

        {[
          { icon: "twemoji:round-pushpin", text: `${personal.location} · ${personal.locationNote}` },
          { icon: "twemoji:office-building", text: "Freadom Edu · Stones2Milestones" },
          { icon: "twemoji:mobile-phone", text: personal.phone },
          { icon: "twemoji:envelope", text: personal.email },
        ].map((row) => (
          <div
            key={row.text}
            className="flex items-start gap-[0.6rem] text-[0.82rem] text-text-secondary mb-[0.65rem]"
          >
            <span className="shrink-0 mt-[0.15rem]">
              <AppIcon icon={row.icon} size="1.15em" />
            </span>
            <span>{row.text}</span>
          </div>
        ))}

        <hr className="border-none border-t border-border-primary my-[1.25rem]" />

        <div className="mb-[1.1rem]">
          <div className="text-[0.72rem] tracking-[0.14em] uppercase text-primary font-bold mb-[0.65rem]">
            Core Focus
          </div>
          <div className="flex gap-[0.45rem] flex-wrap">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="py-[0.26rem] px-[0.7rem] rounded-full text-[0.74rem] border border-border-primary text-text-secondary bg-[rgba(100,116,139,0.08)] font-[520]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-[0.6rem] flex-wrap">
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
              className="bg-primary-faint text-primary py-[0.38rem] px-[0.8rem] rounded-lg text-[0.78rem] font-[600] border border-primary-border no-underline inline-flex items-center gap-[0.4rem] transition-colors duration-200 hover:bg-primary hover:text-[#0F172A]"
            >
              <AppIcon icon={link.icon} size="1.1em" />
              <span>{link.label}</span>
              <span className="text-[0.82rem] leading-none">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
