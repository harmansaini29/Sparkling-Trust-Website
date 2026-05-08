"use client";

import React, { useRef, useState, useCallback } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1, name: 'Ananya Rao', role: 'ENTREPRENEUR',
    quote: "The financial literacy workshops opened my eyes, but the spiritual grounding gave me the courage to act. I now employ three other women.",
    image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=400&q=80"
  },
  {
    id: 2, name: 'Rajesh Patil', role: 'FARMER',
    quote: "Project Satark saved my entire village from loan sharks. We now understand banking, insurance, and how to protect our hard-earned harvest.",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&q=80"
  },
  {
    id: 3, name: 'Ankur Singh', role: 'EDUCATOR',
    quote: "Bringing Project Sanskar to our school changed the students' perspective. They are learning to navigate the digital world without losing their roots.",
    image: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=400&q=80"
  },
  {
    id: 4, name: 'Sunita Sharma', role: 'MENTOR',
    quote: "Before joining, I felt isolated. The women's circle provided a safe space to grow. Now, I mentor younger women entering the workforce.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80"
  },
  {
    id: 5, name: 'Vikram Deshmukh', role: 'VOLUNTEER',
    quote: "Volunteering with Sevalay showed me what selfless service truly means. Every meal we serve is a step toward a more compassionate Bharat.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
  }
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const dragRef = useRef(false);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    dragRef.current = true;
    setIsDragging(true);
    setIsAnimationPaused(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = 'grabbing';
  }, []);

  const onMouseEnter = useCallback(() => {
    setIsAnimationPaused(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    dragRef.current = false;
    setIsDragging(false);
    setIsAnimationPaused(false);
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  }, []);

  const onMouseUp = useCallback(() => {
    dragRef.current = false;
    setIsDragging(false);
    setIsAnimationPaused(false);
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  }, [startX, scrollLeft]);

  // Touch drag
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (!trackRef.current) return;
    dragRef.current = true;
    setIsAnimationPaused(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  }, []);

  const onTouchEnd = useCallback(() => {
    dragRef.current = false;
    setIsAnimationPaused(false);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!dragRef.current || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  }, [startX, scrollLeft]);

  return (
    <section className="py-20 md:py-32 bg-[#064E3B] relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-x {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-scroll-x {
          animation: scroll-x 40s linear infinite;
          will-change: transform;
        }
        .is-paused .animate-scroll-x {
          animation-play-state: paused;
        }
        .drag-track {
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .drag-track::-webkit-scrollbar {
          display: none;
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#F97316]/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#D4AF37]/5 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10 mb-12 md:mb-20">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <Sparkles size={12} className="text-[#F97316] md:w-3.5 md:h-3.5" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white">Impact Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-tight drop-shadow-lg">
            Voices of <span className="italic text-[#F97316]">Empowerment</span>
          </h2>
          <p className="text-white/50 text-sm font-medium mt-1">
            <span className="text-[#F97316]">Drag</span> or <span className="text-[#F97316]">double-click &amp; hold</span> to scroll through stories
          </p>
        </div>
      </div>

      {/* Track Container */}
      <div className="relative w-full">
        {/* Fixed Gradients */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#064E3B] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#064E3B] to-transparent z-20 pointer-events-none" />

        {/* Drag-scrollable track */}
        <div
          ref={trackRef}
          className={`drag-track relative w-full pb-12 pt-4 md:pb-16 md:pt-8 select-none ${isAnimationPaused ? 'is-paused' : ''}`}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={onMouseDown}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
        >


          <div className={`flex w-max ${isAnimationPaused ? '' : 'animate-scroll-x'}`}>
            {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="pr-4 sm:pr-6 md:pr-10 flex items-stretch">
                <div className="w-[85vw] max-w-[320px] sm:max-w-[400px] md:max-w-none md:w-[500px] lg:w-[600px] h-auto min-h-[350px] md:min-h-[400px] bg-[#FDFCF9] rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.15)] shrink-0 transition-all duration-500 border border-transparent hover:border-[#F97316]/30">
                  <Quote className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-32 h-32 md:w-48 md:h-48 text-[#064E3B]/[0.03] rotate-12 group-hover:rotate-0 group-hover:scale-110 group-hover:text-[#064E3B]/[0.05] transition-all duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#F97316] mb-4 md:mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#064E3B] leading-snug mb-8 md:mb-10 group-hover:text-[#0a2e24] transition-colors duration-300">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center gap-4 md:gap-6 pt-4 md:pt-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative shadow-md ring-2 ring-transparent group-hover:ring-[#F97316]/50 transition-all duration-500 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 48px, 64px"
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold font-serif text-[#064E3B] mb-0.5 md:mb-1">{item.name}</h4>
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#F97316]">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}