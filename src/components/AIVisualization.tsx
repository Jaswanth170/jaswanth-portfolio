"use client";

import React from "react";
import { Cpu, Bot, Wrench, Zap, Play, Terminal } from "lucide-react";

export const AIVisualization: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center p-6 md:p-8 bg-surface/60 backdrop-blur-md rounded-2xl border border-white/[0.08] shadow-2xl overflow-hidden group hover:border-white/[0.15] transition-all duration-500">
      {/* Background Radial Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl pointer-events-none group-hover:bg-accent/15 transition-all duration-500" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Top Header / Status bar */}
      <div className="w-full flex items-center justify-between border-b border-white/[0.06] pb-4 mb-8 z-10">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="text-xs font-mono tracking-wider text-secondary uppercase">
            ARCHITECTURE_VISUALIZER.V2
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[11px] font-mono text-accent tracking-widest uppercase">
            LIVE CORE
          </span>
        </div>
      </div>

      {/* Architecture Node DAG Graph */}
      <div className="relative w-full max-w-lg flex flex-col items-center gap-6 z-10">
        {/* Node 1: AI System Core */}
        <div className="relative flex flex-col items-center">
          <div className="px-6 py-3.5 bg-[#17191C] border border-accent/40 rounded-xl shadow-[0_0_20px_rgba(79,140,255,0.15)] flex items-center gap-3 group-hover:border-accent transition-all duration-300">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                AI SYSTEM CORE
              </div>
              <div className="text-[11px] text-secondary font-mono">
                AI SYSTEM ORCHESTRATOR
              </div>
            </div>
          </div>
        </div>

        {/* SVG Connecting Lines Top -> Middle */}
        <div className="w-full h-12 relative flex justify-center items-center">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Center vertical down line */}
            <line x1="50%" y1="0" x2="50%" y2="24" stroke="url(#lineGrad)" strokeWidth="1.5" />
            {/* Horizontal branch line */}
            <line x1="20%" y1="24" x2="80%" y2="24" stroke="#4F8CFF" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Three down lines to middle nodes */}
            <line x1="20%" y1="24" x2="20%" y2="48" stroke="#4F8CFF" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="50%" y1="24" x2="50%" y2="48" stroke="#4F8CFF" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="80%" y1="24" x2="80%" y2="48" stroke="#4F8CFF" strokeOpacity="0.5" strokeWidth="1.5" />

            {/* Glowing animated pulse dots */}
            <circle cx="50%" cy="12" r="3" fill="#4F8CFF" className="animate-ping" />
          </svg>
        </div>

        {/* Middle Layer: AGENTS, TOOLS, AUTOMATION */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
          {/* Node: Agents */}
          <div className="p-3 md:p-3.5 bg-surface-subtle/80 border border-white/[0.08] hover:border-accent/40 rounded-xl flex flex-col items-center text-center transition-all duration-300">
            <div className="p-1.5 bg-white/[0.04] rounded-lg text-primary mb-1.5">
              <Bot className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs font-mono font-semibold text-primary">AGENTS</span>
            <span className="text-[10px] text-secondary font-mono mt-0.5">Reason & Tool</span>
          </div>

          {/* Node: Tools */}
          <div className="p-3 md:p-3.5 bg-surface-subtle/80 border border-white/[0.08] hover:border-accent/40 rounded-xl flex flex-col items-center text-center transition-all duration-300">
            <div className="p-1.5 bg-white/[0.04] rounded-lg text-primary mb-1.5">
              <Wrench className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs font-mono font-semibold text-primary">TOOLS</span>
            <span className="text-[10px] text-secondary font-mono mt-0.5">APIs & Systems</span>
          </div>

          {/* Node: Automation */}
          <div className="p-3 md:p-3.5 bg-surface-subtle/80 border border-white/[0.08] hover:border-accent/40 rounded-xl flex flex-col items-center text-center transition-all duration-300">
            <div className="p-1.5 bg-white/[0.04] rounded-lg text-primary mb-1.5">
              <Zap className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs font-mono font-semibold text-primary">AUTOMATION</span>
            <span className="text-[10px] text-secondary font-mono mt-0.5">Workflows</span>
          </div>
        </div>

        {/* SVG Connecting Lines Middle -> Bottom */}
        <div className="w-full h-12 relative flex justify-center items-center">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            {/* Three down lines from middle nodes to horizontal bar */}
            <line x1="20%" y1="0" x2="20%" y2="24" stroke="#4F8CFF" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="50%" y1="0" x2="50%" y2="24" stroke="#4F8CFF" strokeOpacity="0.5" strokeWidth="1.5" />
            <line x1="80%" y1="0" x2="80%" y2="24" stroke="#4F8CFF" strokeOpacity="0.5" strokeWidth="1.5" />
            {/* Horizontal join line */}
            <line x1="20%" y1="24" x2="80%" y2="24" stroke="#4F8CFF" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Single line down to Execution */}
            <line x1="50%" y1="24" x2="50%" y2="48" stroke="#4F8CFF" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Bottom Node: Execution */}
        <div className="w-full max-w-xs">
          <div className="px-5 py-3 bg-[#17191C] border border-white/[0.12] hover:border-accent/40 rounded-xl flex items-center justify-between transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-accent/10 rounded-lg text-accent">
                <Play className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono font-bold text-primary tracking-wide">
                  EXECUTION
                </div>
                <div className="text-[10px] font-mono text-secondary">
                  Real-world output & actions
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
              READY
            </span>
          </div>
        </div>
      </div>

      {/* Footer System Status Banner */}
      <div className="w-full mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-secondary z-10">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          AUTONOMOUS OPERATIONAL
        </span>
        <span className="text-white/40">LATENCY &lt; 100ms</span>
      </div>
    </div>
  );
};
