"use client";

import Image from "next/image";
import { ArrowUpRight, Heart, MessageCircle, Pin, Play, Sparkles } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { instagramProfile, instagramPosts } from "@/data/instagram";

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="relative w-full py-24 sm:py-36 lg:py-44 px-4 sm:px-10 lg:px-16 bg-[#F8F7F3] text-[#100817] border-t border-[#7650A8]/20 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#7650A8]/20 pb-8 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#54227A] font-bold">07 // LIVE TRANSMISSIONS</span>
              <span className="text-[#7650A8]/40">/</span>
              <span className="text-xs font-grotesk tracking-[0.25em] text-[#3B155F]/70 uppercase font-semibold">
                Official Digital Feed
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-6xl lg:text-7xl font-black text-[#2A0D45] tracking-tight leading-[0.96]">
              MORE FROM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B155F] via-[#54227A] to-[#7650A8]">
                VERVEO.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4">
            <a
              href="https://www.instagram.com/verveo.inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#54227A] px-6 py-3 font-grotesk text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(84,34,122,0.4)] transition-all hover:bg-[#7650A8] hover:scale-105 min-h-[44px]"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="https://www.instagram.com/verveo_weddings/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#7650A8]/30 bg-[#FFFFFF] px-5 py-3 font-grotesk text-xs font-semibold tracking-wider text-[#2A0D45] hover:border-[#54227A] hover:text-[#54227A] transition-colors min-h-[44px] shadow-xs"
            >
              <span>WEDDINGS // @verveo_weddings</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Real Profile Header Card */}
        <div className="rounded-3xl border border-[#7650A8]/20 bg-[#FFFFFF] p-5 sm:p-10 shadow-[0_15px_40px_rgba(59,21,95,0.06)]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-10 border-b border-[#7650A8]/20 pb-8">
            {/* Circular VE® Avatar */}
            <div className="relative h-18 w-18 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-[#54227A]/30 shadow-md">
              <Image
                src={instagramProfile.avatar}
                alt="VE®"
                fill
                className="object-cover"
              />
            </div>

            {/* Profile Meta & Bio */}
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2A0D45] tracking-wide">
                  {instagramProfile.username}
                </h3>
                <span className="rounded-md border border-[#7650A8]/30 bg-[#F8F7F3] px-2.5 py-0.5 text-xs font-mono text-[#54227A] font-semibold">
                  {instagramProfile.category}
                </span>
              </div>

              {/* Stats Bar */}
              <div className="flex items-center gap-5 sm:gap-6 text-xs sm:text-sm font-grotesk text-[#2A0D45]/70">
                <div>
                  <span className="font-mono font-bold text-[#2A0D45]">{instagramProfile.postsCount}</span>{" "}
                  <span>posts</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#2A0D45]">{instagramProfile.followersCount}</span>{" "}
                  <span>followers</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#2A0D45]">{instagramProfile.followingCount}</span>{" "}
                  <span>following</span>
                </div>
              </div>

              {/* Bio Lines */}
              <div className="text-xs sm:text-sm font-sans text-[#2A0D45]/80 space-y-1 max-w-xl">
                <p className="font-semibold text-[#2A0D45]">{instagramProfile.displayName}</p>
                {instagramProfile.bioLines.map((line, idx) => (
                  <p key={idx} className="font-normal text-[#2A0D45]/75">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Story Highlights Bar */}
          <div className="pt-6 sm:pt-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-[#54227A] uppercase tracking-wider font-semibold">
                CURATED STORIES
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
              {instagramProfile.highlights.map((story) => (
                <div key={story.name} className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer">
                  <div className="relative flex h-14 w-14 sm:h-18 sm:w-18 items-center justify-center rounded-full border-2 border-[#54227A]/40 bg-[#F8F7F3] p-1 text-lg sm:text-xl shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-[#54227A]">
                    <span className="select-none">{story.emoji}</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#2A0D45]/75 group-hover:text-[#54227A] transition-colors font-medium">
                    {story.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pinned 3-Post Synchronized Marble Typographic Installation */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#7650A8] uppercase tracking-wider font-semibold">
            <Pin className="h-3.5 w-3.5 text-[#7650A8] rotate-45" />
            <span>PINNED INSTALLATION // VERVEO 3-GRID MARBLE MANIFESTO</span>
          </div>

          <div className="relative aspect-16/9 sm:aspect-3/1 w-full rounded-3xl overflow-hidden border border-[#7650A8]/25 bg-[#FFFFFF] group cursor-pointer shadow-[0_10px_30px_rgba(59,21,95,0.06)]">
            <Image
              src="/user_media/client_care/client-care-1.jpg"
              alt="VERVEO 3-Post Typographic Banner"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100817]/90 via-[#100817]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 sm:p-8 justify-between">
              <span className="font-display text-base sm:text-lg font-bold text-white tracking-widest uppercase">
                Synchronized 3-Post Aesthetic Banner
              </span>
              <a
                href="https://www.instagram.com/verveo.inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#7650A8] hover:text-white"
              >
                <span>VIEW ON FEED</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Authentic Feed Grid (User Media, Videos & Gallery) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-[#7650A8]/20 bg-[#FFFFFF] shadow-[0_10px_30px_rgba(59,21,95,0.06)] transition-all duration-500 hover:border-[#54227A] hover:shadow-[0_20px_40px_rgba(59,21,95,0.12)] flex flex-col"
            >
              {/* Media Preview */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#F8F7F3]">
                {post.videoUrl ? (
                  <video
                    src={post.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}

                {/* Badges */}
                <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                  {post.badge && (
                    <span className="rounded-full border border-[#7650A8]/30 bg-[#100817]/95 px-3 py-1 text-[11px] font-mono font-bold text-[#7650A8] shadow-sm backdrop-blur-md">
                      {post.badge}
                    </span>
                  )}
                  {post.type === "reel" && !post.videoUrl && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#100817]/80 text-white backdrop-blur-md border border-[#7650A8]/30">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </div>
                  )}
                </div>

                {/* Hover Overlay with Likes/Comments */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-[#100817]/95 via-[#100817]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#54227A] text-white shadow-lg">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-display text-base font-bold text-white line-clamp-2">
                      {post.title}
                    </p>
                    <p className="text-xs text-[#F8F7F3]/80 line-clamp-2 font-sans font-normal">
                      {post.caption}
                    </p>

                    <div className="flex items-center gap-5 text-xs font-mono text-[#7650A8] pt-2 border-t border-[#7650A8]/20">
                      <div className="flex items-center gap-1.5">
                        <Heart className="h-4 w-4 fill-current text-[#7650A8]" />
                        <span className="font-bold text-white">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageCircle className="h-4 w-4 fill-current" />
                        <span className="font-bold text-white">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#FFFFFF] border-t border-[#7650A8]/15">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#54227A] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h4 className="font-display text-sm font-bold text-[#2A0D45] mt-1 line-clamp-1 transition-colors">
                    {post.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#7650A8]/15 text-[11px] font-grotesk text-[#2A0D45]/70">
                  <span>{post.likes} likes</span>
                  <span className="flex items-center gap-1 text-[#54227A] font-semibold">
                    View <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
