import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Disciplines from "@/components/Disciplines";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import WhyVerveo from "@/components/WhyVerveo";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import ClientCareSection from "@/components/ClientCareSection";
import InstagramSection from "@/components/InstagramSection";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-white text-[#08080C]">
      {/* Floating Minimal Navigation */}
      <Navbar />

      {/* Hero with Oversized Typography & Interactive Collage */}
      <Hero />

      {/* Massive Brand Statement Typography Reveal */}
      <BrandStatement />

      {/* Art-Directed Magazine Disciplines */}
      <Disciplines />

      {/* 7 Huge Numbered Services Rows */}
      <Services />

      {/* Asymmetric Selected Work & Immersive Case Studies */}
      <SelectedWork />

      {/* Bold Statement About & Real Story Collage */}
      <About />

      {/* 5 Core Principles */}
      <WhyVerveo />

      {/* 5-Step Process Timeline */}
      <Process />

      {/* Production Standards & Benchmarks */}
      <SocialProof />

      {/* 6-Part Client Guardianship Carousel */}
      <ClientCareSection />

      {/* Real-time Instagram Feed & Transmission */}
      <InstagramSection />

      {/* Dramatic Full-Screen Purple CTA */}
      <CtaBanner />

      {/* High-Converting Commission Contact Form */}
      <ContactSection />

      {/* Agency Minimalist Watermark Footer */}
      <Footer />
    </main>
  );
}
