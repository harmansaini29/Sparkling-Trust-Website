import Image from "next/image";
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
    <main className="min-h-screen bg-[#FDFCF9] font-sans selection:bg-[#D4AF37]/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustTicker />
      
      <section className="py-24 lg:py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-[600px]">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
         
         <div className="hidden lg:block absolute left-0 xl:left-10 top-1/2 -translate-y-1/2 w-[250px] xl:w-[350px] h-[90%] opacity-90 pointer-events-none z-0">
           <Image src="/hero-bg.png" alt="Decoration Left" fill sizes="350px" className="object-contain object-left drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF9] via-transparent to-transparent" />
         </div>

         <div className="hidden lg:block absolute right-0 xl:right-10 top-1/2 -translate-y-1/2 w-[250px] xl:w-[350px] h-[90%] opacity-90 pointer-events-none z-0 transform -scale-x-100">
           <Image src="/hero-bg.png" alt="Decoration Right" fill sizes="350px" className="object-contain object-left drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF9] via-transparent to-transparent" />
         </div>

         <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/70 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/60 shadow-[0_30px_80px_rgba(10,25,47,0.07)]">
           <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#0A192F]/5 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-[#0A192F]/10 shadow-sm">
             <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
             Our Mission
             <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
           </span>
           
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] mb-8 leading-tight font-bold drop-shadow-sm">
             Real change begins with knowledge, responsibility, and collective action.
           </h2>
           
           <p className="text-[#0A192F]/70 text-lg md:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
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