import { MoveRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl backdrop-blur-xl bg-white/80 border border-white/60 shadow-2xl shadow-black/5 rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 hover:bg-white/95">
        
        {/* Logo Block */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 bg-gold rotate-45 flex items-center justify-center shadow-lg shadow-gold/30 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500 font-bold text-lg font-serif">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight leading-none text-earth">Sparkling Era</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-black opacity-40 text-earth">Global Foundation</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex gap-10">
          {['Our Mission', 'Legacy', 'Initiatives', 'Contact'].map((item) => (
            <a key={item} href="#" className="relative group py-2 text-[11px] uppercase tracking-[0.2em] font-bold text-earth/60 hover:text-gold transition-colors">
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="group relative overflow-hidden bg-earth text-white px-8 py-3 rounded-xl flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold shadow-xl transition-all hover:shadow-2xl hover:shadow-gold/20 active:scale-95">
          <span className="relative z-10 flex items-center gap-2">
            Join Movement <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-gold to-[#D4A373] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </nav>
  );
}