"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Bot, Workflow, Layers, Rocket } from "lucide-react";

export const WhatIBuild: React.FC = () => {
  const { whatIBuild } = portfolioData;

  const cardIcons = [
    <Bot key="bot" className="w-5 h-5 text-accent" />,
    <Workflow key="wf" className="w-5 h-5 text-accent" />,
    <Layers key="layers" className="w-5 h-5 text-accent" />,
    <Rocket key="rocket" className="w-5 h-5 text-accent" />,
  ];

  return (
    <section id="build" className="py-24 bg-[#08090A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-3 block">
            WHAT I BUILD
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight max-w-2xl leading-tight">
            I Build AI That Does More Than Talk.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {whatIBuild.map((card, index) => (
            <div
              key={card.number}
              className="p-8 bg-surface border border-white/[0.08] hover:border-accent/40 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 flex flex-col justify-between"
            >
              <div>
                {/* Header: Card Number + Icon + Arrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-white/30 group-hover:text-accent transition-colors">
                      {card.number}
                    </span>
                    <div className="p-2.5 bg-surface-subtle border border-white/[0.06] rounded-xl group-hover:bg-accent/10 transition-colors">
                      {cardIcons[index]}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-bold font-mono text-primary mb-3 group-hover:text-white transition-colors tracking-wide">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-secondary text-sm md:text-base leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono text-secondary bg-surface-subtle border border-white/[0.06] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
