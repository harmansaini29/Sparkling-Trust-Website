"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { GlassCard } from "./ui/GlassCard"; 
import { Heart, Globe, Lightbulb, ArrowRight } from "lucide-react";

// --- 1. DATA CONFIGURATION ---
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

// --- 2. MAIN COMPONENT ---
export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // FIX: Use 'dvh' for mobile browser stability and fixed the syntax error
  const sectionHeight = `${PHILOSOPHY_DATA.length * 80 + 50}dvh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile Text Fade: Text fades out slightly as you scroll deep into cards on mobile
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#FDFCF9]"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        
        {/* Ambient Background Animation */}
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
          
          {/* LEFT: Static Intro Block (Responsive Updates) */}
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
              
              <p className="hidden lg:block text-earth/60 text-lg leading-relaxed max-w-md">
                We believe wealth is not just currency, but a tool for liberation. 
                <br /><br />
                Scroll down to explore how we bridge ancient wisdom with modern economics.
              </p>
              
              {/* Mobile-only short description */}
              <p className="lg:hidden text-earth/60 text-sm max-w-xs mx-auto">
                Bridging ancient wisdom with modern economics.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Dynamic Scroll Cards */}
          <div className="relative w-full h-[50vh] lg:h-[600px] flex items-center justify-center">
            {PHILOSOPHY_DATA.map((item, i) => {
              const stepSize = 1 / PHILOSOPHY_DATA.length;
              const start = i * stepSize;
              const end = start + stepSize;

              return (
                <Card 
                  key={item.id} 
                  data={item} 
                  range={[start, end]} 
                  progress={scrollYProgress} 
                  total={PHILOSOPHY_DATA.length}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 3. SUB-COMPONENT: The Card ---
const Card = ({ 
  data, 
  range, 
  progress, 
  total, 
  index 
}: { 
  data: PhilosophyItem; 
  range: [number, number]; 
  progress: MotionValue<number>; 
  total: number;
  index: number;
}) => {
  const [start, end] = range;
  const midpoint = start + (end - start) / 2;

  // Optimized Visibility Logic
  const opacity = useTransform(progress, 
    [start, midpoint, end], 
    [0, 1, index === total - 1 ? 1 : 0]
  );

  const y = useTransform(progress, 
    [start, midpoint, end], 
    [50, 0, index === total - 1 ? 0 : -50] // Reduced travel distance for smoother mobile feel
  );

  const scale = useTransform(progress, 
    [start, midpoint, end], 
    [0.9, 1, index === total - 1 ? 1 : 0.95]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4"
    >
      <GlassCard className="w-full max-w-sm lg:max-w-md bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl p-0 overflow-hidden group">
        
        {/* Header Image/Icon Section */}
        <div 
            className="h-24 lg:h-32 w-full relative flex items-center justify-center overflow-hidden transition-colors duration-500"
            style={{ backgroundColor: data.color }}
        >
             <div className="absolute inset-0 bg-black/10" />
             <div className="relative z-10 p-3 lg:p-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
                {data.icon}
             </div>
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent pointer-events-none" />
        </div>
        
        {/* Text Content */}
        <div className="p-6 lg:p-8 space-y-3 lg:space-y-4">
            <div>
                <span className="text-[9px] lg:text-[10px] uppercase tracking-widest font-bold text-earth/40">
                    0{data.id} — {data.tagline}
                </span>
                <h3 className="text-2xl lg:text-3xl font-serif text-earth mt-1">{data.title}</h3>
            </div>
            
            <p className="text-earth/70 leading-relaxed text-xs lg:text-sm">
                {data.description}
            </p>

            <button className="pt-2 lg:pt-4 flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gold group-hover:gap-4 transition-all">
                Read Deep Dive <ArrowRight size={14} />
            </button>
        </div>
      </GlassCard>
    </motion.div>
  );
};