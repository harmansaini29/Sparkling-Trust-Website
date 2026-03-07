"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Menu, X, ZoomIn, ChevronDown, PhoneCall, ShieldCheck, Landmark, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const programsList = [
    { name: 'Satark', href: '/programs/satark', desc: 'Financial fraud awareness' },
    { name: 'Saksham', href: '/programs/saksham', desc: 'Women empowerment' },
    { name: 'Sanskar', href: '/programs/sanskar', desc: 'Cultural wisdom' },
    { name: 'Sathi', href: '/programs/sathi', desc: 'Support network' },
    { name: 'Sevalay', href: '/programs/sevalay', desc: 'Destitute care' },
    { name: 'Shrushti', href: '/programs/shrushti', desc: 'Nature restoration' },
  ];

  const involvedList = [
    { name: 'Volunteer With Us', href: '/get-involved?tab=volunteer', desc: 'Join our grassroots movement' },
    { name: 'Invite a Program', href: '/get-involved?tab=invite', desc: 'Bring our initiatives to your city' },
    { name: 'CSR Collaboration', href: '/get-involved?tab=csr', desc: 'Partner for sustainable impact' }
  ];

  if (!mounted) return null;

  // Reusable Link for sophisticated typography
  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#064E3B]/70 hover:text-[#064E3B] transition-colors">
      {children}
    </Link>
  );

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        {/* Main Floating Pill */}
        <div className="pointer-events-auto w-full max-w-[1400px] bg-white/95 backdrop-blur-2xl border border-black/[0.04] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500">
          
          {/* Logo Section */}
          <button suppressHydrationWarning onClick={() => setIsLogoModalOpen(true)} className="flex items-center group cursor-zoom-in z-50 outline-none">
            <div className="relative w-40 h-10 md:w-48 md:h-12 flex items-center justify-start shrink-0 transition-transform duration-500 group-hover:opacity-80">
              <Image src="/logo.png" alt="Sparkle Era" fill className="object-contain object-left" priority />
            </div>
          </button>

          {/* Center Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            
            {/* Programs Dropdown (Mega Menu Style) */}
            <div 
              className="relative py-4 cursor-pointer group"
              onMouseEnter={() => setHoveredDropdown('programs')}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <div className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold transition-colors ${hoveredDropdown === 'programs' ? 'text-[#064E3B]' : 'text-[#064E3B]/70'}`}>
                Programs <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredDropdown === 'programs' ? 'rotate-180' : ''}`} />
              </div>
              
              <AnimatePresence>
                {hoveredDropdown === 'programs' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 pointer-events-auto"
                  >
                    <div className="bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-black/5 p-4 w-[600px] grid grid-cols-2 gap-2 relative">
                      {programsList.map((prog) => (
                        <Link key={prog.name} href={prog.href} className="group/item flex flex-col p-4 rounded-2xl hover:bg-[#F9FAFB] transition-colors border border-transparent hover:border-black/5">
                          <span className="text-sm font-bold text-[#064E3B] group-hover/item:text-[#F97316] transition-colors flex items-center gap-2">
                            {prog.name}
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                          </span>
                          <span className="text-xs text-[#064E3B]/60 mt-1">{prog.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* IMPACT BUTTON - The Highly Professional Green Box */}
            <Link href="/impact" className="relative group flex items-center justify-center px-5 py-2.5 rounded-full overflow-hidden bg-[#064E3B] text-white shadow-[0_4px_15px_rgba(6,78,59,0.2)] hover:shadow-[0_10px_30px_rgba(6,78,59,0.4)] transition-all duration-300 hover:-translate-y-0.5">
              {/* Animated Background Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
              
              <div className="relative z-10 flex items-center gap-2">
                {/* Live Pulse Indicator */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] drop-shadow-sm">Impact</span>
              </div>
            </Link>

            <NavLink href="/gallery">Gallery</NavLink>

            {/* Get Involved Dropdown */}
            <div 
              className="relative py-4 cursor-pointer group"
              onMouseEnter={() => setHoveredDropdown('involved')}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <div className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold transition-colors ${hoveredDropdown === 'involved' ? 'text-[#064E3B]' : 'text-[#064E3B]/70'}`}>
                Get Involved <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredDropdown === 'involved' ? 'rotate-180' : ''}`} />
              </div>
              
              <AnimatePresence>
                {hoveredDropdown === 'involved' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 pointer-events-auto"
                  >
                    <div className="bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-black/5 p-3 w-[320px] flex flex-col gap-1 relative">
                      {involvedList.map((inv) => (
                        <Link key={inv.name} href={inv.href} className="group/item flex flex-col p-4 rounded-2xl hover:bg-[#F9FAFB] transition-colors border border-transparent hover:border-black/5">
                          <span className="text-sm font-bold text-[#064E3B] group-hover/item:text-[#F97316] transition-colors">{inv.name}</span>
                          <span className="text-xs text-[#064E3B]/60 mt-1">{inv.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="group flex items-center justify-center w-10 h-10 rounded-full border border-black/5 bg-white shadow-sm hover:shadow-md hover:border-[#F97316]/30 transition-all text-[#064E3B] hover:text-[#F97316]">
              <PhoneCall size={16} className="group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
            </Link>
            
            <Link href="/contribute" className="group flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold shadow-[0_10px_20px_rgba(249,115,22,0.2)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all duration-300">
              <Heart size={14} className="group-hover:scale-110 transition-transform duration-300 fill-white/20" /> 
              Contribute
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button suppressHydrationWarning onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden w-11 h-11 rounded-full bg-[#F9FAFB] border border-black/5 flex items-center justify-center text-[#064E3B] z-50 active:scale-95 transition-all">
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl lg:hidden flex flex-col pt-32 px-6 overflow-y-auto pb-12">
            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] border-b border-black/5 pb-4 hover:text-[#F97316] transition-colors">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] border-b border-black/5 pb-4 hover:text-[#F97316] transition-colors">About Us</Link>
              
              {/* Mobile Programs Dropdown */}
              <div className="border-b border-black/5 pb-4">
                <button onClick={() => setMobileExpanded(mobileExpanded === 'programs' ? null : 'programs')} className="w-full flex justify-between items-center text-3xl font-serif text-[#064E3B] hover:text-[#F97316] transition-colors">
                  Programs <ChevronDown className={`transition-transform duration-300 ${mobileExpanded === 'programs' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'programs' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-4 pt-6 pl-4 border-l border-black/10 ml-2 overflow-hidden">
                      {programsList.map(prog => (
                         <Link key={prog.name} href={prog.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-[#064E3B]/80 hover:text-[#F97316] transition-colors">{prog.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Impact Button Style */}
              <Link href="/impact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-3xl font-serif text-[#064E3B] border-b border-black/5 pb-4 group">
                Impact 
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
                </span>
              </Link>
              
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] border-b border-black/5 pb-4 hover:text-[#F97316] transition-colors">Gallery</Link>
              
              <Link href="/compliance" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-3xl font-serif text-[#064E3B] border-b border-black/5 pb-4 hover:text-[#F97316] transition-colors">
                Compliance <ShieldCheck size={24} className="text-[#F97316]" />
              </Link>

              {/* Mobile Get Involved Dropdown */}
              <div className="border-b border-black/5 pb-4">
                <button onClick={() => setMobileExpanded(mobileExpanded === 'involved' ? null : 'involved')} className="w-full flex justify-between items-center text-3xl font-serif text-[#064E3B] hover:text-[#F97316] transition-colors">
                  Get Involved <ChevronDown className={`transition-transform duration-300 ${mobileExpanded === 'involved' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'involved' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex flex-col gap-4 pt-6 pl-4 border-l border-black/10 ml-2 overflow-hidden">
                      {involvedList.map(inv => (
                         <Link key={inv.name} href={inv.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif text-[#064E3B]/80 hover:text-[#F97316] transition-colors">{inv.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#064E3B] pb-4 hover:text-[#F97316] transition-colors">Contact Us</Link>
              
              <Link href="/contribute" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 flex items-center justify-center gap-3 bg-[#064E3B] text-white py-4 rounded-2xl text-lg font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-transform">
                <Heart size={20} className="fill-white/30" /> Contribute
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Zoom Modal */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setIsLogoModalOpen(false)}>
            <motion.div initial={{ scale: 0.8, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: 20, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative bg-white rounded-[2.5rem] p-10 md:p-20 flex items-center justify-center shadow-2xl max-w-5xl w-full border border-white/10" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full aspect-[3/1] h-32 md:h-56"><Image src="/logo.png" alt="Logo Full Version" fill className="object-contain" priority /></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}