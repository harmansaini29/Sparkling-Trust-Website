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
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">
            <p>© 2026 Sparkling Era Global Foundation. All Rights Reserved.</p>
            <p>Designed with Dharma</p>
        </div>

      </div>
    </footer>
  );
}