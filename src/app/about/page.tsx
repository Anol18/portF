import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Globe2,
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Mohammad Rafe | Digital Marketing & Analytics Specialist",
  description:
    "Learn about Mohammad Rafe, a Digital Growth & Measurement Specialist with 4+ years of experience in digital advertising, analytics, conversion tracking and advanced measurement.",
};

export default function AboutPage() {
  const expertiseList = [
    "Google Ads (Search, PMax, Display, YouTube)",
    "Meta Ads (Facebook & Instagram)",
    "Google Analytics 4 (GA4)",
    "Google Tag Manager (GTM)",
    "Conversion Tracking",
    "Meta Pixel & Conversions API (CAPI)",
    "Server-Side Tracking (sGTM)",
    "eCommerce Tracking (Enhanced Measurement)",
    "Remarketing & Retargeting Funnels",
    "Lead Generation Systems",
    "Call Tracking & Offline Conversions",
  ];

  const approachSteps = [
    {
      num: "01",
      title: "Understand",
      desc: "Understand the business model, target audience, competitive landscape, unit economics, customer journey, and growth objectives before spending a single dollar.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Measure",
      desc: "Build bulletproof analytics, custom dataLayer event tracking, and first-party server-side measurement systems to eliminate blind spots.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Optimize",
      desc: "Leverage verified conversion data to test ad creatives, refine audience targeting, adjust smart bidding thresholds, and weed out unprofitable spend.",
      icon: Cpu,
    },
    {
      num: "04",
      title: "Grow",
      desc: "Scale the winning channels systematically and establish a repeatable, high-ROAS digital growth system with total attribution clarity.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="py-16 sm:py-24 space-y-24">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Philosophy
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
            About Mohammad Rafe
          </h1>

          <p className="text-xl text-emerald-400 light:text-emerald-700 font-mono font-medium">
            Digital Growth & Measurement Specialist
          </p>

          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed space-y-5 shadow-xl light:shadow-sm">
            <p>
              I&apos;m <strong className="text-white light:text-slate-900 font-semibold">Mohammad Rafe</strong>, a Digital Growth & Measurement Specialist with <strong className="text-emerald-400 light:text-emerald-700 font-semibold">4+ years of practical experience</strong> helping businesses improve digital advertising, analytics and measurement.
            </p>
            <p>
              My work sits directly at the <strong className="text-white light:text-slate-900 font-semibold">intersection of marketing and technology</strong>. I help businesses run performance-focused advertising campaigns while engineering the analytics and tracking infrastructure needed to understand what is actually driving bottom-line revenue.
            </p>
            <p>
              My experience spans high-intent projects for businesses across diverse verticals in <strong className="text-white light:text-slate-900 font-semibold">Bangladesh and international markets</strong>, through direct client contracts and verified work on leading freelancing platforms.
            </p>
            <div className="pt-2 border-t border-white/10 light:border-slate-200 text-emerald-400 light:text-emerald-700 font-mono text-sm sm:text-base font-semibold">
              &ldquo;My goal is simple: help businesses make better marketing decisions using reliable data.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-700 font-semibold">
              Technical Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
              My Core Expertise
            </h2>
            <p className="text-sm text-slate-400 light:text-slate-600">
              Verified hands-on proficiency across platforms, tracking APIs, and growth mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {expertiseList.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white hover:border-emerald-500/30 light:hover:border-emerald-300 transition-colors flex items-center gap-3 text-sm text-slate-200 light:text-slate-800 light:shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 border border-emerald-500/20 light:border-emerald-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Step Approach (Understand -> Measure -> Optimize -> Grow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-700 font-semibold">
              Systematic Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
              My Approach: Understand → Measure → Optimize → Grow
            </h2>
            <p className="text-sm text-slate-400 light:text-slate-600">
              I believe effective digital marketing starts with the right strategy and reliable data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {approachSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white space-y-3 relative group hover:border-emerald-500/30 light:hover:border-emerald-300 transition-all glow-emerald-card light:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold font-mono text-emerald-400 light:text-emerald-700">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 light:bg-emerald-50 border border-white/10 light:border-emerald-200 flex items-center justify-center text-emerald-400 light:text-emerald-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white light:text-slate-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl border border-white/10 light:border-slate-200 bg-gradient-to-r from-[#0e1628] to-[#0a0f1d] light:from-white light:to-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left light:shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-white light:text-slate-900">Let&apos;s Build a Measurable System</h3>
            <p className="text-sm text-slate-400 light:text-slate-600 mt-1">
              Have a question about your Google Ads, Meta Ads, or GA4/CAPI setup?
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md"
            >
              Discuss Your Project
            </Link>
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 hover:bg-emerald-500/20 light:hover:bg-emerald-100 text-emerald-400 light:text-emerald-700 font-semibold text-sm transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
