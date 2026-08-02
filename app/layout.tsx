import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/ui/Navbar";
import ChatWidget from "./components/ui/ChatWidget";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rajan Goyal — MERN, Python & Django Full-Stack Developer",
  description:
    "Full-stack developer with 2+ years of experience across MERN, Python, and Django. Built React and Django features for a 30,000 MAU edtech platform and full-stack MERN projects for product-style use cases.",
  icons: {
    icon: "/portfolio-favicon.webp",
    shortcut: "/portfolio-favicon.webp",
    apple: "/portfolio-favicon.webp",
  },
  keywords: [
    "Rajan Goyal",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "Python Developer",
    "Django Developer",
    "Next.js",
    "TypeScript",
    "Gurgaon",
    "Delhi NCR",
    "Remote",
  ],
  authors: [{ name: "Rajan Goyal", url: "https://rajan-portfolio.vercel.app" }],
  openGraph: {
    title: "Rajan Goyal — MERN, Python & Django Full-Stack Developer",
    description: "2+ years building MERN apps, Python/Django backends, and production React experiences for 30k users.",
    url: "https://rajan-portfolio.vercel.app",
    siteName: "Rajan Goyal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Goyal — MERN, Python & Django Full-Stack Developer",
    description: "2+ years building MERN apps, Python/Django backends, and production React experiences for 30k users.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={publicSans.variable}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
