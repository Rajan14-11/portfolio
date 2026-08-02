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
      <div className="fade-up-1 mb-[2.6rem] max-w-[840px]">
        <div className="eyebrow">Let&apos;s connect</div>
        <h1 className="section-title">
          Get in <span>Touch</span>
        </h1>
        <p className="text-text-secondary mt-[0.85rem] text-[0.98rem] max-w-[760px] leading-[1.82]">
          If you&apos;re hiring for full-stack, MERN, React, or Python/Django work, this should be
          the easiest page on the site to act on. I&apos;m open to full-time roles where product
          ownership, engineering quality, and speed of execution all matter.
        </p>
        <div className="section-line" />
      </div>

      <div className="fade-up-2 contact-summary-grid grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[0.9rem] mb-8">
        {[
          { label: "Open to", value: "MERN, full-stack, React, and Python/Django roles" },
          { label: "Location", value: "Based in Gurgaon, open to relocate anywhere in India or work remotely" },
          { label: "Availability", value: "30 days notice period" },
          { label: "Response", value: "Usually within 24 hours by email" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-surface-soft border border-border-primary rounded-[18px] py-4 px-[1.05rem]"
          >
            <div className="text-[0.72rem] tracking-[0.12em] uppercase text-primary font-bold mb-[0.35rem]">
              {item.label}
            </div>
            <div className="text-text-secondary text-[0.87rem] leading-[1.68]">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="fade-up-3">
          <div className="inline-flex items-center gap-[0.6rem] text-[0.85rem] text-[#4ADE80] font-[620] mb-[1.25rem] py-[0.38rem] px-[0.8rem] rounded-full bg-[rgba(74,222,128,0.08)] border border-[rgba(74,222,128,0.16)]">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] inline-block animate-pulse" />
            Available for new opportunities
          </div>

          <div className="grid gap-[0.9rem]">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-[1.15rem_1.2rem] bg-surface-panel border border-border-primary rounded-[18px] no-underline transition-all duration-200 hover:border-primary-border hover:translate-x-1 group"
              >
                <div className="w-[46px] h-[46px] rounded-[12px] bg-primary-faint flex items-center justify-center text-[1.1rem] shrink-0 border border-primary-border">
                  <AppIcon icon={item.icon} size="1.35em" />
                </div>
                <div>
                  <div className="text-[0.72rem] text-text-tertiary uppercase tracking-[0.08em] mb-[0.15rem]">
                    {item.label}
                  </div>
                  <div className="text-[0.94rem] font-[620] text-text-primary mb-[0.3rem]">
                    {item.value}
                  </div>
                  <div className="text-[0.8rem] text-text-tertiary leading-[1.6]">
                    {item.note}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="fade-up-4 bg-surface-panel-alt border border-border-primary rounded-[22px] p-[1.75rem]">
          <div className="text-[0.72rem] tracking-[0.14em] uppercase text-primary font-bold mb-[0.55rem]">
            Opportunity Fit
          </div>
          <h2 className="text-[1.25rem] font-bold text-text-primary mb-[0.8rem] tracking-[-0.02em]">
            What I&apos;m looking for
          </h2>
          <p className="text-[0.89rem] text-text-secondary mb-[1.25rem] leading-[1.8]">
            {personal.lookingFor}
          </p>

          <div className="bg-surface-soft-2 border border-primary-border rounded-[16px] p-4 mb-4">
            <div className="text-[0.78rem] text-primary font-[650] mb-[0.5rem]">
              Preferred roles
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Full-Stack Developer", "MERN Stack Developer", "React Developer", "Python / Django Developer"].map(
                (role) => (
                  <span
                    key={role}
                    className="text-[0.75rem] py-[0.24rem] px-[0.7rem] rounded-full bg-primary-faint text-primary border border-primary-border font-[600]"
                  >
                    {role}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-surface-soft border border-border-primary rounded-[16px] p-4 mb-[1.4rem]">
            <div className="text-[0.78rem] text-primary font-[650] mb-[0.55rem]">
              Best reasons to reach out
            </div>
            <div className="grid gap-[0.65rem]">
              {[
                "You are hiring for MERN, React, Python, Django, or general full-stack work.",
                "You want someone comfortable with product ownership, APIs, dashboards, and real-world feature delivery.",
                "You value engineers who can contribute across frontend, backend, and integrations instead of staying in one narrow lane.",
              ].map((point) => (
                <div key={point} className="flex gap-[0.65rem] items-start text-text-secondary text-[0.84rem] leading-[1.68]">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_var(--primary-faint)] mt-[0.36rem] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={`mailto:${personal.email}?subject=Opportunity%20for%20Rajan%20Goyal`}
            className="btn-primary w-full justify-center no-underline"
          >
            Send me an email ↗
          </a>
          <p className="text-center text-[0.76rem] text-text-tertiary mt-[0.8rem]">
            Usually responds within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
