"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2800); // Slightly longer for cinematic feel

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* --- LAYER 1: MASSIVE BACKGROUND WATERMARK --- */}
          {/* This adds texture and depth, making it look expensive */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
             <motion.div 
               initial={{ scale: 0.8, rotate: -10 }}
               animate={{ scale: 1.2, rotate: 0 }}
               transition={{ duration: 3, ease: "easeOut" }}
               className="relative w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]"
             >
                <Image 
                  src="/logo.png" 
                  alt="" 
                  fill 
                  className="object-contain grayscale"
                />
             </motion.div>
          </div>

          {/* --- LAYER 2: CINEMATIC REVEAL --- */}
          <div className="relative z-20 flex flex-col items-center">
             
             {/* Glowing Orb Background behind Logo */}
             <motion.div
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold/20 blur-[60px] rounded-full"
             />

             {/* Main Logo Reveal */}
             <div className="relative overflow-hidden p-4">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-64 h-32 md:w-80 md:h-40"
                >
                   <Image 
                     src="/logo.png" 
                     alt="Sparkling Era" 
                     fill 
                     className="object-contain drop-shadow-[0_10px_30px_rgba(197,160,89,0.3)]"
                     priority
                   />
                   
                   {/* Shimmer Effect passing over the logo */}
                   <motion.div 
                     initial={{ x: "-100%" }}
                     animate={{ x: "200%" }}
                     transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                   />
                </motion.div>
             </div>

             {/* Elegant Progress Line */}
             <div className="mt-8 relative w-48 h-[1px] bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-full bg-gold shadow-[0_0_10px_#C5A059]"
                />
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}