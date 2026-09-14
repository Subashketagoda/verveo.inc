"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<"loading" | "ready" | "exit" | "hidden">("loading");
  const hasFinishedRef = useRef(false);

  useEffect(() => {
    // Exact 3.0 seconds loading time as requested by user
    const TOTAL_LOADING_TIME = 3000;
    const startTime = performance.now();

    const finishLoading = () => {
      if (hasFinishedRef.current) return;
      hasFinishedRef.current = true;

      setProgress(100);
      setStage("ready");

      setTimeout(() => {
        setStage("exit");
        setTimeout(() => {
          setStage("hidden");
        }, 400);
      }, 100);
    };

    // Smooth 60fps progress update
    let animId: number;
    const frame = () => {
      if (hasFinishedRef.current) return;

      const elapsed = performance.now() - startTime;
      const t = Math.min(elapsed / TOTAL_LOADING_TIME, 1);

      // Smooth easing curve reaching 100% precisely at 3 seconds
      const currentProgress = Math.min(Math.floor(t * 100), 99);
      setProgress(currentProgress);

      if (t < 1) {
        animId = requestAnimationFrame(frame);
      } else {
        finishLoading();
      }
    };

    animId = requestAnimationFrame(frame);

    // Guaranteed hard fallback: mobile browser throttle protection
    const fallbackTimer = setTimeout(() => {
      finishLoading();
    }, TOTAL_LOADING_TIME + 50);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleSkip = () => {
    if (hasFinishedRef.current && stage === "hidden") return;
    hasFinishedRef.current = true;
    setStage("exit");
    setTimeout(() => setStage("hidden"), 200);
  };

  if (stage === "hidden") return null;

  const isExiting = stage === "exit";

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] cursor-pointer select-none transition-all duration-400 ease-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ touchAction: "manipulation" }}
      title="Tap anywhere to enter"
    >
      {/* Exact Royal Purple Brand Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6D28D9] via-[#7C3AED] to-[#5B21B6] overflow-hidden">
        {/* Luminous Radial Top Spotlight matching Hero & Page */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#8B5CF6_0%,#7C3AED_45%,#5B21B6_100%)] opacity-95" />
        {/* Soft Radial Ambient Glowing Auras */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] max-w-full rounded-full bg-[radial-gradient(circle,rgba(221,214,254,0.18)_0%,rgba(139,92,246,0.12)_50%,transparent_75%)] pointer-events-none" />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.22)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(221,214,254,0.16)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Main Clean Centerpiece */}
      <div className="relative h-full w-full flex flex-col items-center justify-between p-8 sm:p-12 z-10 text-white">
        
        {/* Subtle Top Tagline */}
        <div className="text-center">
          <span className="font-mono text-[11px] font-semibold text-[#DDD6FE]/80 tracking-[0.25em] uppercase">
            CREATIVE MARKETING AGENCY // 2026
          </span>
        </div>

        {/* Center Stage: Emblem, Brand Name & Progress */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-md w-full my-auto">
          
          {/* VE® Emblem with Soft Ambient Glow */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_70%)] animate-pulse" />
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 drop-shadow-[0_12px_28px_rgba(59,7,100,0.5)]">
              <Image
                src="/images/ve_logo.svg"
                alt="VERVEO"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-1.5">
            <h1 className="font-display text-3xl sm:text-5xl font-black tracking-[0.25em] text-[#FFFFFF] flex items-center justify-center pl-2 drop-shadow-md">
              <span>VERVEO</span>
              <span className="text-sm sm:text-base text-[#DDD6FE] font-sans ml-1 font-bold">&reg;</span>
            </h1>
            <p className="text-xs sm:text-sm font-sans text-[#DDD6FE] font-medium tracking-wide">
              Stories Over Ads &bull; Commercial Cinema
            </p>
          </div>

          {/* Clean Elegant Progress Indicator */}
          <div className="w-full max-w-xs space-y-2.5 pt-3">
            <div className="h-[2.5px] w-full bg-[#3B0764]/90 rounded-full overflow-hidden border border-[#A78BFA]/30">
              <div
                className="h-full bg-gradient-to-r from-white via-[#DDD6FE] to-white transition-[width] duration-100 ease-linear shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#DDD6FE]/80 tracking-wider uppercase font-semibold text-[11px]">
                {progress < 100 ? "INITIALIZING EXPERIENCE..." : "ACCESS GRANTED"}
              </span>
              <span className="text-white font-black font-mono">
                {progress}%
              </span>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Tap Hint */}
        <div className="text-center">
          <span className="text-[10px] font-mono tracking-widest text-[#DDD6FE]/60 uppercase hover:text-[#DDD6FE] transition-colors">
            TAP ANYWHERE TO BYPASS
          </span>
        </div>

      </div>
    </div>
  );
}
