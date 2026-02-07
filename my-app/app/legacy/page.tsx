"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Milestone, Scale, History, ScrollText, Trophy, Users, 
  TrendingUp, Globe, Award, Sparkles, Heart, Target,
  BookOpen, Briefcase, Lightbulb, Flame
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const TIMELINE = [
  {
    year: "2018",
    yearLabel: "Inception",
    title: "The Seed of Dharma",
    desc: "Founded with a singular vision: to decouple wealth creation from greed. We began with 10 families in rural Maharashtra, conducting our first workshop under a banyan tree.",
    icon: <History className="text-earth" />,
    stats: { families: 10, workshops: 1, locations: 1 },
    color: "#c5a059",
    achievements: [
      "Established core philosophy",
      "First Satvik investment framework",
      "Initial pilot in Maharashtra"
    ]
  },
  {
    year: "2019",
    yearLabel: "Growth",
    title: "The Financial Awakening",
    desc: "Registered as a Non-Profit. Launched the 'Satvik Wealth' algorithm, filtering out debt-heavy and unethical industries. Expanded to 5 states.",
    icon: <Scale className="text-earth" />,
    stats: { families: 150, workshops: 25, locations: 5 },
    color: "#d4a94c",
    achievements: [
      "Non-profit registration completed",
      "Satvik Wealth algorithm launched",
      "Expanded to 5 states",
      "First digital platform beta"
    ]
  },
  {
    year: "2021",
    yearLabel: "Impact",
    title: "10,000+ Families",
    desc: "Our grassroots workshops reached critical mass. We proved that ethical investing outperforms speculative gambling. National recognition received.",
    icon: <Milestone className="text-earth" />,
    stats: { families: "10,000+", workshops: 500, locations: 15 },
    color: "#e5b341",
    achievements: [
      "Crossed 10,000 families milestone",
      "National media coverage",
      "Partnership with 50+ NGOs",
      "First international interest"
    ]
  },
  {
    year: "2023",
    yearLabel: "Scale",
    title: "Digital Revolution",
    desc: "Launched AI-powered investment advisory. Integrated blockchain for transparent fund management. Reached 50,000 families across India.",
    icon: <TrendingUp className="text-earth" />,
    stats: { families: "50,000+", workshops: "2,000+", locations: 28 },
    color: "#f0c030",
    achievements: [
      "AI advisory platform launched",
      "Blockchain integration",
      "Mobile app with 100K+ downloads",
      "International expansion begins"
    ]
  },
  {
    year: "2024",
    yearLabel: "Future",
    title: "Global Sovereignty",
    desc: "Expanding beyond borders. Re-establishing the Indian ethos of 'Vasudhaiva Kutumbakam' (The World is One Family) in global finance.",
    icon: <ScrollText className="text-earth" />,
    stats: { families: "1L+", workshops: "5,000+", locations: 50 },
    color: "#c5a059",
    achievements: [
      "Global chapters established",
      "₹1000 Cr+ assets under guidance",
      "100+ certified trainers",
      "International recognition"
    ]
  },
];

const MILESTONES_DATA = [
  { icon: <Users className="w-6 h-6" />, value: "100,000+", label: "Families Empowered", color: "#c5a059" },
  { icon: <Globe className="w-6 h-6" />, value: "50+", label: "Locations Worldwide", color: "#d4a94c" },
  { icon: <Award className="w-6 h-6" />, value: "₹1000Cr+", label: "Assets Guided", color: "#e5b341" },
  { icon: <Trophy className="w-6 h-6" />, value: "5000+", label: "Workshops Conducted", color: "#f0c030" },
];

const CORE_PRINCIPLES = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Dharmic Finance",
    desc: "Investing aligned with eternal values, not quarterly reports"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Long-term Vision",
    desc: "Building generational wealth through patience and wisdom"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Financial Literacy",
    desc: "Empowering through education, not exploitation"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Ethical Screening",
    desc: "Rigorous filtering of debt-heavy and harmful industries"
  }
];

const TESTIMONIALS = [
  {
    quote: "This foundation didn't just teach me to invest—it taught me to think. My portfolio now reflects my values, and it's outperforming everything I tried before.",
    author: "Rajesh Kumar",
    role: "Small Business Owner, Jaipur",
    year: "2022"
  },
  {
    quote: "For the first time, I understood that wealth creation and spiritual growth aren't opposites. They're partners in building a meaningful life.",
    author: "Anita Deshmukh",
    role: "Teacher, Pune",
    year: "2023"
  },
  {
    quote: "The Satvik Wealth approach gave me confidence to manage my family's savings. We've grown 30% while staying true to our principles.",
    author: "Vikram Singh",
    role: "Engineer, Bangalore",
    year: "2024"
  }
];

