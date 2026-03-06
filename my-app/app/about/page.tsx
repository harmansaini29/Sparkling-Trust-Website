"use client";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Leadership } from "../components/Leadership";
import OurTeam from "../components/OurTeam"; 
import { Eye, Target, Scale, ShieldCheck, Heart, Leaf, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Extracted static data for performance optimization
const missionItems = [
  "Educate citizens about financial frauds and safe investing.",
  "Empower women through financial independence & skills.",
  "Nurture profound cultural values in young minds.",
  "Support continuous education for underprivileged students.",
  "Reduce hunger through dedicated food donation drives.",
  "Promote environmental sustainability via tree plantation."
];

const pillars = [
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "Integrity", desc: "Uncompromising ethics in all operations." },
  { icon: <Eye size={32} strokeWidth={1.5} />, title: "Transparency", desc: "Clear accountability to our donors & public." },
  { icon: <Target size={32} strokeWidth={1.5} />, title: "Empowerment", desc: "Building capacity, not just providing aid." },
  { icon: <Leaf size={32} strokeWidth={1.5} />, title: "Sustainability", desc: "Long-term ecological & social balance." },
  { icon: <Heart size={32} strokeWidth={1.5} />, title: "Compassion", desc: "Empathy at the core of human service." }
];

// Framer Motion Variants with TypeScript types added
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-[#064E3B] font-sans overflow-x-hidden selection:bg-[#F97316] selection:text-white">
      <Navbar />
      
      {/* 1. INSTITUTIONAL HERO */}
      <section className="pt-48 pb-24 px-6 bg-[#064E3B] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-[length:60px_60px]" 
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F97316]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-[#F97316]/60"></span>
            About The Foundation
            <span className="w-12 h-[1px] bg-[#F97316]/60"></span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8"
          >
            Rooted in <span className="italic text-[#F97316] pr-2">Dharma.</span><br />
            Driven by <span className="italic text-[#F97316] pr-2">Action.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 font-serif italic max-w-3xl mx-auto leading-relaxed"
          >
            "A committed institution working at the grassroots to build a financially sovereign and socially empowered Bharat."
          </motion.p>
        </div>
      </section>

      {/* 2. THE GENESIS (Classic Heritage Layout) */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] rounded-sm overflow-hidden group shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop" 
              alt="Grassroots Work" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 border-[12px] border-[#FDFCF9]/20 group-hover:border-[#FDFCF9]/10 transition-colors duration-700 pointer-events-none z-10" />
            
            <div className="absolute bottom-6 left-6 bg-[#FDFCF9]/95 backdrop-blur-sm px-8 py-5 border border-black/10 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 z-20">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-1">Established</span>
              <span className="font-sans font-black tracking-tighter text-2xl text-[#064E3B] uppercase">APRIL 2021 • PUNE</span>            
              </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#064E3B] leading-tight mb-6">
                Our Genesis
              </h2>
              <div className="w-20 h-1 bg-[#F97316]" />
            </div>
            <p className="text-xl text-[#064E3B]/90 leading-relaxed font-serif">
              Sparkle Era Global Foundation was established with a singular vision: to build an informed, empowered, and socially responsible society. We recognized that while India progresses globally, true empowerment must be secured at the very foundation of our rural and urban communities.
            </p>
            <p className="text-base text-[#064E3B]/70 leading-relaxed font-sans">
              Through strategic initiatives in financial literacy, women's empowerment, youth cultural education, and environmental stewardship, the foundation bridges the gap between noble intentions and measurable, on-ground impact. We do not just run campaigns; we build sustainable community networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER / LEADERSHIP & OUR TEAM */}
      <Leadership />
      <OurTeam />

      {/* 4. VISION & MISSION (Formal Plaque Style) */}
      <section className="py-24 bg-[#064E3B]/[0.03] border-y border-black/5 px-6 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/5 rounded-full blur-[80px]" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group bg-white p-12 md:p-16 rounded-sm border-t-4 border-[#F97316] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="bg-[#064E3B]/5 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-10 h-10 text-[#064E3B]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#064E3B] mb-8 tracking-wide">The Vision</h2>
            <p className="text-[#064E3B]/90 leading-relaxed text-3xl font-serif italic border-l-4 border-[#F97316]/30 pl-8 py-2">
              "To create a financially aware, socially empowered, and environmentally responsible India."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group bg-[#064E3B] text-white p-12 md:p-16 rounded-sm border-t-4 border-[#F97316] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-8 tracking-wide">Our Mission</h2>
            <ul className="space-y-6 text-white/80 font-sans text-base">
              {missionItems.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-start gap-5"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#F97316] shrink-0 mt-0.5" /> 
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. PILLARS OF TRUST (Institutional Layout) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em]">Guiding Principles</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 text-[#064E3B]">The Pillars of Trust</h2>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-16"
        >
          {pillars.map((val, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center group cursor-default">
              <div className="w-20 h-20 mx-auto border border-black/10 rounded-full flex items-center justify-center text-[#064E3B] mb-6 group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                {val.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-3 group-hover:text-[#F97316] transition-colors duration-300">{val.title}</h3>
              <p className="text-sm text-[#064E3B]/60 leading-relaxed px-2">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. GOVERNANCE & TRANSPARENCY (Official Document Style) */}
      <section className="py-32 bg-white px-6 border-t border-black/10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto border border-[#064E3B]/20 p-1 bg-[#FDFCF9] shadow-2xl relative"
        >
          <div className="border-2 border-[#064E3B] p-10 md:p-16 relative">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-r-2 border-b-2 border-white bg-[#064E3B] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-4 h-4 border-l-2 border-b-2 border-white bg-[#064E3B] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-r-2 border-t-2 border-white bg-[#064E3B] -translate-x-1/2 translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-l-2 border-t-2 border-white bg-[#064E3B] translate-x-1/2 translate-y-1/2" />

            <div className="text-center max-w-3xl mx-auto">
              <Scale className="w-14 h-14 text-[#F97316] mx-auto mb-8" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#064E3B] mb-6 uppercase tracking-widest">Governance & Compliance</h2>
              <div className="w-16 h-[1px] bg-[#F97316] mx-auto mb-8" />
              
              <p className="text-[#064E3B]/80 leading-relaxed text-xl mb-12 font-serif italic">
                Sparkle Era Global Foundation is committed to the highest standards of institutional transparency and legal compliance. We are strictly governed as a <strong className="text-[#064E3B]">Section 8 Non-Profit Company</strong> under the Ministry of Corporate Affairs, Government of India.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 text-[#064E3B]">
                <div className="px-8 py-4 border border-[#064E3B]/20 bg-white shadow-sm flex flex-col justify-center">
                  <span className="block text-[10px] uppercase tracking-widest text-[#064E3B]/60 font-bold mb-1">CIN / Registration No.</span>
                  <span className="font-mono font-bold tracking-wider text-sm">U85300PN2018NPLXXXXXX</span>
                </div>
                <div className="px-8 py-4 bg-[#064E3B] text-white shadow-md flex items-center justify-center gap-3 group hover:bg-[#053c2d] transition-colors duration-300">
                  <ShieldCheck className="text-[#F97316] group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="font-bold uppercase tracking-widest text-sm">80G & 12A Certified</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}