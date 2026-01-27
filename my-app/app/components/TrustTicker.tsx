"use client";
import { motion } from "framer-motion";

const partners = [
  "SEBI REGISTERED", "NSE MEMBER", "BSE MEMBER", "NISM CERTIFIED", "GLOBAL TRUST", "ZERO DEBT", "SATVIK WEALTH"
];

export function TrustTicker() {
  return (
    <div className="bg-gold py-4 overflow-hidden flex relative z-20 border-y border-black/10">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20" />
      
      {/* Moving Container */}
      <motion.div 
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Double the list to make it infinite */}
        {[...partners, ...partners, ...partners, ...partners].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-default">
            <span className="w-2 h-2 rounded-full bg-earth/20 group-hover:bg-earth transition-colors" />
            <span className="text-earth font-bold uppercase tracking-[0.3em] text-sm group-hover:scale-110 transition-transform">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}