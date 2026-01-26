import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = "", hoverEffect = false }: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-white/70 backdrop-blur-2xl
        border border-white/50
        shadow-[0_8px_32px_rgba(0,0,0,0.04)]
        rounded-[2rem]
        ${hoverEffect ? "transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(197,160,89,0.15)] hover:border-gold/30" : ""}
        ${className}
      `}
    >
      {/* Internal "Shine" Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-60 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}