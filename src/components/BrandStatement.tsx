"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Aperture, Flame } from "lucide-react";

export default function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
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
      className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#F8F7F3] text-[#100817] border-y border-[#7650A8]/15"
    >
      {/* Background ambient lighting in soft lavender (pure radial-gradient, 0% GPU blur overhead) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(118,80,168,0.15)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Pill */}
        <div className="flex items-center justify-between border-b border-[#7650A8]/20 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#54227A] font-bold">01 // MANIFESTO</span>
            <span className="text-[#7650A8]/40">/</span>
            <span className="text-xs font-grotesk tracking-[0.25em] text-[#3B155F]/70 uppercase font-semibold">
              The Creative Conviction
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-grotesk text-[#3B155F]/70 font-medium">
            <Aperture className="h-3.5 w-3.5 text-[#54227A]" />
            <span>IDENTITY &bull; CINEMA &bull; FASHION &bull; CULINARY</span>
          </div>
        </div>

        {/* Massive Kinetic Editorial Typography in Deep Purple */}
        <div className="space-y-3 sm:space-y-4">
          {lines.map((line, idx) => {
            const isActive = isInView;

            return (
              <div key={idx} className="overflow-hidden">
                <h2
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    line.highlight
                      ? isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#3B155F] via-[#54227A] to-[#7650A8] translate-y-0 opacity-100"
                        : "text-[#3B155F]/20 translate-y-6 opacity-30"
                      : isActive
                      ? "text-[#2A0D45] translate-y-0 opacity-100"
                      : "text-[#2A0D45]/20 translate-y-6 opacity-30"
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
            <p className="text-lg sm:text-xl font-sans text-[#2A0D45]/85 leading-relaxed font-normal">
              We reject forgettable advertising. From designing tactile takeaway carriers for artisanal cafes to directing 4K macro food cinema and Vogue-caliber fashion lookbooks, Verveo operates where creative vision commands undisputed commercial power.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-[#7650A8]/20 bg-[#FFFFFF] shadow-[0_10px_30px_rgba(59,21,95,0.06)]">
              <div className="flex items-center gap-2 text-[#54227A] mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase">BRAND IDENTITY</span>
              </div>
              <p className="text-xs text-[#2A0D45]/75 leading-relaxed font-grotesk">
                Complete brand architecture, custom monograms, bespoke cup carriers, and tactile packaging systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#7650A8]/20 bg-[#FFFFFF] shadow-[0_10px_30px_rgba(59,21,95,0.06)]">
              <div className="flex items-center gap-2 text-[#54227A] mb-2">
                <Flame className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase">MEDIA CAMPAIGNS</span>
              </div>
              <p className="text-xs text-[#2A0D45]/75 leading-relaxed font-grotesk">
                Commercial cinematography, slow-motion liquid velocity, fashion lookbooks, and culture-defining reels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
