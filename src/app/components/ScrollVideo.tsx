"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo({ src, className }: { src: string, className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number | null = null;
    let targetTime = 0;
    let activeTime = 0;

    const getScrollProgress = () => {
      const scrollSection = video.closest("section");
      const rect = scrollSection?.getBoundingClientRect();
      const sectionTop = rect ? rect.top + window.scrollY : 0;
      const sectionHeight = rect?.height || window.innerHeight * 3;
      const scrollRange = Math.max(1, sectionHeight - window.innerHeight);

      return Math.max(0, Math.min(1, (window.scrollY - sectionTop) / scrollRange));
    };

    const seekToTarget = () => {
      animationFrameId = null;

      if (!video.duration || Number.isNaN(video.duration)) return;

      activeTime += (targetTime - activeTime) * 0.35;

      if (Math.abs(video.currentTime - activeTime) > 1 / 48) {
        video.currentTime = activeTime;
      }

      if (Math.abs(targetTime - activeTime) > 1 / 120) {
        animationFrameId = requestAnimationFrame(seekToTarget);
      }
    };

    const scheduleSeek = () => {
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(seekToTarget);
      }
    };

    const handleScroll = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      targetTime = getScrollProgress() * video.duration;
      scheduleSeek();
    };

    const handleLoadedMetadata = () => {
      activeTime = video.currentTime;
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [src]);

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className || ''}`}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
