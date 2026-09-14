"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface DisciplineItem {
  id: string;
  word: string;
  title: string;
  tagline: string;
  number: string;
  image: string;
  description: string;
  deliverables: string[];
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: "branding",
    word: "BRANDING",
    title: "Living Brand Architecture",
    tagline: "Architecture, packaging & living visual identity systems.",
    number: "01",
    image: "/user_media/verveo-cafe-1.jpg",
    description: "From custom monograms and type systems to physical takeaway carriers and retail environments that turn brands into recognizable cultural icons.",
    deliverables: ["Visual Identity", "Packaging Architecture", "Brand Guidelines", "Signage & Print"]
  },
  {
    id: "campaigns",
    word: "CAMPAIGNS",
    title: "Commercial Film Direction",
    tagline: "Your business doesn't need ads, it needs movies.",
    number: "02",
    image: "/user_media/client_care/client-care-1.jpg",
    description: "Cinematic commercial films shot with anamorphic lenses, authentic emotional tension, original scores, and theatrical color grading.",
    deliverables: ["Commercial Films", "Director's Treatments", "Theatrical Color Grade", "Original Score"]
  },
  {
    id: "content",
    word: "CONTENT",
    title: "Artisan Culinary & Art Cinema",
    tagline: "Visceral food cinema, crispy textures & macro liquid pours.",
    number: "03",
    image: "/user_media/alata-paintings.jpg",
    description: "Sensory food and fine art visual production. Macro liquid velocity, sizzling textures, and gallery-grade art direction that commands attention.",
    deliverables: ["Macro Food Cinema", "Liquid Velocity Pours", "Art Exhibition Curation", "Digital Menu Assets"]
  },
  {
    id: "photography",
    word: "PHOTOGRAPHY",
    title: "High-Fashion & Spatial Portfolios",
    tagline: "High-fashion studio lookbooks & precision medium-format retouching.",
    number: "04",
    image: "/user_media/verveo-cafe-2.jpg",
    description: "Medium-format editorial fashion portfolios, lookbooks, and interior architectural photography finished with pixel-level micro-retouching.",
    deliverables: ["Editorial Lookbooks", "102MP Medium Format", "Micro-Retouching", "Atmospheric Lighting"]
  },
  {
    id: "social",
    word: "SOCIAL",
    title: "Tactile Stop-Motion & Culture",
    tagline: "Frame-by-frame tactile stop-motion, sticker packs & viral reels.",
    number: "05",
    image: "/user_media/verveo-design-team-1.jpg",
    description: "Physical frame-by-frame animation, custom sticker illustrations, and curated story frameworks that break through algorithmic feed fatigue.",
    deliverables: ["Tactile Stop-Motion", "Custom Sticker Packs", "High-Converting Reels", "Feed Frameworks"]
  },
  {
    id: "digital",
    word: "DIGITAL",
    title: "Interactive Digital Flagships",
    tagline: "Interactive flagships & e-commerce experiences built to convert.",
    number: "06",
    image: "/user_media/client_care/client-care-3.jpg",
    description: "Bespoke digital platforms engineered with silky micro-interactions, editorial typography, and high-conversion purchase journeys.",
    deliverables: ["Creative Web Design", "Next.js Flagships", "Fluid Motion Systems", "Conversion Architecture"]
  }
];

