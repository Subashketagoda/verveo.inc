"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = servicesData[activeIdx];

  return (
    <main className="min-h-screen bg-[#100817] text-[#F8F7F3] flex flex-col justify-between overflow-hidden">
      <Navbar />

      {/* Dynamic Background Atmosphere that reacts to active service */}
      <div className="fixed inset-0 pointer-events-none -z-10 transition-all duration-700">
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[180px] transition-all duration-700 opacity-40 bg-[#3B155F]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(118,80,168,0.15),transparent_60%)]" />
      </div>

      <div className="pt-32 sm:pt-44 pb-20 sm:pb-24 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        {/* Page Header */}
        <div className="border-b border-[#7650A8]/20 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#7650A8] font-bold">DISCIPLINES // 02</span>
              <span className="text-[#7650A8]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.3em] text-[#F8F7F3]/60 uppercase">
                Interactive Capability Spectrum
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tight leading-[0.96]">
              INTERACTIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7650A8] via-[#F8F7F3] to-[#7650A8]">
                CAPABILITIES.
              </span>
            </h1>
          </div>

          <p className="max-w-md text-sm text-[#F8F7F3]/70 font-sans font-normal leading-relaxed">
            Hover each numbered discipline below to reveal dynamic visual treatments, creative scope deliverables, and production standards.
          </p>
        </div>

        {/* Giant Interactive List Layout (Two Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Giant Interactive Numbered List (Col 1-7) */}
          <div className="lg:col-span-7 divide-y divide-[#7650A8]/20 border-y border-[#7650A8]/20">
            {servicesData.map((service, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group relative py-8 sm:py-10 cursor-pointer transition-all duration-300 ${
                    isActive ? "bg-[#2A0D45] pl-4 sm:pl-6" : "hover:bg-[#2A0D45]/40"
                  }`}
                >
                  {/* Purple Moving Indicator Line on Active */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#7650A8] shadow-[0_0_15px_#7650A8]" />
                  )}

                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                          isActive ? "text-[#7650A8]" : "text-[#7650A8]/50"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h2
                        className={`font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight transition-all duration-300 ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F3] to-[#7650A8] scale-[1.02] translate-x-2"
                            : "text-[#F8F7F3]/80 group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h2>
                    </div>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-[#7650A8] bg-[#54227A] text-white shadow-[0_0_20px_rgba(84,34,122,0.6)]"
                          : "border-[#7650A8]/30 bg-[#100817] text-[#F8F7F3]/70 group-hover:border-[#7650A8] group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Active Subtitle preview */}
                  <p
                    className={`mt-2 font-grotesk text-xs sm:text-sm transition-colors duration-300 pl-10 sm:pl-12 ${
                      isActive ? "text-[#7650A8] font-semibold" : "text-[#F8F7F3]/60"
                    }`}
                  >
                    {service.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Viewport Takeover Preview Card (Col 8-12) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-6">
            <div className="relative aspect-16/11 w-full rounded-3xl overflow-hidden border border-[#7650A8]/30 bg-[#080509] shadow-xl">
              <Image
                key={activeService.id}
                src={activeService.previewImage}
                alt={activeService.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-black/25 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="font-mono text-xs text-[#7650A8] uppercase tracking-wider font-bold">
                    ACTIVE SELECTION // {activeService.number}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">
                    {activeService.title}
                  </h3>
                </div>
                <span className="rounded-full bg-[#54227A] px-3 py-1 font-mono text-xs text-white shadow-md border border-[#7650A8]/30">
                  {activeService.category}
                </span>
              </div>
            </div>

            {/* Scope Deliverables Box */}
            <div className="rounded-3xl border border-[#7650A8]/20 bg-[#2A0D45] p-6 sm:p-8 space-y-5 shadow-lg">
              <p className="text-sm font-sans text-[#F8F7F3]/80 font-normal leading-relaxed">
                {activeService.description}
              </p>

              <div className="space-y-3 border-t border-[#7650A8]/20 pt-5">
                <span className="font-mono text-xs text-[#FFFFFF] tracking-wider uppercase font-semibold block">
                  DELIVERABLE CAPABILITIES
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#F8F7F3]/80 font-grotesk">
                      <CheckCircle2 className="h-4 w-4 text-[#7650A8] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#54227A] py-3.5 font-grotesk text-xs font-bold tracking-wider text-white shadow-[0_0_25px_rgba(84,34,122,0.5)] hover:bg-[#7650A8] hover:scale-105 transition-all"
                >
                  <span>COMMISSION {activeService.title}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
