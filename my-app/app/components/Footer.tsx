"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// Import Router to redirect programmatically
import { useRouter } from "next/navigation"; 

export function Footer() {
  const [email, setEmail] = useState("");
  const router = useRouter(); // Initialize router

  const handleJoin = () => {
    // Redirect to contact page
    // Optionally you could pass the email as a query param if you wanted to pre-fill it
    router.push('/contact');
  };

  return (
    <footer className="bg-[#050505] text-white pt-32 pb-12 border-t border-white/5 font-sans relative overflow-hidden">
      
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5 space-y-8">
                <div className="relative w-80 h-24 flex items-center justify-start shrink-0">
                  <Image 
                    src="/logo.png" 
                    alt="Sparkling Era Global Foundation"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="text-white/40 leading-relaxed max-w-sm text-sm pl-1">
                    Reimagining wealth through the lens of Dharma. We are a registered non-profit organization dedicated to economic sovereignty and ethical prosperity.
                </p>
                <div className="flex gap-4 pl-1">
                    {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-earth transition-all duration-300 border border-white/5">
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="col-span-2 grid grid-cols-2 gap-8">
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
                </div>

                <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Stay Updated</h4>
                    <p className="text-white/40 text-sm mb-6">Get insights on ethical wealth creation.</p>
                    <div className="flex gap-2">
                        <input 
                            suppressHydrationWarning
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 w-full focus:bg-white/10 transition-all"
                        />
                        <button 
                            suppressHydrationWarning
                            onClick={handleJoin}
                            className="bg-gold text-earth px-6 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors"
                        >
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20 font-bold">
            <p>© 2026 Sparkling Era Global Foundation. All Rights Reserved.</p>
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <p>Designed with Dharma</p>
            </div>
        </div>
      </div>
    </footer>
  );
}