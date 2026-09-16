"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calendar,
  CheckCircle2,
  Cpu,
  Layers,
  MessageSquare,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function CaseStudiesPage() {
  const [activeStudy, setActiveStudy] = useState(projectsData[0].id);

  const currentProject =
    projectsData.find((p) => p.id === activeStudy) || projectsData[0];

  return (
    <div className="py-16 sm:py-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          The 7-Step Measurement Framework
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Digital Marketing & Tracking Case Studies
        </h1>
        <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
          Read detailed digital marketing case studies covering campaign strategy, conversion tracking, analytics, optimization and measurable business outcomes.
        </p>
      </div>

      {/* Case Study Selection Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {projectsData.map((project) => {
          const isActive = project.id === activeStudy;
          return (
            <button
              key={project.id}
              onClick={() => setActiveStudy(project.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                isActive
                  ? "border-emerald-500 bg-emerald-950/20 light:bg-emerald-50 light:border-emerald-500 shadow-lg shadow-emerald-500/10"
                  : "border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white hover:border-white/20 light:hover:border-slate-300 text-slate-400 light:text-slate-600 light:shadow-sm"
              }`}
            >
              <div className="text-[11px] font-mono text-emerald-400 light:text-emerald-700 mb-1 font-semibold">
                {project.industry.split("&")[0]}
              </div>
              <h3 className="text-sm font-bold text-white light:text-slate-900 leading-tight">
                {project.name}
              </h3>
              <div className="text-xs font-mono text-emerald-400 light:text-emerald-700 mt-2 font-bold">
                {project.heroMetric.value}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Case Study 7-Step Deep Dive */}
      <article className="p-8 sm:p-12 rounded-3xl border border-white/10 light:border-slate-200 bg-[#0c1222] light:bg-white space-y-12 shadow-2xl light:shadow-xl relative overflow-hidden transition-colors">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Study Header & Hero Stats */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/10 light:border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-400 light:text-emerald-700 px-3 py-1 rounded bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/20 light:border-emerald-300">
                {currentProject.industry}
              </span>
              <span className="text-xs font-mono text-slate-400 light:text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {currentProject.duration}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              {currentProject.name}
            </h2>

            <p className="text-sm text-slate-300 light:text-slate-600 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Client: {currentProject.client}</span>
            </p>

            <p className="text-base text-slate-300 light:text-slate-600 leading-relaxed">
              {currentProject.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {currentProject.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-white/10 light:border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Metric Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-black light:from-emerald-50/80 light:via-white light:to-teal-50 border border-emerald-500/30 light:border-emerald-300 text-center lg:text-right space-y-1 shrink-0 min-w-[240px] light:shadow-sm">
            <span className="text-xs font-mono uppercase text-emerald-400 light:text-emerald-700 tracking-wider font-semibold">
              Primary Verified KPI
            </span>
            <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 light:text-emerald-700 font-mono">
              {currentProject.heroMetric.value}
            </div>
            <div className="text-sm font-bold text-white light:text-slate-900">
              {currentProject.heroMetric.label}
            </div>
            <p className="text-xs text-slate-400 light:text-slate-600">
              {currentProject.heroMetric.sublabel}
            </p>
          </div>
        </div>

        {/* The 7 Steps */}
        <div className="space-y-10">
          {/* Step 1: Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 light:text-rose-700 font-bold block">
                Step 01
              </span>
              <h3 className="text-lg font-bold text-white light:text-slate-900">The Challenge</h3>
              <p className="text-xs text-slate-400 light:text-slate-500">What needed to be solved?</p>
            </div>
            <div className="md:col-span-9 p-5 rounded-xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              {currentProject.challenge}
            </div>
          </div>

          {/* Step 2: Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 light:text-cyan-700 font-bold block">
                Step 02
              </span>
              <h3 className="text-lg font-bold text-white light:text-slate-900">The Strategy</h3>
              <p className="text-xs text-slate-400 light:text-slate-500">Selected approach & rationale</p>
            </div>
            <div className="md:col-span-9 p-5 rounded-xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              {currentProject.strategy}
            </div>
          </div>

          {/* Step 3: Implementation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 light:text-emerald-700 font-bold block">
                Step 03
              </span>
              <h3 className="text-lg font-bold text-white light:text-slate-900">Implementation</h3>
              <p className="text-xs text-slate-400 light:text-slate-500">Campaigns & tracking stack</p>
            </div>
            <div className="md:col-span-9 p-5 rounded-xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 space-y-2">
              {currentProject.implementation.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Measurement */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 light:text-purple-700 font-bold block">
                Step 04
              </span>
              <h3 className="text-lg font-bold text-white light:text-slate-900">The Measurement</h3>
              <p className="text-xs text-slate-400 light:text-slate-500">Events, conversions & KPIs</p>
            </div>
            <div className="md:col-span-9 p-5 rounded-xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 flex flex-wrap gap-2">
              {currentProject.measurement.map((metric, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-purple-500/10 light:bg-purple-50 text-purple-300 light:text-purple-800 border border-purple-500/20 light:border-purple-200"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          {/* Step 5: Optimization */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 light:text-amber-700 font-bold block">
                Step 05
              </span>
              <h3 className="text-lg font-bold text-white light:text-slate-900">The Optimization</h3>
              <p className="text-xs text-slate-400 light:text-slate-500">What was tested & improved</p>
            </div>
            <div className="md:col-span-9 p-5 rounded-xl border border-white/5 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 space-y-2">
              {currentProject.optimization.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-300 light:text-slate-700">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 6: The Results */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 light:text-emerald-700 font-bold block">
                Step 06
              </span>
              <h3 className="text-lg font-bold text-white light:text-slate-900">Verified Results</h3>
              <p className="text-xs text-slate-400 light:text-slate-500">Proven business impact</p>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              {currentProject.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-emerald-500/20 light:border-emerald-200 bg-emerald-950/10 light:bg-slate-50 space-y-1"
                >
                  <div className="text-2xl font-extrabold text-emerald-400 light:text-emerald-700">
                    {res.value}
                  </div>
                  <div className="text-xs font-bold text-white light:text-slate-900">{res.label}</div>
                  <p className="text-[11px] text-slate-400 light:text-slate-600">{res.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 7: Key Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 light:text-cyan-700 font-bold block">
                Step 07
              </span>
              <h3 className="text-lg font-bold text-white light:text-slate-900">Key Takeaways</h3>
              <p className="text-xs text-slate-400 light:text-slate-500">What this demonstrates</p>
            </div>
            <div className="md:col-span-9 p-5 rounded-xl border border-cyan-500/20 light:border-cyan-200 bg-cyan-950/10 light:bg-cyan-50/70 text-sm text-slate-200 light:text-slate-800 italic leading-relaxed">
              &ldquo;{currentProject.keyTakeaways}&rdquo;
            </div>
          </div>

          {/* Verified Testimonial */}
          {currentProject.testimonial && (
            <div className="p-6 rounded-2xl border border-emerald-500/30 light:border-emerald-200 bg-black/50 light:bg-slate-50 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 light:text-emerald-700 text-xs font-mono font-bold">
                <Quote className="w-4 h-4" />
                <span>Verified Client Testimonial</span>
              </div>
              <p className="text-sm text-slate-300 light:text-slate-700 italic leading-relaxed">
                &ldquo;{currentProject.testimonial.quote}&rdquo;
              </p>
              <div className="text-xs text-slate-400 light:text-slate-600 font-mono">
                <strong className="text-white light:text-slate-900">{currentProject.testimonial.author}</strong> — {currentProject.testimonial.role}
              </div>
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="pt-8 border-t border-white/10 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white light:text-slate-900">
              Facing similar challenges in {currentProject.industry}?
            </h4>
            <p className="text-xs text-slate-400 light:text-slate-600">
              Let&apos;s apply this exact 7-step blueprint to your campaigns and tracking setup.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number.replace(/[^0-9]/g, "")}?text=Hi%20Mohammad%20Rafe,%20I%20read%20your%20${encodeURIComponent(
                currentProject.name
              )}%20case%20study%20and%20would%20like%20to%20discuss%20a%20similar%20strategy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss This Strategy</span>
            </a>
            <Link
              href="/contact"
              className="px-4 py-2.5 rounded-lg border border-white/10 light:border-slate-300 bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-white light:text-slate-800 text-xs font-semibold transition-all"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
