"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Heart, TrendingUp, BookOpen, Sparkles, Users } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
}

const PillarsOfImpact: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'saksham',
      title: 'Project-Saksham',
      subtitle: 'Paisa ki Pathshala & Woman Entrepreneurship',
      tag: 'FLAGSHIP INITIATIVE',
      description: 'A transformative journey empowering over 1 Lakh women entrepreneurs. We provide comprehensive financial literacy, digital business skills, and micro-financing support.',
      icon: <Sparkles className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1200&auto=format&fit=crop',
      color: '#c17a5c'
    },
    {
      id: 'satark',
      title: 'Project-Satark',
      subtitle: 'Financial Awareness & Protection',
      tag: 'VIGILANCE',
      description: 'Combating financial fraud through grassroots awareness camps and digital safety workshops across rural India. Securing hard-earned wealth.',
      icon: <TrendingUp className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
      color: '#2c3e50'
    },
    {
      id: 'sakshar',
      title: 'Project-Sakshar',
      subtitle: 'Education & Rural Development',
      tag: 'EDUCATION',
      description: "Building rural futures through modern education infrastructure and sports development programs that nurture tomorrow's leaders.",
      icon: <BookOpen className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
      color: '#7fa650'
    },
    {
      id: 'sanskar',
      title: 'Project-Sanskar',
      subtitle: 'Spiritual Heritage & Cultural Preservation',
      tag: 'SPIRITUALITY',
      description: 'Reconnecting with spiritual roots through meditation retreats, ancient wisdom workshops, and cultural preservation initiatives.',
      icon: <Heart className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1518134706977-248356b784a0?q=80&w=1200&auto=format&fit=crop',
      color: '#3a5f7d'
    },
    {
      id: 'sevahay',
      title: 'Project-Sevahay',
      subtitle: 'Community Welfare & Food Security',
      tag: 'WELFARE',
      description: 'Nourishing souls and bodies alike by ensuring food security for the underprivileged through community kitchens and support systems.',
      icon: <Users className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop',
      color: '#4a7c7e'
    }
  ];

  // Faster Interval: 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 320; 
      const gap = 24;
      const offset = focusedIndex * (cardWidth + gap);
      
      carouselRef.current.scrollTo({
        left: offset - (carouselRef.current.offsetWidth / 2) + (cardWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [focusedIndex]);

  const handleCardClick = (index: number) => {
    setFocusedIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c17a5c]" />
          <div className="mx-4 text-[#c17a5c]">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c17a5c]" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          Our Pillars of Impact
        </h2>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Weaving together financial independence, spiritual heritage, and social welfare
          into a tapestry of sustainable change.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-[1400px] mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block" />

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => {
            const isFocused = index === focusedIndex;
            const isAdjacent = Math.abs(index - focusedIndex) === 1 || 
                             (focusedIndex === 0 && index === projects.length - 1) ||
                             (focusedIndex === projects.length - 1 && index === 0);

            return (
              <div
                key={project.id}
                onClick={() => handleCardClick(index)}
                className={`snap-center flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer ${
                  isFocused ? 'w-[90vw] sm:w-[500px] md:w-[600px]' : 'w-[280px] sm:w-[300px]'
                }`}
                style={{
                  transform: isFocused 
                    ? 'scale(1.02) translateY(-10px)'
                    : isAdjacent 
                    ? 'scale(0.95) translateY(0)' 
                    : 'scale(0.9) translateY(5px)',
                  opacity: isFocused ? 1 : isAdjacent ? 0.85 : 0.6,
                  zIndex: isFocused ? 20 : isAdjacent ? 10 : 5
                }}
              >
                {isFocused ? (
                  // Expanded Featured Card
                  <div className="relative h-[480px] sm:h-[520px] rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    </div>

                    {/* Button 1: Heart Icon */}
                    <button 
                      suppressHydrationWarning
                      className="absolute top-6 right-6 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
                    >
                      <Heart className="w-5 h-5 text-[#c17a5c]" />
                    </button>

                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-[#c17a5c]/90 text-white text-xs font-bold tracking-wider rounded-full uppercase">
                          {project.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                        {project.title}
                      </h3>

                      <p className="text-base sm:text-lg text-gray-300 italic mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6 max-w-lg">
                        {project.description}
                      </p>

                      {/* Button 2: Explore Impact */}
                      <button 
                        suppressHydrationWarning
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#c17a5c] hover:bg-[#a66a4f] text-white rounded-full font-semibold transition-all duration-300 hover:gap-4 w-fit group/btn"
                      >
                        <span>Explore Impact</span>
                        <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ) : (
                  // Compact Card
                  <div className="relative h-[480px] rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500">
                    <div 
                      className="absolute inset-0"
                      style={{ backgroundColor: project.color }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                      <div style={{ color: project.color }}>
                        {project.icon}
                      </div>
                    </div>

                    <div className="absolute top-6 right-6">
                      <span className="inline-block px-3 py-1 bg-white/90 text-gray-800 text-[10px] font-bold tracking-wider rounded-full uppercase">
                        {project.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Button 3: Learn More */}
                      <button 
                        suppressHydrationWarning
                        className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all duration-300 group/link"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Button 4: Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              suppressHydrationWarning
              onClick={() => handleCardClick(index)}
              className={`transition-all duration-500 rounded-full ${
                index === focusedIndex
                  ? 'w-12 h-3 bg-[#c17a5c]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PillarsOfImpact;