export default function LegacyPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.8]);
  const heroY = useTransform(heroProgress, [0, 1], [0, -100]);

  // Smooth scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-advance active timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % TIMELINE.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-earth text-white font-sans selection:bg-gold/30 overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <motion.section 
        ref={heroRef}
        className="pt-40 pb-32 px-6 text-center relative overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Parallax Circles */}
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 border border-gold/10 rounded-full"
            style={{
              x: useTransform(scrollYProgress, [0, 1], [0, -100]),
              y: useTransform(scrollYProgress, [0, 1], [0, -200]),
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 border border-gold/5 rounded-full"
            style={{
              x: useTransform(scrollYProgress, [0, 1], [0, 100]),
              y: useTransform(scrollYProgress, [0, 1], [0, 150]),
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Story</span>
          </motion.div>

          <motion.h1 
            className="text-7xl lg:text-9xl font-serif text-gold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block hover:scale-110 transition-transform cursor-default">L</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">e</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">g</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">a</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">c</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">y</span>
          </motion.h1>

          <motion.p 
            className="text-white/60 mt-6 max-w-3xl mx-auto text-xl font-serif italic leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            "We are not writing a business history. We are continuing a civilization—where wealth serves dharma, not vice versa."
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gold/30 rounded-full p-1">
              <motion.div 
                className="w-1.5 h-3 bg-gold/60 rounded-full mx-auto"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="text-gold/40 text-xs tracking-wider uppercase">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* STATS OVERVIEW */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-serif text-gold mb-4">Impact at a Glance</h2>
            <p className="text-white/50 text-lg">Six years of relentless dedication</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES_DATA.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${milestone.color}20, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <motion.div 
                    className="mb-6 inline-block p-4 bg-gold/10 rounded-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: milestone.color }}
                  >
                    {milestone.icon}
                  </motion.div>

                  {/* Value */}
                  <div className="text-4xl font-bold mb-2 font-serif" style={{ color: milestone.color }}>
                    {milestone.value}
                  </div>

                  {/* Label */}
                  <div className="text-white/40 font-medium text-sm">
                    {milestone.label}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      style={{ backgroundColor: milestone.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-serif text-gold mb-4">Guiding Principles</h2>
            <p className="text-white/50 text-lg">The pillars that define our approach</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PRINCIPLES.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 bg-white/5 border border-gold/20 rounded-2xl hover:border-gold/40 transition-all duration-500"
              >
                <motion.div 
                  className="text-gold mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {principle.icon}
                </motion.div>
                <h3 className="text-2xl font-serif text-gold mb-3">{principle.title}</h3>
                <p className="text-white/40 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-6xl mx-auto px-6 py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full mb-8">
            <History className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Journey</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif text-gold mb-4">Evolution of Impact</h2>
          <p className="text-white/50 text-lg">From humble beginnings to global movement</p>
        </motion.div>

        {/* Animated Vertical Line */}
        <div className="absolute left-6 lg:left-1/2 top-32 bottom-0 w-px overflow-hidden">
          <motion.div 
            className="w-full bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0"
            style={{
              height: "100%",
              scaleY: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
              transformOrigin: "top"
            }}
          />
        </div>

        <div className="space-y-32">
          {TIMELINE.map((item, i) => {
            const isEven = i % 2 === 0;
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative flex flex-col lg:flex-row gap-10 items-start ${isEven ? "lg:text-right" : "lg:flex-row-reverse lg:text-left"}`}
              >
                {/* Content Side */}
                <div className="flex-1 lg:w-1/2 pl-16 lg:pl-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-gold/30 transition-all duration-500 backdrop-blur-sm"
                  >
                    {/* Glow on Hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl"
                      style={{ background: `radial-gradient(circle at ${isEven ? '100%' : '0%'} 50%, ${item.color}20, transparent 70%)` }}
                    />

                    {/* Year Badge */}
                    <div className="relative mb-4">
                      <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold font-bold tracking-wider text-sm">
                        {item.yearLabel} • {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative text-4xl lg:text-5xl font-serif text-gold mb-4 group-hover:text-gold/80 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="relative text-white/50 leading-relaxed mb-6 text-lg group-hover:text-white/70 transition-colors">
                      {item.desc}
                    </p>

                    {/* Stats */}
                    <div className={`relative grid grid-cols-3 gap-4 mb-6 ${isEven ? 'lg:justify-items-end' : 'lg:justify-items-start'}`}>
                      {Object.entries(item.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center lg:text-left">
                          <div className="text-2xl font-bold text-gold">{value}</div>
                          <div className="text-xs text-white/40 uppercase tracking-wider">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="relative space-y-2">
                      <div className="text-sm text-white/40 font-semibold uppercase tracking-wider mb-3">Key Achievements</div>
                      {item.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex items-center gap-2 text-white/60 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                          <span className="text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div 
                  className="absolute left-3 lg:left-1/2 lg:-translate-x-1/2 top-8 z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    {/* Pulsing Rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: item.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Main Circle */}
                    <div 
                      className="relative w-12 h-12 lg:w-20 lg:h-20 rounded-full border-4 border-earth flex items-center justify-center shadow-[0_0_40px_rgba(197,160,89,0.4)]"
                      style={{ backgroundColor: item.color }}
                    >
                      <span className="scale-75 lg:scale-100 text-earth">{item.icon}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Empty Side for Balance */}
                <div className="flex-1 lg:w-1/2 hidden lg:block" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-serif text-gold mb-4">Voices of Change</h2>
            <p className="text-white/50 text-lg">Stories from our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/30 transition-all duration-500"
              >
                {/* Quote Icon */}
                <div className="text-gold/30 text-6xl font-serif mb-4 leading-none">"</div>
                
                {/* Quote */}
                <p className="text-white/70 italic leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-gold mb-1">{testimonial.author}</div>
                  <div className="text-white/40 text-sm">{testimonial.role}</div>
                  <div className="text-gold/60 text-xs mt-2">{testimonial.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <Flame className="w-16 h-16 text-gold mx-auto mb-8" />
          <h2 className="text-5xl lg:text-6xl font-serif text-gold mb-6">
            Be Part of Our Legacy
          </h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Join thousands who are building wealth with purpose. Together, we're proving that ethics and prosperity are not opposites—they're partners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gold text-earth font-bold rounded-full hover:bg-gold/90 transition-colors text-lg shadow-[0_0_40px_rgba(197,160,89,0.3)]"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-gold/30 text-gold font-bold rounded-full hover:border-gold hover:bg-gold/10 transition-all text-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}