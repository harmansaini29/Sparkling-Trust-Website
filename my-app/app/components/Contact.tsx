"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [isMounted, setIsMounted] = useState(false);

  // Prevents Hydration Mismatch from browser extensions
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const PHONE_NUMBER = "918888899695"; 
    
    const rawMessage = `*Website Inquiry* 🌟\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(rawMessage)}`, '_blank');
  };

  return (
    <section className="relative py-32 px-6 bg-[#FDFCF9] overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: INFO & MAP */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.3em]">Contact Us</span>
              <h2 className="text-5xl font-serif text-[#064E3B] mt-4 mb-6">Let's Build Your Legacy</h2>
              <p className="text-[#064E3B]/60 text-lg leading-relaxed">Connect with us to invite a program, volunteer, or initiate a corporate collaboration.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#F97316] shadow-sm group-hover:bg-[#F97316] group-hover:text-white transition-colors"><MapPin size={24} /></div>
                  <div className="pt-1">
                    <h4 className="font-bold text-[#064E3B] text-xs uppercase tracking-widest mb-2 opacity-50">Headquarters</h4>
                    <p className="text-[#064E3B] font-serif text-lg leading-relaxed">Office No: 309, 3rd Floor,<br/>Veerbhadra Nagar, Pyramid Axis,<br/>Baner, Pune – Maharashtra</p>
                  </div>
              </div>
              <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#F97316] shadow-sm group-hover:bg-[#F97316] group-hover:text-white transition-colors"><Phone size={24} /></div>
                  <div className="pt-1">
                    <h4 className="font-bold text-[#064E3B] text-xs uppercase tracking-widest mb-2 opacity-50">Phone</h4>
                    <p className="text-[#064E3B] font-serif text-lg">+91 88888 99695</p>
                  </div>
              </div>
              <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#F97316] shadow-sm group-hover:bg-[#F97316] group-hover:text-white transition-colors"><Mail size={24} /></div>
                  <div className="pt-1">
                    <h4 className="font-bold text-[#064E3B] text-xs uppercase tracking-widest mb-2 opacity-50">Email</h4>
                    <p className="text-[#064E3B] font-serif text-lg break-all">sparkleglobalfoundation@gmail.com</p>
                  </div>
              </div>
            </div>

            {/* REAL MAP EMBED FOR BANER, PUNE */}
            <div className="w-full h-72 rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.35515053738!2d73.78201777598817!3d18.558066668028713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec70b61514d%3A0xc07ce9b1ecae1dd7!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714561023000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-black/5">
              {isMounted && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/40 ml-1">Name</label>
                      <input suppressHydrationWarning required type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/10 outline-none transition-all text-[#064E3B]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/40 ml-1">Phone</label>
                      <input suppressHydrationWarning required type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/10 outline-none transition-all text-[#064E3B]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/40 ml-1">Email</label>
                      <input suppressHydrationWarning required type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/10 outline-none transition-all text-[#064E3B]" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/40 ml-1">Subject</label>
                      <input suppressHydrationWarning required type="text" placeholder="Reason for contacting..." value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/10 outline-none transition-all text-[#064E3B]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#064E3B]/40 ml-1">Message</label>
                    <textarea suppressHydrationWarning required rows={5} placeholder="Tell us more about how we can collaborate..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-[#F97316] focus:ring-4 focus:ring-[#F97316]/10 outline-none resize-none transition-all text-[#064E3B]"></textarea>
                  </div>
                  <button suppressHydrationWarning type="submit" className="w-full bg-[#064E3B] text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#F97316] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl">
                    Submit Inquiry <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}