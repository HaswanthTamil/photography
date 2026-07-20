"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Wait for the stacking animation to finish, then fade out
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsLoading(false), 1200); // Wait for opacity transition
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-surface flex items-center justify-center transition-opacity duration-[1200ms] ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center justify-end gap-1 h-40">
         {/* Top shape: small circle/dot */}
         <div 
           className="w-4 h-4 rounded-full bg-primary opacity-0 animate-stack-drop" 
           style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
         />
         
         {/* Upper middle shape: triangle */}
         <div 
           className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[24px] border-l-transparent border-r-transparent border-b-primary opacity-0 animate-stack-drop" 
           style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
         />
         
         {/* Lower middle shape: square */}
         <div 
           className="w-12 h-12 bg-primary/80 opacity-0 animate-stack-drop" 
           style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
         />
         
         {/* Bottom shape: wide rectangle */}
         <div 
           className="w-24 h-6 bg-primary opacity-0 animate-stack-drop" 
           style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
         />
      </div>
    </div>
  );
}
