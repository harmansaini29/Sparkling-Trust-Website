"use client";
import Image from "next/image";
import { Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Leadership() {
  return (
    <section className="py-32 bg-[#064E3B] relative overflow-hidden border-y border-black/20 text-white">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#F97316]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-black/40 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* THE BIG ANIMATED PICTURE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Aura Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316] to-transparent rounded-[3rem] blur-2xl opacity-40 animate-pulse" />
            
            {/* Massive Image Container */}
            <div className="relative w-full aspect-[4/5] md:h-[700px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/20 group bg-black">
              <Image 
                src="/founder.jpg" 
                alt="Rahul Mane - Founder" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                priority
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              
              {/* Floating Glass Badge */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#F97316]" />
                  <span className="text-[#F97316] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">The Visionary</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">Rahul Mane</h3>
                <p className="text-white/70 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-2">Founder, Sparkle Era</p>
              </motion.div>
            </div>
          </motion.div>

          {/* THE LEADER'S MANIFESTO */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-7 lg:pl-8"
          >
            <Quote className="w-20 h-20 md:w-24 md:h-24 text-[#F97316] opacity-30 mb-8 -ml-4 md:-ml-6" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
              "We are not just providing aid; we are <span className="italic text-[#F97316]">engineering empowerment.</span>"
            </h2>
            
            <div className="w-24 h-1 bg-[#F97316] mb-8" />
            
            <p className="text-xl md:text-2xl text-white/90 font-serif italic leading-relaxed mb-8 border-l-4 border-white/20 pl-6">
              By eradicating financial illiteracy and fostering deep cultural roots, we are actively building an India that is both economically sovereign and socially compassionate.
            </p>
            
            <div className="space-y-6 text-white/60 leading-relaxed font-sans text-lg">
              <p>
                Under his leadership, Sparkle Era Global Foundation has rapidly scaled its grassroots impact, reaching over <strong>56,000 beneficiaries</strong> across Maharashtra. 
              </p>
              <p>
                His philosophy centers on sustainable change—equipping communities with the tools, knowledge, and ethical framework required to thrive independently rather than depending on continuous support.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}