"use client";
import { useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  "/pic4.jpg",
  "/pic5.jpg",
  "/pic6.jpg"
];

export function PhotoSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 md:py-32 bg-[#064E3B] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 md:mb-12 flex justify-between items-end relative z-20">
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <span className="w-6 md:w-8 h-[1px] bg-[#F97316]"></span>
            <span className="text-[#F97316] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Grassroots Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-1 md:mt-2">
            Action in <span className="italic text-[#F97316]">Motion</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 md:w-48 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 md:w-48 bg-gradient-to-l from-[#064E3B] via-[#064E3B]/80 to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-max animate-marquee"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            animationDuration: '40s'
          }}
        >
          {[...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES].map((src, i) => (
            <div key={i} className="pr-4 sm:pr-6 py-4 md:py-6">
              {/* Scaled down dimensions for mobile devices */}
              <div
                className="relative w-[260px] sm:w-[280px] md:w-[400px] h-[180px] sm:h-[220px] md:h-[300px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 shadow-xl cursor-pointer transition-transform duration-500 md:hover:scale-105 md:hover:shadow-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                <Image
                  src={src}
                  alt="Grassroots Impact"
                  fill
                  sizes="(max-width: 768px) 280px, 400px"
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