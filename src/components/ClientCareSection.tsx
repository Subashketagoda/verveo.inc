"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const CLIENT_CARE_SLIDES = [
  {
    id: 1,
    title: "We Take Care of Our Clients",
    subtitle: "Slide 01 // The Verveo Foundation",
    src: "/user_media/client_care/client-care-1.jpg",
    description: "The opening manifesto of our client partnership philosophy. We treat every client's business with the care, ambition, and precision of our own."
  },
  {
    id: 2,
    title: "Uncompromising Attention to Detail",
    subtitle: "Slide 02 // Precision Standards",
    src: "/user_media/client_care/client-care-2.jpg",
    description: "From lighting temperatures to typography kerning, perfection isn't an accident. It's the standard we bring to every deliverable."
  },
  {
    id: 3,
    title: "Dedicated Creative Direction",
    subtitle: "Slide 03 // Senior Leadership",
    src: "/user_media/client_care/client-care-3.jpg",
    description: "No junior handoffs. Every brand commission receives hands-on creative guardianship from our principal directors from kickoff to delivery."
  },
  {
    id: 4,
    title: "Long-Term Cultural Impact",
    subtitle: "Slide 04 // Longevity Over Hype",
    src: "/user_media/client_care/client-care-4.jpg",
    description: "Trends fade within weeks. We engineer brand assets, packaging, and commercial films designed to stay culturally iconic for years."
  },
  {
    id: 5,
    title: "Transparent & Seamless Collaboration",
    subtitle: "Slide 05 // True Partnership",
    src: "/user_media/client_care/client-care-5.jpg",
    description: "Real-time communication, crystal-clear milestones, and absolute transparency throughout every stage of production."
  },
  {
    id: 6,
    title: "The Verveo Guarantee",
    subtitle: "Slide 06 // Making Brands Impossible to Ignore",
    src: "/user_media/client_care/client-care-6.jpg",
    description: "When you partner with Verveo, your brand stands out in any feed, billboard, or global shelf. Sincerely, the Verveo Design Team."
  }
];

export default function ClientCareSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance threshold (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CLIENT_CARE_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CLIENT_CARE_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = CLIENT_CARE_SLIDES[currentIndex];

  return (
    <section
      id="client-care"
      className="relative w-full py-24 sm:py-36 px-4 sm:px-10 lg:px-16 bg-[#3B155F] text-[#F8F7F3] border-t border-[#7650A8]/20 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#7650A8]/20 pb-8 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#7650A8] font-bold">06.5 // CLIENT GUARDIANSHIP</span>
              <span className="text-[#7650A8]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#F8F7F3]/60 uppercase">
                6-Part Editorial Series
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-6xl font-black text-[#FFFFFF] tracking-tight leading-[0.96]">
              WE TAKE CARE OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7650A8] via-[#F8F7F3] to-[#7650A8]">
                OUR CLIENTS.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/verveo.inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#7650A8]/30 bg-[#2A0D45] px-5 py-3 font-grotesk text-xs font-semibold tracking-wider text-[#F8F7F3] hover:border-[#7650A8] hover:text-white hover:bg-[#54227A] transition-all min-h-[44px]"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>VIEW ON INSTAGRAM</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Carousel Presentation Container with Touch Swipe Support */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Main Visual Slide Display */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square sm:aspect-4/3 w-full rounded-3xl overflow-hidden border border-[#7650A8]/30 bg-[#2A0D45] shadow-xl group touch-pan-y">
              <Image
                src={currentSlide.src}
                alt={currentSlide.title}
                fill
                priority
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Slide Counter Overlay */}
              <div className="absolute top-4 left-4 z-10 rounded-full border border-[#7650A8]/30 bg-[#100817]/90 px-3.5 py-1 text-xs font-mono font-bold text-[#7650A8] backdrop-blur-md shadow-xs">
                {String(currentIndex + 1).padStart(2, "0")} / {String(CLIENT_CARE_SLIDES.length).padStart(2, "0")}
              </div>

              {/* Zoom Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#7650A8]/30 bg-[#100817]/90 text-[#F8F7F3] hover:text-white hover:bg-[#54227A] backdrop-blur-md shadow-xs transition-colors"
                title="View Full Size"
              >
                <Maximize2 className="h-4 w-4" />
              </button>

              {/* Prev / Next Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#7650A8]/30 bg-[#100817]/90 text-[#F8F7F3] hover:bg-[#54227A] hover:text-white shadow-md backdrop-blur-md transition-all active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#7650A8]/30 bg-[#100817]/90 text-[#F8F7F3] hover:bg-[#54227A] hover:text-white shadow-md backdrop-blur-md transition-all active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Slide Narrative & Thumbnail Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-[#7650A8]/20 bg-[#2A0D45] p-6 sm:p-8 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7650A8] uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{currentSlide.subtitle}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFFFFF]">
                {currentSlide.title}
              </h3>

              <p className="text-sm font-sans text-[#F8F7F3]/80 leading-relaxed">
                {currentSlide.description}
              </p>

              {/* Progress Dots */}
              <div className="flex items-center gap-2 pt-4 border-t border-[#7650A8]/20">
                {CLIENT_CARE_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex ? "w-8 bg-[#7650A8]" : "w-2 bg-[#100817]/60 hover:bg-[#7650A8]/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Filmstrip */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-grotesk text-[#F8F7F3]/70">
                <span className="flex items-center gap-1 font-semibold text-[#FFFFFF]">
                  <Layers className="h-3.5 w-3.5 text-[#7650A8]" />
                  <span>ALL 6 SLIDES IN THIS SET</span>
                </span>
                <span>Click to view</span>
              </div>

              <div className="grid grid-cols-6 gap-2 sm:gap-3">
                {CLIENT_CARE_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border transition-all ${
                      idx === currentIndex
                        ? "border-[#7650A8] ring-2 ring-[#7650A8]/50 scale-105"
                        : "border-[#7650A8]/20 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Size Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#080509]/90 p-4 sm:p-8 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#2A0D45] border border-[#7650A8]/30 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center text-[#F8F7F3]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#7650A8]/20">
              <span className="font-display text-sm sm:text-base font-bold text-[#FFFFFF]">
                {currentSlide.title} ({currentIndex + 1} / {CLIENT_CARE_SLIDES.length})
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="h-10 w-10 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-[#100817] text-[#F8F7F3] hover:bg-[#54227A] hover:text-white transition-colors border border-[#7650A8]/30"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative w-full h-[65vh] my-4">
              <Image
                src={currentSlide.src}
                alt={currentSlide.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="px-4 py-2 rounded-full border border-[#7650A8]/30 bg-[#100817] text-xs font-mono font-bold text-[#F8F7F3] hover:bg-[#54227A] hover:text-white transition-colors"
              >
                PREVIOUS
              </button>
              <button
                onClick={nextSlide}
                className="px-4 py-2 rounded-full border border-[#7650A8]/30 bg-[#100817] text-xs font-mono font-bold text-[#F8F7F3] hover:bg-[#54227A] hover:text-white transition-colors"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
