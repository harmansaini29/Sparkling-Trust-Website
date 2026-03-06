"use client";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { Heart, Globe, Lightbulb, ShieldCheck } from "lucide-react";
import { useRef } from "react";

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
  },
  {
    id: 2,
    title: "Compassionate Capital",
    subtitle: "Energy in Motion",
    desc: "Capital is energy. We channel it strictly into ventures that heal the planet and restore dignity. Financial resources must serve as a tool for empowerment, never exploitation.",
    iconName: "heart",
    bg: "bg-[#FDFCF9]",
    text: "text-[#064E3B]",
    glow: "bg-[#064E3B]/5",
    borderColor: "border-black/5"
  },
  {
    id: 3,
    title: "Vedic Innovation",
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

interface CardProps {
  item: typeof PHILOSOPHY_DATA[0];
  index: number;
  progress: MotionValue<number>;
  total: number;
}

const PhilosophyCard = ({ item, index, progress, total }: CardProps) => {
  const targetScale = 1 - (total - index - 1) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const opacity = useTransform(progress, [index / total, 1], [1, 0.85]);

  return (
    <div 
      className="sticky flex justify-center items-start px-4 md:px-6 w-full"
      style={{ top: `calc(15vh + ${index * 50}px)`, height: '100vh' }}
    >
      <motion.div 
        style={{ scale, opacity }}
        className={`relative w-full max-w-5xl h-[500px] md:h-[550px] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.15)] flex flex-col justify-start overflow-hidden border origin-top will-change-transform ${item.bg} ${item.text} ${item.borderColor}`}
      >
        <div className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${item.glow}`} />
        <div className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-[100px] pointer-events-none ${item.glow}`} />

        <div className={`flex justify-between items-center w-full mb-8 pb-6 border-b ${item.borderColor}`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${item.bg === 'bg-[#064E3B]' ? 'bg-[#F97316]/20' : 'bg-[#064E3B]/10'}`}>
              <ShieldCheck className={`w-5 h-5 ${item.bg === 'bg-[#064E3B]' ? 'text-[#F97316]' : 'text-[#064E3B]'}`} />
            </div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Core Principle</span>
          </div>
          {/* REMOVED font-serif and italic, ADDED font-sans font-black tracking-tighter */}
          <span className="font-sans text-3xl md:text-4xl font-black tracking-tighter opacity-20">
            0{item.id}
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center w-full relative z-10 pt-4">
          <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border transition-all duration-500 hover:scale-105 ${item.bg === "bg-[#FDFCF9]" ? "bg-white text-[#F97316] border-black/5" : "bg-white/10 backdrop-blur-xl text-[#F97316] border-white/20"}`}>
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
            <p className={`text-base md:text-lg lg:text-xl leading-relaxed font-serif italic ${item.bg === "bg-[#FDFCF9]" ? "text-[#064E3B]/80" : "text-white/80"}`}>
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
    offset: ["start start", "end end"]
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });

  return (
    <section ref={containerRef} className="relative bg-[#F9FAFB] pb-32">
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

      <div className="relative">
        {PHILOSOPHY_DATA.map((item, index) => (
          <PhilosophyCard key={item.id} item={item} index={index} progress={smoothProgress} total={PHILOSOPHY_DATA.length} />
        ))}
      </div>
    </section>
  );
}