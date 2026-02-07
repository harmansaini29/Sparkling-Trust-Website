"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, Play, Pause, Award, Users, TrendingUp, Heart,
  MapPin, Calendar, DollarSign, Target, ChevronRight, Quote,
  Instagram, Facebook, Twitter, Share2, Sparkles, Eye, Download
} from 'lucide-react';

interface ImpactStat {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  caption: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const ProjectDetailPage: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const impactStats: ImpactStat[] = [
    { value: '1,00,000+', label: 'Women Empowered', icon: <Users className="w-8 h-8" />, color: '#c17a5c' },
    { value: '₹250 Cr', label: 'Economic Impact', icon: <TrendingUp className="w-8 h-8" />, color: '#7fa650' },
    { value: '450+', label: 'Villages Reached', icon: <MapPin className="w-8 h-8" />, color: '#4a7c7e' },
    { value: '95%', label: 'Success Rate', icon: <Target className="w-8 h-8" />, color: '#eebd2b' }
  ];

  const milestones: Milestone[] = [
    { year: '2020', title: 'Genesis', description: 'Foundation established with vision to empower rural women entrepreneurs' },
    { year: '2021', title: 'Expansion', description: 'Reached 50 villages across 5 states with financial literacy programs' },
    { year: '2022', title: 'Digital Revolution', description: 'Launched digital platform connecting women entrepreneurs to markets' },
    { year: '2023', title: 'Scale', description: 'Crossed 1 Lakh beneficiaries milestone with sustainable impact' },
    { year: '2024', title: 'Innovation', description: 'Introduced AI-powered business advisory and micro-financing solutions' }
  ];

