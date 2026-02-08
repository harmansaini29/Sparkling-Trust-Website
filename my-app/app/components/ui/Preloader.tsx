"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";
    
    // Set viewport dimensions for SVG curve
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    // Total Preload Time: 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
      
      // Unlock scroll after animation
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 1000);
      
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // --- CURVE CALCULATIONS ---
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-earth cursor-wait"
        >
          {dimension.width > 0 && (
            <>
              {/* 1. THE LOGO ZOOM SEQUENCE */}
              <motion.div
                variants={logoVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="relative z-20 flex flex-col items-center gap-6"
              >
                {/* The Golden Rhombus */}
                <div className="relative">
                    <div className="w-24 h-24 bg-gold rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.4)]">
                        <span className="text-earth -rotate-45 font-serif font-bold text-5xl pb-1 pr-1 select-none">S</span>
                    </div>
                    {/* Decorative Ring */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute inset-0 border border-gold/30 rotate-45 scale-110"
                    />
                </div>

                {/* Text Lockup */}
                <div className="text-center mt-4">
                    <h1 className="text-3xl md:text-4xl font-serif text-white tracking-wide">Sparkling Era</h1>
                    <motion.p 
                        initial={{ letterSpacing: "0.2em", opacity: 0 }}
                        animate={{ letterSpacing: "0.5em", opacity: 0.6 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-[10px] text-gold uppercase font-bold mt-2"
                    >
                        Global Foundation
                    </motion.p>
                </div>
              </motion.div>

              {/* 2. THE CURTAIN SVG (Background) */}
              <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none z-10 fill-earth">
                <motion.path
                  variants={curveVariants}
                  initial="initial"
                  exit="exit"
                  custom={initialPath} // Pass initialPath as custom prop if needed, or use closure
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- TYPED VARIANTS (Fixes "Red" Error) ---

const containerVariants: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const logoVariants: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    y: 20
  },
  enter: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    scale: 5, // The "Zoom In" Effect
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

const curveVariants: Variants = {
  initial: (initialPath: string) => ({
    d: initialPath, // Using the closure variable usually works, but passing via custom is safer in some setups
  }),
  exit: {
    d: `M0 0 L2000 0 L2000 0 Q1000 0 0 0 L0 0`, // Flatten curve
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};