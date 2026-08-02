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
      className={`inline-flex items-center gap-[0.45rem] text-[0.78rem] font-[620] py-[0.42rem] px-[0.8rem] rounded-[10px] border no-underline ${
        primary
          ? "text-primary border-primary-border bg-primary-faint"
          : "text-text-secondary border-border-primary bg-[rgba(100,116,139,0.08)]"
      }`}
    >
      {icon}
      <span>{label}</span>
      <span className="text-[0.82rem] leading-none">↗</span>
    </a>
  );
}
