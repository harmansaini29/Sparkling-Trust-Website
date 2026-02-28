"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  History, Scale, TrendingUp, Globe, Users, 
  Award, Trophy, Shield, Target, BookOpen, 
  Leaf, Sparkles, Flame
} from "lucide-react";
import { useRef } from "react";

// --- OFFICIAL NGO DATA ---
const TIMELINE = [
  {
    year: "2021",
    yearLabel: "Inception",
    title: "The Seed of Empowerment",
    desc: "Established in Pune with a singular vision: to build a financially aware and socially empowered India. We began by conducting grassroots workshops for local communities.",
    icon: <History className="w-6 h-6 md:w-8 md:h-8 text-[#064E3B]" />,
    stats: { volunteers: "10+", workshops: 5, locations: 1 },
    color: "#F97316", // Saffron
    achievements: [
      "Official Section 8 Incorporation",
      "Core principles established",
      "First pilot programs in Maharashtra"
    ]
  },
  {
    year: "2023",
    yearLabel: "Growth",
    title: "Grassroots Expansion",
    desc: "Scaled our flagship programs, Satark and Saksham, across multiple districts. Delivered financial awareness directly to farmers, women, and rural youth.",
    icon: <Scale className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    stats: { lives: "10,000+", workshops: 85, locations: 5 },
    color: "#064E3B", // Deep Green
    achievements: [
      "Crossed 10,000 lives impacted milestone",
      "Launch of 'Paisa ki Pathshala'",
      "Partnership with 15+ rural schools"
    ]
  },
  {
    year: "2025",
    yearLabel: "Impact",
    title: "56,000+ Lives Touched",
    desc: "A massive milestone reaching over 56,000 individuals across 11 cities. Successfully organized 235+ programs ranging from cyber awareness to massive food drives.",
    icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#064E3B]" />,
    stats: { lives: "56,412", events: "235+", cities: 11 },
    color: "#F97316", // Saffron
    achievements: [
      "50,060+ Meals served via Sevalay",
      "3,500+ Financial fraud workshops",
      "Extensive school integration (Sanskar)"
    ]
  },
  {
    year: "2030",
    yearLabel: "Vision",
    title: "A Sovereign Bharat",
    desc: "Expanding beyond state borders. Re-establishing the Indian ethos of self-reliance and financial wisdom across thousands of villages.",
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    stats: { target: "1 Million+", branches: 50, impact: "Pan-India" },
    color: "#064E3B", // Deep Green
    achievements: [
      "Targeting 10 Lakh individuals for Satark",
      "National school curriculum integration",
      "1,00,000 trees for Shrushti Savardhan"
    ]
  },
];

const MILESTONES_DATA = [
  { icon: <Users className="w-8 h-8" />, value: "56,412", label: "Lives Empowered", color: "#F97316" },
  { icon: <Globe className="w-8 h-8" />, value: "11", label: "Cities Reached", color: "#064E3B" },
  { icon: <Award className="w-8 h-8" />, value: "50,060", label: "Meals Served", color: "#F97316" },
  { icon: <Trophy className="w-8 h-8" />, value: "235+", label: "Programs Conducted", color: "#064E3B" },
];

const CORE_PRINCIPLES = [
  { icon: <Shield className="w-8 h-8" />, title: "Financial Vigilance", desc: "Protecting citizens from cyber-crimes and financial frauds through deep education." },
  { icon: <Target className="w-8 h-8" />, title: "Women's Independence", desc: "Building sustainable livelihoods through skill training and micro-finance awareness." },
  { icon: <BookOpen className="w-8 h-8" />, title: "Cultural Roots", desc: "Nurturing youth with strong Dharmic values and ethical leadership skills." },
  { icon: <Leaf className="w-8 h-8" />, title: "Ecological Balance", desc: "Taking action for the environment through mass plantation and conservation drives." }
];

const TESTIMONIALS = [
  { quote: "Through Project Saksham, I learned not just to save, but to run my own small business. I am now independent and supporting my family's education.", author: "Sunita Deshmukh", role: "Small Business Owner, Pune", year: "2023" },
  { quote: "The Satark workshop in our village opened our eyes to banking frauds. Our farmers are now secure and know how to protect their hard-earned money.", author: "Rajesh Patil", role: "Sarpanch, Rural Maharashtra", year: "2024" },
  { quote: "Project Sanskar didn't just teach my students about modern skills; it connected them back to our rich Indian heritage and values.", author: "Vikram Singh", role: "School Principal, Talegaon", year: "2024" }
];

