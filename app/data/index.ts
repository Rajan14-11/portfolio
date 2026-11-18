export const personal = {
  name: "Rajan Goyal",
  role: "Full-Stack Developer",
  tagline: "MERN · Python · Django",
  email: "rajangoyal710@gmail.com",
  phone: "+91 76529 32128",
  location: "Gurgaon, India",
  locationNote: "Open to relocate anywhere in India",
  linkedin: "https://linkedin.com/in/rajan-goyal",
  github: "https://github.com/Rajan14-11",
  portfolio: "https://rajan-portfolio.vercel.app",
  resumeLink: "/resume",
  bio: [
    "I'm a full-stack developer with 2+ years of experience building scalable web applications for a 30,000 MAU edtech platform. My work spans MERN applications, highly optimised React frontends, and robust Python/Django backends with a strong focus on measurable product impact.",
    "At Freadom Edu, I've shipped performance-critical React and Django work at scale. Alongside that production experience, I've built full-stack projects using Node.js, Express, and MongoDB so I can contribute comfortably across MERN-heavy roles as well.",
    "I'm currently exploring opportunities at product startups across India or remote roles — especially teams hiring for full-stack work across MERN, Python, and Django. I'm open to relocating anywhere in India for the right role.",
  ],
  lookingFor:
    "I'm a full-stack developer who ships real features to real users. Looking for a role where I can own meaningful product work across MERN, Python, or Django stacks — ideally at a product startup where decisions move fast and engineering is valued. Open to opportunities across India, fully remote roles, and relocation anywhere in India.",
};

export const heroTags = [
  "MERN Stack",
  "React.js",
  "Node.js",
  "MongoDB",
  "Django",
];

export const heroProofPoints = [
  "30k MAU platform",
  "50 MB → 18 MB bundle reduction",
  "40% fewer API calls",
  "50k+ user records processed through automation tools",
  "98/100 SEO score on production website work",
  "30k+ students reached through assessment features",
];

export const heroStrengths = [
  "Production React + Django delivery on a live edtech product.",
  "Hands-on MERN project work across e-commerce, dashboards, and auth flows.",
  "Strong product ownership in performance, APIs, real-time systems, and AI features.",
];

export const experience = [
  {
    short: "S2M",
    date: "Jun 2025 – Present",
    title: "Senior Associate Developer",
    company: "Freadom Edu · Stones2Milestones, Gurgaon",
    desc: "Owning performance, assessment, analytics, and classroom experiences for a 30k MAU edtech platform across React, Django, and real-time systems.",
    highlights: [
      "Reduced production bundle size from 50 MB to 18 MB by leading major library migrations with zero critical post-release bugs.",
      "Cut redundant server calls by 40% with React Query caching across content-heavy student journeys.",
      "Integrated SpeechSuper for automated fluency, pronunciation, and comprehension scoring used by 30k+ students.",
      "Instrumented 40+ Mixpanel events to improve visibility into student and teacher funnels.",
      "Shipped Google Sheets workflows via Apps Script for attendance, feedback, and assessment capture.",
      "Prototyped an Electron desktop app with offline downloads and built WebRTC screen sharing plus teacher-student chat using Django Channels.",
    ],
  },
  {
    short: "FRD",
    date: "Jun 2024 – May 2025",
    title: "Associate Developer",
    company: "Freadom Edu · Stones2Milestones, Gurgaon",
    desc: "Built internal tooling and content infrastructure that improved scale, accessibility, and operational efficiency across the Freadom ecosystem.",
    highlights: [
      "Built PDF and ePub rendering pipelines so students could access a wider digital library directly inside the product.",
      "Created full-stack bulk account automation tools that processed records for 50k+ registered users.",
      "Engineered daily content sync workflows across 3 applications using Python Celery tasks.",
      "Integrated OpenRouter-based LLM experiences to support AI-assisted personalised content at scale.",
    ],
  },
  {
    short: "SCL",
    date: "Apr 2023 – May 2024",
    title: "Web Developer Intern",
    company: "Seclance, Bengaluru",
    desc: "Contributed across the marketing site, core platform, and an e-commerce product while building strong ownership across frontend and backend delivery.",
    highlights: [
      "Built the company website with Next.js, TypeScript, and Tailwind CSS, reaching a 98/100 SEO score.",
      "Contributed to authentication, payments, and core product flows on a Django plus React platform.",
      "Integrated Razorpay wallet payments and dark mode to improve accessibility and checkout coverage.",
      "Led end-to-end development of a separate e-commerce app with sub-2 second frontend load times.",
    ],
  },
];

