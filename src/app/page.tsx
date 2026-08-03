"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProjectModal } from "@/components/ProjectModal";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkSection } from "@/components/WorkSection";
import { MoreProjectsSection } from "@/components/MoreProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { OSSSection } from "@/components/OSSSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import type { projects as projectsData } from "@/lib/data";

type Project = (typeof projectsData)[number];

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
               <section id="more-projects" className="inverted bg-bg-primary">
                  <MoreProjectsSection onProjectClick={openProjectModal} />
               </section>
               <section id="skills">
                  <SkillsSection />
               </section>
               <section id="oss" className="inverted bg-bg-primary">
                  <OSSSection />
               </section>
               <section id="services">
                  <ServicesSection />
               </section>
               <section id="contact">
                  <ContactSection />
               </section>
               <FooterSection />
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
