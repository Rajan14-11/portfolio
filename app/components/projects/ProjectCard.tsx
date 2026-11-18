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
    return "Full MERN Architecture";
  }
  if (project.title.includes("Trello Clone")) {
    return "Modern App Architecture";
  }
  if (project.title.includes("OpenInApp")) {
    return "Analytics Dashboard";
  }
  if (project.badge === "Production") {
    return project.badgeDetail ? `Shipped ${project.badgeDetail}` : "Shipped client work";
  }

  return "Featured build";
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
      className={`hover-lift scroll-reveal revealed bg-card border border-border-primary relative overflow-hidden flex flex-col transition-all duration-200 hover:border-border-secondary shadow-sm ${
        compact ? "rounded-xl p-5 min-h-full" : "rounded-2xl p-6 min-h-[340px]"
      }`}
      style={{ transitionDelay: `${Math.min(index * 50, 250)}ms` }}
    >
      <div className="flex justify-between items-start gap-4 mb-3">
        <div className="inline-flex items-center gap-1.5 text-text-tertiary text-[11px] font-mono tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>{getProjectTone(project)}</span>
        </div>
        <span
          className={`shrink-0 text-[10px] font-mono py-0.5 px-2 rounded-full font-medium border whitespace-nowrap ${
            project.badge === "Production"
              ? "bg-surface-soft-3 text-text-primary border-border-secondary"
              : "bg-surface-soft text-text-tertiary border-border-primary"
          }`}
        >
          {project.badgeDetail ? project.badgeDetail : project.badge}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-2.5">
        <AppIcon icon={project.emoji} size="1.2em" />
        <h3
          className={`font-semibold text-text-primary leading-tight tracking-[-0.02em] ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
      </div>

      <p
        className={`text-text-secondary leading-relaxed mb-4 flex-1 ${
          compact ? "text-[0.82rem]" : "text-[0.88rem]"
        }`}
      >
        {project.desc}
      </p>

      {!compact && highlights.length > 0 && (
        <div className="space-y-1.5 mb-4 p-3 rounded-lg bg-surface-soft border border-border-primary">
          <div className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary font-semibold mb-1">
            Engineering Highlights
          </div>
          {highlights.map((item) => (
            <div
              key={item}
              className="flex gap-2 items-start text-text-secondary text-[0.8rem] leading-normal"
            >
              <span className="text-text-tertiary mt-0.5 shrink-0 text-xs font-mono">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {project.metric && (
        <div className="inline-flex items-center gap-1.5 text-[0.75rem] font-mono font-medium text-text-primary bg-surface-soft-2 border border-border-primary py-1 px-2.5 rounded mb-4 w-fit">
          <span>⚡</span>
          <span>{project.metric}</span>
        </div>
      )}

      <div className={`flex gap-1.5 flex-wrap ${project.demo || project.github || project.video ? "mb-4" : "mb-0"}`}>
        {project.stack.map((item) => (
          <span
            key={item}
            className="text-[10px] font-mono bg-surface-soft text-text-tertiary py-0.5 px-2 rounded border border-border-primary hover:text-text-secondary transition-colors"
          >
            {item}
          </span>
        ))}
      </div>

      {(project.demo || project.github || project.githubLinks?.length || (project.video && project.video !== "#")) && (
        <div className="flex gap-2 flex-wrap mt-auto pt-2 border-t border-border-primary">
          {project.demo && (
            <LinkButton
              href={project.demo}
              label="Live Demo"
              primary
              icon={
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
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
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
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
