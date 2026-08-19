"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Activity, ArrowUpRight } from "lucide-react";

export const CurrentlyBuilding: React.FC = () => {
  const { currentlyBuilding } = portfolioData;

  const getStatusBadge = (status: "ACTIVE" | "BUILDING" | "EXPLORING") => {
    switch (status) {
      case "ACTIVE":
        return (
          <span className="px-3 py-1 text-xs font-mono font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ACTIVE
          </span>
        );
      case "BUILDING":
        return (
          <span className="px-3 py-1 text-xs font-mono font-semibold text-accent bg-accent/10 border border-accent/20 rounded-full flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            BUILDING
          </span>
        );
      case "EXPLORING":
        return (
          <span className="px-3 py-1 text-xs font-mono font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            EXPLORING
          </span>
        );
    }
  };

  return (
    <section className="py-20 bg-[#08090A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-2 block">
              ENGINEERING LAB
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
              Currently Building
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-secondary bg-surface px-3.5 py-2 rounded-xl border border-white/[0.08] w-fit">
            <Activity className="w-4 h-4 text-accent" />
            <span>LIVE LAB STATUS BOARD</span>
          </div>
        </div>

        {/* Status Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentlyBuilding.map((item) => (
            <a
              key={item.id}
              href={item.linkUrl || "#work"}
              className="p-5 bg-surface border border-white/[0.08] hover:border-accent/40 rounded-xl flex items-center justify-between transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-white/30 group-hover:text-accent transition-colors font-bold mt-0.5">
                  {item.id}
                </span>
                <div>
                  <div className="text-base font-bold text-primary font-mono tracking-wide flex items-center gap-1.5 group-hover:text-accent transition-colors">
                    {item.name}
                    <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="text-xs text-secondary mt-0.5">
                    {item.description}
                  </div>
                </div>
              </div>

              {getStatusBadge(item.status)}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
