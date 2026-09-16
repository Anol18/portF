"use client";

import { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AttributionCalculator() {
  const [monthlySpend, setMonthlySpend] = useState<number>(5000);
  const [avgValue, setAvgValue] = useState<number>(75);
  const [businessType, setBusinessType] = useState<"ecommerce" | "leadgen">("ecommerce");

  // Calculations based on industry benchmarks (iOS 14.5+, ad-blockers, Safari ITP)
  const estimatedConversions = Math.round((monthlySpend * 2.8) / avgValue);
  const lostSignalPercentage = 0.32; // 32% average signal loss in standard client-side tracking
  const lostConversions = Math.round(estimatedConversions * lostSignalPercentage);
  const lostAttributedValue = lostConversions * avgValue;
  const recoveredRevenue = Math.round(lostAttributedValue * 0.88); // 88% recovered via Server-Side CAPI + sGTM
  const algorithmicROASLift = 22; // 22% average ROAS improvement due to better machine learning signals

  return (
    <div className="w-full rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1222] light:bg-white p-6 sm:p-8 relative overflow-hidden shadow-2xl light:shadow-xl transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 light:border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/20 light:border-cyan-300 text-cyan-400 light:text-cyan-700 text-xs font-mono mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Signal Loss & Value Recovery Calculator
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 tracking-tight">
            How Much Revenue Is Your Pixel Losing?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600">
            Estimate how many sales or leads are blocked from your ad algorithms and what server-side tracking can recover.
          </p>
        </div>

        {/* Business Type Selector */}
        <div className="flex items-center gap-1 bg-white/5 light:bg-slate-100 p-1 rounded-xl border border-white/10 light:border-slate-200">
          <button
            onClick={() => setBusinessType("ecommerce")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              businessType === "ecommerce"
                ? "bg-emerald-500 text-slate-950 shadow-sm"
                : "text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900"
            }`}
          >
            eCommerce / Retail
          </button>
          <button
            onClick={() => setBusinessType("leadgen")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              businessType === "leadgen"
                ? "bg-emerald-500 text-slate-950 shadow-sm"
                : "text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900"
            }`}
          >
            B2B / Lead Generation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
        {/* Sliders Form */}
        <div className="lg:col-span-6 space-y-6">
          {/* Monthly Ad Spend */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-300 light:text-slate-700">
                Monthly Ad Spend (Google + Meta):
              </label>
              <span className="text-base font-bold text-emerald-400 light:text-emerald-700 font-mono">
                ${monthlySpend.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 light:bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 light:text-slate-500 font-mono">
              <span>$1,000</span>
              <span>$25,000</span>
              <span>$50,000+</span>
            </div>
          </div>

          {/* Average Order Value / Lead Value */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-300 light:text-slate-700">
                {businessType === "ecommerce" ? "Average Order Value (AOV):" : "Average Deal / Customer Value:"}
              </label>
              <span className="text-base font-bold text-cyan-400 light:text-cyan-700 font-mono">
                ${avgValue.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="1500"
              step="10"
              value={avgValue}
              onChange={(e) => setAvgValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 light:bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 light:text-slate-500 font-mono">
              <span>$20</span>
              <span>$500</span>
              <span>$1,500</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/5 light:border-amber-200 bg-white/[0.02] light:bg-amber-50/60 text-xs text-slate-400 light:text-slate-700 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 light:text-amber-800 font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>The Hidden Problem:</span>
            </div>
            <p className="leading-relaxed">
              Without Server-Side Tracking & CAPI, browser ad-blockers, Safari 7-day cookie limits, and iOS tracking opt-outs silently erase ~30% of your conversions from ad reporting, causing ad algorithms to miscalculate CPA and bid blindly.
            </p>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-6 p-6 rounded-xl border border-emerald-500/30 light:border-emerald-300 bg-gradient-to-br from-emerald-950/30 via-slate-900/60 to-black/80 light:from-emerald-50/70 light:via-white light:to-teal-50/60 space-y-6 shadow-xl light:shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-rose-950/30 light:bg-rose-50 border border-rose-500/20 light:border-rose-200 space-y-1">
              <span className="text-[11px] text-rose-300 light:text-rose-700 uppercase tracking-wider font-mono font-semibold">
                Unrecorded Conversions
              </span>
              <div className="text-2xl font-bold text-rose-400 light:text-rose-700 font-mono">
                ~{lostConversions} / mo
              </div>
              <p className="text-[11px] text-slate-400 light:text-slate-600">
                Missed by standard browser pixel
              </p>
            </div>

            <div className="p-4 rounded-lg bg-emerald-950/30 light:bg-emerald-50 border border-emerald-500/30 light:border-emerald-300 space-y-1">
              <span className="text-[11px] text-emerald-300 light:text-emerald-700 uppercase tracking-wider font-mono font-semibold">
                Recoverable Revenue
              </span>
              <div className="text-2xl font-bold text-emerald-400 light:text-emerald-700 font-mono">
                +${recoveredRevenue.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-400 light:text-slate-600">
                Via Server-Side CAPI attribution
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-cyan-950/20 light:bg-cyan-50 border border-cyan-500/20 light:border-cyan-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-300 light:text-cyan-800 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                Algorithmic Optimization Lift
              </span>
              <span className="text-sm font-bold text-cyan-400 light:text-cyan-700 font-mono">
                +{algorithmicROASLift}% ROAS
              </span>
            </div>
            <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
              When Google and Meta receive high Event Match Quality (8.5+/10), smart bidding learns faster, targeting genuine high-intent buyers rather than low-quality traffic.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number.replace(/[^0-9]/g, "")}?text=Hi%20Mohammad%20Rafe,%20I%20used%20your%20calculator.%20My%20ad%20spend%20is%20$${monthlySpend}/mo%20and%20I'd%20like%20to%20audit%20my%20server-side%20tracking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Audit on WhatsApp</span>
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto py-3 px-4 rounded-lg border border-white/10 light:border-slate-300 bg-white/5 light:bg-white hover:bg-white/10 light:hover:bg-slate-100 text-white light:text-slate-800 font-semibold text-xs text-center transition-colors"
            >
              Request Free Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
