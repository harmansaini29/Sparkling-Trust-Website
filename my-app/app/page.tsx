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
      
      {/* OUR MISSION SECTION - Upgraded 10/10 Professional Design */}
      <section className="py-32 lg:py-48 px-6 relative overflow-hidden flex items-center justify-center min-h-[700px]">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
         
         {/* LEFT IDOL (Slightly Larger, Realistic, Perfectly Visible) */}
         <div className="hidden lg:flex absolute left-8 xl:left-24 top-1/2 -translate-y-1/2 w-[180px] xl:w-[240px] h-[320px] xl:h-[400px] z-0 group flex-col items-center justify-center">
           {/* Soft Golden Aura */}
           <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full transition-opacity duration-700 group-hover:opacity-40" />
           
           <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-2">
             <Image 
               src="/idol-left.jpg" 
               alt="Bharat Mata Idol Left" 
               fill 
               sizes="(max-width: 1280px) 180px, 240px" 
               className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]" 
               priority
             />
           </div>
           {/* Elegant Minimalist Pedestal Glow */}
           <div className="absolute -bottom-2 w-[80%] h-4 bg-black/20 blur-md rounded-full" />
           <div className="absolute -bottom-1 w-[60%] h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 rounded-full" />
         </div>

         {/* RIGHT IDOL (Slightly Larger, Realistic, Perfectly Visible) */}
         <div className="hidden lg:flex absolute right-8 xl:right-24 top-1/2 -translate-y-1/2 w-[180px] xl:w-[240px] h-[320px] xl:h-[400px] z-0 group flex-col items-center justify-center">
           {/* Soft Golden Aura */}
           <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full transition-opacity duration-700 group-hover:opacity-40" />
           
           <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-2">
             <Image 
               src="/idol-right.jpg" 
               alt="Bharat Mata Idol Right" 
               fill 
               sizes="(max-width: 1280px) 180px, 240px" 
               className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]" 
               priority
             />
           </div>
           {/* Elegant Minimalist Pedestal Glow */}
           <div className="absolute -bottom-2 w-[80%] h-4 bg-black/20 blur-md rounded-full" />
           <div className="absolute -bottom-1 w-[60%] h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 rounded-full" />
         </div>

         {/* CENTER MISSION BOX */}
         <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/95 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/60 shadow-[0_20px_80px_rgba(10,25,47,0.08)]">
           <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-[#D4AF37]/20">
             <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
             Our Mission
             <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
           </span>
           
           <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-[#0A192F] mb-10 leading-[1.15] font-bold">
             Real change begins with knowledge, responsibility, and collective action.
           </h2>

           {/* HINDI TAGLINE - Added py-2 and leading-normal to prevent matras from clipping */}
           <div className="mb-10 py-6 border-y border-black/5">
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#D4AF37] to-[#F97316] py-2 leading-normal">
               अर्थसाक्षर भारत <span className="text-[#0A192F] opacity-15 font-light mx-2 md:mx-4 drop-shadow-none">•</span> आत्मनिर्भर भारत
             </h3>
           </div>
           
           <p className="text-[#0A192F]/80 text-lg md:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
             Since 2021, Sparkle Era Global Foundation has been working at the grassroots level to create awareness, empowerment, and sustainable impact across <strong className="text-[#D4AF37] font-bold text-2xl ml-1">Bharat</strong>.
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