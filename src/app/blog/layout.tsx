import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Rana Dolui | Full Stack Developer",
  description: "Technical articles on Go, Next.js, microservices, DevOps, security, and full-stack development by Rana Dolui.",
  openGraph: {
    title: "Blog - Rana Dolui | Full Stack Developer",
    description: "Technical articles on Go, Next.js, microservices, DevOps, security, and full-stack development.",
    url: "https://ranadolui.me/blog",
  },
  twitter: {
    title: "Blog - Rana Dolui | Full Stack Developer",
    description: "Technical articles on Go, Next.js, microservices, DevOps, security, and full-stack development.",
  },
  alternates: {
    canonical: "https://ranadolui.me/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
