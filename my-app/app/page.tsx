import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustTicker } from "./components/TrustTicker";
import { ImpactCounters } from "./components/ImpactCounters";
import PillarsOfImpact from "./components/Project";
import { PhotoSlider } from "./components/PhotoSlider";
import { Philosophy } from "./components/Philosophy";
import Reviews from "./components/Reviews";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] font-sans selection:bg-[#F97316]/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustTicker />
      
      {/* Short About Snapshot */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F97316]/5 blur-[100px] rounded-full pointer-events-none" />
         
         <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/50 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
           <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#064E3B]/5 text-[#F97316] text-xs font-bold uppercase tracking-[0.3em] mb-6 border border-[#064E3B]/5">
             Our Mission
           </span>
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#064E3B] mb-8 leading-tight">
             Real change begins with knowledge, responsibility, and collective action.
           </h2>
           <p className="text-[#064E3B]/70 text-lg md:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
             Since 2021, Sparkle Era Global Foundation has been working at the grassroots level to create awareness, empowerment, and sustainable impact across Maharashtra.
           </p>
         </div>
      </section>

      <ImpactCounters />
      <PillarsOfImpact />
      <PhotoSlider />
      <Philosophy />
      <Reviews />
      
      <Footer />
      <FloatingActions />
    </main>
  );
}