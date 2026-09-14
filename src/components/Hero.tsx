"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

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
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-10 sm:pb-12 px-4 sm:px-10 lg:px-16 bg-[#3B155F] text-[#F8F7F3]"
    >
      {/* Background Architectural & Violet Ambient Glow on Deep Purple */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#3B155F]">
        {/* Deep Purple Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#54227A_0%,#3B155F_60%,#2A0D45_100%)] opacity-90" />

        {/* Subtle Architectural Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,247,243,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,247,243,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />

        {/* Safe Ambient Glow (Zero WebKit GPU memory overhead) */}
        <div
          className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(118,80,168,0.3)_0%,transparent_70%)] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0)`
          }}
        />
        <div
          className="absolute bottom-10 -left-20 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(84,34,122,0.4)_0%,transparent_70%)] pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 0)`
          }}
        />
      </div>

      {/* Top Telemetry Strip */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-grotesk tracking-widest text-[#F8F7F3]/70 uppercase pt-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#7650A8]/30 bg-[#2A0D45]/80 px-3 py-1.5 shadow-md backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7650A8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7650A8]"></span>
          </span>
          <span className="text-[#F8F7F3] font-semibold tracking-wider text-[10px] sm:text-[11px]">
            CREATIVE MARKETING AGENCY &bull; COMMISSIONS OPEN 2026
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[11px]">
          <span className="text-[#7650A8] font-bold tracking-wider">
            YOUR BRAND. OUR VISION. UNFORGETTABLE.
          </span>
          <span className="text-[#7650A8]/40">|</span>
          <span className="text-[#F8F7F3]/70">@VERVEO.INC</span>
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
            <div className="inline-flex items-center gap-2.5 text-xs font-grotesk tracking-[0.3em] text-[#7650A8] uppercase font-bold">
              <Sparkles className="h-3.5 w-3.5 text-[#7650A8]" />
              <span>THE DIGITAL MANIFESTATION</span>
            </div>

            {/* Oversized Headline in Warm Off-White / Violet */}
            <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-tight text-[#F8F7F3] leading-[0.94] sm:leading-[0.92]">
              WE MAKE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F3] to-[#7650A8] drop-shadow-md">
                BRANDS
              </span> <br />
              MOVE.
            </h1>

            <p className="max-w-xl text-sm sm:text-lg lg:text-xl text-[#F8F7F3]/85 leading-relaxed font-sans font-light pt-1 sm:pt-2">
              From designing living brand identities and physical packaging to directing high-fashion lookbooks, mouth-watering culinary cinema, and cultural media campaigns.
            </p>

            {/* CTAs - Stack on small screens for comfortable tapping */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-3 sm:pt-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#54227A] via-[#7650A8] to-[#54227A] px-7 sm:px-8 py-3.5 sm:py-4 font-grotesk text-xs sm:text-sm font-bold tracking-wider text-white shadow-[0_10px_30px_rgba(84,34,122,0.55)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_35px_rgba(118,80,168,0.7)] active:scale-95 text-center min-h-[44px]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#7650A8]/40 bg-[#2A0D45]/60 px-6 py-3.5 sm:py-4 font-grotesk text-xs sm:text-sm font-semibold tracking-wider text-[#F8F7F3] shadow-md transition-all duration-300 hover:border-[#7650A8] hover:text-white hover:bg-[#2A0D45] text-center min-h-[44px]"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Architectural Luxury Showcase of Real Verveo Work (Col 8-12) */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(circle,rgba(84,34,122,0.45)_0%,transparent_70%)] -z-10" />

            {/* Main Stage Card */}
            <div className="relative w-full max-w-lg aspect-4/5 sm:aspect-1/1 lg:aspect-4/5 rounded-3xl overflow-hidden border border-[#7650A8]/40 bg-[#2A0D45] shadow-[0_30px_70px_rgba(16,8,23,0.85)] group">
              {/* Media Rendering: Video or High-Res Image */}
              {heroShowcases[activeShowcase].type === "video" ? (
                <video
                  key={heroShowcases[activeShowcase].id}
                  src={heroShowcases[activeShowcase].src}
                  poster="/user_media/verveo-cafe-1.jpg"
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  key={heroShowcases[activeShowcase].id}
                  src={heroShowcases[activeShowcase].src}
                  alt={heroShowcases[activeShowcase].title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Gradient Darkening for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#100817] via-[#100817]/25 to-transparent opacity-90 pointer-events-none" />

              {/* Top Meta Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#100817]/85 border border-[#7650A8]/40 px-3 py-1 text-[10px] font-mono text-[#F8F7F3] backdrop-blur-md shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7650A8] animate-pulse" />
                  <span className="font-bold tracking-wider uppercase">
                    {heroShowcases[activeShowcase].badge}
                  </span>
                </div>

                <span className="rounded-full bg-[#100817]/80 px-2.5 py-0.5 font-mono text-[10px] text-[#F8F7F3]/70 border border-[#7650A8]/30 backdrop-blur-md">
                  0{activeShowcase + 1} / 0{heroShowcases.length}
                </span>
              </div>

              {/* Bottom Caption & Headline */}
              <div className="absolute bottom-5 left-5 right-5 z-10 space-y-1">
                <span className="font-mono text-[10px] text-[#7650A8] uppercase tracking-widest font-bold block">
                  {heroShowcases[activeShowcase].category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#FFFFFF] tracking-tight">
                  {heroShowcases[activeShowcase].title}
                </h3>
                <p className="text-xs text-[#F8F7F3]/80 font-sans font-light line-clamp-2 pt-0.5">
                  {heroShowcases[activeShowcase].caption}
                </p>
              </div>

              {/* Secondary Floating Offset Badge (Bottom Right Accent) */}
              <div className="hidden sm:flex absolute -bottom-3 -right-3 z-20 items-center gap-3 rounded-2xl bg-[#100817]/95 border border-[#7650A8]/50 p-3 shadow-[0_15px_35px_rgba(84,34,122,0.5)] backdrop-blur-xl">
                <div className="relative h-11 w-11 rounded-xl overflow-hidden border border-[#7650A8]/30 shrink-0">
                  <Image
                    src={heroShowcases[(activeShowcase + 1) % heroShowcases.length].src.endsWith(".mp4") ? "/user_media/verveo-cafe-1.jpg" : heroShowcases[(activeShowcase + 1) % heroShowcases.length].src}
                    alt="Next item"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left pr-1">
                  <span className="font-mono text-[9px] text-[#7650A8] uppercase tracking-wider block font-bold">
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
                        ? "bg-[#2A0D45] border-[#7650A8] shadow-[0_5px_20px_rgba(84,34,122,0.4)] scale-102"
                        : "bg-[#2A0D45]/40 border-[#7650A8]/20 hover:border-[#7650A8]/50 hover:bg-[#2A0D45]/70"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[9px] text-[#7650A8] font-bold">
                        0{idx + 1}
                      </span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#7650A8]" />}
                    </div>
                    <span className="font-display text-[10px] sm:text-xs font-bold text-[#F8F7F3] truncate w-full mt-0.5">
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
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-grotesk tracking-widest text-[#F8F7F3]/70 uppercase border-t border-[#7650A8]/20 pt-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[#7650A8] font-bold">001</span>
          <span className="text-[#7650A8]/40">//</span>
          <span>DISCOVER VERVEO STUDIO</span>
        </div>

        <Link
          href="#statement"
          className="group flex items-center gap-2.5 hover:text-[#7650A8] transition-colors"
        >
          <span>EXPLORE</span>
          <div className="flex h-6 w-4 items-center justify-center rounded-full border border-[#7650A8]/40 p-0.5 group-hover:border-[#7650A8]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#7650A8] animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
