import type { Metadata } from "next";
import SkillsSection from "@/app/sections/SkillsSection";

export const metadata: Metadata = {
  title: "Skills — Rajan Goyal",
  description: "Technical skills across MERN, Python, Django, Next.js, TypeScript, AWS, and AI integrations.",
};

export default function SkillsPage() {
  return <SkillsSection />;
}
