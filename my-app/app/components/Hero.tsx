import { Play, Globe, Trophy } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function Hero() {
  return (
    <header className="relative w-full pt-48 pb-32 overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 mask-image-[radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gold/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gold">Heritage Meets Finance</span>
          </div>

          <h1 className="text-6xl lg:text-[7rem] font-serif leading-[0.95] text-earth tracking-tight">
            Empowering <br />
            <span className="relative inline-block">
              Bharat
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-gold opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
            <br />
            <span className="italic text-gold font-light">Reclaiming Roots</span>
          </h1>

          <p className="text-xl text-earth/60 font-serif italic max-w-lg leading-relaxed border-l-2 border-gold/30 pl-6">
            "Restoring the historical economic sovereignty of the Indian spirit through Dharmic principles."
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <button className="bg-earth text-white px-10 py-5 rounded-xl font-bold text-xs tracking-[0.2em] uppercase shadow-lg shadow-black/10 hover:-translate-y-1 transition-transform">
              Explore Mission
            </button>
            <button className="flex items-center gap-4 px-6 py-5 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm hover:bg-white transition-colors group">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="font-bold text-xs tracking-[0.2em] uppercase text-earth">Watch Vision</span>
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-5 relative space-y-6 lg:translate-y-12">
           <GlassCard hoverEffect={true} className="p-8">
             <div className="flex items-start gap-6">
               <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0">
                 <Globe size={28} strokeWidth={1.5} />
               </div>
               <div>
                 <h3 className="font-serif font-bold text-2xl text-earth mb-2">Economic Swaraj</h3>
                 <p className="text-sm text-earth/50 leading-relaxed">Rebuilding self-reliance through decentralized financial wisdom.</p>
               </div>
             </div>
           </GlassCard>

           <GlassCard hoverEffect={true} className="p-8 lg:translate-x-8">
             <div className="flex items-start gap-6">
               <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0">
                 <Trophy size={28} strokeWidth={1.5} />
               </div>
               <div>
                 <h3 className="font-serif font-bold text-2xl text-earth mb-2">Spiritual Heritage</h3>
                 <p className="text-sm text-earth/50 leading-relaxed">Grounding modern wealth creation in 5,000 years of Dharma.</p>
               </div>
             </div>
           </GlassCard>
        </div>

      </div>
    </header>
  );
}