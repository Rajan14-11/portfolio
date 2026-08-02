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
    <ScrollReveal delay={index * 100}>
      <div className="flex gap-[1.35rem] mb-[2.1rem] relative">
        {/* Connector line */}
        {!isLast && (
          <div className="absolute left-[19px] top-[42px] -bottom-[20px] w-[1px] bg-border-primary" />
        )}
        {/* Dot */}
        <div className="w-[40px] h-[40px] rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(59,130,246,0.16))] border-2 border-primary flex items-center justify-center shrink-0 text-[0.65rem] font-bold text-primary">
          {item.short}
        </div>
        <div className="flex-1 bg-surface-soft border border-[rgba(51,65,85,0.52)] rounded-[20px] pt-[1.15rem] px-[1.2rem] pb-[1.2rem]">
          <div className="text-[0.75rem] text-primary font-[600] mb-[0.2rem] tracking-[0.05em]">
            {item.date}
          </div>
          <div className="font-[710] text-text-primary mb-[0.15rem] text-[1.06rem]">
            {item.title}
          </div>
          <div className="text-[0.82rem] text-text-tertiary mb-[0.5rem]">
            {item.company}
          </div>
          <div className="text-[0.83rem] text-text-secondary leading-[1.7]">
            {item.desc}
          </div>
          <div className="experience-highlights grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[0.7rem] mt-4">
            {item.highlights.map((point) => (
              <div
                key={point}
                className="flex gap-[0.75rem] items-start bg-surface-soft-3 border border-border-primary rounded-[12px] py-[0.8rem] px-[0.95rem]"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-[0.45rem] shrink-0 shadow-[0_0_0_4px_var(--primary-faint)]" />
                <span className="text-[0.81rem] text-text-secondary leading-[1.72]">
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
