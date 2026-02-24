<<<<<<< Updated upstream
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
            {/* Brand Block */}
            <div className="lg:col-span-5 space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold rotate-45 flex items-center justify-center">
                        <span className="text-earth -rotate-45 font-serif font-bold text-xl">S</span>
                    </div>
                    <span className="text-2xl font-serif">Sparkling Era</span>
                </div>
                <p className="text-white/40 leading-relaxed max-w-sm">
                    Reimagining wealth through the lens of Dharma. We are a registered non-profit organization dedicated to economic sovereignty and ethical prosperity.
                </p>
                <div className="flex gap-4">
                    {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-earth transition-all">
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Links Block - NOW CONNECTED TO REAL PAGES */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li><Link href="/mission" className="hover:text-white transition-colors">Our Mission</Link></li>
                        <li><Link href="/legacy" className="hover:text-white transition-colors">Legacy & History</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Initiatives</h4>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li><Link href="/initiatives" className="hover:text-white transition-colors">Financial Literacy</Link></li>
                        <li><Link href="/projects" className="hover:text-white transition-colors">Satvik Wealth</Link></li>
                        <li><Link href="/initiatives" className="hover:text-white transition-colors">Rural Growth</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance Docs</Link></li>
                        <li><Link href="/compliance" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/compliance" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
=======
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
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
    <footer className="bg-[#050505] text-white pt-32 pb-8 border-t border-white/5 font-sans relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
        <h1 className="text-[15rem] font-serif font-black whitespace-nowrap">SPARKLE ERA</h1>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#F97316]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
            
            {/* Column 1: Brand & Contact */}
            <div className="lg:col-span-4 space-y-10">
                <div className="relative w-64 h-20 flex items-center justify-start shrink-0 bg-white/5 rounded-xl p-2 border border-white/10">
                  <Image src="/logo.png" alt="Sparkle Era Global Foundation" fill className="object-contain object-left" />
                </div>
                
                <div className="space-y-6 text-white/70 text-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10"><MapPin size={16} className="text-[#F97316]" /></div>
                      <p className="pt-2 leading-relaxed">Office No: 309, 3rd Floor, Veerbhadra Nagar, Pyramid Axis, Baner, Pune – Maharashtra</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10"><Phone size={16} className="text-[#F97316]" /></div>
                      <p>+91 88888 99695</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10"><Mail size={16} className="text-[#F97316]" /></div>
                      <p>sparkleglobalfoundation@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8 pt-4">
                <div>
                    <h4 className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Foundation</h4>
                    <ul className="space-y-4 text-sm text-white/60 font-medium">
                        <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-transform">About Us</Link></li>
                        <li><Link href="/impact" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Our Impact</Link></li>
                        <li><Link href="/gallery" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Media Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Initiatives</h4>
                    <ul className="space-y-4 text-sm text-white/60 font-medium">
                        <li><Link href="/programs/satark" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Project Satark</Link></li>
                        <li><Link href="/programs/saksham" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Project Saksham</Link></li>
                        <li><Link href="/programs/sanskar" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Project Sanskar</Link></li>
                        <li><Link href="/programs" className="hover:text-white hover:translate-x-1 inline-block transition-transform italic text-[#F97316]">View All →</Link></li>
                    </ul>
                </div>
            </div>

            {/* Column 3: Newsletter & Social */}
            <div className="lg:col-span-4 pt-4">
                <h4 className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Join the Movement</h4>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">Subscribe to receive insights on financial empowerment and updates from the grassroots.</p>
                
                <div className="flex gap-2 mb-10 h-[52px]">
                    {isMounted ? (
                      <>
                        <input 
                            type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F97316]/50 w-full transition-all"
                        />
                        <button onClick={() => router.push('/contact')} className="bg-[#F97316] text-[#1A1A1A] px-6 rounded-2xl flex items-center justify-center hover:bg-white hover:scale-105 transition-all">
                            <ArrowRight size={20} />
                        </button>
                      </>
                    ) : (
                      // Clean skeleton placeholder during SSR
                      <div className="w-full h-full bg-white/5 rounded-2xl animate-pulse" />
                    )}
                </div>

                <div className="flex gap-3">
                    {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                        <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#F97316] hover:text-[#1A1A1A] transition-all duration-300 border border-white/5 hover:scale-110"><Icon size={18} /></a>
                    ))}
>>>>>>> Stashed changes
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
<<<<<<< Updated upstream
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">
            <p>© 2026 Sparkling Era Global Foundation. All Rights Reserved.</p>
            <p>Designed with Dharma</p>
=======
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/40 font-bold">
            <p>© {new Date().getFullYear()} Sparkle Era Global Foundation. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
                <Link href="/compliance" className="hover:text-[#F97316] transition-colors">Compliance & Legal</Link>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse shadow-[0_0_8px_#F97316]"></span>
                    <p>Designed with Dharma</p>
                </div>
            </div>
>>>>>>> Stashed changes
        </div>

      </div>
    </footer>
  );
}