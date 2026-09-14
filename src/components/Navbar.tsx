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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            scrolled
              ? "border border-[#7650A8]/35 bg-[#100817]/92 py-2 px-4 sm:px-6 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "border border-[#7650A8]/20 bg-[#100817]/80 py-2.5 sm:py-3 px-4 sm:px-6 backdrop-blur-md shadow-lg"
          }`}
        >
          {/* Left: Brand Monogram & Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95"
            aria-label="Verveo Creative Homepage"
          >
            <div className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-full shadow-[0_0_15px_rgba(84,34,122,0.6)] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/ve_logo.svg"
                alt="VE®"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-xs sm:text-sm md:text-base font-black tracking-[0.2em] text-[#F8F7F3] flex items-center">
              VERVEO
              <span className="text-[9px] sm:text-[10px] text-[#7650A8] ml-0.5 font-sans font-normal">®</span>
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
                  className={`relative px-4 py-2 font-grotesk text-xs font-semibold tracking-widest transition-colors duration-200 group ${
                    isActive ? "text-[#FFFFFF]" : "text-[#F8F7F3]/70 hover:text-[#FFFFFF]"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive ? (
                    <span className="absolute bottom-0.5 left-1/2 h-[2px] w-5 -translate-x-1/2 bg-[#7650A8] shadow-[0_0_8px_#7650A8] rounded-full" />
                  ) : (
                    <span className="absolute bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#7650A8]/60 transition-all duration-200 group-hover:w-4 rounded-full" />
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
              className="group relative hidden sm:inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#54227A] via-[#7650A8] to-[#54227A] px-4 sm:px-5 py-2 sm:py-2.5 font-grotesk text-[11px] sm:text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(84,34,122,0.45)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,80,168,0.7)] hover:scale-105 active:scale-95"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Menu Trigger: Modern Capsule Pill */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex items-center gap-2 rounded-full border border-[#7650A8]/40 bg-[#2A0D45]/80 px-3.5 py-1.5 text-[#F8F7F3] md:hidden transition-all duration-200 hover:border-[#7650A8] hover:bg-[#3B155F] active:scale-95"
            >
              <span className="font-mono text-[11px] font-bold tracking-wider">MENU</span>
              <div className="flex flex-col gap-1 w-3.5">
                <span className="h-[1.5px] w-full bg-[#F8F7F3] rounded-full" />
                <span className="h-[1.5px] w-2.5 bg-[#7650A8] rounded-full ml-auto" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Luxury Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-[#100817] text-[#F8F7F3] md:hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        style={{ minHeight: "100dvh" }}
      >
        {/* Ambient Violet Glow */}
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#54227A]/25 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-64 h-64 rounded-full bg-[#3B155F]/20 blur-[100px] pointer-events-none" />

        {/* Top Header inside Overlay for Seamless Close Flow */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#7650A8]/15 relative z-10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5"
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-full shadow-[0_0_12px_rgba(84,34,122,0.6)]">
              <Image
                src="/images/ve_logo.svg"
                alt="VE®"
                fill
                sizes="28px"
                className="object-contain"
              />
            </div>
            <span className="font-display text-sm font-black tracking-[0.2em] text-[#F8F7F3]">
              VERVEO<span className="text-[10px] text-[#7650A8] ml-0.5 font-normal">®</span>
            </span>
          </Link>

          {/* Close Button Pill */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            className="flex items-center gap-1.5 rounded-full border border-[#7650A8]/50 bg-[#2A0D45]/90 px-3.5 py-1.5 text-xs font-mono text-[#F8F7F3] shadow-[0_0_15px_rgba(118,80,168,0.3)] transition-all hover:bg-[#54227A] active:scale-95"
          >
            <span className="tracking-wider">CLOSE</span>
            <X className="h-3.5 w-3.5 text-[#7650A8]" />
          </button>
        </div>

        {/* Scrollable Navigation Body with Perfect Viewport Fit */}
        <div className="flex-1 flex flex-col justify-between px-6 py-6 overflow-y-auto overscroll-contain relative z-10">
          {/* Menu Links */}
          <div className="space-y-1">
            <div className="font-mono text-[10px] text-[#7650A8] tracking-[0.25em] uppercase font-bold mb-4">
              // INDEX DIRECTORY
            </div>

            {/* HOME Link */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`group flex items-center justify-between py-2.5 border-b border-[#7650A8]/10 transition-colors ${
                pathname === "/" ? "text-[#7650A8]" : "text-[#F8F7F3] hover:text-[#7650A8]"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#7650A8]/70 font-normal">00</span>
                <span className="font-display text-2xl font-black tracking-tight">HOME</span>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-40 transition-transform group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Other Navigation Links */}
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between py-2.5 border-b border-[#7650A8]/10 transition-colors ${
                    isActive ? "text-[#7650A8]" : "text-[#F8F7F3] hover:text-[#7650A8]"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#7650A8]/70 font-normal">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-2xl font-black tracking-tight">
                      {link.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[11px] text-[#F8F7F3]/40 hidden sm:inline">
                      {link.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-40 transition-transform group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}

            {/* CONTACT Link */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`group flex items-center justify-between py-2.5 border-b border-[#7650A8]/10 transition-colors ${
                pathname === "/contact" ? "text-[#7650A8]" : "text-[#F8F7F3] hover:text-[#7650A8]"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#7650A8]/70 font-normal">05</span>
                <span className="font-display text-2xl font-black tracking-tight">CONTACT</span>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-40 transition-transform group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Bottom Action Area */}
          <div className="pt-6 space-y-4">
            {/* Primary Action Button */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#54227A] via-[#7650A8] to-[#54227A] py-3.5 font-grotesk text-xs font-bold tracking-wider text-white shadow-[0_0_25px_rgba(84,34,122,0.6)] active:scale-98 transition-transform"
            >
              <span>START A COMMISSION</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Social & Contact Strip */}
            <div className="flex items-center justify-between pt-2 border-t border-[#7650A8]/15 text-[11px] font-grotesk text-[#F8F7F3]/60">
              <a
                href="https://www.instagram.com/verveo.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FFFFFF] transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-[#7650A8]" />
                <span>@verveo.inc</span>
              </a>

              <a
                href="https://www.instagram.com/verveo_weddings/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FFFFFF] transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#7650A8]" />
                <span>@verveo_weddings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
