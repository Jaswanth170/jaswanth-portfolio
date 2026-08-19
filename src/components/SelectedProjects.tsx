"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData, ProjectCaseStudy } from "@/data/portfolioData";
import { ArrowUpRight, CheckCircle2, FlaskConical, Clock, Filter, Github } from "lucide-react";

export const SelectedProjects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = ["ALL", "AI", "AUTOMATION", "AGENTS", "LLM"];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
        return (
          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" /> In Progress
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-24 bg-[#08090A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-3 block">
              SELECTED WORK
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight max-w-2xl leading-tight">
              Engineering Mini Case Studies.
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-surface p-1.5 rounded-xl border border-white/[0.08]">
            <Filter className="w-3.5 h-3.5 text-secondary ml-2 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeFilter === cat
                    ? "bg-accent text-white font-bold"
                    : "text-secondary hover:text-primary hover:bg-surface-subtle"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-white/[0.08] hover:border-accent/40 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              <div>
                {/* Header: Number & Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-white/30 group-hover:text-accent transition-colors">
                    {project.number}
                  </span>
                  {getStatusBadge(project.status)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-secondary mb-6 leading-relaxed">
                  {project.oneLiner}
                </p>

                {/* Problem Statement */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                    PROBLEM
                  </span>
                  <p className="text-secondary text-xs leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </div>

              {/* Footer: Tech & Actions (Max 2 CTAs) */}
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono text-secondary bg-surface-subtle border border-white/[0.06] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors group/btn"
                  >
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover/btn:text-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>

                  {project.evidence.githubUrl && (
                    <a
                      href={project.evidence.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-secondary hover:text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> Source
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
