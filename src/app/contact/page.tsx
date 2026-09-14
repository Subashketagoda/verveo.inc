"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramIcon from "@/components/InstagramIcon";

const PROJECT_TYPES = [
  "Brand Identity & Packaging",
  "Commercial Cinema & Media",
  "Food & Beverage Styling",
  "Fashion & Apparel Lookbooks",
  "Studio Retouching & Photography",
  "Verveo Weddings Collective"
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedType, setSelectedType] = useState("Brand Identity & Packaging");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Please enter your name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid work email.";
    }
    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = "Please share a few details about your vision.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#3B155F", "#54227A", "#7650A8", "#FFFFFF", "#F8F7F3"]
      });
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#100817] text-[#F8F7F3] flex flex-col justify-between overflow-hidden">
      <Navbar />

      {/* Atmospheric Ambient Violet Light */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#7650A8]/15 blur-[200px]" />
      </div>

      <div className="pt-36 sm:pt-44 pb-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full space-y-16">
        {/* Minimal Opening with Huge Typography */}
        <div className="border-b border-[#7650A8]/20 pb-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#7650A8] font-bold">COMMISSION // 05</span>
            <span className="text-[#7650A8]/40">/</span>
            <span className="text-xs font-grotesk tracking-[0.3em] text-[#F8F7F3]/60 uppercase">
              Dialogue &amp; Briefings
            </span>
          </div>

          {/* Requested Huge Typography: LET'S CREATE SOMETHING. */}
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black text-[#FFFFFF] tracking-tight leading-[0.88]">
            LET&apos;S <br />
            CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7650A8] via-[#F8F7F3] to-[#7650A8]">
              SOMETHING.
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4">
            <p className="max-w-lg text-base sm:text-xl font-sans text-[#F8F7F3]/70 font-normal leading-relaxed">
              We respond to all verified brand commissions within 24 hours. Tell us what you want to build.
            </p>

            <div className="text-xs font-mono text-[#7650A8] uppercase tracking-widest font-semibold">
              COMMISSIONS OPEN &bull; 2026 / 2027
            </div>
          </div>
        </div>

        {/* Integrated Sculptural Contact Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Integrated Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="rounded-3xl border border-[#7650A8]/40 bg-[#2A0D45] p-10 sm:p-14 text-center space-y-6 shadow-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#100817] text-[#7650A8] border border-[#7650A8]/30">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-3xl font-black text-[#FFFFFF]">
                  TRANSMISSION RECEIVED.
                </h3>
                <p className="text-sm text-[#F8F7F3]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#FFFFFF]">{name}</strong>. Our creative directors have received your project details and will be in touch within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                      setCompany("");
                      setMessage("");
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#7650A8]/30 bg-[#100817] px-6 py-2.5 text-xs font-grotesk text-[#F8F7F3] hover:bg-[#54227A] hover:text-white transition-colors"
                  >
                    <span>START ANOTHER CONVERSATION</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* NAME */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-semibold text-[#7650A8] uppercase tracking-wider">
                    NAME *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Vance"
                    className="w-full rounded-2xl border border-[#7650A8]/30 bg-[#2A0D45] px-5 py-4 font-sans text-base sm:text-sm text-[#F8F7F3] placeholder-[#F8F7F3]/40 focus:border-[#7650A8] focus:outline-none focus:ring-1 focus:ring-[#7650A8] transition-all"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#7650A8] font-mono font-semibold">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-semibold text-[#7650A8] uppercase tracking-wider">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@brand.com"
                    className="w-full rounded-2xl border border-[#7650A8]/30 bg-[#2A0D45] px-5 py-4 font-sans text-base sm:text-sm text-[#F8F7F3] placeholder-[#F8F7F3]/40 focus:border-[#7650A8] focus:outline-none focus:ring-1 focus:ring-[#7650A8] transition-all"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#7650A8] font-mono font-semibold">{errors.email}</p>
                  )}
                </div>

                {/* COMPANY */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-semibold text-[#7650A8] uppercase tracking-wider">
                    COMPANY / BRAND
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="ALATA Artisanal Cafe"
                    className="w-full rounded-2xl border border-[#7650A8]/30 bg-[#2A0D45] px-5 py-4 font-sans text-base sm:text-sm text-[#F8F7F3] placeholder-[#F8F7F3]/40 focus:border-[#7650A8] focus:outline-none focus:ring-1 focus:ring-[#7650A8] transition-all"
                  />
                </div>

                {/* PROJECT TYPE */}
                <div className="space-y-3">
                  <label className="block font-mono text-xs font-semibold text-[#7650A8] uppercase tracking-wider">
                    PROJECT TYPE
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`text-left rounded-xl p-3.5 text-xs font-grotesk font-semibold tracking-wider transition-all duration-200 min-h-[44px] ${
                          selectedType === type
                            ? "border border-[#7650A8] bg-[#54227A] text-white shadow-xs"
                            : "border border-[#7650A8]/20 bg-[#2A0D45] text-[#F8F7F3]/70 hover:border-[#7650A8]/50 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-semibold text-[#7650A8] uppercase tracking-wider">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the project scope, target timeline, deliverables, or brand aspirations..."
                    className="w-full rounded-2xl border border-[#7650A8]/30 bg-[#2A0D45] px-5 py-4 font-sans text-base sm:text-sm text-[#F8F7F3] placeholder-[#F8F7F3]/40 focus:border-[#7650A8] focus:outline-none focus:ring-1 focus:ring-[#7650A8] transition-all"
                  />
                  {errors.message && (
                    <p className="text-xs text-[#7650A8] font-mono font-semibold">{errors.message}</p>
                  )}
                </div>

                {/* CTA BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#54227A] px-10 py-4 font-grotesk text-sm font-bold tracking-wider text-white shadow-[0_0_35px_rgba(84,34,122,0.5)] transition-all duration-300 hover:bg-[#7650A8] hover:scale-105 active:scale-95 disabled:opacity-50 min-h-[48px]"
                >
                  <span>{isSubmitting ? "TRANSMITTING..." : "SEND INQUIRY"}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels & Studio Metadata (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 rounded-3xl border border-[#7650A8]/20 bg-[#2A0D45] p-8 sm:p-10 shadow-lg">
            <div>
              <span className="font-mono text-xs text-[#7650A8] uppercase tracking-widest font-bold">
                DIRECT CHANNELS
              </span>
              <h3 className="font-display text-2xl font-bold text-[#FFFFFF] mt-1">
                Studio Communications
              </h3>
            </div>

            <div className="space-y-6 text-sm font-sans font-normal text-[#F8F7F3]/70">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#FFFFFF] uppercase tracking-wider font-semibold block">
                  DIGITAL HEADQUARTERS
                </span>
                <p className="flex items-center gap-2">
                  <InstagramIcon className="h-4 w-4 text-[#7650A8]" />
                  <span>Instagram: @verveo.inc</span>
                </p>
                <p className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#7650A8]" />
                  <span>Weddings: @verveo_weddings</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#7650A8]" />
                  <span>Email: hello@verveocreative.com</span>
                </p>
              </div>

              <div className="space-y-1 border-t border-[#7650A8]/20 pt-5">
                <span className="font-mono text-xs text-[#FFFFFF] uppercase tracking-wider font-semibold block">
                  CORE DISCIPLINES
                </span>
                <p>Brand Identity &bull; Campaign Direction &bull; Fashion Lookbooks &bull; Food Cinema &bull; 35mm Wedding Cinema</p>
              </div>

              <div className="space-y-1 border-t border-[#7650A8]/20 pt-5">
                <span className="font-mono text-xs text-[#FFFFFF] uppercase tracking-wider font-semibold block">
                  COMMISSION POLICY
                </span>
                <p>We accept a strictly limited allocation of commissions per quarter to ensure direct principal involvement on every shoot and cut.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/verveo.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#7650A8]/30 bg-[#100817] px-5 py-2.5 text-xs font-grotesk text-[#F8F7F3] hover:bg-[#54227A] hover:text-white transition-colors shadow-xs"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>CONNECT ON INSTAGRAM ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
