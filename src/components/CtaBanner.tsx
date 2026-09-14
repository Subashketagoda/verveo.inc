"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#6D28D9] via-[#7C3AED] to-[#5B21B6] border-t border-[#A78BFA]/30 overflow-hidden text-center select-none">
      {/* Dynamic Purple Gradient Light Movement */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(221,214,254,0.4)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle Noise / Film Grain Overlay */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* Floating Geometric Violet Shapes */}
      <div className="absolute top-12 left-10 w-24 h-24 rounded-full border border-[#C4B5FD]/30 animate-pulse pointer-events-none hidden sm:block" />
      <div className="absolute bottom-16 right-12 w-36 h-36 rounded-full border border-[#C4B5FD]/30 animate-pulse pointer-events-none hidden sm:block" />
      <div className="absolute top-1/4 right-20 w-16 h-16 rounded-2xl border border-[#C4B5FD]/35 rotate-12 pointer-events-none hidden lg:block" />

      {/* Center VE® Monogram watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 sm:h-96 sm:w-96 opacity-15 pointer-events-none">
        <Image
          src="/images/ve_logo.svg"
          alt="VE®"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-10">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C4B5FD]/40 bg-[#4C1D95]/60 px-4 py-1.5 text-xs font-mono tracking-widest text-[#EDE9FE] uppercase backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#DDD6FE]" />
          <span>INITIATE PROJECT // COMMISSIONS 2026</span>
        </div>

        {/* Large White Typography */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-[0.92] drop-shadow-lg">
          LET&apos;S MAKE <br />
          SOMETHING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EDE9FE] to-[#DDD6FE]">
            UNMISSABLE.
          </span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-xl font-sans text-[#EDE9FE]/90 font-light leading-relaxed">
          From full brand architecture and custom packaging to culinary cinema and national campaigns.
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 font-grotesk text-sm font-black tracking-wider text-[#5B21B6] shadow-[0_15px_40px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#EDE9FE] hover:shadow-[0_20px_50px_rgba(196,181,253,0.6)] active:scale-95"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
