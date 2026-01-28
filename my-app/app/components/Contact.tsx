"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="py-32 bg-earth text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20">
        
        {/* Information Column */}
        <div className="space-y-12">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold">Get in Touch</span>
            <h2 className="text-5xl lg:text-7xl font-serif mt-4">
              Start a <br /> <span className="text-gold italic">Dialogue</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-earth transition-all duration-500">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-1">Headquarters</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  108, Legacy Tower, Financial District <br />
                  Mumbai, Maharashtra, India 400051
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-earth transition-all duration-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-1">Private Inquiries</h4>
                <p className="text-white/50 text-sm">
                  office@sparklingera.org
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Form */}
        <form onSubmit={(e) => e.preventDefault()} className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 space-y-8">            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gold font-bold">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-gold transition-colors" placeholder="Arjun" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gold font-bold">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-gold transition-colors" placeholder="Mehta" />
                </div>
            </div>
            
            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-gold transition-colors" placeholder="arjun@example.com" />
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-gold transition-colors resize-none" placeholder="I am interested in..." />
            </div>

            <button type="submit" className="w-full bg-gold text-earth py-5 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-3">
                Send Request <ArrowRight size={18} />
            </button>
        </form>

      </div>
    </section>
  );
}