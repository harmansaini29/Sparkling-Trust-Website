"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { GlassCard } from "./ui/GlassCard"; 
import { Heart, Globe, Lightbulb, ArrowRight } from "lucide-react";
import Image from "next/image"; 

interface PhilosophyItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const PHILOSOPHY_DATA: PhilosophyItem[] = [
  {
    id: 1,
    title: "Universal Welfare",
    tagline: "Sarve Bhavantu Sukhinah",
    description: "Moving beyond profit maximization to maximize global well-being. True wealth is not measured in currency, but in the happiness of the community served.",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "#C5A059", // Gold
  },
  {
    id: 2,
    title: "Compassionate Capital",
    tagline: "Money as Energy",
    description: "We view capital as a flowing energy. We channel this energy strictly into ventures that heal the planet, restore dignity, and empower the marginalized.",
    icon: <Heart className="w-8 h-8 text-white" />,
    color: "#D4A373", // Earthy
  },
  {
    id: 3,
    title: "Vedic Innovation",
    tagline: "Ancient Roots, Modern Tech",
    description: "Integrating 5,000 years of Dharmic ethics with cutting-edge fintech. Algorithms should serve humanity, not enslave it.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    color: "#A98467", // Muted Brown
  },
];

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Tuned for perfect pacing - not too fast, not too slow
  const sectionHeight = "300vh"; 

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#FDFCF9]"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        
        {/* Background Animation */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
           <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.4]),
                scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" 
           />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 h-full">
          
          {/* Static Text Side - Fades out as you scroll */}
          <motion.div 
            style={{ opacity: textOpacity, scale: textScale }}
            className="flex flex-col justify-center h-[30vh] lg:h-full lg:max-h-[80vh] pointer-events-none lg:pointer-events-auto mt-20 lg:mt-0"
          >
            <div className="space-y-4 lg:space-y-8 text-center lg:text-left">
              <span className="inline-block py-1 px-3 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-[0.3em] font-black bg-white/50 backdrop-blur-md">
                Our Core Values
              </span>
              <h2 className="text-4xl lg:text-7xl font-serif text-earth leading-[0.9]">
                The <span className="italic text-gold">Dharma</span> <br /> 
                of Money.
              </h2>
              <p className="hidden lg:block text-earth text-lg leading-relaxed max-w-md font-medium">
                We believe wealth is not just currency, but a tool for liberation. 
                <br /><br />
                Scroll down to explore how we bridge ancient wisdom with modern economics.
              </p>
              <p className="lg:hidden text-earth text-sm max-w-xs mx-auto font-medium">
                Bridging ancient wisdom with modern economics.
              </p>
            </div>
          </motion.div>

          {/* Dynamic Scroll Cards */}
          <div className="relative w-full h-[50vh] lg:h-[600px] flex items-center justify-center">
            {PHILOSOPHY_DATA.map((item, i) => (
                <Card 
                  key={item.id} 
                  data={item} 
                  progress={scrollYProgress} 
                  total={PHILOSOPHY_DATA.length}
                  index={i} 
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ data, progress, total, index }: { data: PhilosophyItem; progress: MotionValue<number>; total: number; index: number }) => {
  const step = 1 / total; 
  // High overlap prevents "blank space" gaps between cards
  const overlap = 0.15;
  
  const enterStart = Math.max(0, (index * step) - overlap);
  const enterEnd   = index * step + overlap;
  const exitStart  = Math.min(1, ((index + 1) * step) - overlap);
  const exitEnd    = Math.min(1, ((index + 1) * step) + overlap);

  const range = [enterStart, enterEnd, exitStart, exitEnd];
  
  // Logic: First card starts visible. Last card stays visible. Middle cards fade in/out.
  const opacity = useTransform(progress, range, 
    index === 0 ? [1, 1, 1, 0] :      
    index === total - 1 ? [0, 1, 1, 1] : 
    [0, 1, 1, 0]                     
  );

  const y = useTransform(progress, range, 
    index === 0 ? [0, 0, 0, -50] : 
    index === total - 1 ? [50, 0, 0, 0] : 
    [50, 0, 0, -50]
  );

  const scale = useTransform(progress, range, 
    index === 0 ? [1, 1, 1, 0.95] : 
    index === total - 1 ? [0.95, 1, 1, 1] : 
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div style={{ opacity, y, scale }} className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
      <GlassCard className="w-full max-w-sm lg:max-w-md bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl p-0 overflow-hidden group">
        
        {/* Header with Pattern */}
        <div className="h-24 lg:h-32 w-full relative flex items-center justify-center overflow-hidden transition-colors duration-500" style={{ backgroundColor: data.color }}>
             <Image 
               src="/india-pattern.png" 
               alt="Pattern" 
               fill 
               className="object-cover opacity-40 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-black/10" />
             <div className="relative z-10 p-3 lg:p-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 shadow-inner">
                {data.icon}
             </div>
        </div>
        
        <div className="p-6 lg:p-8 space-y-3 lg:space-y-4">
            <div>
                <span className="text-[9px] lg:text-[10px] uppercase tracking-widest font-bold text-earth/60">
                    0{data.id} — {data.tagline}
                </span>
                <h3 className="text-2xl lg:text-3xl font-serif text-earth mt-1">{data.title}</h3>
            </div>
            <p className="text-earth font-medium leading-relaxed text-xs lg:text-sm">{data.description}</p>
            
            <button suppressHydrationWarning className="pt-2 lg:pt-4 flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gold group-hover:gap-4 transition-all">
                Read Deep Dive <ArrowRight size={14} />
            </button>
        </div>
      </GlassCard>
    </motion.div>
  );
};