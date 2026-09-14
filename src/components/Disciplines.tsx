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
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-[#5B21B6] via-[#6D28D9] to-[#5B21B6] text-white border-t border-[#A78BFA]/30 overflow-hidden select-none"
    >
      {/* Background ambient lighting in purple (radial-gradient, 0% blur overhead) */}
      <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.4)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.35)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        {/* Magazine Header Meta */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#A78BFA]/25 pb-8 mb-10 lg:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#DDD6FE] font-bold tracking-wider">
                02 // CREATIVE SPECTRUM
              </span>
              <span className="text-[#C4B5FD]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#EDE9FE]/80 uppercase">
                Art-Directed Magazine Disciplines
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFFFFF] tracking-tight">
              THE VERVEO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EDE9FE] to-[#DDD6FE]">
                DISCIPLINES.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm text-[#EDE9FE]/85 font-sans font-light leading-relaxed">
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
                      ? "bg-[#7C3AED] text-white border border-[#DDD6FE] shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                      : "bg-[#4C1D95]/80 text-[#EDE9FE] border border-[#A78BFA]/30 hover:border-[#DDD6FE] hover:text-white"
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
                      ? "bg-[#4C1D95]/90 border border-[#A78BFA]/40 shadow-[0_10px_30px_rgba(59,7,100,0.5)]"
                      : "hover:bg-[#4C1D95]/40 border border-transparent"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Number & Headline */}
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold transition-colors duration-300 ${
                          isSelected ? "text-[#FFFFFF]" : "text-[#DDD6FE]"
                        }`}
                      >
                        {item.number}
                      </span>
                      <div>
                        <h3
                          className={`font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight transition-all duration-300 ${
                            isSelected
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EDE9FE] to-[#DDD6FE] translate-x-2"
                              : "text-white group-hover:text-white group-hover:translate-x-1"
                          }`}
                        >
                          {item.word}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[#EDE9FE]/80 font-sans font-light">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Action Arrow / Indicator */}
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isSelected
                            ? "border-[#DDD6FE] bg-[#7C3AED] text-white scale-110 shadow-[0_0_15px_rgba(124,58,237,0.6)]"
                            : "border-[#A78BFA]/30 bg-[#4C1D95]/60 text-[#EDE9FE] group-hover:border-[#DDD6FE] group-hover:bg-[#7C3AED] group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile-Only Preview Thumbnail when Selected */}
                  {isSelected && (
                    <div className="mt-4 lg:hidden rounded-xl overflow-hidden border border-[#A78BFA]/30 bg-[#3B0764] aspect-16/9 relative shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.word}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764]/95 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                        <span>{item.title}</span>
                        <span className="text-[#DDD6FE] font-bold">{item.number} // 06</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Editorial Showcase Frame (Col 8-12) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative rounded-3xl overflow-hidden border border-[#A78BFA]/40 bg-[#4C1D95]/90 p-6 shadow-[0_25px_60px_rgba(59,7,100,0.5)] backdrop-blur-xl">
              {/* Top Header inside Frame */}
              <div className="flex items-center justify-between pb-4 border-b border-[#A78BFA]/20">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#DDD6FE] animate-pulse" />
                  <span className="font-mono text-xs text-[#DDD6FE] font-bold uppercase tracking-widest">
                    DISCIPLINE SHOWCASE // {activeItem.number}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#EDE9FE]/70">
                  {selectedIndex + 1} of {DISCIPLINES.length}
                </span>
              </div>

              {/* Main Visual Image Display with Aspect Ratio 4/3 */}
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-[#A78BFA]/30 bg-[#3B0764] mt-5 group shadow-inner">
                <Image
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.word}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764] via-[#3B0764]/30 to-transparent opacity-80" />

                {/* Visual Label Tag */}
                <div className="absolute top-3 right-3 rounded-full bg-[#3B0764]/80 backdrop-blur-md px-3 py-1 border border-[#A78BFA]/40 text-[10px] font-mono text-[#EDE9FE]">
                  VERVEO&reg; EXHIBIT
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-[11px] text-[#DDD6FE] font-bold uppercase tracking-wider block">
                    {activeItem.number} &bull; {activeItem.word}
                  </span>
                  <h4 className="font-display text-xl font-black text-[#FFFFFF] tracking-tight mt-0.5">
                    {activeItem.title}
                  </h4>
                </div>
              </div>

              {/* Content Description */}
              <p className="mt-5 text-sm text-[#EDE9FE]/90 font-sans font-light leading-relaxed">
                {activeItem.description}
              </p>

              {/* Deliverables Pills */}
              <div className="mt-4 pt-4 border-t border-[#A78BFA]/20">
                <span className="font-mono text-[10px] text-[#DDD6FE] uppercase tracking-wider font-semibold block mb-2.5">
                  CORE DELIVERABLES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-[#3B0764]/80 border border-[#A78BFA]/30 px-2.5 py-1 text-[11px] font-mono text-[#EDE9FE]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#A78BFA]/20 flex items-center justify-between">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] px-5 py-2.5 text-xs font-grotesk font-bold tracking-wider text-white shadow-md hover:scale-105 transition-all"
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
                          ? "w-6 bg-[#DDD6FE]"
                          : "w-2 bg-[#DDD6FE]/30 hover:bg-[#DDD6FE]/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Kinetic Ticker at Bottom */}
        <div className="mt-16 sm:mt-20 overflow-hidden border-y border-[#A78BFA]/20 py-5">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            {[...DISCIPLINES, ...DISCIPLINES].map((d, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="font-display text-sm sm:text-base font-bold tracking-[0.25em] text-[#DDD6FE] uppercase">
                  {d.word}
                </span>
                <span className="text-[#A78BFA]/40">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
