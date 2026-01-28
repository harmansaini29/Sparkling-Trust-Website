"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading time (or wait for window.onload)
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2500);
    return () => clearTimeout(timer);
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
          <div className="relative z-20 flex flex-col items-center gap-4 overflow-hidden">
             <motion.div
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -100, opacity: 0 }}
               transition={{ duration: 0.8 }}
               className="flex items-center gap-4"
             >
                <div className="w-12 h-12 bg-gold rotate-45 flex items-center justify-center shadow-2xl shadow-gold/50">
                    <span className="text-earth -rotate-45 font-bold font-serif text-2xl">S</span>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl font-serif text-white leading-none">Sparkling Era</h1>
                    <p className="text-[10px] text-gold uppercase tracking-[0.4em]">Global Foundation</p>
                </div>
             </motion.div>
             
             {/* Loading Bar */}
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "200px" }}
               exit={{ opacity: 0 }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="h-[1px] bg-gold/50 mt-8"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}