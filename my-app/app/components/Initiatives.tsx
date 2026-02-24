"use client";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users2, Sprout, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function Initiatives() {
  return (
    <section className="py-32 bg-[#F9FAFB] relative border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">The Sparkling Difference</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#064E3B] leading-tight">
              Executing with <br /> <span className="italic text-[#F97316]">Precision & Purpose</span>
            </h2>
          </div>
          <p className="text-[#064E3B]/60 text-lg max-w-md font-medium leading-relaxed pb-3 border-l-2 border-[#F97316] pl-6">
            We merge corporate accountability with profound social compassion. Every initiative is a measurable step towards a sovereign economy.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
          
          {/* Card 1: Large Featured (Spans 2 cols, 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group bg-[#064E3B] text-white p-10 flex flex-col justify-between"
          >
            <div className="absolute inset-0 opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700">
               <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200" fill className="object-cover" alt="Grassroots" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-[#064E3B]/80 to-transparent" />
            
            <div className="relative z-10 flex justify-between items-start">
               <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                 <Users2 className="w-8 h-8 text-[#F97316]" />
               </div>
               <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">01</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">Grassroots <br/>Execution</h3>
              <p className="text-white/70 text-lg max-w-md leading-relaxed">
                Our volunteers work deep within the rural heartlands, ensuring financial wisdom reaches the last mile without dilution.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Standard Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="rounded-[2.5rem] bg-white border border-black/5 p-10 flex flex-col justify-between group hover:shadow-2xl hover:border-[#F97316]/30 transition-all"
          >
            <div className="w-14 h-14 bg-[#F9FAFB] rounded-full flex items-center justify-center group-hover:bg-[#F97316]/10 transition-colors">
              <Target className="w-6 h-6 text-[#F97316]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/40 mb-2 block">02</span>
              <h3 className="text-2xl font-serif font-bold text-[#064E3B] mb-3">Measurable Targets</h3>
              <p className="text-[#064E3B]/60 text-sm leading-relaxed">We don't just act; we measure. Every initiative is backed by data-driven impact assessment and stringent audits.</p>
            </div>
          </motion.div>

          {/* Card 3: Standard Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="rounded-[2.5rem] bg-white border border-black/5 p-10 flex flex-col justify-between group hover:shadow-2xl hover:border-[#F97316]/30 transition-all"
          >
            <div className="w-14 h-14 bg-[#F9FAFB] rounded-full flex items-center justify-center group-hover:bg-[#F97316]/10 transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#F97316]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/40 mb-2 block">03</span>
              <h3 className="text-2xl font-serif font-bold text-[#064E3B] mb-3">Structured Programs</h3>
              <p className="text-[#064E3B]/60 text-sm leading-relaxed">Methodically designed curriculums that ensure consistent, high-quality learning outcomes across all demographics.</p>
            </div>
          </motion.div>

          {/* Card 4: Wide Strip (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-[2.5rem] bg-[#F97316] text-white p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center group overflow-hidden relative"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10 max-w-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2 block">04</span>
              <h3 className="text-3xl font-serif font-bold mb-3">Holistic Awareness</h3>
              <p className="text-white/80 text-sm leading-relaxed">Economic empowerment is our core. We believe wealth creation is the first step to social dignity and spiritual freedom.</p>
            </div>
            <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mt-6 sm:mt-0 group-hover:rotate-12 transition-transform">
              <Sprout className="w-10 h-10 text-white" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}