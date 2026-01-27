import { ArrowRight, ShieldCheck, Landmark } from "lucide-react";
import Image from "next/image";

export function Leadership() {
  return (
    <section className="py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        
        {/* Visual Side */}
        <div className="relative group">
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] bg-zinc-100">
            
            {/* CLIENT PHOTO */}
            <div className="relative w-full h-full">
                <Image 
                  src="/founder.jpg" 
                  alt="Rahul Mane - Founder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw" // <--- FIXES THE WARNING
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-12 left-10 text-white">
              <h2 className="text-5xl font-serif leading-none mb-2">Rahul Mane</h2>
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">Founder & Chairperson</p>
            </div>
          </div>

          {/* Floating Stat Badge */}
          <div className="absolute -top-12 -right-8 bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white flex flex-col items-center animate-bounce-slow">
            <span className="block text-6xl font-serif font-bold text-gold">12<span className="text-3xl">+</span></span>
            <span className="text-[10px] uppercase font-black tracking-widest text-earth/30 mt-2">Years Exp.</span>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="inline-block py-1 px-3 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-[0.3em] font-black">Visionary Leadership</span>
            <h2 className="text-6xl lg:text-7xl font-serif leading-[1] text-earth">
              Guided by <span className="italic text-gold">Wisdom</span> <br />
              & Social Duty
            </h2>
          </div>

          <div className="pl-8 border-l-2 border-gold/20">
            <p className="text-xl text-earth/60 font-light leading-relaxed">
              "True wealth is not just accumulation, but distribution." Blending over a decade of market expertise with a profound commitment to social welfare, Rahul leads the foundation's mission.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Registered Member", val: "SEBI", icon: ShieldCheck },
              { label: "Exchange Member", val: "NSE & BSE", icon: Landmark }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-gold/30 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-white shadow-sm rounded-full flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <stat.icon size={20} />
                </div>
                <div>
                  <div className="text-[9px] uppercase font-bold text-earth/30 tracking-wider">{stat.label}</div>
                  <div className="font-bold text-lg text-earth">{stat.val}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-earth border-b border-gold/0 hover:border-gold transition-all py-2 group">
            Read Full Biography <ArrowRight size={16} className="text-gold group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}