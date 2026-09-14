"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ClientCareSection from "@/components/ClientCareSection";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Eye, Award, CheckCircle2, ArrowUpRight, Flame, Heart as HeartIcon, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import InstagramIcon from "@/components/InstagramIcon";

const MANIFESTO_PILLARS = [
  {
    id: "ideas",
    word: "IDEAS",
    number: "01",
    tagline: "Concepts that disrupt inertia.",
    description: "Every campaign begins with an authentic cultural insight. We don't brainstorm in vacuum chambers; we identify the emotional vacuum in your market.",
    image: "/user_media/verveo-design-team-1.jpg"
  },
  {
    id: "people",
    word: "PEOPLE",
    number: "02",
    tagline: "Directors, colorists, stylists & storytellers.",
    description: "A tight-knit collective of obsessive visual practitioners. From fashion lookbook directors to macro food cinematographers and master retouchers.",
    image: "/user_media/alata-paintings.jpg"
  },
  {
    id: "culture",
    word: "CULTURE",
    number: "03",
    tagline: "The language of modern feeds.",
    description: "Born natively on Instagram and digital video feeds. We know what makes thumbs stop, what drives 45,000 story tags, and what gets remembered.",
    image: "/user_media/verveo-cafe-1.jpg"
  },
  {
    id: "creativity",
    word: "CREATIVITY",
    number: "04",
    tagline: "Your business doesn't need ads, it needs movies.",
    description: "We treat commercial briefs with celluloid conviction. Combining anamorphic glass, tactile stop-motion, and rich sound design.",
    image: "/user_media/client_care/client-care-6.jpg"
  },
  {
    id: "impact",
    word: "IMPACT",
    number: "05",
    tagline: "Commercial authority meets aesthetic dominance.",
    description: "Visual authority that translates directly to pricing power, client acquisition, and category leadership.",
    image: "/user_media/client_care/client-care-1.jpg"
  }
];

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState(MANIFESTO_PILLARS[0]);

  return (
    <main className="min-h-screen bg-[#100817] text-[#F8F7F3] flex flex-col justify-between overflow-hidden">
      <Navbar />

      <div className="pt-32 sm:pt-44 pb-20 sm:pb-24 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full space-y-16 sm:space-y-32">
        {/* Manifesto Opening */}
        <div className="space-y-6 sm:space-y-8 max-w-6xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#7650A8] font-bold">MANIFESTO // 03</span>
            <span className="text-[#7650A8]/40">/</span>
            <span className="text-xs font-grotesk tracking-[0.3em] text-[#F8F7F3]/60 uppercase">
              The Creative Thesis
            </span>
          </div>

          {/* Bold Requested Headline */}
          <h1 className="font-display text-3xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-black text-[#FFFFFF] tracking-tight leading-[0.96] sm:leading-[0.92]">
            &ldquo;WE BELIEVE <br />
            GOOD IDEAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7650A8] via-[#F8F7F3] to-[#7650A8]">
              DESERVE TO
            </span> <br />
            BE SEEN.&rdquo;
          </h1>

          <p className="max-w-2xl text-base sm:text-2xl font-sans text-[#F8F7F3]/70 font-normal leading-relaxed pt-2 sm:pt-4">
            Verveo Creative Inc. was founded on an unapologetic standard: that commercial advertising shouldn&apos;t look like advertising at all. It should feel like high art, cinema, and cultural culture.
          </p>
        </div>

        {/* Purple Color Block Editorial Feature */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2A0D45] via-[#3B155F] to-[#100817] p-8 sm:p-14 shadow-2xl border border-[#7650A8]/30 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block rounded-full bg-[#100817]/60 border border-[#7650A8]/30 px-3.5 py-1 text-xs font-mono text-[#F8F7F3] tracking-widest uppercase backdrop-blur-md">
                BRAND PHILOSOPHY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight">
                Crafted to make your business impossible to ignore.
              </h2>
              <p className="text-base text-[#F8F7F3]/85 font-sans font-normal leading-relaxed max-w-xl">
                Whether designing a living brand identity and eco-friendly cup carrier system for artisanal cafes like ALATA, or directing slow-motion sauce pour dynamics for gourmet culinary houses, we engineer visuals that command genuine emotional connection.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden border border-[#7650A8]/30 shadow-2xl">
              <Image
                src="/user_media/verveo-design-team-2.jpg"
                alt="Studio Workflow Behind The Scenes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white">
                VERVEO PRODUCTION LAB // RAW TO MASTERPIECE
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Section: IDEAS, PEOPLE, CULTURE, CREATIVITY, IMPACT */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#7650A8]/20 pb-6 gap-4">
            <div>
              <span className="font-mono text-xs text-[#7650A8] font-bold uppercase tracking-widest">
                THE 5 PILLARS
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-black text-[#FFFFFF] mt-1">
                IDEAS &bull; PEOPLE &bull; CULTURE &bull; CREATIVITY &bull; IMPACT
              </h3>
            </div>
            <span className="text-xs font-mono text-[#F8F7F3]/60">
              SELECT PILLAR TO EXPLORE
            </span>
          </div>

          {/* Interactive Pillar Selector Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-2xl border border-[#7650A8]/20 bg-[#100817]">
            {MANIFESTO_PILLARS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePillar(p)}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 px-3 text-xs font-grotesk font-bold tracking-wider transition-all duration-300 ${
                  activePillar.id === p.id
                    ? "bg-[#54227A] text-white shadow-[0_0_20px_rgba(84,34,122,0.6)] scale-100"
                    : "text-[#F8F7F3]/70 hover:text-white hover:bg-[#3B155F]/60"
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{p.number}</span>
                <span>{p.word}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar Card */}
          <div className="rounded-3xl border border-[#7650A8]/20 bg-[#2A0D45] p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden border border-[#7650A8]/30 bg-[#080509]">
                <Image
                  src={activePillar.image}
                  alt={activePillar.word}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="font-mono text-xs text-[#7650A8] font-bold tracking-widest">
                    PILLAR {activePillar.number} // {activePillar.word}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs text-[#7650A8] uppercase tracking-widest font-bold">
                  &ldquo;{activePillar.tagline}&rdquo;
                </span>
                <h4 className="font-display text-3xl sm:text-4xl font-black text-[#FFFFFF]">
                  {activePillar.word} in Action
                </h4>
                <p className="text-base text-[#F8F7F3]/80 font-sans font-normal leading-relaxed">
                  {activePillar.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Story Behind Verveo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#7650A8]/20 pt-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-[#7650A8] uppercase tracking-widest font-bold">
              ORIGIN &amp; ROOTS
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-[#FFFFFF]">
              The Digital Agency Born on the Feed
            </h3>
            <div className="space-y-4 text-[#F8F7F3]/70 font-sans font-normal leading-relaxed text-sm sm:text-base">
              <p>
                From designing your Brand identity to producing media campaigns, Verveo is the way to go. We started as an agile, visual-first agency that rejected slow corporate agency bureaucracy.
              </p>
              <p>
                Our work is fast, cinematic, and tuned to the visual frequency of modern audiences. Alongside our commercial division, our sister brand <span className="text-[#7650A8] font-semibold">@verveo_weddings</span> brings 35mm optical elegance to matrimonial celebrations worldwide.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#54227A] px-8 py-3.5 font-grotesk text-xs font-bold tracking-wider text-white shadow-[0_0_25px_rgba(84,34,122,0.5)] hover:bg-[#7650A8] hover:scale-105 transition-all"
              >
                <span>INITIATE COMMISSION</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden border border-[#7650A8]/20 bg-[#2A0D45]">
              <Image
                src="/user_media/verveo-cafe-1.jpg"
                alt="Verveo Cafe Space"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden border border-[#7650A8]/20 bg-[#2A0D45] mt-8">
              <Image
                src="/user_media/alata-paintings.jpg"
                alt="ALATA Curated Art"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Client Care 6-Slide Series */}
      <ClientCareSection />

      <Footer />
    </main>
  );
}
