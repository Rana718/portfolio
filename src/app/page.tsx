"use client";

import { useState, lazy, Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProjectModal } from "@/components/ProjectModal";
import type { projects as projectsData } from "@/lib/data";

// Above-fold: load eagerly
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkSection } from "@/components/WorkSection";

// Below-fold: lazy load to reduce initial JS parse & execution
const MoreProjectsSection = lazy(() =>
   import("@/components/MoreProjectsSection").then((m) => ({
      default: m.MoreProjectsSection,
   })),
);
const SkillsSection = lazy(() =>
   import("@/components/SkillsSection").then((m) => ({
      default: m.SkillsSection,
   })),
);
const OSSSection = lazy(() =>
   import("@/components/OSSSection").then((m) => ({ default: m.OSSSection })),
);
const ServicesSection = lazy(() =>
   import("@/components/ServicesSection").then((m) => ({
      default: m.ServicesSection,
   })),
);
const ContactSection = lazy(() =>
   import("@/components/ContactSection").then((m) => ({
      default: m.ContactSection,
   })),
);
const FooterSection = lazy(() =>
   import("@/components/FooterSection").then((m) => ({
      default: m.FooterSection,
   })),
);

type Project = (typeof projectsData)[number];

function SectionFallback() {
   return <div className="min-h-100" aria-hidden />;
}

export default function Home() {
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
               <section id="experience" className="inverted bg-bg-primary">
                  <ExperienceSection />
               </section>
               <section id="work">
                  <WorkSection onProjectClick={openProjectModal} />
               </section>

               <Suspense fallback={<SectionFallback />}>
                  <section
                     id="more-projects"
                     className="inverted bg-bg-primary"
                  >
                     <MoreProjectsSection onProjectClick={openProjectModal} />
                  </section>
               </Suspense>

               <Suspense fallback={<SectionFallback />}>
                  <section id="skills">
                     <SkillsSection />
                  </section>
               </Suspense>

               <Suspense fallback={<SectionFallback />}>
                  <section id="oss" className="inverted bg-bg-primary">
                     <OSSSection />
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
