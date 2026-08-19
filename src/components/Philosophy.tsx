"use client";

import React from "react";

export const Philosophy: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-[#08090A] relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-6 block">
          ENGINEERING PHILOSOPHY
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-primary tracking-tight leading-[1.08] mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
            Learn. Build. Break. Improve.
          </span>
        </h2>

        <p className="text-lg md:text-2xl text-secondary font-normal max-w-2xl mx-auto leading-relaxed">
          I learn by building real systems, understanding what breaks, and improving the architecture.
        </p>

      </div>
    </section>
  );
};
