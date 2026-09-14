"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Film, Sparkles, Utensils } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 bg-[#2A0D45] text-[#F8F7F3] border-t border-[#7650A8]/20 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 border-b border-[#7650A8]/20 pb-6 mb-16">
          <span className="font-mono text-xs text-[#7650A8] font-bold">05 // ABOUT THE STUDIO</span>
          <span className="text-[#7650A8]/40">/</span>
          <span className="text-xs font-grotesk tracking-[0.25em] text-[#F8F7F3]/70 uppercase">
            Marketing Agency &bull; Culture &bull; Storytelling
          </span>
        </div>

        {/* Editorial Bold Headline */}
        <div className="space-y-6 max-w-5xl">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#F8F7F3] tracking-tight leading-[0.95]">
            WE ARE A CREATIVE <br />
            MARKETING AGENCY <br />
            BUILT AROUND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F3] to-[#7650A8]">
              IDEAS THAT GET NOTICED.
            </span>
          </h2>

          <p className="text-lg sm:text-2xl text-[#F8F7F3]/80 font-sans font-normal leading-relaxed max-w-3xl pt-4">
            From designing your living brand identity to producing full-scale media campaigns, Verveo is the creative partner for ambitious brands ready to command culture.
          </p>
        </div>

        {/* Large Photographic Collage Mixing Portraits, Campaigns, Products & BTS */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4-Image Editorial Collage (Col 1-7) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {/* 1. Products: ALATA Cafe Space */}
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-[#7650A8]/30 bg-[#100817] group">
              <Image
                src="/user_media/verveo-cafe-1.jpg"
                alt="Product: ALATA Cafe Space & Architecture"
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-md bg-[#100817]/80 px-2.5 py-1 text-[10px] font-mono text-[#7650A8] border border-[#7650A8]/30 backdrop-blur-md font-semibold">
                SPACES &bull; VERVEO CAFE
              </div>
            </div>

            {/* 2. Portraits: Art Exhibition */}
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-[#7650A8]/30 bg-[#100817] mt-8 group">
              <Image
                src="/user_media/alata-paintings.jpg"
                alt="Portrait: Curated Fine Art Exhibition"
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-md bg-[#100817]/80 px-2.5 py-1 text-[10px] font-mono text-[#F8F7F3] border border-[#7650A8]/30 backdrop-blur-md">
                EXHIBITION &bull; FINE ART
              </div>
            </div>

            {/* 3. Campaigns: Client Care Manifesto */}
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-[#7650A8]/30 bg-[#100817] -mt-4 group">
              <Image
                src="/user_media/client_care/client-care-1.jpg"
                alt="Campaign: Client Care Strategic Manifesto"
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-md bg-[#100817]/80 px-2.5 py-1 text-[10px] font-mono text-[#7650A8] border border-[#7650A8]/30 backdrop-blur-md font-semibold">
                PARTNERSHIP &bull; CLIENT CARE
              </div>
            </div>

            {/* 4. Behind-The-Scenes: Design Team Studio Craft */}
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-[#7650A8]/30 bg-[#100817] mt-4 group">
              <Image
                src="/user_media/verveo-design-team-1.jpg"
                alt="Behind-The-Scenes: Verveo Design Team Studio Craft"
                fill
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 rounded-md bg-[#100817]/80 px-2.5 py-1 text-[10px] font-mono text-[#F8F7F3] border border-[#7650A8]/30 backdrop-blur-md">
                BTS &bull; DESIGN TEAM CRAFT
              </div>
            </div>
          </div>

          {/* Real Story Narrative Column (Col 8-12) */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6">
            <div className="space-y-5 text-[#F8F7F3]/80 text-sm sm:text-base font-sans font-normal leading-relaxed">
              <p>
                Founded on the premise that <span className="text-white font-semibold">&ldquo;Your business doesn&apos;t need ads, it needs movies,&rdquo;</span> Verveo Creative Inc. operates as a multidisciplinary marketing agency combining commercial rigor with artistic conviction.
              </p>
              <p>
                We do not create cookie-cutter corporate content. Our portfolio ranges from designing custom packaging systems for modern cafes (like the acclaimed ALATA brand rollout) to directing high-speed culinary macro cinema and capturing studio fashion lookbooks.
              </p>
              <p>
                Alongside commercial media, our dedicated luxury wedding division, <span className="text-[#7650A8] font-semibold">@verveo_weddings</span>, documents rare matrimonial stories on 35mm with poetic cinematic elegance.
              </p>
            </div>

            {/* Studio Metrics / Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#7650A8]/20 pt-6">
              <div className="space-y-1">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-[#7650A8]">74+</span>
                <p className="text-xs font-grotesk text-[#F8F7F3]/70 uppercase tracking-wider">
                  Visual Productions
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-white">100%</span>
                <p className="text-xs font-grotesk text-[#F8F7F3]/70 uppercase tracking-wider">
                  Original Creative Direction
                </p>
              </div>
            </div>

            {/* Direct Channel Link */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/verveo.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-grotesk font-bold tracking-wider text-[#7650A8] hover:text-white transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>EXPLORE OUR ARCHIVE ON INSTAGRAM</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
