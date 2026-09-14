import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Verveo Creative Inc. Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Verveo Creative Inc.`,
      description: project.description,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#5B21B6] via-[#6D28D9] to-[#5B21B6] text-[#F8F7F3]">
      <Navbar />

      {/* 1. Full-Screen Opening Campaign Hero Visual */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] w-full flex flex-col justify-between pt-32 sm:pt-36 pb-10 sm:pb-12 px-4 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-b from-[#6D28D9] to-[#5B21B6]">
        {/* Background Full-Screen Image */}
        <div className="absolute inset-0 -z-10 bg-[#3B0764]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.65] contrast-[1.1] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5B21B6] via-[#3B0764]/40 to-black/50" />
          <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#8B5CF6]/30 blur-[150px] pointer-events-none" />
        </div>

        {/* Back Link */}
        <div className="max-w-7xl mx-auto w-full">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-grotesk tracking-widest text-white/90 hover:text-[#DDD6FE] transition-colors rounded-full border border-white/25 bg-[#3B0764]/60 px-4 py-1.5 backdrop-blur-md min-h-[38px]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Campaign Hero Meta & Oversized Title */}
        <div className="max-w-7xl mx-auto w-full space-y-4 sm:space-y-6 my-auto py-8 sm:py-12">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
            <span className="rounded-full bg-[#7C3AED] text-white px-3.5 py-1 font-bold shadow-[0_0_20px_rgba(124,58,237,0.6)] border border-[#A78BFA]/40">
              {project.category}
            </span>
            <span className="text-[#F8F7F3]/90">
              CLIENT: <strong className="text-white">{project.client}</strong>
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-[#DDD6FE]">YEAR: {project.year}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.96]">
            {project.title}
          </h1>

          <p className="text-base sm:text-2xl text-[#F8F7F3] font-sans font-light max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Telemetry Bar at bottom of Hero */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs font-grotesk tracking-widest text-white/80 uppercase border-t border-white/20 pt-4">
          <span>CASE STUDY ARCHIVE // {project.slug}</span>
          <span>SCROLL &darr;</span>
        </div>
      </section>

      {/* Editorial Content Stream */}
      <div className="py-16 sm:py-28 px-4 sm:px-10 lg:px-16 max-w-6xl mx-auto space-y-16 sm:space-y-32 bg-transparent text-[#F8F7F3]">
        
        {/* 2. Full-Width Imagery Plate */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full rounded-3xl overflow-hidden border border-[#A78BFA]/30 bg-[#3B0764] shadow-2xl">
          <Image
            src={project.heroImage}
            alt={`${project.title} Master Plate`}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-md bg-[#3B0764]/90 px-3 py-1 text-xs font-mono text-[#DDD6FE] backdrop-blur-md border border-[#A78BFA]/30">
            FIGURE 1.0 &bull; MASTER CAMPAIGN CINEMATOGRAPHY
          </div>
        </div>

        {/* 3. The Challenge (Large Editorial Text Block) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#A78BFA]/20 pb-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-widest font-bold block mb-2">
              01 // THE CHALLENGE
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-[#FFFFFF]">
              The Strategic Obstacle
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl text-[#F8F7F3]/85 font-sans font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </section>

        {/* 4. Large Typography Statement / Quote */}
        <div className="py-14 sm:py-20 border-y border-[#A78BFA]/20 text-center space-y-4 bg-[#4C1D95]/90 rounded-3xl px-6 sm:px-12 shadow-lg backdrop-blur-md">
          <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-widest font-bold">
            02 // THE CREATIVE THESIS
          </span>
          <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#FFFFFF] leading-tight max-w-4xl mx-auto">
            &ldquo;{project.idea}&rdquo;
          </p>
        </div>

        {/* 5. Image Pairs (Split Editorial Layout) */}
        <section className="space-y-6">
          <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-widest font-bold block">
            03 // CREATIVE DIRECTION &amp; VISUALS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.galleryImages.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="relative aspect-4/3 rounded-2xl overflow-hidden border border-[#A78BFA]/30 bg-[#3B0764] group shadow-lg"
              >
                <Image
                  src={img}
                  alt={`${project.title} detail ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 rounded-md bg-[#3B0764]/90 px-2.5 py-1 text-[11px] font-mono text-white backdrop-blur-md border border-[#A78BFA]/30">
                  ASSET 0{i + 1}
                </div>
              </div>
            ))}
          </div>
          <p className="text-base sm:text-lg text-[#F8F7F3]/85 font-sans font-light leading-relaxed pt-2">
            {project.creativeDirection}
          </p>
        </section>

        {/* 6. Behind-The-Scenes & Campaign Rollout */}
        <section className="rounded-3xl border border-[#A78BFA]/30 bg-[#4C1D95]/90 p-8 sm:p-12 space-y-6 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-[#DDD6FE] uppercase tracking-widest font-bold">
            <Sparkles className="h-4 w-4 text-[#DDD6FE]" />
            <span>04 // CAMPAIGN ROLLOUT &amp; SCOPE</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-black text-[#FFFFFF]">
            Execution &amp; Asset Distribution
          </h3>

          <p className="text-base sm:text-lg text-[#F8F7F3]/85 font-sans font-light leading-relaxed">
            {project.campaign}
          </p>

          <div className="pt-4 border-t border-[#A78BFA]/20">
            <span className="font-mono text-xs text-[#FFFFFF] uppercase tracking-wider block mb-3 font-semibold">
              KEY DELIVERABLES:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-[#A78BFA]/30 bg-[#3B0764] px-4 py-1.5 text-xs font-grotesk text-[#F8F7F3] shadow-xs"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#DDD6FE]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Commercial & Cultural Impact (Metrics) */}
        <section className="space-y-8 border-t border-[#A78BFA]/20 pt-16">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#DDD6FE] uppercase tracking-widest font-bold">
              05 // RESULT &amp; IMPACT
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-[#FFFFFF]">
              The Measurable Outcome
            </h3>
          </div>

          <p className="text-lg text-[#F8F7F3]/85 font-sans font-light leading-relaxed max-w-3xl">
            {project.outcome}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-3xl border border-[#A78BFA]/30 bg-[#4C1D95]/90 p-6 sm:p-10 shadow-lg">
              {project.metrics.map((m, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-mono text-4xl sm:text-5xl font-black text-[#DDD6FE]">
                    {m.value}
                  </div>
                  <div className="text-xs font-grotesk tracking-widest text-[#F8F7F3]/80 uppercase font-bold">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 8. NEXT PROJECT → */}
        <div className="border-t border-[#A78BFA]/20 pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#DDD6FE] uppercase tracking-widest font-bold">
              NEXT CASE STUDY
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-black text-[#FFFFFF] mt-1">
              {nextProject.title}
            </h3>
            <p className="text-xs font-mono text-[#F8F7F3]/80 mt-1">
              {nextProject.category} // {nextProject.year}
            </p>
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-flex items-center gap-3 rounded-full bg-white text-[#5B21B6] px-8 py-4 font-grotesk text-xs font-bold tracking-wider shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:bg-[#DDD6FE] hover:scale-105 transition-all"
          >
            <span>NEXT PROJECT &rarr;</span>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
