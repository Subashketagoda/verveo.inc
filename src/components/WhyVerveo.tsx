"use client";

import { Sparkles, Film, Compass, Layers, Trophy } from "lucide-react";

const PRINCIPLES = [
  {
    number: "01",
    title: "STORIES OVER ADS",
    quote: "Your business doesn't need ads, it needs movies.",
    description: "Audiences have developed immunity to standard promotional ads. We structure every commercial and campaign with authentic narrative tension, cinematic lighting, and emotional stakes that demand attention.",
    icon: Film,
    metric: "4.2x Retention"
  },
  {
    number: "02",
    title: "CRAFTED TO PERFECTION",
    quote: "From simple studio photo to a Verveo masterpiece.",
    description: "We don't do 'good enough'. Our studio pipeline leverages high-end medium format cinema cameras, DaVinci Resolve color suites, and precision pixel-level retouching so your brand stands on global billboards.",
    icon: Sparkles,
    metric: "16-Bit Precision"
  },
  {
    number: "03",
    title: "UNCOMPROMISING IDENTITY",
    quote: "From brand architecture to custom packaging.",
    description: "A logo is nothing without a coherent packaging, typographic, and motion ecosystem. We architect holistic brand systems—like the ALATA rollout—that command instant recognition.",
    icon: Compass,
    metric: "100% Bespoke"
  },
  {
    number: "04",
    title: "MULTI-DISCIPLINARY AGILITY",
    quote: "Food cinema, fashion lookbooks, and brand design under one roof.",
    description: "No disconnected handoffs. The same creative team conceptualizing your visual identity directs your commercial food shoots, fashion lookbooks, and media campaigns for complete aesthetic unity.",
    icon: Layers,
    metric: "Unified Vision"
  },
  {
    number: "05",
    title: "BUILT TO PERFORM",
    quote: "Aesthetic authority that drives commercial conversion.",
    description: "Beauty without strategic conversion is art, not agency craft. We engineer every asset, frame, and packaging element to build undeniable authority, elevate pricing power, and drive enterprise pipeline.",
    icon: Trophy,
    metric: "+340% Inbound"
  }
];

export default function WhyVerveo() {
  return (
    <section
      id="why"
      className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#5B21B6] via-[#6D28D9] to-[#5B21B6] text-white border-t border-[#A78BFA]/30 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Pill */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#A78BFA]/25 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#DDD6FE] font-bold">05 // THE VERVEO ADVANTAGE</span>
              <span className="text-[#C4B5FD]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#EDE9FE]/80 uppercase">
                Core Principles
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight">
              WHY FORWARD-THINKING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EDE9FE] to-[#DDD6FE]">
                BRANDS CHOOSE VERVEO.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#EDE9FE]/85 font-sans font-normal leading-relaxed">
            Five principles that govern every shoot, every layout, and every campaign we deliver to the world.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-[#A78BFA]/35 bg-[#4C1D95]/85 p-8 transition-all duration-500 hover:border-[#DDD6FE] hover:bg-[#6D28D9] hover:shadow-[0_20px_40px_rgba(124,58,237,0.5)]"
              >
                {/* Top Number & Metric */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-extrabold text-[#DDD6FE]">
                    {item.number}
                  </span>
                  <span className="rounded-full border border-[#A78BFA]/30 bg-[#3B0764] px-3 py-1 text-[11px] font-mono text-[#EDE9FE]">
                    {item.metric}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B0764] text-[#DDD6FE] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title & Quote */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-grotesk text-[#DDD6FE] italic font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-[#EDE9FE]/85 leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
