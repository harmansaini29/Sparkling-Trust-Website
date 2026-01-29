"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Milestone, Scale, History, ScrollText } from "lucide-react";

const TIMELINE = [
  {
    year: "Inception",
    title: "The Seed of Dharma",
    desc: "Founded with a singular vision: to decouple wealth creation from greed. We began with 10 families in rural Maharashtra.",
    icon: <History className="text-earth" />,
  },
  {
    year: "Growth",
    title: "The Financial Awakening",
    desc: "Registered as a Non-Profit. Launched the 'Satvik Wealth' algorithm, filtering out debt-heavy and unethical industries.",
    icon: <Scale className="text-earth" />,
  },
  {
    year: "Impact",
    title: "10,000+ Families",
    desc: "Our grassroots workshops reached critical mass. We proved that ethical investing outperforms speculative gambling.",
    icon: <Milestone className="text-earth" />,
  },
  {
    year: "Future",
    title: "Global Sovereignty",
    desc: "Expanding beyond borders. Re-establishing the Indian ethos of 'Vasudhaiva Kutumbakam' (The World is One Family) in global finance.",
    icon: <ScrollText className="text-earth" />,
  },
];

export default function LegacyPage() {
  return (
    <main className="min-h-screen bg-earth text-white font-sans selection:bg-gold/30">
      <Navbar />
      
      {/* HERO */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl lg:text-9xl font-serif text-gold opacity-90"
        >
          Legacy
        </motion.h1>
        <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg font-serif italic">
          "We are not writing a business history. We are continuing a civilization."
        </p>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 pb-40 relative">
        {/* Vertical Line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0" />

        <div className="space-y-24">
          {TIMELINE.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col lg:flex-row gap-10 items-center ${i % 2 === 0 ? "lg:text-right" : "lg:flex-row-reverse lg:text-left"}`}
            >
              {/* Content Side */}
              <div className="flex-1 lg:w-1/2 pl-12 lg:pl-0 lg:pr-0">
                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-2 block">{item.year}</span>
                <h3 className="text-4xl font-serif mb-4">{item.title}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>

              {/* Center Icon */}
              <div className="absolute left-2 lg:left-1/2 lg:-translate-x-1/2 z-10 w-8 h-8 lg:w-16 lg:h-16 rounded-full bg-gold border-4 border-earth flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.3)] shrink-0">
                <span className="scale-50 lg:scale-100">{item.icon}</span>
              </div>

              {/* Empty Side for Balance */}
              <div className="flex-1 lg:w-1/2 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}