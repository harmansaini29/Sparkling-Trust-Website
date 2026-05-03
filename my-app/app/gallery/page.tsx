"use client";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ZoomIn, X, Upload, Loader2, ImagePlus, PlusCircle, Lock } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "School Awareness Programs", "Police Department Sessions", "Women Empowerment Workshops", "Food Distribution Drives", "Tree Plantation Drives", "Volunteer Activities"];

export type MediaType = "image" | "video";

export interface GalleryItem {
  id: number;
  type: MediaType;
  category: string;
  title: string;
  date: string;
  src: string;      
  thumbnail?: string; 
  size: "small" | "medium" | "large" | "tall"; 
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState(CATEGORIES[1]);
  const [uploadSize, setUploadSize] = useState("medium");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Security States
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [verifiedPassword, setVerifiedPassword] = useState("");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await fetch('/api/gallery');
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      }
    } catch (error) {
      console.error("Failed to fetch gallery:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile || !verifiedPassword) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('title', uploadTitle || 'Untitled');
    formData.append('category', uploadCategory);
    formData.append('size', uploadSize);
    formData.append('password', verifiedPassword); // Securely pass password

    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        const result = await res.json();
        if (result.success) {
          setItems([result.item, ...items]);
          setIsUploadModalOpen(false);
          setUploadFile(null);
          setUploadTitle("");
          if (fileInputRef.current) fileInputRef.current.value = '';
        }
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading file.");
    } finally {
      setIsUploading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setPasswordError("");

    try {
      const res = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setVerifiedPassword(passwordInput);
        setIsPasswordModalOpen(false);
        setPasswordInput("");
        setIsUploadModalOpen(true);
      } else {
        setPasswordError(data.error || "Incorrect password");
      }
    } catch (error) {
      setPasswordError("Verification failed. Try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const openUploadFlow = () => {
    if (verifiedPassword) {
      setIsUploadModalOpen(true);
    } else {
      setIsPasswordModalOpen(true);
    }
  };

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FDFCF9] font-sans selection:bg-[#F97316]/30">
      <Navbar />

      {/* HEADER */}
      <section className="pt-40 pb-16 px-6 text-center bg-[#064E3B] text-white relative overflow-hidden">
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
          
          <button 
            onClick={openUploadFlow}
            className="mt-8 bg-[#F97316] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2 hover:bg-white hover:text-[#064E3B] transition-all duration-300 shadow-xl"
          >
            <Upload size={18} />
            Upload Media
          </button>
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
        {isLoading ? (
          <div className="w-full flex flex-col items-center justify-center py-20 text-[#064E3B]/40">
            <Loader2 className="w-12 h-12 animate-spin mb-4" />
            <p className="font-serif italic text-lg">Loading visual journey...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-20 text-[#064E3B]/40">
            <ImagePlus className="w-16 h-16 mb-4 opacity-50" />
            <h3 className="text-2xl font-serif mb-2 text-[#064E3B]">No Media Found</h3>
            <p className="font-medium">Upload photos and videos to see them here.</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => {
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
                    {item.type === 'video' && !item.thumbnail ? (
                       <video src={item.src} className="w-full h-full object-cover" />
                    ) : (
                      <Image 
                        src={displayImage} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    )}
                    
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
        )}
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-[#F97316] transition-colors p-2 bg-white/10 rounded-full z-50">
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }}
              className="relative w-full max-w-6xl max-h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* VIDEO PLAYER LOGIC */}
              {selectedItem.type === 'video' ? (
                <video 
                  src={selectedItem.src} 
                  controls 
                  autoPlay 
                  className="w-full max-h-[85vh] object-contain bg-black" 
                />
              ) : (
                <div className="relative w-full h-[60vh] md:h-[80vh]">
                  <Image src={selectedItem.src} alt={selectedItem.title} fill className="object-contain" />
                </div>
              )}
              
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 md:p-12 text-white pointer-events-none">
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

      {/* UPLOAD MODAL */}
      <AnimatePresence>
        {isUploadModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-xl rounded-[2rem] shadow-2xl overflow-hidden relative"
            >
              <div className="p-8 border-b border-black/5 flex justify-between items-center bg-[#FDFCF9]">
                <h3 className="text-2xl font-serif text-[#064E3B]">Upload Media</h3>
                <button onClick={() => setIsUploadModalOpen(false)} className="text-[#064E3B]/50 hover:text-[#F97316]">
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleUpload} className="p-8 space-y-6">
                
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-2">Media File</label>
                  <input 
                    type="file" 
                    accept="image/*,video/*"
                    required
                    ref={fileInputRef}
                    onChange={(e) => setUploadFile(e.target.files ? e.target.files[0] : null)}
                    className="w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:border-[#F97316] text-[#064E3B]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-2">Title</label>
                  <input 
                    type="text" 
                    placeholder="E.g., Rural School Donation Drive"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:border-[#F97316] text-[#064E3B]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-2">Category</label>
                  <select 
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:border-[#F97316] text-[#064E3B]"
                  >
                    {CATEGORIES.filter(c => c !== "All").map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-2">Display Size</label>
                  <select 
                    value={uploadSize}
                    onChange={(e) => setUploadSize(e.target.value)}
                    className="w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:border-[#F97316] text-[#064E3B]"
                  >
                    <option value="medium">Medium (Square)</option>
                    <option value="large">Large (Wide)</option>
                    <option value="tall">Tall (Vertical)</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <button 
                    type="submit" 
                    disabled={isUploading || !uploadFile}
                    className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#0a2e24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isUploading ? (
                      <><Loader2 className="animate-spin" size={20} /> Uploading...</>
                    ) : (
                      <><PlusCircle size={20} /> Add to Gallery</>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PASSWORD MODAL */}
      <AnimatePresence>
        {isPasswordModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden relative"
            >
              <div className="p-8 border-b border-black/5 flex justify-between items-center bg-[#FDFCF9]">
                <div className="flex items-center gap-3 text-[#064E3B]">
                  <Lock size={24} className="text-[#F97316]" />
                  <h3 className="text-2xl font-serif">Admin Access</h3>
                </div>
                <button onClick={() => setIsPasswordModalOpen(false)} className="text-[#064E3B]/50 hover:text-[#F97316]">
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handlePasswordSubmit} className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-2">Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter admin password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    required
                    autoFocus
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none text-[#064E3B] ${passwordError ? 'border-red-500 focus:border-red-500' : 'border-black/10 focus:border-[#F97316]'}`}
                  />
                  {passwordError && <p className="text-red-500 text-xs font-bold mt-2">{passwordError}</p>}
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isVerifying || !passwordInput}
                    className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#0a2e24] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isVerifying ? (
                      <><Loader2 className="animate-spin" size={20} /> Verifying...</>
                    ) : (
                      "Authenticate"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}