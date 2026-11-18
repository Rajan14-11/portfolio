# Rajan Goyal — Portfolio

A professional portfolio showcasing full-stack engineering work, designed and built with Next.js and Tailwind CSS v4. The repository is structured to prioritize clean, maintainable architecture over complex CSS-in-JS abstractions, relying on standard utility-first styling combined with minimal custom variables.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, custom CSS variables for premium glassmorphism and glow effects
- **Components**: Server-side rendered by default, client components used strictly where interaction or hooks (e.g., `useState`, `IntersectionObserver`) are required
- **AI Integration**: Groq AI (Qwen 3.8 / GPT-OSS) for real-time portfolio QA (ChatWidget)

## Architecture Highlights

1. **Server vs Client Components**: Core static sections (`Hero`, `About`, `Projects`, `Skills`, `Contact`) are optimized as zero-JS Server Components. Only interactive elements (Navbar, Chat Widget, Scroll Reveal) are sent to the client.
2. **Performance**: High Lighthouse scores via Next.js `next/font`, optimized images, and semantic HTML.
3. **Memory Safety**: Features like `ScrollReveal` safely mount and unmount `IntersectionObserver` instances to prevent memory leaks during client-side navigation.
4. **Theme System**: Theming logic is decoupled. It applies global CSS custom properties mapped directly to Tailwind's `@theme` config, avoiding inline styles or heavy runtime JS computation.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Rajan14-11/portfolio.git
cd portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application locally.

## Environment Variables

For the AI Chat Widget to function, you need to set up the following environment variable in a `.env.local` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

## Structure

- `/app` — Next.js 15 App Router structure
- `/app/api` — Serverless route handlers (e.g., Groq chat integration)
- `/app/components` — Reusable UI building blocks (Navbar, ChatWidget, ScrollReveal, AppIcon)
- `/app/sections` — Main page sections composed of pure server components
- `/app/data.ts` — Single source of truth for portfolio content

## Contact

- **Email**: rajangoyal710@gmail.com
- **LinkedIn**: [linkedin.com/in/rajan-goyal](https://linkedin.com/in/rajan-goyal)
- **GitHub**: [github.com/Rajan14-11](https://github.com/Rajan14-11)
