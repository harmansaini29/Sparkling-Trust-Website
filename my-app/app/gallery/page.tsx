"use client";
import { useState, useMemo } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Maximize2, Camera, Layers } from "lucide-react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "../data/gallery"; // Import separated data

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  // --- AUTO-GENERATE CATEGORIES ---
  // This extracts unique categories from your data automatically.
  // You never have to manually update a "Categories" list again.
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(GALLERY_ITEMS.map(item => item.category)));
    return ["All", ...uniqueCats];
  }, []);

  // --- FILTER LOGIC ---
  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FDFCF9] text-earth font-sans selection:bg-gold/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-earth/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-white/50 backdrop-blur-sm"
          >
            <Camera size={16} className="text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Visual Archive</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif leading-[0.9]"
          >
            The <span className="text-gold italic">Chronicle</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-earth/60 font-serif italic max-w-2xl mx-auto"
          >
            "Witnessing the transformation. A curated collection of moments, milestones, and memories."
          </motion.p>
        </div>
      </section>

      {/* --- SMART FILTER BAR --- */}
      <section className="sticky top-28 z-40 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-2xl p-2 flex flex-wrap justify-center gap-2 shadow-xl shadow-black/5">
            {categories.map((cat) => (
              <button
                key={cat}
                suppressHydrationWarning
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-earth text-white shadow-lg scale-105" 
                    : "text-earth/50 hover:bg-earth/5 hover:text-earth"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- MASONRY GRID --- */}
      <section className="px-6 pb-32 max-w-[1600px] mx-auto min-h-screen">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedItem(item)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

// --- SUB-COMPONENTS ---

const GalleryCard = ({ item, onClick }: { item: GalleryItem; onClick: () => void }) => {
  const spanClass = {
    small: "md:col-span-1 md:row-span-1",
    medium: "md:col-span-2 md:row-span-1",
    large: "md:col-span-2 md:row-span-2",
    tall: "md:col-span-1 md:row-span-2"
  }[item.size];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`relative group cursor-pointer rounded-3xl overflow-hidden bg-earth/5 border border-black/5 ${spanClass}`}
    >
      <Image
        src={item.type === "video" ? (item.thumbnail || "") : item.src}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-gold text-[10px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur px-2 py-1 rounded-md">
              {item.category}
            </span>
            <h3 className="text-white text-xl font-serif mt-2">{item.title}</h3>
            <p className="text-white/60 text-xs mt-1">{item.date}</p>
          </div>
          <button suppressHydrationWarning className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-gold hover:text-earth transition-colors">
            {item.type === "video" ? <Play size={18} fill="currentColor" /> : <Maximize2 size={18} />}
          </button>
        </div>
      </div>

      {item.type === "video" && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-black/30 backdrop-blur rounded-full flex items-center justify-center text-white/80 group-hover:opacity-0 transition-opacity">
          <Play size={12} fill="currentColor" />
        </div>
      )}
    </motion.div>
  );
};

const Lightbox = ({ item, onClose }: { item: GalleryItem; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-earth/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <button suppressHydrationWarning onClick={onClose} className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-earth transition-colors z-50">
        <X size={24} />
      </button>

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-6xl max-h-[85vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 relative bg-black flex items-center justify-center h-[50vh] md:h-auto">
          {item.type === "video" ? (
            <video src={item.src} controls autoPlay className="w-full h-full max-h-[85vh] object-contain" />
          ) : (
            <div className="relative w-full h-full">
              <Image src={item.src} alt={item.title} fill className="object-contain" />
            </div>
          )}
        </div>

        <div className="w-full md:w-80 bg-[#1A1A1A] p-8 border-l border-white/5 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">{item.category}</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="text-3xl font-serif text-white mb-2">{item.title}</h2>
            <p className="text-white/40 text-sm mb-6 flex items-center gap-2"><Layers size={14} /> {item.date}</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Experience the visual journey of our {item.category.toLowerCase()} initiatives. Each frame captures a moment of dedication towards ethical prosperity.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <button suppressHydrationWarning className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-earth hover:border-gold transition-all">
              Share Moment
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};