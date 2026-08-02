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
  badge: "Production" | "Personal Project";
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
    title: "Flipkart Clone — Full-Stack E-Commerce",
    badge: "Personal Project",
    emoji: "🛒",
    desc: "E-commerce system with separate User, Admin, and Backend apps. Built end-to-end authentication, CRUD workflows, cart handling, and order management across the full stack. Uses Redux toolkit for state management.",
    metric: "MERN architecture · user, admin, and backend apps",
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
    badge: "Personal Project",
    emoji: "📋",
    desc: "A Trello clone to manage daily tasks with drag-and-drop functionality, user authentication, and persistent task state.",
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
    badge: "Personal Project",
    emoji: "📊",
    desc: "A Google-authenticated analytics dashboard integrated with live APIs and Chart.js visualization components.",
    stack: ["Next.js", "Tailwind CSS", "Chart.js", "NextAuth.js", "REST APIs"],
    demo: "https://open-in-app-tau.vercel.app/",
    github: "https://github.com/Rajan14-11/open_in_app.git",
  },
  {
    title: "ISRT — Infosec Reporting Tools",
    badge: "Personal Project",
    emoji: "🛡️",
    desc: "Full-stack MERN security reporting platform built to streamline bug bounty and penetration testing documentation. Features dynamic report generation (DOCX), evidence attachments, JWT auth, and interactive vulnerability metrics.",
    metric: "MERN stack · Automated DOCX report engine",
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
    title: "Vulnbounty — Bug Bounty Platform",
    badge: "Production",
    badgeDetail: "Seclance",
    emoji: "🎯",
    desc: "Production security bounty platform engineered for vulnerability submission and security researcher collaboration. Built with authentication flows, payment gateway integrations, and real-time target status tracking.",
    metric: "Production build · Payout integrations & target management",
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
    badge: "Production",
    badgeDetail: "Client Work",
    emoji: "🛡️",
    desc: "A single-page application built to showcase cybersecurity services and enterprise IT solution offerings. Its an end to end application for a cybersecurity company having blogs, careers, about us and many more pages.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    demo: "https://seclance-website.vercel.app/",
  },
  {
    title: "E-Commerce App with Stripe Payments",
    badge: "Personal Project",
    emoji: "💳",
    desc: "Complete shopping platform with cart, checkout, and Stripe payment integration. Redux for predictable global state management, responsive across all screen sizes.",
    stack: ["React.js", "Redux", "Stripe API", "CSS"],
    github: "https://github.com/Rajan14-11/training-ecommerce.git",
  },
  {
    title: "Tailor App User — Order Management",
    badge: "Personal Project",
    emoji: "🧵",
    desc: "A multi-page customer portal application built for discovering tailors based on user location and ordering custom products online. End to end flow with razorpay integration for payments.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
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
    title: "IosSolution — Repair Center SPA",
    badge: "Personal Project",
    emoji: "🔧",
    desc: "A single-page application built to display information and service details about an electronic repairing center.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    demo: "https://iossolution.vercel.app/",
  },
  {
    title: "Tesla Clone — Static Showcase",
    badge: "Personal Project",
    emoji: "🚗",
    desc: "A Tesla clone static web application displaying car models, features, and specifications with responsive UI components.",
    stack: ["React.js", "Firebase", "Material UI"],
    demo: "https://teslaclone-xi.vercel.app/",
    github: "https://github.com/Rajan14-11/teslaclone.git",
  },
  {
    title: "To Do List — Task Manager",
    badge: "Personal Project",
    emoji: "📝",
    desc: "A ToDo List application built to track and manage daily tasks saved persistently in a Firebase database.",
    stack: ["React.js", "Firebase", "Material UI"],
    demo: "https://to-do-list-a64ea.web.app/",
  },
  {
    title: "WebLancer — Freelancer Portfolio Platform",
    badge: "Personal Project",
    emoji: "💻",
    desc: "A static showcase platform designed to highlight diverse freelancers, their services, and portfolio showcases.",
    stack: ["Next.js", "Tailwind CSS"],
    demo: "https://weblancer.vercel.app/",
  },
  {
    title: "DaisyUI Theme — Cybersecurity Showcase",
    badge: "Personal Project",
    emoji: "🌼",
    desc: "A fully responsive static site displaying information about cybersecurity services using DaisyUI theme components.",
    stack: ["Next.js", "Tailwind CSS", "DaisyUI"],
    demo: "https://daisyui-theme.vercel.app/",
  },
  {
    title: "Simple Color Website — Palette Showcase",
    badge: "Personal Project",
    emoji: "🎨",
    desc: "A responsive static website demonstrating color theory, palette selection, and practical color usage in web design.",
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
