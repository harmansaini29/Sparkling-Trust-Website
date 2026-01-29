"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, ArrowRight, ShieldCheck } from "lucide-react";

// --- CONFIGURATION ---
const ACCESS_CODE = "777"; 

export function ProtectionGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("sparkling_auth");
    if (sessionAuth === "true") setIsAuthenticated(true);
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === ACCESS_CODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem("sparkling_auth", "true");
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <section className="min-h-screen bg-earth flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/india-pattern.png')] opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl text-center space-y-8">
          
          <div className="flex justify-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-500 ${error ? "bg-red-500/20 text-red-500" : "bg-gold/10 text-gold"}`}>
              {error ? <Lock className="animate-pulse" size={32} /> : <ShieldCheck size={32} />}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-white mb-2">Restricted Area</h2>
            <p className="text-white/40 text-sm">
              This section contains sensitive regulatory documents. <br/> Please enter your security pass.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="relative group">
              <input 
                suppressHydrationWarning
                type="password" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Access Code"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-center text-white text-lg tracking-[0.5em] focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/10 placeholder:tracking-normal placeholder:text-sm"
                autoFocus
              />
            </div>

            <button 
              suppressHydrationWarning
              type="submit"
              className="w-full bg-gold text-earth font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Unlock Access <ArrowRight size={16} />
            </button>
          </form>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-red-400 text-xs font-bold uppercase tracking-widest"
            >
              Access Denied: Invalid Credentials
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
}