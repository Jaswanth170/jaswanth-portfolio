"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Code, Cpu, Zap, Terminal } from "lucide-react";

export const TechStack: React.FC = () => {
  const { skills } = portfolioData;

  const categoryIcons = [
    <Code key="code" className="w-4 h-4 text-accent" />,
    <Cpu key="cpu" className="w-4 h-4 text-accent" />,
    <Zap key="zap" className="w-4 h-4 text-accent" />,
    <Terminal key="term" className="w-4 h-4 text-accent" />,
  ];

  return (
    <section id="stack" className="py-24 bg-surface/30 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-3 block">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight max-w-2xl leading-tight">
            Engineering Tools &amp; Stack.
          </h2>
          <p className="text-secondary text-sm md:text-base mt-3 max-w-xl">
            Technologies, frameworks, platforms, and protocols used in my practical AI projects.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <div
              key={group.title}
              className="p-8 bg-surface border border-white/[0.08] hover:border-accent/30 rounded-2xl transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="p-2 bg-surface-subtle border border-white/[0.06] rounded-lg group-hover:bg-accent/10 transition-colors">
                  {categoryIcons[idx]}
                </div>
                <h3 className="text-lg font-bold text-primary font-mono tracking-wide">
                  {group.title}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="px-3.5 py-1.5 text-xs font-mono text-primary bg-surface-subtle border border-white/[0.06] hover:border-accent/40 rounded-xl transition-all flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
