import AppIcon from "@/app/components/ui/AppIcon";
import { ProjectType } from "@/app/data";
import LinkButton from "@/app/components/ui/LinkButton";

function getProjectTone(project: ProjectType) {
  if (project.title.includes("ISRT")) {
    return "MERN Security Tooling";
  }
  if (project.title.includes("Vulnbounty")) {
    return "Production Bug Bounty App";
  }
  if (project.title.includes("Flipkart Clone")) {
    return "Best MERN showcase";
  }
  if (project.title.includes("Trello Clone")) {
    return "Modern app architecture";
  }
  if (project.title.includes("OpenInApp")) {
    return "Dashboard product build";
  }
  if (project.badge === "Production") {
    return project.badgeDetail ? `Shipped ${project.badgeDetail}` : "Shipped client work";
  }

  return "Personal build";
}

function getProjectHighlights(project: ProjectType) {
  if (project.title.includes("ISRT")) {
    return [
      "Automated security report generation engine supporting DOCX exports.",
      "Designed for security auditors and bug bounty hunters to log vulnerabilities and evidence.",
    ];
  }

  if (project.title.includes("Vulnbounty")) {
    return [
      "Integrated payment gateway workflows for managing bounty payouts and researcher accounts.",
      "Interactive target dashboard for tracking vulnerability reports and real-time statuses.",
    ];
  }

  if (project.title.includes("Flipkart Clone")) {
    return [
      "Separate user, admin, and backend surfaces.",
      "Authentication, CRUD flows, cart, and orders end to end.",
      "Strongest MERN-aligned project for full-stack roles.",
    ];
  }

  if (project.title.includes("Seclance")) {
    return [
      "Shipped as real client-facing production work.",
      "Focused on service positioning, trust, and conversion-oriented layout.",
      "Shows polished frontend delivery in an agency context.",
    ];
  }

  if (project.title.includes("OpenInApp")) {
    return [
      "Google-authenticated dashboard experience.",
      "Live API consumption with chart-driven views.",
      "Good example of product-style analytics UI.",
    ];
  }

  return [];
}

export default function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: ProjectType;
  index: number;
  compact?: boolean;
}) {
  const highlights = getProjectHighlights(project);

  return (
    <article
      className={`hover-lift scroll-reveal revealed bg-surface-panel border border-border-primary relative overflow-hidden flex flex-col transition-colors duration-200 hover:border-[rgba(34,211,238,0.42)] ${
        compact ? "rounded-[18px] p-[1.3rem] min-h-full" : "rounded-[24px] p-[1.55rem] min-h-[350px]"
      }`}
      style={{ transitionDelay: `${Math.min(index * 60, 300)}ms` }}
    >
      <div
        className={`absolute top-0 left-0 right-0 ${compact ? "h-[3px]" : "h-[4px]"} ${
          project.badge === "Production" ? "bg-primary" : "bg-[rgba(96,165,250,0.4)]"
        }`}
      />

      <div className="inline-flex items-center gap-[0.45rem] mb-[0.85rem] text-primary text-[0.72rem] font-bold tracking-[0.1em] uppercase">
        {getProjectTone(project)}
      </div>

      <div className="flex justify-between items-start gap-4 mb-[0.9rem]">
        <div
          className={`font-[720] text-text-primary leading-[1.22] tracking-[-0.025em] max-w-[86%] flex items-center gap-2 ${
            compact ? "text-[1rem]" : "text-[1.16rem]"
          }`}
        >
          <AppIcon icon={project.emoji} size="1.25em" />
          <span>{project.title}</span>
        </div>
        <span
          className={`shrink-0 text-[0.68rem] py-[0.28rem] px-[0.68rem] rounded-full font-[620] border whitespace-nowrap ${
            project.badge === "Production"
              ? "bg-primary-faint text-primary border-primary-border"
              : "bg-[rgba(100,116,139,0.12)] text-text-tertiary border-border-primary"
          }`}
        >
          {project.badgeDetail ? project.badgeDetail : project.badge}
        </span>
      </div>

      <p
        className={`text-text-secondary leading-[1.8] mb-4 flex-1 ${
          compact ? "text-[0.84rem]" : "text-[0.91rem]"
        }`}
      >
        {project.desc}
      </p>

      {!compact && highlights.length > 0 && (
        <div className="grid gap-[0.65rem] mb-4 p-[1rem_1rem_0.95rem] rounded-[16px] bg-surface-soft-2 border border-[rgba(51,65,85,0.75)]">
          <div className="text-[0.72rem] tracking-[0.12em] uppercase text-primary font-bold">
            Key Highlights
          </div>
          {highlights.map((item) => (
            <div
              key={item}
              className="flex gap-[0.6rem] items-start text-text-secondary text-[0.82rem] leading-[1.68]"
            >
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_var(--primary-faint)] mt-[0.35rem] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {project.metric && (
        <div className="inline-flex items-center gap-[0.4rem] text-[0.77rem] font-[620] text-primary bg-primary-faint border border-primary-border py-[0.42rem] px-[0.84rem] rounded-full mb-4 w-fit">
          {project.metric}
        </div>
      )}

      <div className={`flex gap-[0.45rem] flex-wrap ${project.demo || project.github || project.video ? "mb-4" : "mb-0"}`}>
        {project.stack.map((item) => (
          <span
            key={item}
            className="text-[0.72rem] bg-[rgba(100,116,139,0.1)] text-text-tertiary py-[0.22rem] px-[0.58rem] rounded-lg border border-[rgba(51,65,85,0.9)]"
          >
            {item}
          </span>
        ))}
      </div>

      {(project.demo || project.github || project.githubLinks?.length || (project.video && project.video !== "#")) && (
        <div className="flex gap-[0.65rem] flex-wrap mt-auto pt-[0.35rem]">
          {project.demo && (
            <LinkButton
              href={project.demo}
              label="Live Demo"
              primary
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              }
            />
          )}
          {project.githubLinks ? (
            project.githubLinks.map((link) => (
              <LinkButton
                key={link.label}
                href={link.url}
                label={`GitHub (${link.label})`}
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                }
              />
            ))
          ) : (
            project.github && (
              <LinkButton
                href={project.github}
                label="GitHub"
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                }
              />
            )
          )}
          {project.video && project.video !== "#" && (
            <LinkButton
              href={project.video}
              label="Watch Demo"
              primary
              icon={
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              }
            />
          )}
        </div>
      )}
    </article>
  );
}
