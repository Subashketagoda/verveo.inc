"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  bgGlow: string;
  deliverables: string[];
}

const STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Brand Immersion & Void Diagnostics",
    tagline: "Uncovering the truth before writing a single frame.",
    description: "We dissect your current market positioning, competitor visual voids, and audience cultural psychology. We don't make assumptions; we extract the singular emotional hook that makes your brand distinct.",
    image: "/user_media/verveo-design-team-1.jpg",
    bgGlow: "#7C3AED",
    deliverables: [
      "Competitive Void & Trend Matrix",
      "Audience Cultural Profile",
      "Core Value Proposition Script",
      "Initial Creative Hypothesis"
    ]
  },
  {
    number: "02",
    title: "STRATEGIZE",
    subtitle: "Aesthetic Blueprint & Architecture",
    tagline: "Building the visual rules before setting up lights.",
    description: "The conceptual blueprint. Establishing cinematic moodboards, color science, typographic hierarchy, storyboard scripts, and packaging architecture (like bespoke cup carriers and physical prototypes).",
    image: "/user_media/client_care/client-care-2.jpg",
    bgGlow: "#8B5CF6",
    deliverables: [
      "Director's Treatment & Shot Lists",
      "Color Palette & Typographic Hierarchy",
      "Custom Packaging Blueprint (Carriers & Cups)",
      "Motion Storyboards & Audio Direction"
    ]
  },
  {
    number: "03",
    title: "CREATE",
    subtitle: "Principal Cinema Production & Studio Sets",
    tagline: "Where concepts become physical, high-definition celluloid.",
    description: "From custom studio sets and diffused parabolic lighting to high-speed macro food setups and fashion model lookbooks. Our directors, DPs, and stylists capture 4K/8K RAW footage built to command feeds.",
    image: "/user_media/verveo-cafe-1.jpg",
    bgGlow: "#6D28D9",
    deliverables: [
      "4K/8K Anamorphic Production Capture",
      "Macro Beverage & Culinary Pours",
      "Studio Model Fashion Lookbooks",
      "Tactile Stop-Motion & Sticker Assets"
    ]
  },
  {
    number: "04",
    title: "REFINE",
    subtitle: "The Signature Verveo Masterpiece Suite",
    tagline: "From flat studio sensor capture to an editorial masterpiece.",
    description: "Our proprietary post-production pipeline. Pixel-level micro-retouching in Lightroom and Photoshop, cinema-grade color grading in DaVinci Resolve, and custom spatial audio engineering.",
    image: "/user_media/verveo-design-team-2.jpg",
    bgGlow: "#9333EA",
    deliverables: [
      "16-Bit Precision Retouched Master Plates",
      "Theatrical DCI-P3 Color Grading",
      "Original Musical Score & Foley Audio",
      "Omnichannel Cutdowns (16:9, 9:16, 1:1, 4:5)"
    ]
  },
  {
    number: "05",
    title: "LAUNCH",
    subtitle: "Omnichannel Deployment & Market Momentum",
    tagline: "Releasing the work to dominate culture.",
    description: "We deploy the campaign across digital flagships, physical packaging rollouts, and viral social distribution. Ensuring every touchpoint converts viewers into lifelong brand advocates.",
    image: "/user_media/client_care/client-care-6.jpg",
    bgGlow: "#581C87",
    deliverables: [
      "Physical Packaging Production Rollout",
      "Social Campaign Asset Suite & Reels",
      "Press Kit & Digital Flagship Assets",
      "Performance & Engagement Telemetry"
    ]
  }
];

