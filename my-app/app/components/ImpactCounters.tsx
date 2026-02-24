"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Calendar, MapPin, Heart } from "lucide-react";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
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
    <span className="flex items-center justify-center">
      <span ref={nodeRef}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

// Data extracted from actual Excel Sheet
const stats = [
  { id: 1, value: 56412, suffix: "+", label: "Lives Impacted", icon: <Users className="w-6 h-6 text-[#F97316]" /> },
  { id: 2, value: 235, suffix: "+", label: "Events Organized", icon: <Calendar className="w-6 h-6 text-[#F97316]" /> },
  { id: 3, value: 11, suffix: "", label: "Cities Covered", icon: <MapPin className="w-6 h-6 text-[#F97316]" /> },
  { id: 4, value: 21, suffix: "", label: "Dedicated Volunteers", icon: <Heart className="w-6 h-6 text-[#F97316]" /> },
];

export function ImpactCounters() {
  return (
    <section className="py-24 bg-[#064E3B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-[length:30px_30px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 text-center lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-5 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F97316]/20 group-hover:border-[#F97316]/50 transition-all duration-500 group-hover:scale-110">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-2 drop-shadow-lg">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-[#F97316] text-[10px] font-bold uppercase tracking-[0.25em]">
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