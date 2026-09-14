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
      className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#4C1D72] via-[#54227A] to-[#431966] text-[#F8F7F3] border-t border-[#7650A8]/25 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Pill */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#7650A8]/20 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#7650A8] font-bold">05 // THE VERVEO ADVANTAGE</span>
              <span className="text-[#7650A8]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#F8F7F3]/60 uppercase">
                Core Principles
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#FFFFFF] tracking-tight">
              WHY FORWARD-THINKING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7650A8] via-[#F8F7F3] to-[#7650A8]">
                BRANDS CHOOSE VERVEO.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#F8F7F3]/70 font-sans font-normal leading-relaxed">
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
                className="group relative overflow-hidden rounded-2xl border border-[#7650A8]/30 bg-[#431966]/90 p-8 transition-all duration-500 hover:border-[#7650A8] hover:bg-[#54227A] hover:shadow-[0_20px_40px_rgba(84,34,122,0.4)]"
              >
                {/* Top Number & Metric */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-extrabold text-[#7650A8]">
                    {item.number}
                  </span>
                  <span className="rounded-full border border-[#7650A8]/30 bg-[#32124D] px-3 py-1 text-[11px] font-mono text-[#F8F7F3]/80">
                    {item.metric}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#100817] text-[#7650A8] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title & Quote */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide text-[#FFFFFF] group-hover:text-[#FFFFFF] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-grotesk text-[#7650A8] italic font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-[#F8F7F3]/70 leading-relaxed font-sans font-normal">
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
