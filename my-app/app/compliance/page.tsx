"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProtectionGate } from "../components/ui/ProtectionGate";
import { FileCheck, Shield, Award, Download } from "lucide-react";

// Mock Data for Certificates
const DOCS = [
  { title: "SEBI Registration", id: "INZ00029833", type: "Regulatory", date: "2024" },
  { title: "NSE Membership", id: "MEM-99281", type: "Exchange", date: "2023" },
  { title: "BSE Clearing", id: "CL-8821", type: "Exchange", date: "2023" },
  { title: "NISM Series V-A", id: "CERT-112", type: "Compliance", date: "2025" },
  { title: "Incorporation Deed", id: "CIN-U67100", type: "Legal", date: "2012" },
  { title: "ISO 9001:2015", id: "QM-221", type: "Quality", date: "2024" },
];

export default function CompliancePage() {
  return (
    <ProtectionGate>
      <main className="min-h-screen bg-[#F5F5F0] text-earth font-sans selection:bg-gold/30">
        <Navbar />

        <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-700 text-[10px] font-bold uppercase tracking-widest border border-green-500/20 mb-4">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/> Verified & Active
              </span>
              <h1 className="text-5xl font-serif text-earth">
                Regulatory <span className="text-gold italic">Compliance</span>
              </h1>
            </div>
            <p className="text-earth/50 max-w-md text-sm text-right">
              Authorized personnel view only. These documents verify our standing with the Securities and Exchange Board of India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCS.map((doc, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-black/5 hover:border-gold/50 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-colors" />
                
                <div className="w-12 h-12 bg-earth text-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Shield size={24} />
                </div>

                <div className="space-y-1 mb-8">
                  <span className="text-[10px] uppercase tracking-widest text-earth/40 font-bold">{doc.type}</span>
                  <h3 className="text-xl font-serif font-bold">{doc.title}</h3>
                  <p className="text-gold font-mono text-sm">{doc.id}</p>
                </div>

                <div className="pt-6 border-t border-dashed border-black/10 flex justify-between items-center">
                  <span className="text-xs font-bold text-earth/30">Valid thru {doc.date}</span>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-gold transition-colors">
                    Download <Download size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </ProtectionGate>
  );
}