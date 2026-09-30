"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Anchor,
  ShieldAlert,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "Container Port Haulage",
    originPort: "Port of Chennai (CCTP)",
    destinationPort: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "Container Port Haulage",
        originPort: "Port of Chennai (CCTP)",
        destinationPort: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-12 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold mb-3">
            <span className="text-orange-500">📍</span>
            <span>Port Operations & Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Connect With Our Port Dispatch Team
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-3">
            Reach out for container haulage tariffs, custom house agent brokerage, or port gate pass clearance inquiries.
          </p>
        </div>

        {/* 2-Column Grid: Left Live Chennai Map & Info + Right Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* ================= LEFT COLUMN: LIVE CHENNAI MAP & DISPATCH DESKS ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Live Interactive Map Box Pinned to Chennai Port */}
            <div className="relative rounded-[28px] overflow-hidden border border-neutral-200 shadow-md min-h-[340px] sm:min-h-[380px] w-full bg-neutral-100">
              {/* Google Maps / OpenStreetMap Embed for Chennai Port */}
              <iframe
                title="Sri Ponniamman Trans Chennai Port Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.007675769269!2d80.29294247507857!3d13.098717887228833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f63a23a31c5%3A0xe5a3bb45be43431!2sChennai%20Port%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[340px] sm:min-h-[380px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-neutral-200 text-xs font-semibold text-neutral-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                <span>Chennai Port Container Terminal (Live Hub)</span>
              </div>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs uppercase font-bold text-neutral-400">24/7 Operations Desk</div>
                <div className="text-sm font-bold text-neutral-900 mt-0.5">+91 94440 12345</div>
                <div className="text-xs text-neutral-500">+91 44 2522 0000</div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-3">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs uppercase font-bold text-neutral-400">Direct Inquiries</div>
                <div className="text-sm font-bold text-neutral-900 mt-0.5">ops@sriponniammantrans.com</div>
                <div className="text-xs text-neutral-500">customs@sriponniammantrans.com</div>
              </div>
            </div>

            {/* Address Strip */}
            <div className="p-4 rounded-2xl bg-[#111215] text-white flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-800 flex items-center justify-center text-orange-400 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold block">Sri Ponniamman Trans Port Dispatch</span>
                <span className="text-neutral-400">
                  Port Corridor Road, Rajaji Salai, Chennai Port Terminal, Chennai, Tamil Nadu 600001, India
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTAINER INQUIRY FORM ================= */}
          <div className="lg:col-span-6 bg-[#f8f9fa] rounded-[32px] p-6 sm:p-8 md:p-10 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Book Container Dispatch
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Direct communication with licensed Chennai Port terminal dispatchers.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. R. Sundaram"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sundaram@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                      Company / Exporter Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Goods Ltd"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                      Required Service
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 outline-none focus:border-orange-500 cursor-pointer"
                    >
                      <option>Container Port Haulage</option>
                      <option>Full Container Load (FCL) Ocean Freight</option>
                      <option>Less Container Load (LCL) Consolidation</option>
                      <option>Customs House Brokerage (CHA)</option>
                      <option>CFS Yard Buffering & Stuffing</option>
                      <option>Reefer Cold-Chain Haulage</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                      Origin Port / Yard
                    </label>
                    <input
                      type="text"
                      value={formData.originPort}
                      onChange={(e) => setFormData({ ...formData, originPort: e.target.value })}
                      placeholder="e.g. Chennai Port (CCTP)"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-neutral-600 block mb-1">
                    Destination or Container Specifics
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide container quantity (e.g. 5x 40ft HC), gross tonnage, cargo nature, target delivery dates..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs font-medium text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#ff5c00] hover:bg-[#e04f00] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Port Dispatch Request</span>
                </button>
              </form>

              {isSubmitted && (
                <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    Your inquiry has been logged! Sri Ponniamman Trans dispatch team has assigned an operations coordinator to contact you shortly.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
