import type { Metadata } from "next";
import ProjectsSection from "@/app/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects — Rajan Goyal",
  description:
    "Selected client work and personal projects across MERN, Next.js, Django, and full-stack product development.",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
