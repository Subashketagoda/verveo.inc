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
      title="Tap to enter"
    >
      {/* Deep Near-Black Background */}
      <div className="absolute inset-0 bg-[#080509]">
        {/* Soft centered purple ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#3B155F]/35 blur-[120px] pointer-events-none" />
      </div>

      {/* Clean Minimalist Centerpiece */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center space-y-5 max-w-xs w-full">
          
          {/* VE® Emblem with subtle violet halo */}
          <div className="relative h-20 w-20 sm:h-24 sm:w-24">
            <div className="absolute inset-0 rounded-full bg-[#7650A8]/25 blur-xl animate-pulse" />
            <Image
              src="/images/ve_logo.svg"
              alt="VERVEO"
              fill
              sizes="96px"
              className="object-contain drop-shadow-[0_0_25px_rgba(118,80,168,0.6)]"
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
                className="h-full bg-gradient-to-r from-[#54227A] via-[#7650A8] to-[#FFFFFF] transition-[width] duration-100 ease-linear shadow-[0_0_10px_#7650A8]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#F8F7F3]/60">
              <span className="tracking-widest">LOADING</span>
              <span className="text-[#7650A8] font-bold">{progress}%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
