import React from 'react';
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ArrowLeft, ArrowRight, Shield, Users, HandHeart, Heart, Leaf, BookOpen, AlertCircle, Target, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const PROGRAM_DATABASE: Record<string, any> = {
  satark: {
    title: "Project Satark", subtitle: "Financial & Cyber Fraud Awareness Initiative",
    desc: "With the rapid rise of financial frauds, misleading investment schemes, banking scams, and cyber financial crimes, financial literacy and digital awareness have become essential for every citizen.",
    problemStatement: "Citizens lack the knowledge to identify capital market scams, banking frauds (OTP, phishing, KYC), and cyber crimes, leaving them vulnerable to severe financial losses.",
    approachList: [
      "Identifying capital market and investment scams",
      "Recognizing banking frauds (OTP scams, phishing, loan scams, KYC frauds)",
      "Understanding cyber financial crimes and digital payment risks",
      "Safe investing practices and responsible participation in capital markets",
      "Secure online banking and digital transaction habits",
      "Basic understanding of capital market fundamentals"
    ],
    color: "#064E3B", icon: <Shield className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600",
    stats: [{ v: '10,00,000', l: 'Target Individuals' }]
  },
  saksham: {
    title: "Project Saksham", subtitle: "Women Empowerment Initiative",
    desc: "Saksham is designed to empower women through financial education, skill development, and small business support to help them build sustainable and independent livelihoods.",
    problemStatement: "Women often lack practical knowledge and confidence to take control of their financial future and build self-reliance.",
    approachList: [
      "Financial literacy and money management awareness",
      "Basic understanding of capital markets and safe investing practices",
      "Skill development for income-generating opportunities",
      "Small business awareness and entrepreneurial guidance",
      "Support for building self-reliance and economic confidence"
    ],
    color: "#F97316", icon: <Users className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600",
    stats: [{ v: '1,00,000', l: 'Target Women' }]
  },
  sanskar: {
    title: "Project Sanskar", subtitle: "Indian Cultural Values & Youth Development",
    desc: "Sanskar is a holistic school engagement initiative aimed at nurturing students with strong Indian cultural values while preparing them to navigate the challenges of the modern digital era.",
    problemStatement: "In a time of rapid technological change and social media influence, students require structured guidance that keeps them rooted in tradition while building future-ready skills.",
    approachList: [
      "Awareness of Indian heritage and strong cultural value systems",
      "Ethical thinking and responsible citizenship",
      "Leadership qualities and self-discipline",
      "Managing digital distractions and responsible online behavior",
      "Career clarity and goal setting",
      "Introduction to entrepreneurship and innovation mindset",
      "Communication skills and confidence building"
    ],
    color: "#064E3B", icon: <BookOpen className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600",
    stats: [{ v: '10,00,000', l: 'Target Students' }]
  },
  sathi: {
    title: "Project Sathi", subtitle: "Educational Support Initiative",
    desc: "Sathi is dedicated to supporting underprivileged students by ensuring they have the essential resources and encouragement needed to continue their education without interruption.",
    problemStatement: "Many students face academic challenges not due to lack of ability, but due to limited access to basic educational materials and guidance.",
    approachList: [
      "Distribution of school materials (notebooks, bags, stationery)",
      "Educational assistance to reduce dropout risks",
      "Academic motivation and awareness on the importance of continuous schooling",
      "Support for students from economically weaker backgrounds"
    ],
    color: "#0369a1", icon: <HandHeart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600",
    stats: [{ v: '12,000', l: 'Target Students' }]
  },
  sevalay: {
    title: "Project Sevalay", subtitle: "Hunger Relief & Nutrition Support",
    desc: "Sevalay is committed to reducing hunger and supporting vulnerable communities through organized food donation and distribution drives.",
    problemStatement: "Access to basic nutrition remains a challenge for many individuals and families, requiring immediate and organized food support.",
    approachList: [
      "Distribution of freshly prepared meals to underprivileged communities",
      "Food support during special drives, events, and emergencies",
      "Collaboration with local volunteers for organized outreach",
      "Promoting awareness about hunger and community participation",
      "Encouraging responsible food contribution and zero food wastage initiatives"
    ],
    color: "#be185d", icon: <Heart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600",
    stats: [{ v: '5,00,000', l: 'Target Beneficiaries' }]
  },
  shrushti: {
    title: "Project Shrushti Savardhan", subtitle: "Environmental Sustainability & Tree Plantation",
    desc: "Shrushti Savardhan is a structured environmental initiative focused on promoting ecological balance and long-term sustainability through organized tree plantation drives.",
    problemStatement: "Increasing environmental challenges such as climate change, rising pollution, and loss of green cover require urgent and responsible environmental action.",
    approachList: [
      "Organized tree plantation drives in schools, communities, and public spaces",
      "Promoting environmental awareness and climate responsibility",
      "Encouraging youth participation in sustainability efforts",
      "Supporting long-term ecological balance through green initiatives",
      "Fostering a culture of environmental responsibility and conservation"
    ],
    color: "#15803d", icon: <Leaf className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600",
    stats: [{ v: '1,00,000', l: 'Target Trees' }]
  }
};

