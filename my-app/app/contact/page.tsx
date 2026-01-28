"use client";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact"; // Reuse your excellent component
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-earth font-sans">
      <Navbar />
      
      {/* Reusing the Contact Component but wrapped in a page context */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-20"
      >
        <Contact />
      </motion.div>

      <Footer />
    </main>
  );
}