"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ShieldCheck, Lock, FileText, FileSignature, ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-[#FDFCF9] text-[#064E3B] font-sans flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
        
        {/* Secure Ambient Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#064E3B]/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full"
        >
          {/* Main Vault Container */}
          <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/5 p-8 md:p-16 relative overflow-hidden">
            
            {/* Top Warning Strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F97316] via-red-500 to-[#F97316]" />

            <div className="text-center mb-10">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-pulse" />
                <div className="w-24 h-24 bg-[#064E3B] rounded-2xl flex items-center justify-center relative shadow-2xl border border-white/20">
                  <Lock className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#064E3B] mb-4">Secured Vault</h1>
              <p className="text-lg text-[#064E3B]/60 max-w-lg mx-auto">
                The compliance portal is currently undergoing a security upgrade to implement verified access gateways.
              </p>
            </div>

            {/* Document Placeholders */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { name: "12A Registration Certificate", icon: FileText },
                { name: "80G Tax Exemption Certificate", icon: ShieldCheck },
                { name: "CSR-1 Authorization", icon: FileSignature },
                { name: "Section 8 Incorporation", icon: FileText }
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-black/5 bg-[#F9FAFB] opacity-60 grayscale">
                  <div className="p-3 bg-black/5 rounded-xl">
                    <doc.icon className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#064E3B] mb-1">{doc.name}</h3>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wider">
                      <Lock size={10} /> Access Restricted
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Status Footer */}
            <div className="bg-[#064E3B]/5 p-6 rounded-2xl text-center border border-[#064E3B]/10">
              <div className="flex items-center justify-center gap-3 text-[#F97316] font-bold uppercase tracking-widest text-xs mb-2">
                <Loader2 className="w-4 h-4 animate-spin" /> System Maintenance
              </div>
              <p className="text-sm text-[#064E3B]/70">
                Official documents will be available for secure download shortly. For immediate corporate compliance inquiries, please contact our administrative office directly.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#064E3B] hover:text-[#F97316] transition-colors">
                <ArrowLeft size={16} /> Return to Operations
              </Link>
            </div>

          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}