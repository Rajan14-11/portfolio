"use client";

import { Icon, IconProps } from "@iconify/react";

const EMOJI_MAP: Record<string, string> = {
  "🚢": "twemoji:ship",
  "🛒": "twemoji:shopping-cart",
  "📋": "twemoji:clipboard",
  "📊": "twemoji:bar-chart",
  "🎯": "twemoji:direct-hit",
  "🛡️": "twemoji:shield",
  "💳": "twemoji:credit-card",
  "🧵": "twemoji:spool-of-thread",
  "🔧": "twemoji:wrench",
  "🚗": "twemoji:automobile",
  "📝": "twemoji:memo",
  "💻": "twemoji:laptop",
  "🌼": "twemoji:blossom",
  "🎨": "twemoji:artist-palette",
  "🟢": "twemoji:green-circle",
  "🐍": "twemoji:snake",
  "⚛️": "twemoji:atom-symbol",
  "🗄️": "twemoji:card-file-box",
  "🛠️": "twemoji:hammer-and-wrench",
  "📍": "twemoji:round-pushpin",
  "🏢": "twemoji:office-building",
  "📱": "twemoji:mobile-phone",
  "✉️": "twemoji:envelope",
  "💼": "skill-icons:linkedin",
  "⚙️": "skill-icons:github-dark",
  "linkedin": "skill-icons:linkedin",
  "github": "skill-icons:github-dark",
};

interface AppIconProps extends Omit<IconProps, "icon"> {
  icon: string;
  size?: number | string;
}

export default function AppIcon({ icon, size = "1.25em", className = "", style, ...props }: AppIconProps) {
  const iconName = EMOJI_MAP[icon] || icon;

  return (
    <Icon
      icon={iconName}
      style={{
        display: "inline-block",
        verticalAlign: "-0.15em",
        width: size,
        height: size,
        ...style,
      }}
      className={className}
      {...props}
    />
  );
}
