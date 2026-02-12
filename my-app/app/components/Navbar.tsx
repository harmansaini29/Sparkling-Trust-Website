"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { MoveRight, Menu, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' }, // Added Home Button here
    { name: 'Mission', href: '/mission' },
    { name: 'Ventures', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Legacy', href: '/legacy' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        {/* COMPACT & PROFESSIONAL CONTAINER */}
        <div className="pointer-events-auto w-full max-w-6xl backdrop-blur-xl bg-white/95 border border-white/60 shadow-xl shadow-black/5 rounded-2xl px-6 py-2.5 flex items-center justify-between transition-all duration-500">
          
          {/* --- BRAND LOGO (CLICKS OPEN POPUP ONLY) --- */}
          <button 
            onClick={() => setIsLogoModalOpen(true)}
            className="flex items-center group cursor-zoom-in z-50 outline-none"
            aria-label="Enlarge Logo"
          >
            {/* Standard Professional Size: w-56 h-12 */}
            <div className="relative w-56 h-12 flex items-center justify-start shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Sparkle Era Global Foundation"
                fill
                className="object-contain object-left drop-shadow-sm" 
                priority
              />
              {/* Subtle Zoom Hint Icon */}
              <div className="absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#E67E22] bg-white rounded-full p-1 shadow-sm">
                <ZoomIn size={12} />
              </div>
            </div>
          </button>

          {/* --- DESKTOP LINKS (INCLUDES HOME) --- */}
          <div className="hidden xl:flex gap-6 items-center">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`relative group py-2 text-[11px] uppercase tracking-[0.15em] font-bold transition-colors ${
                  item.name === 'Home' ? 'text-[#E67E22]' : 'text-slate-600 hover:text-[#E67E22]'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E67E22] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* --- CTA BUTTON --- */}
          <Link 
            href="/contact"
            className="hidden lg:flex group relative overflow-hidden bg-[#0A1A2F] text-white px-6 py-2.5 rounded-xl items-center gap-2 text-[10px] uppercase tracking-widest font-bold shadow-lg transition-all hover:bg-[#E67E22] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Movement <MoveRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* --- MOBILE TOGGLE --- */}
          <button 
            suppressHydrationWarning
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 z-50 active:scale-90 transition-transform"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* --- LOGO POPUP MODAL --- */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsLogoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-3xl p-8 md:p-16 flex items-center justify-center shadow-2xl max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                onClick={() => setIsLogoModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-[#E67E22] hover:text-white flex items-center justify-center transition-colors z-50"
              >
                <X size={20} />
              </button>

              {/* High-Res Logo Display */}
              <div className="relative w-full aspect-[3/1] h-32 md:h-48">
                <Image 
                  src="/logo.png" 
                  alt="Sparkle Era Global Foundation"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#FDFCF9]/98 backdrop-blur-xl xl:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-[#0A1A2F] hover:text-[#E67E22] transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link 
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 bg-[#E67E22] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl block"
              >
                Join The Movement
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}