"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<"loading" | "ready" | "exit" | "hidden">("loading");

  useEffect(() => {
    const startTime = performance.now();
    const TOTAL_LOADING_TIME = 2600; // 2.6s progress climb, then 0.4s smooth curtain reveal = 3.0s

    const frame = () => {
      const elapsed = performance.now() - startTime;
      const t = Math.min(elapsed / TOTAL_LOADING_TIME, 1);

      // Smooth cubic ease-out progression
      const easeProgress = Math.floor((1 - Math.pow(1 - t, 2.2)) * 100);
      setProgress(easeProgress);

      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setProgress(100);
        setStage("ready");

        // At 2700ms: trigger clean curtain exit
        setTimeout(() => {
          setStage("exit");

          // At 3300ms: unmount from DOM
          setTimeout(() => {
            setStage("hidden");
          }, 600);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (stage === "hidden") return null;

  const isExiting = stage === "exit";

  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-none select-none transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Deep Near-Black Velvet Background */}
      <div className="absolute inset-0 bg-[#080509]">
        {/* Soft centered purple ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#3B155F]/35 blur-[160px] pointer-events-none" />
      </div>

      {/* Clean Minimalist Centerpiece */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-xs w-full">
          
          {/* VE® Emblem with subtle violet halo */}
          <div className="relative h-20 w-20 sm:h-24 sm:w-24">
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
          <div className="w-48 sm:w-56 space-y-2 pt-2">
            <div className="h-[2px] w-full bg-[#2A0D45] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#54227A] via-[#7650A8] to-[#FFFFFF] transition-all duration-75 ease-out shadow-[0_0_10px_#7650A8]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Quiet Minimal Percentage */}
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
