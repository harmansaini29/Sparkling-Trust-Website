"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, BookOpen, HandHeart, Heart, Leaf, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 'satark',
    title: 'Satark',
    tag: 'PROTECTION',
    description: 'Combating financial fraud through grassroots awareness camps.',
    icon: <Shield className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
    color: '#064E3B'
  },
  {
    id: 'saksham',
    title: 'Saksham',
    tag: 'EMPOWERMENT',
    description: 'Empowering women through skill development and micro-financing.',
    icon: <Users className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1200&auto=format&fit=crop',
    color: '#F97316'
  },
  {
    id: 'sanskar',
    title: 'Sanskar',
    tag: 'CULTURE',
    description: 'Connecting the youth with the timeless wisdom of Indian civilization.',
    icon: <BookOpen className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop',
    color: '#064E3B'
  },
  {
    id: 'sathi',
    title: 'Sathi',
    tag: 'WELFARE',
    description: 'A dedicated support network ensuring no one is left behind.',
    icon: <HandHeart className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop',
    color: '#F97316'
  },
  {
    id: 'sevalay',
    title: 'Sevalay',
    tag: 'SERVICE',
    description: 'A sanctuary where care meets compassion for the destitute.',
    icon: <Heart className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop',
    color: '#064E3B'
  },
  {
    id: 'shrushti',
    title: 'Shrushti',
    tag: 'NATURE',
    description: 'Restoring the balance of nature through mass plantation drives.',
    icon: <Leaf className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    color: '#F97316'
  }
];

export default function PillarsOfImpact() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#FDFCF9] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#F97316]"></span>
              <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em]">
                Our Initiatives
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#064E3B] leading-none drop-shadow-sm">
              Pillars of <span className="italic text-[#F97316]">Change</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#064E3B]/70 max-w-md font-medium pb-2 italic font-serif">
            "A holistic approach covering every aspect of human flourishing, societal dignity, and environmental restoration."
          </p>
        </div>

        {/* Fluid Accordion Container */}
        {/* Mobile: 800px height (prevents crushing), Desktop: 600px height */}
        <div className="flex flex-col lg:flex-row h-[850px] lg:h-[600px] gap-3 md:gap-4 w-full">
          {projects.map((project, index) => {
            const isActive = activeItem === index;
            
            return (
              <motion.div
                key={project.id}
                layout
                onClick={() => setActiveItem(index)}
                onMouseEnter={() => setActiveItem(index)}
                className={`relative rounded-3xl md:rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[0.32,0.72,0,1] shadow-2xl ${
                  isActive ? "lg:flex-[4] flex-[2]" : "lg:flex-[1] flex-[0.5]"
                }`}
              >
                {/* Background Image */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className={`object-cover transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-110 grayscale brightness-[0.4]'}`}
                  priority={isActive}
                />
                
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500" />
                {!isActive && <div className="absolute inset-0 bg-[#064E3B]/40 mix-blend-multiply transition-colors duration-500" />}

                {/* Content Container */}
                <div className="absolute inset-0 p-5 md:p-8 lg:p-10 flex flex-col justify-end">
                  
                  {/* Icon & Title Block */}
                  <div className={`flex items-center gap-4 transition-all duration-500 ${isActive ? 'mb-4' : 'mb-0 lg:rotate-[-90deg] lg:origin-left lg:absolute lg:bottom-12 lg:left-14'}`}>
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 backdrop-blur-xl border border-white/20 text-white transition-colors duration-500 shadow-xl ${isActive ? 'bg-[#F97316]' : 'bg-white/10'}`}>
                      {project.icon}
                    </div>
                    <h3 className={`font-serif text-white whitespace-nowrap transition-all duration-500 drop-shadow-lg ${isActive ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl opacity-100 lg:opacity-100'}`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Expanded Content (Only visible when active) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="overflow-hidden"
                      >
                        <span className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-md mb-4 border border-white/10">
                          {project.tag}
                        </span>
                        <p className="text-white/90 text-sm md:text-lg max-w-md leading-relaxed mb-6 drop-shadow-md">
                          {project.description}
                        </p>
                        <a href={`/programs/${project.id}`} className="inline-flex items-center gap-2 text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:text-[#F97316] transition-colors group">
                          Explore Program 
                          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}