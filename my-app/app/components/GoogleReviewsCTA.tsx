"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Star, ExternalLink, Quote } from "lucide-react";

const GOOGLE_REVIEW_LINK = "https://share.google/dNbfp5FA55ZyCJzYQ";

const GOOGLE_REVIEWS = [
  {
    name: "Priya Kulkarni",
    role: "Workshop Participant",
    date: "March 2025",
    rating: 5,
    text: "The Satark workshop was a life-changing experience. The team's dedication to spreading financial awareness is truly commendable. Highly recommend to every family in Pune.",
  },
  {
    name: "Ravi Deshmukh",
    role: "Farmer, Nashik",
    date: "January 2025",
    rating: 5,
    text: "Sparkle Era Foundation's work in our village was extraordinary. They educated us about loan frauds and banking schemes. Our whole community is now more aware and protected.",
  },
  {
    name: "Meena Joshi",
    role: "School Teacher",
    date: "November 2024",
    rating: 5,
    text: "Project Sanskar brought such positive change to my students. The sessions on digital literacy with Indian values are unique. This is the kind of work India needs right now.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-[#F97316] fill-[#F97316]" : "text-gray-300 fill-gray-300"}
        />
      ))}
    </div>
  );
}

// Google "G" SVG — official brand colors
function GoogleIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

export function GoogleReviewsCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#FDFCF9] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F97316]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#064E3B]/[0.04] rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.025]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* — Header — */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-3 bg-white border border-black/[0.07] rounded-2xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <GoogleIcon size={24} />
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#F97316] fill-[#F97316]" />
                ))}
              </div>
              <span className="text-[#0A192F] font-black text-lg leading-none">4.9</span>
              <div className="w-px h-4 bg-black/10" />
              <span className="text-[#0A192F]/50 text-sm font-medium">on Google</span>
            </div>

            <a
              href="https://www.linkedin.com/in/sparkle-era-global-foundation-5498393a5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#0077B5]/5 border border-black/[0.07] hover:border-[#0077B5]/30 rounded-2xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span className="text-[#0A192F] group-hover:text-[#0077B5] font-bold text-sm tracking-wide transition-colors">Connect on LinkedIn</span>
            </a>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#064E3B] leading-tight mb-5">
            Trusted by the{" "}
            <span className="italic text-[#F97316]">Community</span>
          </h2>
          <p className="text-[#064E3B]/60 text-base sm:text-lg md:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
            Thousands of families across Bharat have experienced transformation through our programs.
            Here's what they say — in their own words.
          </p>
        </motion.div>

        {/* — Review Cards — */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-20"
        >
          {GOOGLE_REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative bg-white border border-black/[0.06] rounded-[2rem] p-7 md:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

              {/* Quote icon */}
              <Quote className="absolute -top-3 -right-3 w-24 h-24 text-[#064E3B]/[0.03] rotate-12 group-hover:rotate-0 group-hover:scale-110 group-hover:text-[#064E3B]/[0.06] transition-all duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Top: Google G + stars */}
                <div className="flex items-center justify-between mb-5">
                  <GoogleIcon size={20} />
                  <StarRating rating={review.rating} />
                </div>

                {/* Review text */}
                <p className="text-[#064E3B]/80 font-serif text-base md:text-lg leading-relaxed mb-7 flex-grow">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-5 border-t border-black/[0.06]">
                  {/* Avatar initials */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#064E3B] to-[#0a6e53] flex items-center justify-center text-white font-black text-sm shrink-0 shadow-sm">
                    {review.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-[#064E3B] text-sm leading-tight">{review.name}</div>
                    <div className="text-[#F97316] text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {review.role}
                    </div>
                  </div>
                  <span className="ml-auto text-[10px] text-[#0A192F]/30 font-medium shrink-0">
                    {review.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* — CTA Block — */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#064E3B] rounded-[2.5rem] overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F97316]/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[60px]" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 sm:px-12 py-12 md:py-14">
            {/* Left: text */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <GoogleIcon size={22} />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#F97316] fill-[#F97316]" />
                  ))}
                </div>
                <span className="text-white/60 text-sm font-medium">4.9 · Google Reviews</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight mb-3">
                Your Voice Matters
              </h3>
              <p className="text-white/60 font-serif italic text-base sm:text-lg max-w-lg leading-relaxed">
                Share your experience and help us reach more families across Bharat who need our programs.
              </p>
            </div>

            {/* Right: CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className="flex flex-col items-center gap-2">
                <a
                  href={GOOGLE_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#F97316] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(249,115,22,0.35)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <GoogleIcon size={18} />
                  Write a Review
                  <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
                <span className="text-white/40 text-[11px] font-medium tracking-wide">Google Reviews</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/sparkle-era-global-foundation-5498393a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#0077B5] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(0,119,181,0.35)] hover:shadow-[0_15px_40px_rgba(0,119,181,0.5)] hover:bg-[#00669c] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  Follow on LinkedIn
                  <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
                <span className="text-white/40 text-[11px] font-medium tracking-wide">Official Profile</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
