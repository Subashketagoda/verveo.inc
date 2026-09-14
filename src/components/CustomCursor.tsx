"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest("[data-cursor='view']");
      if (viewTarget) {
        setCursorType("view");
        return;
      }

      const interactive = target.closest("a, button, input, textarea, [role='button']");
      if (interactive) {
        setCursorType("hover");
        return;
      }

      setCursorType("default");
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9998] transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%)"
      }}
    >
      {cursorType === "default" && (
        <div className="h-2.5 w-2.5 rounded-full bg-[#A78BFA] shadow-[0_0_12px_rgba(167,139,250,0.9)] transition-all duration-200" />
      )}

      {cursorType === "hover" && (
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8B5CF6] bg-[#8B5CF6]/15 backdrop-blur-xs transition-all duration-200 scale-110 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
          <div className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
        </div>
      )}

      {cursorType === "view" && (
        <div className="flex h-20 w-20 items-center justify-center gap-1 rounded-full bg-[#8B5CF6] text-white font-grotesk text-[10px] font-extrabold tracking-wider shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all duration-200 scale-100">
          <span>VIEW</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      )}
    </div>
  );
}
