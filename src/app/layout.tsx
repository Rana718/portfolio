import { ThemeProvider } from "@/lib/theme-provider";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ranadolui.me"),
  title: "Rana Dolui - Full Stack Developer | React, Next.js, Go, Python Expert | Hire Now",
  description: "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS. Built OmniAI, CareerWise, PeerDrop. Available for hire in Kolkata, India.",
  keywords: ["Rana Dolui", "Full Stack Developer", "React Developer", "Next.js Developer", "Go Developer", "Python Developer", "JavaScript Expert", "TypeScript", "AI ML Developer", "Web Developer Kolkata", "Hire Full Stack Developer", "React Native", "FastAPI", "Docker", "AWS", "Kubernetes", "Software Engineer India", "Freelance Developer"],
  authors: [{ name: "Rana Dolui" }],
  creator: "Rana Dolui",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ranadolui.me/",
    title: "Rana Dolui - Full Stack Developer | React, Next.js, Go, Python Expert",
    description: "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS. Available for hire.",
    siteName: "Rana Dolui Portfolio",
    images: [{
      url: "https://ranadolui.me/logo.png",
      width: 1200,
      height: 630,
      alt: "Rana Dolui - Full Stack Developer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ranad187",
    creator: "@Ranad187",
    title: "Rana Dolui - Full Stack Developer | React, Next.js, Go, Python Expert",
    description: "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS.",
    images: ["https://ranadolui.me/logo.png"],
  },
  alternates: {
    canonical: "https://ranadolui.me/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rana Dolui",
  jobTitle: "Full Stack Developer",
  description: "Experienced Full Stack Developer with 13+ production apps. Expert in React, Next.js, Go, Python, AI/ML, Docker, AWS.",
  url: "https://ranadolui.me",
  image: "https://ranadolui.me/logo.png",
  sameAs: [
    "https://github.com/Rana718",
    "https://www.linkedin.com/in/rana-dolui-89357728a/",
    "https://x.com/jack718r",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  email: "ranadolui718@gmail.com",
  knowsAbout: ["JavaScript", "TypeScript", "React", "Next.js", "Go", "Python", "Node.js", "FastAPI", "React Native", "Docker", "Kubernetes", "AWS", "PostgreSQL", "MongoDB", "Redis", "AI/ML", "LangChain"],
  workExample: [
    { "@type": "CreativeWork", name: "OmniAI", url: "https://github.com/Rana718/omniai" },
    { "@type": "CreativeWork", name: "CareerWise", url: "https://careerw-ise.vercel.app/" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>
          <div className="flex justify-center">
            <Navbar />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
