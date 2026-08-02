import Link from "next/link";
import { heroProofPoints, heroStrengths, heroTags, personal } from "@/app/data";

export default function HeroSection() {
  return (
    <section className="hero-section relative flex flex-col justify-center max-w-[1100px] mx-auto overflow-hidden px-4 md:px-8 pb-8 pt-[calc(60px+1.5rem)]">
      {/* Animated background glow */}
      <div
        aria-hidden
        className="absolute -top-[10%] -right-[5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,var(--primary-faint)_0%,transparent_70%)] blur-[40px] animate-[floatSlow_8s_ease-in-out_infinite] pointer-events-none z-0"
      />
      <div
        aria-hidden
        className="absolute -bottom-[15%] -left-[8%] w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,var(--primary-faint)_0%,transparent_70%)] blur-[40px] animate-[floatSlow_10s_ease-in-out_infinite_reverse] pointer-events-none z-0"
      />

      <div className="hero-layout relative z-10 grid gap-8 items-center grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <div>
          <div className="fade-up-1 inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] inline-block animate-pulse" />
            <span className="eyebrow !mb-0">
              Available for opportunities
            </span>
          </div>

          <h1 className="fade-up-2 text-[clamp(2.6rem,7vw,5rem)] font-[740] leading-[0.96] tracking-[-0.06em] text-text-primary mb-2">
            Rajan{" "}
            <span
              className="gradient-text bg-[linear-gradient(90deg,var(--primary),#60E8FF,var(--primary))] bg-[length:200%_auto] text-transparent bg-clip-text animate-[gradientShift_4s_ease_infinite]"
            >
              Goyal
            </span>
          </h1>

          <p className="fade-up-3 text-[clamp(1rem,2.2vw,1.22rem)] text-text-secondary font-[540] mb-4 tracking-[-0.02em]">
            {personal.role} <span className="text-text-tertiary">|</span>{" "}
            <span className="text-primary">{personal.tagline}</span>
          </p>

          <p className="fade-up-4 text-base text-text-secondary max-w-[680px] leading-[1.82] mb-[1.15rem]">
            2+ years building and optimizing production products for a{" "}
            <strong className="text-text-primary">30,000 MAU edtech platform</strong>.
            Strongest in <strong className="text-text-primary">React + Django systems</strong>,
            with hands-on <strong className="text-text-primary">MERN full-stack</strong>{" "}
            project experience across e-commerce, dashboards, and real-time product features.
          </p>

          <div className="fade-up-4 flex gap-2 flex-wrap mb-5">
            {heroTags.map((tag, i) => (
              <span
                key={tag}
                className="tag tag-pop"
                style={{ animationDelay: `${0.25 + i * 0.04}s` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="fade-up-5 flex gap-3 flex-wrap mb-[1.6rem]">
            {heroProofPoints.map((point) => (
              <div
                key={point}
                className="inline-flex items-center gap-[0.55rem] py-[0.7rem] px-[0.95rem] rounded-full border border-border-primary bg-surface-soft-3 text-text-secondary text-[0.8rem] font-[520] backdrop-blur-sm"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-primary shadow-[0_0_0_4px_var(--primary-faint)] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="fade-up-6 flex gap-4 flex-wrap">
            <Link href="/projects" className="btn-primary hero-btn-primary">
              View Selected Work →
            </Link>
            <Link href="/contact" className="btn-outline hero-btn">
              Get in Touch
            </Link>
            <a
              href={personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost hero-btn"
            >
              Download CV ↗
            </a>
          </div>
        </div>

        <div className="fade-up-5 hero-aside max-w-[720px] md:max-w-none bg-surface-panel-alt border border-border-primary rounded-[22px] p-[1.6rem] shadow-[0_22px_60px_-32px_rgba(34,211,238,0.35)] relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -bottom-[22%] -right-[18%] w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,var(--primary-faint)_0%,transparent_72%)] blur-[12px]"
          />

          <div className="relative z-10">
            <div className="text-[0.72rem] tracking-[0.16em] uppercase text-primary font-bold mb-3">
              Why Teams Hire Me
            </div>
            <div className="text-[1.15rem] font-[680] text-text-primary leading-[1.25] tracking-[-0.03em] mb-4">
              Full-stack engineer with product depth, not just portfolio breadth.
            </div>

            <div className="grid gap-[0.8rem] mb-[1.15rem]">
              {heroStrengths.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="w-[9px] h-[9px] rounded-full bg-primary mt-[0.38rem] shrink-0" />
                  <span className="text-text-secondary text-[0.85rem] leading-[1.72] font-[470]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              {["MERN Roles", "Full-Stack Teams", "Product Startups"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary-border bg-primary-faint text-primary py-[0.4rem] px-[0.8rem] text-[0.74rem] font-[620]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes tagPop {
          from { opacity: 0; transform: scale(0.8) translateY(6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .tag-pop {
          opacity: 0;
          animation: tagPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .hero-btn-primary, .hero-btn {
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s, box-shadow 0.2s;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px -4px var(--primary-border);
        }
        .hero-btn:hover {
          transform: translateY(-2px) scale(1.02);
        }
        /* Fit hero to viewport on larger screens, allow natural scroll on small screens */
        @media (min-height: 700px) and (min-width: 641px) {
          .hero-section {
            min-height: calc(100vh - 60px);
            height: calc(100vh - 60px);
          }
        }
        @media (max-width: 640px), (max-height: 699px) {
          .hero-section {
            min-height: calc(100vh - 60px);
            height: auto;
            padding-bottom: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
