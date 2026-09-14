"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";

const CATEGORIES = ["All", "Brand Identity", "Beverage & Cafe", "Fashion", "Culinary", "Weddings"];

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Brand Identity") return p.category.includes("Brand Identity") || p.category.includes("Manifesto");
    if (selectedCategory === "Beverage & Cafe") return p.category.includes("Packaging") || p.title.includes("ALATA");
    if (selectedCategory === "Fashion") return p.category.includes("Fashion");
    if (selectedCategory === "Culinary") return p.category.includes("Culinary") || p.category.includes("Food");
    if (selectedCategory === "Weddings") return p.category.includes("Wedding");
    return true;
  });

  const handleNextProject = () => {
    if (!activeModalProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === activeModalProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setActiveModalProject(projectsData[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!activeModalProject) return;
    const currentIndex = projectsData.findIndex((p) => p.id === activeModalProject.id);
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setActiveModalProject(projectsData[prevIndex]);
  };

  return (
    <section
      id="work"
      className="relative w-full py-24 sm:py-36 lg:py-44 px-4 sm:px-10 lg:px-16 bg-gradient-to-b from-[#5B21B6] via-[#6D28D9] to-[#5B21B6] text-white border-t border-[#A78BFA]/30 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#A78BFA]/25 pb-8 mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#DDD6FE] font-bold">04 // SELECTED ARCHIVE</span>
              <span className="text-[#C4B5FD]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#EDE9FE]/80 uppercase">
                Featured Brand Portfolio
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.96]">
              SELECTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EDE9FE] to-[#DDD6FE]">
                WORKS &amp; CLIENTS.
              </span>
            </h2>
          </div>

          {/* Category Tabs with Mobile Horizontal Scrolling */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-grotesk font-semibold tracking-wider transition-all duration-300 min-h-[38px] ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(124,58,237,0.6)]"
                    : "border border-[#A78BFA]/30 bg-[#4C1D95] text-[#EDE9FE] hover:border-[#DDD6FE] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Layout */}
        <div className="space-y-10 sm:space-y-16">
          {/* PROJECT 01: Large Full-Width Hero Case Study (ALATA) */}
          {filteredProjects[0] && (
            <div
              onClick={() => setActiveModalProject(filteredProjects[0])}
              data-cursor="view"
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#A78BFA]/40 bg-[#4C1D95] transition-all duration-700 hover:border-[#DDD6FE] hover:shadow-[0_25px_60px_rgba(59,7,100,0.6)]"
            >
              <div className="relative aspect-4/3 sm:aspect-16/9 lg:aspect-21/9 w-full overflow-hidden bg-[#3B0764]">
                <Image
                  src={filteredProjects[0].heroImage}
                  alt={filteredProjects[0].title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Subtle Purple Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764] via-[#3B0764]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-[#7C3AED]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen pointer-events-none" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 sm:p-10 lg:p-14 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#A78BFA]/40 bg-[#3B0764]/80 px-3.5 py-1 text-xs font-mono text-[#DDD6FE] backdrop-blur-md font-semibold">
                      01 // FEATURED SPOTLIGHT
                    </span>
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#4C1D95] border border-[#A78BFA]/50 text-white font-grotesk text-xs font-bold tracking-wider shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:border-white">
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="inline-block rounded-md border border-[#A78BFA]/40 bg-[#3B0764]/70 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono text-[#EDE9FE] uppercase tracking-wider backdrop-blur-md">
                      {filteredProjects[0].category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                      {filteredProjects[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EDE9FE]/85 font-sans font-normal line-clamp-2">
                      {filteredProjects[0].tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT 02 + PROJECT 03: Offset Composition (Fluid Marble + Fashion Lookbook) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Project 02: 7 Columns */}
            {filteredProjects[1] && (
              <div
                onClick={() => setActiveModalProject(filteredProjects[1])}
                data-cursor="view"
                className="lg:col-span-7 group relative cursor-pointer overflow-hidden rounded-3xl border border-[#A78BFA]/40 bg-[#4C1D95] transition-all duration-700 hover:border-[#DDD6FE] hover:shadow-[0_25px_60px_rgba(59,7,100,0.6)]"
              >
                <div className="relative aspect-16/10 sm:aspect-16/11 w-full overflow-hidden bg-[#3B0764]">
                  <Image
                    src={filteredProjects[1].heroImage}
                    alt={filteredProjects[1].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764] via-[#3B0764]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-[#7C3AED]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <span className="self-start rounded-full border border-[#A78BFA]/40 bg-[#3B0764]/80 px-3 py-1 text-xs font-mono text-[#DDD6FE] backdrop-blur-md font-semibold">
                      02 // MANIFESTO ART
                    </span>

                    <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-block rounded-md border border-[#A78BFA]/40 bg-[#3B0764]/70 px-2.5 py-0.5 text-[10px] font-mono text-[#EDE9FE] uppercase tracking-wider backdrop-blur-md">
                        {filteredProjects[1].category}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                        {filteredProjects[1].title}
                      </h3>
                      <p className="text-xs text-[#EDE9FE]/85 font-sans font-normal line-clamp-2">
                        {filteredProjects[1].tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Project 03: 5 Columns with Staggered Top Margin */}
            {filteredProjects[2] && (
              <div
                onClick={() => setActiveModalProject(filteredProjects[2])}
                data-cursor="view"
                className="lg:col-span-5 lg:mt-16 group relative cursor-pointer overflow-hidden rounded-3xl border border-[#A78BFA]/40 bg-[#4C1D95] transition-all duration-700 hover:border-[#DDD6FE] hover:shadow-[0_25px_60px_rgba(59,7,100,0.6)]"
              >
                <div className="relative aspect-4/5 w-full overflow-hidden bg-[#3B0764]">
                  <Image
                    src={filteredProjects[2].heroImage}
                    alt={filteredProjects[2].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764] via-[#3B0764]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-[#7C3AED]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <span className="self-start rounded-full border border-[#A78BFA]/40 bg-[#3B0764]/80 px-3 py-1 text-xs font-mono text-[#DDD6FE] backdrop-blur-md font-semibold">
                      03 // LOOKBOOK
                    </span>

                    <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-block rounded-md border border-[#A78BFA]/40 bg-[#3B0764]/70 px-2.5 py-0.5 text-[10px] font-mono text-[#EDE9FE] uppercase tracking-wider backdrop-blur-md">
                        {filteredProjects[2].category}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {filteredProjects[2].title}
                      </h3>
                      <p className="text-xs text-[#EDE9FE]/85 font-sans font-normal line-clamp-2">
                        {filteredProjects[2].tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PROJECT 04: Large Portrait / Editorial Layout (Culinary Food Cinema) + PROJECT 05 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Project 04: 5 Columns Portrait Editorial Layout */}
            {filteredProjects[3] && (
              <div
                onClick={() => setActiveModalProject(filteredProjects[3])}
                data-cursor="view"
                className="lg:col-span-5 group relative cursor-pointer overflow-hidden rounded-3xl border border-[#A78BFA]/40 bg-[#4C1D95] transition-all duration-700 hover:border-[#DDD6FE] hover:shadow-[0_25px_60px_rgba(59,7,100,0.6)]"
              >
                <div className="relative aspect-3/4 sm:aspect-4/5 w-full overflow-hidden bg-[#3B0764]">
                  <Image
                    src={filteredProjects[3].heroImage}
                    alt={filteredProjects[3].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764] via-[#3B0764]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-[#7C3AED]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <span className="self-start rounded-full border border-[#A78BFA]/40 bg-[#3B0764]/80 px-3 py-1 text-xs font-mono text-[#DDD6FE] backdrop-blur-md font-semibold">
                      04 // CULINARY EDITORIAL
                    </span>

                    <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-block rounded-md border border-[#A78BFA]/40 bg-[#3B0764]/70 px-2.5 py-0.5 text-[10px] font-mono text-[#EDE9FE] uppercase tracking-wider backdrop-blur-md">
                        {filteredProjects[3].category}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {filteredProjects[3].title}
                      </h3>
                      <p className="text-xs text-[#EDE9FE]/85 font-sans font-normal line-clamp-2">
                        {filteredProjects[3].tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Project 05: 7 Columns Studio Workflow */}
            {filteredProjects[4] && (
              <div
                onClick={() => setActiveModalProject(filteredProjects[4])}
                data-cursor="view"
                className="lg:col-span-7 lg:mt-12 group relative cursor-pointer overflow-hidden rounded-3xl border border-[#A78BFA]/40 bg-[#4C1D95] transition-all duration-700 hover:border-[#DDD6FE] hover:shadow-[0_25px_60px_rgba(59,7,100,0.6)]"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#3B0764]">
                  <Image
                    src={filteredProjects[4].heroImage}
                    alt={filteredProjects[4].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764] via-[#3B0764]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-[#7C3AED]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <span className="self-start rounded-full border border-[#A78BFA]/40 bg-[#3B0764]/80 px-3 py-1 text-xs font-mono text-[#DDD6FE] backdrop-blur-md font-semibold">
                      05 // STUDIO MASTERY
                    </span>

                    <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-block rounded-md border border-[#A78BFA]/40 bg-[#3B0764]/70 px-2.5 py-0.5 text-[10px] font-mono text-[#EDE9FE] uppercase tracking-wider backdrop-blur-md">
                        {filteredProjects[4].category}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                        {filteredProjects[4].title}
                      </h3>
                      <p className="text-xs text-[#EDE9FE]/85 font-sans font-normal line-clamp-2">
                        {filteredProjects[4].tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PROJECT 06: Full-Width Heritage Wedding Cinema */}
          {filteredProjects[5] && (
            <div
              onClick={() => setActiveModalProject(filteredProjects[5])}
              data-cursor="view"
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#A78BFA]/40 bg-[#4C1D95] transition-all duration-700 hover:border-[#DDD6FE] hover:shadow-[0_25px_60px_rgba(59,7,100,0.6)]"
            >
              <div className="relative aspect-16/9 sm:aspect-21/9 w-full overflow-hidden bg-[#3B0764]">
                <Image
                  src={filteredProjects[5].heroImage}
                  alt={filteredProjects[5].title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764] via-[#3B0764]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-[#7C3AED]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#A78BFA]/40 bg-[#3B0764]/80 px-3.5 py-1 text-xs font-mono text-[#DDD6FE] backdrop-blur-md font-semibold">
                      06 // @VERVEO_WEDDINGS
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4C1D95] border border-[#A78BFA]/50 text-white font-grotesk text-xs font-bold tracking-wider shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:border-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-2 max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="inline-block rounded-md border border-[#A78BFA]/40 bg-[#3B0764]/70 px-2.5 py-0.5 text-[11px] font-mono text-[#EDE9FE] uppercase tracking-wider backdrop-blur-md">
                      {filteredProjects[5].category}
                    </span>
                    <h3 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
                      {filteredProjects[5].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EDE9FE]/85 font-sans font-normal line-clamp-2">
                      {filteredProjects[5].tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </section>
  );
}
