"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-2 sm:p-6 lg:p-10 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-[#7650A8]/30 bg-[#100817] text-[#F8F7F3] shadow-[0_25px_60px_rgba(16,8,23,0.9)] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#7650A8]/20 bg-[#2A0D45]/95 px-4 sm:px-6 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs text-[#7650A8] font-bold">CASE STUDY // {project.year}</span>
            <span className="text-[#7650A8]/40 hidden sm:inline">|</span>
            <span className="text-xs font-grotesk text-[#F8F7F3]/70 uppercase tracking-wider hidden sm:inline">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={onPrev}
              className="flex h-9 w-9 min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-[#7650A8]/30 bg-[#100817] text-[#F8F7F3] hover:border-[#7650A8] hover:text-[#7650A8] transition-colors"
              title="Previous Project (Left Arrow)"
              aria-label="Previous Project"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={onNext}
              className="flex h-9 w-9 min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-[#7650A8]/30 bg-[#100817] text-[#F8F7F3] hover:border-[#7650A8] hover:text-[#7650A8] transition-colors"
              title="Next Project (Right Arrow)"
              aria-label="Next Project"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="flex h-9 w-9 min-h-[36px] min-w-[36px] items-center justify-center rounded-full bg-[#100817] border border-[#7650A8]/30 text-[#F8F7F3] hover:bg-[#54227A] hover:text-white transition-colors ml-1"
              title="Close (ESC)"
              aria-label="Close Case Study"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-8 lg:p-10 space-y-8 sm:space-y-10">
          {/* Hero Media */}
          <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-black border border-[#7650A8]/30 shadow-sm">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-transparent to-transparent opacity-85" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="rounded-full bg-[#100817]/80 px-3 py-1 text-xs font-mono text-[#7650A8] border border-[#7650A8]/30 backdrop-blur-md">
                CLIENT: {project.client}
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-black text-[#F8F7F3] tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4 border-y border-[#7650A8]/20 py-6">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="font-mono text-2xl sm:text-3xl font-black text-[#7650A8]">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] font-grotesk tracking-widest text-[#F8F7F3]/70 uppercase">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Two-Column Deep Case Study Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6 text-[#F8F7F3]/80 font-sans leading-relaxed">
              <div>
                <h4 className="text-xs font-grotesk tracking-[0.2em] text-[#7650A8] uppercase font-bold mb-2">
                  01 // The Challenge
                </h4>
                <p className="text-sm sm:text-base text-[#F8F7F3]/80 font-normal">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-grotesk tracking-[0.2em] text-[#7650A8] uppercase font-bold mb-2">
                  02 // Strategic Solution
                </h4>
                <p className="text-sm sm:text-base text-[#F8F7F3]/80 font-normal">
                  {project.strategy}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-grotesk tracking-[0.2em] text-[#7650A8] uppercase font-bold mb-2">
                  03 // Creative Direction &amp; Execution
                </h4>
                <p className="text-sm sm:text-base text-[#F8F7F3]/80 font-normal">
                  {project.creativeDirection}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-grotesk tracking-[0.2em] text-[#7650A8] uppercase font-bold mb-2">
                  04 // Final Impact &amp; Result
                </h4>
                <p className="text-sm sm:text-base text-[#F8F7F3]/80 font-normal">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-xl border border-[#7650A8]/30 bg-[#2A0D45]/80 p-6 space-y-4 shadow-sm">
                <h4 className="font-display text-sm font-bold text-[#F8F7F3] tracking-wider uppercase">
                  Project Deliverables
                </h4>
                <ul className="space-y-2">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-grotesk text-[#F8F7F3]/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#7650A8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#7650A8]/20">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#54227A] to-[#7650A8] py-3 text-xs font-grotesk font-bold tracking-wider text-white transition-all hover:scale-105 shadow-md"
                  >
                    <span>Request Similar Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Images */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div className="space-y-4 pt-4 border-t border-[#7650A8]/20">
              <h4 className="text-xs font-grotesk tracking-widest text-[#F8F7F3]/70 uppercase font-semibold">
                Production Stills &amp; Assets
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-4/3 overflow-hidden rounded-xl border border-[#7650A8]/30 bg-[#100817]">
                    <Image
                      src={img}
                      alt={`${project.title} still ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
