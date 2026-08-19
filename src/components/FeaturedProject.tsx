"use client";

import React from "react";
import Link from "next/link";
import { portfolioData, ProjectCaseStudy } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, Clock, FlaskConical, Github, Workflow, Sparkles } from "lucide-react";

export const FeaturedProject: React.FC = () => {
  const { projects } = portfolioData;
  const leadGen = projects.find((p) => p.slug === "ai-lead-generation")!;
  const contentAuto = projects.find((p) => p.slug === "ai-content-automation")!;

  const getStatusBadge = (status: ProjectCaseStudy["status"]) => {
    switch (status) {
      case "BUILT":
        return (
          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Built
          </span>
        );
      case "EXPERIMENT":
        return (
          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-accent bg-accent/10 border border-accent/20 rounded-full flex items-center gap-1">
            <FlaskConical className="w-3 h-3" /> Experiment
          </span>
        );
      case "IN PROGRESS":
      default:
        return (
          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" /> In Progress
          </span>
        );
    }
  };

  return (
    <section id="featured-work" className="py-24 bg-surface/30 relative border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-3 block">
              FEATURED WORK
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              Practical AI &amp; Automation Systems.
            </h2>
          </div>
          <p className="text-sm text-secondary max-w-md leading-relaxed">
            AI engineering projects focused on intelligent models, n8n workflows, tool calling, and structured APIs.
          </p>
        </div>

        {/* Featured Grid (2 Primary Projects) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Lead Gen */}
          <div className="bg-surface border border-white/[0.1] hover:border-accent/40 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-accent font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <Workflow className="w-4 h-4" /> 01 · AUTOMATION
                </span>
                {getStatusBadge(leadGen.status)}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {leadGen.title}
              </h3>

              <p className="text-sm text-secondary leading-relaxed mb-6">
                {leadGen.oneLiner}
              </p>

              <div className="p-4 bg-surface-subtle border border-white/[0.06] rounded-xl mb-6 space-y-2">
                <span className="text-[10px] font-mono text-accent uppercase tracking-wider block">
                  TECHNICAL APPROACH
                </span>
                <p className="text-xs text-secondary leading-relaxed">
                  {leadGen.approach}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <div className="flex flex-wrap gap-2 mb-6">
                {leadGen.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono text-secondary bg-surface-subtle border border-white/[0.06] rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href={`/projects/${leadGen.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary group-hover:text-accent transition-colors"
                >
                  View Case Study →
                </Link>
                {leadGen.evidence.githubUrl && (
                  <a
                    href={leadGen.evidence.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-secondary hover:text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> Source
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: Content Automation */}
          <div className="bg-surface border border-white/[0.1] hover:border-accent/40 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-accent font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> 02 · LLM APPLICATION
                </span>
                {getStatusBadge(contentAuto.status)}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {contentAuto.title}
              </h3>

              <p className="text-sm text-secondary leading-relaxed mb-6">
                {contentAuto.oneLiner}
              </p>

              <div className="p-4 bg-surface-subtle border border-white/[0.06] rounded-xl mb-6 space-y-2">
                <span className="text-[10px] font-mono text-accent uppercase tracking-wider block">
                  TECHNICAL APPROACH
                </span>
                <p className="text-xs text-secondary leading-relaxed">
                  {contentAuto.approach}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <div className="flex flex-wrap gap-2 mb-6">
                {contentAuto.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono text-secondary bg-surface-subtle border border-white/[0.06] rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href={`/projects/${contentAuto.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary group-hover:text-accent transition-colors"
                >
                  View Case Study →
                </Link>
                {contentAuto.evidence.githubUrl && (
                  <a
                    href={contentAuto.evidence.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-secondary hover:text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> Source
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
