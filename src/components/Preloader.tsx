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
      {/* Rich Multi-Layered Purple & White Mix Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#F6F0FC] to-[#ECE0F8] overflow-hidden">
        {/* Soft Radial Ambient Glowing Auras */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] max-w-full rounded-full bg-[radial-gradient(circle,rgba(118,80,168,0.25)_0%,rgba(84,34,122,0.12)_45%,transparent_75%)] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(84,34,122,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(118,80,168,0.22)_0%,transparent_70%)] pointer-events-none" />

        {/* Fine Architectural Grid & Rule Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,21,95,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,21,95,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Technical Corner Crosshairs & Framing Accents */}
        <div className="absolute top-6 left-6 font-mono text-[10px] text-[#7650A8]/60 pointer-events-none hidden sm:block">
          + // [00.LAT_06.9271]
        </div>
        <div className="absolute top-6 right-6 font-mono text-[10px] text-[#7650A8]/60 pointer-events-none hidden sm:block">
          // [LON_79.8612] +
        </div>
        <div className="absolute bottom-6 left-6 font-mono text-[10px] text-[#7650A8]/60 pointer-events-none hidden sm:block">
          + // EST. 2026 VERVEO
        </div>
        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-[#7650A8]/60 pointer-events-none hidden sm:block">
          COMMERCIAL CINEMA +
        </div>
      </div>

      {/* Main Structural Editorial Layout */}
      <div className="relative h-full w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 z-10">
        
        {/* Top Header Strip */}
        <div className="flex items-center justify-between border-b border-[#7650A8]/20 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#54227A] animate-ping" />
            <span className="font-mono text-xs font-bold tracking-widest text-[#2A0D45]">
              VERVEO CREATIVE INC.
            </span>
            <span className="text-[#7650A8]/40 hidden sm:inline">/</span>
            <span className="font-grotesk text-[11px] text-[#54227A]/80 tracking-wider uppercase hidden sm:inline">
              Official Identity & Cinema Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-[#7650A8] font-bold px-2.5 py-0.5 rounded-full bg-white/80 border border-[#7650A8]/25 shadow-xs">
              INITIALIZING // 2026
            </span>
          </div>
        </div>

        {/* Centerpiece Stage */}
        <div className="my-auto flex flex-col items-center justify-center text-center space-y-8 max-w-xl mx-auto w-full">
          
          {/* Animated Orbital Emblem Container */}
          <div className="relative flex items-center justify-center">
            {/* Outer Concentric Rotating Dashed Ring */}
            <div className="absolute -inset-10 sm:-inset-14 rounded-full border border-dashed border-[#7650A8]/30 animate-[spin_20s_linear_infinite] pointer-events-none" />
            
            {/* Inner Precision Solid Ring */}
            <div className="absolute -inset-5 sm:-inset-7 rounded-full border border-[#7650A8]/35 pointer-events-none" />
            
            {/* Pulsing Violet Ambient Halo */}
            <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(118,80,168,0.4)_0%,transparent_70%)] animate-pulse" />

            {/* VE® Logo */}
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 drop-shadow-[0_15px_30px_rgba(84,34,122,0.3)]">
              <Image
                src="/images/ve_logo.svg"
                alt="VERVEO"
                fill
                sizes="112px"
                className="object-contain"
                priority
              />
            </div>

            {/* Orbiting Satellite Marker */}
            <div className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#54227A] border-2 border-white shadow-md animate-bounce" />
          </div>

          {/* Typography & High-Fashion Monogram Wordmark */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-[#7650A8]/25 px-3 py-1 text-[10px] font-mono tracking-widest text-[#54227A] uppercase shadow-xs">
              <span>STORIES OVER ADS</span>
              <span className="text-[#7650A8]">&bull;</span>
              <span>COMMERCIAL CINEMA</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-black tracking-[0.25em] text-[#2A0D45] flex items-center justify-center pl-2">
              <span>VERVEO</span>
              <span className="text-base sm:text-lg text-[#54227A] font-sans ml-1 font-bold">&reg;</span>
            </h1>

            <p className="text-xs sm:text-sm font-sans text-[#3B155F]/80 font-medium tracking-wide">
              Commercial Films &bull; Brand Architecture &bull; Media Campaigns
            </p>
          </div>

          {/* Dynamic Editorial Phase Ticker + Precision Progress Line */}
          <div className="w-full max-w-sm sm:max-w-md space-y-3 pt-2">
            {/* Phase Status Banner (Smoothly shifts as progress increases) */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#54227A] font-bold tracking-wider">
                {progress < 25 && "PHASE 01 // ARCHITECTING IDENTITY SYSTEMS"}
                {progress >= 25 && progress < 50 && "PHASE 02 // SYNCHRONIZING 4K RAW CINEMA"}
                {progress >= 50 && progress < 75 && "PHASE 03 // ORCHESTRATING TACTILE TEXTURES"}
                {progress >= 75 && progress < 95 && "PHASE 04 // FINALIZING COMMERCIAL ARCHIVE"}
                {progress >= 95 && "PHASE 05 // SYSTEM SYNCHRONIZED — ENTERING"}
              </span>
              <span className="text-[#2A0D45] font-black text-sm">
                {progress}%
              </span>
            </div>

            {/* Segmented Dual-Track Progress Bar */}
            <div className="relative h-2 w-full bg-[#E5DBF0] rounded-full overflow-hidden border border-[#7650A8]/20 shadow-inner p-[1px]">
              <div
                className="h-full bg-gradient-to-r from-[#3B155F] via-[#54227A] to-[#7650A8] rounded-full transition-[width] duration-100 ease-linear shadow-[0_0_12px_rgba(84,34,122,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom Telemetry Meta */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#7650A8]/80 pt-0.5">
              <span>BUFF: 4K RAW</span>
              <span className="font-bold text-[#54227A]">3.0s PRECISION SEQUENCE</span>
              <span>FPS: 60</span>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Footer & Interactive Bypass Pill */}
        <div className="border-t border-[#7650A8]/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#54227A]/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#54227A]" />
            <span>COMMISSIONS 2026: OPEN FOR INQUIRY</span>
          </div>

          {/* Interactive Tap-to-Enter Capsule Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7650A8]/30 bg-white/90 px-4 py-1.5 text-[11px] font-mono font-bold text-[#2A0D45] shadow-sm hover:border-[#54227A] hover:bg-white transition-all">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7650A8] animate-pulse" />
            <span>TAP ANYWHERE TO BYPASS</span>
          </div>

          <div className="text-[11px] hidden sm:block">
            VERVEO&reg; &bull; ALL RIGHTS RESERVED
          </div>
        </div>

      </div>
    </div>
  );
}
