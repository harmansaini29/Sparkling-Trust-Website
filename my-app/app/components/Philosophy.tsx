"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Globe, Lightbulb, ArrowRight, Sparkles } from "lucide-react";

const PHILOSOPHY_DATA = [
  {
    id: 1,
    title: "Universal Welfare",
    subtitle: "Sarve Bhavantu Sukhinah",
    desc: "True wealth is measured not in currency, but in the collective happiness of the community served.",
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-[#C5A059]" />,
    color: "#C5A059",
  },
  {
    id: 2,
    title: "Compassionate Capital",
    subtitle: "Energy in Motion",
    desc: "Capital is energy. We channel it strictly into ventures that heal the planet and restore dignity.",
    icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#D4A373]" />,
    color: "#D4A373",
  },
  {
    id: 3,
    title: "Vedic Innovation",
    subtitle: "Ancient Roots, Modern Tech",
    desc: "Integrating 5,000 years of ethics with fintech. Algorithms should serve humanity, not enslave it.",
    icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-[#A98467]" />,
    color: "#A98467",
  },
];

export function Philosophy() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  // Horizontal movement for the cards
  // We stop at -100% (or similar) to let the user "finish" the cards before the CTA reveal
  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-60%"]);
  
  // Parallax background text
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <div ref={scrollRef} className="relative bg-[#FDFCF9]">
      {/* 1. HORIZONTAL SCROLL SECTION */}
      <div className="h-[300vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          {/* Parallax Background Text */}
          <motion.div 
            style={{ x: bgTextX }}
            className="absolute inset-0 flex items-center whitespace-nowrap z-0 pointer-events-none opacity-[0.03]"
          >
            <h1 className="text-[25vw] font-black uppercase tracking-tighter text-black">
              Dharma Wealth Ethics
            </h1>
          </motion.div>

          {/* Top Header Information */}
          <div className="absolute top-8 md:top-12 left-6 md:left-12 z-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <span className="text-[#C5A059] text-xs font-black uppercase tracking-[0.3em] block">Our Ethos</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#2a2a2a]">The Philosophy</h2>
            </motion.div>
          </div>

          {/* The Horizontal Track */}
          <div className="relative z-10 w-full">
            <motion.div 
              style={{ x }} 
              className="flex gap-6 md:gap-12 px-6 md:px-12 items-center"
            >
              {PHILOSOPHY_DATA.map((item) => (
                <Card key={item.id} item={item} />
              ))}
              {/* Spacer to allow the last card to be fully seen before the CTA reveal */}
              <div className="flex-shrink-0 w-[10vw] md:w-[20vw]" />
            </motion.div>
          </div>

          {/* Custom Progress Bar */}
          <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 h-[2px] bg-black/5 z-20">
            <motion.div 
              style={{ scaleX: scrollYProgress, originX: 0 }}
              className="h-full bg-[#C5A059] w-full"
            />
          </div>
        </div>
      </div>

      {/* 2. THE BOTTOM CTA (The "Sick" Reveal) */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[#2a2a2a] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-6 z-10"
        >
          <div className="inline-block p-3 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="text-[#C5A059] w-6 h-6" />
          </div>
          <h2 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8">
            Join the <br /> <span className="italic text-[#C5A059]">Movement.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium">
            Be part of a financial ecosystem that prioritizes human flourishing over mindless accumulation.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-[#C5A059] text-white rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get Started Now <ArrowRight size={18} />
            </span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Abstract Background for CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-[120px] animate-pulse" />
        </div>
      </section>
    </div>
  );
}

const Card = ({ item }: { item: typeof PHILOSOPHY_DATA[0] }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] aspect-[4/5] md:aspect-square lg:aspect-[16/10] bg-white rounded-[2rem] p-8 md:p-12 flex flex-col justify-between border border-black/5 shadow-sm relative group overflow-hidden"
    >
      {/* Dynamic Background Hover Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
        style={{ backgroundColor: item.color }}
      />
      
      <div className="relative z-10 flex justify-between items-start">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FDFCF9] border border-black/5 flex items-center justify-center shadow-inner group-hover:border-[#C5A059]/30 transition-colors">
          {item.icon}
        </div>
        <span className="text-6xl md:text-8xl font-serif text-black/[0.03] font-black group-hover:text-[#C5A059]/10 transition-colors">
          0{item.id}
        </span>
      </div>

      <div className="relative z-10 space-y-4">
        <div className="space-y-1">
          <p className="text-[#C5A059] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            {item.subtitle}
          </p>
          <h3 className="text-3xl md:text-5xl font-serif text-[#2a2a2a]">
            {item.title}
          </h3>
        </div>
        <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md">
          {item.desc}
        </p>
      </div>

      <div className="relative z-10 pt-6 border-t border-black/5 flex items-center justify-between">
        <button className="text-xs font-black uppercase tracking-widest text-[#2a2a2a] group-hover:text-[#C5A059] transition-colors flex items-center gap-2">
          Read Manifesto <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};