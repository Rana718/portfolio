"use client";

import { lazy, Suspense, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProjectModal } from "@/components/ProjectModal";
import type { projects as projectsData } from "@/lib/data";
import type { BlogPreviewItem } from "@/components/BlogPreviewSection";
import type { GitHubStatsByRepo } from "@/lib/github";

// Above-fold: load eagerly
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkSection } from "@/components/WorkSection";
import { OSSSection } from "@/components/OSSSection";

const MoreProjectsSection = lazy(() =>
   import("@/components/MoreProjectsSection").then((module) => ({
      default: module.MoreProjectsSection,
   })),
);
const SkillsSection = lazy(() =>
   import("@/components/SkillsSection").then((module) => ({
      default: module.SkillsSection,
   })),
);
const BlogPreviewSection = lazy(() =>
   import("@/components/BlogPreviewSection").then((module) => ({
      default: module.BlogPreviewSection,
   })),
);
const ServicesSection = lazy(() =>
   import("@/components/ServicesSection").then((module) => ({
      default: module.ServicesSection,
   })),
);
const ContactSection = lazy(() =>
   import("@/components/ContactSection").then((module) => ({
      default: module.ContactSection,
   })),
);
const FooterSection = lazy(() =>
   import("@/components/FooterSection").then((module) => ({
      default: module.FooterSection,
   })),
);

type Project = (typeof projectsData)[number];

interface HomeClientProps {
   blogs: BlogPreviewItem[];
   githubStats: GitHubStatsByRepo;
}

function SectionFallback() {
   return <div className="min-h-80" aria-hidden="true" />;
}

export function HomeClient({ blogs, githubStats }: HomeClientProps) {
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openProjectModal = (project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
   };

   const closeProjectModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
   };

   return (
      <>
         <div className="relative min-h-screen bg-bg-primary text-fg-primary">
            <section
               id="home"
               className="fixed top-0 left-0 right-0 h-screen z-10"
            >
               <HeroSection />
            </section>

            <div className="h-screen pointer-events-none relative z-0" />

            <main className="relative z-30 bg-bg-primary text-fg-primary">
               <section id="oss">
                  <OSSSection stats={githubStats} />
               </section>

               <section id="experience" className="inverted bg-bg-primary">
                  <ExperienceSection />
               </section>

               <section id="work" className="inverted bg-bg-primary">
                  <WorkSection onProjectClick={openProjectModal} />
               </section>

               <Suspense fallback={<SectionFallback />}>
                  <section id="more-projects">
                     <MoreProjectsSection onProjectClick={openProjectModal} />
                  </section>
               </Suspense>

               <Suspense fallback={<SectionFallback />}>
                  <section id="skills" className="inverted bg-bg-primary">
                     <SkillsSection />
                  </section>
               </Suspense>

               <Suspense fallback={<SectionFallback />}>
                  <section id="blog">
                     <BlogPreviewSection blogs={blogs} />
                  </section>
               </Suspense>


               <Suspense fallback={<SectionFallback />}>
                  <section id="services">
                     <ServicesSection />
                  </section>
               </Suspense>

               <Suspense fallback={<SectionFallback />}>
                  <section id="contact">
                     <ContactSection />
                  </section>
               </Suspense>

               <Suspense fallback={<SectionFallback />}>
                  <FooterSection />
               </Suspense>
            </main>
         </div>

         <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeProjectModal}
         />
      </>
   );
}
