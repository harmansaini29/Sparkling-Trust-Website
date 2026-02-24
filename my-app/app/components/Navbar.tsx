"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
<<<<<<< Updated upstream
import { MoveRight, Menu, X } from "lucide-react";
=======
import Image from "next/image"; 
import { Menu, X, ZoomIn, ChevronDown, PhoneCall, ShieldCheck } from "lucide-react";
>>>>>>> Stashed changes
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< Updated upstream

  const navLinks = [
    { name: 'Mission', href: '/mission' },
    { name: 'Ventures', href: '/projects' },
    { name: 'Legacy', href: '/legacy' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Contact', href: '/contact' },
=======
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Prevents hydration mismatches on client load
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const programsList = [
    { name: 'Satark', href: '/programs/satark' },
    { name: 'Saksham', href: '/programs/saksham' },
    { name: 'Sanskar', href: '/programs/sanskar' },
    { name: 'Sathi', href: '/programs/sathi' },
    { name: 'Sevalay', href: '/programs/sevalay' },
    { name: 'Shrushti', href: '/programs/shrushti' },
>>>>>>> Stashed changes
  ];

  const involvedList = [
    { name: 'Volunteer', href: '/get-involved?tab=volunteer' },
    { name: 'Invite a Program', href: '/get-involved?tab=invite' },
    { name: 'CSR Collaboration', href: '/get-involved?tab=csr' }
  ];

  if (!mounted) return null; // Hydration security measure

  return (
    <>
<<<<<<< Updated upstream
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl backdrop-blur-xl bg-white/80 border border-white/60 shadow-2xl shadow-black/5 rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 hover:bg-white/95">
          
          {/* Logo Block */}
          <Link href="/" className="flex items-center gap-4 group cursor-pointer z-50">
            <div className="relative w-10 h-10 bg-gold rotate-45 flex items-center justify-center shadow-lg shadow-gold/30 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500 font-bold text-lg font-serif">S</span>
=======
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-7xl backdrop-blur-xl bg-white/95 border border-white/60 shadow-xl shadow-black/5 rounded-2xl px-6 py-2.5 flex items-center justify-between transition-all duration-500">
          
          {/* LOGO */}
          <button suppressHydrationWarning onClick={() => setIsLogoModalOpen(true)} className="flex items-center group cursor-zoom-in z-50 outline-none">
            <div className="relative w-48 h-12 flex items-center justify-start shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo.png" alt="Sparkle Era" fill className="object-contain object-left drop-shadow-sm" priority />
              <div className="absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#F97316] bg-white rounded-full p-1 shadow-sm">
                <ZoomIn size={12} />
              </div>
>>>>>>> Stashed changes
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight leading-none text-earth">Sparkling Era</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-black opacity-40 text-earth">Global Foundation</span>
            </div>
          </Link>

<<<<<<< Updated upstream
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
=======
          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-7 xl:gap-8 items-center">
            <Link href="/" className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#064E3B] hover:text-[#F97316] transition-colors">Home</Link>
            <Link href="/about" className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#064E3B]/70 hover:text-[#F97316] transition-colors">About Us</Link>
            
            {/* PROGRAMS DROPDOWN */}
            <div className="relative group py-2">
              <Link href="/programs" className="flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] font-bold text-[#064E3B]/70 group-hover:text-[#F97316] transition-colors">
                Programs <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
>>>>>>> Stashed changes
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                 <div className="bg-white rounded-2xl shadow-2xl border border-black/5 p-3 w-48 flex flex-col gap-1 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                    {programsList.map((prog) => (
                      <Link key={prog.name} href={prog.href} className="text-sm font-semibold text-[#064E3B] hover:text-[#F97316] p-2.5 rounded-xl hover:bg-[#064E3B]/5 transition-colors">
                        {prog.name}
                      </Link>
                    ))}
                 </div>
              </div>
            </div>

            <Link href="/impact" className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#064E3B]/70 hover:text-[#F97316] transition-colors">Impact</Link>
            <Link href="/gallery" className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#064E3B]/70 hover:text-[#F97316] transition-colors">Gallery</Link>

            {/* NEW: COMPLIANCE LINK */}
            <Link href="/compliance" className="flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] font-bold text-[#064E3B]/70 hover:text-[#F97316] transition-colors">
              <ShieldCheck size={14} className="text-[#F97316]/70" /> Compliance
            </Link>

            {/* GET INVOLVED DROPDOWN */}
            <div className="relative group py-2">
              <Link href="/get-involved" className="flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] font-bold text-[#064E3B]/70 group-hover:text-[#F97316] transition-colors">
                Get Involved <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                 <div className="bg-white rounded-2xl shadow-2xl border border-black/5 p-3 w-56 flex flex-col gap-1 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                    {involvedList.map((inv) => (
                      <Link key={inv.name} href={inv.href} className="text-sm font-semibold text-[#064E3B] hover:text-[#F97316] p-2.5 rounded-xl hover:bg-[#064E3B]/5 transition-colors">
                        {inv.name}
                      </Link>
                    ))}
                 </div>
              </div>
            </div>
          </div>

