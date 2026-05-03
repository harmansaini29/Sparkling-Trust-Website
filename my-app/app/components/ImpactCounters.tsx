"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Globe, Award, Trophy } from "lucide-react";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, to, {
        duration: 3,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (val) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(val).toLocaleString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, to]);

  return (
    <span className="flex items-center justify-center tabular-nums">
      <span ref={nodeRef}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  { id: 1, value: 56411, suffix: "", label: "Lives Empowered", icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-[#F97316]" /> },
  { id: 2, value: 14, suffix: "", label: "Cities Reached", icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#F97316]" /> },
  { id: 3, value: 50060, suffix: "+", label: "Meals Served", icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-[#F97316]" /> },
  { id: 4, value: 235, suffix: "+", label: "Programs Conducted", icon: <Trophy className="w-5 h-5 md:w-6 md:h-6 text-[#F97316]" /> },
];

export function ImpactCounters() {
  return (
    <section className="py-16 md:py-24 bg-[#064E3B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-[length:30px_30px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#F97316]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Adjusted gaps and grid sizes for mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-4 sm:gap-x-8 text-center lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 sm:gap-5 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F97316]/20 group-hover:border-[#F97316]/50 transition-all duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.2)] shrink-0">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tighter text-white mb-1.5 md:mb-2 drop-shadow-lg">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-[#F97316] text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] opacity-90 group-hover:opacity-100 transition-opacity">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}