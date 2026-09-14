"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import { ServiceCard } from "@/components/ServiceCard";
import {
  ArrowRight,
  Filter,
  MessageSquare,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Advertising",
    "Analytics",
    "Advanced Tracking",
    "Growth & Strategy",
  ];

  const filteredServices = servicesData.filter((svc) => {
    const matchesCategory =
      selectedCategory === "All" || svc.category === selectedCategory;
    const matchesSearch =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 sm:py-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          End-to-End Solutions
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Digital Marketing, Analytics & Tracking Services
        </h1>
        <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
          I provide specialized digital marketing and measurement services designed to help businesses advertise better, track accurately and make data-driven decisions.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white light:shadow-sm">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                  : "bg-white/5 light:bg-slate-100 text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/10 light:hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search 11 services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-white/10 light:border-slate-300 bg-white/[0.03] light:bg-slate-50 text-xs text-white light:text-slate-900 placeholder:text-slate-500 light:placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-16 p-8 rounded-2xl border border-white/10 light:border-slate-200 bg-white/[0.02] light:bg-white">
          <p className="text-slate-400 light:text-slate-600 text-sm">
            No services matching &quot;{searchQuery}&quot;. Try adjusting your keywords or category filter.
          </p>
        </div>
      )}

      {/* Custom Solutions CTA Section (Directly from Blueprint Page 7) */}
      <section className="rounded-3xl border border-white/10 light:border-slate-200 bg-gradient-to-r from-[#0c1220] to-[#090d16] light:from-white light:to-slate-50 p-8 sm:p-12 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 light:shadow-sm">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 light:text-emerald-700 font-semibold">
            Bespoke Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
            Every business has different requirements. If you are facing a specific digital marketing, analytics or tracking challenge, I can help identify the right solution and implementation approach.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 hover:bg-emerald-500/20 light:hover:bg-emerald-100 text-emerald-400 light:text-emerald-700 font-semibold text-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Quick Chat</span>
          </a>
        </div>
      </section>
    </div>
  );
}