export default function LegacyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null); // NEW: Scoped ref for accurate timeline filling
  
  // Global scroll progress for top progress bar
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Hero parallax logic
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.8]);
  const heroY = useTransform(heroProgress, [0, 1], [0, -100]);

  // Timeline-specific scroll logic (Fixes the bug where the line fills too early/late)
  const { scrollYProgress: timelineProgress } = useScroll({ target: timelineRef, offset: ["start center", "end end"] });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFCF9] text-[#064E3B] font-sans selection:bg-[#F97316]/30 overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#F97316] z-50 origin-left" style={{ scaleX }} />

      {/* Floating Ambient Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#F97316]/30 rounded-full blur-[1px]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <motion.section 
        ref={heroRef}
        className="pt-48 pb-32 px-6 text-center relative overflow-hidden bg-[#064E3B]"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F97316]/10 blur-[120px] rounded-full pointer-events-none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-5xl mx-auto">
          
          <motion.div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-md shadow-xl" whileHover={{ scale: 1.05 }}>
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-white text-sm font-semibold tracking-widest uppercase">The Sparkle Era Story</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-white mb-6 leading-none">
            Our <span className="italic text-[#F97316]">Legacy</span>
          </h1>

          <p className="text-white/70 mt-8 max-w-3xl mx-auto text-xl md:text-2xl font-serif italic leading-relaxed">
            "We believe that real change begins with knowledge, responsibility, and collective action. This is the timeline of our grassroots revolution."
          </p>

        </motion.div>
      </motion.section>

      {/* IMPACT METRICS OVERVIEW */}
      <section className="py-24 px-6 relative bg-white border-y border-black/5 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES_DATA.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-10 bg-[#FDFCF9] border border-black/5 rounded-[2rem] overflow-hidden shadow-xl"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${milestone.color}15, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-white shadow-md border border-black/5 text-[#F97316]">
                    {milestone.icon}
                  </div>
                  <div className="text-5xl font-bold mb-3 font-serif" style={{ color: milestone.color }}>
                    {milestone.value}
                  </div>
                  <div className="text-[#064E3B]/60 font-bold uppercase tracking-widest text-xs">
                    {milestone.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#064E3B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-serif text-white mb-6">Guiding Principles</h2>
            <p className="text-white/60 text-lg md:text-xl font-serif italic">The philosophical pillars that dictate our every action.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PRINCIPLES.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#F97316]/40 hover:bg-white/10 transition-all duration-500 backdrop-blur-md"
              >
                <div className="text-[#F97316] mb-6 bg-white/10 inline-block p-4 rounded-2xl">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{principle.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE (Fixed Mobile Layout & Scroll Bug) */}
      <section ref={timelineRef} className="max-w-7xl mx-auto px-4 md:px-6 py-32 relative bg-[#FDFCF9]">
        <div className="text-center mb-24 relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#064E3B]/5 border border-[#064E3B]/10 rounded-full mb-8">
            <History className="w-4 h-4 text-[#F97316]" />
            <span className="text-[#064E3B] text-sm font-semibold tracking-wider uppercase">Our Journey</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-serif text-[#064E3B]">Evolution of Impact</h2>
        </div>

        <div className="relative">
          {/* Animated Vertical Line (Now perfectly synced to timeline ref) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-black/5 rounded-full md:-translate-x-1/2 overflow-hidden z-0">
            <motion.div 
              className="w-full bg-[#F97316]"
              style={{ height: "100%", scaleY: timelineProgress, transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-24 relative z-10 py-10">
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0;
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  // Mobile: Everything stacks right of the line. Desktop: Alternates sides.
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${isEven ? "md:text-right" : "md:flex-row-reverse md:text-left"}`}
                >
                  
                  {/* Center Icon (Responsive positioning) */}
                  <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 z-20 flex items-center justify-center">
                     <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white flex items-center justify-center shadow-2xl" style={{ backgroundColor: item.color }}>
                        {item.icon}
                     </div>
                  </div>

                  {/* Content Container (Pushed right on mobile to make room for icon) */}
                  <div className="flex-1 md:w-1/2 pl-20 md:pl-0 w-full pt-2">
                    <div className="group relative p-8 md:p-10 bg-white border border-black/5 shadow-xl rounded-[2.5rem] hover:border-[#F97316]/30 transition-all duration-500">
                      
                      <div className={`relative mb-6 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="inline-block px-5 py-2.5 bg-[#FDFCF9] border border-black/5 shadow-sm rounded-full text-[#064E3B] font-bold tracking-widest text-xs uppercase">
                          {item.yearLabel} • {item.year}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#064E3B] mb-4 group-hover:text-[#F97316] transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-[#064E3B]/70 leading-relaxed mb-8 text-base md:text-lg">
                        {item.desc}
                      </p>

                      <div className={`grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-black/5 ${isEven ? 'md:justify-items-end' : 'md:justify-items-start'}`}>
                        {Object.entries(item.stats).map(([key, value], idx) => (
                          <div key={idx}>
                            <div className="text-xl md:text-2xl font-bold" style={{ color: item.color }}>{value}</div>
                            <div className="text-[10px] text-[#064E3B]/50 uppercase tracking-widest font-bold mt-1">{key}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className={`flex items-center gap-3 text-[#064E3B]/80 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                            <span className="text-sm font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Side for Desktop Balance */}
                  <div className="flex-1 md:w-1/2 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VOICES OF CHANGE */}
      <section className="py-32 px-6 relative bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-serif text-[#064E3B] mb-4">Voices of Change</h2>
            <p className="text-[#064E3B]/50 text-lg font-serif italic">Real stories from the communities we serve</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="p-10 bg-[#FDFCF9] border border-black/5 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-500">
                <div className="text-[#F97316]/30 text-7xl font-serif mb-6 leading-none h-10">"</div>
                <p className="text-[#064E3B]/80 italic leading-relaxed mb-8 text-lg font-serif">
                  {testimonial.quote}
                </p>
                <div className="pt-6 border-t border-black/10">
                  <div className="font-bold text-[#064E3B] text-lg">{testimonial.author}</div>
                  <div className="text-[#F97316] text-xs font-bold uppercase tracking-widest mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 px-6 bg-[#064E3B] text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Flame className="w-16 h-16 text-[#F97316] mx-auto mb-8 animate-pulse" />
          <h2 className="text-5xl lg:text-7xl font-serif mb-6">Be Part of Our Legacy</h2>
          <p className="text-xl text-white/70 mb-12 font-serif italic leading-relaxed">
            Join thousands of volunteers, educators, and leaders who are building an empowered India. Together, we can take financial and social literacy to the last mile.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/get-involved?tab=volunteer" className="px-10 py-5 bg-[#F97316] text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-[#064E3B] transition-colors shadow-2xl">
              Get Involved
            </a>
            <a href="/contact" className="px-10 py-5 border-2 border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}