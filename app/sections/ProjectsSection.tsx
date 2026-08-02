import AppIcon from "@/app/components/ui/AppIcon";
import { projects, ProjectType } from "@/app/data";
import ProjectCard from "@/app/components/projects/ProjectCard";

const leftFeaturedTitles = [
  "Vulnbounty — Bug Bounty Platform",
  "ISRT — Infosec Reporting Tools",
];

const rightFeaturedTitles = [
  "Tailor App User — Order Management",
  "Flipkart Clone — Full-Stack E-Commerce",
  "Seclance — Cybersecurity Agency SPA",
];

const allFeaturedTitles = [...leftFeaturedTitles, ...rightFeaturedTitles];

export default function ProjectsSection() {
  const leftProjects = leftFeaturedTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter((project): project is ProjectType => Boolean(project));

  const rightProjects = rightFeaturedTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter((project): project is ProjectType => Boolean(project));

  const remainingProjects = projects.filter(
    (project) => !allFeaturedTitles.includes(project.title)
  );

  return (
    <div className="section-container">
      <div className="fade-up-1 mb-10 max-w-[820px]">
        <div className="eyebrow">What I&apos;ve built</div>
        <h1 className="section-title">
          Projects & <span>Work</span>
        </h1>
        <p className="text-text-secondary mt-3 text-[0.98rem] leading-[1.82]">
          A curated mix of client work, MERN-focused builds, dashboards, and frontend experiments.
          I&apos;ve moved the strongest fit for full-stack and product roles to the top so this page
          feels more like my real body of work and less like a generic archive.
        </p>
        <div className="section-line" />
      </div>

      <div className="fade-up-2 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4 mb-9">
        {[
          { label: "Selected projects", value: `${projects.length} curated builds` },
          { label: "Role fit", value: "MERN, dashboards, client apps, product UI" },
          { label: "What stands out", value: "Auth, APIs, payments, real product flows" },
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
        <div className="eyebrow">Featured Work</div>
        <div className="projects-featured-grid grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          <div className="grid gap-5">
            {leftProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                compact={false}
              />
            ))}
          </div>
          <div className="grid gap-5">
            {rightProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + 2}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="eyebrow">More Builds</div>
        <p className="text-text-tertiary mt-2 text-[0.9rem] leading-[1.7] max-w-[720px]">
          Additional client work, frontend builds, and product experiments that show range across
          interfaces, authentication, integrations, and interaction design.
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
