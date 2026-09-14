"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const NAV_LINKS = [
  { name: "WORK", href: "/work" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "PROCESS", href: "/process" },
  { name: "CONTACT", href: "/contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "pt-3" : "pt-6 sm:pt-8"
        }`}
      >
        <nav
          className={`flex w-full max-w-7xl items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "border border-[#7650A8]/30 bg-[#2A0D45]/90 py-2.5 px-6 shadow-xl backdrop-blur-xl scale-[0.98]"
              : "border border-[#7650A8]/20 bg-[#100817]/80 py-3.5 px-6 backdrop-blur-md shadow-lg"
          }`}
        >
          {/* Left: Brand Wordmark with Official VE® Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full shadow-[0_0_15px_rgba(84,34,122,0.6)] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/ve_logo.svg"
                alt="VE®"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-sm sm:text-base font-black tracking-[0.2em] text-[#F8F7F3] flex items-center">
              VERVEO
              <span className="text-[10px] text-[#7650A8] ml-0.5 font-sans font-normal">®</span>
            </span>
          </Link>

          {/* Center: Minimal Navigation Links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 font-grotesk text-xs font-semibold tracking-widest transition-colors group ${
                    isActive ? "text-[#7650A8]" : "text-[#F8F7F3]/70 hover:text-[#FFFFFF]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 bg-[#7650A8] transition-all duration-300 ${
                      isActive ? "w-3/5" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group relative hidden sm:inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#54227A] via-[#7650A8] to-[#54227A] px-5 py-2.5 font-grotesk text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(84,34,122,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,80,168,0.7)] hover:scale-105 active:scale-95"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7650A8]/30 bg-[#2A0D45] text-[#F8F7F3] md:hidden transition-colors hover:border-[#7650A8]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Animated Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-[#100817] px-6 sm:px-8 pt-28 pb-10 overflow-y-auto overscroll-contain transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
      >
        {/* Background ambient purple orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#3B155F]/30 blur-[130px] pointer-events-none" />

        {/* Large Typography Navigation List */}
        <div className="flex flex-col space-y-6 relative z-10">
          <span className="font-mono text-xs text-[#7650A8] tracking-widest uppercase font-bold">
            // INDEX DIRECTORY
          </span>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-baseline gap-4 font-display text-4xl sm:text-5xl font-black tracking-tight text-[#F8F7F3] transition-colors hover:text-[#7650A8]"
          >
            <span className="font-mono text-sm text-[#7650A8]/80 font-normal">00</span>
            <span>HOME</span>
          </Link>
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`group flex items-baseline gap-4 font-display text-4xl sm:text-5xl font-black tracking-tight transition-colors ${
                pathname === link.href ? "text-[#7650A8]" : "text-[#F8F7F3] hover:text-[#7650A8]"
              }`}
            >
              <span className="font-mono text-sm text-[#7650A8]/80 font-normal">
                0{idx + 1}
              </span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Footer Meta */}
        <div className="space-y-6 border-t border-[#7650A8]/20 pt-8 relative z-10">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#54227A] to-[#7650A8] py-4 font-grotesk text-sm font-bold tracking-wider text-white shadow-[0_0_25px_rgba(84,34,122,0.6)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <div className="flex items-center justify-between text-xs font-grotesk text-[#F8F7F3]/60">
            <a
              href="https://www.instagram.com/verveo.inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#F8F7F3]"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>@verveo.inc</span>
            </a>
            <span>MARKETING AGENCY</span>
          </div>
        </div>
      </div>
    </>
  );
}
