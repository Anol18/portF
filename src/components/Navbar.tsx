"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ThemeToggle } from "./ThemeToggle";
import { Activity, ArrowRight, Menu, X, MessageSquare } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#090d16]/80 backdrop-blur-xl transition-colors light:bg-white/85 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            MR
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
              {siteConfig.domain}
            </span>
            <span className="text-xs text-slate-400 light:text-slate-600 flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Growth & Measurement
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] light:bg-slate-100 p-1.5 rounded-full border border-white/10 light:border-slate-200">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-400 font-semibold light:bg-emerald-600 light:text-white shadow-sm"
                    : "text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-200"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />

          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg border border-white/10 light:border-slate-300 bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-800 hover:text-white light:hover:text-slate-950"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 light:border-slate-200 bg-[#0c1220] light:bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-400 light:bg-emerald-50 light:text-emerald-700 font-semibold"
                      : "text-slate-300 light:text-slate-700 hover:bg-white/5 light:hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 light:border-slate-200 flex flex-col gap-2">
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 text-emerald-400 light:text-emerald-700 font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Discussion</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-sm shadow-md"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
