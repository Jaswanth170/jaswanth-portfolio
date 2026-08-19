"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Clock, FileText, Sparkles, Share2, Github } from "lucide-react";

export default function ContentAutoCaseStudyPage() {
  const project = portfolioData.projects.find((p) => p.slug === "ai-content-automation")!;

  return (
    <main className="min-h-screen bg-[#08090A] text-[#F5F5F5] selection:bg-accent/20 selection:text-white">
      <Navbar />

      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-semibold text-accent bg-accent/10 border border-accent/20 rounded-full">
              {project.category}
            </span>
            <span className="px-3 py-1 text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> STATUS: {project.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-secondary leading-relaxed">
            {project.oneLiner}
          </p>
        </div>

        {/* Actions Hierarchy */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.evidence.githubUrl && (
            <a
              href={project.evidence.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all"
            >
              <Github className="w-4 h-4" /> View Source →
            </a>
          )}
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-semibold text-primary bg-surface border border-white/15 rounded-xl hover:border-accent transition-all"
          >
            Inquire About Pipeline →
          </a>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-[#0D0F11] border border-white/[0.08] rounded-2xl p-6 md:p-8 mb-12">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block mb-4">
            CONTENT PROCESSING PIPELINE
          </span>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 bg-surface-subtle rounded-xl flex items-center justify-between border border-white/[0.04]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent" />
                <span className="text-primary font-bold">1. Raw Ideas / Unstructured Brief</span>
              </div>
              <span className="text-[10px] text-secondary">INPUT</span>
            </div>
            <div className="p-3 bg-surface-subtle rounded-xl flex items-center justify-between border border-accent/40 shadow-[0_0_15px_rgba(79,140,255,0.15)]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-primary font-bold">2. LLM Prompt Chaining &amp; Formatting</span>
              </div>
              <span className="text-[10px] text-accent">LLM PROCESS</span>
            </div>
            <div className="p-3 bg-surface-subtle rounded-xl flex items-center justify-between border border-white/[0.04]">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-accent" />
                <span className="text-primary font-bold">3. Multi-Format Platform Output</span>
              </div>
              <span className="text-[10px] text-secondary">EXPORT</span>
            </div>
          </div>
        </div>

        {/* Problem & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-surface border border-white/[0.08] rounded-2xl">
            <h2 className="text-xs font-mono text-accent uppercase tracking-wider mb-2 font-bold">
              PROBLEM STATEMENT
            </h2>
            <p className="text-xs md:text-sm text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 bg-surface border border-white/[0.08] rounded-2xl">
            <h2 className="text-xs font-mono text-accent uppercase tracking-wider mb-2 font-bold">
              TECHNICAL APPROACH
            </h2>
            <p className="text-xs md:text-sm text-secondary leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-accent uppercase tracking-wider mb-4 font-bold">
            SYSTEM HIGHLIGHTS
          </h2>
          <div className="space-y-3">
            {project.highlights.map((h) => (
              <div key={h} className="p-4 bg-surface border border-white/[0.06] rounded-xl flex items-center gap-3 text-xs md:text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What I Learned */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-accent uppercase tracking-wider mb-4 font-bold">
            WHAT I LEARNED
          </h2>
          <div className="space-y-4">
            {project.learned.map((l, idx) => (
              <blockquote key={idx} className="p-4 bg-surface-subtle border-l-2 border-accent text-xs md:text-sm text-primary/90 italic font-mono rounded-r-lg">
                "{l}"
              </blockquote>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-3 font-bold">
            TECHNOLOGIES
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-mono text-primary bg-surface-subtle border border-white/[0.08] rounded-md">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Back Navigation */}
        <div className="pt-8 border-t border-white/[0.08] flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-accent transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Overview
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
