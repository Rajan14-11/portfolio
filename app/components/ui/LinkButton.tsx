import React from "react";

export default function LinkButton({
  href,
  label,
  icon,
  primary = false,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-lg border no-underline transition-all duration-150 hover:-translate-y-0.5 active:scale-95 group ${
        primary
          ? "text-text-primary border-border-secondary bg-surface-soft-3 hover:bg-surface-soft-2 shadow-sm"
          : "text-text-secondary border-border-primary bg-surface-soft hover:text-text-primary hover:border-border-secondary"
      }`}
    >
      <span className="shrink-0">{icon}</span>
      <span>{label}</span>
      <span className="text-[11px] text-text-tertiary transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}