export const education = {
  degree: "B.E. in Computer Science",
  cgpa: "8.54 / 10",
  institution: "UIET, Hoshiarpur",
  year: "2020 – 2024",
};

export type ProjectType = {
  title: string;
  badge: string;
  badgeDetail?: string;
  emoji: string;
  desc: string;
  metric?: string;
  stack: string[];
  github?: string;
  githubLinks?: { label: string; url: string }[];
  demo?: string;
  video?: string;
};

export const projects: ProjectType[] = [
  {
    title: "Maritime Procurement Management System",
    badge: "Full-Stack System",
    emoji: "🚢",
    desc: "Fleet procurement and supply chain management system featuring multi-role access control, tender sourcing, quotation benchmarking, and transactional goods receipt tracking.",
    metric: "5-Tier RBAC · Blind Bidding · Concurrency Controls",
    stack: [
      "TypeScript",
      "React 19",
      "Express.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/Rajan14-11/maritime-procurement-system.git",
    demo: "https://maritime-procurement-system.vercel.app/",
  },
  {
    title: "Tailor App User — Order Management",
    badge: "Full-Stack Portal",
    emoji: "🧵",
    desc: "Customer portal for discovering local tailors and ordering customized garments online. Features geolocation search, dynamic product configuration, and end-to-end payment processing.",
    metric: "Razorpay Checkout · Geolocation Search · Order Pipeline",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
    ],
    demo: "https://tailor-user-app.netlify.app/",
    githubLinks: [
      {
        label: "Frontend",
        url: "https://github.com/Rajan14-11/tailor-user.git",
      },
      {
        label: "Backend",
        url: "https://github.com/Rajan14-11/tailor-seller-backend-code.git",
      },
    ],
  },
  {
    title: "Vulnbounty — Bug Bounty Platform",
    badge: "Web Platform",
    emoji: "🎯",
    desc: "Vulnerability coordination platform for security researchers and program managers. Streamlines bug submission pipelines, report triage, researcher leaderboards, and payout disbursements.",
    metric: "Bounty Payout Workflows · Vulnerability Triage · JWT Auth",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Axios",
      "Razorpay",
      "JWT",
      "REST APIs",
    ],
    demo: "https://vulbounty-latest.vercel.app/",
  },
  {
    title: "Seclance — Cybersecurity Agency SPA",
    badge: "Interactive SPA",
    emoji: "🛡️",
    desc: "High-performance single-page web application showcasing cybersecurity services, technical blogs, and consultation scheduling with high SEO and Core Web Vitals performance.",
    metric: "98/100 Lighthouse SEO · Sub-2s Load Times · Responsive SPA",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demo: "https://seclance-website.vercel.app/",
  },
  {
    title: "Flipkart Clone — Full-Stack E-Commerce",
    badge: "E-Commerce System",
    emoji: "🛒",
    desc: "Full-stack shopping platform engineered with decoupled User, Admin, and REST Backend services. Features token-based authentication, catalog CRUD, shopping cart state, and order tracking pipelines.",
    metric: "Multi-App MERN · RTK State · Admin Portal",
    stack: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux"],
    githubLinks: [
      {
        label: "Frontend",
        url: "https://github.com/Rajan14-11/ecommerce-frontend-user.git",
      },
      {
        label: "Backend",
        url: "https://github.com/Rajan14-11/backend-ecommerce.git",
      },
      {
        label: "Admin",
        url: "https://github.com/Rajan14-11/ecommerce-frontend.git",
      },
    ],
  },
  {
    title: "Trello Clone — Task Management",
    badge: "Task Management",
    emoji: "📋",
    desc: "Collaborative kanban task management application built with Next.js Server Actions and MongoDB. Features interactive drag-and-drop task reordering, Clerk user authentication, audit activity logs, and optimistic UI updates.",
    metric: "Drag-and-Drop · Clerk Auth · Prisma ORM",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "Prisma",
      "MongoDB",
      "Server Actions",
    ],
    // demo: "https://trello-dev-three.vercel.app/",
    github: "https://github.com/Rajan14-11/trello-dev.git",
  },
  {
    title: "OpenInApp — Live Analytics Dashboard",
    badge: "Analytics Dashboard",
    emoji: "📊",
    desc: "Data analytics dashboard powered by NextAuth Google authentication and live REST endpoints. Implements dynamic Chart.js visualizations, link click performance metrics, and responsive telemetry cards.",
    metric: "Google OAuth · Live REST APIs · Chart.js",
    stack: ["Next.js", "Tailwind CSS", "Chart.js", "NextAuth.js", "REST APIs"],
    demo: "https://open-in-app-tau.vercel.app/",
    github: "https://github.com/Rajan14-11/open_in_app.git",
  },
  {
    title: "ISRT — Infosec Reporting Tools",
    badge: "Security Tooling",
    emoji: "🛡️",
    desc: "Full-stack security reporting platform designed to streamline penetration test documentation. Features a server-side DOCX export engine, evidence file attachments, and vulnerability severity dashboards.",
    metric: "Automated DOCX Engine · Vulnerability Matrix · JWT",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MUI v5",
      "Chart.js",
      "JWT",
    ],
    github: "https://github.com/Rajan14-11/ISRT.git",
  },
  {
    title: "E-Commerce App with Stripe Payments",
    badge: "Shopping Platform",
    emoji: "💳",
    desc: "Direct-to-consumer e-commerce storefront with live Stripe checkout integration. Built with Redux Toolkit for centralized cart state, instant product filtering, and responsive mobile-first views.",
    metric: "Stripe Payment Gateway · Redux Toolkit · Cart Drawer",
    stack: ["React.js", "Redux", "Stripe API", "CSS"],
    github: "https://github.com/Rajan14-11/training-ecommerce.git",
  },
  {
    title: "IosSolution — Repair Center SPA",
    badge: "Service Portal",
    emoji: "🔧",
    desc: "Single-page service platform for hardware electronics diagnostics and repair bookings. Features structured service tiers, transparent pricing schedules, and lead capture workflows.",
    metric: "Component Architecture · Fast TTFB · Responsive UI",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    demo: "https://iossolution.vercel.app/",
  },
  {
    title: "Tesla Clone — Static Showcase",
    badge: "Frontend Showcase",
    emoji: "🚗",
    desc: "Precision interface replica showcasing modern automotive product marketing layouts. Implements responsive hero animations, snap-scroll section navigation, and modular spec panels.",
    metric: "Material UI · Responsive Layout · Smooth Transitions",
    stack: ["React.js", "Firebase", "Material UI"],
    demo: "https://teslaclone-xi.vercel.app/",
    github: "https://github.com/Rajan14-11/teslaclone.git",
  },
  {
    title: "To Do List — Task Manager",
    badge: "CRUD Application",
    emoji: "📝",
    desc: "Productivity task application with instant cloud persistence via Firebase. Supports real-time state synchronization, priority tagging, completion filtering, and optimistic local state updates.",
    metric: "Firebase Realtime DB · Real-Time Sync · Dynamic Filters",
    stack: ["React.js", "Firebase", "Material UI"],
    demo: "https://to-do-list-a64ea.web.app/",
  },
  {
    title: "WebLancer — Freelancer Portfolio Platform",
    badge: "Directory Showcase",
    emoji: "💻",
    desc: "Talent discovery portal indexing freelance portfolios and service offerings. Features category-based taxonomy filtering, verified review cards, and search-optimized landing pages.",
    metric: "Static Generation · Category Filtering · SEO Optimized",
    stack: ["Next.js", "Tailwind CSS"],
    demo: "https://weblancer.vercel.app/",
  },
  {
    title: "DaisyUI Theme — Cybersecurity Showcase",
    badge: "Design System",
    emoji: "🌼",
    desc: "Theme and component showcase demonstrating scalable design tokens for security dashboards. Features accessible color contrast compliance, theme toggles, and responsive navigation.",
    metric: "Tailwind CSS + DaisyUI · Theme Tokens · Accessible UX",
    stack: ["Next.js", "Tailwind CSS", "DaisyUI"],
    demo: "https://daisyui-theme.vercel.app/",
  },
  {
    title: "Simple Color Website — Palette Showcase",
    badge: "Interactive Tool",
    emoji: "🎨",
    desc: "Lightweight browser utility for exploring color theory, contrast ratios, and harmonic palette generation. Generates real-time hex codes with zero runtime library dependencies.",
    metric: "Vanilla JS DOM · Color Harmony Engine · Zero Dependencies",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://rajan14-11.github.io/simple-color-website/color.html",
  },
];

