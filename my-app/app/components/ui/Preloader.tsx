"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toString().padStart(3, '0');
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const animation = animate(count, 100, {
      duration: 2.4,
      ease: [0.76, 0, 0.24, 1]
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => { document.body.style.overflow = "auto"; }, 1200);
    }, 3000);

    return () => {
      animation.stop();
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [count]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030811] overflow-hidden"
          exit={{
            y: "-100%",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] pointer-events-none blur-3xl" />

          <motion.div
            className="relative z-20 flex flex-col items-center w-[90%] max-w-[550px] p-12 md:p-16 bg-[#0A192F]/30 backdrop-blur-2xl border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-3xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            exit={{ opacity: 0, scale: 0.95, y: -40, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="absolute inset-0 rounded-3xl border border-[#D4AF37]/20 pointer-events-none mix-blend-overlay" />

            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6 mb-10"
            >
              {/* Clean white logo card — crisp on dark bg */}
              <div className="relative">
                {/* Refined gold halo */}
                <div className="absolute -inset-1 rounded-[1.4rem] bg-gradient-to-br from-[#D4AF37]/30 via-[#F97316]/10 to-[#D4AF37]/20 blur-md pointer-events-none" />
                <div className="relative bg-white rounded-[1.2rem] px-8 py-5 md:px-10 md:py-6 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
                  <div className="relative w-[220px] h-[72px] md:w-[300px] md:h-[98px]">
                    <Image
                      src="/logo.png"
                      alt="Sparkle Era Global Foundation"
                      fill
                      sizes="(max-width: 768px) 220px, 300px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="text-center flex flex-col items-center justify-center space-y-1.5 mb-10 w-full">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[10px] md:text-xs font-sans text-[#D4AF37] tracking-[0.4em] uppercase font-semibold"
                >
                  Arth Sakshar Bharat Abhiyan
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full flex flex-col gap-4 px-2"
            >
              <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37] to-[#FFF9E6]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.4, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] md:text-xs font-sans tracking-[0.25em] text-white/50 uppercase font-semibold">
                  Initializing
                </span>
                <div className="flex items-start text-[#D4AF37] font-mono text-[11px] md:text-sm tracking-widest font-bold">
                  <motion.span>{rounded}</motion.span>
                  <span className="text-[9px] md:text-[10px] ml-0.5 mt-[1px] md:mt-[2px]">%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}