"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Github, ArrowUpRight, Code2, AlertCircle } from "lucide-react";

interface RepoItem {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
}

export const GithubSection: React.FC = () => {
  const { social } = portfolioData;
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const username = social.github.split("github.com/")[1]?.replace(/\/$/, "");

    if (!username || social.github === "https://github.com") {
      setLoading(false);
      return;
    }

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(
            data.map((r: any) => ({
              name: r.name,
              description: r.description || "Public engineering repository.",
              language: r.language || "Code",
              stargazers_count: r.stargazers_count || 0,
              html_url: r.html_url,
            }))
          );
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [social.github]);

  const fallbackRepos = [
    {
      name: "ai-lead-generation-system",
      desc: "Production-ready n8n workflow pipeline for automated lead capture, LLM qualification, and CRM routing.",
      lang: "Python / n8n",
      tag: "AUTOMATION",
      url: social.github,
    },
    {
      name: "n8n-ai-automation-blueprints",
      desc: "Production-ready n8n workflow blueprints for lead qualification, content pipelines, and AI webhooks.",
      lang: "JSON / TypeScript",
      tag: "AUTOMATION",
      url: social.github,
    },
    {
      name: "mcp-agent-tools",
      desc: "Custom Model Context Protocol (MCP) servers and tools for agentic workflow execution.",
      lang: "Python",
      tag: "AGENTS",
      url: social.github,
    },
  ];

  return (
    <section id="github" className="py-24 bg-surface/30 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase mb-3 block">
              OPEN SOURCE &amp; REPOS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
              Building in Public.
            </h2>
            <p className="text-secondary text-base mt-3 max-w-xl">
              Explore my projects, experiments, AI systems, automation workflows, and engineering work.
            </p>
          </div>

          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-primary bg-surface hover:bg-surface-subtle border border-white/15 hover:border-accent/40 rounded-xl transition-all group shrink-0"
          >
            <Github className="w-4 h-4 text-accent" />
            Explore work on GitHub →
            <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Loading State Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 bg-surface border border-white/[0.08] rounded-2xl animate-pulse h-48 flex flex-col justify-between"
              >
                <div className="w-24 h-4 bg-white/10 rounded mb-4" />
                <div className="w-full h-8 bg-white/5 rounded mb-4" />
                <div className="w-16 h-4 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* API Failure Fallback Shield */}
        {error && (
          <div className="p-8 bg-surface border border-white/[0.08] rounded-2xl text-center flex flex-col items-center gap-4">
            <AlertCircle className="w-8 h-8 text-accent" />
            <p className="text-sm font-mono text-secondary">
              Direct API sync unavailable.
            </p>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all"
            >
              Explore the latest work on GitHub →
            </a>
          </div>
        )}

        {/* Repositories Display (Real API or Architectural Preview) */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repos.length > 0
              ? repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-surface border border-white/[0.08] hover:border-accent/40 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                          ★ {repo.stargazers_count}
                        </span>
                        <Code2 className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" />
                      </div>

                      <h3 className="text-lg font-bold text-primary font-mono mb-2 group-hover:text-accent transition-colors">
                        {repo.name}
                      </h3>

                      <p className="text-secondary text-xs leading-relaxed mb-6">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono text-secondary">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                      <span className="text-white/30 group-hover:text-primary transition-colors flex items-center gap-1">
                        View Repo <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </a>
                ))
              : fallbackRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-surface border border-white/[0.08] hover:border-accent/40 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                          {repo.tag}
                        </span>
                        <Code2 className="w-4 h-4 text-secondary group-hover:text-accent transition-colors" />
                      </div>

                      <h3 className="text-lg font-bold text-primary font-mono mb-2 group-hover:text-accent transition-colors">
                        {repo.name}
                      </h3>

                      <p className="text-secondary text-xs leading-relaxed mb-6">
                        {repo.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono text-secondary">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        {repo.lang}
                      </span>
                      <span className="text-white/30 group-hover:text-primary transition-colors flex items-center gap-1">
                        View Repo <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </a>
                ))}
          </div>
        )}

      </div>
    </section>
  );
};
