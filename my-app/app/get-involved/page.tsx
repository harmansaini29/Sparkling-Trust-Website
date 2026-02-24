"use client";
import { useState, useEffect, Suspense } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Heart, Building2, UserPlus, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

// --- REUSABLE, PROFESSIONAL UI COMPONENTS ---
const FormInput = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full bg-[#FDFCF9] border border-black/10 rounded-xl px-6 py-4 focus:border-[#F97316] outline-none text-[#064E3B] placeholder:text-[#064E3B]/40 transition-all hover:bg-white focus:bg-white focus:ring-4 focus:ring-[#F97316]/10"
  />
);

const FormSelect = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...props}
    className="w-full bg-[#FDFCF9] border border-black/10 rounded-xl px-6 py-4 focus:border-[#F97316] outline-none text-[#064E3B]/70 appearance-none transition-all hover:bg-white focus:bg-white focus:ring-4 focus:ring-[#F97316]/10"
  >
    {children}
  </select>
);

const FormTextarea = ({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className="w-full bg-[#FDFCF9] border border-black/10 rounded-xl px-6 py-4 focus:border-[#F97316] outline-none text-[#064E3B] placeholder:text-[#064E3B]/40 resize-none transition-all hover:bg-white focus:bg-white focus:ring-4 focus:ring-[#F97316]/10"
  />
);

function GetInvolvedContent() {
  const searchParams = useSearchParams();
  const defaultTab = (searchParams?.get("tab") as "volunteer" | "invite" | "csr") || "volunteer";
  
  const [activeTab, setActiveTab] = useState<"volunteer" | "invite" | "csr">(defaultTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (searchParams?.get("tab")) setActiveTab(searchParams.get("tab") as any);
  }, [searchParams]);

  // FIXED: Dynamic WhatsApp Routing for all 3 forms
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    let message = "";

    // Generate specific message based on active tab
    if (activeTab === "volunteer") {
      message = `*New Volunteer Application* 🙋‍♂️\n\n*Name:* ${formData.get("name")}\n*Phone:* ${formData.get("phone")}\n*Email:* ${formData.get("email")}\n*City:* ${formData.get("city")}\n*Area of Interest:* ${formData.get("interest")}`;
    } else if (activeTab === "invite") {
      message = `*Program Invitation Request* 🎯\n\n*Organization:* ${formData.get("orgName")}\n*Contact Person:* ${formData.get("contactPerson")}\n*Phone:* ${formData.get("phone")}\n*Email:* ${formData.get("email")}\n*Location:* ${formData.get("location")}\n*Program Required:* ${formData.get("program")}\n*Preferred Date:* ${formData.get("date")}`;
    } else if (activeTab === "csr") {
      message = `*CSR Collaboration Inquiry* 🤝\n\n*Company:* ${formData.get("company")}\n*Corporate Email:* ${formData.get("email")}\n*Details:* ${formData.get("details")}`;
    }

    const PHONE_NUMBER = "918888899695";

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto text-center relative min-h-screen">
      <AnimatePresence>
        {isSuccess && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-28 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold tracking-widest text-sm">
            <CheckCircle size={20} /> Request securely routed to WhatsApp!
          </motion.div>
        )}
      </AnimatePresence>

      <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-2 mb-4">
        <span className="w-8 h-[1px] bg-[#F97316]" /> Join The Movement <span className="w-8 h-[1px] bg-[#F97316]" />
      </span>
      <h1 className="text-5xl md:text-7xl font-serif mb-16 text-[#064E3B] leading-tight">
        Get <span className="italic text-[#F97316]">Involved</span>
      </h1>
      
      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {[
          { id: "volunteer", icon: UserPlus, label: "Volunteer" },
          { id: "invite", icon: Heart, label: "Invite a Program" },
          { id: "csr", icon: Building2, label: "CSR Collaboration" }
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)} 
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 ${activeTab === tab.id ? "bg-[#064E3B] text-white shadow-xl scale-105 border-transparent" : "bg-white text-[#064E3B]/60 border border-black/5 hover:border-[#F97316]/40 hover:text-[#064E3B]"}`}
          >
            <tab.icon size={16} /> {tab.label}
          </button>
        ))}
      </div>

      {/* FORMS ENGINE */}
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-black/5 text-left relative overflow-hidden">
        {!isMounted ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
            <Loader2 className="w-10 h-10 text-[#F97316] animate-spin mb-4" />
            <p className="text-sm font-bold uppercase tracking-widest text-[#064E3B]/40">Loading Secure Form...</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            
            {/* VOLUNTEER FORM */}
            {activeTab === "volunteer" && (
              <motion.form key="vol" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-serif text-[#064E3B] mb-2">Become a Volunteer</h3>
                  <p className="text-[#064E3B]/60 text-sm">Join our grassroots network to drive impact in Maharashtra.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput required name="name" type="text" placeholder="Full Name" />
                  <FormInput required name="phone" type="tel" placeholder="Phone Number" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput required name="email" type="email" placeholder="Email Address" />
                  <FormInput required name="city" type="text" placeholder="City / District" />
                </div>
                <FormSelect required name="interest" defaultValue="">
                  <option value="" disabled>Select Area of Interest</option>
                  <option value="satark">Project Satark (Financial Literacy)</option>
                  <option value="saksham">Project Saksham (Women Empowerment)</option>
                  <option value="sanskar">Project Sanskar (School Values)</option>
                  <option value="sevalay">Project Sevalay (Food Drives)</option>
                  <option value="plantation">Shrushti Savardhan (Tree Plantation)</option>
                  <option value="general">General Volunteering</option>
                </FormSelect>
                <SubmitButton isSubmitting={isSubmitting} text="Submit Application" />
              </motion.form>
            )}

            {/* INVITE FORM */}
            {activeTab === "invite" && (
              <motion.form key="inv" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-serif text-[#064E3B] mb-2">Host an Initiative</h3>
                  <p className="text-[#064E3B]/60 text-sm">Bring our certified literacy programs to your institution.</p>
                </div>
                <FormInput required name="orgName" type="text" placeholder="Organization / Institution Name" />
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput required name="contactPerson" type="text" placeholder="Contact Person" />
                  <FormInput required name="phone" type="tel" placeholder="Phone Number" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput required name="email" type="email" placeholder="Official Email" />
                  <FormInput required name="location" type="text" placeholder="Location / Address" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormSelect required name="program" defaultValue="">
                    <option value="" disabled>Program Required</option>
                    <option value="satark">Satark (Cyber & Fraud Awareness)</option>
                    <option value="saksham">Saksham (Women Skills)</option>
                    <option value="sanskar">Sanskar (Youth Heritage)</option>
                    <option value="sathi">Sathi (Educational Material)</option>
                    <option value="sevalay">Sevalay (Food Distribution)</option>
                    <option value="shrushti">Shrushti (Plantation Drive)</option>
                  </FormSelect>
                  <FormInput required name="date" type="date" />
                </div>
                <SubmitButton isSubmitting={isSubmitting} text="Request Program" />
              </motion.form>
            )}

            {/* CSR FORM */}
            {activeTab === "csr" && (
              <motion.form key="csr" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit} className="space-y-6">
                 <div className="text-center mb-10">
                  <h3 className="text-3xl font-serif text-[#064E3B] mb-2">Corporate Partnership</h3>
                  <p className="text-[#064E3B]/60 text-sm">Align your CSR goals with our transparent grassroots impact.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput required name="company" type="text" placeholder="Company Name" />
                  <FormInput required name="email" type="email" placeholder="Corporate Email" />
                </div>
                <FormTextarea required name="details" rows={5} placeholder="Tell us about your CSR objectives and how we can collaborate..." />
                <SubmitButton isSubmitting={isSubmitting} text="Initiate Collaboration" bg="bg-[#F97316]" hover="hover:bg-[#064E3B]" />
              </motion.form>
            )}

          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] text-[#064E3B] font-sans">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center pt-20"><Loader2 className="w-10 h-10 text-[#F97316] animate-spin" /></div>}>
        <GetInvolvedContent />
      </Suspense>
      <Footer />
    </main>
  );
}

function SubmitButton({ isSubmitting, text, bg="bg-[#064E3B]", hover="hover:bg-[#F97316]" }: any) {
  return (
    <button type="submit" disabled={isSubmitting} className={`w-full mt-4 ${bg} text-white py-5 rounded-xl font-bold uppercase tracking-widest ${hover} transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-black/5`}>
      {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-current border-t-transparent rounded-full" /> : <>{text} <Send size={18} /></>}
    </button>
  );
}