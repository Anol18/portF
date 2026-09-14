"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Zap, Server, Monitor, ArrowRight, Play, RefreshCw, Cpu, Layers } from "lucide-react";

interface SimulationEvent {
  id: string;
  eventName: string;
  timestamp: string;
  clientBlocked: boolean;
  serverReceived: boolean;
  emqScore: string;
  deduped: boolean;
}

export function TrackingFlowSimulator() {
  const [activeEvent, setActiveEvent] = useState<"page_view" | "view_item" | "add_to_cart" | "purchase">("purchase");
  const [adBlockerActive, setAdBlockerActive] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [eventsLog, setEventsLog] = useState<SimulationEvent[]>([
    {
      id: "evt_98321",
      eventName: "purchase",
      timestamp: "12:04:15",
      clientBlocked: true,
      serverReceived: true,
      emqScore: "8.9/10",
      deduped: true,
    },
    {
      id: "evt_98320",
      eventName: "add_to_cart",
      timestamp: "12:02:40",
      clientBlocked: true,
      serverReceived: true,
      emqScore: "9.1/10",
      deduped: true,
    },
  ]);

  const triggerEvent = (type: "page_view" | "view_item" | "add_to_cart" | "purchase") => {
    setActiveEvent(type);
    setIsRunning(true);

    setTimeout(() => {
      const newEvt: SimulationEvent = {
        id: `evt_${Math.floor(10000 + Math.random() * 90000)}`,
        eventName: type,
        timestamp: new Date().toLocaleTimeString(),
        clientBlocked: adBlockerActive,
        serverReceived: true,
        emqScore: type === "purchase" ? "8.9/10" : "9.2/10",
        deduped: true,
      };

      setEventsLog((prev) => [newEvt, ...prev.slice(0, 4)]);
      setIsRunning(false);
    }, 600);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 light:border-slate-200 bg-[#0a0f1d] light:bg-white p-6 sm:p-8 relative overflow-hidden shadow-2xl light:shadow-xl transition-colors">
      {/* Background Accent Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 light:border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/20 light:border-emerald-300 text-emerald-400 light:text-emerald-700 text-xs font-mono mb-2">
            <Cpu className="w-3.5 h-3.5" />
            Interactive Measurement Simulator
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 tracking-tight">
            Server-Side GTM & Meta CAPI Data Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600">
            See how server-side tracking protects conversion signals from browser ad-blockers and iOS privacy drop-offs.
          </p>
        </div>

        {/* Ad Blocker Simulation Toggle */}
        <div className="flex items-center gap-3 bg-white/5 light:bg-slate-100 p-2 rounded-xl border border-white/10 light:border-slate-200">
          <span className="text-xs text-slate-300 light:text-slate-700 font-medium">Browser Ad-Blocker / iOS 14.5+:</span>
          <button
            onClick={() => setAdBlockerActive(!adBlockerActive)}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              adBlockerActive
                ? "bg-rose-500/20 text-rose-300 light:bg-rose-100 light:text-rose-700 border border-rose-500/30 light:border-rose-300"
                : "bg-emerald-500/20 text-emerald-300 light:bg-emerald-100 light:text-emerald-700 border border-emerald-500/30 light:border-emerald-300"
            }`}
          >
            {adBlockerActive ? "ENABLED (Blocks 3rd Party)" : "DISABLED"}
          </button>
        </div>
      </div>

      {/* Pipeline Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 relative">
        {/* Node 1: Client Browser */}
        <div className="p-5 rounded-xl border border-white/10 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 light:text-blue-600 border border-blue-500/20 light:border-blue-200">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 light:text-slate-500 font-mono">STEP 01</span>
                <h4 className="text-sm font-bold text-white light:text-slate-900">Client Browser</h4>
              </div>
            </div>
            {adBlockerActive ? (
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 light:bg-rose-100 light:text-rose-700 font-mono">
                Script Blocked
              </span>
            ) : (
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 light:bg-emerald-100 light:text-emerald-700 font-mono">
                Passing Pixel
              </span>
            )}
          </div>

          <div className="space-y-1.5 text-xs text-slate-400 light:text-slate-600 font-mono bg-black/40 light:bg-white p-3 rounded-lg border border-white/5 light:border-slate-200">
            <div className="text-slate-300 light:text-slate-800 font-semibold">event: &quot;{activeEvent}&quot;</div>
            <div className="text-[11px] text-slate-500 light:text-slate-500">client_user_agent: Mobile Safari (iOS)</div>
            <div className="text-[11px] text-slate-500 light:text-slate-500">event_id: &quot;{eventsLog[0]?.id || "evt_73819"}&quot;</div>
          </div>

          <div className="text-[11px] text-slate-400 light:text-slate-600">
            {adBlockerActive ? (
              <span className="text-rose-400 light:text-rose-600 font-medium">
                ⚠️ Direct browser pixel call fails due to ad-blockers / Safari ITP.
              </span>
            ) : (
              <span className="text-emerald-400 light:text-emerald-600 font-medium">✓ Browser pixel firing normally.</span>
            )}
          </div>
        </div>

        {/* Node 2: Server-Side GTM Container */}
        <div className="p-5 rounded-xl border border-emerald-500/30 light:border-emerald-300 bg-emerald-950/10 light:bg-emerald-50/60 flex flex-col justify-between space-y-4 shadow-lg shadow-emerald-950/30 light:shadow-emerald-500/5 relative">
          <div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] font-bold text-slate-950 uppercase tracking-wider">
            First-Party Cloud Hub
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 light:text-emerald-600 border border-emerald-500/30 light:border-emerald-200">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-emerald-400 light:text-emerald-700 font-mono">STEP 02</span>
                <h4 className="text-sm font-bold text-white light:text-slate-900">sGTM First-Party Server</h4>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 light:bg-emerald-100 light:text-emerald-700 font-mono">
              data.domain.com
            </span>
          </div>

          <div className="space-y-1.5 text-xs text-slate-300 light:text-slate-800 font-mono bg-black/50 light:bg-white p-3 rounded-lg border border-emerald-500/20 light:border-emerald-200">
            <div className="flex items-center justify-between text-emerald-400 light:text-emerald-700">
              <span>SHA-256 Hashing:</span>
              <span>Active ✓</span>
            </div>
            <div className="flex items-center justify-between text-cyan-400 light:text-cyan-700">
              <span>Cookie Extended:</span>
              <span>730 Days</span>
            </div>
            <div className="flex items-center justify-between text-emerald-400 light:text-emerald-700">
              <span>Event Deduplication:</span>
              <span>Verified ✓</span>
            </div>
          </div>

          <div className="text-[11px] text-emerald-300 light:text-emerald-800 font-medium">
            🛡️ Bypasses browser blocking via first-party DNS routing & sanitizes PII.
          </div>
        </div>

        {/* Node 3: Advertising & Analytics Endpoints */}
        <div className="p-5 rounded-xl border border-white/10 light:border-slate-200 bg-white/[0.02] light:bg-slate-50 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 light:text-cyan-600 border border-cyan-500/20 light:border-cyan-200">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 light:text-slate-500 font-mono">STEP 03</span>
                <h4 className="text-sm font-bold text-white light:text-slate-900">Conversion APIs</h4>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 light:bg-cyan-100 light:text-cyan-700 font-mono">
              EMQ 8.9 / 10
            </span>
          </div>

          <div className="space-y-1.5 text-xs font-mono bg-black/40 light:bg-white p-3 rounded-lg border border-white/5 light:border-slate-200">
            <div className="flex items-center justify-between text-slate-300 light:text-slate-800">
              <span>Meta Conversions API:</span>
              <span className="text-emerald-400 light:text-emerald-600 font-semibold">200 OK</span>
            </div>
            <div className="flex items-center justify-between text-slate-300 light:text-slate-800">
              <span>Google Enhanced Conv:</span>
              <span className="text-emerald-400 light:text-emerald-600 font-semibold">Synced</span>
            </div>
            <div className="flex items-center justify-between text-slate-300 light:text-slate-800">
              <span>GA4 Server-Side:</span>
              <span className="text-emerald-400 light:text-emerald-600 font-semibold">Recorded</span>
            </div>
          </div>

          <div className="text-[11px] text-cyan-400 light:text-cyan-700 font-medium">
            🎯 Algorithms receive clean conversion signals to train smart bidding.
          </div>
        </div>
      </div>

      {/* Interactive Trigger Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 light:border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 light:text-slate-600 font-mono">Test Events:</span>
          {(["purchase", "add_to_cart", "view_item", "page_view"] as const).map((evt) => (
            <button
              key={evt}
              onClick={() => triggerEvent(evt)}
              disabled={isRunning}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeEvent === evt
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                  : "bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:bg-white/10 light:hover:bg-slate-200 border border-white/5 light:border-slate-200"
              }`}
            >
              {evt}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 light:text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Live Event Stream Ready
          </span>
        </div>
      </div>

      {/* Real-time Telemetry Stream Log */}
      <div className="mt-6 pt-4 border-t border-white/10 light:border-slate-200">
        <div className="text-xs font-mono text-slate-400 light:text-slate-600 mb-2 flex items-center justify-between">
          <span>Processed Conversion Telemetry Stream</span>
          <span className="text-[11px] text-emerald-400 light:text-emerald-700 font-semibold">100% Attribution Fidelity</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {eventsLog.map((log) => (
            <div
              key={log.id}
              className="p-3 rounded-lg border border-white/10 light:border-slate-200 bg-black/40 light:bg-slate-50 text-xs font-mono space-y-1"
            >
              <div className="flex items-center justify-between text-slate-400 light:text-slate-600">
                <span className="text-emerald-400 light:text-emerald-700 font-bold">{log.eventName}</span>
                <span className="text-[10px] text-slate-500 light:text-slate-500">{log.timestamp}</span>
              </div>
              <div className="text-[11px] text-slate-400 light:text-slate-600 flex items-center justify-between">
                <span>Signal Status:</span>
                <span className="text-emerald-400 light:text-emerald-700 font-semibold">Server-Captured</span>
              </div>
              <div className="text-[11px] text-slate-400 light:text-slate-600 flex items-center justify-between">
                <span>Match Quality:</span>
                <span className="text-cyan-400 light:text-cyan-700 font-bold">{log.emqScore}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
