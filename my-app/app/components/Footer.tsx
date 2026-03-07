"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation"; 

export function Footer() {
  const [email, setEmail] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter(); 

  // Professional hydration fix for the interactive form elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-[#050505] text-white pt-32 pb-8 border-t border-white/10 font-sans relative overflow-hidden">
      {/* Massive Cinematic Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.02] mix-blend-overlay">
        <h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-serif font-black whitespace-nowrap tracking-tighter">SPARKLE ERA</h1>
      </div>
      
      {/* Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#F97316]/10 via-[#F97316]/5 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-24">
            
            {/* Column 1: Brand & Contact */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-12">
                {/* Enhanced Logo Container */}
                <div className="relative w-72 h-24 flex items-center justify-start shrink-0 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                  <Image src="/logo.png" alt="Sparkle Era Global Foundation" fill className="object-contain object-left p-2" priority />
                </div>
                
                {/* Upgraded Contact Information */}
                <div className="space-y-8 text-white/80 text-base md:text-lg">
                    <div className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-full bg-[#F97316]/10 flex items-center justify-center shrink-0 border border-[#F97316]/20 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                        <MapPin size={20} className="text-[#F97316] group-hover:text-white transition-colors" />
                      </div>
                      <p className="pt-2 leading-relaxed font-medium">Office No: 309, 3rd Floor, Veerbhadra Nagar, Pyramid Axis, Baner, Pune – Maharashtra</p>
                    </div>
                    <div className="flex items-center gap-5 group">
                      <div className="w-12 h-12 rounded-full bg-[#F97316]/10 flex items-center justify-center shrink-0 border border-[#F97316]/20 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                        <Phone size={20} className="text-[#F97316] group-hover:text-white transition-colors" />
                      </div>
                      <p className="font-mono text-lg tracking-wider group-hover:text-white transition-colors">+91 88888 99695</p>
                    </div>
                    <div className="flex items-center gap-5 group">
                      <div className="w-12 h-12 rounded-full bg-[#F97316]/10 flex items-center justify-center shrink-0 border border-[#F97316]/20 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                        <Mail size={20} className="text-[#F97316] group-hover:text-white transition-colors" />
                      </div>
                      <p className="font-medium group-hover:text-white transition-colors">sparkleglobalfoundation@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-3 xl:col-span-4 grid grid-cols-2 gap-10 pt-4 lg:pl-8">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-4 h-[2px] bg-[#F97316]" />
                      <h4 className="text-[#F97316] font-bold uppercase tracking-[0.25em] text-xs md:text-sm">Foundation</h4>
                    </div>
                    <ul className="space-y-5 text-base text-white/70 font-medium">
                        <li><Link href="/about" className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">About Us</Link></li>
                        <li><Link href="/impact" className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Our Impact</Link></li>
                        <li><Link href="/gallery" className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Media Gallery</Link></li>
                        
                        <li className="pt-2">
                          <Link href="/contribute" className="group inline-flex items-center gap-2 text-[#F97316] hover:text-white transition-colors duration-300 font-bold">
                            Strategic Philanthropy
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Link>
                        </li>
                        
                        <li><Link href="/contact" className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300 mt-2">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-4 h-[2px] bg-[#F97316]" />
                      <h4 className="text-[#F97316] font-bold uppercase tracking-[0.25em] text-xs md:text-sm">Initiatives</h4>
                    </div>
                    <ul className="space-y-5 text-base text-white/70 font-medium">
                        <li><Link href="/programs/satark" className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Project Satark</Link></li>
                        <li><Link href="/programs/saksham" className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Project Saksham</Link></li>
                        <li><Link href="/programs/sanskar" className="hover:text-white hover:translate-x-2 inline-block transition-transform duration-300">Project Sanskar</Link></li>
                        <li className="pt-4">
                          <Link href="/programs" className="inline-block italic text-[#F97316] border-b border-[#F97316]/30 hover:border-[#F97316] pb-1 transition-colors">
                            View All Programs →
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Column 3: Newsletter & Social */}
            <div className="lg:col-span-4 pt-4">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-4 h-[2px] bg-[#F97316]" />
                  <h4 className="text-[#F97316] font-bold uppercase tracking-[0.25em] text-xs md:text-sm">Join the Movement</h4>
                </div>
                <p className="text-white/60 text-base mb-8 leading-relaxed font-medium">
                  Subscribe to receive exclusive insights on financial empowerment and direct updates from our grassroots operations.
                </p>
                
                {/* Upgraded Newsletter Input */}
                <div className="flex gap-3 mb-12 h-[60px]">
                    {isMounted ? (
                      <>
                        <input 
                            type="email" 
                            placeholder="Enter your email address..." 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#1A1A1A] border border-white/10 rounded-2xl px-6 py-4 text-base text-white placeholder:text-white/40 focus:outline-none focus:border-[#F97316]/60 focus:bg-[#222] focus:ring-4 focus:ring-[#F97316]/10 w-full transition-all duration-300 shadow-inner"
                        />
                        <button 
                          onClick={() => router.push('/contact')} 
                          className="bg-[#F97316] text-white px-8 rounded-2xl flex items-center justify-center hover:bg-[#ea580c] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 group"
                        >
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </>
                    ) : (
                      <div className="w-full h-full bg-[#1A1A1A] rounded-2xl animate-pulse border border-white/5" />
                    )}
                </div>

                {/* Upgraded Social Icons - Now ORANGE by default */}
                <div className="flex gap-4">
                    {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                        <a 
                          key={i} 
                          href="#" 
                          className="w-14 h-14 rounded-2xl bg-[#F97316]/10 flex items-center justify-center text-[#F97316] border border-[#F97316]/20 shadow-[0_4px_15px_rgba(249,115,22,0.1)] hover:bg-[#F97316] hover:text-white hover:border-[#F97316] hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(249,115,22,0.4)] transition-all duration-300"
                        >
                          <Icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom Bar - Scaled up typography */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm uppercase tracking-widest text-white/50 font-bold">
            <p>© 2021 Sparkle Era Global Foundation.</p>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <Link href="/compliance" className="hover:text-[#F97316] transition-colors">Compliance & Legal</Link>
                <div className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 shadow-sm">
                    <span className="w-2.5 h-2.5 bg-[#F97316] rounded-full animate-pulse shadow-[0_0_12px_#F97316]"></span>
                    <p className="text-white/80">Designed with Dharma</p>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}