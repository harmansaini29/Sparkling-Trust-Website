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
    <header ref={containerRef} className="relative w-full h-[100svh] min-h-[650px] md:h-screen md:min-h-[850px] flex items-center justify-start overflow-hidden bg-[#1e48885b]">
      
      <motion.div 
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 w-full h-full z-0 origin-center will-change-transform"
      >
         <Image 
           src="/hero-bg-clean.jpg" 
           alt="Bharat Mata" 
           fill 
           sizes="100vw"
           // FIX: Changed to object-center/object-top on mobile so the picture is perfectly centered and fully visible
           className="object-cover object-center sm:object-[75%_center] lg:object-right opacity-100 brightness-110 contrast-125 saturate-110" 
           priority 
           quality={100}
         />
      </motion.div>

      {/* FIX: Made the green/dark gradient incredibly light and transparent on mobile so the picture is completely visible */}
      <div className="absolute inset-0 md:inset-y-0 md:left-0 w-full md:w-[70%] lg:w-[60%] bg-gradient-to-t md:bg-gradient-to-r from-[#0c401e]/20 via-[#0A192F]/10 md:from-[#1b5b30a4] md:via-[#0A192F]/90 to-transparent md:to-transparent z-10 pointer-events-none" />
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_60%)] z-10 pointer-events-none blur-3xl mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFCF9] to-transparent z-10 pointer-events-none" />

      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-start text-left mt-0 md:mt-[-5%]"
      >
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="h-[2px] w-8 md:w-12 bg-[#D4AF37]" />
            <span className="text-[9px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-[#D4AF37] uppercase drop-shadow-md">
              Govt. Recognized NGO
            </span>
          </motion.div>

          <motion.h1 
            className="font-serif font-bold drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
            <span className="block italic font-light text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4 drop-shadow-lg">
              Empowering the roots of
            </span>
            
            <span className="block text-[2.75rem] leading-tight sm:text-5xl md:text-7xl lg:text-[6.5rem] font-sans font-extrabold whitespace-nowrap md:leading-[1.1]">
              <span className="block pt-2 md:pt-5 pb-0 bg-clip-text text-transparent bg-gradient-to-b from-[#FFF9E6] via-[#D4AF37] to-[#A6831C]">
                अर्थ साक्ष<motion.span 
                  className="inline-block relative font-normal align-baseline -translate-y-[6%] mx-1.5"
                  style={{
                    fontSize: '0.93em',
                    backgroundImage: 'linear-gradient(180deg, #FF671F 20%, #FFFFFF 50%, #046A38 80%)',
                    backgroundSize: '100% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                  animate={{ filter: ['drop-shadow(0 0 12px rgba(255,103,31,0.6))','drop-shadow(0 0 15px rgba(255,255,255,0.8))','drop-shadow(0 0 12px rgba(4,106,56,0.6))','drop-shadow(0 0 12px rgba(255,103,31,0.6))']}}
                  transition={{ filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }}}
                >
                  ₹
                </motion.span>
              </span>
              <span className="block pt-2 md:pt-4 pb-4 md:pb-6 -mt-1 lg:-mt-1 bg-clip-text text-transparent bg-gradient-to-b from-[#D4AF37] to-[#A6831C]">
                भारत अभियान
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/90 font-serif italic mt-6 md:mt-8 max-w-xl leading-relaxed drop-shadow-lg pr-4 md:pr-0"
          >
            A unified movement to decouple wealth from greed. We are building a financially sovereign and socially compassionate India.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-12"
          >
            <Link href="/programs" className="group relative px-6 md:px-8 py-3.5 md:py-4.5 bg-gradient-to-r from-[#D4AF37] to-[#B8942E] text-[#0A192F] rounded-lg font-sans text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3">
              Explore Initiatives <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link href="/impact" className="group px-6 md:px-8 py-3.5 md:py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white rounded-lg font-sans text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 flex items-center justify-center gap-3">
              <span className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors bg-white/10">
                <Play className="w-2 h-2 md:w-3 md:h-3 fill-current ml-0.5 text-[#D4AF37]" />
              </span>
              Watch Impact
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 md:bottom-12 left-0 w-full z-30 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 px-6 sm:px-10 py-5 bg-gradient-to-br from-[#040A12] to-[#0A192F] backdrop-blur-3xl border border-t-[#D4AF37]/60 border-l-[#D4AF37]/60 border-b-[#D4AF37]/30 border-r-[#D4AF37]/30 rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.25)] pointer-events-auto relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:border-[#D4AF37]/80 w-full sm:w-auto">            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_100%)] z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] z-0" />

            <div className="flex items-center gap-4 md:gap-5 relative z-10 w-full sm:w-auto">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-b from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/40 shadow-[inset_0_0_15px_rgba(212,175,55,0.3)] shrink-0">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
              </div>
              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-sans font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#FFF0B3] to-[#C59B27] leading-none drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                  56,411+
                </h4>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD700] mt-1 md:mt-1.5 opacity-100 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
                  Lives Empowered
                </p>
              </div>
            </div>
            
            <div className="hidden sm:block w-[2px] h-12 md:h-14 bg-gradient-to-b from-transparent via-[#D4AF37]/70 to-transparent relative z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            
            <div className="flex items-center gap-4 md:gap-5 relative z-10 w-full sm:w-auto">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-b from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/40 shadow-[inset_0_0_15px_rgba(212,175,55,0.3)] shrink-0">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
              </div>
              <div className="text-left">
                <h4 className="text-xl md:text-2xl font-sans font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] via-[#FFF0B3] to-[#C59B27] leading-none drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                  262+
                </h4>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD700] mt-1 md:mt-1.5 opacity-100 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
                  Grassroots Events
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}