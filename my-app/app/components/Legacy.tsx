"use client";
import { motion } from "framer-motion";
import { PremiumCard } from "./ui/PremiumCard";
import { Sprout, Scale, Landmark } from "lucide-react";

const items = [
  {
    title: "Financial Literacy",
    desc: "Educating 10,000+ families on sustainable wealth creation.",
    icon: <Landmark className="h-8 w-8 text-gold" />,
  },
  {
    title: "Ethical Investing",
    desc: "Promoting Satvik portfolios that align with Dharmic values.",
    icon: <Scale className="h-8 w-8 text-gold" />,
  },
  {
    title: "Grassroots Growth",
    desc: "Reinvesting profits into local Bharat micro-economies.",
    icon: <Sprout className="h-8 w-8 text-gold" />,
  },
];

export function Legacy() {
  return (
    <section className="relative bg-earth py-32 text-white overflow-hidden">
      {/* Background Noise Texture for 'Heavy' Feel */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
      
      {/* Glowing Blob in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Animated Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold">Our Legacy</span>
          <h2 className="text-5xl lg:text-7xl font-serif">
            Building Wealth <br />
            <span className="text-white/50">Beyond Generations</span>
          </h2>
        </motion.div>

        {/* Staggered Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }} // Stagger effect
              viewport={{ once: true }}
            >
              <PremiumCard className="h-full group hover:border-gold/50 transition-colors">
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-gold/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}