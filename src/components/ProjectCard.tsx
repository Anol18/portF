"use client";

import { useState } from "react";
import { ProjectItem } from "@/data/projectsData";
import {
  ArrowRight,
  BarChart2,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Quote,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <article className="rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1222]/80 light:bg-white hover:border-emerald-500/30 light:hover:border-emerald-400 transition-all duration-300 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl light:shadow-md glow-emerald-card">
      <div>
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-400 light:text-emerald-700 px-2.5 py-1 rounded bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/20 light:border-emerald-300">
              {project.industry}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 light:text-slate-500 font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Project Title & Client */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white light:text-slate-900 tracking-tight hover:text-emerald-400 light:hover:text-emerald-600 transition-colors">
            {project.name}
          </h3>
          <p className="text-xs text-slate-400 light:text-slate-600 flex items-center gap-1.5 mt-1">
            <Building2 className="w-3.5 h-3.5 text-slate-500 light:text-slate-400" />
            <span>Client: {project.client}</span>
          </p>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Hero Metric Showcase Card */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900/60 light:from-emerald-50 light:to-teal-50 border border-emerald-500/30 light:border-emerald-200 flex items-center justify-between gap-4 mb-6 shadow-inner light:shadow-sm">
          <div>
            <div className="text-3xl font-extrabold text-emerald-400 light:text-emerald-700 font-mono tracking-tight">
              {project.heroMetric.value}
            </div>
            <div className="text-xs font-bold text-white light:text-slate-900">
              {project.heroMetric.label}
            </div>
            <div className="text-[11px] text-slate-400 light:text-slate-600">
              {project.heroMetric.sublabel}
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 light:bg-emerald-100 border border-emerald-500/20 light:border-emerald-300 flex items-center justify-center text-emerald-400 light:text-emerald-700 shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        {/* Tools & Platforms Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-white/10 light:border-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Expanded 7-Step Case Study Framework */}
        {showFullDetails ? (
          <div className="mt-6 pt-6 border-t border-white/10 light:border-slate-200 space-y-6 text-xs sm:text-sm animate-in fade-in duration-300">
            {/* Step 1: Challenge */}
            <div>
              <h4 className="font-bold uppercase tracking-wider font-mono text-xs mb-1.5 text-rose-400 light:text-rose-700">
                01 — The Business Challenge
              </h4>
              <p className="text-slate-300 light:text-slate-700 leading-relaxed">{project.challenge}</p>
            </div>

            {/* Step 2: Strategy */}
            <div>
              <h4 className="font-bold uppercase tracking-wider font-mono text-xs mb-1.5 text-cyan-400 light:text-cyan-700">
                02 — Strategic Approach
              </h4>
              <p className="text-slate-300 light:text-slate-700 leading-relaxed">{project.strategy}</p>
            </div>

            {/* Step 3: Implementation */}
            <div>
              <h4 className="font-bold uppercase tracking-wider font-mono text-xs mb-1.5 text-emerald-400 light:text-emerald-700">
                03 — Technical Implementation
              </h4>
              <ul className="space-y-1 text-slate-300 light:text-slate-700">
                {project.implementation.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 4: Measurement */}
            <div>
              <h4 className="font-bold uppercase tracking-wider font-mono text-xs mb-1.5 text-purple-400 light:text-purple-700">
                04 — Measurement & KPIs Tracked
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.measurement.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded bg-purple-500/10 light:bg-purple-50 text-purple-300 light:text-purple-800 border border-purple-500/20 light:border-purple-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Step 5: Optimization */}
            <div>
              <h4 className="font-bold uppercase tracking-wider font-mono text-xs mb-1.5 text-amber-400 light:text-amber-700">
                05 — Testing & Optimization
              </h4>
              <ul className="space-y-1 text-slate-300 light:text-slate-700">
                {project.optimization.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 light:text-amber-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 6: Verified Results Grid */}
            <div>
              <h4 className="font-bold uppercase tracking-wider font-mono text-xs mb-2 text-emerald-400 light:text-emerald-700">
                06 — Verified Results & Impact
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-black/40 light:bg-slate-50 border border-emerald-500/20 light:border-emerald-200 space-y-0.5 font-mono"
                  >
                    <div className="text-lg font-bold text-emerald-400 light:text-emerald-700">
                      {res.value}
                    </div>
                    <div className="text-xs font-semibold text-white light:text-slate-900">
                      {res.label}
                    </div>
                    <p className="text-[11px] text-slate-400 light:text-slate-600">
                      {res.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 7: Key Takeaways */}
            <div className="p-4 rounded-xl bg-white/[0.02] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-200 light:text-slate-900 uppercase tracking-wider font-mono text-xs">
                07 — Key Takeaway
              </h4>
              <p className="text-slate-300 light:text-slate-700 italic text-xs leading-relaxed">
                &ldquo;{project.keyTakeaways}&rdquo;
              </p>
            </div>

            {/* Testimonial if present */}
            {project.testimonial && (
              <div className="p-4 rounded-xl bg-emerald-950/20 light:bg-emerald-50 border border-emerald-500/20 light:border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 light:text-emerald-700 text-xs font-semibold">
                  <Quote className="w-4 h-4" />
                  <span>Client Feedback</span>
                </div>
                <p className="text-xs text-slate-300 light:text-slate-700 italic">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="text-[11px] text-slate-400 light:text-slate-600">
                  <strong className="text-white light:text-slate-900">{project.testimonial.author}</strong> — {project.testimonial.role}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>

      {/* Toggle Button */}
      <div className="pt-6 border-t border-white/10 light:border-slate-200 mt-6 flex items-center justify-between">
        <button
          onClick={() => setShowFullDetails(!showFullDetails)}
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-white light:text-slate-800 border border-white/10 light:border-slate-300 transition-colors cursor-pointer"
        >
          <span>{showFullDetails ? "Collapse Case Study" : "Read Full 7-Step Case Study"}</span>
          {showFullDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <a
          href={`https://wa.me/8801700000000?text=Hi%20Mohammad%20Rafe,%20I'm%20interested%20in%20results%20similar%20to%20the%20${encodeURIComponent(
            project.name
          )}%20case%20study.`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-emerald-400 light:text-emerald-700 hover:text-emerald-300 light:hover:text-emerald-800 flex items-center gap-1 font-semibold"
        >
          <span>Inquire Similar ROI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}
