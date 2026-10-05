"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  ExternalLink,
  Radio,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-white dark:bg-[#0c0e12] border-y border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-[#161a22] text-neutral-700 dark:text-neutral-300 text-xs font-semibold mb-3 border border-neutral-200 dark:border-neutral-700/80 transition-colors">
            <span className="text-orange-500">📍</span>
            <span>Port Operations & Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight transition-colors">
            Connect With Our Port Dispatch Team
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-3 transition-colors">
            Reach out for 24/7 container haulage tariffs, custom house agent brokerage, or port gate pass clearance inquiries.
          </p>
        </div>

        {/* 2-Column Command Center: Left Live Chennai Map + Right Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ================= LEFT COLUMN: LIVE CHENNAI PORT MAP CARD ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative rounded-[32px] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md h-full min-h-[440px] sm:min-h-[500px] w-full bg-neutral-100 dark:bg-[#161a22] flex flex-col justify-between p-3 transition-colors">
              {/* Google Maps Embed for Chennai Port */}
              <iframe
                title="Sri Ponniamman Trans Chennai Port Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.007675769269!2d80.29294247507857!3d13.098717887228833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f63a23a31c5%3A0xe5a3bb45be43431!2sChennai%20Port%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[420px] rounded-[24px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Top Header Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <div className="bg-white/95 dark:bg-[#12151c]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-900 dark:text-white flex items-center gap-2 pointer-events-auto">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  <span>Chennai Port Marine Terminal (Live Hub)</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Chennai+Port"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 dark:bg-[#12151c]/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors pointer-events-auto"
                  title="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Floating Bottom Telemetry Strip */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#12151c]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 text-[11px] text-neutral-700 dark:text-neutral-300 flex items-center justify-between flex-wrap gap-2 pointer-events-auto">
                <span className="font-mono font-medium">13.0987° N, 80.2929° E</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Gate 1 & 2 Green Channel Active
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: OPERATIONS BENTO GRID ================= */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Bento Card 1: 24/7 Operations Desk (Full Width) */}
            <div className="sm:col-span-2 p-6 rounded-[28px] bg-white dark:bg-[#13161c] border border-neutral-200 dark:border-neutral-800 shadow-md flex flex-col justify-between transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider block">
                      Immediate Dispatch Assistance
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 dark:text-white">
                      24/7 Operations Hotline
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800/60">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>Lines Open</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                <a
                  href="tel:+919444012345"
                  className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 hover:border-orange-500 dark:hover:border-orange-500 transition-colors group block"
                >
                  <div className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Primary Dispatch Desk
                  </div>
                  <div className="text-sm font-extrabold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 mt-0.5">
                    +91 94440 12345
                  </div>
                </a>

                <a
                  href="tel:+914425220000"
                  className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700/80 hover:border-orange-500 dark:hover:border-orange-500 transition-colors group block"
                >
                  <div className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Terminal Switchboard
                  </div>
                  <div className="text-sm font-extrabold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 mt-0.5">
                    +91 44 2522 0000
                  </div>
                </a>
              </div>
            </div>

            {/* Bento Card 2: Direct Email Inquiries */}
            <div className="p-5 rounded-[24px] bg-white dark:bg-[#13161c] border border-neutral-200 dark:border-neutral-800 shadow-md flex flex-col justify-between transition-colors">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">
                  Direct Inquiries
                </div>
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white mt-1">
                  Email Dispatchers
                </h4>
                <div className="mt-3 space-y-1">
                  <a
                    href="mailto:ops@sriponniammantrans.com"
                    className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-orange-600 dark:hover:text-orange-400 block transition-colors truncate"
                  >
                    ops@sriponniammantrans.com
                  </a>
                  <a
                    href="mailto:customs@sriponniammantrans.com"
                    className="text-[11px] text-neutral-500 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 block transition-colors truncate"
                  >
                    customs@sriponniammantrans.com
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[10px] font-medium text-neutral-400 dark:text-neutral-500">
                Guaranteed response &lt; 15 mins
              </div>
            </div>

            {/* Bento Card 3: Port EDI & Customs Node */}
            <div className="p-5 rounded-[24px] bg-white dark:bg-[#13161c] border border-neutral-200 dark:border-neutral-800 shadow-md flex flex-col justify-between transition-colors">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500 tracking-wider">
                  Port EDI Gateway
                </div>
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white mt-1">
                  ICEGATE INMAA1 Node
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                  Automated customs clearing, electronic EIR generation, and priority gate pass approvals.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                Berths 1 to 4 Direct Line
              </div>
            </div>

            {/* Bento Card 4: Sri Ponniamman Trans Location Card (Full Width) */}
            <div className="sm:col-span-2 p-6 rounded-[28px] bg-[#111215] dark:bg-[#161a22] text-white border border-neutral-800 dark:border-neutral-700/80 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider block">
                    Port Dispatch Headquarters
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                    Sri Ponniamman Trans Container Terminal Desk
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 max-w-md leading-relaxed">
                    Port Corridor Terminal Road, Rajaji Salai, Chennai Port, Chennai, Tamil Nadu 600001, India
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      24/7 Round-the-Clock Terminal Operations
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Chennai+Port"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors flex-shrink-0 cursor-pointer"
              >
                <span>Navigate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Bento Card 5: Inland CFS Buffer Yard Depot (Full Width) */}
            <div className="sm:col-span-2 p-5 rounded-[24px] bg-neutral-50 dark:bg-[#13161c] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between flex-wrap gap-4 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-neutral-400 dark:text-neutral-500">
                    Inland Buffer Depot
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                    Sri Ponniamman CFS Yard • Sriperumbudur Hub (NH-48)
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    2,500+ TEU Storage • Gantry Reach Stackers Active • Heavy Crane Escorting
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1a1e27] border border-neutral-200 dark:border-neutral-700 text-[10px] font-bold text-neutral-800 dark:text-neutral-200">
                  CCTV Monitored
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 text-[10px] font-bold">
                  24/7 Gate In/Out
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
