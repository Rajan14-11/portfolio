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
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[64px] flex items-center justify-between px-4 sm:px-8 z-[100] transition-all duration-300 border-b ${
        scrolled
          ? "bg-bg-scrolled border-border-primary backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(0,0,0,0.2)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2.5 no-underline transition-opacity duration-200 hover:opacity-85 group"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio-logo.webp"
          alt="Rajan Goyal"
          className="h-7 w-auto object-contain rounded transition-transform duration-200 group-hover:scale-105"
        />
        <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-text-tertiary font-mono tracking-tight">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-text-secondary text-[11px]">available</span>
        </span>
      </Link>

      {/* Desktop links */}
      <nav className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-surface-soft border border-border-primary/60 backdrop-blur-sm">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[0.82rem] py-1.5 px-3.5 rounded-full no-underline transition-all duration-200 font-medium ${
                active
                  ? "text-text-primary bg-surface-soft-3 shadow-sm font-semibold"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-soft-2"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Action / Theme Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-8 h-8 rounded-full border border-border-primary bg-surface-soft cursor-pointer flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-secondary transition-all duration-200 active:scale-95"
        >
          {theme === "dark" ? (
            <svg
              className="w-4 h-4 transition-transform duration-300 hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 transition-transform duration-300 hover:-rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex sm:hidden w-8 h-8 rounded-lg border border-border-primary bg-surface-soft items-center justify-center text-text-primary text-[1.1rem] cursor-pointer"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed top-[64px] left-0 right-0 bg-bg2 border-b border-border-primary p-4 flex flex-col gap-1.5 shadow-xl animate-[fadeUp_0.2s_ease-out]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-2 px-3 rounded-lg no-underline text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary font-semibold bg-surface-soft-2"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-soft border border-border-primary cursor-pointer transition-colors mt-1"
          >
            <span>Theme</span>
            <span className="font-mono text-xs uppercase text-text-tertiary">
              {theme === "dark" ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
            </span>
          </button>
        </div>
      )}
    </header>
  );
}
