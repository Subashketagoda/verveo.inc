"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const NAV_LINKS = [
  { name: "WORK", href: "/work", tag: "Cinema & Work" },
  { name: "SERVICES", href: "/services", tag: "Capabilities" },
  { name: "ABOUT", href: "/about", tag: "Studio Doctrine" },
  { name: "PROCESS", href: "/process", tag: "Our Workflow" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOverLightBg, setIsOverLightBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScrollAndTheme = () => {
      setScrolled(window.scrollY > 30);

      if (pathname !== "/") {
        setIsOverLightBg(false);
        return;
      }

      // Check if current header position intersects with any light-background section
      const lightSectionSelectors = ["#statement", "#services", "#about", "#instagram"];
      const headerCheckY = 70; // 70px from top of viewport

      let overLight = false;
      for (const selector of lightSectionSelectors) {
        const el = document.querySelector(selector);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerCheckY && rect.bottom >= headerCheckY) {
            overLight = true;
            break;
          }
        }
      }

      setIsOverLightBg(overLight);
    };

    handleScrollAndTheme();
    window.addEventListener("scroll", handleScrollAndTheme, { passive: true });
    window.addEventListener("resize", handleScrollAndTheme, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScrollAndTheme);
      window.removeEventListener("resize", handleScrollAndTheme);
    };
  }, [pathname]);

  // Prevent background scroll and support ESC key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Main Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 transition-all duration-300 ${
          scrolled ? "pt-2.5 sm:pt-3" : "pt-4 sm:pt-7"
        }`}
      >
        <nav
          className={`flex w-full max-w-7xl items-center justify-between rounded-full transition-all duration-300 ${
            isOverLightBg
              ? scrolled
                ? "border border-[#A78BFA]/40 bg-[#4C1D95]/95 py-2 px-4 sm:px-6 shadow-[0_12px_36px_rgba(76,29,149,0.35)] backdrop-blur-xl"
                : "border border-[#A78BFA]/30 bg-[#4C1D95]/90 py-2.5 sm:py-3 px-4 sm:px-6 backdrop-blur-md shadow-[0_8px_30px_rgba(76,29,149,0.25)]"
              : scrolled
                ? "border border-[#7650A8]/30 bg-[#FFFFFF]/95 py-2 px-4 sm:px-6 shadow-[0_12px_36px_rgba(59,21,95,0.16)] backdrop-blur-xl"
                : "border border-[#7650A8]/25 bg-[#FFFFFF]/90 py-2.5 sm:py-3 px-4 sm:px-6 backdrop-blur-md shadow-[0_8px_30px_rgba(59,21,95,0.12)]"
          }`}
        >
          {/* Left: Brand Monogram & Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95"
            aria-label="Verveo Creative Homepage"
          >
            <div className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-full shadow-[0_0_12px_rgba(124,58,237,0.35)] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/ve_logo.svg"
                alt="VE®"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-display text-xs sm:text-sm md:text-base font-black tracking-[0.2em] transition-colors duration-300 flex items-center ${
                isOverLightBg ? "text-white" : "text-[#2A0D45]"
              }`}
            >
              VERVEO
              <span
                className={`text-[9px] sm:text-[10px] ml-0.5 font-sans font-bold transition-colors duration-300 ${
                  isOverLightBg ? "text-[#DDD6FE]" : "text-[#54227A]"
                }`}
              >
                ®
              </span>
            </span>
          </Link>

          {/* Center: Desktop Navigation Links (Clean & balanced) */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 font-grotesk text-xs font-bold tracking-widest transition-colors duration-300 group ${
                    isOverLightBg
                      ? isActive
                        ? "text-white"
                        : "text-[#DDD6FE]/80 hover:text-white"
                      : isActive
                        ? "text-[#54227A]"
                        : "text-[#2A0D45]/75 hover:text-[#54227A]"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive ? (
                    <span
                      className={`absolute bottom-0.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full transition-all duration-300 ${
                        isOverLightBg
                          ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                          : "bg-[#54227A] shadow-[0_0_6px_#54227A]"
                      }`}
                    />
                  ) : (
                    <span
                      className={`absolute bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-4 rounded-full ${
                        isOverLightBg ? "bg-[#DDD6FE]/70" : "bg-[#7650A8]/60"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Desktop CTA & Mobile Toggle Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Start a Project */}
            <Link
              href="/contact"
              className={`group relative hidden sm:inline-flex items-center gap-2 overflow-hidden rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-grotesk text-[11px] sm:text-xs font-bold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 ${
                isOverLightBg
                  ? "bg-white text-[#5B21B6] shadow-[0_0_20px_rgba(255,255,255,0.45)] hover:bg-[#F3E8FF] hover:shadow-[0_0_28px_rgba(255,255,255,0.7)]"
                  : "bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]"
              }`}
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Menu Trigger: Modern Capsule Pill */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 md:hidden transition-all duration-300 active:scale-95 shadow-xs ${
                isOverLightBg
                  ? "border border-[#A78BFA]/40 bg-[#3B0764] text-white hover:border-[#DDD6FE] hover:bg-[#5B21B6]"
                  : "border border-[#7650A8]/30 bg-[#F5EFFB] text-[#2A0D45] hover:border-[#7650A8] hover:bg-[#E9DCF7]"
              }`}
            >
              <span className="font-mono text-[11px] font-bold tracking-wider">MENU</span>
              <div className="flex flex-col gap-1 w-3.5">
                <span
                  className={`h-[1.5px] w-full rounded-full transition-colors duration-300 ${
                    isOverLightBg ? "bg-white" : "bg-[#2A0D45]"
                  }`}
                />
                <span
                  className={`h-[1.5px] w-2.5 rounded-full ml-auto transition-colors duration-300 ${
                    isOverLightBg ? "bg-[#DDD6FE]" : "bg-[#54227A]"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Luxury Mobile Menu Overlay in Purple & White Mix */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-[#FFFFFF] via-[#F8F7F3] to-[#EFEAF6] text-[#2A0D45] md:hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        style={{ minHeight: "100dvh" }}
      >
        {/* Ambient Violet Glows (radial-gradient, 0% blur overhead) */}
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(84,34,122,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(118,80,168,0.2)_0%,transparent_70%)] pointer-events-none" />

        {/* Top Header inside Overlay for Seamless Close Flow */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#7650A8]/20 relative z-10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5"
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-full shadow-[0_0_12px_rgba(84,34,122,0.35)]">
              <Image
                src="/images/ve_logo.svg"
                alt="VE®"
                fill
                sizes="28px"
                className="object-contain"
              />
            </div>
            <span className="font-display text-sm font-black tracking-[0.2em] text-[#2A0D45]">
              VERVEO<span className="text-[10px] text-[#54227A] ml-0.5 font-bold">®</span>
            </span>
          </Link>

          {/* Close Button Pill */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            className="flex items-center gap-1.5 rounded-full border border-[#7650A8]/30 bg-[#F5EFFB] px-3.5 py-1.5 text-xs font-mono font-bold text-[#2A0D45] shadow-xs transition-all hover:bg-[#E9DCF7] active:scale-95"
          >
            <span className="tracking-wider">CLOSE</span>
            <X className="h-3.5 w-3.5 text-[#54227A]" />
          </button>
        </div>

        {/* Scrollable Navigation Body with Perfect Viewport Fit */}
        <div className="flex-1 flex flex-col justify-between px-6 py-6 overflow-y-auto overscroll-contain relative z-10">
          {/* Menu Links */}
          <div className="space-y-1">
            <div className="font-mono text-[10px] text-[#54227A] tracking-[0.25em] uppercase font-bold mb-4">
              // INDEX DIRECTORY
            </div>

            {/* HOME Link */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`group flex items-center justify-between py-2.5 border-b border-[#7650A8]/15 transition-colors ${
                pathname === "/" ? "text-[#54227A]" : "text-[#2A0D45] hover:text-[#54227A]"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#7650A8] font-bold">00</span>
                <span className="font-display text-2xl font-black tracking-tight">HOME</span>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#54227A]" />
            </Link>

            {/* Other Navigation Links */}
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between py-2.5 border-b border-[#7650A8]/15 transition-colors ${
                    isActive ? "text-[#54227A]" : "text-[#2A0D45] hover:text-[#54227A]"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#7650A8] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-2xl font-black tracking-tight">
                      {link.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[11px] text-[#2A0D45]/50 hidden sm:inline">
                      {link.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#54227A]" />
                  </div>
                </Link>
              );
            })}

            {/* CONTACT Link */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`group flex items-center justify-between py-2.5 border-b border-[#7650A8]/15 transition-colors ${
                pathname === "/contact" ? "text-[#54227A]" : "text-[#2A0D45] hover:text-[#54227A]"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#7650A8] font-bold">05</span>
                <span className="font-display text-2xl font-black tracking-tight">CONTACT</span>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#54227A]" />
            </Link>
          </div>

          {/* Bottom Action Area */}
          <div className="pt-6 space-y-4">
            {/* Primary Action Button */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#6D28D9] py-3.5 font-grotesk text-xs font-bold tracking-wider text-white shadow-[0_4px_20px_rgba(124,58,237,0.5)] active:scale-98 transition-transform"
            >
              <span>START A COMMISSION</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Social & Contact Strip */}
            <div className="flex items-center justify-between pt-2 border-t border-[#7650A8]/20 text-[11px] font-grotesk text-[#2A0D45]/75 font-medium">
              <a
                href="https://www.instagram.com/verveo.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#54227A] transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-[#54227A]" />
                <span>@verveo.inc</span>
              </a>

              <a
                href="https://www.instagram.com/verveo_weddings/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#54227A] transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#54227A]" />
                <span>@verveo_weddings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
