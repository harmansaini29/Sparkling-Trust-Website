"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1, name: 'Ananya Rao', role: 'ENTREPRENEUR',
    quote: "The financial literacy workshops opened my eyes, but the spiritual grounding gave me the courage to act. I now employ three other women.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
  },
  {
    id: 2, name: 'Rajesh Patil', role: 'FARMER',
    quote: "Project Satark saved my entire village from loan sharks. We now understand banking, insurance, and how to protect our hard-earned harvest.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
  },
  {
    id: 3, name: 'Priya Singh', role: 'EDUCATOR',
    quote: "Bringing Project Sanskar to our school changed the students' perspective. They are learning to navigate the digital world without losing their roots.",
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&q=80"
  },
  {
    id: 4, name: 'Sunita Sharma', role: 'MENTOR',
    quote: "Before joining, I felt isolated. The women's circle provided a safe space to grow. Now, I mentor younger women entering the workforce.",
    image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=800&q=80"
  }
];

// MUST be default export to match your page.tsx import
export default function Reviews() {
  return (
    <section className="py-32 bg-[#064E3B] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F97316]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <Sparkles size={14} className="text-[#F97316]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Impact Stories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Voices of <span className="italic text-[#F97316]">Empowerment</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex w-full overflow-hidden pb-12">
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#064E3B] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#064E3B] to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={index} className="pr-6 md:pr-8">
              <div className="w-[85vw] md:w-[500px] lg:w-[600px] bg-[#FDFCF9] rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.2)] shrink-0 transition-transform duration-500 hover:-translate-y-2 border border-black/5">
                <Quote className="absolute -top-10 -right-10 w-48 h-48 text-[#064E3B]/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <Quote className="w-10 h-10 text-[#F97316] mb-8" />
                  <p className="text-2xl md:text-3xl font-serif text-[#064E3B] leading-snug mb-10">
                    "{item.quote}"
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-6 pt-6 border-t border-black/10">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-lg">
                    <Image src={item.image} alt={item.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif text-[#064E3B] mb-1">{item.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#F97316]">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}