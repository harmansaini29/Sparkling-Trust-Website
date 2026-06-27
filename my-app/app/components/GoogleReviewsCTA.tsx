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
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-black/[0.07] rounded-2xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] mb-8">
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

            {/* Right: CTA button */}
            <div className="flex flex-col items-center gap-3 shrink-0">
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
              <p className="text-white/30 text-[11px] font-medium tracking-wide text-center">
                Opens Google Reviews — takes 30 seconds
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
