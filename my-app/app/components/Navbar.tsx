"use client";
import { useState } from "react";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Mission', href: '/mission' },
    { name: 'Ventures', href: '/projects' },
    { name: 'Legacy', href: '/legacy' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl backdrop-blur-xl bg-white/80 border border-white/60 shadow-2xl shadow-black/5 rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 hover:bg-white/95">
          
          {/* Logo Block */}
          <Link href="/" className="flex items-center gap-4 group cursor-pointer z-50">
            <div className="relative w-10 h-10 bg-gold rotate-45 flex items-center justify-center shadow-lg shadow-gold/30 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500 font-bold text-lg font-serif">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight leading-none text-earth">Sparkling Era</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-black opacity-40 text-earth">Global Foundation</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-10">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="relative group py-2 text-[11px] uppercase tracking-[0.2em] font-bold text-earth/60 hover:text-gold transition-colors"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden lg:flex group relative overflow-hidden bg-earth text-white px-8 py-3 rounded-xl items-center gap-3 text-[11px] uppercase tracking-widest font-bold shadow-xl transition-all hover:shadow-2xl hover:shadow-gold/20 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Join Movement <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-[#D4A373] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-earth/5 flex items-center justify-center text-earth z-50 active:scale-90 transition-transform"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-earth/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-white hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link 
                   href="/contact"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="bg-gold text-earth px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm"
                >
                  Join The Movement
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}