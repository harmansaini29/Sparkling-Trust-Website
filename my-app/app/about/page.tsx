"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Leadership } from "../components/Leadership";
import { Eye, Target, Scale, ShieldCheck, Heart, Leaf, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-[#064E3B] font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. INSTITUTIONAL HERO */}
      <section className="pt-40 pb-20 px-6 bg-[#064E3B] text-white relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-[#F97316]/50"></span>
            About The Foundation
            <span className="w-12 h-[1px] bg-[#F97316]/50"></span>
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8"
          >
            Rooted in <span className="italic text-[#F97316]">Dharma.</span><br />
            Driven by <span className="italic text-[#F97316]">Action.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
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
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-sm overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop" 
              alt="Grassroots Work" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 border-[12px] border-[#FDFCF9] pointer-events-none" />
            <div className="absolute bottom-6 left-6 bg-[#FDFCF9] px-6 py-4 border border-black/10">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#F97316] mb-1">Established</span>
              <span className="font-serif text-2xl text-[#064E3B] font-bold">April 2021 • Pune</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="space-y-8 lg:pl-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#064E3B] leading-tight">
              Our Genesis
            </h2>
            <div className="w-16 h-1 bg-[#F97316]" />
            <p className="text-lg text-[#064E3B]/80 leading-relaxed font-serif">
              Sparkle Era Global Foundation was established with a singular vision: to build an informed, empowered, and socially responsible society. We recognized that while India progresses globally, true empowerment must be secured at the very foundation of our rural and urban communities.
            </p>
            <p className="text-base text-[#064E3B]/70 leading-relaxed font-sans">
              Through strategic initiatives in financial literacy, women's empowerment, youth cultural education, and environmental stewardship, the foundation bridges the gap between noble intentions and measurable, on-ground impact. We do not just run campaigns; we build sustainable community networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. FOUNDER / LEADERSHIP SECTION MOVED UP HERE FOR MAXIMUM VISIBILITY */}
      <Leadership />

      {/* 4. VISION & MISSION (Formal Plaque Style) */}
      <section className="py-24 bg-[#064E3B]/5 border-y border-black/5 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-sm border-t-4 border-[#F97316] shadow-xl"
          >
            <Eye className="w-12 h-12 text-[#064E3B] mb-8 opacity-20" />
            <h2 className="text-3xl font-serif font-bold text-[#064E3B] mb-6 tracking-wide">The Vision</h2>
            <p className="text-[#064E3B]/80 leading-relaxed text-2xl font-serif italic border-l-2 border-[#064E3B]/20 pl-6">
              "To create a financially aware, socially empowered, and environmentally responsible India."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-[#064E3B] text-white p-12 md:p-16 rounded-sm border-t-4 border-[#F97316] shadow-xl"
          >
            <Target className="w-12 h-12 text-white mb-8 opacity-20" />
            <h2 className="text-3xl font-serif font-bold mb-8 tracking-wide">Our Mission</h2>
            <ul className="space-y-5 text-white/80 font-sans text-sm md:text-base">
              {[
                "Educate citizens about financial frauds and safe investing.",
                "Empower women through financial independence & skills.",
                "Nurture profound cultural values in young minds.",
                "Support continuous education for underprivileged students.",
                "Reduce hunger through dedicated food donation drives.",
                "Promote environmental sustainability via tree plantation."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" /> 
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* 5. PILLARS OF TRUST (Institutional Layout) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em]">Guiding Principles</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 text-[#064E3B]">The Pillars of Trust</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12">
          {[
            { icon: <ShieldCheck size={32} />, title: "Integrity", desc: "Uncompromising ethics in all operations." },
            { icon: <Eye size={32} />, title: "Transparency", desc: "Clear accountability to our donors & public." },
            { icon: <Target size={32} />, title: "Empowerment", desc: "Building capacity, not just providing aid." },
            { icon: <Leaf size={32} />, title: "Sustainability", desc: "Long-term ecological & social balance." },
            { icon: <Heart size={32} />, title: "Compassion", desc: "Empathy at the core of human service." }
          ].map((val, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto border border-black/10 rounded-full flex items-center justify-center text-[#064E3B] mb-6 group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] transition-all duration-500">
                {val.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#064E3B] mb-2">{val.title}</h3>
              <p className="text-xs text-[#064E3B]/60 leading-relaxed px-2">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. GOVERNANCE & TRANSPARENCY (Official Document Style) */}
      <section className="py-32 bg-white px-6 border-t border-black/10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-5xl mx-auto border-2 border-[#064E3B] p-10 md:p-16 relative"
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-r-2 border-b-2 border-white bg-[#064E3B] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-4 h-4 border-l-2 border-b-2 border-white bg-[#064E3B] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-r-2 border-t-2 border-white bg-[#064E3B] -translate-x-1/2 translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-l-2 border-t-2 border-white bg-[#064E3B] translate-x-1/2 translate-y-1/2" />

          <div className="text-center max-w-3xl mx-auto">
            <Scale className="w-12 h-12 text-[#F97316] mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-[#064E3B] mb-6 uppercase tracking-widest">Governance & Compliance</h2>
            <p className="text-[#064E3B]/80 leading-relaxed text-lg mb-10 font-serif italic">
              Sparkle Era Global Foundation is committed to the highest standards of institutional transparency and legal compliance. We are strictly governed as a <strong>Section 8 Non-Profit Company</strong> under the Ministry of Corporate Affairs, Government of India.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-[#064E3B]">
              <div className="px-6 py-3 border border-[#064E3B]/20 w-full sm:w-auto">
                <span className="block text-[10px] uppercase tracking-widest text-[#064E3B]/60 font-bold mb-1">CIN / Registration No.</span>
                <span className="font-mono font-bold tracking-wider">U85300PN2018NPLXXXXXX</span>
              </div>
              <div className="px-6 py-3 border border-[#064E3B]/20 bg-[#064E3B] text-white flex items-center justify-center gap-3 w-full sm:w-auto">
                <ShieldCheck className="text-[#F97316]" size={18} />
                <span className="font-bold uppercase tracking-widest text-xs">80G & 12A Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}