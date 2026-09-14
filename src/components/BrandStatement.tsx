"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Aperture, Eye, Flame } from "lucide-react";

export default function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const visible = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height * 0.6)));
      setScrollProgress(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lines = [
    { text: "WE TURN", highlight: false },
    { text: "BRANDS INTO", highlight: false },
    { text: "VISUAL", highlight: true },
    { text: "EXPERIENCES.", highlight: true }
  ];

  return (
    <section
      id="statement"
      ref={containerRef}
      className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#2A0D45] text-[#F8F7F3] border-y border-[#7650A8]/20 transition-colors duration-1000"
    >
      {/* Background ambient lighting in purple */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-[#54227A]/30 blur-[180px] pointer-events-none transition-all duration-700"
        style={{
          opacity: 0.3 + scrollProgress * 0.7,
          transform: `translate(-50%, -50%) scale(${0.8 + scrollProgress * 0.4})`
        }}
      />

      <div className="w-full max-w-7xl mx-auto">
        {/* Section Pill */}
        <div className="flex items-center justify-between border-b border-[#7650A8]/20 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#7650A8] font-bold">01 // MANIFESTO</span>
            <span className="text-[#7650A8]/40">/</span>
            <span className="text-xs font-grotesk tracking-[0.25em] text-[#F8F7F3]/70 uppercase">
              The Creative Conviction
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-grotesk text-[#F8F7F3]/70">
            <Aperture className="h-3.5 w-3.5 text-[#7650A8]" />
            <span>IDENTITY &bull; CINEMA &bull; FASHION &bull; CULINARY</span>
          </div>
        </div>

        {/* Massive Kinetic Editorial Typography */}
        <div className="space-y-3 sm:space-y-4">
          {lines.map((line, idx) => {
            const threshold = (idx + 1) / (lines.length + 1);
            const isActive = scrollProgress >= threshold * 0.65;

            return (
              <div key={idx} className="overflow-hidden">
                <h2
                  className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    line.highlight
                      ? isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F3] to-[#7650A8] drop-shadow-[0_0_25px_rgba(118,80,168,0.5)] translate-y-0 opacity-100"
                        : "text-[#F8F7F3]/15 translate-y-8 opacity-25"
                      : isActive
                      ? "text-[#F8F7F3] translate-y-0 opacity-100"
                      : "text-[#F8F7F3]/15 translate-y-8 opacity-25"
                  }`}
                >
                  {line.text}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Narrative Paragraph + Strategic Core Strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[#7650A8]/20 pt-12">
          <div className="lg:col-span-6">
            <p className="text-lg sm:text-xl font-sans text-[#F8F7F3]/85 leading-relaxed font-normal">
              We reject forgettable advertising. From designing tactile takeaway carriers for artisanal cafes to directing 4K macro food cinema and Vogue-caliber fashion lookbooks, Verveo operates where creative vision commands undisputed commercial power.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-[#7650A8]/25 bg-[#100817]/80 shadow-md">
              <div className="flex items-center gap-2 text-[#7650A8] mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase">BRAND IDENTITY</span>
              </div>
              <p className="text-xs text-[#F8F7F3]/70 leading-relaxed font-grotesk">
                Complete brand architecture, custom monograms, bespoke cup carriers, and tactile packaging systems.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#7650A8]/25 bg-[#100817]/80 shadow-md">
              <div className="flex items-center gap-2 text-[#7650A8] mb-2">
                <Flame className="h-4 w-4 text-[#7650A8]" />
                <span className="font-mono text-xs font-bold uppercase">MEDIA CAMPAIGNS</span>
              </div>
              <p className="text-xs text-[#F8F7F3]/70 leading-relaxed font-grotesk">
                Commercial cinematography, slow-motion liquid velocity, fashion lookbooks, and culture-defining reels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
