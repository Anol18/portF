import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/servicesData";
import { ArrowUpRight, Mail, MessageSquare, ShieldCheck, CheckCircle, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 light:border-slate-200 bg-[#060a12] light:bg-slate-100 text-slate-400 light:text-slate-600 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-emerald-500/20">
                MR
              </div>
              <span className="font-bold text-xl text-white light:text-slate-900 tracking-tight">
                {siteConfig.domain}
              </span>
            </div>

            <p className="text-sm font-semibold text-emerald-400 light:text-emerald-600 font-mono">
              {siteConfig.tagline}
            </p>

            <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed max-w-md">
              {siteConfig.brandMessage}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 light:text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                4+ Years Hands-on Experience
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                Global & Bangladesh Clients
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 light:text-slate-900 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 light:text-slate-600 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 light:text-slate-900 font-mono">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-slate-400 light:text-slate-600 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors block truncate max-w-[200px]"
                    title={service.title}
                  >
                    {service.number}. {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-emerald-400 light:text-emerald-600 hover:underline text-xs font-semibold"
                >
                  View all 11 services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 light:text-slate-900 font-mono">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 p-2.5 rounded-lg border border-white/10 light:border-slate-200 bg-white/[0.02] light:bg-white hover:bg-white/[0.06] light:hover:bg-slate-50 text-slate-300 light:text-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="truncate">{siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg border border-emerald-500/30 light:border-emerald-300 bg-emerald-500/10 light:bg-emerald-50 hover:bg-emerald-500/20 light:hover:bg-emerald-100 text-emerald-400 light:text-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Discuss on WhatsApp</span>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg border border-blue-500/30 light:border-blue-300 bg-blue-500/10 light:bg-blue-50 hover:bg-blue-500/20 light:hover:bg-blue-100 text-blue-400 light:text-blue-700 transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-blue-500" />
                <span>Connect on LinkedIn</span>
              </a>

              <p className="text-[11px] text-slate-500 light:text-slate-500 pt-1">
                Primary positioning: <br />
                <span className="text-slate-300 light:text-slate-700 font-mono">{siteConfig.positioning}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 light:text-slate-500">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>{siteConfig.primaryTitle}</span>
            <span>•</span>
            <span>{siteConfig.supportingTitle}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
