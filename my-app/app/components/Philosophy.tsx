"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Globe, Lightbulb, ArrowRight, Sparkles } from "lucide-react";

// --- Data Definition ---
interface PhilosophyItem {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const PHILOSOPHY_DATA: PhilosophyItem[] = [
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
    offset: ["start start", "end end"]
  });

  // Horizontal movement: Moves cards left. 
  // Adjusted range to ensure the last card is fully visible without extra whitespace.
  const x = useTransform(scrollYProgress, [0, 0.9], ["0%", "-70%"]);
  
  // Parallax background text: subtle movement
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={scrollRef} className="relative bg-[#FDFCF9] font-sans text-[#1A1A1A]">
      
      {/* 1. STICKY SCROLL SECTION */}
      <div className="h-[300vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
          
          {/* --- BACKGROUND LAYER --- */}
          <motion.div 
            style={{ x: bgTextX }}
            className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-[0.04]"
          >
            <h1 className="text-[20vw] font-black uppercase tracking-tighter text-[#1A1A1A] select-none whitespace-nowrap leading-none">
              Dharma Wealth Ethics
            </h1>
          </motion.div>

          {/* --- HEADER SECTION (Non-Absolute to prevent overlap) --- */}
          <div className="relative z-20 pt-16 px-6 md:px-12 pb-8 flex-shrink-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">
                  Our Ethos
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1]">
                The Philosophy
              </h2>
            </motion.div>
          </div>

          {/* --- CARDS TRACK (Flex-Grow to occupy middle space) --- */}
          <div className="relative z-10 w-full flex-grow flex items-center pl-6 md:pl-12 overflow-hidden">
            <motion.div 
              style={{ x }} 
              className="flex gap-6 md:gap-10 w-max pr-[20vw]" // Right padding ensures smooth end
            >
              {PHILOSOPHY_DATA.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </motion.div>
          </div>

          {/* --- PROGRESS BAR (Bottom) --- */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1A1A]/5 z-20">
            <motion.div 
              style={{ scaleX: scrollYProgress, originX: 0 }}
              className="h-full bg-[#C5A059]"
            />
          </div>

        </div>
      </div>

      {/* 2. CALL TO ACTION (Reveal Section) */}
      <div className="relative h-screen w-full flex items-center justify-center bg-[#1A1A1A] overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-[length:50px_50px]" />
            {/* Glow Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-flex p-4 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-2xl">
            <Sparkles className="text-[#C5A059] w-6 h-6" />
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] mb-8 tracking-tight">
            Join the <br /> 
            <span className="italic text-[#C5A059] font-light">Movement.</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium leading-relaxed">
            Be part of a financial ecosystem that prioritizes human flourishing over mindless accumulation.
          </p>
          
          <motion.button 
            suppressHydrationWarning={true}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-[#C5A059] text-white rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all shadow-[0_0_40px_-10px_rgba(197,160,89,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-3 text-sm">
              Get Started Now <ArrowRight size={16} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// --- Card Component ---
const Card = ({ item }: { item: PhilosophyItem }) => {
  return (
    <div 
      className="flex-shrink-0 w-[85vw] md:w-[450px] lg:w-[550px] bg-white rounded-[2rem] p-8 md:p-12 flex flex-col justify-between border border-[#1A1A1A]/5 shadow-xl shadow-[#1A1A1A]/5 relative group overflow-hidden"
      style={{ minHeight: '60vh' }} // Ensures vertical centering and consistent height
    >
      {/* Hover Background Reveal */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 ease-out pointer-events-none"
        style={{ backgroundColor: item.color }}
      />
      
      {/* Top: Header */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#FDFCF9] border border-[#1A1A1A]/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
            {item.icon}
            </div>
            <span className="text-6xl font-serif text-[#1A1A1A]/5 font-black group-hover:text-[#C5A059]/10 transition-colors duration-500 select-none">
            0{item.id}
            </span>
        </div>

        <div className="space-y-3">
            <p className="text-[#C5A059] text-[11px] font-bold uppercase tracking-[0.25em]">
            {item.subtitle}
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
            {item.title}
            </h3>
        </div>
      </div>

      {/* Middle: Description */}
      <div className="relative z-10 mt-6 flex-grow">
        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
          {item.desc}
        </p>
      </div>

      {/* Bottom: Action */}
      <div className="relative z-10 pt-8 mt-4 border-t border-[#1A1A1A]/5 flex items-center justify-between">
        <button 
          suppressHydrationWarning={true}
          className="text-xs font-black uppercase tracking-widest text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300 flex items-center gap-2"
        >
          Read Manifesto <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};