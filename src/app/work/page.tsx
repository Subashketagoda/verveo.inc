"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projects";

const FILTER_CATEGORIES = [
  "ALL",
  "BRANDING",
  "CAMPAIGNS",
  "CONTENT",
  "PHOTOGRAPHY",
  "DIGITAL"
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "BRANDING") return p.category.includes("Brand") || p.category.includes("Packaging") || p.category.includes("Manifesto");
    if (activeFilter === "CAMPAIGNS") return p.category.includes("Cinema") || p.title.includes("Installation") || p.category.includes("Campaign");
    if (activeFilter === "CONTENT") return p.category.includes("Culinary") || p.category.includes("Food");
    if (activeFilter === "PHOTOGRAPHY") return p.category.includes("Fashion") || p.category.includes("Photography") || p.category.includes("Retouching");
    if (activeFilter === "DIGITAL") return p.category.includes("Identity") || p.deliverables.some(d => d.includes("Digital"));
    return true;
  });

  return (
    <main className="min-h-screen bg-[#100817] text-[#F8F7F3] flex flex-col justify-between">
      <Navbar />

      <div className="pt-32 sm:pt-44 pb-20 sm:pb-24 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full space-y-12 sm:space-y-24 bg-[#100817] text-[#F8F7F3]">
        {/* Magazine Editorial Opening */}
        <div className="border-b border-[#7650A8]/20 pb-10 sm:pb-16 space-y-5 sm:space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#7650A8] font-bold">INDEX // 01</span>
            <span className="text-[#7650A8]/40">/</span>
            <span className="text-xs font-grotesk tracking-[0.3em] text-[#F8F7F3]/60 uppercase">
              The Curated Creative Archive
            </span>
          </div>

          {/* Huge Title: SELECTED WORK */}
          <h1 className="font-display text-4xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black text-[#FFFFFF] tracking-tight leading-[0.92] sm:leading-[0.85]">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7650A8] via-[#F8F7F3] to-[#7650A8]">
              WORK.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pt-4 sm:pt-6">
            <p className="max-w-xl text-sm sm:text-xl font-sans text-[#F8F7F3]/70 font-light leading-relaxed">
              Every project is an exploration of cultural resonance. Spanning complete brand packaging systems, high-fashion lookbooks, macro culinary cinema, and 35mm wedding heirlooms.
            </p>

            <span className="font-mono text-xs text-[#7650A8] uppercase tracking-widest font-semibold">
              {filteredProjects.length} ARCHIVAL CASE STUDIES
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 border-b border-[#7650A8]/20 pb-8">
          <div className="flex items-center gap-2 mr-2 text-xs font-mono text-[#F8F7F3]/60">
            <Filter className="h-3.5 w-3.5 text-[#7650A8]" />
            <span className="hidden sm:inline">FILTER DISCIPLINE:</span>
          </div>

          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-grotesk font-bold tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#54227A] text-white shadow-[0_0_20px_rgba(84,34,122,0.5)] scale-105"
                  : "border border-[#7650A8]/20 bg-[#2A0D45] text-[#F8F7F3]/70 hover:border-[#7650A8]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="space-y-16 sm:space-y-24">
          {/* Card 1: Full-Width Campaign (ALATA) */}
          {filteredProjects[0] && (
            <Link
              href={`/projects/${filteredProjects[0].slug}`}
              data-cursor="view"
              className="group block relative overflow-hidden rounded-3xl border border-[#7650A8]/25 bg-[#2A0D45] transition-all duration-700 hover:border-[#7650A8]/70 hover:shadow-[0_25px_60px_rgba(59,21,95,0.4)]"
            >
              <div className="relative aspect-16/9 sm:aspect-21/9 w-full overflow-hidden bg-[#080509]">
                <Image
                  src={filteredProjects[0].heroImage}
                  alt={filteredProjects[0].title}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100817] via-[#100817]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-[#54227A]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen pointer-events-none" />

                <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#7650A8]/30 bg-[#100817]/80 px-3.5 py-1 text-xs font-mono text-[#7650A8] backdrop-blur-md">
                      FULL-WIDTH EDITORIAL // {filteredProjects[0].year}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#54227A] text-white font-grotesk text-xs font-bold tracking-wider shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7650A8]">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-3 max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="inline-block rounded-md border border-[#7650A8]/40 bg-[#54227A]/30 px-2.5 py-0.5 text-[11px] font-mono text-[#F8F7F3] uppercase tracking-wider backdrop-blur-md">
                      {filteredProjects[0].category}
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                      {filteredProjects[0].title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#F8F7F3]/70 font-sans font-light line-clamp-2">
                      {filteredProjects[0].tagline}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Cards 2 & 3: Asymmetric Staggered Pair (Portrait + Horizontal) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Card 2: 7 Columns Horizontal */}
            {filteredProjects[1] && (
              <Link
                href={`/projects/${filteredProjects[1].slug}`}
                data-cursor="view"
                className="lg:col-span-7 group block relative overflow-hidden rounded-3xl border border-[#7650A8]/25 bg-[#2A0D45] transition-all duration-700 hover:border-[#7650A8]/70 hover:shadow-[0_25px_60px_rgba(59,21,95,0.4)]"
              >
                <div className="relative aspect-16/10 sm:aspect-16/11 w-full overflow-hidden bg-[#080509]">
                  <Image
                    src={filteredProjects[1].heroImage}
                    alt={filteredProjects[1].title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100817] via-[#100817]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <span className="self-start rounded-full border border-[#7650A8]/30 bg-[#100817]/80 px-3 py-1 text-xs font-mono text-[#7650A8] backdrop-blur-md">
                      MANIFESTO ART // {filteredProjects[1].year}
                    </span>

                    <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-block rounded-md border border-[#7650A8]/40 bg-[#54227A]/30 px-2.5 py-0.5 text-[10px] font-mono text-[#F8F7F3] uppercase tracking-wider backdrop-blur-md">
                        {filteredProjects[1].category}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                        {filteredProjects[1].title}
                      </h3>
                      <p className="text-xs text-[#F8F7F3]/70 font-sans font-light line-clamp-2">
                        {filteredProjects[1].tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Card 3: 5 Columns Portrait / Magazine Format */}
            {filteredProjects[2] && (
              <Link
                href={`/projects/${filteredProjects[2].slug}`}
                data-cursor="view"
                className="lg:col-span-5 lg:mt-16 group block relative overflow-hidden rounded-3xl border border-[#7650A8]/25 bg-[#2A0D45] transition-all duration-700 hover:border-[#7650A8]/70 hover:shadow-[0_25px_60px_rgba(59,21,95,0.4)]"
              >
                <div className="relative aspect-3/4 sm:aspect-4/5 w-full overflow-hidden bg-[#080509]">
                  <Image
                    src={filteredProjects[2].heroImage}
                    alt={filteredProjects[2].title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100817] via-[#100817]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <span className="self-start rounded-full border border-[#7650A8]/30 bg-[#100817]/80 px-3 py-1 text-xs font-mono text-[#7650A8] backdrop-blur-md">
                      LOOKBOOK PORTFOLIO
                    </span>

                    <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-block rounded-md border border-[#7650A8]/40 bg-[#54227A]/30 px-2.5 py-0.5 text-[10px] font-mono text-[#F8F7F3] uppercase tracking-wider backdrop-blur-md">
                        {filteredProjects[2].category}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {filteredProjects[2].title}
                      </h3>
                      <p className="text-xs text-[#F8F7F3]/70 font-sans font-light line-clamp-2">
                        {filteredProjects[2].tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Cards 4 & 5: Portrait Editorial + Small Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Card 4: 5 Columns Portrait Food Cinema */}
            {filteredProjects[3] && (
              <Link
                href={`/projects/${filteredProjects[3].slug}`}
                data-cursor="view"
                className="lg:col-span-5 group block relative overflow-hidden rounded-3xl border border-[#7650A8]/25 bg-[#2A0D45] transition-all duration-700 hover:border-[#7650A8]/70 hover:shadow-[0_25px_60px_rgba(59,21,95,0.4)]"
              >
                <div className="relative aspect-4/5 w-full overflow-hidden bg-[#080509]">
                  <Image
                    src={filteredProjects[3].heroImage}
                    alt={filteredProjects[3].title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100817] via-[#100817]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <span className="self-start rounded-full border border-[#7650A8]/30 bg-[#100817]/80 px-3 py-1 text-xs font-mono text-[#7650A8] backdrop-blur-md">
                      CULINARY CINEMA
                    </span>

                    <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-block rounded-md border border-[#7650A8]/40 bg-[#54227A]/30 px-2.5 py-0.5 text-[10px] font-mono text-[#F8F7F3] uppercase tracking-wider backdrop-blur-md">
                        {filteredProjects[3].category}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {filteredProjects[3].title}
                      </h3>
                      <p className="text-xs text-[#F8F7F3]/70 font-sans font-light line-clamp-2">
                        {filteredProjects[3].tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Card 5: 7 Columns Studio Workflow */}
            {filteredProjects[4] && (
              <Link
                href={`/projects/${filteredProjects[4].slug}`}
                data-cursor="view"
                className="lg:col-span-7 lg:mt-12 group block relative overflow-hidden rounded-3xl border border-[#7650A8]/25 bg-[#2A0D45] transition-all duration-700 hover:border-[#7650A8]/70 hover:shadow-[0_25px_60px_rgba(59,21,95,0.4)]"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#080509]">
                  <Image
                    src={filteredProjects[4].heroImage}
                    alt={filteredProjects[4].title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100817] via-[#100817]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <span className="self-start rounded-full border border-[#7650A8]/30 bg-[#100817]/80 px-3 py-1 text-xs font-mono text-[#7650A8] backdrop-blur-md">
                      STUDIO WORKFLOW
                    </span>

                    <div className="space-y-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <span className="inline-block rounded-md border border-[#7650A8]/40 bg-[#54227A]/30 px-2.5 py-0.5 text-[10px] font-mono text-[#F8F7F3] uppercase tracking-wider backdrop-blur-md">
                        {filteredProjects[4].category}
                      </span>
                      <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                        {filteredProjects[4].title}
                      </h3>
                      <p className="text-xs text-[#F8F7F3]/70 font-sans font-light line-clamp-2">
                        {filteredProjects[4].tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Card 6: Full-Width Heritage Weddings */}
          {filteredProjects[5] && (
            <Link
              href={`/projects/${filteredProjects[5].slug}`}
              data-cursor="view"
              className="group block relative overflow-hidden rounded-3xl border border-[#7650A8]/25 bg-[#2A0D45] transition-all duration-700 hover:border-[#7650A8]/70 hover:shadow-[0_25px_60px_rgba(59,21,95,0.4)]"
            >
              <div className="relative aspect-16/9 sm:aspect-21/9 w-full overflow-hidden bg-[#080509]">
                <Image
                  src={filteredProjects[5].heroImage}
                  alt={filteredProjects[5].title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100817] via-[#100817]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#7650A8]/30 bg-[#100817]/80 px-3.5 py-1 text-xs font-mono text-[#7650A8] backdrop-blur-md">
                      LUXURY WEDDINGS // @VERVEO_WEDDINGS
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#54227A] text-white font-grotesk text-xs font-bold tracking-wider shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7650A8]">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-3 max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="inline-block rounded-md border border-[#7650A8]/40 bg-[#54227A]/30 px-2.5 py-0.5 text-[11px] font-mono text-[#F8F7F3] uppercase tracking-wider backdrop-blur-md">
                      {filteredProjects[5].category}
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                      {filteredProjects[5].title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#F8F7F3]/70 font-sans font-light line-clamp-2">
                      {filteredProjects[5].tagline}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
