"use client";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  PieChart, 
  ArrowRight, 
  Scale,
  Sparkles,
  Landmark
} from "lucide-react";

const PARTNERSHIP_TIERS = [
  {
    id: "individual",
    name: "Individual Impact",
    subtitle: "Micro-Philanthropy",
    desc: "Direct capital injection into grassroots programs like Satark and Saksham.",
    range: "₹1,000 - ₹50,000",
    icon: <Briefcase className="w-6 h-6" />,
    benefits: [
      "80G Tax Exemption Certificate",
      "Quarterly Impact Reports",
      "Direct Beneficiary Updates"
    ],
    color: "#064E3B",
    popular: false
  },
  {
    id: "patron",
    name: "Foundation Patron",
    subtitle: "Strategic Allocation",
    desc: "Fund an entire village workshop or sponsor a batch of women entrepreneurs.",
    range: "₹50,000 - ₹5,00,000",
    icon: <Landmark className="w-6 h-6" />,
    benefits: [
      "All Individual Benefits",
      "VIP Invitation to Annual Gala",
      "Dedicated Relationship Manager",
      "Name Plaque at Project Site"
    ],
    color: "#F97316",
    popular: true
  },
  {
    id: "corporate",
    name: "Corporate CSR",
    subtitle: "Institutional Partnership",
    desc: "Tailored CSR compliance projects aligning with your company's ESG goals.",
    range: "Custom Allocation",
    icon: <Building2 className="w-6 h-6" />,
    benefits: [
      "Complete CSR Compliance Documentation",
      "Custom ESG Impact Dashboard",
      "Employee Volunteering Integration",
      "Co-Branding Opportunities"
    ],
    color: "#064E3B",
    popular: false
  }
];

