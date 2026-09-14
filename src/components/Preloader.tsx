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
      {/* Luminous Purple & White Mix Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#F5EFFB] to-[#E9DCF7] overflow-hidden">
        {/* Soft Radial Purple Ambient Light (Zero GPU blur overhead) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] max-w-full rounded-full bg-[radial-gradient(circle,rgba(118,80,168,0.22)_0%,rgba(84,34,122,0.12)_50%,transparent_75%)] pointer-events-none" />
        
        {/* Corner Purple Accents */}
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(84,34,122,0.16)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(118,80,168,0.2)_0%,transparent_70%)] pointer-events-none" />

        {/* Delicate Architectural Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,21,95,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,21,95,0.035)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      </div>

      {/* Clean Minimalist Centerpiece */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center space-y-5 max-w-xs w-full">
          
          {/* VE® Emblem with subtle violet halo */}
          <div className="relative h-20 w-20 sm:h-24 sm:w-24">
            <div className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(118,80,168,0.35)_0%,transparent_70%)] animate-pulse" />
            <Image
              src="/images/ve_logo.svg"
              alt="VERVEO"
              fill
              sizes="96px"
              className="object-contain drop-shadow-[0_10px_25px_rgba(84,34,122,0.25)]"
              priority
            />
          </div>

          {/* Minimal Brand Wordmark in Deep Royal Purple */}
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-black tracking-[0.3em] text-[#2A0D45] flex items-center justify-center">
              <span>VERVEO</span>
              <span className="text-xs text-[#54227A] font-sans ml-1 font-bold">&reg;</span>
            </h1>
          </div>

          {/* Ultra-Slim Progress Line */}
          <div className="w-48 sm:w-56 space-y-2 pt-2">
            <div className="h-[2.5px] w-full bg-[#E5DBF0] rounded-full overflow-hidden border border-[#7650A8]/20">
              <div
                className="h-full bg-gradient-to-r from-[#3B155F] via-[#54227A] to-[#7650A8] transition-[width] duration-100 ease-linear shadow-[0_0_8px_rgba(84,34,122,0.35)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#54227A]/80 font-medium">
              <span className="tracking-widest">LOADING</span>
              <span className="text-[#2A0D45] font-bold">{progress}%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
