import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ranadolui.me/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
