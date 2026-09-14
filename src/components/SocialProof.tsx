"use client";

import { Sparkles, Star } from "lucide-react";

const STATS = [
  { value: "74+", label: "Cinematic Productions & Shoots", subtext: "Brand campaigns, lookbooks & food cinema" },
  { value: "100%", label: "Bespoke Art Direction", subtext: "Custom packaging & living brand identities" },
  { value: "16-Bit", label: "Studio Retouching Standard", subtext: "Medium format RAW post-production pipeline" },
  { value: "18+", label: "Worldwide Wedding Destinations", subtext: "Paris, Lake Como, Kyoto via @verveo_weddings" }
];

export default function SocialProof() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#5B21B6] via-[#6D28D9] to-[#5B21B6] text-white border-t border-[#A78BFA]/30 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Studio Production Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-[#A78BFA]/35 bg-[#4C1D95]/85 flex flex-col justify-between hover:border-[#DDD6FE] hover:bg-[#6D28D9] transition-all shadow-md"
            >
              <div>
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-[#DDD6FE] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 font-display text-sm sm:text-base font-bold text-white">
                  {stat.label}
                </div>
              </div>
              <p className="mt-3 text-xs text-[#EDE9FE]/80 font-grotesk">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Standard Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-[#A78BFA]/40 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#6D28D9] p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-[#DDD6FE] text-xs font-mono font-bold tracking-widest uppercase">
                <Sparkles className="h-4 w-4" />
                <span>UNCOMPROMISING PRODUCTION STANDARD</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF]">
                &ldquo;Every project is engineered to withstand the test of time, culture, and scrutiny.&rdquo;
              </h3>
              <p className="text-sm text-[#EDE9FE]/90 font-sans font-normal">
                We accept only a limited volume of brand and campaign commissions each quarter to ensure direct partner-level creative direction on every shoot, plate, and cut.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="rounded-xl border border-[#A78BFA]/30 bg-[#4C1D95] px-5 py-3 shadow-md">
                <div className="flex items-center gap-1 text-[#DDD6FE] mb-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-[11px] font-mono text-white font-semibold">5.0 / 5.0 CLIENT CRITIQUE</div>
              </div>

              <div className="rounded-xl border border-[#A78BFA]/30 bg-[#3B0764] px-5 py-3 shadow-md">
                <div className="text-[#DDD6FE] font-mono text-sm font-bold">Q2/Q3 2026</div>
                <div className="text-[11px] font-grotesk text-[#EDE9FE]/80">SELECT COMMISSIONS OPEN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
