"use client";
import React from "react";
import { Award, ShieldCheck, HeartHandshake, BookOpen, Users, Leaf } from "lucide-react";

const TRUST_METRICS = [
  { text: "80G & 12A Certified", icon: <ShieldCheck size={20} /> },
  { text: "Registered Section 8 NGO", icon: <Award size={20} /> },
  { text: "56,000+ Lives Impacted", icon: <Users size={20} /> },
  { text: "100% Transparency", icon: <HeartHandshake size={20} /> },
  { text: "Grassroots Financial Education", icon: <BookOpen size={20} /> },
  { text: "Sustainable Empowerment", icon: <Leaf size={20} /> },
];

export function TrustTicker() {
  // OPTIMIZATION: Duplicate 4 times. 
  // The 'marquee' animation translates -50%. 
  // By having 4 sets, -50% moves exactly past 2 sets.
  // This leaves 2 sets visible, ensuring a perfect seamless loop even on ultra-wide monitors.
  const doubledMetrics = [...TRUST_METRICS, ...TRUST_METRICS, ...TRUST_METRICS, ...TRUST_METRICS];

  return (
    <div className="bg-[#064E3B] border-y border-white/10 overflow-hidden py-4 md:py-5 relative z-30">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
      
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#064E3B] to-transparent z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#064E3B] to-transparent z-10" />

      {/* GPU-Accelerated Marquee Container */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all">
        {doubledMetrics.map((metric, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-8 md:px-12 text-white/80 hover:text-[#F97316] transition-colors cursor-default"
          >
            <span className="text-[#F97316]">{metric.icon}</span>
            <span className="text-sm md:text-base font-bold uppercase tracking-widest whitespace-nowrap">
              {metric.text}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 ml-8 md:ml-12" />
          </div>
        ))}
      </div>
    </div>
  );
}