"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowUpRight, FolderOpen, Filter, Search, TrendingUp,
  Users, Target, Zap, Sparkles, Eye, Calendar, MapPin,
  CheckCircle, Clock, Rocket, Lightbulb, BarChart3
} from "lucide-react";
import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";

// Enhanced project data with more details
const PROJECTS = [
  { 
    id: 1, 
    category: "Fintech", 
    title: "Dharma Trade App", 
    status: "Live",
    tagline: "Ethical investing at your fingertips",
    image: "/india-pattern.png",
    impact: "50K+ Active Users",
    year: "2023",
    location: "Pan-India",
    color: "#c5a059",
    metrics: { users: "50K+", transactions: "₹100Cr+", rating: "4.8/5" },
    tech: ["React Native", "Blockchain", "AI Advisory"]
  },
  { 
    id: 2, 
    category: "Education", 
    title: "Gurukul Finance", 
    status: "Scaling",
    tagline: "Ancient wisdom meets modern finance",
    image: "/india-pattern.png",
    impact: "100+ Workshops",
    year: "2022",
    location: "15 States",
    color: "#d4a94c",
    metrics: { students: "10K+", workshops: "100+", satisfaction: "95%" },
    tech: ["EdTech Platform", "Video Streaming", "Gamification"]
  },
  { 
    id: 3, 
    category: "Agriculture", 
    title: "Kisan Credit Net", 
    status: "Pilot",
    tagline: "Empowering farmers with fair financing",
    image: "/india-pattern.png",
    impact: "5K Farmers",
    year: "2024",
    location: "Maharashtra",
    color: "#7fa650",
    metrics: { farmers: "5K", loans: "₹25Cr", default: "<2%" },
    tech: ["Microfinance", "Mobile App", "SMS Platform"]
  },
  { 
    id: 4, 
    category: "Algorithm", 
    title: "Satvik Index Fund", 
    status: "Beta",
    tagline: "Algorithmic filtering of ethical stocks",
    image: "/india-pattern.png",
    impact: "₹500Cr AUM",
    year: "2023",
    location: "Digital",
    color: "#e5b341",
    metrics: { aum: "₹500Cr", returns: "18% CAGR", stocks: "150+" },
    tech: ["AI Screening", "Real-time Analysis", "Portfolio Optimizer"]
  },
  { 
    id: 5, 
    category: "Real Estate", 
    title: "Vedic Townships", 
    status: "Planning",
    tagline: "Sustainable communities rooted in dharma",
    image: "/india-pattern.png",
    impact: "3 Townships",
    year: "2025",
    location: "Bangalore, Pune",
    color: "#c17a5c",
    metrics: { units: "500+", green: "100%", price: "₹50L-2Cr" },
    tech: ["Smart City", "Solar Powered", "Rainwater Harvest"]
  },
  { 
    id: 6, 
    category: "Research", 
    title: "Global Wealth Report", 
    status: "Published",
    tagline: "Annual insights on ethical investing trends",
    image: "/india-pattern.png",
    impact: "10K Downloads",
    year: "2024",
    location: "Global",
    color: "#f0c030",
    metrics: { downloads: "10K+", pages: "150+", citations: "50+" },
    tech: ["Data Analytics", "Market Research", "Visualization"]
  },
];

