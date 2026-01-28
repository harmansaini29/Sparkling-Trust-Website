"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Target, Compass, Zap } from "lucide-react";
import Image from "next/image";

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-earth selection:bg-gold/30 font-sans">
      <Navbar />
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
            {/* Parallax Background */}
            <Image 
                src="/india-pattern.png" 
                alt="Pattern" 
                fill 
                className="object-cover opacity-10" 
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF9]/50 via-transparent to-[#FDFCF9]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 space-y-8">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-gold text-xs uppercase tracking-[0.4em] font-black bg-white/50 backdrop-blur px-4 py-2 rounded-full border border-gold/20">
                    The Origin Story
                </span>
                <h1 className="text-5xl lg:text-8xl font-serif mt-6 text-earth leading-tight">
                    Why We <span className="text-gold italic">Exist</span>
                </h1>
                <p className="text-lg lg:text-xl text-earth/60 mt-6 leading-relaxed font-serif italic">
                    "To restore the economic dignity of Bharat by merging the precision of modern finance with the timeless ethics of Dharma."
                </p>
            </motion.div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS (Sticky Cards) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
            {[
                { 
                    icon: <Target className="w-8 h-8" />, 
                    title: "Precision", 
                    text: "We don't guess. We analyze. Every initiative is backed by rigorous financial data and market research." 
                },
                { 
                    icon: <Compass className="w-8 h-8" />, 
                    title: "Direction", 
                    text: "Guided by the 'Purusharthas' (Goals of Human Life), we ensure wealth serves a higher purpose." 
                },
                { 
                    icon: <Zap className="w-8 h-8" />, 
                    title: "Energy", 
                    text: "Money is energy. We stop the leaks of debt and channelize capital into productive, ethical growth." 
                }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="p-10 rounded-[2.5rem] bg-white border border-earth/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 group"
                >
                    <div className="w-16 h-16 bg-earth/5 rounded-2xl flex items-center justify-center mb-8 text-earth group-hover:bg-gold group-hover:text-white transition-colors">
                        {item.icon}
                    </div>
                    <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
                    <p className="text-earth/60 leading-relaxed">{item.text}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 3. MANIFESTO (Dark Section) */}
      <section className="py-32 bg-earth text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full" />
         
         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-12">
             <h2 className="text-3xl lg:text-6xl font-serif leading-tight">
                "We are not just building portfolios. <br/>
                We are rebuilding <span className="text-gold">Civilization.</span>"
             </h2>
             <div className="h-px w-24 bg-gold/50 mx-auto" />
             <p className="text-lg text-white/50 leading-loose max-w-3xl mx-auto">
                For too long, financial literacy has been kept in the hands of the few. 
                We believe that when a rural farmer understands compound interest, and when an 
                urban investor understands ethical capital, the nation rises. This is not charity. 
                This is nation-building.
             </p>
         </div>
      </section>

      <Footer />
    </main>
  );
}