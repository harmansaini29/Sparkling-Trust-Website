"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Investment Opportunities",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // CONFIG: Replace with your actual WhatsApp number
    const PHONE_NUMBER = "9035201202"; 
    
    const text = 
      `*New Inquiry from Website* 🌟%0a%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Email:* ${formData.email}%0a` +
      `*Interest:* ${formData.interest}%0a` +
      `*Message:* ${formData.message}`;
                 
    const url = `https://wa.me/${PHONE_NUMBER}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative py-24 px-6 bg-[#FDFCF9] overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: INFO */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Get in Touch</span>
              <h2 className="text-5xl font-serif text-earth mt-4 mb-6">Let's Build Your Legacy</h2>
              <p className="text-earth/60 text-lg leading-relaxed">
                Whether you are looking to invest ethically, seek funding for a rural project, or simply want to learn more about Dharma-based finance, we are here to guide you.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Headquarters", value: "Bandra Kurla Complex, Mumbai" },
                { icon: Phone, title: "Phone", value: "+91 98765 43210" },
                { icon: Mail, title: "Email", value: "connect@sparklingera.org" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                    <item.icon size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-earth text-xs uppercase tracking-widest mb-2 opacity-50">{item.title}</h4>
                    <p className="text-earth font-serif text-xl">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-black/5 border border-black/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold to-[#D4A373]" />

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/40 ml-1">Full Name</label>
                    <input 
                      suppressHydrationWarning // <-- FIX ADDED HERE
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-gold/50 focus:outline-none focus:bg-white transition-all placeholder:text-earth/20 text-earth"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/40 ml-1">Email Address</label>
                    <input 
                      suppressHydrationWarning // <-- FIX ADDED HERE
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-gold/50 focus:outline-none focus:bg-white transition-all placeholder:text-earth/20 text-earth"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/40 ml-1">I'm Interested In</label>
                  <div className="relative">
                    <select 
                      suppressHydrationWarning // <-- FIX ADDED HERE
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-gold/50 focus:outline-none focus:bg-white transition-all text-earth appearance-none cursor-pointer"
                    >
                      <option>Investment Opportunities</option>
                      <option>Rural Funding (Kisan Credit)</option>
                      <option>Mentorship Programs</option>
                      <option>General Inquiry</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/40 ml-1">Message</label>
                  <textarea 
                    suppressHydrationWarning // <-- FIX ADDED HERE
                    required
                    placeholder="Tell us about your goals..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#FDFCF9] border border-black/5 rounded-xl px-6 py-4 focus:border-gold/50 focus:outline-none focus:bg-white transition-all placeholder:text-earth/20 text-earth resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  suppressHydrationWarning // <-- FIX ADDED HERE
                  className="w-full bg-earth text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-gold hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98]"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}