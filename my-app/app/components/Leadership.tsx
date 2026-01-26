import { ArrowRight, ShieldCheck, Landmark } from "lucide-react";

export function Leadership() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Visual Side */}
        <div className="relative group">
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Rahul Mane"
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-4xl font-serif">Rahul Mane</h2>
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mt-2">Founder & Chairperson</p>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-black/5 animate-bounce-slow">
            <div className="text-center">
              <span className="block text-5xl font-serif font-bold text-gold">12+</span>
              <span className="text-[9px] uppercase font-black tracking-widest text-earth/30">Years Exp.</span>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-black">Visionary Leadership</span>
            <h2 className="text-6xl font-serif leading-tight text-earth">
              Guided by <span className="italic text-gold">Wisdom</span> <br />
              & Social Duty
            </h2>
          </div>

          <p className="text-xl text-earth/60 font-light leading-relaxed">
            Blending over a decade of market expertise with a profound commitment to social welfare, Rahul leads the foundation's mission.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Registered Member", val: "SEBI", icon: ShieldCheck },
              { label: "Exchange Member", val: "NSE & BSE", icon: Landmark }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-gold/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gold">
                  <stat.icon size={18} />
                </div>
                <div>
                  <div className="text-[9px] uppercase font-bold text-earth/30">{stat.label}</div>
                  <div className="font-bold text-earth">{stat.val}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-earth hover:text-gold transition-colors group">
            Read Full Biography <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}