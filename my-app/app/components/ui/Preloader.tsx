"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Lock scroll immediately
    document.body.style.overflow = "hidden";
    
    // 2. Scroll to top
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
      // 3. Unlock scroll only after animation
      document.body.style.overflow = "";
    }, 2500);

    return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-earth overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Split Screen Effect */}
          <motion.div 
             initial={{ height: "100%" }}
             exit={{ height: 0 }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
             className="absolute top-0 left-0 w-full bg-[#111] z-10"
          />

          {/* Central Logo Animation */}
          <div className="relative z-20 flex flex-col items-center gap-6 overflow-hidden">
             <motion.div
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -100, opacity: 0 }}
               transition={{ duration: 0.8 }}
               className="flex items-center gap-6"
             >
                {/* LOGO BOX FIX: Optical Centering & More Breathing Room */}
                <div className="w-16 h-16 bg-gold rotate-45 grid place-items-center shadow-2xl shadow-gold/50">
                    {/* The pb-1 and pr-0.5 visually center the 'S' font perfectly */}
                    <span className="text-earth -rotate-45 font-bold font-serif text-3xl pb-1 pr-0.5 leading-none">S</span>
                </div>
                
                <div className="text-left space-y-1">
                    <h1 className="text-4xl font-serif text-white leading-none">Sparkling Era</h1>
                    <p className="text-[10px] text-gold uppercase tracking-[0.5em] font-medium">Global Foundation</p>
                </div>
             </motion.div>
             
             {/* Loading Bar */}
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "240px" }}
               exit={{ opacity: 0 }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="h-[1px] bg-gold/50 mt-4"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}