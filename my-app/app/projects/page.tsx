"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import Image from "next/image";

// Placeholder data for 6 projects
const PROJECTS = [
  { id: 1, category: "Fintech", title: "Dharma Trade App", status: "Live", image: "/india-pattern.png" }, // Using placeholder images
  { id: 2, category: "Education", title: "Gurukul Finance", status: "Scaling", image: "/india-pattern.png" },
  { id: 3, category: "Agriculture", title: "Kisan Credit Net", status: "Pilot", image: "/india-pattern.png" },
  { id: 4, category: "Algorithm", title: "Satvik Index Fund", status: "Beta", image: "/india-pattern.png" },
  { id: 5, category: "Real Estate", title: "Vedic Townships", status: "Planning", image: "/india-pattern.png" },
  { id: 6, category: "Research", title: "Global Wealth Report", status: "Published", image: "/india-pattern.png" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-earth font-sans">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-earth/10 bg-white shadow-sm">
              <FolderOpen size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Portfolio Overview</span>
           </div>
           <h1 className="text-5xl lg:text-7xl font-serif">
             Our <span className="text-gold italic">Ventures</span>
           </h1>
           <p className="text-xl text-earth/50 font-serif italic">
             "From algorithms to agriculture, every project serves the singular goal of ethical prosperity."
           </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-black/5 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="h-64 relative overflow-hidden bg-earth/5">
                {/* Replace with real project images later */}
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/50">
                   {project.status}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative">
                 <div className="mb-4">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-serif mt-2 group-hover:text-gold transition-colors">{project.title}</h3>
                 </div>
                 
                 <div className="flex justify-between items-center pt-6 border-t border-black/5">
                    <span className="text-xs font-bold text-earth/30">View Case Study</span>
                    <button className="w-10 h-10 rounded-full bg-earth text-white flex items-center justify-center group-hover:bg-gold transition-colors group-hover:-rotate-45 duration-300">
                       <ArrowUpRight size={18} />
                    </button>
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