<<<<<<< Updated upstream
          {/* Desktop CTA */}
          <Link 
            href="/contact" 
            suppressHydrationWarning
            className="hidden lg:flex group relative overflow-hidden bg-earth text-white px-8 py-3 rounded-xl items-center gap-3 text-[11px] uppercase tracking-widest font-bold shadow-xl transition-all hover:shadow-2xl hover:shadow-gold/20 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Movement <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-[#D4A373] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            suppressHydrationWarning
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-earth/5 flex items-center justify-center text-earth z-50 active:scale-90 transition-transform"
          >
=======
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="group flex items-center gap-2 border border-[#064E3B]/20 bg-[#064E3B]/5 text-[#064E3B] px-5 py-2.5 rounded-xl text-[10px] uppercase tracking-widest font-bold hover:bg-[#F97316] hover:border-[#F97316] hover:text-white transition-all shadow-sm">
              <PhoneCall size={14} className="group-hover:animate-bounce" /> Contact Us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button suppressHydrationWarning onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden w-10 h-10 rounded-full bg-[#064E3B]/5 flex items-center justify-center text-[#064E3B] z-50 active:scale-90 transition-transform">
>>>>>>> Stashed changes
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

<<<<<<< Updated upstream
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-earth/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif text-white hover:text-gold transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link 
                   href="/contact"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="bg-gold text-earth px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl shadow-gold/20"
                >
                  Join The Movement
                </Link>
              </motion.div>
            </div>
=======
      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#F9FAFB]/98 backdrop-blur-2xl lg:hidden flex flex-col pt-32 px-6 overflow-y-auto pb-12">
            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] border-b border-[#064E3B]/10 pb-4 hover:text-[#F97316] transition-colors">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] border-b border-[#064E3B]/10 pb-4 hover:text-[#F97316] transition-colors">About Us</Link>
              
              <div className="border-b border-[#064E3B]/10 pb-4">
                <button onClick={() => setMobileExpanded(mobileExpanded === 'programs' ? null : 'programs')} className="w-full flex justify-between items-center text-3xl font-serif text-[#064E3B] hover:text-[#F97316] transition-colors">
                  Programs <ChevronDown className={`transition-transform ${mobileExpanded === 'programs' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'programs' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-4 pt-6 pl-4 overflow-hidden">
                      {programsList.map(prog => (
                         <Link key={prog.name} href={prog.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-[#064E3B]/70 hover:text-[#F97316] transition-colors">{prog.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/impact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] border-b border-[#064E3B]/10 pb-4 hover:text-[#F97316] transition-colors">Impact</Link>
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] border-b border-[#064E3B]/10 pb-4 hover:text-[#F97316] transition-colors">Gallery</Link>
              
              {/* NEW: COMPLIANCE LINK (MOBILE) */}
              <Link href="/compliance" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-3xl font-serif text-[#064E3B] border-b border-[#064E3B]/10 pb-4 hover:text-[#F97316] transition-colors">
                Compliance <ShieldCheck size={24} className="text-[#F97316]" />
              </Link>

              <div className="border-b border-[#064E3B]/10 pb-4">
                <button onClick={() => setMobileExpanded(mobileExpanded === 'involved' ? null : 'involved')} className="w-full flex justify-between items-center text-3xl font-serif text-[#064E3B] hover:text-[#F97316] transition-colors">
                  Get Involved <ChevronDown className={`transition-transform ${mobileExpanded === 'involved' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'involved' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-4 pt-6 pl-4 overflow-hidden">
                      {involvedList.map(inv => (
                         <Link key={inv.name} href={inv.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-[#064E3B]/70 hover:text-[#F97316] transition-colors">{inv.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] pb-4 hover:text-[#F97316] transition-colors">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOGO MODAL */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setIsLogoModalOpen(false)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="relative bg-white rounded-3xl p-8 md:p-16 flex items-center justify-center shadow-2xl max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full aspect-[3/1] h-32 md:h-48"><Image src="/logo.png" alt="Logo" fill className="object-contain" priority /></div>
            </motion.div>
>>>>>>> Stashed changes
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}