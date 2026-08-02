import AppIcon from "@/app/components/ui/AppIcon";
import { aiTools, skills } from "@/app/data";
import SkillCard from "@/app/components/skills/SkillCard";

export default function SkillsSection() {
  return (
    <div className="section-container">
      <div className="fade-up-1 mb-10 max-w-[820px]">
        <div className="eyebrow">Technical expertise</div>
        <h1 className="section-title">
          Skills & <span>Stack</span>
        </h1>
        <p className="text-text-secondary mt-3 text-[0.98rem] max-w-[760px] leading-[1.82]">
          This page should answer two questions quickly: what I am strongest in today, and where I
          fit best for full-stack roles. My production depth is strongest in React + Django systems,
          while my project work gives me real hands-on MERN coverage across auth, APIs, dashboards,
          and e-commerce flows.
        </p>
        <div className="section-line" />
      </div>

      <div className="fade-up-2 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4 mb-8">
        {[
          { label: "Best fit roles", value: "MERN, full-stack, frontend-heavy product teams" },
          { label: "Strongest production depth", value: "React, Django, Python, APIs, performance work" },
          { label: "What stands out", value: "Auth, real-time systems, dashboards, integrations, product UI" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-surface-soft border border-border-primary rounded-[18px] py-4 px-[1.05rem]"
          >
            <div className="text-[0.72rem] tracking-[0.12em] uppercase text-primary font-bold mb-1">
              {item.label}
            </div>
            <div className="text-text-secondary text-[0.87rem] leading-[1.68]">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-grid fade-up-3 grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {skills.map((cat, ci) => (
          <SkillCard key={cat.title} cat={cat} index={ci} />
        ))}
      </div>

      <div className="skills-footer-grid fade-up-6 grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-[1.1rem] items-stretch">
        <div className="bg-card border border-border-primary rounded-[20px] py-[1.4rem] px-6">
          <div className="text-[0.72rem] tracking-[0.12em] uppercase text-primary font-bold mb-[0.65rem]">
            How I Apply This Stack
          </div>
          <div className="grid gap-[0.7rem]">
            {[
              "Ship React and Django features in production with attention to performance and maintainability.",
              "Build MERN-style flows through projects that cover auth, CRUD, dashboards, and product UX.",
              "Use integrations, analytics, and AI tools to help products scale beyond just the frontend layer.",
            ].map((item) => (
              <div key={item} className="flex gap-[0.65rem] items-start text-text-secondary text-[0.84rem] leading-[1.7]">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_var(--primary-faint)] mt-[0.36rem] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-panel-alt border border-primary-border rounded-[20px] py-[1.45rem] px-[1.6rem] animate-[glowPulse_3s_ease-in-out_infinite]">
          <div className="flex items-center gap-[0.8rem] mb-[0.8rem]">
            <AppIcon icon="🛠️" size="1.4em" />
            <div>
              <div className="font-bold text-text-primary text-[0.98rem]">
                AI Developer Tools — Used Daily
              </div>
              <div className="text-[0.82rem] text-text-secondary mt-[0.18rem]">
                I use AI coding tools to move faster, validate ideas quickly, and keep delivery quality high.
              </div>
            </div>
          </div>
          <div className="flex gap-[0.55rem] flex-wrap">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="text-[0.78rem] py-[0.35rem] px-[0.85rem] rounded-[20px] bg-primary-faint text-primary border border-primary-border font-[600]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
