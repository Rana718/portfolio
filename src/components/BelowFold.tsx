"use client";
import dynamic from "next/dynamic";
import { About } from "@/components/About";

const TechStack = dynamic(() => import("@/components/TechStack").then(m => ({ default: m.TechStack })));
const Experience = dynamic(() => import("@/components/Experience").then(m => ({ default: m.Experience })));
const Projects = dynamic(() => import("@/components/Projects").then(m => ({ default: m.Projects })));
const OpenSource = dynamic(() => import("@/components/OpenSource").then(m => ({ default: m.OpenSource })));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const Contact = dynamic(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

export function BelowFold() {
  return (
    <>
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <OpenSource />
      <Testimonials />
      <Contact />
    </>
  );
}