export async function generateStaticParams() {
  return Object.keys(PROGRAM_DATABASE).map((slug) => ({
    slug: slug,
  }));
}
// Keep your PROGRAM_DATABASE and generateStaticParams code at the top as it is.

// 1. Make the function async
// 2. Type params as a Promise
export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  // 3. Await the params before using them!
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const program = PROGRAM_DATABASE[slug];

  // Properly return the Next.js 404 component if not found
  if (!program) return notFound();

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans">
      <Navbar />
      
      {/* HERO BANNER */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom right, ${program.color}ee, #050505fa)` }} />
          <Image src={program.image} alt={program.title} fill className="object-cover mix-blend-overlay opacity-50" priority />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white pt-20">
          <Link href="/programs" className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/20 transition-all border border-white/20">
            <ArrowLeft className="w-4 h-4" /> Back to Initiatives
          </Link>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4">{program.title}</h1>
          <p className="text-2xl md:text-3xl text-[#F97316] italic mb-8 font-serif">{program.subtitle}</p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">{program.desc}</p>
        </div>
      </section>

      {/* PROBLEM & APPROACH */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 bg-white p-10 rounded-[3rem] shadow-xl border border-black/5 flex flex-col justify-center">
            <AlertCircle className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#064E3B]/50 mb-2">The Challenge</h3>
            <h2 className="text-4xl font-serif text-[#064E3B] mb-6">Problem Statement</h2>
            <p className="text-lg text-[#064E3B]/70 leading-relaxed">{program.problemStatement}</p>
          </div>

          <div className="md:col-span-7 bg-[#064E3B] p-12 rounded-[3rem] shadow-xl text-white">
            <Target className="w-12 h-12 text-[#F97316] mb-6" />
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]/70 mb-2">The Solution</h3>
            <h2 className="text-4xl font-serif mb-8">Our Approach</h2>
            <ul className="space-y-4">
              {program.approachList.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4 text-white/80 text-lg leading-relaxed">
                  <CheckCircle2 className="w-6 h-6 text-[#F97316] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TARGET */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-[#064E3B] mb-12">Measurable Target</h2>
          <div className="flex justify-center">
            {program.stats.map((stat: any, i: number) => (
              <div key={i} className="bg-[#FDFCF9] px-16 py-10 rounded-[2rem] shadow-lg border border-black/5">
                <div className="text-6xl font-serif font-bold text-[#F97316] mb-2">{stat.v}</div>
                <div className="text-sm uppercase tracking-widest font-bold text-[#064E3B]/60">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVITE SECTION */}
      <section className="py-24 bg-[#064E3B] text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Drive the Change</h2>
            <p className="text-white/60 mb-10 text-lg">Want to implement this program in your community or institution? Partner with us to make it happen.</p>
            <Link href="/get-involved?tab=invite" className="inline-flex bg-[#F97316] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#064E3B] transition-colors items-center gap-3 mx-auto">
                Request a Program <ArrowRight size={18} />
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}