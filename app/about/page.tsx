import type { Metadata } from "next";
import AboutSection from "@/app/sections/AboutSection";

export const metadata: Metadata = {
  title: "About — Rajan Goyal",
  description:
    "Full-stack developer based in Gurgaon with 2+ years of experience across MERN, Python, and Django, open to relocate anywhere in India.",
};

export default function AboutPage() {
  return <AboutSection />;
}
