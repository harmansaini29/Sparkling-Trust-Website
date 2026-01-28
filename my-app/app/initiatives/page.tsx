"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Sprout, Landmark } from "lucide-react";

export default function InitiativesPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] text-earth font-sans">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-black">Our Blueprint</span>
            <h1 className="text-5xl lg:text-7xl font-serif mt-4">
              Measurable <span className="italic text-gold">Impact</span>
            </h1>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            
            {/* CARD 1: Large Stat */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="md:col-span-2 md:row-span-2 bg-earth text-white rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden relative group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] group-hover:bg-gold/20 transition-all" />
                <Landmark className="w-12 h-12 text-gold mb-6" />
                <div>
                    <h3 className="text-4xl font-serif mb-4">Satvik Wealth Fund</h3>
                    <p className="text-white/50 leading-relaxed max-w-sm">
                        A proprietary investment vehicle that strictly filters out alcohol, tobacco, gambling, and debt-heavy conglomerates.
                    </p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-end">
                    <div>
                        <div className="text-5xl font-serif text-gold">18%</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-50">CAGR Growth</div>
                    </div>
                    <div className="text-right">
                        <div className="text-5xl font-serif text-gold">0%</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-50">Debt Exposure</div>
                    </div>
                </div>
            </motion.div>

            {/* CARD 2: Community */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-1 bg-white p-8 rounded-[2.5rem] border border-black/5 hover:border-gold/30 transition-colors"
            >
                <Users className="w-10 h-10 text-earth/20 mb-4" />
                <h4 className="text-4xl font-serif font-bold">50k+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-earth/40 mt-2">Students Educated</p>
            </motion.div>

            {/* CARD 3: Growth */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-1 bg-gold text-earth p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center"
            >
                <TrendingUp className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-serif font-bold">Economic <br/> Sovereignty</h4>
            </motion.div>

            {/* CARD 4: Wide Bottom */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 bg-white p-10 rounded-[3rem] border border-black/5 flex items-center justify-between group hover:shadow-xl transition-all"
            >
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Sprout className="text-gold" size={24} />
                        <h3 className="font-serif text-2xl">Rural Micro-Credit</h3>
                    </div>
                    <p className="text-earth/50 text-sm max-w-xs">Providing interest-free capital to women entrepreneurs in Maharashtra.</p>
                </div>
                <button className="w-12 h-12 rounded-full border border-earth/10 flex items-center justify-center group-hover:bg-earth group-hover:text-gold transition-colors">
                    <TrendingUp size={18} />
                </button>
            </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}