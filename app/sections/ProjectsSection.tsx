import AppIcon from "@/app/components/ui/AppIcon";
import { projects, ProjectType } from "@/app/data";
import ProjectCard from "@/app/components/projects/ProjectCard";

const featuredTitles = [
  "Maritime Procurement Management System",
  "Tailor App User — Order Management",
  "Vulnbounty — Bug Bounty Platform",
  "Seclance — Cybersecurity Agency SPA",
];

export default function ProjectsSection() {
  const featuredProjects = featuredTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter((project): project is ProjectType => Boolean(project));

  const remainingProjects = projects.filter(
    (project) => !featuredTitles.includes(project.title)
  );

  return (
    <div className="section-container">
      <div className="fade-up-1 mb-10 max-w-[820px]">
        <div className="eyebrow">Technical Portfolio</div>
        <h1 className="section-title">
          Featured <span>Systems</span> & Builds
        </h1>
        <p className="text-text-secondary mt-3 text-[0.98rem] leading-[1.82]">
          A curated showcase of full-stack web applications, interactive portals, and distributed system architectures.
          Focused on robust role-based access control, secure payment pipelines, and high-performance UI delivery.
        </p>
        <div className="section-line" />
      </div>

      <div className="fade-up-2 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4 mb-9">
        {[
          { label: "Selected builds", value: `${projects.length} curated applications` },
          { label: "Core focus", value: "Full-stack systems, portals & interactive SPAs" },
          { label: "Technical depth", value: "RBAC, APIs, payments & transactional workflows" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-surface-soft border border-border-primary rounded-[18px] py-4 px-[1.05rem]"
          >
            <div className="text-[0.72rem] tracking-[0.12em] uppercase text-primary font-bold mb-1">
              {item.label}
            </div>
            <div className="text-text-secondary text-[0.87rem] leading-[1.65]">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <section className="mb-11">
        <div className="eyebrow">Featured Live Systems</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 items-stretch">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              compact={false}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="eyebrow">More Builds</div>
        <p className="text-text-tertiary mt-2 text-[0.9rem] leading-[1.7] max-w-[720px]">
          Additional full-stack applications, frontend architectures, and data visualization tools demonstrating end-to-end engineering range.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[1.1rem] mt-[1.2rem]">
          {remainingProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
