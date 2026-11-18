import ScrollReveal from "@/app/components/ui/ScrollReveal";

type ExperienceItem = {
  short: string;
  date: string;
  title: string;
  company: string;
  desc: string;
  highlights: string[];
};

export default function ExperienceCard({
  item,
  index,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="flex gap-4 mb-8 relative">
        {/* Connector line */}
        {!isLast && (
          <div className="absolute left-[17px] top-[38px] -bottom-[20px] w-[1px] bg-border-primary" />
        )}
        {/* Dot */}
        <div className="w-9 h-9 rounded-full bg-surface-soft border border-border-secondary flex items-center justify-center shrink-0 text-[10px] font-mono font-semibold text-text-primary">
          {item.short}
        </div>
        <div className="flex-1 bg-card border border-border-primary rounded-xl p-5 shadow-sm">
          <div className="text-[11px] font-mono text-text-tertiary mb-1">
            {item.date}
          </div>
          <h3 className="font-semibold text-text-primary text-base mb-0.5">
            {item.title}
          </h3>
          <div className="text-xs text-text-tertiary mb-3 font-medium">
            {item.company}
          </div>
          <p className="text-xs text-text-secondary leading-relaxed mb-4">
            {item.desc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2">
            {item.highlights.map((point) => (
              <div
                key={point}
                className="flex gap-2.5 items-start bg-surface-soft border border-border-primary rounded-lg p-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span className="text-[11px] text-text-secondary leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