export default function ContributePage() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-[#064E3B] font-sans overflow-x-hidden selection:bg-[#F97316]/30">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-24 px-6 relative bg-[#064E3B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-[length:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F97316]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-md shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Capital With Conscience
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8"
          >
            Strategic <span className="italic text-[#F97316]">Philanthropy</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 font-serif italic max-w-3xl mx-auto leading-relaxed"
          >
            "Invest in measurable social yield. We convert your financial resources into engineered, transparent, and scalable grassroots impact."
          </motion.p>
        </div>
      </section>

      {/* 2. TRUST & ALLOCATION METRICS */}
      <section className="py-20 px-6 border-b border-black/5 bg-white relative z-20 -mt-8 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center pt-8 md:pt-0">
              <ShieldCheck className="w-12 h-12 text-[#F97316] mb-6" />
              <h3 className="font-sans font-black tracking-tighter text-4xl text-[#064E3B] mb-2">100%</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-[#064E3B]/60">Secure & Compliant</p>
              <p className="text-[#064E3B]/70 mt-4 text-sm max-w-xs leading-relaxed">Registered Section 8 entity under MCA. Fully audited annual financials.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center pt-8 md:pt-0">
              <Scale className="w-12 h-12 text-[#F97316] mb-6" />
              <h3 className="font-sans font-black tracking-tighter text-4xl text-[#064E3B] mb-2">80G & 12A</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-[#064E3B]/60">Tax Benefits</p>
              <p className="text-[#064E3B]/70 mt-4 text-sm max-w-xs leading-relaxed">All strategic contributions are eligible for maximum tax deductions under Indian Law.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center pt-8 md:pt-0">
              <PieChart className="w-12 h-12 text-[#F97316] mb-6" />
              <h3 className="font-sans font-black tracking-tighter text-4xl text-[#064E3B] mb-2">92%</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-[#064E3B]/60">Direct Program Allocation</p>
              <p className="text-[#064E3B]/70 mt-4 text-sm max-w-xs leading-relaxed">Maximum capital efficiency. We minimize administrative overhead to maximize impact.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. INVESTMENT VEHICLES (Partnership Tiers) */}
      <section className="py-32 px-6 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em]">Partnership Vehicles</span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#064E3B] mt-4 mb-6">Ways to Deploy Capital</h2>
            <p className="text-[#064E3B]/70 text-lg font-serif italic max-w-2xl mx-auto">Select a structured philanthropic vehicle that aligns with your individual or institutional social goals.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PARTNERSHIP_TIERS.map((tier, i) => (
              <motion.div 
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col p-10 rounded-[2.5rem] border ${tier.popular ? 'bg-[#064E3B] border-transparent text-white shadow-2xl scale-105 z-10' : 'bg-white border-black/10 text-[#064E3B] shadow-lg'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#F97316] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    Highest Impact Ratio
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${tier.popular ? 'bg-white/10 text-[#F97316]' : 'bg-[#064E3B]/5 text-[#064E3B]'}`}>
                  {tier.icon}
                </div>

                <div className="mb-2">
                  <h3 className="text-2xl font-serif font-bold">{tier.name}</h3>
                  <p className={`text-xs font-bold uppercase tracking-widest mt-2 ${tier.popular ? 'text-[#F97316]' : 'text-[#064E3B]/50'}`}>
                    {tier.subtitle}
                  </p>
                </div>

                <p className={`mt-4 mb-8 text-sm leading-relaxed ${tier.popular ? 'text-white/80' : 'text-[#064E3B]/70'}`}>
                  {tier.desc}
                </p>

                <div className={`py-6 border-y mb-8 ${tier.popular ? 'border-white/10' : 'border-black/5'}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${tier.popular ? 'text-white/50' : 'text-[#064E3B]/50'}`}>Typical Allocation</p>
                  <p className="font-sans font-black tracking-tighter text-3xl">
                    {tier.range}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${tier.popular ? 'bg-[#F97316]' : 'bg-[#064E3B]'}`} />
                      <span className={`text-sm ${tier.popular ? 'text-white/90' : 'text-[#064E3B]/80'}`}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 group ${
                  tier.popular 
                    ? 'bg-[#F97316] text-white hover:bg-white hover:text-[#064E3B]' 
                    : 'bg-[#064E3B]/5 text-[#064E3B] hover:bg-[#064E3B] hover:text-white'
                }`}>
                  Initiate Pledge
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BANKING / WIRE INSTRUCTIONS (Professional View) */}
      <section className="py-24 px-6 border-t border-black/5 bg-white">
        <div className="max-w-4xl mx-auto bg-[#FDFCF9] border border-black/10 p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif text-[#064E3B] mb-4">Direct Wire & Institutional Transfers</h3>
            <p className="text-[#064E3B]/70 text-sm font-sans max-w-xl mx-auto">
              For corporate matching, bulk CSR funds, or high-net-worth individual wire transfers, please use our official treasury details below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-white p-6 md:p-8 border border-black/5 rounded-2xl shadow-sm">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#064E3B]/50 mb-1">Account Name</p>
              <p className="font-serif text-lg font-bold text-[#064E3B] mb-6">Sparkle Era Global Foundation</p>

              <p className="text-[10px] font-bold uppercase tracking-widest text-[#064E3B]/50 mb-1">Bank Name</p>
              <p className="font-sans font-bold text-[#064E3B] mb-6">HDFC Bank Ltd.</p>
            </div>
            
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#064E3B]/50 mb-1">Account Number (Current)</p>
              <p className="font-sans font-black tracking-tighter text-2xl text-[#064E3B] mb-6">502000XXXXXXXX</p>

              <p className="text-[10px] font-bold uppercase tracking-widest text-[#064E3B]/50 mb-1">IFSC Code</p>
              <p className="font-sans font-black tracking-tighter text-xl text-[#064E3B] mb-6">HDFC000XXXX</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-[#064E3B]/60 italic font-serif">
              *Please email transaction receipts to <span className="font-bold text-[#F97316]">treasury@sparkleera.org</span> for immediate 80G receipt generation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}