"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<"loading" | "ready" | "exit" | "hidden">("loading");

  useEffect(() => {
    // If already seen in this session, skip entirely for instant mobile/desktop browsing
    try {
      if (sessionStorage.getItem("verveo_preloader_seen") === "true") {
        setStage("hidden");
        return;
      }
    } catch {
      // Ignore if sessionStorage is disabled/restricted
    }

    const startTime = performance.now();
    // Ultra-snappy on mobile (650ms) and brisk on desktop (950ms)
    const isMobileDevice = typeof window !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
    const TOTAL_LOADING_TIME = isMobileDevice ? 650 : 950;

    const frame = () => {
      const elapsed = performance.now() - startTime;
      const t = Math.min(elapsed / TOTAL_LOADING_TIME, 1);

      // Smooth fast ease-out
      const easeProgress = Math.floor((1 - Math.pow(1 - t, 2.5)) * 100);
      setProgress(easeProgress);

      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setProgress(100);
        setStage("ready");

        try {
          sessionStorage.setItem("verveo_preloader_seen", "true");
        } catch {}

        setTimeout(() => {
          setStage("exit");
          setTimeout(() => {
            setStage("hidden");
          }, 450);
        }, 80);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleSkip = () => {
    try {
      sessionStorage.setItem("verveo_preloader_seen", "true");
    } catch {}
    setStage("exit");
    setTimeout(() => setStage("hidden"), 300);
  };

  if (stage === "hidden") return null;

  const isExiting = stage === "exit";

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
      title="Tap to enter"
    >
      {/* Deep Near-Black Velvet Background */}
      <div className="absolute inset-0 bg-[#080509]">
        {/* Soft centered purple ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-[#3B155F]/35 blur-[140px] pointer-events-none" />
      </div>

      {/* Clean Minimalist Centerpiece */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center space-y-5 max-w-xs w-full">
          
          {/* VE® Emblem with subtle violet halo */}
          <div className="relative h-18 w-18 sm:h-22 sm:w-22">
            <div className="absolute inset-0 rounded-full bg-[#7650A8]/20 blur-xl animate-pulse" />
            <Image
              src="/images/ve_logo.svg"
              alt="VERVEO"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(118,80,168,0.5)]"
              priority
            />
          </div>

          {/* Minimal Brand Wordmark */}
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-black tracking-[0.3em] text-[#FFFFFF] flex items-center justify-center">
              <span>VERVEO</span>
              <span className="text-xs text-[#7650A8] font-sans ml-1 font-normal">&reg;</span>
            </h1>
          </div>

          {/* Ultra-Slim Progress Line */}
          <div className="w-44 sm:w-52 space-y-2 pt-1">
            <div className="h-[2px] w-full bg-[#2A0D45] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#54227A] via-[#7650A8] to-[#FFFFFF] transition-all duration-75 ease-out shadow-[0_0_10px_#7650A8]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#F8F7F3]/50">
              <span className="tracking-widest">LOADING</span>
              <span className="text-[#7650A8] font-bold">{progress}%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
