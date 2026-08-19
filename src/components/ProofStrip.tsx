"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";

export const ProofStrip: React.FC = () => {
  const { proofStrip } = portfolioData;

  return (
    <div className="w-full bg-[#0B0D0E] border-y border-white/[0.06] py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-center sm:justify-between gap-y-3 gap-x-6 text-xs font-mono text-secondary">
        {proofStrip.map((item, index) => (
          <React.Fragment key={item}>
            <span className="flex items-center gap-2 tracking-widest text-primary/80 hover:text-accent transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              {item}
            </span>
            {index < proofStrip.length - 1 && (
              <span className="hidden sm:inline text-white/10">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
