"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroShowcaseItem {
  id: string;
  type: "video" | "image";
  src: string;
  badge: string;
  shortLabel: string;
  category: string;
  title: string;
  caption: string;
}

const heroShowcases: HeroShowcaseItem[] = [
  {
    id: "beverage-cinema",
    type: "video",
    src: "/user_media/verveo-drinks-secret.mp4",
    badge: "4K CINEMA REEL",
    shortLabel: "Drinks Cinema",
    category: "BEVERAGE CINEMA",
    title: "The Secret Behind Pretty Drinks",
    caption: "Macro liquid collision and layered taro cinematography captured in 4K RAW."
  },
  {
    id: "studio-cafe",
    type: "image",
    src: "/user_media/verveo-cafe-1.jpg",
    badge: "STUDIO SPACES",
    shortLabel: "Verveo Cafe",
    category: "EXPERIENTIAL SPACES",
    title: "Verveo Cafe & Identity Space",
    caption: "Minimalist geometry, purple atmospheric lighting, and branded takeaway cup carriers."
  },
  {
    id: "art-exhibit",
    type: "image",
    src: "/user_media/alata-paintings.jpg",
    badge: "CURATED ART",
    shortLabel: "Fine Art",
    category: "GALLERY EXHIBITION",
    title: "Alata — Curated Gallery Paintings",
    caption: "Original artwork and physical paintings curated for the ALATA gallery cafe space."
  },
  {
    id: "client-care",
    type: "image",
    src: "/user_media/client_care/client-care-1.jpg",
    badge: "STUDIO DOCTRINE",
    shortLabel: "Client Care",
    category: "EDITORIAL PARTNERSHIP",
    title: "We Take Care of Our Clients",
    caption: "Why uncompromising craft, senior guardianship, and long-term brand longevity define every Verveo commission."
  }
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeShowcase, setActiveShowcase] = useState(0);

  useEffect(() => {
    // Disable mousemove parallax on touch/mobile to prevent mobile Safari crashes
    if (typeof window !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches)) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Gentle auto-rotation every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % heroShowcases.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-10 sm:pb-12 px-4 sm:px-10 lg:px-16 bg-gradient-to-b from-[#6D28D9] via-[#7C3AED] to-[#5B21B6] text-white"
    >
      {/* Background Architectural & Luminous Violet Glow on Rich Royal Purple */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-gradient-to-b from-[#4C1D95] via-[#6D28D9] to-[#3B0764]">
        {/* Radiant Royal Purple Overhead Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_-15%,rgba(167,139,250,0.55)_0%,rgba(124,58,237,0.35)_45%,rgba(59,7,100,0.85)_85%,transparent_100%)] opacity-95" />

        {/* Central Ambient Deep Violet Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[950px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(196,181,253,0.22)_0%,rgba(124,58,237,0.12)_45%,transparent_75%)] pointer-events-none" />

        {/* Dynamic 360-degree Sweeping Light Beam (Architectural Luxury Ray) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1200px] w-[1200px] rounded-full pointer-events-none opacity-25 animate-beam-sweep bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(237,233,254,0.4)_45deg,transparent_90deg,transparent_180deg,rgba(196,181,253,0.3)_225deg,transparent_270deg)]" />

        {/* Subtle Luxury Architectural Grid with Soft Vignette Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_30%,transparent_100%)] opacity-75 pointer-events-none" />

        {/* Animated Aurora Light Orb 1 (Top Left) */}
        <div
          className="absolute -top-24 -left-20 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.38)_0%,rgba(124,58,237,0.22)_40%,transparent_75%)] pointer-events-none animate-aurora transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0)`
          }}
        />

        {/* Animated Aurora Light Orb 2 (Top Right) */}
        <div
          className="absolute -top-20 -right-20 h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle,rgba(237,233,254,0.4)_0%,rgba(196,181,253,0.28)_35%,rgba(109,40,217,0.15)_65%,transparent_80%)] pointer-events-none animate-aurora-reverse transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -28}px, ${mousePos.y * -28}px, 0)`
          }}
        />

        {/* Animated Aurora Light Orb 3 (Bottom Center Left) */}
        <div className="absolute -bottom-28 left-1/4 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(221,214,254,0.3)_0%,rgba(139,92,246,0.18)_45%,transparent_75%)] pointer-events-none animate-aurora" />

        {/* Floating Twinkling Star Sparks (4-Point SVG Crystals) */}
        <div className="absolute top-[16%] left-[8%] pointer-events-none animate-twinkle">
          <svg className="h-4 w-4 text-[#DDD6FE] drop-shadow-[0_0_8px_rgba(221,214,254,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        <div className="absolute top-[26%] right-[12%] pointer-events-none animate-twinkle" style={{ animationDelay: "1.4s" }}>
          <svg className="h-5 w-5 text-[#FFFFFF] drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        <div className="absolute top-[68%] left-[6%] pointer-events-none animate-twinkle" style={{ animationDelay: "2.6s" }}>
          <svg className="h-3.5 w-3.5 text-[#DDD6FE] drop-shadow-[0_0_6px_rgba(221,214,254,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        <div className="absolute top-[76%] right-[20%] pointer-events-none animate-twinkle" style={{ animationDelay: "1.9s" }}>
          <svg className="h-4 w-4 text-[#DDD6FE] drop-shadow-[0_0_8px_rgba(221,214,254,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        {/* Micro Stardust Glowing Orbs */}
        <div className="absolute top-[22%] left-[24%] h-1.5 w-1.5 rounded-full bg-[#DDD6FE] shadow-[0_0_8px_#DDD6FE] pointer-events-none animate-pulse" />
        <div className="absolute top-[46%] right-[6%] h-1 w-1 rounded-full bg-white shadow-[0_0_6px_#ffffff] pointer-events-none animate-pulse" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-[82%] left-[34%] h-1.5 w-1.5 rounded-full bg-[#DDD6FE] shadow-[0_0_8px_#DDD6FE] pointer-events-none animate-pulse" style={{ animationDelay: "1.6s" }} />

        {/* Subtle Horizontal Laser Horizon with Glowing Beacon */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4B5FD]/30 to-transparent pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#DDD6FE] shadow-[0_0_12px_#DDD6FE] animate-pulse" />
        </div>
      </div>

      {/* Top Telemetry Strip */}
      <div className="w-full max-w-7xl mx-auto hidden sm:flex items-center justify-end text-xs font-grotesk tracking-widest text-[#EDE9FE]/80 uppercase pt-2">
        <div className="flex items-center gap-6 text-[11px]">
          <span className="text-[#DDD6FE] font-bold tracking-wider">
            YOUR BRAND. OUR VISION. UNFORGETTABLE.
          </span>
          <span className="text-[#C4B5FD]/40">|</span>
          <span className="text-[#EDE9FE]/80">@VERVEO.INC</span>
        </div>
      </div>

      {/* Main Asymmetric Editorial Hero Content */}
      <div className="w-full max-w-7xl mx-auto my-auto py-8 sm:py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Main Huge Typography Headline (Col 1-7) */}
          <div
            className="lg:col-span-7 space-y-5 sm:space-y-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 0)`
            }}
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Oversized High-Impact Editorial Headline */}
              <h1 className="font-display text-[4rem] xs:text-[4.85rem] sm:text-[6rem] md:text-8xl lg:text-[7.25rem] xl:text-[8.5rem] font-black tracking-tighter text-[#FFFFFF] leading-[0.84] drop-shadow-md select-none">
                <span className="block">WE</span>
                <span className="block">MAKE</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EDE9FE] to-[#DDD6FE] drop-shadow-lg">
                  BRANDS
                </span>
                <span className="block">MOVE.</span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg lg:text-xl text-[#EDE9FE]/90 leading-relaxed font-sans font-normal pt-1 sm:pt-2">
                From designing living brand identities and physical packaging to directing high-fashion lookbooks, mouth-watering culinary cinema, and cultural media campaigns.
              </p>

              {/* CTAs - Stack on small screens for comfortable tapping */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-3 sm:pt-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 sm:px-8 py-3.5 sm:py-4 font-grotesk text-xs sm:text-sm font-bold tracking-wider text-[#5B21B6] shadow-[0_10px_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#EDE9FE] hover:shadow-[0_15px_35px_rgba(196,181,253,0.6)] active:scale-95 text-center min-h-[44px]"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#C4B5FD]/50 bg-[#4C1D95]/70 px-6 py-3.5 sm:py-4 font-grotesk text-xs sm:text-sm font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:border-white hover:text-white hover:bg-[#4C1D95] text-center min-h-[44px]"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Architectural Luxury Showcase of Real Verveo Work (Col 8-12) */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(circle,rgba(167,139,250,0.35)_0%,transparent_70%)] -z-10" />

            {/* Main Stage Card */}
            <div className="relative w-full max-w-lg aspect-4/5 sm:aspect-1/1 lg:aspect-4/5 rounded-3xl overflow-hidden border border-[#A78BFA]/40 bg-[#4C1D95] shadow-[0_30px_70px_rgba(59,7,100,0.6)] group">
              {/* Media Rendering: Video or High-Res Image */}
              {heroShowcases[activeShowcase].type === "video" ? (
                <video
                  key={heroShowcases[activeShowcase].id}
                  src={heroShowcases[activeShowcase].src}
                  poster="/user_media/verveo-cafe-1.jpg"
                  preload="metadata"
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <Image
                  key={heroShowcases[activeShowcase].id}
                  src={heroShowcases[activeShowcase].src}
                  alt={heroShowcases[activeShowcase].title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Radiant Bottom Tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B0764]/95 via-[#4C1D95]/40 to-transparent pointer-events-none" />

              {/* Floating Glassmorphic Pill Badges (Top Left & Top Right) */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 flex items-center gap-2">
                <span className="rounded-full border border-[#C4B5FD]/40 bg-[#3B0764]/80 px-3 py-1 text-[10px] sm:text-xs font-mono text-[#DDD6FE] backdrop-blur-md shadow-sm">
                  {heroShowcases[activeShowcase].badge}
                </span>
              </div>

              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20">
                <span className="rounded-full border border-[#C4B5FD]/40 bg-[#3B0764]/80 px-3 py-1 text-[10px] sm:text-xs font-mono text-[#DDD6FE] backdrop-blur-md">
                  0{activeShowcase + 1} / 0{heroShowcases.length}
                </span>
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 space-y-1 sm:space-y-1.5">
                <span className="inline-block text-[10px] font-mono tracking-widest text-[#DDD6FE] uppercase font-semibold">
                  {heroShowcases[activeShowcase].category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#FFFFFF] tracking-tight">
                  {heroShowcases[activeShowcase].title}
                </h3>
                <p className="text-xs text-[#EDE9FE]/85 font-sans font-light line-clamp-2 pt-0.5">
                  {heroShowcases[activeShowcase].caption}
                </p>
              </div>

              {/* Secondary Floating Offset Badge (Bottom Right Accent) */}
              <div className="hidden sm:flex absolute -bottom-3 -right-3 z-20 items-center gap-3 rounded-2xl bg-[#3B0764]/95 border border-[#A78BFA]/50 p-3 shadow-[0_15px_35px_rgba(109,40,217,0.5)] backdrop-blur-xl">
                <div className="relative h-11 w-11 rounded-xl overflow-hidden border border-[#A78BFA]/30 shrink-0">
                  <Image
                    src={heroShowcases[(activeShowcase + 1) % heroShowcases.length].src.endsWith(".mp4") ? "/user_media/verveo-cafe-1.jpg" : heroShowcases[(activeShowcase + 1) % heroShowcases.length].src}
                    alt="Next item"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left pr-1">
                  <span className="font-mono text-[9px] text-[#DDD6FE] uppercase tracking-wider block font-bold">
                    UP NEXT
                  </span>
                  <span className="font-display text-xs font-bold text-[#FFFFFF] line-clamp-1">
                    {heroShowcases[(activeShowcase + 1) % heroShowcases.length].title}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Thumbnail Gallery Strip */}
            <div className="w-full max-w-lg mt-5 flex items-center justify-between gap-2 sm:gap-3">
              {heroShowcases.map((item, idx) => {
                const isActive = activeShowcase === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveShowcase(idx)}
                    className={`flex-1 min-w-0 flex flex-col items-start p-1.5 sm:p-2.5 rounded-xl border transition-all text-left ${
                      isActive
                        ? "bg-[#4C1D95] border-[#C4B5FD] shadow-[0_5px_20px_rgba(124,58,237,0.5)] scale-102"
                        : "bg-[#4C1D95]/40 border-[#A78BFA]/20 hover:border-[#C4B5FD]/50 hover:bg-[#4C1D95]/70"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[9px] text-[#DDD6FE] font-bold">
                        0{idx + 1}
                      </span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#DDD6FE]" />}
                    </div>
                    <span className="font-display text-[10px] sm:text-xs font-bold text-white truncate w-full mt-0.5">
                      {item.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Animated Scroll Indicator */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-grotesk tracking-widest text-[#EDE9FE]/80 uppercase border-t border-[#A78BFA]/30 pt-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[#DDD6FE] font-bold">001</span>
          <span className="text-[#C4B5FD]/40">//</span>
          <span>DISCOVER VERVEO STUDIO</span>
        </div>

        <Link
          href="#statement"
          className="group flex items-center gap-2.5 text-[#EDE9FE] hover:text-white transition-colors"
        >
          <span>EXPLORE</span>
          <div className="flex h-6 w-4 items-center justify-center rounded-full border border-[#C4B5FD]/40 p-0.5 group-hover:border-white">
            <div className="h-1.5 w-1.5 rounded-full bg-[#DDD6FE] animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
