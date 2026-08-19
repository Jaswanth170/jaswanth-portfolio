"use client";

import React from "react";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { AIVisualization } from "./AIVisualization";

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex items-center bg-radial-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold tracking-widest text-accent bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {personal.role}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary tracking-tight leading-[1.08] mb-6">
            Building the Future <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
              With AI.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-secondary font-normal max-w-2xl leading-relaxed mb-8">
            {personal.supportingMessage}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
            <a
              href="#work"
              className="px-7 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 group"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 text-sm font-semibold text-primary bg-surface hover:bg-surface-subtle border border-white/10 hover:border-white/20 rounded-xl transition-all text-center"
            >
              Let's Connect
            </a>
          </div>

          {/* Credibility Line */}
          <div className="pt-4 border-t border-white/[0.06] w-full flex items-center gap-2 text-xs font-mono text-secondary">
            <Terminal className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>{personal.credibilityLine}</span>
          </div>
        </div>

        {/* Right Column: AI System Visualization */}
        <div className="lg:col-span-5 w-full">
          <AIVisualization />
        </div>

      </div>
    </section>
  );
};
