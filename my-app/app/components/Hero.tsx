"use client";
import Image from "next/image"; 
import Link from "next/link"; 
import { Globe, Trophy, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <header className="relative w-full min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FDFCF9]">
      
      {/* 1. MAJESTIC, VISIBLE, & PROFESSIONAL BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Dynamic Ambient Orbs for an Ethereal Glow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#F97316]/15 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
          className="absolute -bottom-40 right-10 w-[800px] h-[800px] bg-[#064E3B]/10 rounded-full blur-[150px]"
        />

        {/* Bharat Mata Pattern - Made more visible and prominent */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }} 
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          className="absolute right-0 top-0 w-full md:w-[85%] lg:w-[75%] h-full opacity-100 mix-blend-multiply"
        >
           {/* Lighter Multi-layered CSS Masking: Allows the image to pop while protecting text */}
           <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#FDFCF9] via-[#FDFCF9]/30 to-transparent" />
           <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FDFCF9] via-[#FDFCF9]/10 to-transparent h-[20%] bottom-0 top-auto" />
           <Image 
             src="/india-pattern.png" 
             alt="Bharat Mata" 
             fill 
             className="object-cover lg:object-contain object-right md:object-right-top" 
             priority 
             quality={100}
           />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-20 w-full">
        
        {/* 2. MAIN CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }} 
          className="lg:col-span-7 space-y-8"
        >
          
          <div className="inline-flex items-center gap-4 px-6 py-3.5 rounded-full bg-white/90 border border-[#F97316]/20 shadow-[0_10px_30px_rgba(249,115,22,0.1)] backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F97316]"></span>
            </span>
            <span className="text-lg md:text-2xl font-black tracking-widest text-[#064E3B] leading-none pb-0.5 font-serif">
              “अर्थसाक्षर भारत, आत्मनिर्भर भारत”
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] text-[#064E3B] tracking-tight drop-shadow-sm">
            Building a Financially Aware & <span className="text-[#F97316] italic relative inline-block whitespace-nowrap">Socially Responsible
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F97316]/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
            </span> India.
          </h1>

          <div className="relative max-w-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F97316] rounded-full" />
            <p className="text-lg md:text-xl text-[#064E3B]/80 font-medium leading-relaxed pl-6 py-1.5 bg-white/30 backdrop-blur-md rounded-r-2xl border border-white/40 shadow-sm">
              Established in April 2021 in Pune, Maharashtra, we are committed to building an empowered India through financial literacy, women empowerment, cultural awareness, and sustainable grassroots impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link href="/programs" suppressHydrationWarning className="flex items-center justify-center h-14 px-8 bg-[#064E3B] text-white rounded-full font-bold text-xs tracking-widest uppercase shadow-[0_10px_30px_rgba(6,78,59,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] hover:bg-[#F97316] transition-all duration-300">
              Explore Our Programs
            </Link>
            <Link href="/get-involved?tab=invite" suppressHydrationWarning className="flex items-center justify-between sm:justify-center h-14 pl-8 pr-2 gap-4 rounded-full border border-[#064E3B]/10 bg-white/80 backdrop-blur-md hover:border-[#F97316]/30 hover:shadow-xl hover:bg-white transition-all duration-300 group hover:-translate-y-1">
              <span className="font-bold text-xs tracking-widest uppercase text-[#064E3B] group-hover:text-[#F97316] transition-colors duration-300">Invite Us</span>
              <div className="w-10 h-10 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300 shadow-sm"><ChevronRight size={18} /></div>
            </Link>
          </div>
        </motion.div>

        {/* 3. SMALLER, DOWNWARD SHIFTED FLOATING CARDS */}
        {/* Added lg:mt-24 to explicitly push the cards downwards */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.5 }} 
          className="lg:col-span-5 hidden md:flex flex-col gap-5 lg:pl-12 lg:mt-24"
        >
           {/* Card 1 - Scaled down to max-w-[350px] & p-6 */}
           <motion.div 
             animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="w-full max-w-[350px] p-6 bg-white/85 shadow-[0_20px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl border border-white rounded-[2rem] hover:shadow-[0_30px_60px_rgba(249,115,22,0.12)] transition-all duration-500 group relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316]/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#F97316]/20 transition-colors duration-700" />
             
             <div className="flex items-start gap-4 relative z-10">
               <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-[#F97316] shrink-0 border border-black/5 group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-500"><Globe size={24} /></div>
               <div className="pt-1.5">
                 <h3 className="font-serif font-bold text-xl text-[#064E3B] mb-1 group-hover:text-[#F97316] transition-colors">Grassroots Awareness</h3>
                 <p className="text-xs text-[#064E3B]/70 font-medium leading-relaxed">Educating citizens about financial frauds and safe investing at the foundation level.</p>
               </div>
             </div>
           </motion.div>
           
           {/* Card 2 - Deliberate Stagger */}
           <motion.div 
             animate={{ y: [0, 6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
             className="w-full max-w-[350px] lg:translate-x-10 p-6 bg-white/85 shadow-[0_20px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl border border-white rounded-[2rem] hover:shadow-[0_30px_60px_rgba(6,78,59,0.12)] transition-all duration-500 group relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#064E3B]/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#064E3B]/20 transition-colors duration-700" />
             
             <div className="flex items-start gap-4 relative z-10">
               <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-[#064E3B] shrink-0 border border-black/5 group-hover:scale-110 group-hover:bg-[#064E3B] group-hover:text-white transition-all duration-500"><Trophy size={24} /></div>
               <div className="pt-1.5">
                 <h3 className="font-serif font-bold text-xl text-[#064E3B] mb-1 group-hover:text-[#064E3B] transition-colors">Sustainable Empowerment</h3>
                 <p className="text-xs text-[#064E3B]/70 font-medium leading-relaxed">Providing women and youth with skill development and strong cultural roots.</p>
               </div>
             </div>
           </motion.div>

        </motion.div>
      </div>
    </header>
  );
}