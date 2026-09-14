import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";
import { testimonialsData } from "@/data/testimonialsData";
import { TrackingFlowSimulator } from "@/components/TrackingFlowSimulator";
import { AttributionCalculator } from "@/components/AttributionCalculator";
import { ProjectCard } from "@/components/ProjectCard";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  Globe2,
  Award,
  Clock,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 lg:pt-32 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-transparent light:from-emerald-500/10 light:via-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 text-xs sm:text-sm font-mono tracking-wide shadow-lg shadow-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{siteConfig.positioning}</span>
            </div>

            {/* Main Headline & H1 */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.1] sm:leading-[1.1]">
                Grow Smarter. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 light:from-emerald-600 light:via-teal-600 light:to-cyan-600">
                  Measure Better.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-400 light:text-emerald-700 font-mono">
                {siteConfig.name} — {siteConfig.primaryTitle}
              </p>
            </div>

            {/* Core Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 max-w-2xl mx-auto leading-relaxed">
              I help businesses turn digital marketing data into measurable growth with{" "}
              <strong className="text-white light:text-slate-900 font-semibold">Google Ads, Meta Ads, GA4, Google Tag Manager,</strong>{" "}
              and <strong className="text-white light:text-slate-900 font-semibold">Server-Side Tracking (CAPI)</strong>.
            </p>

            {/* Experience & Market Credibility */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 light:text-slate-600 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-500" />
                4+ Years Hands-on Experience
              </span>
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-cyan-500" />
                Bangladesh & Global Markets
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                Verified Track Record
              </span>
            </div>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 light:border-slate-300 bg-white/5 light:bg-white text-white light:text-slate-800 hover:bg-white/10 light:hover:bg-slate-100 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 cursor-pointer light:shadow-sm"
              >
                <span>Let&apos;s Work Together</span>
              </Link>

              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 hover:bg-emerald-500/20 light:hover:bg-emerald-100 text-emerald-400 light:text-emerald-700 font-semibold text-base transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Standout Interactive Feature 1: Server-Side Pipeline Visualizer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrackingFlowSimulator />
      </section>

      {/* Section: What I Do (3 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-600 font-semibold">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            What I Do
          </h2>
          <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
            A specialized blend of performance advertising strategy and technical tracking engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Digital Marketing */}
          <div className="p-8 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white hover:border-emerald-500/30 light:hover:border-emerald-400 transition-all duration-300 space-y-4 glow-emerald-card flex flex-col justify-between light:shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/20 light:border-emerald-200 flex items-center justify-center text-emerald-400 light:text-emerald-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white light:text-slate-900">Digital Marketing</h3>
              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Performance-focused Google Ads and Meta Ads campaigns designed to generate relevant traffic, qualified leads, sales and sustainable customer acquisition.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 light:border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-400 light:text-emerald-700 font-semibold">
              <span>Google & Meta Ads</span>
              <Link href="/services#google-ads-management" className="hover:underline flex items-center gap-1">
                Details →
              </Link>
            </div>
          </div>

          {/* Pillar 2: Analytics & Measurement */}
          <div className="p-8 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white hover:border-cyan-500/30 light:hover:border-cyan-400 transition-all duration-300 space-y-4 glow-cyan-card flex flex-col justify-between light:shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/20 light:border-cyan-200 flex items-center justify-center text-cyan-400 light:text-cyan-600">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white light:text-slate-900">Analytics & Measurement</h3>
              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                GA4 and Google Tag Manager implementations that help businesses understand user behavior, conversions, eCommerce activity and marketing performance.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 light:border-slate-100 flex items-center justify-between text-xs font-mono text-cyan-400 light:text-cyan-700 font-semibold">
              <span>GA4 & GTM Architect</span>
              <Link href="/services#google-analytics-4" className="hover:underline flex items-center gap-1">
                Details →
              </Link>
            </div>
          </div>

          {/* Pillar 3: Advanced Tracking */}
          <div className="p-8 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white hover:border-purple-500/30 light:hover:border-purple-400 transition-all duration-300 space-y-4 glow-emerald-card flex flex-col justify-between light:shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 light:bg-purple-50 border border-purple-500/20 light:border-purple-200 flex items-center justify-center text-purple-400 light:text-purple-600">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white light:text-slate-900">Advanced Tracking</h3>
              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Meta Pixel, Conversions API and server-side tracking solutions designed to improve data quality, event reliability and advertising measurement.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 light:border-slate-100 flex items-center justify-between text-xs font-mono text-purple-400 light:text-purple-700 font-semibold">
              <span>Server-Side CAPI</span>
              <Link href="/services#server-side-tracking" className="hover:underline flex items-center gap-1">
                Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: From Click to Customer (The Proven Workflow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 light:border-slate-200 bg-gradient-to-b from-[#0e1628] to-[#090d16] light:from-white light:to-slate-50 p-8 sm:p-12 relative overflow-hidden light:shadow-sm">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-600 font-semibold">
              The Growth Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              From Click to Customer
            </h2>
            <p className="text-base text-slate-300 light:text-slate-600 leading-relaxed">
              I help businesses understand what happens across the digital customer journey—from the first ad interaction to the final conversion—and use reliable data to improve performance.
            </p>
          </div>

          {/* 5-Step Process Horizontal Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {[
              {
                step: "01",
                title: "Advertise",
                desc: "High-intent Google Search & targeted Meta Ads capture active demand.",
                tag: "Acquisition",
              },
              {
                step: "02",
                title: "Track",
                desc: "Server-side GTM, CAPI & GA4 ensure 100% of signals are recorded.",
                tag: "Fidelity",
              },
              {
                step: "03",
                title: "Analyze",
                desc: "Isolate drop-offs, evaluate channel ROAS, and audit lead quality.",
                tag: "Insight",
              },
              {
                step: "04",
                title: "Optimize",
                desc: "A/B test creatives, refine bids, and eliminate wasted ad spend.",
                tag: "Refinement",
              },
              {
                step: "05",
                title: "Grow",
                desc: "Scale winning campaigns predictably with high algorithmic trust.",
                tag: "Scale",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/10 light:border-slate-200 bg-black/40 light:bg-white space-y-3 flex flex-col justify-between light:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold font-mono text-emerald-400 light:text-emerald-600">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 light:bg-slate-100 text-slate-400 light:text-slate-600">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white light:text-slate-900 mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standout Interactive Feature 2: Attribution Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AttributionCalculator />
      </section>

      {/* Section: Why Work With Me? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-600 font-semibold">
              The Strategic Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight">
              Why Work With Me?
            </h2>
            <p className="text-slate-300 light:text-slate-600 leading-relaxed text-sm sm:text-base">
              Most agencies either manage ads without understanding the tracking code, or configure tracking without understanding business growth. I combine both.
            </p>

            <div className="p-5 rounded-2xl border border-emerald-500/20 light:border-emerald-300 bg-emerald-950/20 light:bg-emerald-50 space-y-2 font-mono text-xs">
              <div className="text-emerald-400 light:text-emerald-700 font-bold">Brand Philosophy:</div>
              <p className="text-slate-300 light:text-slate-700 italic">
                &ldquo;Marketing gets attention. Measurement shows what matters. Growth comes from improving what works.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white space-y-2 light:shadow-sm">
              <div className="text-emerald-400 light:text-emerald-600 font-mono font-bold text-xs uppercase">
                01 — 4+ Years Experience
              </div>
              <h4 className="text-base font-bold text-white light:text-slate-900">Practical & Hands-on</h4>
              <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                Hands-on technical experience across digital marketing campaigns, conversion tracking, and advanced server-side measurement.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white space-y-2 light:shadow-sm">
              <div className="text-cyan-400 light:text-cyan-600 font-mono font-bold text-xs uppercase">
                02 — Global Client Experience
              </div>
              <h4 className="text-base font-bold text-white light:text-slate-900">Cross-Border Execution</h4>
              <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                Worked with businesses in Bangladesh and international markets through direct client engagements and freelance platforms.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white space-y-2 light:shadow-sm">
              <div className="text-emerald-400 light:text-emerald-600 font-mono font-bold text-xs uppercase">
                03 — Data-Driven Approach
              </div>
              <h4 className="text-base font-bold text-white light:text-slate-900">Focus on Business Outcomes</h4>
              <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                I focus on verifiable revenue, qualified candidate leads, and sustainable CPA, not just vanity clicks and impressions.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white space-y-2 light:shadow-sm">
              <div className="text-purple-400 light:text-purple-600 font-mono font-bold text-xs uppercase">
                04 — Marketing + Technology
              </div>
              <h4 className="text-base font-bold text-white light:text-slate-900">Full-Stack Synergies</h4>
              <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                Combining performance advertising strategy with deep analytics and server-side tracking to build resilient growth engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-600 font-semibold">
              Verified Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              Featured Client Results
            </h2>
            <p className="text-sm sm:text-base text-slate-400 light:text-slate-600">
              Explore selected digital marketing, analytics and tracking projects with verified business outcomes.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 light:text-emerald-600 hover:text-emerald-300 light:hover:text-emerald-700"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-600 font-semibold">
            Social Proof
          </span>
          <h2 className="text-3xl font-extrabold text-white light:text-slate-900">Client Feedback & Results</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white flex flex-col justify-between space-y-4 light:shadow-sm"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 light:bg-emerald-50 text-emerald-300 light:text-emerald-700 border border-emerald-500/20 light:border-emerald-200">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.highlightMetric}</span>
                </div>
                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 light:border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white light:text-slate-900">{item.author}</h4>
                  <p className="text-xs text-slate-400 light:text-slate-500">{item.role}, {item.company}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 light:text-slate-400">{item.project}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Homepage CTA Section (Matching Blueprint) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-black light:from-slate-900 light:via-slate-950 light:to-[#052e24] p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden text-white">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Make Your Marketing More Measurable?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Let&apos;s discuss your goals, advertising needs, analytics setup or tracking challenge. I will help identify the exact next step for your digital growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-base transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
