"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, CheckCircle2, Clock, Mail, Send, Sparkles } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const PROJECT_TYPES = [
  "Brand Identity & Packaging",
  "Commercial Cinema & Media",
  "Food & Beverage Styling",
  "Fashion & Apparel Lookbooks",
  "Studio Retouching & Photography",
  "Verveo Weddings Collective"
];

export default function ContactSection() {
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

    if (!name.trim()) newErrors.name = "Please enter your full name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid work email address.";
    }
    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = "Please share a few details about your project goals.";
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
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#3B155F", "#54227A", "#7650A8", "#FFFFFF", "#F8F7F3"]
      });
    }, 850);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-36 lg:py-44 px-4 sm:px-10 lg:px-16 bg-gradient-to-b from-[#5B21B6] via-[#6D28D9] to-[#5B21B6] text-white border-t border-[#A78BFA]/30 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#A78BFA]/25 pb-8 mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#DDD6FE] font-bold">08 // INITIATE DIALOGUE</span>
              <span className="text-[#C4B5FD]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#EDE9FE]/80 uppercase">
                Project Inquiries
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95]">
              HAVE AN IDEA? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#EDE9FE] to-[#DDD6FE]">
                LET&apos;S TALK.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm font-sans text-[#EDE9FE]/85 leading-relaxed font-normal">
              We respond to all verified project commissions within 24 hours. Tell us about your vision, brand objectives, or creative requirements.
            </p>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="rounded-3xl border border-[#A78BFA]/40 bg-[#4C1D95] p-8 sm:p-14 text-center space-y-6 shadow-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3B0764] text-[#DDD6FE] border border-[#A78BFA]/40">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                  INQUIRY TRANSMITTED.
                </h3>
                <p className="text-sm text-[#EDE9FE]/90 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Our creative directors have received your project details and will be in touch within 24 hours.
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
                    className="inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/30 bg-[#3B0764] px-6 py-3 text-xs font-grotesk text-white hover:bg-[#7C3AED] transition-colors min-h-[44px]"
                  >
                    <span>SUBMIT ANOTHER INQUIRY</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* NAME */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-semibold text-[#DDD6FE] uppercase tracking-wider">
                    NAME *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full rounded-2xl border border-[#A78BFA]/35 bg-[#4C1D95]/70 px-5 py-4 font-sans text-base sm:text-sm text-white placeholder-[#EDE9FE]/50 focus:border-[#DDD6FE] focus:outline-none focus:ring-1 focus:ring-[#C4B5FD] transition-all"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#DDD6FE] font-mono font-semibold">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-semibold text-[#DDD6FE] uppercase tracking-wider">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. marcus@brand.com"
                    className="w-full rounded-2xl border border-[#A78BFA]/35 bg-[#4C1D95]/70 px-5 py-4 font-sans text-base sm:text-sm text-white placeholder-[#EDE9FE]/50 focus:border-[#DDD6FE] focus:outline-none focus:ring-1 focus:ring-[#C4B5FD] transition-all"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#DDD6FE] font-mono font-semibold">{errors.email}</p>
                  )}
                </div>

                {/* BRAND / COMPANY */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-semibold text-[#DDD6FE] uppercase tracking-wider">
                    BRAND / COMPANY
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. ALATA Artisanal Cafe"
                    className="w-full rounded-2xl border border-[#A78BFA]/35 bg-[#4C1D95]/70 px-5 py-4 font-sans text-base sm:text-sm text-white placeholder-[#EDE9FE]/50 focus:border-[#DDD6FE] focus:outline-none focus:ring-1 focus:ring-[#C4B5FD] transition-all"
                  />
                </div>

                {/* PROJECT TYPE */}
                <div className="space-y-3">
                  <label className="block font-mono text-xs font-semibold text-[#DDD6FE] uppercase tracking-wider">
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
                            ? "border border-[#DDD6FE] bg-[#7C3AED] text-white shadow-xs"
                            : "border border-[#A78BFA]/30 bg-[#4C1D95]/70 text-[#EDE9FE] hover:border-[#DDD6FE] hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-semibold text-[#DDD6FE] uppercase tracking-wider">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the project vision, timeline, target deliverables, or goals..."
                    className="w-full rounded-2xl border border-[#A78BFA]/35 bg-[#4C1D95]/70 px-5 py-4 font-sans text-base sm:text-sm text-white placeholder-[#EDE9FE]/50 focus:border-[#DDD6FE] focus:outline-none focus:ring-1 focus:ring-[#C4B5FD] transition-all"
                  />
                  {errors.message && (
                    <p className="text-xs text-[#DDD6FE] font-mono font-semibold">{errors.message}</p>
                  )}
                </div>

                {/* CTA BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-10 py-4 font-grotesk text-sm font-bold tracking-wider text-[#5B21B6] shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-all duration-300 hover:bg-[#EDE9FE] hover:scale-105 active:scale-95 disabled:opacity-50 min-h-[48px]"
                >
                  <span>{isSubmitting ? "TRANSMITTING..." : "SEND INQUIRY"}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            )}
          </div>

          {/* Studio Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 rounded-3xl border border-[#A78BFA]/35 bg-[#4C1D95]/90 p-8 sm:p-10 shadow-lg">
            <div>
              <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-widest font-bold">
                COMMISSION DETAILS
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Studio Communications
              </h3>
            </div>

            <div className="space-y-6 text-sm font-sans font-normal text-[#EDE9FE]/85">
              <div className="space-y-1">
                <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold block">
                  OFFICIAL CHANNELS
                </span>
                <p>Instagram: @verveo.inc</p>
                <p>Weddings: @verveo_weddings</p>
                <p>Email: hello@verveocreative.com</p>
              </div>

              <div className="space-y-1 border-t border-[#A78BFA]/20 pt-4">
                <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold block">
                  CAPABILITIES
                </span>
                <p>Brand Identity &bull; Campaign Creation &bull; Fashion Lookbooks &bull; Food Cinema &bull; 35mm Wedding Cinema</p>
              </div>

              <div className="space-y-1 border-t border-[#A78BFA]/20 pt-4">
                <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold block">
                  RESPONSE PROTOCOL
                </span>
                <p>All inquiries reviewed directly by principal creative direction within 24 business hours.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#A78BFA]/20">
              <a
                href="https://www.instagram.com/verveo.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/30 bg-[#3B0764] px-5 py-2.5 text-xs font-grotesk text-[#EDE9FE] hover:border-[#DDD6FE] hover:text-white hover:bg-[#7C3AED] transition-colors shadow-xs"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>DM US ON INSTAGRAM ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
