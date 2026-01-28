import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const links = {
    Company: ["About Us", "Leadership", "Careers", "Press Media"],
    Initiatives: ["Financial Literacy", "Satvik Wealth", "Rural Growth", "Zero Debt"],
    Legal: ["Privacy Policy", "Terms of Service", "Trust Deed", "Compliance"],
};

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

            {/* Links Block */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                {Object.entries(links).map(([category, items]) => (
                    <div key={category}>
                        <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">{category}</h4>
                        <ul className="space-y-4">
                            {items.map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
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