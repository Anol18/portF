"use client";

import { useState } from "react";
import { ServiceItem } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Sparkles,
  Target,
  Share2,
  BarChart3,
  Layers,
  Cpu,
  Server,
  ShoppingCart,
  Repeat,
  TrendingUp,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Target,
  Share2,
  BarChart3,
  Layers,
  Cpu,
  Server,
  CheckCircle2,
  ShoppingCart,
  Repeat,
  TrendingUp,
  PhoneCall,
};

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[service.icon] || Target;

  const whatsappUrl = `https://wa.me/8801700000000?text=${encodeURIComponent(
    service.whatsappMessage || `Hi Mohammad Rafe, I'm interested in your ${service.title} service.`
  )}`;

  return (
    <div
      id={service.slug}
      className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
        featured
          ? "border-emerald-500/40 light:border-emerald-300 bg-gradient-to-b from-[#0e1628] to-[#090d16] light:from-white light:to-slate-50 shadow-xl light:shadow-md glow-emerald-card"
          : "border-white/10 light:border-slate-200 bg-[#0c1220]/70 light:bg-white hover:border-white/20 light:hover:border-emerald-400 light:shadow-sm glow-cyan-card"
      } p-6 sm:p-7 relative group`}
    >
      <div>
        {/* Header with Number & Category */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-400 light:text-emerald-700 px-2 py-0.5 rounded bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/20 light:border-emerald-300">
              {service.number}
            </span>
            <span className="text-xs font-medium text-slate-400 light:text-slate-600 bg-white/5 light:bg-slate-100 px-2 py-0.5 rounded">
              {service.category}
            </span>
          </div>

          <div className="w-10 h-10 rounded-xl bg-white/5 light:bg-emerald-50 border border-white/10 light:border-emerald-200 flex items-center justify-center text-emerald-400 light:text-emerald-600 group-hover:scale-110 transition-transform">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2 tracking-tight group-hover:text-emerald-300 light:group-hover:text-emerald-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Core Capabilities / Features (from Blueprint) */}
        <div className="space-y-2 mb-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 light:text-slate-700 font-mono flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-400 light:text-emerald-600" />
            Key Specializations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
            {(expanded ? service.features : service.features.slice(0, 6)).map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-1.5 text-xs text-slate-300 light:text-slate-700 leading-tight"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Deliverables & KPIs */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-white/10 light:border-slate-200 space-y-4 animate-in fade-in duration-300">
            <div>
              <h5 className="text-xs font-bold text-slate-200 light:text-slate-900 uppercase tracking-wider font-mono mb-2">
                What You Get (Deliverables):
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-400 light:text-slate-600">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 light:text-emerald-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold text-slate-200 light:text-slate-900 uppercase tracking-wider font-mono mb-2">
                Target Metrics & KPIs:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {service.kpis.map((kpi, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 light:bg-cyan-50 text-cyan-300 light:text-cyan-800 border border-cyan-500/20 light:border-cyan-200"
                  >
                    {kpi}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-5 border-t border-white/10 light:border-slate-100 mt-5 flex items-center justify-between gap-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-mono text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>{expanded ? "Show Less" : "View Deliverables"}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 light:bg-emerald-50 hover:bg-emerald-500/20 light:hover:bg-emerald-100 text-emerald-400 light:text-emerald-700 border border-emerald-500/30 light:border-emerald-300 transition-colors shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Discuss on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