export const skills = [
  {
    icon: "🟢",
    title: "MERN Stack",
    items: [
      { label: "React.js", primary: true },
      { label: "Node.js", primary: true },
      { label: "Express.js", primary: true },
      { label: "MongoDB", primary: true },
      { label: "JavaScript ES6+", primary: false },
      { label: "Redux / RTK Query", primary: false },
      { label: "JWT", primary: false },
      { label: "REST APIs", primary: false },
    ],
  },
  {
    icon: "🐍",
    title: "Python & Django",
    items: [
      { label: "Django", primary: true },
      { label: "Python", primary: true },
      { label: "Celery", primary: false },
      { label: "Django Channels", primary: false },
      { label: "WebSockets", primary: false },
      { label: "ASGI / Daphne", primary: false },
      { label: "PostgreSQL", primary: false },
      { label: "Redis", primary: false },
    ],
  },
  {
    icon: "⚛️",
    title: "Frontend & UI",
    items: [
      { label: "Next.js", primary: true },
      { label: "TypeScript", primary: true },
      { label: "Tailwind CSS", primary: false },
      { label: "SCSS", primary: false },
      { label: "React Query", primary: false },
      { label: "Ant Design v5", primary: false },
      { label: "Material UI", primary: false },
      { label: "Shadcn", primary: false },
    ],
  },
  {
    icon: "🗄️",
    title: "Infra & Integrations",
    items: [
      { label: "PostgreSQL", primary: true },
      { label: "Prisma ORM", primary: true },
      { label: "OpenRouter / LLMs", primary: true },
      { label: "SpeechSuper API", primary: true },
      { label: "AWS EC2", primary: false },
      { label: "AWS S3", primary: false },
      { label: "CloudFront", primary: false },
      { label: "Vercel", primary: false },
      { label: "Git / GitHub", primary: false },
      { label: "Mixpanel", primary: false },
      { label: "PostHog", primary: false },
      { label: "Razorpay / Stripe", primary: false },
      { label: "Electron.js", primary: false },
      { label: "WebRTC", primary: false },
      { label: "Apps Script", primary: false },
      { label: "AssemblyAI", primary: false },
    ],
  },
];

export const aiTools = ["Claude Code", "Cursor", "GitHub Copilot", "Windsurf", "Antigravity"];
