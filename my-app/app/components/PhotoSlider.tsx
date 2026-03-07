// app/components/PhotoSlider.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
];

export function PhotoSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-[#064E3B] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end relative z-20">
        <div>
           <div className="flex items-center gap-3 mb-4">
             <span className="w-8 h-[1px] bg-[#F97316]"></span>
             <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.3em]">Grassroots Impact</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">
             Action in <span className="italic text-[#F97316]">Motion</span>
           </h2>
        </div>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#064E3B] via-[#064E3B]/80 to-transparent z-10 pointer-events-none" />
               
        {/* Animated Marquee Flexbox */}
        <div 
          className="flex w-max animate-marquee"
          style={{ 
            animationPlayState: isPaused ? 'paused' : 'running', 
            animationDuration: '40s' 
          }}
        >
          {[...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES].map((src, i) => (
            <div key={i} className="pr-6 py-6">
              <div 
                className="relative w-[280px] md:w-[400px] h-[220px] md:h-[300px] rounded-[2rem] overflow-hidden shrink-0 shadow-xl cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                        {/* Edge Gradients for smooth fade in/out */}

                 <Image 
                  src={src} 
                  alt="Grassroots Impact" 
                  fill 
                  className="object-cover" 
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}