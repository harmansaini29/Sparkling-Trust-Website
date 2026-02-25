"use client";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { GALLERY_ITEMS, GalleryItem } from "../data/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ZoomIn, X } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "School Awareness Programs", "Police Department Sessions", "Women Empowerment Workshops", "Food Distribution Drives", "Tree Plantation Drives", "Volunteer Activities"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FDFCF9] font-sans selection:bg-[#F97316]/30">
      <Navbar />

      {/* HEADER */}
      <section className="pt-40 pb-16 px-6 text-center bg-[#064E3B] text-white relative overflow-hidden">
        {/* Restored the grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Visual Journey</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Moments of <span className="italic text-[#F97316]">Impact</span></h1>
          <p className="text-white/60 text-lg font-serif italic max-w-2xl mx-auto">
            "Every photograph tells a story of change, resilience, and the undying spirit of service."
          </p>
        </motion.div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-20 z-30 bg-[#FDFCF9]/90 backdrop-blur-md border-b border-black/5 py-4 px-6 overflow-x-auto no-scrollbar">
        <div className="flex justify-start md:justify-center gap-3 min-w-max">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat 
                  ? "bg-[#064E3B] text-white border-[#064E3B] shadow-lg scale-105" 
                  : "bg-white text-[#064E3B]/60 border-black/5 hover:border-[#F97316]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-20 px-6 max-w-[1600px] mx-auto min-h-[60vh]">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => {
              // FIX: Determine correct source for the grid.
              // If it's a video, show the thumbnail (image). If it's an image, show the src.
              // Fallback to src if thumbnail is missing (though data should provide it).
              const displayImage = item.type === "video" && item.thumbnail ? item.thumbnail : item.src;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-black/5 ${item.size === 'tall' ? 'row-span-2 aspect-[3/5]' : item.size === 'large' ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <Image 
                    src={displayImage} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    // Add unoptimized if you ever use local images that fail optimization, 
                    // but for Unsplash urls this is fine.
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-[#F97316] text-[10px] font-bold uppercase tracking-widest mb-2">{item.category}</span>
                    <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                      {item.type === 'video' ? <Play size={20} fill="currentColor" /> : <ZoomIn size={20} />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-[#F97316] transition-colors p-2 bg-white/10 rounded-full">
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }}
              className="relative w-full max-w-6xl max-h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* VIDEO PLAYER LOGIC */}
              {selectedItem.type === 'video' ? (
                <video 
                  src={selectedItem.src} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain bg-black" 
                />
              ) : (
                <div className="relative w-full h-[60vh] md:h-[80vh]">
                  <Image src={selectedItem.src} alt={selectedItem.title} fill className="object-contain" />
                </div>
              )}
              
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-serif mb-2">{selectedItem.title}</h2>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#F97316]">
                  <span>{selectedItem.date}</span>
                  <span className="w-1 h-1 bg-white/50 rounded-full" />
                  <span>{selectedItem.category}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}