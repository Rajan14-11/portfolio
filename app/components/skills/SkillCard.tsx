import AppIcon from "@/app/components/ui/AppIcon";

const skillMeta: Record<string, { blurb: string; focus: string }> = {
  "MERN Stack": {
    blurb:
      "The stack I want to be hired for more often, backed by hands-on full-stack builds across e-commerce, dashboards, auth, and CRUD-heavy product flows.",
    focus: "Best fit for MERN and full-stack product roles",
  },
  "Python & Django": {
    blurb:
      "My strongest production backend depth today, shaped by live API work, automation, async tasks, and real-time systems on a 30k MAU platform.",
    focus: "Strongest production backend experience",
  },
  "Frontend & UI": {
    blurb:
      "Where I focus on speed, maintainability, and product polish across React ecosystems, design systems, and content-heavy interfaces.",
    focus: "Production frontend delivery and polish",
  },
  "Infra & Integrations": {
    blurb:
      "The tools and integrations I lean on when projects need deployment, analytics, payments, AI, or communication between systems.",
    focus: "Support systems that make products usable at scale",
  },
};

type SkillCategory = {
  title: string;
  icon: string;
  items: { label: string; primary?: boolean }[];
};

export default function SkillCard({
  cat,
  index,
}: {
  cat: SkillCategory;
  index: number;
}) {
  const meta = skillMeta[cat.title];

  return (
    <div
      className="hover-lift fade-up bg-surface-panel border border-border-primary rounded-[20px] p-[1.45rem] min-h-full"
      style={{ animationDelay: `${0.08 + index * 0.06}s` }}
    >
      <div className="flex items-center gap-3 mb-[0.95rem]">
        <div className="w-11 h-11 rounded-xl bg-primary-faint flex items-center justify-center border border-primary-border shrink-0">
          <AppIcon icon={cat.icon} size="1.35em" />
        </div>
        <div>
          <div className="font-bold text-base text-text-primary tracking-[-0.02em]">
            {cat.title}
          </div>
          <div className="text-[0.76rem] text-primary mt-[0.18rem] font-[620]">
            {meta.focus}
          </div>
        </div>
      </div>

      <p className="text-text-secondary text-[0.84rem] leading-[1.72] mb-4">
        {meta.blurb}
      </p>

      <div className="flex flex-wrap gap-2">
        {cat.items.map((item) => (
          <span
            key={item.label}
            className={`skill-pill-hover text-[0.78rem] py-[0.32rem] px-[0.72rem] rounded-[20px] border transition-all duration-200 cursor-default inline-block ${
              item.primary
                ? "border-primary-border bg-primary-faint text-primary font-[620]"
                : "border-border-primary bg-[rgba(100,116,139,0.07)] text-text-secondary font-[470]"
            }`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
