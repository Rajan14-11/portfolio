import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary bg-surface-soft text-xs font-mono text-text-tertiary mb-4">
        <span>404 ERROR</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mb-3">
        Page Not Found
      </h1>
      <p className="text-sm text-text-secondary max-w-[460px] leading-relaxed mb-8">
        The route you requested doesn&apos;t exist. You might have hit a typo like <code className="text-primary font-mono">/abput</code> instead of <code className="text-primary font-mono">/about</code>.
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/about" className="btn-outline">
          About
        </Link>
        <Link href="/projects" className="btn-outline">
          Projects
        </Link>
        <Link href="/skills" className="btn-outline">
          Skills
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact
        </Link>
      </div>
    </div>
  );
}

