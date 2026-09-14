"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Sparkles } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#2A0D45] to-[#1A082B] text-[#F8F7F3]/80 border-t border-[#7650A8]/25 pt-16 sm:pt-20 pb-12 px-4 sm:px-10 lg:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {/* Top Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[#7650A8]/20 pb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full shadow-sm">
                <Image
                  src="/images/ve_logo.svg"
                  alt="VE®"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-lg font-black tracking-[0.2em] text-[#FFFFFF] flex items-center">
                VERVEO
                <span className="text-xs text-[#7650A8] ml-0.5 font-sans font-normal">®</span>
              </span>
            </Link>

            <p className="font-grotesk text-xs tracking-wider text-[#7650A8] uppercase font-bold">
              Creative Marketing Agency
            </p>

            <p className="text-sm text-[#F8F7F3]/70 font-sans font-normal leading-relaxed max-w-sm">
              From designing your living brand identity to producing cinematic campaigns across fashion, food, and product storytelling. And there&apos;s @verveo_weddings.
            </p>

            {/* Live Studio Clock */}
            <div className="flex items-center gap-3 font-mono text-xs text-[#F8F7F3]/70 border-l-2 border-[#7650A8] pl-3 py-0.5">
              <span className="h-2 w-2 rounded-full bg-[#7650A8] animate-ping" />
              <span>STUDIO CLOCK: {time || "16:00:00"}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-mono text-xs font-bold text-[#FFFFFF] tracking-widest uppercase">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs font-grotesk tracking-wider">
              <li>
                <Link href="/work" className="hover:text-[#7650A8] transition-colors">
                  WORK
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#7650A8] transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#7650A8] transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#7650A8] transition-colors">
                  PROCESS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#7650A8] transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram & Channels */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-mono text-xs font-bold text-[#FFFFFF] tracking-widest uppercase">
              INSTAGRAM &amp; CONTACT
            </div>
            <ul className="space-y-2.5 text-xs font-grotesk">
              <li>
                <a
                  href="https://www.instagram.com/verveo.inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#7650A8] transition-colors"
                >
                  <InstagramIcon className="h-3.5 w-3.5 text-[#7650A8]" />
                  <span>@verveo.inc</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/verveo_weddings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#7650A8] transition-colors"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#7650A8]" />
                  <span>@verveo_weddings</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@verveocreative.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-[#7650A8]" />
                  <span>hello@verveocreative.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-full border border-[#7650A8]/30 bg-[#100817] px-4 py-2.5 text-xs font-grotesk text-[#F8F7F3] hover:bg-[#54227A] hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>

            <span className="text-[11px] font-mono text-[#F8F7F3]/30 hidden md:inline">
              VERVEO CREATIVE INC.
            </span>
          </div>
        </div>

        {/* Massive Watermark Typography: "BUILT TO BE SEEN." */}
        <div className="relative select-none text-center overflow-hidden py-8">
          <div className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tight text-[#3B155F]/20 leading-none whitespace-nowrap">
            BUILT TO BE SEEN.
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-grotesk text-[#F8F7F3]/50">
          <div>
            &copy; {new Date().getFullYear()} Verveo Creative Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-center">
            <span>&ldquo;Your business doesn&apos;t need ads, it needs movies.&rdquo;</span>
            <span className="text-[#7650A8]/30">&bull;</span>
            <span>BUILT TO BE SEEN.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
