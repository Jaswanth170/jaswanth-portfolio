"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

export const Contact: React.FC = () => {
  const { personal, social } = portfolioData;

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#08090A] relative border-t border-white/[0.06] overflow-hidden">
      
      {/* Background Lighting Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-surface border border-white/[0.1] rounded-3xl p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-4 block">
                GET IN TOUCH
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-[1.08] mb-6">
                Have an AI problem <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                  worth solving?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed mb-6">
                I'm interested in AI systems, intelligent automation, agents, and practical AI products.
              </p>

              {/* Open To Signals */}
              {personal.openTo && personal.openTo.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs font-mono text-white/40 self-center mr-1">OPEN TO:</span>
                  {personal.openTo.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3" />
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href={`mailto:${personal.email}`}
                  className="px-8 py-4 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-lg shadow-accent/25 transition-all flex items-center justify-center gap-2.5 group"
                >
                  <Mail className="w-4 h-4" />
                  Email Me →
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 text-sm font-semibold text-primary bg-surface hover:bg-surface-subtle border border-white/10 hover:border-white/20 rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    LinkedIn →
                    <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 flex flex-col gap-6 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-10">
              <div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-wider block mb-2">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm md:text-base font-mono font-medium text-primary hover:text-accent transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-wider block mb-3">
                  CONNECT &amp; SOCIALS
                </span>
                <div className="flex flex-col gap-2.5 text-sm font-medium text-secondary">
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors flex items-center gap-1.5 w-fit group"
                    >
                      LinkedIn
                      <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {social.github && (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors flex items-center gap-1.5 w-fit group"
                    >
                      GitHub
                      <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
