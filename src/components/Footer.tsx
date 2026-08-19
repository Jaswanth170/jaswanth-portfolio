"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <footer className="py-12 bg-[#08090A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Personal Signature */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-sm font-bold tracking-wider uppercase text-primary">
            {personal.name}
          </span>
          <span className="text-xs font-mono text-secondary">
            {personal.role}
          </span>
          <span className="text-[11px] font-mono text-accent/80 mt-1">
            Built by {personal.name} · Learning by building. Building by experimenting.
          </span>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs font-mono text-white/40">
          © 2026 {personal.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
