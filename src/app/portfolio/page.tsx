import type { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import { siteConfig } from "@/data/siteConfig";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, Briefcase, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Portfolio & Projects | Mohammad Rafe",
  description:
    "Explore Mohammad Rafe's digital marketing, analytics, tracking and performance marketing projects across different industries and business goals.",
};

export default function PortfolioPage() {
  return (
    <div className="py-16 sm:py-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          Selected Client Work
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Digital Marketing & Tracking Portfolio
        </h1>
        <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
          Explore selected digital marketing, analytics and tracking projects I&apos;ve worked on for businesses in different industries. Each project focuses on solving a specific business challenge through advertising, measurement, tracking and optimization.
        </p>
      </div>

      {/* Recommended Project Structure Highlights */}
      <div className="p-6 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 light:text-slate-600 light:shadow-sm">
        <div className="flex items-center gap-2 text-white light:text-slate-900 font-bold">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <span>Every Project Covers:</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 px-2.5 py-1 rounded border border-white/5 light:border-slate-200">Business Challenge</span>
          <span>→</span>
          <span className="bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 px-2.5 py-1 rounded border border-white/5 light:border-slate-200">Strategy & Tech Stack</span>
          <span>→</span>
          <span className="bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 px-2.5 py-1 rounded border border-white/5 light:border-slate-200">Server-Side Tracking</span>
          <span>→</span>
          <span className="bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 font-bold px-2.5 py-1 rounded border border-emerald-500/30 light:border-emerald-200">Verified Outcomes</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom Conversion Prompt */}
      <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-slate-900 to-black light:from-slate-900 light:via-slate-950 light:to-[#052e24] text-center space-y-4 text-white light:shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Want Similar Measurable Outcomes for Your Business?
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Whether you need to recover lost iOS signals, overhaul GA4 eCommerce tracking, or reduce lead acquisition costs, let&apos;s build a custom roadmap.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25"
          >
            Discuss Your Project
          </Link>
          <Link
            href="/case-studies"
            className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all"
          >
            View Detailed 7-Step Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
