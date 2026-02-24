"use client";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { Heart, Globe, Lightbulb, ShieldCheck } from "lucide-react";
import { useRef } from "react";
<<<<<<< Updated upstream
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
=======

const PHILOSOPHY_DATA = [
  {
    id: 1,
    title: "Universal Welfare",
    subtitle: "Sarve Bhavantu Sukhinah",
    desc: "True wealth is measured not in currency, but in the collective happiness of the community served. We operate on the principle that the prosperity of one is deeply intertwined with the prosperity of all.",
    iconName: "globe",
    bg: "bg-[#064E3B]",
    text: "text-white",
    glow: "bg-[#F97316]/15",
    borderColor: "border-white/10"
>>>>>>> Stashed changes
  },
  {
    id: 2,
    title: "Compassionate Capital",
<<<<<<< Updated upstream
    tagline: "Money as Energy",
    description: "We view capital as a flowing energy. We channel this energy strictly into ventures that heal the planet, restore dignity, and empower the marginalized.",
    icon: <Heart className="w-8 h-8 text-white" />,
    color: "#D4A373", // Earthy
=======
    subtitle: "Energy in Motion",
    desc: "Capital is energy. We channel it strictly into ventures that heal the planet and restore dignity. Financial resources must serve as a tool for empowerment, never exploitation.",
    iconName: "heart",
    bg: "bg-[#FDFCF9]",
    text: "text-[#064E3B]",
    glow: "bg-[#064E3B]/5",
    borderColor: "border-black/5"
>>>>>>> Stashed changes
  },
  {
    id: 3,
    title: "Vedic Innovation",
<<<<<<< Updated upstream
    tagline: "Ancient Roots, Modern Tech",
    description: "Integrating 5,000 years of Dharmic ethics with cutting-edge fintech. Algorithms should serve humanity, not enslave it.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    color: "#A98467", // Muted Brown
  },
];

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  // SMOOTHNESS FACTOR: 400vh gives the user plenty of runway for a slow scroll
  const sectionHeight = "400vh"; 
=======
    subtitle: "Ancient Roots, Modern Tech",
    desc: "Integrating 5,000 years of ethics with modern mechanisms. Systems should serve humanity, not enslave it. We ground progressive strategies in timeless Dharmic philosophies.",
    iconName: "lightbulb",
    bg: "bg-[#064E3B]",
    text: "text-white",
    glow: "bg-[#F97316]/15",
    borderColor: "border-white/10"
  },
];

const renderIcon = (name: string) => {
  const className = "w-8 h-8 md:w-10 md:h-10";
  if (name === "globe") return <Globe className={className} />;
  if (name === "heart") return <Heart className={className} />;
  return <Lightbulb className={className} />;
};
>>>>>>> Stashed changes

interface CardProps {
  item: typeof PHILOSOPHY_DATA[0];
  index: number;
  progress: MotionValue<number>;
  total: number;
}

