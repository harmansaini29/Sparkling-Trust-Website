"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";

const ADVISORS = [
  { id: 1, name: "Dr. Vikram Deshmukh", role: "Chief Economic Advisor", bio: "Former Director of Financial Strategy with 30+ years of experience in rural economic development and sustainable scaling.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Meera Sanyal", role: "Social Impact Strategist", bio: "Renowned philanthropist and policy advocate specializing in grassroots women's empowerment initiatives.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Col. Rajesh Pratap", role: "Governance & Compliance", bio: "Veteran ensuring stringent compliance, structural integrity, and 100% transparent execution of all foundational funds.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" }
];

export function AdvisoryBoard() {
  return (
    <section className="py-20 md:py-32 bg-[#F9FAFB] relative overflow-hidden border-b border-black/5 px-4 sm:px-6">
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4AF37]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#064E3B]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-24 gap-6 md:gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-[#F97316]"></span>
              <span className="text-[#F97316] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] flex items-center gap-2">
                <Award size={14} /> Strategic Guidance
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#064E3B] leading-none drop-shadow-sm">
              The Advisory <span className="italic text-[#F97316]">Board</span>
            </h2>
          </motion.div>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base md:text-lg text-[#064E3B]/70 max-w-md font-serif italic border-l-2 border-[#F97316]/50 pl-4 md:pl-6 py-1 md:py-2">
            Guided by industry veterans, policymakers, and visionaries ensuring our impact is measurable, ethical, and highly effective.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {ADVISORS.map((advisor, index) => (
            <motion.div key={advisor.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: index * 0.2 }} className="group relative">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-5 md:mb-6 shadow-xl border border-black/5 bg-white">
                <Image src={advisor.image} alt={advisor.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-xl flex items-start gap-2 md:gap-3 shadow-2xl">
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#F97316] shrink-0 mt-0.5" />
                    <p className="text-white text-[10px] md:text-xs leading-relaxed font-medium">{advisor.bio}</p>
                  </div>
                </div>
              </div>

              <div className="pl-3 md:pl-4 border-l-2 border-transparent group-hover:border-[#F97316] transition-colors duration-500">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#064E3B] mb-1 md:mb-2 group-hover:text-[#F97316] transition-colors duration-300">
                  {advisor.name}
                </h3>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#064E3B]/50">
                  {advisor.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}