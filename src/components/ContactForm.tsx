"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2, Send, MessageSquare, Mail, Phone, Clock, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "google-ads-management",
    budget: "$2,000 - $5,000 / mo",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Fire celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#06b6d4", "#3b82f6", "#ffffff"],
      });
    }, 600);
  };

  const getWhatsAppDirectLink = () => {
    const text = `Hi Mohammad Rafe,%0A%0AMy Name: ${encodeURIComponent(formData.name || "A client")}%0AEmail: ${encodeURIComponent(
      formData.email || "Not specified"
    )}%0AService Needed: ${encodeURIComponent(formData.service)}%0ABudget: ${encodeURIComponent(
      formData.budget
    )}%0AProject Details: ${encodeURIComponent(formData.details || "Inquiry")}`;
    return `https://wa.me/8801700000000?text=${text}`;
  };

  return (
    <div className="rounded-2xl border border-white/10 light:border-slate-200 bg-[#0c1222] light:bg-white p-6 sm:p-10 shadow-2xl light:shadow-xl relative overflow-hidden transition-colors">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 light:bg-emerald-100 text-emerald-400 light:text-emerald-700 border border-emerald-500/30 light:border-emerald-300 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white light:text-slate-900 tracking-tight">
            Thank You, {formData.name || "Friend"}!
          </h3>
          <p className="text-sm text-slate-300 light:text-slate-600 max-w-md mx-auto leading-relaxed">
            Your project inquiry has been received. Mohammad Rafe will review your details and respond within 12–24 business hours at <span className="text-emerald-400 light:text-emerald-700 font-mono font-semibold">{formData.email}</span>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppDirectLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Continue Directly on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  service: "google-ads-management",
                  budget: "$2,000 - $5,000 / mo",
                  details: "",
                });
              }}
              className="px-4 py-2.5 rounded-lg border border-white/10 light:border-slate-300 bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 text-sm"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-white/10 light:border-slate-200 pb-4">
            <h3 className="text-xl font-bold text-white light:text-slate-900 tracking-tight">
              Let&apos;s Make Your Marketing More Measurable
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
              Tell me about your business, your goals and the advertising, analytics or tracking challenge you are facing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider font-mono">
                Your Name <span className="text-emerald-500">*</span>
              </label>
              <input
                id="name"
                required
                type="text"
                placeholder="e.g. Sarah Jenkins"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 light:border-slate-300 bg-white/[0.03] light:bg-slate-50 text-sm text-white light:text-slate-900 placeholder:text-slate-500 light:placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 light:focus:bg-white transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider font-mono">
                Business Email <span className="text-emerald-500">*</span>
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="sarah@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 light:border-slate-300 bg-white/[0.03] light:bg-slate-50 text-sm text-white light:text-slate-900 placeholder:text-slate-500 light:placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 light:focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service Needed */}
            <div className="space-y-1.5">
              <label htmlFor="service" className="text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider font-mono">
                Service Needed <span className="text-emerald-500">*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 light:border-slate-300 bg-[#0e1628] light:bg-white text-sm text-white light:text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              >
                {servicesData.map((svc) => (
                  <option key={svc.slug} value={svc.slug} className="text-slate-900 bg-white dark:bg-[#0e1628] dark:text-white">
                    {svc.number} — {svc.title}
                  </option>
                ))}
                <option value="custom-solution" className="text-slate-900 bg-white dark:bg-[#0e1628] dark:text-white">
                  Custom Full-Stack Growth Audit
                </option>
              </select>
            </div>

            {/* Monthly Budget / Scope */}
            <div className="space-y-1.5">
              <label htmlFor="budget" className="text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider font-mono">
                Estimated Monthly Ad Budget
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 light:border-slate-300 bg-[#0e1628] light:bg-white text-sm text-white light:text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              >
                <option value="Under $1,000 / mo" className="text-slate-900 bg-white dark:bg-[#0e1628] dark:text-white">Under $1,000 / mo</option>
                <option value="$1,000 - $3,000 / mo" className="text-slate-900 bg-white dark:bg-[#0e1628] dark:text-white">$1,000 - $3,000 / mo</option>
                <option value="$3,000 - $10,000 / mo" className="text-slate-900 bg-white dark:bg-[#0e1628] dark:text-white">$3,000 - $10,000 / mo</option>
                <option value="$10,000+ / mo" className="text-slate-900 bg-white dark:bg-[#0e1628] dark:text-white">$10,000+ / mo</option>
                <option value="One-Time Tracking Audit Setup" className="text-slate-900 bg-white dark:bg-[#0e1628] dark:text-white">One-Time Tracking Audit Setup</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-1.5">
            <label htmlFor="details" className="text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider font-mono">
              Project Details & Current Obstacles <span className="text-emerald-500">*</span>
            </label>
            <textarea
              id="details"
              required
              rows={4}
              placeholder="Tell me about your current campaigns, website platform (Shopify, WordPress, Webflow, custom), current tracking issues, or business goals..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 light:border-slate-300 bg-white/[0.03] light:bg-slate-50 text-sm text-white light:text-slate-900 placeholder:text-slate-500 light:placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 light:focus:bg-white transition-all"
            />
          </div>

          {/* Guarantee / Response Time */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 light:text-slate-600 font-mono pt-1">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Fast 12-hour response time</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Direct NDA & Confidentiality Respected</span>
            </div>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Transmitting..." : "Send Message"}</span>
            </button>

            <a
              href={getWhatsAppDirectLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-emerald-500/40 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 hover:bg-emerald-500/20 light:hover:bg-emerald-100 text-emerald-400 light:text-emerald-700 font-semibold text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
