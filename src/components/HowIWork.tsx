"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Compass, Layout, Code2, RefreshCw } from "lucide-react";

export const HowIWork: React.FC = () => {
  const { howIWork } = portfolioData;

  const icons = [
    <Compass key="compass" className="w-5 h-5 text-accent" />,
    <Layout key="layout" className="w-5 h-5 text-accent" />,
    <Code2 key="code" className="w-5 h-5 text-accent" />,
    <RefreshCw key="refresh" className="w-5 h-5 text-accent" />,
  ];

  return (
    <section className="py-24 bg-surface/30 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-3 block">
            ENGINEERING PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight max-w-2xl leading-tight">
            From Idea to Intelligent System.
          </h2>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howIWork.map((step, index) => (
            <div
              key={step.number}
              className="p-6 bg-surface border border-white/[0.08] hover:border-accent/40 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-white/30 group-hover:text-accent transition-colors font-bold">
                  {step.number}
                </span>
                <div className="p-2.5 bg-surface-subtle border border-white/[0.06] rounded-xl group-hover:bg-accent/10 transition-colors">
                  {icons[index]}
                </div>
              </div>

              <h3 className="text-lg font-bold font-mono text-primary mb-3 group-hover:text-accent transition-colors tracking-wide">
                {step.title}
              </h3>

              <p className="text-secondary text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
