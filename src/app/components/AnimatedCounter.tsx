"use client";

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

export default function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "", 
  decimals = 0, 
  duration = 2000 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTimestamp: number | null = null;
        
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const currentProgress = Math.min((timestamp - startTimestamp) / duration, 1);
          
          // easeOutExpo for a premium deceleration feel
          const easeOutProgress = currentProgress === 1 ? 1 : 1 - Math.pow(2, -10 * currentProgress);
          
          setCount(easeOutProgress * value);
          setProgress(easeOutProgress);
          
          if (currentProgress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        
        window.requestAnimationFrame(step);
      }
    }, { 
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px"
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const scale = 0.8 + (progress * 0.2); // scales from 0.8 to 1.0

  return (
    <div 
      ref={ref} 
      className="inline-block transform-gpu origin-center md:origin-left will-change-transform"
      style={{ transform: `scale(${scale})` }}
    >
      {prefix}{count.toFixed(decimals)}{suffix}
    </div>
  );
}
