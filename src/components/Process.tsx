"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Compass, Film, Lightbulb, Rocket, Sliders } from "lucide-react";

interface ProcessStep {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  deliverables: string[];
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    name: "DISCOVER",
    subtitle: "Brand Immersion & Cultural Void Diagnostics",
    description: "We interrogate the core commercial reality of your business. What makes you singular? Where is the white space in your market? We extract the emotional truth before writing a single word of script or setting up a light.",
    image: "/user_media/verveo-design-team-1.jpg",
    deliverables: [
      "Brand Audit & Positioning Matrix",
      "Competitor Visual Void Analysis",
      "Target Audience Cultural Profile",
      "Initial Creative Hypothesis"
    ]
  },
  {
    step: "02",
    name: "STRATEGIZE",
    subtitle: "Narrative Arc, Typography & Packaging Architecture",
    description: "The conceptual blueprint. We establish the cinematic moodboards, color science, typographic hierarchy, storyboard scripts, and packaging specs (like custom carriers and cup layouts).",
    image: "/user_media/client_care/client-care-2.jpg",
    deliverables: [
      "Director's Treatment & Script",
      "Color Palette & Typographic System",
      "Cinematic Storyboards & Shot List",
      "Packaging Prototype Specs"
    ]
  },
  {
    step: "03",
    name: "CREATE",
    subtitle: "Principal Cinema Production & Studio Capture",
    description: "Where imagination becomes physical celluloid. From studio sets with high-end lighting to gourmet culinary setups and fashion lookbooks, our directors, DPs, and designers capture high-speed, macro, and narrative assets.",
    image: "/user_media/verveo-cafe-1.jpg",
    deliverables: [
      "4K/8K RAW Production Capture",
      "Culinary & Beverage Macro Shoots",
      "Fashion Model Studio Portfolios",
      "Tactile Stop-Motion & Sticker Assets"
    ]
  },
  {
    step: "04",
    name: "REFINE",
    subtitle: "Masterpiece Retouching, Color Grading & Sound",
    description: "The signature Verveo workflow. In our editing and color suites, we conduct pixel-level retouching in Lightroom and Photoshop, grade in DaVinci Resolve, and engineer bespoke spatial audio and original music.",
    image: "/user_media/verveo-design-team-2.jpg",
    deliverables: [
      "16-Bit Precision Retouched Assets",
      "Theatrical Color Grade (DCI-P3)",
      "Original Music Score & Foley Sound",
      "Multiple Aspect Ratio Cutdowns (16:9, 9:16, 1:1)"
    ]
  },
  {
    step: "05",
    name: "LAUNCH",
    subtitle: "Omnichannel Deployment & Campaign Momentum",
    description: "We deploy the campaign across digital flagships, packaging rollouts, and global social channels. We ensure every asset is optimized for maximum conversion velocity and organic shareability.",
    image: "/user_media/client_care/client-care-6.jpg",
    deliverables: [
      "Physical Packaging Rollout",
      "Social Campaign Asset Package",
      "Press & Launch Media Kit",
      "Performance & Conversion Analytics"
    ]
  }
];

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section
      id="process"
      className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#5B21B6] via-[#6D28D9] to-[#5B21B6] text-white border-t border-[#A78BFA]/30 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#A78BFA]/25 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#DDD6FE] font-bold">06 // THE WORKFLOW</span>
              <span className="text-[#C4B5FD]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#EDE9FE]/80 uppercase">
                End-to-End Method
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
              FROM RAW CONCEPT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EDE9FE] to-[#DDD6FE]">
                TO CULTURAL MASTERPIECE.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#EDE9FE]/85 font-sans font-normal leading-relaxed">
            A battle-tested 5-step creative pipeline that guarantees cinematic excellence on schedule and on budget.
          </p>
        </div>

        {/* Step Navigation Pill Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-2xl border border-[#A78BFA]/35 bg-[#4C1D95] mb-12">
          {STEPS.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs font-grotesk font-bold tracking-wider transition-all duration-300 ${
                activeStepIndex === idx
                  ? "bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.6)] scale-100"
                  : "text-[#EDE9FE]/80 hover:text-white hover:bg-[#6D28D9]"
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">{s.step}</span>
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Detail Panel with Dedicated Visual */}
        <div className="rounded-3xl border border-[#A78BFA]/35 bg-[#4C1D95]/90 p-6 sm:p-10 lg:p-12 shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden border border-[#A78BFA]/30 bg-[#3B0764] shadow-lg">
              <Image
                src={activeStep.image}
                alt={activeStep.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764]/95 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-wider font-bold">
                  STAGE {activeStep.step} // {activeStep.name}
                </span>
                <span className="rounded-full bg-[#3B0764]/80 px-2.5 py-0.5 text-[10px] font-mono text-[#EDE9FE] backdrop-blur-md border border-[#A78BFA]/40">
                  VERVEO METHOD
                </span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-widest font-bold">
                  PHASE {activeStep.step} &bull; {activeStep.subtitle}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {activeStep.name}
                </h3>
              </div>

              <p className="text-base text-[#EDE9FE]/90 font-sans font-normal leading-relaxed">
                {activeStep.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 border-t border-[#A78BFA]/20 pt-6">
                <span className="font-mono text-xs text-[#FFFFFF] tracking-wider uppercase font-semibold block">
                  KEY DELIVERABLES &bull; STAGE {activeStep.step}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#EDE9FE]/85 font-grotesk">
                      <CheckCircle2 className="h-4 w-4 text-[#DDD6FE] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
