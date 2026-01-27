"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Leaf, Shield } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Initiatives() {
  return (
    <section className="py-32 bg-[#FDFCF9] relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="mb-20 space-y-4">
          <span className="text-gold text-xs uppercase tracking-[0.5em] font-black">Our Impact</span>
          <h2 className="text-5xl lg:text-7xl font-serif text-earth">
            Global Vision, <br />
            <span className="italic text-gold">Local Action.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <motion.div variants={itemVariants} className="md:col-span-2 relative group overflow-hidden rounded-[2.5rem] bg-earth text-white p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#C5A059_0%,transparent_40%)] opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                <TrendingUp className="text-gold" />
              </div>
              <h3 className="text-4xl font-serif mb-2">Financial Literacy Drive</h3>
              <p className="text-white/60 max-w-md">Educating over 50,000 students across rural Bharat about the power of compounding.</p>
            </div>
            <ArrowUpRight className="self-end text-gold w-10 h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.div>

          <motion.div variants={itemVariants} className="md:row-span-2 relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-10 hover:border-gold/50 transition-colors duration-500 flex flex-col items-center text-center justify-center gap-6">
            <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center animate-bounce-slow">
              <Leaf size={48} className="text-gold" />
            </div>
            <h3 className="text-3xl font-serif text-earth mb-2">Satvik Wealth</h3>
            <p className="text-earth/50 text-sm leading-relaxed">Investing strictly in companies that align with Dharmic values—non-harming and sustainable.</p>
            <button className="mt-4 px-6 py-2 rounded-full border border-black/10 text-xs font-bold uppercase tracking-widest hover:bg-earth hover:text-white transition-colors">View Portfolio</button>
          </motion.div>

          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2.5rem] bg-[#F5F5F0] p-8 flex flex-col justify-center hover:bg-[#EBEBE5] transition-colors">
            <Users className="text-earth/20 w-32 h-32 absolute -bottom-10 -right-10" />
            <h4 className="text-6xl font-serif text-gold font-bold">10k+</h4>
            <span className="text-earth font-bold uppercase tracking-widest text-sm mt-2">Families Empowered</span>
          </motion.div>

          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2.5rem] bg-gold p-8 flex flex-col justify-between text-earth group">
            <Shield className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-2xl font-serif font-bold">Zero Debt</h3>
              <p className="text-earth/70 text-sm mt-1">Our foundation operates on a 100% debt-free model.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}