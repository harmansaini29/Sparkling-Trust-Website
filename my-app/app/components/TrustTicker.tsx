"use client";
import React from "react";
import { Award, ShieldCheck, HeartHandshake, BookOpen, Users, Leaf } from "lucide-react";

// Converted to use Tailwind sizing classes directly on the icons for responsiveness
const TRUST_METRICS = [
  { text: "80G & 12A Certified", icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> },
  { text: "Registered Section 8 NGO", icon: <Award className="w-4 h-4 md:w-5 md:h-5" /> },
  { text: "56,000+ Lives Impacted", icon: <Users className="w-4 h-4 md:w-5 md:h-5" /> },
  { text: "100% Transparency", icon: <HeartHandshake className="w-4 h-4 md:w-5 md:h-5" /> },
  { text: "Grassroots Financial Education", icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5" /> },
  { text: "Sustainable Empowerment", icon: <Leaf className="w-4 h-4 md:w-5 md:h-5" /> },
];

export function TrustTicker() {
  const doubledMetrics = [...TRUST_METRICS, ...TRUST_METRICS, ...TRUST_METRICS, ...TRUST_METRICS];

  return (
    <div className="bg-[#064E3B] border-y border-white/10 overflow-hidden py-3 md:py-5 relative z-30">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
      
      <div className="absolute top-0 left-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#064E3B] to-transparent z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#064E3B] to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all">
        {doubledMetrics.map((metric, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 md:gap-3 px-6 md:px-12 text-white/80 hover:text-[#F97316] transition-colors cursor-default"
          >
            <span className="text-[#F97316]">{metric.icon}</span>
            <span className="text-xs md:text-base font-bold uppercase tracking-widest whitespace-nowrap mt-0.5">
              {metric.text}
            </span>
            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white/20 ml-6 md:ml-12" />
          </div>
        ))}
      </div>
    </div>
  );
}