const PhilosophyCard = ({ item, index, progress, total }: CardProps) => {
  // Gentle scale down so it looks like a real physical stack of cards pressing down
  const targetScale = 1 - (total - index - 1) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  
  // High opacity retention so previous slides remain clearly visible
  const opacity = useTransform(progress, [index / total, 1], [1, 0.85]);

  return (
    <div 
      className="sticky flex justify-center items-start px-4 md:px-6 w-full"
      style={{ 
        // THIS IS THE MAGIC: Staggers the cards by 50px so every previous slide is always visible!
        top: `calc(15vh + ${index * 50}px)`, 
        height: '100vh' // Ensures proper scroll pacing per card
      }}
    >
      <motion.div 
        style={{ scale, opacity }}
        className={`relative w-full max-w-5xl h-[500px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.15)] flex flex-col justify-start overflow-hidden border origin-top will-change-transform ${item.bg} ${item.text} ${item.borderColor}`}
      >
        {/* Ambient Glow */}
        <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${item.glow}`} />
        <div className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${item.glow}`} />

        {/* TRUST BAR: Professional Header replacing the giant background numbers */}
        <div className={`flex justify-between items-center w-full mb-8 pb-6 border-b ${item.borderColor}`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${item.bg === 'bg-[#064E3B]' ? 'bg-[#F97316]/20' : 'bg-[#064E3B]/10'}`}>
              <ShieldCheck className={`w-5 h-5 ${item.bg === 'bg-[#064E3B]' ? 'text-[#F97316]' : 'text-[#064E3B]'}`} />
            </div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Core Principle</span>
          </div>
          <span className="font-serif text-2xl md:text-3xl italic opacity-40 font-black">0{item.id}</span>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center w-full relative z-10 pt-4">
          
          <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border transition-all duration-500 hover:scale-105 ${
            item.bg === "bg-[#FDFCF9]" ? "bg-white text-[#F97316] border-black/5" : "bg-white/10 backdrop-blur-xl text-[#F97316] border-white/20"
          }`}>
            {renderIcon(item.iconName)}
          </div>

          <div className="flex-1">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-3 text-[#F97316] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#F97316]/50"></span>
              {item.subtitle}
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-5 leading-tight drop-shadow-sm">
              {item.title}
            </h3>
            <p className={`text-base md:text-lg lg:text-xl leading-relaxed font-serif italic ${
              item.bg === "bg-[#FDFCF9]" ? "text-[#064E3B]/80" : "text-white/80"
            }`}>
              "{item.desc}"
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
<<<<<<< Updated upstream
    offset: ["start start", "end end"],
  });

  // Text stays visible longer, only fading slightly at the very end
  const textOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0.4]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#FDFCF9] w-full"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        
        {/* Background Animation - Slow, subtle breathing effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
           <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.25]),
                scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px]" 
           />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-20 h-full">
          
          {/* Static Text Side */}
          <motion.div 
            style={{ opacity: textOpacity, scale: textScale }}
            className="flex flex-col justify-center h-[30vh] lg:h-full lg:max-h-[80vh] pointer-events-none lg:pointer-events-auto mt-20 lg:mt-0 order-1 lg:order-1"
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
          <div className="relative w-full h-[50vh] lg:h-[600px] flex items-center justify-center order-2 lg:order-2">
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
  // DEEP OVERLAP: 0.25 ensures perfectly seamless blending
  const overlap = 0.25; 
  
  const enterStart = Math.max(0, (index * step) - overlap);
  const enterEnd   = index * step + overlap;
  const exitStart  = Math.min(1, ((index + 1) * step) - overlap);
  const exitEnd    = Math.min(1, ((index + 1) * step) + overlap);

  const range = [enterStart, enterEnd, exitStart, exitEnd];
  
  const opacity = useTransform(progress, range, 
    index === 0 ? [1, 1, 1, 0] :      
    index === total - 1 ? [0, 1, 1, 1] : 
    [0, 1, 1, 0]                     
  );

  // MICRO MOVEMENT: 30px is subtle enough to feel like "levitation"
  const y = useTransform(progress, range, 
    index === 0 ? [0, 0, 0, -30] : 
    index === total - 1 ? [30, 0, 0, 0] : 
    [30, 0, 0, -30]
  );

  const scale = useTransform(progress, range, 
    index === 0 ? [1, 1, 1, 0.98] : 
    index === total - 1 ? [0.98, 1, 1, 1] : 
    [0.98, 1, 1, 0.98]
  );

  return (
    <motion.div style={{ opacity, y, scale }} className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
      <GlassCard className="w-full max-w-sm lg:max-w-md bg-[#FDFCF9] backdrop-blur-xl border border-white/60 shadow-2xl p-0 overflow-hidden group hover:border-gold/40 transition-colors duration-500">
        
        <div className="h-24 lg:h-32 w-full relative flex items-center justify-center overflow-hidden transition-colors duration-500" style={{ backgroundColor: data.color }}>
             <div className="absolute inset-0 bg-black/5" />
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
        
        <div className="p-6 lg:p-8 space-y-3 lg:space-y-4 bg-white/50">
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
=======
    offset: ["start start", "end end"]
  });

  // Spring physics for buttery smooth interactions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-[#F9FAFB] pb-32">
      
      {/* HEADER SECTION */}
      <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center relative z-20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-8 md:w-16 bg-[#F97316]" />
          <span className="text-[#F97316] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] flex items-center gap-2">
            <ShieldCheck size={14} /> Our Core Ethics
          </span>
          <div className="h-[1px] w-8 md:w-16 bg-[#F97316]" />
        </div>
        <h2 className="text-5xl md:text-7xl font-serif text-[#064E3B] leading-none drop-shadow-sm mb-6">
          Principles <span className="italic text-[#F97316]">That Endure</span>
        </h2>
        <p className="text-lg text-[#064E3B]/70 max-w-2xl mx-auto font-serif italic">
          Built on transparency, ethics, and universal welfare. These are the uncompromising standards that govern our mission.
        </p>
      </div>

      {/* PARALLAX STACK ENGINE */}
      <div className="relative">
        {PHILOSOPHY_DATA.map((item, index) => (
          <PhilosophyCard 
            key={item.id} 
            item={item} 
            index={index} 
            progress={smoothProgress} 
            total={PHILOSOPHY_DATA.length} 
          />
        ))}
      </div>
      
    </section>
>>>>>>> Stashed changes
  );
}