import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustTicker } from "./components/TrustTicker";
import { Philosophy } from "./components/Philosophy"; // New Component
import { Legacy } from "./components/Legacy";
import { Initiatives } from "./components/Initiatives";
import { Leadership } from "./components/Leadership";
import { Contact } from "./components/Contact"; // New Component
import { Footer } from "./components/Footer";   // New Component

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-earth selection:bg-gold/30 font-sans overflow-x-hidden">
      
      {/* 1. Navigation - Sticky & Glassmorphic */}
      <Navbar />
      
      {/* 2. Hero Section - The Grand Entrance */}
      <Hero />
      
      {/* Wrapper ensures stacking context for z-index overlapping */}
      <div className="relative z-20 bg-[#FDFCF9]">
        
        {/* 3. Social Proof - Building Trust immediately */}
        <TrustTicker />
        
        {/* 4. Philosophy - The 'Why' (Sticky Scroll Effect) */}
        {/* This adds the "Heavy UI" feel you requested */}
        <Philosophy />
        
        {/* 5. Leadership - The Human Connection */}
        <Leadership />

        {/* 6. Legacy Section - Dark Mode Contrast */}
        <Legacy />
        
        {/* 7. Initiatives - Data & Impact Visualization */}
        <Initiatives />
        
        {/* 8. Contact - Premium Concierge Form */}
        <Contact />

        {/* 9. Mega Footer - Professional Site Map */}
        <Footer />
        
      </div>
    </main>
  );
}