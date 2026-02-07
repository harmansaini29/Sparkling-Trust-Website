"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Sparkles, Flower, ArrowRight, Quote } from 'lucide-react';

// --- Types ---
interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image?: string;
  icon?: React.ReactNode;
  tags?: string[];
  type: 'text' | 'image' | 'logo';
}

// --- Data based on the image ---
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Rao',
    role: 'ENTREPRENEUR',
    location: 'MUMBAI',
    quote: "The financial literacy workshops opened my eyes, but the spiritual grounding gave me the courage to act. I have started my own textile business and now employ three other women from my village.",
    icon: <Flower className="w-6 h-6 text-yellow-500" />,
    type: 'text'
  },
  {
    id: '2',
    name: 'Meera Patel',
    role: 'ARTIST',
    location: 'JAIPUR',
    quote: "Sparkling Global Foundation is not just an organization; it is a family to me. It helped me build my business from scratch while staying true to my values.",
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Textile work context
    tags: ['IMPACT'],
    icon: <Heart className="w-5 h-5 text-yellow-400 fill-yellow-400" />,
    type: 'image'
  },
  {
    id: '3',
    name: 'Lakshmi Nair',
    role: 'HOMEMAKER',
    location: 'KERALA',
    quote: "Learning about sustainable investing aligned perfectly with my spiritual beliefs. I finally feel in control of my family's future.",
    icon: <Flower className="w-6 h-6 text-yellow-500" />,
    type: 'text'
  },
  {
    id: '4',
    name: 'Priya Singh',
    role: 'TEACHER',
    location: 'DELHI',
    quote: "I found a community that supports my dreams and honors my heritage. The foundation gave me the tools to lead with confidence. Today, I teach 40 students and help them find their own path.",
    type: 'logo' // Special styling for the LEAF_RK logo
  },
  {
    id: '5',
    name: 'Sunita Sharma',
    role: 'MENTOR',
    location: 'PUNE',
    quote: "Before joining, I felt isolated in my struggles. The women's circle provided a safe space to share, heal, and grow. Now, I mentor younger women entering the workforce.",
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
    type: 'text'
  },
  {
    id: '6',
    name: 'Riya Gupta',
    role: 'FINANCIAL ANALYST',
    location: 'BANGALORE',
    quote: "This foundation bridges the gap between modern finance and ancient wisdom. It is exactly what our generation needed.",
    image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Dancer context
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    type: 'image'
  }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const hoverVariants = {
  hover: { 
    y: -10,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

const VoicesSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fffcf5] py-20 px-4 sm:px-6 lg:px-8 font-serif relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#d4a017 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* Google Fonts Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-lato { font-family: 'Lato', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
            Voices of Empowerment: <br className="hidden md:block" />
            <span className="font-script text-yellow-500 text-5xl md:text-7xl ml-2 font-normal">Our Journey Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-6" />
          <p className="max-w-2xl mx-auto text-gray-500 font-lato text-lg mt-4">
            Real stories of financial independence and spiritual growth from the women who make the Sparkling Global Foundation a family.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {testimonials.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </motion.div>

        {/* Footer Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-cream-100 border-2 border-yellow-400/50 rounded-full font-lato font-bold text-gray-800 hover:shadow-lg transition-all duration-300"
          >
            <span>Read More Stories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

// --- Individual Card Component ---
const Card: React.FC<{ data: Testimonial }> = ({ data }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="break-inside-avoid relative bg-white rounded-xl shadow-sm border border-orange-50/50 overflow-hidden"
    >
      <motion.div variants={hoverVariants} className="h-full p-8 flex flex-col justify-between">
        
        {/* Top Content (Image or Icon/Logo) */}
        <div className="mb-6">
          {data.type === 'image' && data.image ? (
            <div className="relative -mx-8 -mt-8 mb-6 h-64 overflow-hidden group">
               <motion.img 
                 whileHover={{ scale: 1.1 }}
                 transition={{ duration: 0.6 }}
                 src={data.image} 
                 alt={data.name} 
                 className="w-full h-full object-cover" 
               />
               {data.tags && (
                 <div className="absolute bottom-4 left-4 bg-yellow-400 text-xs font-bold px-3 py-1 text-gray-900 uppercase tracking-wider">
                   {data.tags[0]}
                 </div>
               )}
            </div>
          ) : data.type === 'logo' ? (
             <div className="mb-4">
               <span className="text-3xl font-lato font-light tracking-[0.2em] text-yellow-600 flex items-center gap-2">
                 LEAF <Leaf className="fill-yellow-400 text-yellow-400" /> RK
               </span>
               <div className="h-0.5 w-full bg-gradient-to-r from-yellow-200 to-transparent mt-2"></div>
             </div>
          ) : (
             <div className="flex justify-between items-start">
               {data.icon}
               <Quote className="w-8 h-8 text-yellow-100 fill-yellow-50" />
             </div>
          )}

          <p className="font-playfair text-xl text-gray-700 italic leading-relaxed">
            "{data.quote}"
          </p>
        </div>

        {/* Author Info */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-end">
            <div>
              <h4 className="font-playfair font-bold text-lg text-gray-900">{data.name}</h4>
              <p className="font-lato text-xs text-gray-400 uppercase tracking-widest mt-1">
                {data.role} • {data.location}
              </p>
            </div>
            {data.icon && data.type !== 'text' && (
              <div className="opacity-80">{data.icon}</div>
            )}
          </div>
        </div>

        {/* Decorative corner accent for text cards */}
        {data.type === 'text' && (
           <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-50 to-transparent opacity-50 rounded-bl-full pointer-events-none" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default VoicesSection;