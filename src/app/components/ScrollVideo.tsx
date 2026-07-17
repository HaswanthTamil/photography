"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo({ src, className }: { src: string, className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let targetTime = 0;

    const handleScroll = () => {
      if (!video.duration) return;
      
      const scrollPosition = window.scrollY;
      // Map the scroll range to the viewport height
      // This matches the h-[300vh] of the parent section minus 1vh (the sticky part)
      const scrollRange = window.innerHeight * 2; 

      let progress = scrollPosition / scrollRange;
      progress = Math.max(0, Math.min(1, progress));

      targetTime = progress * video.duration;
    };

    const smoothUpdate = () => {
      if (video.duration && !isNaN(video.duration)) {
        // Smooth interpolation
        video.currentTime += (targetTime - video.currentTime) * 0.08;
      }
      animationFrameId = requestAnimationFrame(smoothUpdate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Attempt to load metadata to get duration
    video.addEventListener("loadedmetadata", handleScroll);

    animationFrameId = requestAnimationFrame(smoothUpdate);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
