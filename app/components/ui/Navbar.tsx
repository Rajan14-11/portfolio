"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-[60px] flex items-center justify-between px-4 sm:px-8 z-[100] transition-all duration-300 border-b border-border-primary animate-[navSlideDown_0.5s_cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-bg-scrolled backdrop-blur-[12px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)]"
          : "bg-bg backdrop-blur-none shadow-none"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 no-underline transition-opacity duration-200 hover:opacity-90"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio-logo.webp"
          alt="Rajan Goyal Logo"
          className="h-8 w-auto object-contain rounded-md"
        />
      </Link>

      {/* Desktop links */}
      <div className="hidden sm:flex gap-1 items-center">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link relative text-[0.875rem] py-[0.35rem] px-[0.75rem] rounded-[6px] no-underline transition-colors duration-200 ${
                active
                  ? "text-primary bg-primary-faint font-[600]"
                  : "text-text-secondary bg-transparent font-[500]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-9 h-9 rounded-full border border-border-secondary bg-bg2 cursor-pointer flex items-center justify-center text-base ml-2 transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-text-primary hover:rotate-15 hover:scale-105 hover:border-primary"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        className="flex sm:hidden bg-transparent border-none text-text-primary text-[1.4rem] cursor-pointer"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed top-[60px] left-0 right-0 bg-bg2 border-b border-border-primary p-4 flex flex-col gap-2 animate-[fadeUp_0.25s_cubic-bezier(0.16,1,0.3,1)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-[0.65rem] px-4 rounded-lg no-underline ${
                pathname === link.href
                  ? "text-primary font-[600] bg-primary-faint"
                  : "text-text-secondary font-[500] bg-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="bg-transparent border border-border-secondary rounded-lg text-text-secondary py-[0.65rem] px-4 text-left cursor-pointer text-[0.9rem]"
          >
            {theme === "dark" ? "🌙 Dark mode" : "☀️ Light mode"}
          </button>
        </div>
      )}

      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.25s ease, left 0.25s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after {
          width: 60%;
          left: 20%;
        }
      `}</style>
    </nav>
  );
}
