"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PROGRAMS = [
  {
    id: "satark", category: "Awareness", title: "Satark", tagline: "Financial Awareness & Vigilance",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200", metrics: { impact: "50,000+", events: "100+" }
  },
  {
    id: "saksham", category: "Empowerment", title: "Saksham", tagline: "Women Empowerment",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1200", metrics: { impact: "10,000+", events: "250+" }
  },
  {
    id: "sanskar", category: "Education", title: "Sanskar", tagline: "Values & Heritage",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200", metrics: { impact: "5,000+", events: "80+" }
  },
  {
    id: "sathi", category: "Welfare", title: "Sathi", tagline: "Community Support System",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200", metrics: { impact: "Daily", events: "24/7" }
  },
  {
    id: "sevalay", category: "Service", title: "Sevalay", tagline: "Shelter & Care",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200", metrics: { impact: "100+", events: "Daily" }
  },
  {
    id: "shrushti", category: "Environment", title: "Shrushti Savardhan", tagline: "Environmental Stewardship",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200", metrics: { impact: "10,000+", events: "50+" }
  }
];

const CATEGORIES = ["All", "Awareness", "Empowerment", "Education", "Welfare", "Service", "Environment"];

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = PROGRAMS.filter(program => {
    const matchesCategory = selectedCategory === "All" || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#FDFCF9] text-earth font-sans overflow-x-hidden">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6 relative z-10">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/20 bg-white shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Sparkles size={16} className="text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Our Blueprint</span>
          </motion.div>
          <motion.h1 className="text-6xl lg:text-8xl font-serif leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Our <span className="text-gold italic">Initiatives</span>
          </motion.h1>
          <motion.p className="text-xl lg:text-2xl text-earth/60 font-serif italic leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            "Six pillars of change designed to restore economic and social dignity."
          </motion.p>
        </div>

        <motion.div className="max-w-7xl mx-auto mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <div className="bg-white rounded-3xl shadow-lg border border-black/5 p-6 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-earth/40" size={20} />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-earth/5 rounded-2xl border-2 border-transparent focus:border-gold/30 focus:bg-white transition-all outline-none text-earth placeholder:text-earth/40"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category ? 'bg-gold text-earth shadow-lg scale-105' : 'bg-earth/5 text-earth/60 hover:bg-earth/10'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 relative overflow-hidden bg-earth/5">
                <Image src={program.image} alt={program.title} fill className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/50 shadow-lg">
                  {program.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-serif mb-2 group-hover:text-gold transition-colors">{program.title}</h3>
                <p className="text-earth/60 italic text-sm mb-6">{program.tagline}</p>

                <div className="grid grid-cols-3 gap-2 py-6 border-t border-black/5">
                  <div>
                    {/* UPDATED TO SANS BOLD METRIC FONT */}
                    <div className="font-sans font-black tracking-tighter text-2xl text-gold">{program.metrics.impact}</div>
                    <div className="text-[10px] uppercase text-earth/40">Impact</div>
                  </div>
                  <div>
                    {/* UPDATED TO SANS BOLD METRIC FONT */}
                    <div className="font-sans font-black tracking-tighter text-2xl text-gold">{program.metrics.events}</div>
                    <div className="text-[10px] uppercase text-earth/40">Events</div>
                  </div>

                  <Link href={`/programs/${program.id}`} className="flex justify-end items-center group/btn">
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-gold">View <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 transition-transform" /></div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}