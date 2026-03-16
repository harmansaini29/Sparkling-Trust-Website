"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const PHONE_NUMBER = "8888899695";
    const text = "Hello Sparkling Era Foundation, I would like to know more about your initiatives.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 bg-white text-earth border border-black/10 rounded-full shadow-xl flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={openWhatsApp}
        className="w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-xl md:shadow-2xl shadow-green-500/30 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 group relative"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 group-hover:hidden"></span>
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </motion.button>
    </div>
  );
}