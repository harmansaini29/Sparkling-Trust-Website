import Image from "next/image";
import dynamic from "next/dynamic";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const TrustTicker = dynamic(() => import("./components/TrustTicker").then(mod => mod.TrustTicker));
const ImpactCounters = dynamic(() => import("./components/ImpactCounters").then(mod => mod.ImpactCounters));
const PillarsOfImpact = dynamic(() => import("./components/Project"));
const PhotoSlider = dynamic(() => import("./components/PhotoSlider").then(mod => mod.PhotoSlider));
const Philosophy = dynamic(() => import("./components/Philosophy").then(mod => mod.Philosophy));
const Reviews = dynamic(() => import("./components/Reviews"));
const Footer = dynamic(() => import("./components/Footer").then(mod => mod.Footer));
const FloatingActions = dynamic(() => import("./components/FloatingActions").then(mod => mod.FloatingActions));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] font-sans selection:bg-[#D4AF37]/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustTicker />
      
      <section className="py-20 sm:py-24 md:py-32 xl:py-48 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center min-h-[500px] sm:min-h-[600px] xl:min-h-[700px]">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />
         
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] xl:w-[800px] h-[250px] sm:h-[300px] xl:h-[400px] bg-[#D4AF37]/10 blur-[60px] xl:blur-[120px] rounded-full pointer-events-none transform-gpu" />
         
         {/* Left Idol - FIX: Made visible on all screens. Reduced opacity and size on mobile to act as a gorgeous faded watermark behind the text. */}
         <div className="flex absolute -left-6 sm:-left-2 md:left-4 lg:left-8 2xl:left-24 top-1/2 -translate-y-1/2 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] 2xl:w-[240px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] 2xl:h-[400px] z-0 group flex-col items-center justify-center opacity-30 sm:opacity-50 lg:opacity-100">
           <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full transition-opacity duration-700 group-hover:opacity-40 transform-gpu" />
           <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-2 will-change-transform">
             <Image src="/idol-left.jpg" alt="Bharat Mata Idol Left" fill sizes="(max-width: 1536px) 180px, 240px" className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]" priority />
           </div>
           <div className="absolute -bottom-2 w-[80%] h-4 bg-black/20 blur-md rounded-full transform-gpu" />
           <div className="absolute -bottom-1 w-[60%] h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 rounded-full" />
         </div>

         {/* Right Idol - FIX: Made visible on all screens. Reduced opacity and size on mobile. */}
         <div className="flex absolute -right-6 sm:-right-2 md:right-4 lg:right-8 2xl:right-24 top-1/2 -translate-y-1/2 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] 2xl:w-[240px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] 2xl:h-[400px] z-0 group flex-col items-center justify-center opacity-30 sm:opacity-50 lg:opacity-100">
           <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full transition-opacity duration-700 group-hover:opacity-40 transform-gpu" />
           <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-2 will-change-transform">
             <Image src="/idol-right.jpg" alt="Bharat Mata Idol Right" fill sizes="(max-width: 1536px) 180px, 240px" className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]" priority />
           </div>
           <div className="absolute -bottom-2 w-[80%] h-4 bg-black/20 blur-md rounded-full transform-gpu" />
           <div className="absolute -bottom-1 w-[60%] h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 rounded-full" />
         </div>

         <div className="max-w-3xl w-[92%] sm:w-full mx-auto text-center relative z-10 bg-white/95 backdrop-blur-2xl p-6 sm:p-10 md:p-16 rounded-[1.5rem] sm:rounded-[3rem] border border-white/60 shadow-[0_15px_50px_rgba(10,25,47,0.06)] md:shadow-[0_20px_80px_rgba(10,25,47,0.08)] transform-gpu">
           <span className="inline-flex items-center gap-1.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#F97316] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-8 shadow-[0_10px_20px_rgba(249,115,22,0.2)]">
             <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white/80" /> Our Mission <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white/80" />
           </span>
           
           <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#0A192F] mb-5 sm:mb-10 leading-[1.3] sm:leading-[1.15] font-bold">
             Real change begins with knowledge, responsibility, and collective action.
           </h2>
           
           <div className="mb-5 sm:mb-10 py-3 sm:py-6 border-y border-black/5">
             <h3 className="text-xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#D4AF37] to-[#F97316] py-1.5 sm:py-2 leading-normal flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
               अर्थसाक्षर भारत 
               <span className="hidden sm:inline text-[#F97316] mx-2 md:mx-4 drop-shadow-none">•</span>
               <span className="sm:hidden text-[#F97316] drop-shadow-none">-</span>
               आत्मनिर्भर भारत
             </h3>
           </div>
           
           <p className="text-[#0A192F]/80 text-sm sm:text-lg md:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
             Since 2021, Sparkle Era Global Foundation has been working at the grassroots level to create awareness, empowerment, and sustainable impact across <strong className="text-[#D4AF37] font-bold text-lg sm:text-xl md:text-2xl ml-1">Bharat</strong>.
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