"use client";
import Image from "next/image"; 
import { Play, Globe, Trophy } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <header className="relative w-full min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FDFCF9]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
         <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute top-0 right-0 w-full lg:w-[75%] h-full"
         >
            <div className="relative w-full h-full">
                <Image 
                  src="/india-pattern.png" 
                  alt="Bharat Heritage Pattern"
                  fill
                  className="object-contain object-right-top opacity-90 select-none"
                  priority
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
            </div>
            {/* Ambient Float */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              animate={{ y: [0, -20, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
         </motion.div>
         
         <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF9] via-[#FDFCF9]/95 via-40% to-transparent z-10" />
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFCF9] to-transparent z-10" />
      </div>

      {/* GLOW */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full z-0 pointer-events-none" />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 border border-gold/30 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gold">Heritage Meets Finance</span>
          </div>

          {/* FIXED: Font sizing for mobile/tablet */}
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif leading-[1.1] lg:leading-[0.9] text-earth tracking-tight">
            Empowering <br />
            <span className="text-gold italic relative inline-block">
              Bharat
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span> <br />
            <span className="font-light text-earth/80">Reclaiming Roots</span>
          </h1>

          <p className="text-lg lg:text-xl text-earth/70 font-serif italic max-w-lg leading-relaxed border-l-4 border-gold/40 pl-6">
            "Restoring the historical economic sovereignty of the Indian spirit through Dharmic principles."
          </p>

          <div className="flex flex-wrap gap-5 pt-6">
            <button suppressHydrationWarning className="bg-earth text-white px-10 py-5 rounded-2xl font-bold text-xs tracking-[0.2em] uppercase shadow-xl shadow-earth/10 hover:-translate-y-1 hover:shadow-2xl hover:bg-gold hover:text-earth transition-all duration-300">
              Explore Mission
            </button>
            <button suppressHydrationWarning className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-earth/10 bg-white/50 backdrop-blur-md hover:bg-white transition-all group">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Play size={18} fill="currentColor" />
              </div>
              <span className="font-bold text-[11px] tracking-[0.2em] uppercase text-earth">Watch Vision</span>
            </button>
          </div>
        </motion.div>

        {/* Right: Floating Glass Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-5 space-y-6 lg:pl-8 lg:translate-y-8 hidden md:block"
        >
           <GlassCard hoverEffect={true} className="p-8 bg-white/70 border-white/50 shadow-lg backdrop-blur-xl">
             <div className="flex items-start gap-5">
               <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0">
                 <Globe size={28} strokeWidth={1.5} />
               </div>
               <div>
                 <h3 className="font-serif font-bold text-xl text-earth mb-1">Economic Swaraj</h3>
                 <p className="text-xs text-earth/60 leading-relaxed font-medium">Rebuilding self-reliance through decentralized financial wisdom.</p>
               </div>
             </div>
           </GlassCard>

           <GlassCard hoverEffect={true} className="p-8 lg:translate-x-12 bg-white/70 border-white/50 shadow-lg backdrop-blur-xl">
             <div className="flex items-start gap-5">
               <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0">
                 <Trophy size={28} strokeWidth={1.5} />
               </div>
               <div>
                 <h3 className="font-serif font-bold text-xl text-earth mb-1">Spiritual Heritage</h3>
                 <p className="text-xs text-earth/60 leading-relaxed font-medium">Grounding modern wealth creation in 5,000 years of Dharmic civilization.</p>
               </div>
             </div>
           </GlassCard>
        </motion.div>
      </div>
    </header>
  );
}