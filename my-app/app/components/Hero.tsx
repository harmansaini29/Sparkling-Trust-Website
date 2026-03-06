"use client";
import Image from "next/image"; 
import Link from "next/link"; 
import { Globe, Trophy, ArrowUpRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header ref={containerRef} className="relative w-full h-screen min-h-[850px] flex items-center justify-start overflow-hidden bg-[#1e48885b]">
      
      <motion.div 
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 w-full h-full z-0 origin-center will-change-transform"
      >
         <Image 
           src="/hero-bg-clean.jpg" 
           alt="Bharat Mata" 
           fill 
           sizes="100vw"
           className="object-cover object-center md:object-[75%_center] lg:object-right opacity-100 brightness-110 contrast-125 saturate-110" 
           priority 
           quality={100}
         />
      </motion.div>

      <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-[#0c401e] via-[#0A192F]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_60%)] z-10 pointer-events-none blur-3xl mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFCF9] to-transparent z-10 pointer-events-none" />

      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-start text-left mt-[-5%]"
      >
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-[#D4AF37]" />
            <span className="text-[10px] md:text-sm font-bold tracking-[0.4em] text-[#D4AF37] uppercase drop-shadow-md">
              Govt. Recognized NGO
            </span>
          </motion.div>

          <motion.h1 
            className="font-serif font-bold drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
            <span className="block italic font-light text-white/90 text-3xl md:text-4xl lg:text-5xl mb-4 drop-shadow-lg">
              Empowering the roots of
            </span>
            
            {/* SPACING FIX: Set leading-[1.1] to tighten the lines, stacked as block elements, and removed inner padding. */}
            <span className="block text-5xl md:text-7xl lg:text-[6.5rem] font-sans font-extrabold whitespace-nowrap leading-[1.1]">
              
              <span className="block pt-3 pb-0 bg-clip-text text-transparent bg-gradient-to-b from-[#FFF9E6] via-[#D4AF37] to-[#A6831C]">
                अर्थ साक्ष<motion.span 
                  className="inline-block relative font-normal align-baseline -translate-y-[6%] mx-1.5"
                  style={{
                    fontSize: '1.10em',
                    backgroundImage: 'linear-gradient(90deg, #D4AF37 0%, #FFF9E6 20%, #F97316 50%, #FFF9E6 80%, #D4AF37 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                  animate={{ 
                    backgroundPosition: ['200% center', '-200% center'],
                    filter: [
                      'drop-shadow(0 0 10px rgba(212,175,55,0.4))',
                      'drop-shadow(0 0 20px rgba(249,115,22,0.8))',
                      'drop-shadow(0 0 10px rgba(212,175,55,0.4))'
                    ]
                  }}
                  transition={{ 
                    backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                    filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  ₹
                </motion.span>
              </span>
              
              {/* Negative margin (-mt-2 lg:-mt-4) pulls this line up to eliminate any remaining gap */}
              <span className="block pt-4 pb-6 -mt-2 lg:-mt-1 bg-clip-text text-transparent bg-gradient-to-b from-[#D4AF37] to-[#A6831C]">
              भारत अभियान
              </span>

            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/75 font-serif italic mt-8 max-w-xl leading-relaxed drop-shadow-md"
          >
            A unified movement to decouple wealth from greed. We are building a financially sovereign and socially compassionate India.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 mt-12"
          >
            <Link href="/programs" className="group relative px-8 py-4.5 bg-gradient-to-r from-[#D4AF37] to-[#B8942E] text-[#0A192F] rounded-lg font-sans text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3">
              Explore Initiatives <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            
            <Link href="/impact" className="group px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white rounded-lg font-sans text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 flex items-center justify-center gap-3">
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors bg-white/10">
                <Play className="w-3 h-3 fill-current ml-0.5 text-[#D4AF37]" />
              </span>
              Watch Impact
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 left-0 w-full z-30 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-8 px-10 py-5 bg-[#0A192F]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto">
            <div className="flex items-center gap-4">
              <Globe className="w-8 h-8 text-[#D4AF37]" />
              <div className="text-left">
                <h4 className="text-2xl font-serif font-bold text-white leading-none tracking-wide">56,411+</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mt-1.5 opacity-90">Lives Empowered</p>
              </div>
            </div>
            <div className="hidden sm:block w-[1px] h-12 bg-white/20" />
            <div className="flex items-center gap-4">
              <Trophy className="w-8 h-8 text-[#D4AF37]" />
              <div className="text-left">
                <h4 className="text-2xl font-serif font-bold text-white leading-none tracking-wide">262+</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mt-1.5 opacity-90">Grassroots Events</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}