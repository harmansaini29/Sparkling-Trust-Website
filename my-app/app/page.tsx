import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustTicker } from "./components/TrustTicker";
import { Philosophy } from "./components/Philosophy"; 
import { Legacy } from "./components/Legacy";
import { Initiatives } from "./components/Initiatives";
import { Leadership } from "./components/Leadership";
import { Contact } from "./components/Contact"; 
import { Footer } from "./components/Footer";   

export default function Home() {
  return (
    // REMOVED: overflow-x-hidden from main (Moved to layout.tsx to fix Sticky Scroll)
    <main className="min-h-screen bg-[#FDFCF9] text-earth selection:bg-gold/30 font-sans">
      
      {/* 1. Navigation */}
      <Navbar />
      
      {/* 2. Hero Section */}
      <Hero />
      
      {/* Wrapper for z-index context */}
      <div className="relative z-20 bg-[#FDFCF9]">
        
        {/* 3. Social Proof */}
        <TrustTicker />
        
        {/* 4. Philosophy (Sticky Scroll) */}
        <Philosophy />
        
        {/* 5. Leadership */}
        <Leadership />

        {/* 6. Legacy Section */}
        <Legacy />
        
        {/* 7. Initiatives */}
        <Initiatives />
        
        {/* 8. Contact */}
        <Contact />

        {/* 9. Footer */}
        <Footer />
        
      </div>
    </main>
  );
}