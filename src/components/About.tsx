"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Sparkles, Terminal } from "lucide-react";

export const About: React.FC = () => {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-24 bg-[#08090A] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-8 block">
          ABOUT JASWANTH
        </span>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Portrait Photo */}
          <div className="lg:col-span-5 w-full flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl group hover:border-accent/40 transition-all duration-500 bg-surface">
              
              {/* Subtle ambient lighting behind photo */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent/10 rounded-full filter blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all duration-500" />
              
              <Image
                src={personal.image}
                alt="Jaswanth ST — AI/ML Engineer and AI Builder"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 420px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                loading="lazy"
              />

              {/* Minimal Micro Label Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#08090A]/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  <span className="font-bold text-primary">{personal.name}</span>
                </div>
                <span className="text-[10px] text-accent tracking-wider uppercase">
                  AI BUILDER
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Mission */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight leading-[1.1] mb-8">
              {about.headline[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-white">
                {about.headline[1]}
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-secondary text-base md:text-lg leading-relaxed mb-10">
              {about.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Mission Box */}
            <div className="w-full p-6 bg-surface border border-white/[0.08] rounded-2xl flex items-center gap-4 hover:border-accent/30 transition-colors">
              <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl text-accent shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-secondary uppercase tracking-wider block mb-0.5">
                  PRIMARY MISSION
                </span>
                <p className="text-base sm:text-lg font-bold text-primary">
                  {about.mission}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
