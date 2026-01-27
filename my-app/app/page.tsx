import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustTicker } from "./components/TrustTicker";
import { Legacy } from "./components/Legacy";
import { Initiatives } from "./components/Initiatives";
import { Leadership } from "./components/Leadership";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-earth selection:bg-gold/30 font-sans overflow-x-hidden">
      
      {/* 1. Navigation */}
      <Navbar />
      
      {/* 2. Hero Section - The foundational entrance */}
      <Hero />
      
      {/* Wrapper for subsequent sections to ensure proper z-index and background consistency */}
      <div className="relative z-20 bg-[#FDFCF9]">
        
        {/* 3. Social Proof Ticker */}
        <TrustTicker />
        
        {/* 4. Leadership - High Priority Visual Storytelling */}
        <Leadership />

        {/* 5. Legacy Section - Dark Theme High Contrast */}
        <Legacy />
        
        {/* 6. Initiatives - Impact Visualization */}
        <Initiatives />
        
        {/* 7. Footer - Final Brand Touchpoint */}
        <footer className="py-24 bg-earth text-center border-t border-white/10">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-80">
            <div className="w-8 h-8 bg-gold rotate-45 transition-transform hover:rotate-90 duration-700" />
          </div>
          <div className="text-gold text-3xl font-serif mb-6">Sparkling Era Global Foundation</div>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">
            © 2026 Building Wealth with Dharma
          </p>
        </footer>
      </div>
    </main>
  );
}