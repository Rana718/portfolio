import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Rana Dolui | Full Stack Developer Portfolio",
  description: "Explore my portfolio of 13+ production applications including OmniAI, CareerWise, PeerDrop, and more. Built with React, Next.js, Go, Python, and AI/ML technologies.",
  openGraph: {
    title: "Projects - Rana Dolui | Full Stack Developer Portfolio",
    description: "Explore my portfolio of 13+ production applications including OmniAI, CareerWise, PeerDrop, and more.",
    url: "https://ranadolui.me/projects",
  },
  twitter: {
    title: "Projects - Rana Dolui | Full Stack Developer Portfolio",
    description: "Explore my portfolio of 13+ production applications including OmniAI, CareerWise, PeerDrop, and more.",
  },
  alternates: {
    canonical: "https://ranadolui.me/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
