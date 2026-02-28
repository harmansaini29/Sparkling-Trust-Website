// app/components/PhotoSlider.tsx
"use client";
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
  return (
    <section className="py-20 bg-[#064E3B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end relative z-20">
        <div>
           <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.3em]">Grassroots Impact</span>
           <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Action in <span className="italic text-[#F97316]">Motion</span></h2>
        </div>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#064E3B] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#064E3B] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...IMAGES, ...IMAGES, ...IMAGES, ...IMAGES].map((src, i) => (
            <div key={i} className="pr-6">
              <div className="relative w-[280px] md:w-[400px] h-[220px] md:h-[300px] rounded-3xl overflow-hidden shrink-0 group shadow-2xl">
                <Image src={src} alt="Impact" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#064E3B]/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}