  const mediaGallery: MediaItem[] = [
    { 
      type: 'video', 
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      caption: 'Journey of Transformation: Women entrepreneurs share their success stories'
    },
    { 
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
      caption: 'Workshop on Digital Marketing for Rural Entrepreneurs'
    },
    { 
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      caption: 'Community gathering celebrating successful business launches'
    },
    { 
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      caption: 'Financial literacy training session in rural Maharashtra'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "This program didn't just teach me business skills - it reignited my confidence. Today, my textile business employs 15 women from my village.",
      author: 'Sunita Devi',
      role: 'Entrepreneur, Rajasthan',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      quote: "From household savings to a thriving bakery business. The spiritual grounding alongside financial training made all the difference.",
      author: 'Priya Sharma',
      role: 'Baker & Business Owner, UP',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      quote: "I learned to combine ancient wisdom with modern finance. My jewelry business now exports internationally.",
      author: 'Lakshmi Nair',
      role: 'Artisan Jeweler, Kerala',
      avatar: 'https://i.pravatar.cc/150?img=9'
    }
  ];

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f6] font-sans overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#c17a5c] via-[#eebd2b] to-[#7fa650] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c17a5c]/90 via-[#eebd2b]/80 to-[#7fa650]/90" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }} />
          
          {/* Animated Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <button className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 group">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </button>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-8 animate-fadeInUp">
            <Sparkles className="w-5 h-5 text-[#eebd2b]" />
            <span className="text-white font-bold tracking-wider uppercase text-sm">Flagship Initiative</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 animate-fadeInUp leading-tight" style={{ animationDelay: '0.1s' }}>
            Project Saksham
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 italic mb-8 animate-fadeInUp font-light tracking-wide" style={{ animationDelay: '0.2s' }}>
            Paisa ki Pathshala & Woman Entrepreneurship
          </p>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            A transformative journey empowering over 1 Lakh women entrepreneurs through comprehensive 
            financial literacy, digital business skills, and micro-financing support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button className="px-8 py-4 bg-white text-[#c17a5c] rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
              Get Involved
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30">
              Download Report
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mx-auto animate-scroll" />
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section ref={statsRef} className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c17a5c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
              Impact by <span className="italic text-[#c17a5c]">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600">Measurable change, lasting transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-gray-200 overflow-hidden group-hover:-translate-y-2">
                  {/* Decorative Corner */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-all duration-500 group-hover:scale-150"
                    style={{ backgroundColor: stat.color }}
                  />

                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="text-5xl font-bold mb-2 font-serif" style={{ color: stat.color }}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 font-semibold uppercase tracking-wide text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#c17a5c]/10 rounded-full">
                <span className="text-[#c17a5c] font-bold text-sm tracking-wider uppercase">Our Approach</span>
              </div>

              <h2 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
                Empowering Through <span className="italic text-[#c17a5c]">Education</span> & <span className="italic text-[#7fa650]">Action</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Project Saksham goes beyond traditional skill training. We combine ancient Indian wisdom with 
                modern financial literacy, creating a holistic ecosystem that nurtures both the mind and the business.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our three-pillar approach includes comprehensive financial education, hands-on business development 
                support, and access to micro-financing opportunities that turn household savings into thriving enterprises.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-[#c17a5c]">
                  <Award className="w-8 h-8 text-[#c17a5c] mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Training Sessions</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-[#7fa650]">
                  <Heart className="w-8 h-8 text-[#7fa650] mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c17a5c]/20 to-[#7fa650]/20 rounded-3xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Women in training"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#eebd2b] rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-xs text-white font-semibold">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Stories in <span className="italic text-[#eebd2b]">Motion</span>
            </h2>
            <p className="text-xl text-gray-400">Witness the transformation firsthand</p>
          </div>

          {/* Main Media Display */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
            {mediaGallery[activeMedia].type === 'video' ? (
              <div className="relative">
                <video
                  ref={videoRef}
                  className="w-full h-[600px] object-cover"
                  src={mediaGallery[activeMedia].url}
                  poster={mediaGallery[activeMedia].thumbnail}
                />
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all duration-300 group"
                >
                  <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {isVideoPlaying ? (
                      <Pause className="w-12 h-12 text-gray-900" />
                    ) : (
                      <Play className="w-12 h-12 text-gray-900 ml-1" />
                    )}
                  </div>
                </button>
              </div>
            ) : (
              <img
                src={mediaGallery[activeMedia].url}
                alt={mediaGallery[activeMedia].caption}
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            )}

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-xl text-white font-medium">{mediaGallery[activeMedia].caption}</p>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mediaGallery.map((media, index) => (
              <button
                key={index}
                onClick={() => setActiveMedia(index)}
                className={`relative rounded-xl overflow-hidden group transition-all duration-300 ${
                  activeMedia === index ? 'ring-4 ring-[#eebd2b]' : 'ring-2 ring-transparent hover:ring-gray-600'
                }`}
              >
                <img
                  src={media.type === 'video' ? media.thumbnail : media.url}
                  alt={media.caption}
                  className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c17a5c]/5 to-[#7fa650]/5" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="italic text-[#c17a5c]">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Five years of relentless impact</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#c17a5c] via-[#eebd2b] to-[#7fa650]" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100">
                    <div className="inline-block px-4 py-2 bg-[#c17a5c] text-white rounded-full font-bold text-sm mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#eebd2b] rounded-full border-4 border-white shadow-lg z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#c17a5c] to-[#7fa650] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Quote className="w-16 h-16 mx-auto mb-6 text-white/50" />
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Voices of <span className="italic">Change</span>
            </h2>
            <p className="text-xl text-white/80">Real stories from real entrepreneurs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                <Quote className="w-10 h-10 text-white/30 mb-4" />
                <p className="text-lg text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full border-4 border-white/30"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-[#eebd2b]" />
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Join the <span className="italic text-[#eebd2b]">Movement</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Be part of a revolution that's transforming lives and rebuilding communities 
            through financial independence and spiritual wisdom.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="px-10 py-5 bg-[#eebd2b] text-gray-900 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3 group">
              <span>Become a Partner</span>
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 flex items-center gap-3">
              <Download className="w-5 h-5" />
              <span>Download Brochure</span>
            </button>
          </div>

          {/* Social Share */}
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(12px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out backwards;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;