const CATEGORIES = ["All", "Fintech", "Education", "Agriculture", "Algorithm", "Real Estate", "Research"];
const STATUSES = ["All", "Live", "Scaling", "Pilot", "Beta", "Planning", "Published"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#FDFCF9] text-earth font-sans overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-72 h-72 bg-earth/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6 relative z-10">
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/20 bg-white shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} className="text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Portfolio Overview</span>
          </motion.div>

          <motion.h1 
            className="text-6xl lg:text-8xl font-serif leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="text-gold italic">Ventures</span>
          </motion.h1>

          <motion.p 
            className="text-xl lg:text-2xl text-earth/60 font-serif italic leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "From algorithms to agriculture, every project serves the singular goal of ethical prosperity."
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: <Target />, value: "6", label: "Active Projects" },
              { icon: <Users />, value: "75K+", label: "Lives Impacted" },
              { icon: <TrendingUp />, value: "₹700Cr+", label: "Total Impact" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-xl mb-3 text-gold">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-xs text-earth/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* FILTERS & SEARCH */}
        <motion.div 
          className="max-w-7xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white rounded-3xl shadow-lg border border-black/5 p-6 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-earth/40" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-earth/5 rounded-2xl border-2 border-transparent focus:border-gold/30 focus:bg-white transition-all outline-none text-earth placeholder:text-earth/40"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-earth/60 text-sm font-semibold">
                <Filter size={16} />
                <span>Filter by:</span>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gold text-earth shadow-lg scale-105'
                        : 'bg-earth/5 text-earth/60 hover:bg-earth/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="w-px h-8 bg-earth/10" />

              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {STATUSES.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedStatus === status
                        ? 'bg-earth text-white shadow-lg scale-105'
                        : 'bg-earth/5 text-earth/60 hover:bg-earth/10'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between pt-4 border-t border-black/5">
              <span className="text-sm text-earth/60">
                Showing <span className="font-bold text-gold">{filteredProjects.length}</span> of {PROJECTS.length} projects
              </span>
              
              {/* View Toggle */}
              <div className="flex gap-2 bg-earth/5 rounded-full p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    viewMode === "grid" ? 'bg-white shadow-md' : 'text-earth/60'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    viewMode === "list" ? 'bg-white shadow-md' : 'text-earth/60'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className={`grid gap-8 ${viewMode === "grid" ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProjects.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i}
              isHovered={hoveredCard === project.id}
              onHover={() => setHoveredCard(project.id)}
              onLeave={() => setHoveredCard(null)}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-earth/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <FolderOpen size={40} className="text-earth/30" />
            </div>
            <h3 className="text-2xl font-serif text-earth/60 mb-2">No projects found</h3>
            <p className="text-earth/40">Try adjusting your filters or search query</p>
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  );
}

// Enhanced Project Card Component with 3D Effect
function ProjectCard({ 
  project, 
  index, 
  isHovered,
  onHover,
  onLeave,
  viewMode
}: { 
  project: typeof PROJECTS[0]; 
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  viewMode: "grid" | "list";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onLeave();
  };

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-80 h-64 md:h-auto relative overflow-hidden bg-earth/5">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/50 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {project.status}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-gold text-xs font-bold uppercase tracking-widest">{project.category}</span>
                <h3 className="text-3xl font-serif mt-2 group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="text-earth/60 italic mt-2">{project.tagline}</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-earth text-white flex items-center justify-center group-hover:bg-gold transition-all group-hover:rotate-45 duration-300 shadow-lg">
                <ArrowUpRight size={20} />
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-black/5">
              {Object.entries(project.metrics).map(([key, value], i) => (
                <div key={i}>
                  <div className="text-xl font-bold text-gold">{value}</div>
                  <div className="text-xs text-earth/40 uppercase tracking-wider">{key}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-earth/5 rounded-full text-xs font-semibold text-earth/60">
                  {tech}
                </span>
              ))}
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-6 mt-6 text-sm text-earth/40">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={14} />
                <span>{project.impact}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
        style={{ backgroundColor: `${project.color}40` }}
      />

      {/* Image Area */}
      <div className="h-72 relative overflow-hidden bg-earth/5">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status Badge */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/50 flex items-center gap-2 shadow-lg">
          <motion.div 
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {project.status}
        </div>

        {/* Impact Badge */}
        <div className="absolute top-6 right-6 bg-gold/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-earth shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.impact}
        </div>

        {/* Hover Overlay Info */}
        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center gap-4 text-white text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 relative" style={{ transform: "translateZ(30px)" }}>
        <div className="mb-6">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">{project.category}</span>
          <h3 className="text-2xl lg:text-3xl font-serif mt-2 mb-2 group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          <p className="text-earth/60 italic text-sm leading-relaxed">{project.tagline}</p>
        </div>

        {/* Metrics Mini Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-black/5">
          {Object.entries(project.metrics).map(([key, value], i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-bold text-gold">{value}</div>
              <div className="text-[10px] text-earth/40 uppercase tracking-wider">{key}</div>
            </div>
          ))}
        </div>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 2).map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-earth/5 rounded-full text-[10px] font-semibold text-earth/60 hover:bg-gold/10 hover:text-gold transition-colors">
              {tech}
            </span>
          ))}
          {project.tech.length > 2 && (
            <span className="px-3 py-1 bg-earth/5 rounded-full text-[10px] font-semibold text-earth/40">
              +{project.tech.length - 2}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex justify-between items-center pt-6 border-t border-black/5">
          <span className="text-xs font-bold text-earth/30 group-hover:text-gold transition-colors">View Case Study</span>
          <motion.button 
            className="w-12 h-12 rounded-full bg-earth text-white flex items-center justify-center group-hover:bg-gold transition-all shadow-lg"
            whileHover={{ rotate: 45, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Decorative Corner */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-tl-full"
        style={{ backgroundColor: project.color }}
      />
    </motion.div>
  );
}