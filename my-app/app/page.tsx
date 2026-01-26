import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Leadership } from "./components/Leadership";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-earth selection:bg-gold/30 font-sans overflow-x-hidden">
      {/* Global Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:64px_64px] -z-50" />
      
      <Navbar />
      <Hero />
      <Leadership />
      
      <footer className="py-12 text-center text-earth/20 text-xs uppercase tracking-widest font-bold">
        © 2026 Sparkling Global Foundation
      </footer>
    </main>
  );
}