export default function ProcessPage() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const currentStage = STAGES[activeStageIdx];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5B21B6] via-[#6D28D9] to-[#5B21B6] text-[#F8F7F3] flex flex-col justify-between overflow-hidden">
      <Navbar />

      {/* Dynamic Ambient Background reacting to current stage */}
      <div className="fixed inset-0 pointer-events-none -z-10 transition-all duration-1000">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[200px] transition-all duration-1000 opacity-40 bg-[#8B5CF6]/30"
        />
      </div>

      <div className="pt-32 sm:pt-44 pb-20 sm:pb-24 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full space-y-10 sm:space-y-12">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#A78BFA]/20 pb-6 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#DDD6FE] font-bold">METHODOLOGY // 04</span>
              <span className="text-[#A78BFA]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.3em] text-[#F8F7F3]/70 uppercase">
                Interactive Scroll Story
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-6xl font-black text-[#FFFFFF] leading-tight">
              THE 5-STAGE WORKFLOW.
            </h1>
          </div>

          <div className="text-xs font-mono text-[#DDD6FE] tracking-widest uppercase font-semibold">
            STAGE {currentStage.number} OF 05
          </div>
        </div>

        {/* Vertical / Horizontal Progress Rail */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-2xl border border-[#A78BFA]/30 bg-[#4C1D95]/80 backdrop-blur-md">
          {STAGES.map((stage, idx) => {
            const isActive = activeStageIdx === idx;

            return (
              <button
                key={stage.number}
                onClick={() => setActiveStageIdx(idx)}
                className={`min-w-0 py-2.5 sm:py-3 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-grotesk font-bold tracking-wider transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 min-h-[44px] ${
                  isActive
                    ? "bg-white text-[#5B21B6] shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-100"
                    : "text-[#F8F7F3]/80 hover:text-white hover:bg-[#6D28D9]/60"
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">{stage.number}</span>
                <span className="truncate">{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Full-Viewport Takeover Stage Card */}
        <div className="rounded-3xl border border-[#A78BFA]/30 bg-[#4C1D95]/90 p-8 sm:p-14 lg:p-16 shadow-xl backdrop-blur-md transition-all duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Oversized Typography & Narrative (Col 1-7) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-widest font-bold block">
                  PHASE {currentStage.number} // {currentStage.subtitle}
                </span>
                <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#FFFFFF] tracking-tight leading-[0.92]">
                  {currentStage.title}
                </h2>
                <p className="font-grotesk text-sm sm:text-base text-[#DDD6FE] italic font-medium">
                  &ldquo;{currentStage.tagline}&rdquo;
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#F8F7F3]/90 font-sans font-normal leading-relaxed max-w-xl">
                {currentStage.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-4 border-t border-[#A78BFA]/20 pt-6">
                <span className="font-mono text-xs text-[#FFFFFF] uppercase tracking-wider font-semibold block">
                  STAGE {currentStage.number} DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStage.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-grotesk text-[#F8F7F3]/90">
                      <CheckCircle2 className="h-4 w-4 text-[#DDD6FE] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-4 pt-4">
                {activeStageIdx > 0 && (
                  <button
                    onClick={() => setActiveStageIdx(activeStageIdx - 1)}
                    className="rounded-full border border-[#A78BFA]/30 bg-[#3B0764] px-6 py-3 text-xs font-grotesk text-[#F8F7F3] hover:bg-[#6D28D9] hover:text-white transition-colors shadow-xs"
                  >
                    &larr; PREVIOUS STAGE
                  </button>
                )}
                {activeStageIdx < STAGES.length - 1 ? (
                  <button
                    onClick={() => setActiveStageIdx(activeStageIdx + 1)}
                    className="group inline-flex items-center gap-2 rounded-full bg-white text-[#5B21B6] px-7 py-3 font-grotesk text-xs font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:bg-[#DDD6FE] hover:scale-105 transition-transform"
                  >
                    <span>NEXT STAGE</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-[#5B21B6] px-7 py-3 font-grotesk text-xs font-bold shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:bg-[#DDD6FE] hover:scale-105 transition-transform"
                  >
                    <span>START YOUR PROJECT</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column: High-Impact Visual Takeover (Col 8-12) */}
            <div className="lg:col-span-5 relative aspect-4/5 sm:aspect-16/11 lg:aspect-4/5 rounded-3xl overflow-hidden border border-[#A78BFA]/30 bg-[#3B0764] shadow-xl">
              <Image
                key={currentStage.number}
                src={currentStage.image}
                alt={currentStage.title}
                fill
                priority
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764]/90 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-wider font-bold">
                    STAGE {currentStage.number} VISUAL
                  </span>
                  <p className="font-display text-lg font-bold text-white mt-1">
                    {currentStage.subtitle}
                  </p>
                </div>
                <span className="rounded-full bg-[#3B0764]/90 border border-[#A78BFA]/40 px-3 py-1 font-mono text-[11px] text-[#DDD6FE] backdrop-blur-md">
                  4K MASTER
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
