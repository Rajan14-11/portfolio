import { education, experience, heroProofPoints, heroStrengths, personal } from "@/app/data";
import ExperienceCard from "@/app/components/about/ExperienceCard";
import AboutSidebar from "@/app/components/about/AboutSidebar";

export default function AboutSection() {
  return (
    <div className="section-container">
      {/* Header */}
      <div className="fade-up-1 mb-12 max-w-[760px]">
        <div className="eyebrow">Who I am</div>
        <h1 className="section-title">
          About <span>Me</span>
        </h1>
        <p className="mt-4 text-text-secondary text-[0.98rem] leading-[1.82]">
          Product-minded full-stack developer with 2+ years of experience across MERN, Python,
          and Django. I enjoy building systems that are technically solid, measurable in impact,
          and straightforward for teams to ship and maintain.
        </p>
        <div className="section-line" />
      </div>

      {/* Grid */}
      <div className="about-grid grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 items-start">
        {/* Sidebar card */}
        <AboutSidebar />

        {/* Main content */}
        <div className="fade-up-3">
          <div className="about-intro-grid grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] gap-5 items-stretch mb-8">
            <div className="bg-surface-panel-soft border border-border-primary rounded-[22px] py-[1.45rem] px-6">
              <div className="text-[0.72rem] tracking-[0.14em] uppercase text-primary font-bold mb-[0.8rem]">
                Snapshot
              </div>
              {personal.bio.map((para, i) => (
                <p
                  key={i}
                  className={`text-text-secondary leading-[1.82] text-[0.95rem] ${i === personal.bio.length - 1 ? 'mb-0' : 'mb-4'}`}
                  dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/Freadom Edu/g, "<strong class='text-text-primary'>Freadom Edu</strong>")
                      .replace(/30,000 MAU/g, "<strong class='text-text-primary'>30,000 MAU</strong>")
                      .replace(/MERN/g, "<strong class='text-text-primary'>MERN</strong>")
                      .replace(/product startups/g, "<strong class='text-text-primary'>product startups</strong>"),
                  }}
                />
              ))}
            </div>

            <div className="grid gap-4">
              <div className="bg-card border border-border-primary rounded-[18px] py-[1.2rem] px-[1.15rem]">
                <div className="text-[0.72rem] tracking-[0.14em] uppercase text-primary font-bold mb-[0.75rem]">
                  Proof
                </div>
                <div className="grid gap-[0.55rem]">
                  {heroProofPoints.map((point) => (
                    <div
                      key={point}
                      className="flex gap-[0.6rem] items-center text-text-secondary text-[0.82rem] leading-[1.5] font-[520]"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_var(--primary-faint)] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border-primary rounded-[18px] py-[1.2rem] px-[1.15rem]">
                <div className="text-[0.72rem] tracking-[0.14em] uppercase text-primary font-bold mb-[0.75rem]">
                  What I Bring
                </div>
                <div className="grid gap-[0.7rem]">
                  {heroStrengths.map((item) => (
                    <div
                      key={item}
                      className="text-text-secondary text-[0.82rem] leading-[1.65] pb-[0.7rem] border-b border-[rgba(51,65,85,0.45)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience timeline */}
          <div className="mt-10">
            <div className="eyebrow">Experience</div>
            <p className="mt-[0.55rem] text-text-tertiary text-[0.9rem] leading-[1.7] max-w-[720px]">
              A quick view of the roles, product context, and outcomes I have owned so far.
            </p>
            <div className="mt-5">
              {experience.map((item, i) => (
                <ExperienceCard key={i} item={item} index={i} isLast={i === experience.length - 1} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-10">
            <div className="eyebrow">Education</div>
            <div className="bg-card border border-border-primary rounded-[18px] py-[1.35rem] px-6 mt-4">
              <div className="text-[0.82rem] text-primary font-[600] mb-[0.2rem]">
                {education.year}
              </div>
              <div className="font-bold text-text-primary mb-[0.1rem]">
                {education.degree} · CGPA {education.cgpa}
              </div>
              <div className="text-[0.83rem] text-text-tertiary">{education.institution}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