export default function Disciplines() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeItem = DISCIPLINES[selectedIndex];

  return (
    <section
      id="disciplines"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#3B155F] text-[#F8F7F3] border-t border-[#7650A8]/20 overflow-hidden select-none"
    >
      {/* Background ambient lighting in purple */}
      <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-[#54227A]/35 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 h-96 w-96 rounded-full bg-[#7650A8]/25 blur-[160px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        {/* Magazine Header Meta */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#7650A8]/20 pb-8 mb-10 lg:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#7650A8] font-bold tracking-wider">
                02 // CREATIVE SPECTRUM
              </span>
              <span className="text-[#7650A8]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#F8F7F3]/70 uppercase">
                Art-Directed Magazine Disciplines
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFFFFF] tracking-tight">
              THE VERVEO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F3] to-[#7650A8]">
                DISCIPLINES.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm text-[#F8F7F3]/80 font-sans font-light leading-relaxed">
              Explore our 6 core studio pillars. Select or hover any discipline to view curated portfolio imagery, creative scope, and deliverables.
            </p>
            {/* Quick Index Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {DISCIPLINES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                    selectedIndex === idx
                      ? "bg-[#54227A] text-white border border-[#7650A8]"
                      : "bg-[#2A0D45]/80 text-[#F8F7F3]/70 border border-[#7650A8]/20 hover:border-[#7650A8]/60 hover:text-white"
                  }`}
                >
                  {item.number} {item.word}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Art-Directed Split Screen Grid: Interactive Rows + Sticky Showcase Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Massive Disciplines List (Col 1-7) */}
          <div className="lg:col-span-7 divide-y divide-[#7650A8]/20 border-y border-[#7650A8]/20">
            {DISCIPLINES.map((item, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => setSelectedIndex(idx)}
                  className={`group relative py-7 sm:py-9 px-4 sm:px-6 transition-all duration-300 cursor-pointer rounded-2xl ${
                    isSelected
                      ? "bg-[#2A0D45]/90 border border-[#7650A8]/40 shadow-[0_10px_30px_rgba(16,8,23,0.5)]"
                      : "hover:bg-[#2A0D45]/40 border border-transparent"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Number & Headline */}
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold transition-colors duration-300 ${
                          isSelected ? "text-[#FFFFFF]" : "text-[#7650A8]"
                        }`}
                      >
                        {item.number}
                      </span>
                      <div>
                        <h3
                          className={`font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight transition-all duration-300 ${
                            isSelected
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F3] to-[#7650A8] translate-x-2"
                              : "text-[#F8F7F3] group-hover:text-white group-hover:translate-x-1"
                          }`}
                        >
                          {item.word}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[#F8F7F3]/75 font-sans font-light">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Action Arrow / Indicator */}
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isSelected
                            ? "border-[#7650A8] bg-[#54227A] text-white scale-110 shadow-[0_0_15px_rgba(118,80,168,0.5)]"
                            : "border-[#7650A8]/30 bg-[#2A0D45]/60 text-[#F8F7F3]/70 group-hover:border-[#7650A8] group-hover:bg-[#54227A] group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile-Only Preview Thumbnail when Selected */}
                  {isSelected && (
                    <div className="mt-4 lg:hidden rounded-xl overflow-hidden border border-[#7650A8]/30 bg-[#100817] aspect-16/9 relative shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.word}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#F8F7F3]">
                        <span>{item.title}</span>
                        <span className="text-[#7650A8] font-bold">{item.number} // 06</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Editorial Showcase Frame (Col 8-12) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative rounded-3xl overflow-hidden border border-[#7650A8]/40 bg-[#2A0D45] p-6 shadow-[0_25px_60px_rgba(16,8,23,0.7)] backdrop-blur-xl">
              {/* Top Header inside Frame */}
              <div className="flex items-center justify-between pb-4 border-b border-[#7650A8]/20">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7650A8] animate-pulse" />
                  <span className="font-mono text-xs text-[#7650A8] font-bold uppercase tracking-widest">
                    DISCIPLINE SHOWCASE // {activeItem.number}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#F8F7F3]/60">
                  {selectedIndex + 1} of {DISCIPLINES.length}
                </span>
              </div>

              {/* Main Visual Image Display with Aspect Ratio 4/3 */}
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#7650A8]/30 bg-[#100817] mt-5 group shadow-inner">
                <Image
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.word}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100817] via-[#100817]/30 to-transparent opacity-80" />

                {/* Visual Label Tag */}
                <div className="absolute top-3 right-3 rounded-full bg-[#100817]/80 backdrop-blur-md px-3 py-1 border border-[#7650A8]/40 text-[10px] font-mono text-[#F8F7F3]">
                  VERVEO&reg; EXHIBIT
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-[11px] text-[#7650A8] font-bold uppercase tracking-wider block">
                    {activeItem.number} &bull; {activeItem.word}
                  </span>
                  <h4 className="font-display text-xl font-black text-[#FFFFFF] tracking-tight mt-0.5">
                    {activeItem.title}
                  </h4>
                </div>
              </div>

              {/* Content Description */}
              <p className="mt-5 text-sm text-[#F8F7F3]/85 font-sans font-light leading-relaxed">
                {activeItem.description}
              </p>

              {/* Deliverables Pills */}
              <div className="mt-4 pt-4 border-t border-[#7650A8]/20">
                <span className="font-mono text-[10px] text-[#7650A8] uppercase tracking-wider font-semibold block mb-2.5">
                  CORE DELIVERABLES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-[#100817]/70 border border-[#7650A8]/30 px-2.5 py-1 text-[11px] font-mono text-[#F8F7F3]/90"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#7650A8]/20 flex items-center justify-between">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#54227A] to-[#7650A8] px-5 py-2.5 text-xs font-grotesk font-bold tracking-wider text-white shadow-md hover:scale-105 transition-all"
                >
                  <span>EXPLORE {activeItem.word}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-1.5">
                  {DISCIPLINES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setSelectedIndex(dotIdx)}
                      aria-label={`Jump to discipline ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        selectedIndex === dotIdx
                          ? "w-6 bg-[#7650A8]"
                          : "w-2 bg-[#7650A8]/30 hover:bg-[#7650A8]/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Kinetic Ticker at Bottom */}
        <div className="mt-16 sm:mt-20 overflow-hidden border-y border-[#7650A8]/20 py-5">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            {[...DISCIPLINES, ...DISCIPLINES].map((d, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="font-display text-sm sm:text-base font-bold tracking-[0.25em] text-[#7650A8] uppercase">
                  {d.word}
                </span>
                <span className="text-[#7650A8]/40">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
