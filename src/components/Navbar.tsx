"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export const Navbar: React.FC = () => {
  const { personal, resume } = portfolioData;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Stack", href: "/#stack" },
    { label: "GitHub", href: "/#github" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090A]/85 backdrop-blur-md border-b border-white/[0.08] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand with Profile Avatar */}
        <a
          href="/"
          className="text-sm font-semibold tracking-wider uppercase text-primary hover:text-accent transition-colors flex items-center gap-2.5 group"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-accent transition-colors shrink-0">
            <Image
              src={personal.image}
              alt={`${personal.name} — ${personal.role}`}
              fill
              sizes="32px"
              className="object-cover object-top"
              priority
            />
          </div>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {personal.name}
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors hover:scale-105 transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {resume.url && resume.url !== "#" && (
            <a
              href={resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-secondary hover:text-primary bg-surface border border-white/10 rounded-full transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              Download Resume
            </a>
          )}

          <a
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-primary bg-surface border border-white/10 rounded-full hover:bg-surface-subtle hover:border-accent/40 hover:text-accent transition-all group"
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090A]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-base font-medium text-secondary mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary py-2 border-b border-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-primary bg-surface border border-white/15 rounded-lg hover:border-accent hover:text-accent transition-all"
          >
            Let's Talk
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
