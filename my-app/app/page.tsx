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
      
      <section className="py-24 lg:py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-[550px]">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
         
         {/* LEFT IDOL (Premium Golden Niche Frame) */}
         <div className="hidden lg:block absolute left-4 xl:left-24 top-1/2 -translate-y-1/2 w-[160px] xl:w-[190px] h-[300px] xl:h-[350px] z-0 group">
           {/* Outer Golden Halo Border */}
           <div className="absolute inset-0 rounded-t-full rounded-b-[2rem] p-[3px] bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/10 to-transparent shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)]">
             {/* Inner Image Mask */}
             <div className="relative w-full h-full rounded-t-full rounded-b-[1.8rem] overflow-hidden bg-[#FDFCF9] border border-white/50">
               <Image 
                 src="/idol-left.jpg" 
                 alt="Bharat Mata Idol Left" 
                 fill 
                 sizes="(max-width: 1280px) 160px, 190px" 
                 className="object-cover object-center transform group-hover:scale-110 transition-transform duration-1000" 
               />
               {/* Deep Premium Gradient Blend */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-black/5 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-70" />
             </div>
           </div>
         </div>

         {/* RIGHT IDOL (Premium Golden Niche Frame) */}
         <div className="hidden lg:block absolute right-4 xl:right-24 top-1/2 -translate-y-1/2 w-[160px] xl:w-[190px] h-[300px] xl:h-[350px] z-0 group">
           {/* Outer Golden Halo Border */}
           <div className="absolute inset-0 rounded-t-full rounded-b-[2rem] p-[3px] bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/10 to-transparent shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)]">
             {/* Inner Image Mask */}
             <div className="relative w-full h-full rounded-t-full rounded-b-[1.8rem] overflow-hidden bg-[#FDFCF9] border border-white/50">
               <Image 
                 src="/idol-right.jpg" 
                 alt="Bharat Mata Idol Right" 
                 fill 
                 sizes="(max-width: 1280px) 160px, 190px" 
                 className="object-cover object-center transform group-hover:scale-110 transition-transform duration-1000" 
               />
               {/* Deep Premium Gradient Blend */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/80 via-black/5 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-70" />
             </div>
           </div>
         </div>

         {/* CENTER MISSION BOX */}
         <div className="max-w-3xl mx-auto text-center relative z-10 bg-white/90 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white shadow-[0_30px_60px_rgba(10,25,47,0.06)]">
           <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-[#D4AF37]/20 shadow-sm">
             <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
             Our Mission
             <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
           </span>
           
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0A192F] mb-6 leading-tight font-bold drop-shadow-sm">
             Real change begins with knowledge, responsibility, and collective action.
           </h2>
           
           <p className="text-[#0A192F]/70 text-base md:text-lg font-serif italic max-w-xl mx-auto leading-relaxed">
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