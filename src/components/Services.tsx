"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-36 lg:py-44 px-4 sm:px-10 lg:px-16 bg-[#2A0D45] text-[#F8F7F3] border-t border-[#7650A8]/20 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#7650A8]/20 pb-8 mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#7650A8] font-bold">03 // WHAT WE DO</span>
              <span className="text-[#7650A8]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#F8F7F3]/70 uppercase">
                Core Agency Services
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-6xl lg:text-7xl font-black text-[#F8F7F3] tracking-tight leading-[0.96]">
              SERVICES BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F3] to-[#7650A8]">
                FOR CULTURAL RECALL.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base font-sans text-[#F8F7F3]/75 leading-relaxed font-normal">
              We operate where brand strategy, tactile packaging, culinary cinema, and high-fashion editorial direction converge into undeniable commercial results.
            </p>
          </div>
        </div>

        {/* Interactive Huge Numbered Rows Container with Floating Cursor Follower */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative divide-y divide-[#7650A8]/20 border-b border-[#7650A8]/20"
        >
          {/* Floating Image Preview Following Cursor (Desktop Only) */}
          {hoveredIndex !== null && (
            <div
              className="pointer-events-none absolute z-30 hidden lg:block w-80 aspect-16/10 rounded-2xl overflow-hidden border border-[#7650A8]/40 bg-[#100817]/95 shadow-[0_25px_60px_rgba(16,8,23,0.8)] transition-all duration-150 ease-out"
              style={{
                left: `${mousePos.x + 30}px`,
                top: `${mousePos.y - 100}px`
              }}
            >
              <Image
                src={servicesData[hoveredIndex].previewImage}
                alt={servicesData[hoveredIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#F8F7F3]">
                <span className="font-mono text-[11px] text-[#7650A8] uppercase tracking-wider font-bold">
                  {servicesData[hoveredIndex].title}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#7650A8] animate-ping" />
              </div>
            </div>
          )}

          {/* Service Rows */}
          {servicesData.map((service, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={service.id}
                onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`group relative py-7 sm:py-12 transition-all duration-300 cursor-pointer ${
                  isHovered ? "bg-[#3B155F]/60 px-3 sm:px-4 rounded-2xl" : "hover:bg-[#3B155F]/30"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
                  {/* Number */}
                  <div className="lg:col-span-2 flex items-center gap-3 sm:gap-4">
                    <span
                      className={`font-mono text-xl sm:text-3xl font-bold transition-colors duration-300 ${
                        isHovered ? "text-[#7650A8]" : "text-[#7650A8]/60"
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="text-[#7650A8]/30 font-mono">—</span>
                  </div>

                  {/* Title & Enlarging Typography */}
                  <div className="lg:col-span-5">
                    <h3
                      className={`font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight transition-all duration-300 ${
                        isHovered
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F3] to-[#7650A8] translate-x-1 sm:translate-x-3"
                          : "text-[#F8F7F3] group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#7650A8] font-grotesk italic font-medium">
                      &ldquo;{service.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Short Description */}
                  <div className="lg:col-span-4">
                    <p className="text-xs sm:text-sm text-[#F8F7F3]/75 leading-relaxed font-sans font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div
                      className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                        isHovered
                          ? "border-[#7650A8] bg-[#54227A] text-white shadow-[0_0_25px_rgba(84,34,122,0.6)] scale-110"
                          : "border-[#7650A8]/20 bg-[#100817] text-[#F8F7F3]/60 group-hover:border-[#7650A8] group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                          isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile-Only Expanded Image Preview */}
                {isHovered && (
                  <div className="mt-4 lg:hidden rounded-2xl overflow-hidden border border-[#7650A8]/30 aspect-16/9 relative shadow-lg">
                    <Image
                      src={service.previewImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                      <span>{service.title}</span>
                      <span className="text-[#7650A8] font-bold">{service.number} // 06</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Commission Direct Action Banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-[#7650A8]/20 bg-[#100817]/90 p-6 sm:p-8">
          <div>
            <span className="font-mono text-xs text-[#7650A8] uppercase tracking-widest font-bold">
              BESPOKE SCOPES
            </span>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#F8F7F3] mt-1">
              Need an integrated cross-discipline campaign?
            </h4>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#54227A] to-[#7650A8] px-6 py-3 font-grotesk text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(84,34,122,0.5)] hover:scale-105 transition-transform"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
