import type { Metadata } from "next";
import ContactSection from "@/app/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Rajan Goyal",
  description: "Get in touch with Rajan Goyal — open to MERN, Python, Django, and full-stack developer roles across India, remote, or relocation anywhere in India.",
};

export default function ContactPage() {
  return <ContactSection />;
}
