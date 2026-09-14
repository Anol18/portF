import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/ContactForm";
import {
  Mail,
  MessageSquare,
  Clock,
  Target,
  BarChart3,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Mohammad Rafe | Digital Marketing & Tracking Specialist",
  description:
    "Contact Mohammad Rafe to discuss Google Ads, Meta Ads, GA4, GTM, conversion tracking, server-side tracking or digital growth projects.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 text-xs font-mono">
          <Clock className="w-3.5 h-3.5" />
          Fast Response Guaranteed
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Let&apos;s Make Your Marketing More Measurable
        </h1>
        <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
          Tell me about your business, your goals and the advertising, analytics or tracking challenge you are facing. I&apos;ll help identify the right next step for your project. You can contact me by email, WhatsApp or LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Side: Contact Channels & Three Service Highlights */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Channels Card */}
          <div className="p-6 sm:p-7 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white space-y-6 light:shadow-md">
            <h3 className="text-base font-bold text-white light:text-slate-900 uppercase tracking-wider font-mono text-xs">
              Direct Contact Options
            </h3>

            <div className="space-y-3">
              {/* Business Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between p-4 rounded-xl border border-white/10 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 hover:bg-white/[0.06] light:hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 light:bg-emerald-100 text-emerald-500 border border-emerald-500/20 light:border-emerald-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 light:text-slate-500 font-mono">Business Email</span>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 group-hover:text-emerald-500 transition-colors">
                      {siteConfig.email}
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-500 transition-colors" />
              </a>

              {/* WhatsApp */}
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-emerald-500/30 light:border-emerald-300 bg-emerald-950/20 light:bg-emerald-50 hover:bg-emerald-950/30 light:hover:bg-emerald-100/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 light:bg-emerald-100 text-emerald-500 border border-emerald-500/30 light:border-emerald-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 light:text-emerald-700 font-mono font-semibold">Instant Messaging</span>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 group-hover:text-emerald-500 transition-colors">
                      WhatsApp: {siteConfig.whatsapp.display}
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/10 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 hover:bg-white/[0.06] light:hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 light:bg-blue-100 text-blue-500 border border-blue-500/20 light:border-blue-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 light:text-slate-500 font-mono">Professional Network</span>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 group-hover:text-blue-500 transition-colors">
                      Connect on LinkedIn
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Three Service Highlights (Explicitly required by blueprint) */}
          <div className="p-6 sm:p-7 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white space-y-5 light:shadow-md">
            <h3 className="text-base font-bold text-white light:text-slate-900 uppercase tracking-wider font-mono text-xs">
              Three Service Highlights
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 light:bg-emerald-50 text-emerald-500 border border-emerald-500/20 light:border-emerald-200 shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white light:text-slate-900">Advertising</h4>
                  <p className="text-slate-400 light:text-slate-600 leading-relaxed text-xs">
                    Google Ads and Meta Ads campaigns built around leads, sales and customer acquisition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 light:bg-cyan-50 text-cyan-500 border border-cyan-500/20 light:border-cyan-200 shrink-0 mt-0.5">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white light:text-slate-900">Analytics</h4>
                  <p className="text-slate-400 light:text-slate-600 leading-relaxed text-xs">
                    GA4, GTM and reporting systems designed to provide trustworthy marketing data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 light:bg-purple-50 text-purple-500 border border-purple-500/20 light:border-purple-200 shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white light:text-slate-900">Advanced Tracking</h4>
                  <p className="text-slate-400 light:text-slate-600 leading-relaxed text-xs">
                    Meta Conversions API and server-side measurement for stronger event tracking and data quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Assurance */}
          <div className="p-5 rounded-2xl border border-emerald-500/20 light:border-emerald-300 bg-emerald-950/10 light:bg-emerald-50 flex items-center gap-3 text-xs text-slate-300 light:text-slate-700">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>
              All inquiries and ad account access are handled under strict NDA confidentiality.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
