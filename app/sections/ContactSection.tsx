import AppIcon from "@/app/components/ui/AppIcon";
import { personal } from "@/app/data";

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    note: "Best for recruiters, founders, and hiring managers.",
  },
  {
    icon: "📱",
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    note: "Useful for quick screening calls and direct outreach.",
  },
  {
    icon: "skill-icons:linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/rajan-goyal",
    href: personal.linkedin,
    note: "Good for professional outreach and network-based introductions.",
  },
  {
    icon: "skill-icons:github-dark",
    label: "GitHub",
    value: "github.com/Rajan14-11",
    href: personal.github,
    note: "Best for reviewing project quality, code habits, and technical range.",
  },
];

export default function ContactSection() {
  return (
    <div className="section-container">
      <div className="fade-up-1 mb-10 max-w-[840px]">
        <div className="eyebrow">Get in touch</div>
        <h1 className="section-title">
          Let&apos;s <span>Connect</span>
        </h1>
        <p className="text-text-secondary mt-3 text-[0.98rem] max-w-[760px] leading-[1.82]">
          If you&apos;re hiring for full-stack, MERN, React, or Python/Django work, feel free to reach out.
          I&apos;m open to full-time roles where product ownership, engineering quality, and speed of execution all matter.
        </p>
        <div className="section-line" />
      </div>

      <div className="fade-up-2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 mb-8">
        {[
          { label: "Open to", value: "MERN, full-stack, React, and Python/Django roles" },
          { label: "Location", value: "Based in Gurgaon, open to relocate or work remotely" },
          { label: "Availability", value: "30 days notice period" },
          { label: "Response", value: "Usually within 24 hours by email" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-card border border-border-primary rounded-xl p-4 shadow-sm"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary font-semibold mb-1">
              {item.label}
            </div>
            <div className="text-text-secondary text-[0.84rem] leading-relaxed">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="fade-up-3">
          <div className="inline-flex items-center gap-2 text-xs text-text-secondary mb-4 py-1 px-3 rounded-full bg-surface-soft border border-border-primary font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>

          <div className="grid gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-4 bg-card border border-border-primary rounded-xl no-underline transition-all duration-200 hover:border-border-secondary hover:translate-x-0.5 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center text-base shrink-0 border border-border-primary">
                  <AppIcon icon={item.icon} size="1.25em" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-[0.92rem] font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                  <div className="text-[0.78rem] text-text-secondary leading-normal">
                    {item.note}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="fade-up-4 bg-card border border-border-primary rounded-2xl p-6 shadow-sm">
          <div className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary font-semibold mb-2">
            Opportunity Fit
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-3 tracking-tight">
            What I&apos;m looking for
          </h2>
          <p className="text-xs text-text-secondary mb-5 leading-relaxed">
            {personal.lookingFor}
          </p>

          <div className="bg-surface-soft border border-border-primary rounded-xl p-4 mb-4">
            <div className="text-[11px] font-mono text-text-tertiary font-semibold mb-2">
              Preferred roles
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {["Full-Stack Developer", "MERN Stack Developer", "React Developer", "Python / Django Developer"].map(
                (role) => (
                  <span
                    key={role}
                    className="text-[10px] font-mono py-0.5 px-2.5 rounded bg-surface-soft-2 text-text-secondary border border-border-primary font-medium"
                  >
                    {role}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-surface-soft border border-border-primary rounded-xl p-4 mb-5">
            <div className="text-[11px] font-mono text-text-tertiary font-semibold mb-2">
              Best reasons to reach out
            </div>
            <div className="space-y-2">
              {[
                "You are hiring for MERN, React, Python, Django, or general full-stack work.",
                "You want someone comfortable with product ownership, APIs, dashboards, and real-world feature delivery.",
                "You value engineers who can contribute across frontend, backend, and integrations.",
              ].map((point) => (
                <div key={point} className="flex gap-2 items-start text-text-secondary text-xs leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={`mailto:${personal.email}?subject=Opportunity%20for%20Rajan%20Goyal`}
            className="btn-primary w-full justify-center no-underline text-center"
          >
            Send me an email ↗
          </a>
          <p className="text-center text-[11px] font-mono text-text-tertiary mt-3">
            Usually responds within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
