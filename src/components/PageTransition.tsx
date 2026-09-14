"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname, hasMounted]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Violet Curtain Wipe on Route Change */}
      <div
        className={`fixed inset-0 z-[9990] bg-gradient-to-b from-[#7C3AED] via-[#5B21B6] to-[#08080C] pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isTransitioning
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-black tracking-[0.3em] text-white opacity-80 uppercase">
            VERVEO®
          </span>
        </div>
      </div>

      {/* Page Content with Opacity Fade */}
      <div
        className={`transition-opacity duration-500 ease-out ${
          isTransitioning ? "opacity-40" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
