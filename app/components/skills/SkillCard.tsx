import AppIcon from "@/app/components/ui/AppIcon";

const skillMeta: Record<string, { blurb: string; focus: string }> = {
  "MERN Stack": {
    blurb:
      "Hands-on full-stack builds across e-commerce, dashboards, auth, and CRUD-heavy product flows.",
    focus: "MERN & full-stack product roles",
  },
  "Python & Django": {
    blurb:
      "Strongest production backend depth today, shaped by live API work, automation, async tasks, and real-time systems on a 30k MAU platform.",
    focus: "Production backend & async systems",
  },
  "Frontend & UI": {
    blurb:
      "Speed, maintainability, and product polish across React ecosystems, design systems, and content-heavy interfaces.",
    focus: "High-craft frontend delivery",
  },
  "Infra & Integrations": {
    blurb:
      "Tools and integrations for deployments, telemetry, payments, AI, and resilient system communications.",
    focus: "Scalable support infrastructure",
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
      className="hover-lift fade-up bg-card border border-border-primary rounded-2xl p-6 min-h-full flex flex-col justify-between shadow-sm"
      style={{ animationDelay: `${0.06 + index * 0.05}s` }}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-surface-soft flex items-center justify-center border border-border-primary shrink-0">
            <AppIcon icon={cat.icon} size="1.25em" />
          </div>
          <div>
            <h3 className="font-semibold text-base text-text-primary tracking-tight">
              {cat.title}
            </h3>
            <div className="text-[11px] font-mono text-text-tertiary mt-0.5">
              {meta.focus}
            </div>
          </div>
        </div>

        <p className="text-text-secondary text-[0.85rem] leading-relaxed mb-4">
          {meta.blurb}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-primary">
        {cat.items.map((item) => (
          <span
            key={item.label}
            className={`text-[10px] font-mono py-0.5 px-2 rounded border transition-colors cursor-default ${
              item.primary
                ? "border-border-secondary bg-surface-soft-3 text-text-primary font-medium"
                : "border-border-primary bg-surface-soft text-text-secondary hover:text-text-primary hover:border-border-secondary"
            }`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
